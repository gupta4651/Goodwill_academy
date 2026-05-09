import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { businessInfo } from '../data/content';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav className="container mx-auto px-4 lg:px-8" role="navigation" aria-label="Main navigation">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group" aria-label="Goodwill Academy Home">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xl">GA</span>
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-bold text-xl leading-tight ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
                  Goodwill Academy
                </h1>
                <p className={`text-xs ${isScrolled ? 'text-slate-500' : 'text-white/80'}`}>
                  Shaping Futures
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-amber-500 ${
                    isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
                className={`flex items-center gap-2 font-medium ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>{businessInfo.phone}</span>
              </a>
              <a href="#contact" className="btn-primary">
                Enquire Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <div className="flex flex-col gap-2 pt-4 border-t border-slate-200/20">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium py-2 px-4 rounded-lg transition-colors ${
                    isScrolled
                      ? 'text-slate-700 hover:bg-slate-100'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
                className={`flex items-center gap-2 font-medium py-2 px-4 ${
                  isScrolled ? 'text-blue-600' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>{businessInfo.phone}</span>
              </a>
              <a href="#contact" className="btn-primary text-center justify-center mt-2">
                Enquire Now
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
