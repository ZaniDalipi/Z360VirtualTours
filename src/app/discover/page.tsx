import { Metadata } from 'next';
import Link from 'next/link';
import {
  Search,
  MapPin,
  Star,
  Building2,
  Globe,
  Phone,
  ExternalLink,
  Filter,
  ArrowRight,
  Verified,
  Clock,
  TrendingUp,
} from 'lucide-react';
import { getPlaces, getTours, getCategories } from '@/lib/db';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Discover',
  description: 'Discover businesses, locations, and venues with immersive 360° virtual tours. Explore places near you before you visit.',
};

export default async function DiscoverPage() {
  const [places, tours, categories] = await Promise.all([
    getPlaces({ verified: true }),
    getTours({ published: true }),
    getCategories({ active: true }),
  ]);

  const featuredPlaces = places.filter(p => p.isFeatured);
  const recentTours = tours.slice(0, 6);

  return (
    <div className="min-h-screen pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-52 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#00D4FF] font-semibold text-sm uppercase tracking-wider mb-6 block">
              Discover Places
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Explore Before You Visit
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed">
              Discover businesses, venues, and locations with immersive 360° virtual tours.
              Experience spaces from anywhere in the world.
            </p>

            {/* Search Bar */}
            <form action="/discover" method="GET" className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
                <input
                  type="text"
                  name="search"
                  placeholder="Search places, businesses, or locations..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-slate-900 text-lg focus:outline-none focus:ring-4 focus:ring-[#0066FF]/30"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-primary py-2"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <span className="text-white/60">Popular:</span>
              {['Real Estate', 'Restaurants', 'Hotels', 'Museums'].map((term) => (
                <Link
                  key={term}
                  href={`/discover?search=${term.toLowerCase()}`}
                  className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm hover:bg-white/20 transition-colors"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Browse by Category</h2>
              <p className="text-slate-600">Find places in your area of interest</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/portfolio?category=${category.slug}`}
                className="group flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-[#0066FF]/30 hover:shadow-lg transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF]/10 to-[#00D4FF]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-[#0066FF]" />
                </div>
                <span className="text-sm font-medium text-slate-700 group-hover:text-[#0066FF] transition-colors">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Places */}
      {featuredPlaces.length > 0 && (
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-[#0066FF]" />
                  <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider">
                    Featured
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Popular Places</h2>
              </div>
              <Link href="/discover?featured=true" className="text-[#0066FF] font-medium hover:underline">
                View All
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPlaces.slice(0, 6).map((place) => (
                <div
                  key={place.id}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all"
                >
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2 className="w-12 h-12 text-slate-400" />
                    </div>
                    {place.isVerified && (
                      <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-green-500 text-white text-xs font-medium flex items-center gap-1">
                        <Verified className="w-3 h-3" />
                        Verified
                      </div>
                    )}
                    {place.tourId && (
                      <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-[#0066FF] text-white text-xs font-medium">
                        360° Tour
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-semibold text-lg text-slate-900 group-hover:text-[#0066FF] transition-colors">
                        {place.name}
                      </h3>
                      {place.rating && (
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="font-medium">{place.rating}</span>
                          {place.reviewCount && (
                            <span className="text-slate-400">({place.reviewCount})</span>
                          )}
                        </div>
                      )}
                    </div>

                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {place.description}
                    </p>

                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{place.location.city}, {place.location.state}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      {place.tourId && (
                        <Link
                          href={`/portfolio/${place.slug}`}
                          className="btn btn-primary text-sm py-2 flex-1"
                        >
                          View Tour
                        </Link>
                      )}
                      {place.contact?.website && (
                        <a
                          href={place.contact.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline text-sm py-2"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      )}
                      {place.contact?.phone && (
                        <a
                          href={`tel:${place.contact.phone}`}
                          className="btn btn-outline text-sm py-2"
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Tours */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-[#00D4FF]" />
                <span className="text-[#00D4FF] font-semibold text-sm uppercase tracking-wider">
                  Recently Added
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white">Latest Virtual Tours</h2>
            </div>
            <Link href="/portfolio" className="text-[#00D4FF] font-medium hover:underline flex items-center gap-1">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentTours.map((tour) => (
              <Link
                key={tour.id}
                href={`/portfolio/${tour.slug}`}
                className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0066FF] transition-all">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                    {tour.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <MapPin className="w-4 h-4" />
                    {tour.location.city}, {tour.location.state}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Add Your Business CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-r from-[#0066FF] to-[#00D4FF] rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Add Your Business
                </h2>
                <p className="text-white/80 text-lg mb-6">
                  Join hundreds of businesses showcasing their spaces with immersive 360° virtual tours.
                  Increase visibility, engagement, and conversions.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Get discovered by potential customers',
                    'Showcase your space 24/7',
                    'Stand out from competitors',
                    'Increase online engagement',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                        <Verified className="w-3 h-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn bg-white text-[#0066FF] hover:bg-slate-100">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="aspect-video bg-white/10 rounded-xl mb-4 flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-white/50" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-white/20 rounded w-3/4" />
                    <div className="h-3 bg-white/10 rounded w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
