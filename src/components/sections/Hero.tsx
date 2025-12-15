'use client';

import Link from 'next/link';
import { Play, ArrowRight, Camera, Building2, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Virtual Tours Created' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Industries Served' },
  { value: '24/7', label: 'Support Available' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0066FF]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D4FF]/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white/80 text-sm font-medium">Trusted by 500+ Businesses</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Space Into
              <span className="block gradient-text">Immersive Experiences</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-white/70 mb-8 max-w-xl">
              Professional 360° virtual tours that showcase your properties, businesses, and venues like never before.
              Compatible with Matterport, CloudPano, Kuula, and more.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/portfolio"
                className="btn btn-primary text-base px-8 py-4"
              >
                <Play className="w-5 h-5 fill-current" />
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-slate-900 text-base px-8 py-4"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-[#0066FF]" />
                360° Photography
              </span>
              <span className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#0066FF]" />
                All Industries
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#0066FF]" />
                Worldwide Service
              </span>
            </div>
          </motion.div>

          {/* Right Column - Interactive Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 overflow-hidden">
              {/* Preview Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl mb-6 flex items-center justify-center group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/tour-preview.jpg')] bg-cover bg-center opacity-50" />
                <div className="relative w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0066FF] transition-all duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Interactive Demo Tour</h3>
                <p className="text-white/60">Experience our immersive 360° virtual tour technology</p>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#0066FF]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#00D4FF]/20 rounded-full blur-2xl" />
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -left-8 top-1/4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <Camera className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">360° Capture</p>
                <p className="text-sm text-slate-500">High-res imaging</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -right-8 bottom-1/4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">All Platforms</p>
                <p className="text-sm text-slate-500">Matterport & more</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          />
        </div>
      </div>
    </section>
  );
}
