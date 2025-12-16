import Link from 'next/link';
import {
  Camera,
  Globe,
  Box,
  Plane,
  Map,
  Glasses,
  ArrowRight,
} from 'lucide-react';
import { getServices } from '@/lib/db';
import { Service } from '@/lib/db/schema';
import { formatPrice } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Globe,
  Box,
  Plane,
  Map,
  Glasses,
};

interface ServicesSectionProps {
  services?: Service[];
  showAll?: boolean;
}

export default async function ServicesSection({ services, showAll = false }: ServicesSectionProps) {
  const servicesData = services || await getServices({ active: true });
  const displayServices = showAll ? servicesData : servicesData.slice(0, 6);

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From photography to complete virtual tour solutions, we provide everything you need.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service) => {
            const Icon = iconMap[service.icon] || Camera;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {service.shortDescription}
                </p>
                {service.pricing && (
                  <p className="text-sm text-slate-500 mb-6">
                    From{' '}
                    <span className="text-2xl font-bold text-slate-900">
                      {formatPrice(service.pricing.startingAt, service.pricing.currency)}
                    </span>
                  </p>
                )}
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        {!showAll && (
          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-full font-semibold transition-all"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
