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
    <section className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-2 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Professional 360° Services
          </h2>
          <p className="text-slate-600 text-lg">
            From photography to complete virtual tour solutions, we provide end-to-end services
            to bring your spaces to life in stunning 360°.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Camera;

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl border border-slate-200 p-8 hover:border-[#0066FF]/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066FF]/10 to-[#00D4FF]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-[#0066FF]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#0066FF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {service.shortDescription}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                {service.pricing && (
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <span className="text-slate-500 text-sm">Starting at</span>
                    <div className="text-2xl font-bold text-slate-900">
                      {formatPrice(service.pricing.startingAt, service.pricing.currency)}
                    </div>
                  </div>
                )}

                {/* Link */}
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-2 text-[#0066FF] font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        {!showAll && (
          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-primary">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
