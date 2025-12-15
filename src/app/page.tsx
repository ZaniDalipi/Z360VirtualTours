import Hero from '@/components/sections/Hero';
import FeaturedTours from '@/components/sections/FeaturedTours';
import ServicesSection from '@/components/sections/ServicesSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Tours */}
      <FeaturedTours />

      {/* How It Works Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              How We Create Your Virtual Tour
            </h2>
            <p className="text-slate-600 text-lg lg:text-xl">
              From consultation to delivery, we handle everything to ensure your virtual tour
              exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-10 lg:gap-12">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your goals, space, and requirements to plan the perfect virtual tour.',
              },
              {
                step: '02',
                title: 'Photography',
                description: 'Our team captures high-resolution 360° images of your space with professional equipment.',
              },
              {
                step: '03',
                title: 'Processing',
                description: 'We edit, enhance, and stitch images together to create seamless panoramic views.',
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Your tour is published on your preferred platform with custom branding and features.',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-slate-200" />
                )}

                <div className="relative text-center">
                  {/* Step Number */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center mx-auto mb-8 relative z-10">
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/contact" className="btn btn-primary px-8 py-4 text-lg">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesSection />

      {/* Categories */}
      <CategoriesSection />

      {/* Why Choose Us Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
                The Z360 Virtual Tours Advantage
              </h2>
              <p className="text-slate-600 text-lg lg:text-xl mb-10">
                We combine cutting-edge technology with creative expertise to deliver virtual tours
                that captivate audiences and drive results for your business.
              </p>

              <div className="space-y-5">
                {[
                  'Professional 360° photography with HDR processing',
                  'Compatible with all major platforms (Matterport, CloudPano, Kuula, etc.)',
                  'Custom branding and interactive hotspots',
                  'VR-ready experiences for immersive viewing',
                  'Fast turnaround and dedicated support',
                  'SEO-optimized tours for better visibility',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-7 h-7 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/about" className="btn btn-primary px-8 py-4 text-lg">
                  Learn More About Us
                </Link>
                <Link href="/portfolio" className="btn btn-outline px-8 py-4 text-lg">
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Right Content - Video/Image */}
            <div className="relative">
              <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('/images/about-preview.svg')] bg-cover bg-center opacity-50" />
                  <div className="relative w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0066FF] transition-all">
                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                <div className="text-4xl lg:text-5xl font-bold text-[#0066FF] mb-2">5+ Years</div>
                <div className="text-slate-600 text-lg">Industry Experience</div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-[#FF6B00] text-white rounded-full px-6 py-3 font-semibold shadow-lg text-lg">
                500+ Projects
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0066FF] to-[#0052CC] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Showcase Your Space?
            </h2>
            <p className="text-white/80 text-lg lg:text-xl mb-10">
              Get a free consultation and discover how 360° virtual tours can transform
              the way you present your property or business to the world.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                href="/contact"
                className="btn bg-white text-[#0066FF] hover:bg-slate-100 text-lg px-10 py-5"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="btn border-2 border-white text-white hover:bg-white hover:text-[#0066FF] text-lg px-10 py-5"
              >
                <Play className="w-5 h-5 fill-current" />
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
