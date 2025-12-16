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
    <section className="py-40 lg:py-56 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-24 lg:mb-32">
          <span className="inline-block text-[#0066FF] font-semibold text-sm uppercase tracking-widest mb-8">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-10 leading-tight">
            Our Services
          </h2>
          <p className="text-slate-600 text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto">
            From photography to complete virtual tour solutions, we provide everything
            you need to showcase your space.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {displayServices.map((service) => {
            const Icon = iconMap[service.icon] || Camera;

            return (
              <div
                key={service.id}
                className="group bg-white rounded-3xl p-10 lg:p-12 hover:shadow-2xl transition-all duration-500 text-center border border-slate-100"
              >
                {/* Icon */}
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/20">
                  <Icon className="w-12 h-12 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-5 group-hover:text-[#0066FF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-lg lg:text-xl leading-relaxed mb-10 line-clamp-2">
                  {service.shortDescription}
                </p>

                {/* Pricing */}
                {service.pricing && (
                  <div className="mb-10">
                    <span className="text-slate-500 text-base">Starting at</span>
                    <div className="text-4xl font-bold text-[#0066FF] mt-2">
                      {formatPrice(service.pricing.startingAt, service.pricing.currency)}
                    </div>
                  </div>
                )}

                {/* Link */}
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-3 text-[#0066FF] text-lg lg:text-xl font-semibold hover:gap-5 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        {!showAll && (
          <div className="text-center mt-20 lg:mt-24">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 bg-[#0066FF] hover:bg-[#0052CC] text-white text-lg lg:text-xl font-semibold px-12 py-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Services
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
