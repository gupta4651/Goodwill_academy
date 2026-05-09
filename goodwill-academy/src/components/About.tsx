import { Target, Eye, Heart, Users, BookOpen, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7054d23?w=800&q=80"
                alt="Students learning together at Goodwill Academy"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute -right-4 -bottom-4 lg:-right-8 lg:-bottom-8 bg-blue-600 text-white rounded-xl p-6 shadow-xl z-20">
              <div className="text-4xl font-bold">17+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
            <div className="absolute -left-4 top-1/4 bg-amber-500 text-slate-900 rounded-xl p-4 shadow-xl z-20 hidden lg:block">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-xs">Success Rate</div>
            </div>
            {/* Decorative Background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-amber-100 rounded-3xl -z-10 transform rotate-3"></div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 id="about-heading" className="section-heading mt-2">
              Nagpur's Most Trusted
              <span className="gradient-text"> Coaching Destination</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Goodwill Academy has been shaping futures since 2007, emerging as Nagpur's premier coaching institute for competitive examinations. Our commitment to academic excellence and personalized attention has helped thousands of students achieve their dreams.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We believe that every student has potential; what they need is the right guidance and environment to flourish. Our expert faculty, proven methodologies, and state-of-the-art facilities create the perfect ecosystem for success.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Target, label: 'Focused Learning' },
                { icon: Eye, label: 'Clear Vision' },
                { icon: Heart, label: 'Student-First Approach' },
                { icon: Users, label: 'Small Batch Sizes' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="flex flex-wrap gap-6 border-t border-slate-200 pt-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-sm text-slate-500">Students Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-500">25+</div>
                <div className="text-sm text-slate-500">Expert Faculty</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-500">2</div>
                <div className="text-sm text-slate-500">Convenient Locations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
