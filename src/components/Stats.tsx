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
    <section id="stats" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Loved by Teams Worldwide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
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
