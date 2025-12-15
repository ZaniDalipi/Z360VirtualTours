import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import TourCard from '@/components/tours/TourCard';
import { getTours, getCategories } from '@/lib/db';
import { Tour, Category } from '@/lib/db/schema';

interface FeaturedToursProps {
  tours?: Tour[];
  categories?: Category[];
}

export default async function FeaturedTours({ tours, categories }: FeaturedToursProps) {
  const toursData = tours || await getTours({ featured: true, published: true, limit: 6 });
  const categoriesData = categories || await getCategories({ active: true });

  const getCategoryById = (id: string) => categoriesData.find(c => c.id === id);

  // Get the first featured tour for the large card
  const mainTour = toursData[0];
  const otherTours = toursData.slice(1, 5);

  return (
    <section className="section bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-2 block">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Featured Virtual Tours
            </h2>
            <p className="text-slate-600 mt-3 max-w-2xl">
              Explore our collection of immersive 360° virtual tours across various industries.
              Each tour showcases our commitment to quality and innovation.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[#0066FF] font-semibold hover:gap-3 transition-all"
          >
            View All Tours
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Tours Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Main Featured Tour */}
          {mainTour && (
            <div className="lg:row-span-2">
              <TourCard
                tour={mainTour}
                category={getCategoryById(mainTour.categoryId)}
                variant="featured"
              />
            </div>
          )}

          {/* Other Tours */}
          <div className="grid sm:grid-cols-2 gap-6">
            {otherTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                category={getCategoryById(tour.categoryId)}
              />
            ))}
          </div>
        </div>

        {/* Platform Support Banner */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">
              Compatible with All Major Platforms
            </h3>
            <p className="text-slate-600 text-sm">
              We work with leading 360° tour platforms to deliver the best experience
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['Matterport', 'CloudPano', '3DVista', 'Kuula', 'Panoee'].map((platform) => (
              <span
                key={platform}
                className="px-4 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm font-medium"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
