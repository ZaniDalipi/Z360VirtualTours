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
    <section className="py-32 lg:py-40 bg-slate-900 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0066FF]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#00D4FF] font-semibold text-sm uppercase tracking-wider mb-6 block">
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Virtual Tours for Every Industry
          </h2>
          <p className="text-white/70 text-xl leading-relaxed">
            From real estate to hospitality, education to healthcare - we create immersive
            experiences tailored to your needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {categoriesData.map((category) => {
            const Icon = iconMap[category.icon] || Building2;

            return (
              <Link
                key={category.id}
                href={`/portfolio?category=${category.slug}`}
                className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#0066FF]/50 transition-all text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-white text-lg font-medium group-hover:text-[#00D4FF] transition-colors">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-white/60 text-lg mb-8">
            Don&apos;t see your industry? We work with businesses of all types.
          </p>
          <Link href="/contact" className="btn bg-white text-slate-900 hover:bg-slate-100 px-10 py-5 text-lg">
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
