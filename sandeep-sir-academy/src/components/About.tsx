import { Award, BookOpen, CheckCircle, Clock, GraduationCap, Home, Target, Users } from 'lucide-react';
import { features, whyChooseUs } from '../data/content';
import { siteImages } from '../data/assets';

export default function About() {
  const featureIcons = [GraduationCap, BookOpen, Target, Users, Award, Home, CheckCircle, Clock];

  return (
    <section id="about" className="bg-[#f8f4ea] py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <div className="image-sheen rounded-lg border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10">
              <img
                src={siteImages.classroom.src}
                alt={siteImages.classroom.alt}
                className="h-[360px] w-full rounded-md object-cover sm:h-[430px]"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 grid grid-cols-3 overflow-hidden rounded-lg border border-white/70 bg-white shadow-xl shadow-slate-900/15">
              {[
                ['Since', '2007'],
                ['Result Focus', '100%'],
                ['Demo', 'Free'],
              ].map(([label, value]) => (
                <div key={label} className="border-r border-slate-100 p-4 text-center last:border-r-0">
                  <div className="text-xl font-black text-red-700">{value}</div>
                  <div className="text-xs font-bold text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 lg:pt-0">
            <span className="section-kicker">About Goodwill</span>
            <h2 className="section-title">
              Coaching that treats preparation like a complete system.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Under <strong className="text-red-700">Prof. Sandeep Sir</strong>, Goodwill Classes has supported Nagpur students since 2007 with focused classroom teaching for Foundation Course (IX+X) and XI+XII Science.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyChooseUs.slice(0, 4).map((item, index) => {
                const Icon = featureIcons[index];
                return (
                  <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                    <Icon className="mb-3 h-6 w-6 text-red-700" />
                    <h3 className="font-black text-slate-950">{item.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-lg border-l-4 border-emerald-600 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <Target className="mt-1 h-6 w-6 flex-shrink-0 text-emerald-700" />
                <div>
                  <h3 className="font-black text-slate-950">What students get here</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Concept-led teaching, DPPs, weekly tests, doubt support, board-oriented preparation, and disciplined academic mentoring for school and science-stream students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.slice(0, 8).map((feature, index) => {
            const Icon = featureIcons[index] || CheckCircle;
            return (
              <article key={feature.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm card-hover">
                <Icon className="mb-4 h-7 w-7 text-red-700" />
                <h3 className="font-black text-slate-950">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
