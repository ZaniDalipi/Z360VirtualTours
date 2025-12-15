'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Camera, Phone, Search } from 'lucide-react';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={cn(
              'w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300',
              'bg-gradient-to-br from-[#0066FF] to-[#00D4FF]',
              'group-hover:scale-105 group-hover:shadow-lg'
            )}>
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                'font-bold text-xl tracking-tight transition-colors',
                isScrolled ? 'text-slate-900' : 'text-white'
              )}>
                Z360
              </span>
              <span className={cn(
                'text-xs font-medium tracking-wider uppercase transition-colors',
                isScrolled ? 'text-slate-500' : 'text-white/70'
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
                    ? isScrolled
                      ? 'bg-[#0066FF]/10 text-[#0066FF]'
                      : 'bg-white/20 text-white'
                    : isScrolled
                      ? 'text-slate-600 hover:text-[#0066FF] hover:bg-slate-100'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/search"
              className={cn(
                'p-2 rounded-lg transition-colors',
                isScrolled
                  ? 'text-slate-600 hover:text-[#0066FF] hover:bg-slate-100'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              )}
            >
              <Search className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="btn btn-primary"
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
              isScrolled
                ? 'text-slate-600 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
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
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          )}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-slate-200/20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-4 py-3 rounded-lg text-sm font-medium transition-all',
                  pathname === item.href
                    ? 'bg-[#0066FF] text-white'
                    : isScrolled
                      ? 'text-slate-600 hover:bg-slate-100'
                      : 'text-white/80 hover:bg-white/10'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btn-primary mt-4"
            >
              <Phone className="w-4 h-4" />
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
