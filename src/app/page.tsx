import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Camera, Globe, Box, Plane, Map, Glasses } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We discuss your goals and plan the perfect virtual tour for your space.',
  },
  {
    step: '02',
    title: 'Photography',
    description: 'Our team captures high-resolution 360° images with professional equipment.',
  },
  {
    step: '03',
    title: 'Processing',
    description: 'We edit and stitch images to create seamless panoramic views.',
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Your tour is published with custom branding on your preferred platform.',
  },
];

const platforms = [
  'Matterport',
  'CloudPano',
  '3DVista',
  'Kuula',
  'Panoee',
  'TeliportMe',
  'Google Street View',
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* How It Works */}
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-6 block">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
              How We Create Your Tour
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed">
              From consultation to delivery, we handle everything to ensure your virtual tour
              exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {processSteps.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center mx-auto mb-8">
                  <span className="text-white font-bold text-2xl">{item.step}</span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
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
      <section className="py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-6 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
              The Z360 Advantage
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed">
              We combine cutting-edge technology with creative expertise to deliver
              virtual tours that captivate and convert.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              'Professional 360° photography with HDR processing',
              'Compatible with all major platforms',
              'Custom branding and interactive hotspots',
              'VR-ready experiences for immersive viewing',
              'Fast turnaround and dedicated support',
              'SEO-optimized tours for better visibility',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-5 p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                <CheckCircle className="w-7 h-7 text-[#0066FF] flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-32 lg:py-40 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#00D4FF] font-semibold text-sm uppercase tracking-wider mb-6 block">
              Platform Support
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Works With Your Favorite Tools
            </h2>
            <p className="text-white/70 text-xl leading-relaxed">
              We deliver your virtual tours on any platform, ensuring seamless integration
              with your existing systems.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {platforms.map((platform) => (
              <span
                key={platform}
                className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-lg font-medium hover:bg-white/20 transition-colors"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-[#0066FF] to-[#0052CC] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
              Ready to Showcase Your Space?
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-12">
              Get a free consultation and discover how 360° virtual tours can transform
              the way you present your property or business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/contact"
                className="btn bg-white text-[#0066FF] hover:bg-slate-100 text-lg px-10 py-5"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="btn bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 text-lg px-10 py-5"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
