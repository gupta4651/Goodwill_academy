import { GraduationCap, FlaskConical, BookOpen, HeartPulse, Calculator, Atom, Megaphone, Briefcase, ArrowRight, Clock, Users } from 'lucide-react';
import { courses } from '../data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'graduation-cap': GraduationCap,
  'flask-conical': FlaskConical,
  'book-open': BookOpen,
  'heart-pulse': HeartPulse,
  'calculator': Calculator,
  'atom': Atom,
  'megaphone': Megaphone,
  'briefcase': Briefcase,
};

export default function Courses() {
  return (
    <section id="courses" className="py-20 lg:py-32 bg-slate-50" aria-labelledby="courses-heading">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Programs</span>
          <h2 id="courses-heading" className="section-heading mt-2">
            Comprehensive <span className="gradient-text">Coaching Programs</span>
          </h2>
          <p className="section-subheading mt-4">
            From JEE & MHCET preparation to skill development courses, we offer programs designed for every student's success journey.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => {
            const IconComponent = iconMap[course.icon] || BookOpen;
            return (
              <article
                key={course.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group card-hover border border-slate-100"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-800 mb-1">{course.title}</h3>
                <p className="text-sm text-amber-600 font-medium mb-3">{course.subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{course.description}</p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.mode}
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xs text-slate-500">Starting from</span>
                    <div className="text-lg font-bold text-blue-600">{course.price}</div>
                  </div>
                  <a
                    href="#contact"
                    className="flex items-center gap-1 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                    aria-label={`Learn more about ${course.title}`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Not sure which course is right for you?</p>
          <a href="#contact" className="btn-primary">
            Get Free Career Counseling
          </a>
        </div>
      </div>
    </section>
  );
}
