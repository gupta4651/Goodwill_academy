import { useEffect, useState, useRef } from 'react';
import { Users, Trophy, Calendar, GraduationCap, BookOpen, Star } from 'lucide-react';
import { stats } from '../data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'users': Users,
  'trophy': Trophy,
  'calendar': Calendar,
  'graduation-cap': GraduationCap,
  'book-open': BookOpen,
  'star': Star,
};

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

function StatCounter({ value, suffix, label, icon }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const IconComponent = iconMap[icon] || Star;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
        <IconComponent className="w-8 h-8 text-amber-400" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/80 font-medium">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 lg:py-24 dark-gradient-bg relative overflow-hidden" aria-label="Our Achievements">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
