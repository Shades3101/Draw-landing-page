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
    <section id="use-cases" className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Use Cases
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Teams across industries use Excalidraw for every kind of visual thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className="flex gap-6 p-8 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-12 border border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                100%
              </div>
              <p className="text-gray-600">Open Source</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                Free
              </div>
              <p className="text-gray-600">Forever & Always</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                0
              </div>
              <p className="text-gray-600">Account Required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
