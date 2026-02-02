'use client';

import {
  Zap,
  Share2,
  Lock,
  Download,
  Users,
  Palette,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Hand-Drawn Aesthetic',
    description: 'Create beautiful diagrams with a natural, sketched appearance that feels organic and approachable.',
  },
  {
    icon: Users,
    title: 'Real-Time Collaboration',
    description: 'Work together with team members in real-time. See cursors, changes, and updates instantly.',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'End-to-end encryption by default. Your diagrams are yours alone, stored securely on your device.',
  },
  {
    icon: Download,
    title: 'Multiple Export Options',
    description: 'Save and export your work as PNG, SVG, or embed directly in documents and presentations.',
  },
  {
    icon: Palette,
    title: 'Customizable Styling',
    description: 'Customize colors, fonts, stroke styles, and more to match your brand and preferences.',
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Generate shareable links to collaborate with others or share read-only versions of your diagrams.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 bg-ink/[0.02] -skew-y-3 transform origin-top-left z-0 h-full w-full"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-ink mb-6">
            Designed for Creativity
          </h2>
          <p className="text-xl text-ink/70 max-w-2xl mx-auto font-sans">
            Everything you need to bring your ideas to life, without the complexity of traditional design tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white border-2 border-ink/5 rounded-2xl hover:border-primary-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-24 h-24 text-primary-600 transform rotate-12" />
                </div>

                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-3 bg-primary-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-ink mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-ink/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
