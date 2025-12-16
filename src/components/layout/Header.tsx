'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isTransparent = isHomePage && !isScrolled;

  return (
    <>
      {/* Top Bar - Centered announcement */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900">
        <div className="flex items-center justify-center h-12">
          <Link
            href="/contact"
            className="text-white/90 hover:text-white text-sm font-medium transition-colors"
          >
            Free Consultation Available — Get Your Quote Today →
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'fixed left-0 right-0 z-40 top-12 transition-all duration-300',
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-lg shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={isTransparent ? '/images/logo.svg' : '/images/logo-dark.svg'}
                alt="Z360 Virtual Tours"
                width={160}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'px-5 py-2.5 rounded-full text-sm font-medium transition-all',
                      pathname === item.href
                        ? isTransparent
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-900'
                        : isTransparent
                          ? 'text-white/80 hover:text-white hover:bg-white/10'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block flex-shrink-0">
              <Link
                href="/contact"
                className={cn(
                  'inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all',
                  isTransparent
                    ? 'bg-white text-slate-900 hover:bg-white/90'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                )}
              >
                <Phone className="w-4 h-4" />
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                isTransparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-slate-600 hover:bg-slate-100'
              )}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pb-6 pt-4 border-t border-slate-200/20">
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'px-4 py-3 rounded-lg text-base font-medium transition-all',
                      pathname === item.href
                        ? 'bg-slate-900 text-white'
                        : isTransparent
                          ? 'text-white/80 hover:bg-white/10'
                          : 'text-slate-600 hover:bg-slate-50'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mt-4 px-4 py-3 bg-slate-900 text-white rounded-lg text-center font-semibold"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
