'use client';

import { Users, Heart, Globe, Code } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '100K+',
    label: 'Active Users Daily',
  },
  {
    icon: Globe,
    value: '180+',
    label: 'Countries',
  },
  {
    icon: Heart,
    value: '50K+',
    label: 'GitHub Stars',
  },
  {
    icon: Code,
    value: '300+',
    label: 'Contributors',
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'Product Manager, TechCorp',
    quote: 'Excalidraw changed how our team collaborates. Its simplicity and real-time features make it indispensable.',
    initials: 'SC',
  },
  {
    name: 'Marcus Johnson',
    title: 'Lead Developer, StartupXYZ',
    quote: 'The hand-drawn aesthetic makes our technical diagrams more approachable. Our clients love it.',
    initials: 'MJ',
  },
  {
    name: 'Elena Rodriguez',
    title: 'Design Lead, Creative Studio',
    quote: 'From quick sketches to detailed wireframes, Excalidraw handles it all. And it\'s open source!',
    initials: 'ER',
  },
];

export function Stats() {
  return (
    <section id="stats" className="py-20 sm:py-32 bg-paper relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-b border-ink/10 pb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-ink/5 group-hover:-translate-y-1 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl font-bold font-serif text-ink mb-2">
                  {stat.value}
                </div>
                <p className="text-ink/60 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-ink text-center mb-16">
            Loved by Teams Worldwide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl border-2 border-ink/5 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 flex flex-col"
              >
                <div className="flex-grow">
                  <p className="text-ink/80 text-lg mb-6 leading-relaxed font-serif italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-ink/5">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-lg shadow-inner">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-ink">{testimonial.name}</p>
                    <p className="text-sm text-ink/60">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
