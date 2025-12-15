import { Star, Quote } from 'lucide-react';
import { getTestimonials } from '@/lib/db';
import { Testimonial } from '@/lib/db/schema';

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

export default async function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const testimonialsData = testimonials || await getTestimonials({ active: true, limit: 4 });

  return (
    <section className="section bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-2 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 text-lg">
            See why businesses trust Z360 Virtual Tours to showcase their spaces
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-full bg-[#0066FF]/10 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-[#0066FF]" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-slate-200'
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-slate-700 text-lg mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center text-white font-semibold">
                  {testimonial.clientName.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.clientName}</div>
                  <div className="text-sm text-slate-500">
                    {testimonial.clientTitle}, {testimonial.clientCompany}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#0066FF] mb-2">4.9/5</div>
              <div className="text-slate-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0066FF] mb-2">500+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0066FF] mb-2">98%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0066FF] mb-2">50+</div>
              <div className="text-slate-600">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
