import { MapPin, Phone, Mail, Clock, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { businessInfo, courses } from '../data/content';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="dark-gradient-bg pt-16 lg:pt-24 pb-8" role="contentinfo">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">GA</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">Goodwill Academy</h3>
                <p className="text-white/60 text-sm">Since 2007</p>
              </div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Nagpur's premier coaching institute for JEE, MHCET, NEET, GATE & XI-XII Science. Join 5000+ successful students.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 hover:text-amber-400 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-white mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {courses.slice(0, 6).map((course) => (
                <li key={course.id}>
                  <a href="#courses" className="text-white/70 hover:text-amber-400 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    {course.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/70">
                  {businessInfo.addresses[0].address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="text-white/70 hover:text-white transition-colors">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="text-white/70 hover:text-white transition-colors">
                  {businessInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-white/70">
                  Mon-Fri: 7AM-9PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Goodwill Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
