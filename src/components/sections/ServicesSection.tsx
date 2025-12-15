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
    <section className="py-32 lg:py-40 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-6 block">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
            Our Services
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed">
            From photography to complete virtual tour solutions, we provide everything
            you need to showcase your space.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayServices.map((service) => {
            const Icon = iconMap[service.icon] || Camera;

            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-10 hover:shadow-xl transition-all duration-300 text-center"
              >
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                  <Icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-[#0066FF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-lg mb-8 line-clamp-2">
                  {service.shortDescription}
                </p>

                {/* Pricing */}
                {service.pricing && (
                  <div className="mb-8">
                    <span className="text-slate-500 text-sm">Starting at</span>
                    <div className="text-3xl font-bold text-[#0066FF]">
                      {formatPrice(service.pricing.startingAt, service.pricing.currency)}
                    </div>
                  </div>
                )}

                {/* Link */}
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-3 text-[#0066FF] text-lg font-medium hover:gap-4 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        {!showAll && (
          <div className="text-center mt-16">
            <Link href="/services" className="btn btn-primary px-10 py-5 text-lg">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
