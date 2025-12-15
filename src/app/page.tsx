import Hero from '@/components/sections/Hero';
import FeaturedTours from '@/components/sections/FeaturedTours';
import ServicesSection from '@/components/sections/ServicesSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
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
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-2 block">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How We Create Your Virtual Tour
            </h2>
            <p className="text-slate-600 text-lg">
              From consultation to delivery, we handle everything to ensure your virtual tour
              exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
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
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-200" />
                )}

                <div className="relative text-center">
                  {/* Step Number */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn btn-primary">
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
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-2 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Z360 Virtual Tours Advantage
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                We combine cutting-edge technology with creative expertise to deliver virtual tours
                that captivate audiences and drive results for your business.
              </p>

              <div className="space-y-4">
                {[
                  'Professional 360° photography with HDR processing',
                  'Compatible with all major platforms (Matterport, CloudPano, Kuula, etc.)',
                  'Custom branding and interactive hotspots',
                  'VR-ready experiences for immersive viewing',
                  'Fast turnaround and dedicated support',
                  'SEO-optimized tours for better visibility',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
                <Link href="/portfolio" className="btn btn-outline">
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Right Content - Video/Image */}
            <div className="relative">
              <div className="aspect-video bg-slate-200 rounded-2xl overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('/images/about-preview.jpg')] bg-cover bg-center opacity-50" />
                  <div className="relative w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0066FF] transition-all">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-slate-100">
                <div className="text-4xl font-bold text-[#0066FF] mb-1">5+ Years</div>
                <div className="text-slate-600">Industry Experience</div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-[#FF6B00] text-white rounded-full px-4 py-2 font-semibold shadow-lg">
                500+ Projects
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA Section */}
      <section className="section bg-gradient-to-br from-[#0066FF] to-[#0052CC] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Showcase Your Space?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Get a free consultation and discover how 360° virtual tours can transform
              the way you present your property or business to the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="btn bg-white text-[#0066FF] hover:bg-slate-100 text-base px-8 py-4"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="btn border-2 border-white text-white hover:bg-white hover:text-[#0066FF] text-base px-8 py-4"
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
