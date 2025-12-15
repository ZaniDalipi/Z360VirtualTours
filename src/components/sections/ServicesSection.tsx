import Link from 'next/link';
import {
  Camera,
  Globe,
  Box,
  Plane,
  Map,
  Glasses,
  ArrowRight,
  Check,
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
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-4 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Professional 360° Services
          </h2>
          <p className="text-slate-600 text-lg lg:text-xl">
            From photography to complete virtual tour solutions, we provide end-to-end services
            to bring your spaces to life in stunning 360°.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {displayServices.map((service) => {
            const Icon = iconMap[service.icon] || Camera;

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl border border-slate-200 p-8 lg:p-10 hover:border-[#0066FF]/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0066FF]/10 to-[#00D4FF]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-[#0066FF]" />
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-4 group-hover:text-[#0066FF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-8 line-clamp-3 text-lg">
                  {service.shortDescription}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                {service.pricing && (
                  <div className="mb-8 pb-8 border-b border-slate-100">
                    <span className="text-slate-500">Starting at</span>
                    <div className="text-3xl font-bold text-slate-900">
                      {formatPrice(service.pricing.startingAt, service.pricing.currency)}
                    </div>
                  </div>
                )}

                {/* Link */}
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-2 text-[#0066FF] font-semibold group-hover:gap-3 transition-all text-lg"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        {!showAll && (
          <div className="text-center mt-16">
            <Link href="/services" className="btn btn-primary px-8 py-4 text-lg">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
