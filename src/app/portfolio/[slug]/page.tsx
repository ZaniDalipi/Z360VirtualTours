import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  MapPin,
  Eye,
  Share2,
  Heart,
  ExternalLink,
  Calendar,
  Tag,
  Building2,
  Globe,
} from 'lucide-react';
import TourEmbed from '@/components/tours/TourEmbed';
import TourCard from '@/components/tours/TourCard';
import { getTourBySlug, getTours, getCategoryById, incrementTourViews } from '@/lib/db';
import { formatDate, generateMetaDescription } from '@/lib/utils';

interface TourPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);

  if (!tour) {
    return {
      title: 'Tour Not Found',
    };
  }

  return {
    title: tour.title,
    description: generateMetaDescription(tour),
    openGraph: {
      title: `${tour.title} | Z360 Virtual Tours`,
      description: tour.shortDescription,
      images: [tour.thumbnailUrl],
    },
  };
}

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);

  if (!tour || !tour.isPublished) {
    notFound();
  }

  // Increment view count
  await incrementTourViews(tour.id);

  const category = await getCategoryById(tour.categoryId);
  const relatedTours = (await getTours({ categoryId: tour.categoryId, published: true }))
    .filter(t => t.id !== tour.id)
    .slice(0, 3);

  const platformLabels: Record<string, string> = {
    matterport: 'Matterport',
    cloudpano: 'CloudPano',
    '3dvista': '3DVista',
    kuula: 'Kuula',
    panoee: 'Panoee',
    teliportme: 'TeliportMe',
    custom: 'Custom Tour',
    iframe: 'External Tour',
  };

  return (
    <div className="pt-24 pb-16">
      {/* Back Link */}
      <div className="container mx-auto px-4 mb-6">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-[#0066FF] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>
      </div>

      {/* Tour Embed */}
      <div className="container mx-auto px-4 mb-12">
        <TourEmbed tour={tour} className="aspect-[16/9] lg:aspect-[21/9]" />
      </div>

      {/* Tour Info */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {category && (
                  <Link
                    href={`/portfolio?category=${category.slug}`}
                    className="badge badge-primary"
                  >
                    {category.name}
                  </Link>
                )}
                <span className="badge badge-outline">
                  {platformLabels[tour.embedType]}
                </span>
                {tour.isFeatured && (
                  <span className="badge bg-[#FF6B00] text-white">Featured</span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {tour.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-slate-500">
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {tour.location.city}, {tour.location.state}, {tour.location.country}
                </span>
                <span className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  {tour.views.toLocaleString()} views
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {formatDate(tour.createdAt)}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-lg text-slate-600 leading-relaxed">
                {tour.description}
              </p>
            </div>

            {/* Features */}
            {tour.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Features</h2>
                <div className="flex flex-wrap gap-2">
                  {tour.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-slate-100 rounded-lg text-slate-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {tour.tags.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  {tour.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/portfolio?search=${tag}`}
                      className="px-3 py-1.5 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-sm hover:bg-[#0066FF]/20 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Actions Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Share This Tour</h3>
                <div className="flex gap-3">
                  <button className="flex-1 btn btn-outline text-sm py-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <button className="flex-1 btn btn-outline text-sm py-2">
                    <Heart className="w-4 h-4" />
                    Save
                  </button>
                </div>
                <a
                  href={tour.embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn btn-primary mt-4"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Full Tour
                </a>
              </div>

              {/* Client Card */}
              {tour.client && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6">
                  <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Client
                  </h3>
                  <p className="text-slate-700 font-medium mb-2">{tour.client.name}</p>
                  {tour.client.website && (
                    <a
                      href={tour.client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0066FF] hover:underline flex items-center gap-1 text-sm"
                    >
                      <Globe className="w-4 h-4" />
                      Visit Website
                    </a>
                  )}
                </div>
              )}

              {/* Location Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Location
                </h3>
                <address className="text-slate-600 not-italic">
                  {tour.location.address && <p>{tour.location.address}</p>}
                  <p>
                    {tour.location.city}, {tour.location.state}
                  </p>
                  <p>{tour.location.country}</p>
                </address>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-[#0066FF] to-[#0052CC] rounded-2xl p-6 text-white">
                <h3 className="font-semibold text-xl mb-2">Need a Virtual Tour?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Let us create an immersive 360° experience for your space.
                </p>
                <Link href="/contact" className="btn bg-white text-[#0066FF] w-full">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tours */}
        {relatedTours.length > 0 && (
          <div className="mt-16 pt-16 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Related Tours</h2>
              <Link
                href={`/portfolio?category=${category?.slug}`}
                className="text-[#0066FF] font-medium hover:underline"
              >
                View All
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedTours.map((relatedTour) => (
                <TourCard key={relatedTour.id} tour={relatedTour} category={category || undefined} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
