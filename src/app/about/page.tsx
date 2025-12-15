import { Metadata } from 'next';
import Link from 'next/link';
import {
  Camera,
  Users,
  Award,
  Target,
  Heart,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
} from 'lucide-react';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

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

const team = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    bio: 'With 10+ years in digital media, Alex founded Z360 to revolutionize how spaces are showcased online.',
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Photographer',
    bio: 'Award-winning photographer specializing in architectural and 360° imaging.',
  },
  {
    name: 'Michael Park',
    role: 'Technical Director',
    bio: 'Expert in VR/AR technology and virtual tour platform integration.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Client Success Manager',
    bio: 'Dedicated to ensuring every client achieves their virtual tour goals.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#00D4FF] font-semibold text-sm uppercase tracking-wider mb-4 block">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Spaces Into
                <span className="block gradient-text">Digital Experiences</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                Z360 Virtual Tours is your trusted partner for professional 360° virtual tour services.
                We help businesses showcase their spaces like never before.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/portfolio" className="btn btn-primary">
                  View Our Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-slate-900">
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-2 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                From Passion to Purpose
              </h2>
              <div className="space-y-4 text-slate-600">
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

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-24 h-24 text-slate-400" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0066FF]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#0066FF]" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Award Winning</div>
                    <div className="text-sm text-slate-500">Virtual Tours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="w-14 h-14 rounded-xl bg-[#0066FF]/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#0066FF]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600">
                To empower businesses with immersive 360° virtual experiences that engage
                audiences, build trust, and drive results. We believe every space has a
                story to tell, and we&apos;re here to help you tell it.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="w-14 h-14 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-[#FF6B00]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600">
                To be the leading provider of virtual tour solutions worldwide, setting
                the standard for quality, innovation, and customer service in the
                immersive media industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-2 block">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0066FF]/30 hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0066FF]/10 to-[#00D4FF]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#0066FF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#00D4FF] font-semibold text-sm uppercase tracking-wider mb-2 block">
              Meet the Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The People Behind Z360
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our talented team brings together expertise in photography, technology,
              and customer service to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-[#00D4FF] text-sm mb-3">{member.role}</p>
                <p className="text-slate-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Why Choose Us */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider mb-2 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What Sets Us Apart
              </h2>
              <div className="space-y-4">
                {[
                  'Professional-grade equipment and techniques',
                  'Experienced photographers with an eye for detail',
                  'Fast turnaround without compromising quality',
                  'Dedicated support from start to finish',
                  'Competitive pricing with transparent quotes',
                  'Ongoing partnership and tour maintenance',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn btn-primary">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#0066FF] to-[#0052CC] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl font-medium mb-6">
                  &ldquo;Z360 transformed how we showcase our properties. The virtual tours
                  have increased our engagement by 300% and significantly reduced time-to-sale.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    JD
                  </div>
                  <div>
                    <div className="font-semibold">John Davidson</div>
                    <div className="text-white/70 text-sm">CEO, Premier Realty</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 mt-16">
        <div className="bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Let&apos;s create something amazing together. Contact us today to discuss
              your virtual tour project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn bg-white text-slate-900 hover:bg-slate-100">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="btn border-2 border-white text-white hover:bg-white hover:text-slate-900">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
