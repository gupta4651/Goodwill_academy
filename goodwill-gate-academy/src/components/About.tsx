import { Award, BookOpen, BriefcaseBusiness, CheckCircle, Cpu, GraduationCap, Target, Users } from 'lucide-react';
import { whyChooseUs } from '../data/content';
import { siteImages } from '../data/assets';

export default function About() {
  const icons = [Award, GraduationCap, Users, BookOpen, Cpu, BriefcaseBusiness];

  return (
    <section id="about" className="bg-[#f3f7f9] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="section-kicker">Engineering Academy</span>
            <h2 className="section-title">A technical coaching hub for engineering careers.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Goodwill GATE Academy is the separate engineering-focused branch for GATE, PSU preparation, engineering subjects, polytechnic coaching, and job-oriented computer programs.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyChooseUs.map((item, index) => {
                const Icon = icons[index] || CheckCircle;
                return (
                  <article key={item.label} className="tech-card p-5">
                    <Icon className="mb-3 h-6 w-6 text-cyan-700" />
                    <h3 className="font-black text-slate-950">{item.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10">
              <img src={siteImages.engineering.src} alt={siteImages.engineering.alt} className="h-[420px] w-full rounded-md object-cover" />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-lg border border-white/70 bg-white p-5 shadow-xl shadow-slate-900/15">
              <div className="flex items-start gap-4">
                <Target className="mt-1 h-7 w-7 flex-shrink-0 text-cyan-700" />
                <div>
                  <h3 className="font-black text-slate-950">Built for outcomes</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Test series, previous-year analysis, practical training, career guidance, and placement support are treated as part of the program, not extras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
