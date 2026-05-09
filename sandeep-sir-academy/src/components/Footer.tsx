import { ArrowRight, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { businessInfo, courses } from '../data/content';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Courses', href: '#courses' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const phoneHref = businessInfo.phone.replace(/\s+/g, '');

  return (
    <footer className="bg-slate-950 pt-16 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1.2fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-700">
                <span className="font-black text-white">GW</span>
              </div>
              <div>
                <h3 className="font-black">GOODWILL CLASSES</h3>
                <p className="text-xs font-bold text-amber-200">Prof. Sandeep Sir</p>
              </div>
            </div>
            <p className="max-w-sm leading-7 text-slate-400">
              17+ years of focused coaching for Foundation Course (IX+X) and XI+XII Science students in Nagpur.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={businessInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 transition hover:bg-blue-600" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 transition hover:bg-pink-600" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-black text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="inline-flex items-center gap-2 text-slate-400 transition hover:text-white">
                    <ArrowRight className="h-4 w-4" /> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-black text-white">Programs</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.id}>
                  <a href="#courses" className="inline-flex items-center gap-2 text-slate-400 transition hover:text-white">
                    <ArrowRight className="h-4 w-4" /> {course.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-black text-white">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-red-400" />
                <div className="space-y-2 text-sm leading-6 text-slate-400">
                  {businessInfo.addresses.map((address) => (
                    <p key={address.label}><strong className="text-slate-200">{address.label}:</strong> {address.address}</p>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-400" />
                <a href={`tel:${phoneHref}`} className="font-bold text-slate-300 transition hover:text-white">{businessInfo.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-400" />
                <a href={`mailto:${businessInfo.email}`} className="text-slate-400 transition hover:text-white">{businessInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 rounded-lg border border-red-400/20 bg-red-500/10 p-5 text-center">
          <p className="text-slate-300">Also explore our GATE & Engineering Academy</p>
          <a href="https://goodwillgate.edu.co.in" className="mt-2 inline-flex font-black text-amber-200 transition hover:text-white">
            www.goodwillgate.edu.co.in | Call: 8237812411
          </a>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Goodwill Classes. All rights reserved.</p>
          <p>{businessInfo.website}</p>
        </div>
      </div>
    </footer>
  );
}
