import Link from 'next/link';
import { Star, Quote, MessageSquare, ArrowRight } from 'lucide-react';
import { getTestimonials } from '@/lib/db';
import { Testimonial } from '@/lib/db/schema';

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

export default async function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const testimonialsData = testimonials || await getTestimonials({ active: true, limit: 4 });

  // If no testimonials, show stats only
  if (testimonialsData.length === 0) {
    return (
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-slate-600 text-lg">
              Join hundreds of satisfied clients who have transformed their spaces with our virtual tour services.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-sm border border-slate-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              <div className="p-4">
                <div className="text-4xl lg:text-5xl font-bold text-[#0066FF] mb-3">4.9/5</div>
                <div className="text-slate-600 text-lg">Average Rating</div>
              </div>
              <div className="p-4">
                <div className="text-4xl lg:text-5xl font-bold text-[#0066FF] mb-3">500+</div>
                <div className="text-slate-600 text-lg">Projects Completed</div>
              </div>
              <div className="p-4">
                <div className="text-4xl lg:text-5xl font-bold text-[#0066FF] mb-3">98%</div>
                <div className="text-slate-600 text-lg">Client Satisfaction</div>
              </div>
              <div className="p-4">
                <div className="text-4xl lg:text-5xl font-bold text-[#0066FF] mb-3">50+</div>
                <div className="text-slate-600 text-lg">Industries Served</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/contact" className="btn btn-primary px-8 py-4 text-lg">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 text-lg">
            See why businesses trust Z360 Virtual Tours to showcase their spaces
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
            >
              {/* Quote Icon */}
              <div className="w-14 h-14 rounded-full bg-[#0066FF]/10 flex items-center justify-center mb-8">
                <Quote className="w-7 h-7 text-[#0066FF]" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-slate-200'
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-slate-700 text-lg lg:text-xl mb-8 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.clientName.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-lg">{testimonial.clientName}</div>
                  <div className="text-slate-500">
                    {testimonial.clientTitle}, {testimonial.clientCompany}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-white rounded-3xl p-10 lg:p-12 shadow-sm border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div className="p-4">
              <div className="text-4xl lg:text-5xl font-bold text-[#0066FF] mb-3">4.9/5</div>
              <div className="text-slate-600 text-lg">Average Rating</div>
            </div>
            <div className="p-4">
              <div className="text-4xl lg:text-5xl font-bold text-[#0066FF] mb-3">500+</div>
              <div className="text-slate-600 text-lg">Projects Completed</div>
            </div>
            <div className="p-4">
              <div className="text-4xl lg:text-5xl font-bold text-[#0066FF] mb-3">98%</div>
              <div className="text-slate-600 text-lg">Client Satisfaction</div>
            </div>
            <div className="p-4">
              <div className="text-4xl lg:text-5xl font-bold text-[#0066FF] mb-3">50+</div>
              <div className="text-slate-600 text-lg">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
