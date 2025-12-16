import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

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
    <main>
      {/* Hero Section */}
      <Hero />

      {/* How It Works Section */}
      <section className="py-40 lg:py-56 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-24 lg:mb-32">
            <span className="inline-block text-[#0066FF] font-semibold text-sm uppercase tracking-widest mb-8">
              Our Process
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-10 leading-tight">
              How We Create Your Tour
            </h2>
            <p className="text-slate-600 text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto">
              From consultation to delivery, we handle everything to ensure your virtual tour
              exceeds expectations.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
            {processSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center mx-auto mb-10 shadow-lg shadow-blue-500/20">
                  <span className="text-white font-bold text-3xl">{item.step}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-5">{item.title}</h3>
                <p className="text-slate-600 text-lg lg:text-xl leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Why Choose Us Section */}
      <section className="py-40 lg:py-56 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-24 lg:mb-32">
            <span className="inline-block text-[#0066FF] font-semibold text-sm uppercase tracking-widest mb-8">
              Why Choose Us
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-10 leading-tight">
              The Z360 Advantage
            </h2>
            <p className="text-slate-600 text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto">
              We combine cutting-edge technology with creative expertise to deliver
              virtual tours that captivate and convert.
            </p>
          </div>

          {/* Advantage Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {[
              'Professional 360° photography with HDR processing',
              'Compatible with all major platforms',
              'Custom branding and interactive hotspots',
              'VR-ready experiences for immersive viewing',
              'Fast turnaround and dedicated support',
              'SEO-optimized tours for better visibility',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6 p-8 lg:p-10 rounded-3xl bg-slate-50 hover:bg-slate-100 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#0066FF]" />
                </div>
                <span className="text-slate-700 text-lg lg:text-xl leading-relaxed pt-2">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-40 lg:py-56 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-24 lg:mb-32">
            <span className="inline-block text-[#00D4FF] font-semibold text-sm uppercase tracking-widest mb-8">
              Platform Support
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight">
              Works With Your Favorite Tools
            </h2>
            <p className="text-white/70 text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto">
              We deliver your virtual tours on any platform, ensuring seamless integration
              with your existing systems.
            </p>
          </div>

          {/* Platform Tags */}
          <div className="flex flex-wrap justify-center gap-5 lg:gap-6 max-w-5xl mx-auto">
            {platforms.map((platform) => (
              <span
                key={platform}
                className="px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-white text-lg lg:text-xl font-medium hover:bg-white/20 transition-all duration-300"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 lg:py-56 bg-gradient-to-br from-[#0066FF] to-[#0052CC] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight">
              Ready to Showcase Your Space?
            </h2>
            <p className="text-white/80 text-xl lg:text-2xl leading-relaxed mb-16 max-w-2xl mx-auto">
              Get a free consultation and discover how 360° virtual tours can transform
              the way you present your property or business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0066FF] hover:bg-slate-100 text-lg lg:text-xl font-semibold px-12 py-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 text-lg lg:text-xl font-semibold px-12 py-6 rounded-2xl transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
