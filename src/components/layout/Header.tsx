'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Camera, Phone, Search } from 'lucide-react';
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
  const pathname = usePathname();

  // Check if we're on the homepage
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isTransparent
          ? 'bg-slate-900/80 backdrop-blur-md'
          : 'bg-white shadow-md'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#0066FF] to-[#00D4FF] shadow-lg">
              <Camera className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                'font-bold text-lg lg:text-xl tracking-tight',
                isTransparent ? 'text-white' : 'text-slate-900'
              )}>
                Z360
              </span>
              <span className={cn(
                'text-[10px] lg:text-xs font-medium tracking-wider uppercase hidden sm:block',
                isTransparent ? 'text-white/70' : 'text-slate-500'
              )}>
                Virtual Tours
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
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
          <div className="hidden lg:flex items-center gap-3">
            <button
              className={cn(
                'p-2 rounded-lg transition-colors',
                isTransparent
                  ? 'text-white/80 hover:text-white hover:bg-white/10'
                  : 'text-slate-600 hover:text-[#0066FF] hover:bg-slate-100'
              )}
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0066FF] text-white rounded-lg font-semibold text-sm hover:bg-[#0052CC] transition-colors shadow-lg shadow-blue-500/25"
            >
              <Phone className="w-4 h-4" />
              Get a Quote
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
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-slate-200/20">
            <div className="flex flex-col gap-1 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-4 py-3 rounded-lg text-sm font-medium transition-all',
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
                className="mt-2 mx-4 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0066FF] text-white rounded-lg font-semibold text-sm hover:bg-[#0052CC] transition-colors"
              >
                <Phone className="w-4 h-4" />
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
