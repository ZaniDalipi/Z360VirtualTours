import { Metadata } from 'next';
import Link from 'next/link';
import {
  Camera,
  Target,
  Heart,
  Lightbulb,
  Users,
  ArrowRight,
  CheckCircle,
  Globe,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Z360 Virtual Tours - your trusted partner for professional 360° virtual tour services. Discover our story, mission, and commitment to excellence.',
};

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Industries Served' },
  { value: '5+', label: 'Years Experience' },
];

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We never compromise on quality. Every tour we create meets the highest standards of excellence.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay at the forefront of technology, constantly improving our tools and techniques.',
  },
  {
    icon: Heart,
    title: 'Client Focus',
    description: 'Your success is our success. We work closely with clients to understand and exceed their needs.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in transparent communication and partnership throughout every project.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-52 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-[#00D4FF] font-semibold text-sm uppercase tracking-wider mb-6 block">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              Transforming Spaces Into
              <span className="block gradient-text mt-4">Digital Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Z360 Virtual Tours is your trusted partner for professional 360° virtual tour services.
              We help businesses showcase their spaces like never before.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/portfolio" className="btn btn-primary text-lg px-10 py-5">
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-10 py-5">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-3">{stat.value}</div>
                <div className="text-slate-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-6 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-10">
              From Passion to Purpose
            </h2>
            <div className="space-y-8 text-slate-600 text-xl leading-relaxed">
              <p>
                Z360 Virtual Tours was founded with a simple mission: to help businesses
                showcase their spaces in the most immersive way possible. What started as
                a passion for photography and technology has grown into a full-service
                virtual tour company serving clients worldwide.
              </p>
              <p>
                We recognized early on that traditional photography couldn&apos;t capture the
                true essence of a space. 360° virtual tours offer something different &mdash;
                they let viewers explore, discover, and connect with spaces in ways that
                static images never could.
              </p>
              <p>
                Today, we work with businesses across all industries, from real estate and
                hospitality to education and healthcare. Our team combines technical expertise
                with creative vision to deliver virtual tours that truly stand out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 lg:py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-20">
            <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-6 block">
              What We Stand For
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
              Mission & Vision
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-12 border border-slate-200 text-center">
              <div className="w-20 h-20 rounded-xl bg-[#0066FF]/10 flex items-center justify-center mb-8 mx-auto">
                <Target className="w-10 h-10 text-[#0066FF]" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-slate-600 text-xl leading-relaxed">
                To empower businesses with immersive 360° virtual experiences that engage
                audiences, build trust, and drive results. We believe every space has a
                story to tell, and we&apos;re here to help you tell it.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-12 border border-slate-200 text-center">
              <div className="w-20 h-20 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center mb-8 mx-auto">
                <Globe className="w-10 h-10 text-[#FF6B00]" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-slate-600 text-xl leading-relaxed">
                To be the leading provider of virtual tour solutions worldwide, setting
                the standard for quality, innovation, and customer service in the
                immersive media industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-20">
            <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-6 block">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-10 rounded-2xl bg-white border border-slate-200 hover:border-[#0066FF]/30 hover:shadow-lg transition-all"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0066FF]/10 to-[#00D4FF]/10 flex items-center justify-center mx-auto mb-8">
                    <Icon className="w-10 h-10 text-[#0066FF]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 lg:py-40 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-[#00D4FF] font-semibold text-sm uppercase tracking-wider mb-6 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12">
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
              {[
                'Professional-grade equipment and techniques',
                'Experienced photographers with an eye for detail',
                'Fast turnaround without compromising quality',
                'Dedicated support from start to finish',
                'Competitive pricing with transparent quotes',
                'Ongoing partnership and tour maintenance',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  <CheckCircle className="w-7 h-7 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-xl">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <Link href="/contact" className="btn bg-white text-slate-900 hover:bg-slate-100 text-lg px-10 py-5">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="bg-gradient-to-r from-[#0066FF] to-[#00D4FF] rounded-3xl p-16 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Ready to Work With Us?
              </h2>
              <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s create something amazing together. Contact us today to discuss
                your virtual tour project.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact" className="btn bg-white text-[#0066FF] hover:bg-slate-100 text-lg px-10 py-5">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/portfolio" className="btn border-2 border-white text-white hover:bg-white hover:text-[#0066FF] text-lg px-10 py-5">
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
