'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Eye, MapPin, Play, ArrowRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tour, Category } from '@/lib/db/schema';

interface TourCardProps {
  tour: Tour;
  category?: Category;
  variant?: 'default' | 'featured' | 'compact';
}

const platformBadges: Record<string, { label: string; color: string }> = {
  matterport: { label: 'Matterport', color: 'bg-pink-500' },
  cloudpano: { label: 'CloudPano', color: 'bg-blue-500' },
  '3dvista': { label: '3DVista', color: 'bg-purple-500' },
  kuula: { label: 'Kuula', color: 'bg-green-500' },
  panoee: { label: 'Panoee', color: 'bg-orange-500' },
  teliportme: { label: 'TeliportMe', color: 'bg-cyan-500' },
  custom: { label: 'Custom', color: 'bg-slate-500' },
  iframe: { label: 'External', color: 'bg-slate-500' },
};

export default function TourCard({ tour, category, variant = 'default' }: TourCardProps) {
  const platformInfo = platformBadges[tour.embedType] || platformBadges.custom;

  if (variant === 'compact') {
    return (
      <Link
        href={`/portfolio/${tour.slug}`}
        className="group flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-200 hover:border-[#0066FF]/30 hover:shadow-lg transition-all"
      >
        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-6 h-6 text-slate-400" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-slate-900 truncate group-hover:text-[#0066FF] transition-colors">
            {tour.title}
          </h4>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {tour.location.city}, {tour.location.state}
          </p>
        </div>
        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#0066FF] group-hover:translate-x-1 transition-all" />
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link
        href={`/portfolio/${tour.slug}`}
        className="group relative block rounded-2xl overflow-hidden bg-slate-900 aspect-[4/3] lg:aspect-[16/9]"
      >
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0066FF] transition-all">
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className={cn('badge text-white text-xs', platformInfo.color)}>
              {platformInfo.label}
            </span>
            {tour.isFeatured && (
              <span className="badge bg-[#FF6B00] text-white text-xs flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                Featured
              </span>
            )}
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
            {tour.title}
          </h3>
          <p className="text-white/70 mb-4 line-clamp-2 max-w-2xl">
            {tour.shortDescription}
          </p>
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {tour.location.city}, {tour.location.state}
            </span>
            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              {tour.views.toLocaleString()} views
            </span>
            {category && (
              <span className="hidden lg:block px-3 py-1 rounded-full bg-white/10">
                {category.name}
              </span>
            )}
          </div>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link
      href={`/portfolio/${tour.slug}`}
      className="group card overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0066FF] transition-all">
            <Play className="w-6 h-6 text-slate-600 group-hover:text-white fill-current ml-0.5" />
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className={cn('badge text-white text-xs', platformInfo.color)}>
            {platformInfo.label}
          </span>
          {tour.isFeatured && (
            <span className="badge bg-[#FF6B00] text-white text-xs">
              <Star className="w-3 h-3 fill-current" />
            </span>
          )}
        </div>

        {/* Views Badge */}
        <div className="absolute bottom-3 right-3">
          <span className="badge bg-black/50 backdrop-blur-sm text-white text-xs flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {tour.views.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
          <MapPin className="w-4 h-4" />
          <span>{tour.location.city}, {tour.location.state}</span>
        </div>
        <h3 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-[#0066FF] transition-colors line-clamp-1">
          {tour.title}
        </h3>
        <p className="text-slate-600 text-sm line-clamp-2 mb-4">
          {tour.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {tour.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[#0066FF] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            View Tour
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
