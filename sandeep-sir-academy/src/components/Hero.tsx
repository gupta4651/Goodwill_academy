import { ArrowRight, Award, CalendarDays, CheckCircle, MessageCircle, Phone, ShieldCheck, Trophy, Users } from 'lucide-react';
import { businessInfo, stats } from '../data/content';
import { siteImages } from '../data/assets';

export default function Hero() {
  const examHighlights = ['Foundation IX + X', 'XI + XII Science', 'CBSE Board', 'State Board'];
  const phoneHref = businessInfo.phone.replace(/\s+/g, '');

  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
      <img
        src={siteImages.hero.src}
        alt={siteImages.hero.alt}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,15,30,0.96)_0%,rgba(8,15,30,0.84)_42%,rgba(8,15,30,0.34)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="container relative mx-auto px-4 py-14 lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-sm font-extrabold text-amber-100">
            <span className="h-2 w-2 rounded-full bg-amber-300" />
            Admissions Open 2026-27
          </div>

          <h1 className="max-w-full text-5xl font-black leading-none text-white sm:text-6xl lg:max-w-4xl lg:text-7xl">
            GOODWILL CLASSES
          </h1>
          <p className="mt-4 text-xl font-extrabold text-amber-200 lg:text-2xl">Prof. Sandeep Sir</p>
          <p className="mt-5 max-w-2xl break-words text-base leading-8 text-slate-100 lg:text-lg">
            {businessInfo.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {examHighlights.map((exam) => (
              <span key={exam} className="flex-shrink-0 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white backdrop-blur">
                {exam}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Book Free Demo Class
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href={`tel:${phoneHref}`} className="btn-secondary border-white/30 bg-white/95">
              <Phone className="h-5 w-5" />
              {businessInfo.phone}
            </a>
            <a
              href={`https://wa.me/${businessInfo.whatsapp}?text=Hi, I want admission details for Goodwill Classes.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-green-300/40 bg-green-500 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-green-600"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>

          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {[
              'One week free demo classes',
              'CBSE and State Board preparation',
              'Daily practice problems and weekly tests',
              'Hostel facility for outside students',
            ].map((point) => (
              <div key={point} className="flex items-center gap-3 text-sm font-semibold text-slate-100">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-300" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-y border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="container mx-auto grid grid-cols-2 gap-px px-4 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, index) => {
            const icons = [CalendarDays, Users, Trophy, Award];
            const Icon = icons[index] || ShieldCheck;
            return (
              <div key={stat.label} className="px-2 py-5 text-center lg:py-6">
                <Icon className="mx-auto mb-2 h-6 w-6 text-amber-300" />
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
