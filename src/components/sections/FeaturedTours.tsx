import Link from 'next/link';
import { ArrowRight, Camera, Plus } from 'lucide-react';
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

  // If no tours, show empty state
  if (toursData.length === 0) {
    return (
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Featured Virtual Tours
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our portfolio of immersive 360° virtual tours is coming soon.
              Contact us to be among the first to showcase your space.
            </p>
          </div>

          {/* Empty State */}
          <div className="bg-white rounded-3xl border-2 border-dashed border-slate-300 p-16 text-center">
            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-8">
              <Camera className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              No Tours Available Yet
            </h3>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              We&apos;re working on adding amazing virtual tours to our portfolio.
              Check back soon or contact us to create your own.
            </p>
            <Link href="/contact" className="btn btn-primary px-8 py-4">
              <Plus className="w-5 h-5" />
              Create Your Tour
            </Link>
          </div>

          {/* Platform Support Banner */}
          <div className="mt-16 p-8 lg:p-10 bg-white rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 text-lg mb-2">
                Compatible with All Major Platforms
              </h3>
              <p className="text-slate-600">
                We work with leading 360° tour platforms to deliver the best experience
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {['Matterport', 'CloudPano', '3DVista', 'Kuula', 'Panoee'].map((platform) => (
                <span
                  key={platform}
                  className="px-5 py-2.5 rounded-lg bg-slate-100 text-slate-600 text-sm font-medium"
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

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Featured Virtual Tours
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl">
              Explore our collection of immersive 360° virtual tours across various industries.
              Each tour showcases our commitment to quality and innovation.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[#0066FF] font-semibold hover:gap-3 transition-all text-lg"
          >
            View All Tours
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Tours Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
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
          <div className="grid sm:grid-cols-2 gap-8">
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
        <div className="mt-16 p-8 lg:p-10 bg-white rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-semibold text-slate-900 text-lg mb-2">
              Compatible with All Major Platforms
            </h3>
            <p className="text-slate-600">
              We work with leading 360° tour platforms to deliver the best experience
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['Matterport', 'CloudPano', '3DVista', 'Kuula', 'Panoee'].map((platform) => (
              <span
                key={platform}
                className="px-5 py-2.5 rounded-lg bg-slate-100 text-slate-600 text-sm font-medium"
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
