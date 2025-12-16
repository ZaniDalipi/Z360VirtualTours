import Link from 'next/link';
import {
  Home,
  Building2,
  MapPin,
  Hotel,
  GraduationCap,
  Heart,
  Car,
  Landmark,
  ArrowRight,
} from 'lucide-react';
import { getCategories } from '@/lib/db';
import { Category } from '@/lib/db/schema';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  MapPin,
  Hotel,
  GraduationCap,
  Heart,
  Car,
  Landmark,
};

interface CategoriesSectionProps {
  categories?: Category[];
}

export default async function CategoriesSection({ categories }: CategoriesSectionProps) {
  const categoriesData = categories || await getCategories({ active: true });

  return (
    <section className="py-24 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wide mb-4">
            Industries We Serve
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Virtual tours for every industry
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            From real estate to hospitality, we create immersive experiences for all businesses.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categoriesData.map((category) => {
            const Icon = iconMap[category.icon] || Building2;

            return (
              <Link
                key={category.id}
                href={`/portfolio?category=${category.slug}`}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-medium text-center">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-white/50 mb-6">
            Don&apos;t see your industry? We work with all types of businesses.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-white/90 px-8 py-4 rounded-full font-semibold transition-all"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
