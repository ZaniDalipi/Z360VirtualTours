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
import { getCategories, getTours } from '@/lib/db';
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
  const allTours = await getTours({ published: true });

  // Count tours per category
  const tourCounts = categoriesData.map((category) => ({
    ...category,
    tourCount: allTours.filter((t) => t.categoryId === category.id).length,
  }));

  return (
    <section className="section bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00D4FF] font-semibold text-sm uppercase tracking-wider mb-2 block">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Virtual Tours for Every Industry
          </h2>
          <p className="text-slate-400 text-lg">
            From real estate to hospitality, education to healthcare - we create immersive
            360° experiences tailored to your industry needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tourCounts.map((category) => {
            const Icon = iconMap[category.icon] || Building2;

            return (
              <Link
                key={category.id}
                href={`/portfolio?category=${category.slug}`}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-[#0066FF]/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                  {category.name}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {category.description}
                </p>

                {/* Tour Count & Arrow */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    {category.tourCount} {category.tourCount === 1 ? 'Tour' : 'Tours'}
                  </span>
                  <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-[#0066FF] group-hover:translate-x-1 transition-all" />
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0066FF]/0 to-[#00D4FF]/0 group-hover:from-[#0066FF]/10 group-hover:to-[#00D4FF]/5 transition-all pointer-events-none" />
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">
            Don&apos;t see your industry? We work with businesses of all types.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
