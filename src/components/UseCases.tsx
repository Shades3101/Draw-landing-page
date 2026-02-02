'use client';

import { Lightbulb, Layers, GitBranch, Layout } from 'lucide-react';

const useCases = [
  {
    icon: Lightbulb,
    title: 'Brainstorming Sessions',
    description: 'Quick and intuitive way to capture ideas. Perfect for team brainstorming and mind mapping without distractions.',
  },
  {
    icon: Layout,
    title: 'UI/UX Wireframing',
    description: 'Sketch out user interfaces and flows with ease. Share quick prototypes and gather feedback from stakeholders.',
  },
  {
    icon: Layers,
    title: 'System Architecture',
    description: 'Design system diagrams, database schemas, and infrastructure layouts. Communicate complex systems simply.',
  },
  {
    icon: GitBranch,
    title: 'Process Flowcharts',
    description: 'Create flowcharts and process diagrams to document workflows and improve team communication.',
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 sm:py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-ink mb-6">
            Infinite Possibilities
          </h2>
          <p className="text-xl text-ink/70 max-w-2xl mx-auto font-sans">
            From quick sketches to complex systems, use Excalidraw for every kind of visual thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="flex gap-6 p-8 bg-white rounded-2xl border-2 border-ink/5 hover:border-primary-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-primary-100 rotate-3 group-hover:rotate-0 transition-transform">
                    <Icon className="h-7 w-7 text-primary-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-ink mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-ink/70 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-ink rounded-[2rem] p-12 text-paper relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
            <div>
              <div className="text-5xl font-bold font-serif text-primary-400 mb-3">
                100%
              </div>
              <p className="text-paper/80 font-medium tracking-wide uppercase">Open Source</p>
            </div>
            <div>
              <div className="text-5xl font-bold font-serif text-primary-400 mb-3">
                Free
              </div>
              <p className="text-paper/80 font-medium tracking-wide uppercase">Forever & Always</p>
            </div>
            <div>
              <div className="text-5xl font-bold font-serif text-primary-400 mb-3">
                Zero
              </div>
              <p className="text-paper/80 font-medium tracking-wide uppercase">Setup Required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
