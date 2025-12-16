import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-4">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              How we create your tour
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A simple four-step process from consultation to delivery.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { num: '01', title: 'Consultation', desc: 'We discuss your goals and plan the perfect virtual tour.' },
              { num: '02', title: 'Photography', desc: 'Our team captures high-resolution 360° images.' },
              { num: '03', title: 'Processing', desc: 'We edit and stitch images into seamless panoramas.' },
              { num: '04', title: 'Delivery', desc: 'Your tour is published on your preferred platform.' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesSection />

      {/* Categories */}
      <CategoriesSection />

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              The Z360 advantage
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine technology with creative expertise to deliver virtual tours that stand out.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Professional 360° photography with HDR',
              'Compatible with all major platforms',
              'Custom branding and interactive hotspots',
              'VR-ready immersive experiences',
              'Fast turnaround and dedicated support',
              'SEO-optimized for better visibility',
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wide mb-4">
            Platform Support
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Works with your favorite tools
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-16">
            We deliver on any platform, ensuring seamless integration with your systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {['Matterport', 'CloudPano', '3DVista', 'Kuula', 'Panoee', 'Google Street View'].map((platform) => (
              <span
                key={platform}
                className="px-6 py-3 rounded-full bg-white/10 text-white text-sm font-medium border border-white/10"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-blue-600">
        <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to showcase your space?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Get a free consultation and discover how 360° virtual tours can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-white/90 px-8 py-4 rounded-full font-semibold transition-all"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold border border-white/20 transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
