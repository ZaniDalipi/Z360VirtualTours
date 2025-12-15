'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Search, MapPin, Mail, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'Discover', href: '/discover' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const pathname = usePathname();

  // Check if we're on the homepage
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Hide top bar on scroll
      setShowTopBar(window.scrollY < 10);
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Determine if header should be transparent (only on homepage when not scrolled)
  const isTransparent = isHomePage && !isScrolled;

  return (
    <>
      {/* Top Announcement Bar */}
      <div
        className={cn(
          'fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white transition-all duration-300',
          showTopBar ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            {/* Left - Contact Info */}
            <div className="hidden md:flex items-center gap-6">
              <a href="mailto:info@z360virtualtours.com" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>info@z360virtualtours.com</span>
              </a>
              <a href="tel:+15553600000" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>+1 (555) 360-TOUR</span>
              </a>
            </div>

            {/* Center - Announcement */}
            <div className="flex items-center justify-center flex-1 md:flex-none">
              <Link href="/contact" className="flex items-center gap-2 text-[#00D4FF] hover:text-white transition-colors group">
                <span className="hidden sm:inline">Free Consultation Available</span>
                <span className="sm:hidden">Free Quote</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right - Location */}
            <div className="hidden md:flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>Los Angeles, CA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'fixed left-0 right-0 z-40 transition-all duration-300',
          showTopBar ? 'top-10' : 'top-0',
          isTransparent
            ? 'bg-slate-900/90 backdrop-blur-lg'
            : 'bg-white shadow-lg'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-18 lg:h-22 py-3 lg:py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              {isTransparent ? (
                <Image
                  src="/images/logo.svg"
                  alt="Z360 Virtual Tours"
                  width={200}
                  height={60}
                  className="h-12 lg:h-14 w-auto"
                  priority
                />
              ) : (
                <Image
                  src="/images/logo-dark.svg"
                  alt="Z360 Virtual Tours"
                  width={200}
                  height={60}
                  className="h-12 lg:h-14 w-auto"
                  priority
                />
              )}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200',
                    pathname === item.href
                      ? isTransparent
                        ? 'bg-white/20 text-white'
                        : 'bg-[#0066FF] text-white'
                      : isTransparent
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-slate-600 hover:text-[#0066FF] hover:bg-slate-100'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                className={cn(
                  'p-3 rounded-xl transition-colors',
                  isTransparent
                    ? 'text-white/80 hover:text-white hover:bg-white/10'
                    : 'text-slate-600 hover:text-[#0066FF] hover:bg-slate-100'
                )}
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white rounded-xl font-semibold text-sm hover:from-[#0052CC] hover:to-[#003D99] transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden p-3 rounded-xl transition-colors',
                isTransparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-slate-600 hover:bg-slate-100'
              )}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pb-6 border-t border-slate-200/20">
              <div className="flex flex-col gap-2 pt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'px-5 py-4 rounded-xl text-base font-medium transition-all',
                      pathname === item.href
                        ? 'bg-[#0066FF] text-white'
                        : isTransparent
                          ? 'text-white/90 hover:bg-white/10'
                          : 'text-slate-600 hover:bg-slate-100'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mt-4 mx-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white rounded-xl font-semibold text-base hover:from-[#0052CC] hover:to-[#003D99] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Get a Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
