import { useEffect, useState } from 'react';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import { businessInfo } from '../data/content';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#courses' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Results', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const phoneHref = businessInfo.phone.replace(/\s+/g, '');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <div className="hidden bg-slate-950 py-2 text-sm text-white md:block">
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
          <span className="text-slate-300">Engineering, GATE, Polytechnic & Computer Institute | Nagpur</span>
          <a href={`tel:${phoneHref}`} className="inline-flex items-center gap-2 font-bold text-cyan-200 transition hover:text-white">
            <Phone className="h-4 w-4" />
            {businessInfo.phone}
          </a>
        </div>
      </div>

      <header className={`sticky top-0 z-50 border-b transition duration-300 ${isScrolled ? 'border-slate-200 bg-white/95 shadow-sm backdrop-blur' : 'border-slate-100 bg-white'}`}>
        <nav className="container mx-auto px-4 lg:px-8" aria-label="Primary navigation">
          <div className="flex h-20 items-center justify-between">
            <a href="#home" className="flex min-w-0 items-center gap-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-slate-950">
                <span className="text-sm font-black text-cyan-300">GG</span>
              </div>
              <div className="min-w-0">
                <p className="truncate text-base font-black leading-tight text-slate-950 sm:text-lg">GOODWILL GATE ACADEMY</p>
                <p className="text-xs font-bold text-cyan-700">Engineering + Computer Institute</p>
              </div>
            </a>

            <div className="hidden items-center gap-7 lg:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-extrabold text-slate-700 transition hover:text-cyan-700">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={`https://wa.me/${businessInfo.whatsapp}?text=Hi, I want admission details for Goodwill GATE Academy.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-4 py-2 text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a href="#contact" className="btn-primary px-4 py-2 text-sm">
                Enquire Now
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex-shrink-0 rounded-md p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div className={`overflow-hidden transition-all duration-300 lg:hidden ${isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
            <div className="flex flex-col gap-2 border-t border-slate-200 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-md px-4 py-2 font-bold text-slate-700 hover:bg-cyan-50 hover:text-cyan-800"
                >
                  {link.label}
                </a>
              ))}
              <a href={`tel:${phoneHref}`} className="flex items-center gap-2 px-4 py-2 font-bold text-cyan-800">
                <Phone className="h-4 w-4" />
                {businessInfo.phone}
              </a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary mt-2">
                Enquire Now
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
