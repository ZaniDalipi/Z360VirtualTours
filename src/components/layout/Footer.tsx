import Link from 'next/link';
import {
  Camera,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  ArrowRight,
  Globe,
} from 'lucide-react';

const navigation = {
  services: [
    { name: '360° Photography', href: '/services#photography' },
    { name: 'Virtual Tour Creation', href: '/services#virtual-tours' },
    { name: '3D Dollhouse Views', href: '/services#3d-dollhouse' },
    { name: 'Drone Aerials', href: '/services#drone' },
    { name: 'Google Street View', href: '/services#google-sv' },
    { name: 'VR Experiences', href: '/services#vr' },
  ],
  industries: [
    { name: 'Real Estate', href: '/portfolio?category=real-estate' },
    { name: 'Hospitality', href: '/portfolio?category=hospitality' },
    { name: 'Business', href: '/portfolio?category=business-showcase' },
    { name: 'Education', href: '/portfolio?category=education' },
    { name: 'Healthcare', href: '/portfolio?category=healthcare' },
    { name: 'Museums', href: '/portfolio?category=museums-culture' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/about#testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Sitemap', href: '/sitemap' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/z360virtualtours' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/z360virtualtours' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/z360virtualtours' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/z360virtualtours' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/z360tours' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] rounded-2xl p-8 lg:p-12">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Ready to Transform Your Space?
              </h3>
              <p className="text-white/80 max-w-xl">
                Get a free consultation and discover how 360° virtual tours can elevate your business.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-white text-[#0066FF] px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#0066FF] to-[#00D4FF]">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-white">
                  Z360
                </span>
                <span className="text-xs font-medium tracking-wider uppercase text-slate-400">
                  Virtual Tours
                </span>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              Professional 360° virtual tour services that transform spaces into immersive digital experiences. Trusted by businesses worldwide.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@z360virtualtours.com"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-[#0066FF]" />
                info@z360virtualtours.com
              </a>
              <a
                href="tel:+15553600000"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-[#0066FF]" />
                +1 (555) 360-TOUR
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-[#0066FF]" />
                Los Angeles, CA, USA
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-white mb-4">Industries</h4>
            <ul className="space-y-3">
              {navigation.industries.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Globe className="w-4 h-4" />
              <span>&copy; {currentYear} Z360 Virtual Tours. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0066FF] hover:text-white transition-all"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Platform Badges */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span>Compatible with:</span>
            <span className="px-3 py-1 rounded-full bg-slate-800">Matterport</span>
            <span className="px-3 py-1 rounded-full bg-slate-800">CloudPano</span>
            <span className="px-3 py-1 rounded-full bg-slate-800">3DVista</span>
            <span className="px-3 py-1 rounded-full bg-slate-800">Kuula</span>
            <span className="px-3 py-1 rounded-full bg-slate-800">Panoee</span>
            <span className="px-3 py-1 rounded-full bg-slate-800">TeliportMe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
