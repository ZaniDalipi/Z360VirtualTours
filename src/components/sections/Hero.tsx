'use client';

import Link from 'next/link';
import { Play, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Tours Created' },
  { value: '98%', label: 'Satisfaction' },
  { value: '50+', label: 'Industries' },
  { value: '24/7', label: 'Support' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0066FF]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00D4FF]/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-56 lg:pt-64 pb-40 lg:pb-48">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-16"
          >
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <span className="text-white/80 text-lg font-medium">Trusted by 500+ Businesses Worldwide</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-12 leading-[1.1]"
          >
            Transform Your Space Into
            <span className="block gradient-text mt-4">Immersive 360° Experiences</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed"
          >
            Professional virtual tours that showcase your properties, businesses, and venues.
            Compatible with Matterport, CloudPano, Kuula, and all major platforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-24"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-3 bg-[#0066FF] hover:bg-[#0052CC] text-white text-lg lg:text-xl font-semibold px-12 py-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Play className="w-6 h-6 fill-current" />
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 text-lg lg:text-xl font-semibold px-12 py-6 rounded-2xl transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 max-w-5xl mx-auto pt-16 border-t border-white/10"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold gradient-text mb-4">
                  {stat.value}
                </div>
                <div className="text-white/50 text-lg lg:text-xl">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/40"
      >
        <span className="text-sm uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-7 h-12 rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
        >
          <div className="w-2 h-2 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
