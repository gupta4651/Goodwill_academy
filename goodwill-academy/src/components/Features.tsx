import { Users, Award, Heart, Building, ClipboardCheck, Clock } from 'lucide-react';
import { features } from '../data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'users': Users,
  'award': Award,
  'heart': Heart,
  'building': Building,
  'clipboard-check': ClipboardCheck,
  'clock': Clock,
};

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white" aria-labelledby="features-heading">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 id="features-heading" className="section-heading mt-2">
            The Goodwill Academy <span className="gradient-text">Advantage</span>
          </h2>
          <p className="section-subheading mt-4">
            What sets us apart from other coaching institutes in Nagpur? Our commitment to excellence in every aspect of education.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Award;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 lg:p-12 rounded-3xl gradient-bg text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Future?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join thousands of successful students who started their journey at Goodwill Academy. Your dream college and career are just one decision away.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all duration-300">
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
