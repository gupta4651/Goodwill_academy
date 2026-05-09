import { ArrowRight, Award, CheckCircle, Cpu, GraduationCap, MessageCircle, Phone, Users } from 'lucide-react';
import { businessInfo, stats } from '../data/content';
import { siteImages } from '../data/assets';

export default function Hero() {
  const programTags = ['GATE', 'Engineering Classes', 'Polytechnic', 'Computer Institute'];
  const phoneHref = businessInfo.phone.replace(/\s+/g, '');

  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
      <img src={siteImages.hero.src} alt={siteImages.hero.alt} className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.98)_0%,rgba(12,38,65,0.9)_48%,rgba(2,6,23,0.35)_100%)]" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />

      <div className="container relative mx-auto px-4 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-extrabold text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Admissions Open 2026
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
              GOODWILL GATE ACADEMY
            </h1>
            <p className="mt-4 text-xl font-extrabold text-cyan-200 lg:text-2xl">Engineering + Computer Institute</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100 lg:text-lg">
              {businessInfo.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {programTags.map((tag) => (
                <span key={tag} className="flex-shrink-0 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white backdrop-blur">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
              {[
                'GATE coaching and PSU guidance',
                'Engineering and polytechnic classes',
                'Computer institute with certification',
                'Placement and career support',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm font-semibold text-slate-100">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-cyan-300" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Get Admission Details <ArrowRight className="h-5 w-5" />
              </a>
              <a href={`tel:${phoneHref}`} className="btn-secondary border-white/30 bg-white/95">
                <Phone className="h-5 w-5" />
                {businessInfo.phone}
              </a>
              <a
                href={`https://wa.me/${businessInfo.whatsapp}?text=Hi, I want admission details for Goodwill GATE Academy.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-emerald-300/40 bg-emerald-600 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-lg border border-white/15 bg-white/10 p-4 shadow-2xl shadow-slate-950/20 backdrop-blur">
              <img src={siteImages.gate.src} alt={siteImages.gate.alt} className="h-56 w-full rounded-md object-cover lg:h-72" />
              <div className="mt-4 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-cyan-300" />
                <p className="font-black">{siteImages.gate.caption}</p>
              </div>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/10 p-4 shadow-2xl shadow-slate-950/20 backdrop-blur">
              <img src={siteImages.computer.src} alt={siteImages.computer.alt} className="h-56 w-full rounded-md object-cover lg:h-56" />
              <div className="mt-4 flex items-center gap-3">
                <Cpu className="h-6 w-6 text-amber-300" />
                <p className="font-black">{siteImages.computer.caption}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-y border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="container mx-auto grid grid-cols-2 gap-px px-4 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, index) => {
            const icons = [Award, Users, GraduationCap, Cpu];
            const Icon = icons[index] || Award;
            return (
              <div key={stat.label} className="px-2 py-5 text-center lg:py-6">
                <Icon className="mx-auto mb-2 h-6 w-6 text-cyan-300" />
                <div className="text-2xl font-black text-white lg:text-3xl">{stat.value}{stat.suffix}</div>
                <div className="text-xs font-bold text-slate-300 lg:text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
