import { Metadata } from 'next';
import Link from 'next/link';
import {
  Camera,
  Globe,
  Box,
  Plane,
  Map,
  Glasses,
  Check,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { getServices } from '@/lib/db';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional 360° virtual tour services including photography, tour creation, 3D dollhouse views, drone aerials, Google Street View, and VR experiences.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Globe,
  Box,
  Plane,
  Map,
  Glasses,
};

export default async function ServicesPage() {
  const services = await getServices({ active: true });

  return (
    <div className="min-h-screen pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-40 pb-24 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#00D4FF] font-semibold text-sm uppercase tracking-wider mb-4 block">
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional 360° Services
            </h1>
            <p className="text-xl text-white/70 mb-10">
              From photography to complete virtual tour solutions, we provide end-to-end services
              to bring your spaces to life in stunning 360°.
            </p>
            <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
              <Phone className="w-5 h-5" />
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-32">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Camera;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066FF]/10 to-[#00D4FF]/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#0066FF]" />
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>

                  <p className="text-lg text-slate-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing & CTA */}
                  <div className="flex flex-wrap items-center gap-6">
                    {service.pricing && (
                      <div>
                        <span className="text-slate-500 text-sm">Starting at</span>
                        <div className="text-3xl font-bold text-[#0066FF]">
                          {formatPrice(service.pricing.startingAt, service.pricing.currency)}
                        </div>
                      </div>
                    )}
                    <Link href="/contact" className="btn btn-primary">
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                {/* Image/Visual */}
                <div className={!isEven ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 to-[#00D4FF]/5" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-12 h-12 text-[#0066FF]" />
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white shadow-lg text-sm font-medium text-slate-700">
                      {service.title}
                    </div>
                    {service.pricing && (
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-[#0066FF] text-white text-sm font-medium">
                        From {formatPrice(service.pricing.startingAt)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Platform Support */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-32">
        <div className="bg-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/20 rounded-full blur-3xl" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Compatible with All Major Platforms
            </h2>
            <p className="text-white/70 mb-8">
              We deliver your virtual tours on your preferred platform, ensuring seamless integration
              with your existing systems and workflows.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                'Matterport',
                'CloudPano',
                '3DVista',
                'Kuula',
                'Panoee',
                'TeliportMe',
                'Google Street View',
              ].map((platform) => (
                <span
                  key={platform}
                  className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white font-medium"
                >
                  {platform}
                </span>
              ))}
            </div>

            <Link href="/contact" className="btn bg-white text-slate-900 hover:bg-slate-100">
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600">
            Common questions about our 360° virtual tour services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: 'How long does it take to create a virtual tour?',
              a: 'The timeline depends on the size and complexity of your space. A typical project takes 3-7 business days from photography to delivery. Larger properties or those requiring additional features may take longer.',
            },
            {
              q: 'What equipment do you use?',
              a: 'We use professional-grade 360° cameras including Matterport Pro2, Insta360 Pro 2, and Ricoh Theta Z1, along with professional lighting and stabilization equipment for the best results.',
            },
            {
              q: 'Can I update my tour after it\'s created?',
              a: 'Yes! We offer update services for existing tours. Whether you need to add new rooms, update hotspots, or refresh photography, we can help keep your tour current.',
            },
            {
              q: 'Do you offer white-label solutions?',
              a: 'Absolutely. We can create tours with your branding, custom domain, and remove any third-party watermarks for a fully branded experience.',
            },
            {
              q: 'What\'s included in the pricing?',
              a: 'Our pricing includes on-site photography, professional editing, tour assembly, hosting for one year, and basic embed codes. Additional features like floor plans, VR mode, or custom integrations are available as add-ons.',
            },
          ].map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-900 hover:text-[#0066FF] transition-colors">
                {faq.q}
                <span className="text-[#0066FF] group-open:rotate-180 transition-transform">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-32 mb-24">
        <div className="bg-gradient-to-r from-[#0066FF] to-[#00D4FF] rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We&apos;ll help you choose
            the perfect service package for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn bg-white text-[#0066FF]">
              <Phone className="w-5 h-5" />
              Contact Us
            </Link>
            <Link href="/portfolio" className="btn border-2 border-white text-white hover:bg-white hover:text-[#0066FF]">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
