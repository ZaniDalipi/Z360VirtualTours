import { Suspense } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Search, Filter, Grid, List } from 'lucide-react';
import TourCard from '@/components/tours/TourCard';
import { getTours, getCategories } from '@/lib/db';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our collection of immersive 360° virtual tours across real estate, hospitality, business, and more.',
};

interface PortfolioPageProps {
  searchParams: Promise<{ category?: string; search?: string; view?: string }>;
}

async function PortfolioContent({ searchParams }: PortfolioPageProps) {
  const params = await searchParams;
  const [tours, categories] = await Promise.all([
    getTours({ published: true }),
    getCategories({ active: true }),
  ]);

  // Filter tours based on category
  let filteredTours = tours;
  if (params.category) {
    const category = categories.find(c => c.slug === params.category);
    if (category) {
      filteredTours = tours.filter(t => t.categoryId === category.id);
    }
  }

  // Filter by search query
  if (params.search) {
    const query = params.search.toLowerCase();
    filteredTours = filteredTours.filter(
      t =>
        t.title.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query) ||
        t.location.city.toLowerCase().includes(query) ||
        t.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  const getCategoryById = (id: string) => categories.find(c => c.id === id);
  const activeCategory = params.category ? categories.find(c => c.slug === params.category) : null;

  return (
    <>
      {/* Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          <Link
            href="/portfolio"
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
              !params.category
                ? 'bg-[#0066FF] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            )}
          >
            All Tours
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/portfolio?category=${category.slug}`}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                params.category === category.slug
                  ? 'bg-[#0066FF] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              )}
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Search & View */}
        <div className="flex items-center gap-4">
          <form action="/portfolio" method="GET" className="relative">
            {params.category && (
              <input type="hidden" name="category" value={params.category} />
            )}
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              name="search"
              placeholder="Search tours..."
              defaultValue={params.search}
              className="input pl-10 pr-4 py-2 w-64"
            />
          </form>
        </div>
      </div>

      {/* Active Filter Info */}
      {(activeCategory || params.search) && (
        <div className="flex items-center gap-4 mb-8 p-4 bg-slate-50 rounded-xl">
          <Filter className="w-5 h-5 text-slate-400" />
          <span className="text-slate-600">
            Showing {filteredTours.length} {filteredTours.length === 1 ? 'tour' : 'tours'}
            {activeCategory && (
              <span> in <strong>{activeCategory.name}</strong></span>
            )}
            {params.search && (
              <span> matching &ldquo;<strong>{params.search}</strong>&rdquo;</span>
            )}
          </span>
          {(activeCategory || params.search) && (
            <Link href="/portfolio" className="text-[#0066FF] font-medium hover:underline ml-auto">
              Clear filters
            </Link>
          )}
        </div>
      )}

      {/* Tours Grid */}
      {filteredTours.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              category={getCategoryById(tour.categoryId)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">No tours found</h3>
          <p className="text-slate-600 mb-6">
            Try adjusting your search or filter to find what you&apos;re looking for.
          </p>
          <Link href="/portfolio" className="btn btn-primary">
            View All Tours
          </Link>
        </div>
      )}
    </>
  );
}

export default function PortfolioPage(props: PortfolioPageProps) {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-40 pb-24 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#00D4FF] font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Virtual Tour Portfolio
            </h1>
            <p className="text-xl text-white/70">
              Explore our collection of immersive 360° virtual tours across various industries.
              Each project showcases our commitment to quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Suspense fallback={
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-slate-100 rounded-2xl h-96 animate-pulse" />
            ))}
          </div>
        }>
          <PortfolioContent searchParams={props.searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
