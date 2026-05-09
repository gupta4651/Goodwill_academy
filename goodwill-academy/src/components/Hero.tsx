import { useState, useEffect } from 'react';
import { Star, Users, Award, Calendar, Phone, ArrowRight, Play } from 'lucide-react';
import { businessInfo, stats } from '../data/content';

export default function Hero() {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const trustBadges = [
    { icon: Star, value: businessInfo.rating.toString(), label: 'Google Rating', suffix: '/5' },
    { icon: Users, value: '5000+', label: 'Students Trained' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: Calendar, value: '17+', label: 'Years Experience' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854055-8a4aa7cfd1e9?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 gradient-bg opacity-95"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white text-sm font-medium">Since 2007 • Nagpur's Premier Coaching Institute</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Future with
            <span className="block mt-2 text-amber-400">Expert Coaching Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join 5000+ successful students who achieved their dreams in JEE, MHCET, NEET & GATE with our expert faculty and proven teaching methodology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#courses"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-lg shadow-lg hover:shadow-amber-500/25 w-full sm:w-auto justify-center"
            >
              Explore Courses
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-lg w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              Get Free Counseling
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
              >
                <badge.icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{badge.value}{badge.suffix}</div>
                <div className="text-sm text-white/70">{badge.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-2 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
