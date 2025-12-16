'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  MessageSquare,
  Building2,
  User,
} from 'lucide-react';

const services = [
  '360° Photography',
  'Virtual Tour Creation',
  '3D Dollhouse Views',
  'Drone Aerials',
  'Google Street View',
  'VR Experience',
  'Other',
];

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For demo, always succeed
    setFormState('success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-52 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#00D4FF] font-semibold text-sm uppercase tracking-wider mb-6 block">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Let&apos;s Create Something Amazing
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
              Ready to transform your space into an immersive 360° experience?
              Contact us today for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-lg bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 text-[#0066FF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg mb-2">Email Us</h3>
                      <a href="mailto:info@z360virtualtours.com" className="text-slate-600 text-lg hover:text-[#0066FF] transition-colors">
                        info@z360virtualtours.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-lg bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-[#0066FF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg mb-2">Call Us</h3>
                      <a href="tel:+15553600000" className="text-slate-600 text-lg hover:text-[#0066FF] transition-colors">
                        +1 (555) 360-TOUR
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-lg bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-[#0066FF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg mb-2">Visit Us</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        123 Virtual Drive<br />
                        Los Angeles, CA 90001<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-lg bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-[#0066FF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg mb-2">Business Hours</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        Monday - Friday: 9am - 6pm<br />
                        Saturday: 10am - 4pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-[#0066FF]/5 rounded-xl p-8 border border-[#0066FF]/20">
                <div className="flex items-center gap-4 mb-4">
                  <MessageSquare className="w-7 h-7 text-[#0066FF]" />
                  <h3 className="font-semibold text-slate-900 text-lg">Quick Response</h3>
                </div>
                <p className="text-slate-600 text-lg">
                  We typically respond to inquiries within 2-4 business hours.
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-200 p-10 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Send Us a Message
                </h2>

                {formState === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setFormState('idle');
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          service: '',
                          message: '',
                        });
                      }}
                      className="btn btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Your Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input pl-10"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input pl-10"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone & Company */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="input pl-10"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                          Company Name
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="input pl-10"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Interest */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="input"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="input resize-none"
                        placeholder="Tell us about your project, space, and goals..."
                      />
                    </div>

                    {/* Error State */}
                    {formState === 'error' && (
                      <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p>Something went wrong. Please try again or contact us directly.</p>
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      className="w-full btn btn-primary py-4 text-base"
                    >
                      {formState === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-sm text-slate-500 text-center">
                      By submitting this form, you agree to our{' '}
                      <Link href="/privacy" className="text-[#0066FF] hover:underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 mt-24">
        <div className="bg-slate-200 rounded-2xl h-96 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-6" />
            <p className="text-slate-600 text-lg">Interactive map would be displayed here</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 mt-24 mb-32">
        <div className="bg-slate-50 rounded-2xl p-12 lg:p-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Quick Answers
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                q: 'How quickly can you complete a tour?',
                a: 'Most projects are completed within 3-7 business days, depending on size and complexity.',
              },
              {
                q: 'Do you travel for shoots?',
                a: 'Yes! We serve clients nationwide and can travel to any location for your project.',
              },
              {
                q: 'What\s included in your pricing?',
                a: 'Our quotes include photography, editing, tour assembly, and one year of hosting.',
              },
              {
                q: 'Can I update my tour later?',
                a: 'Absolutely. We offer update services to keep your tour current and engaging.',
              },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="font-semibold text-slate-900 text-xl mb-3">{item.q}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
