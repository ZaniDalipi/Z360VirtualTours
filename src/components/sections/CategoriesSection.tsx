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
    <section className="py-40 lg:py-56 bg-slate-900 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#0066FF]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-24 lg:mb-32">
          <span className="inline-block text-[#00D4FF] font-semibold text-sm uppercase tracking-widest mb-8">
            Industries We Serve
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight">
            Virtual Tours for Every Industry
          </h2>
          <p className="text-white/70 text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto">
            From real estate to hospitality, education to healthcare - we create immersive
            experiences tailored to your needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {categoriesData.map((category) => {
            const Icon = iconMap[category.icon] || Building2;

            return (
              <Link
                key={category.id}
                href={`/portfolio?category=${category.slug}`}
                className="group flex flex-col items-center p-8 lg:p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#0066FF]/50 transition-all duration-500 text-center"
              >
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/20">
                  <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                </div>
                <span className="text-white text-lg lg:text-xl font-semibold group-hover:text-[#00D4FF] transition-colors">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 lg:mt-24">
          <p className="text-white/60 text-lg lg:text-xl mb-10">
            Don&apos;t see your industry? We work with businesses of all types.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-slate-100 text-lg lg:text-xl font-semibold px-12 py-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
