import type { ComponentType } from 'react';
import { ArrowRight, BookOpen, Check, Clock, Cpu, GraduationCap, Monitor, Users } from 'lucide-react';
import { courses } from '../data/content';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  gate: GraduationCap,
  engg: Cpu,
  poly: BookOpen,
  computer: Monitor,
};

export default function Courses() {
  return (
    <section id="courses" className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="section-kicker">Programs</span>
          <h2 className="section-title">Four tracks under the engineering academy.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            GATE, engineering subjects, polytechnic entrance support, and computer certification programs kept together for career progression.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course, index) => {
            const IconComponent = iconMap[course.id] || BookOpen;
            return (
              <article key={course.id} className="tech-card flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-950 text-cyan-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-500">0{index + 1}</span>
                </div>

                <h3 className="mt-5 text-xl font-black text-slate-950">{course.title}</h3>
                <p className="mt-1 text-sm font-bold text-cyan-800">{course.subtitle}</p>
                <p className="mt-4 flex-1 leading-7 text-slate-600">{course.description}</p>

                <div className="mt-6 space-y-2">
                  {course.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <Check className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5 text-xs font-bold text-slate-500">
                  <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-3 py-2">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-3 py-2">
                    <Users className="h-4 w-4" />
                    {course.mode}
                  </span>
                </div>

                <a href="#contact" className="mt-6 inline-flex items-center gap-2 font-black text-cyan-800 transition hover:text-slate-950">
                  Enquire Now <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
