import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/content';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-950 py-16 text-white lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="mb-3 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-extrabold uppercase text-cyan-200">
              Student Outcomes
            </span>
            <h2 className="text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
              Training built around the next career step.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Students come for exam readiness, subject clarity, technical skills, and career guidance across engineering and computer programs.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-slate-950/20">
              <div className="mb-5 flex items-center justify-between gap-4">
                <Quote className="h-8 w-8 text-cyan-300" />
                <div className="flex gap-1" aria-label="Five star review">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-amber-300 text-amber-300" />
                  ))}
                </div>
              </div>
              <blockquote className="leading-8 text-slate-100">"{testimonial.quote}"</blockquote>
              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="font-black text-white">{testimonial.name}</div>
                <div className="mt-1 text-sm font-bold text-cyan-200">{testimonial.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
