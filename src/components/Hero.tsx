'use client';

import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 sm:pt-32 sm:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl font-serif font-bold text-ink leading-[1.1] tracking-tight">
                Draw, Design, <br/>
                <span className="italic text-primary-600">Together.</span>
              </h1>
              <p className="text-xl text-ink/70 leading-relaxed font-sans max-w-lg">
                The open-source whiteboard that feels like paper. Sketch diagrams, wireframes, and ideas with a natural, hand-drawn feel.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-ink text-paper rounded-2xl hover:bg-primary-600 hover:text-white transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1">
                Start Drawing
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-ink border-2 border-ink/10 rounded-2xl hover:border-primary-600 hover:text-primary-600 transition-colors duration-300 font-bold">
                <Play className="w-5 h-5" />
                View Demo
              </button>
            </div>

            <div className="flex items-center gap-12 pt-8 border-t border-ink/5">
              <div>
                <div className="text-3xl font-serif font-bold text-ink">100K+</div>
                <div className="text-sm font-medium text-ink/50 uppercase tracking-wider">Daily Users</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-ink">50M+</div>
                <div className="text-sm font-medium text-ink/50 uppercase tracking-wider">Diagrams</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-ink">50K+</div>
                <div className="text-sm font-medium text-ink/50 uppercase tracking-wider">Stars</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary-200/30 rounded-[2rem] blur-3xl -z-10 transform rotate-3"></div>
            <div className="bg-white rounded-[2rem] shadow-xl p-8 border-2 border-ink/5 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <svg className="w-full h-auto" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                {/* Hand-drawn style strokes */}
                <rect x="20" y="40" width="120" height="80" fill="none" stroke="#1B1B1B" strokeWidth="2.5" rx="2" strokeDasharray="400" strokeLinecap="round" />
                <text x="80" y="85" textAnchor="middle" className="text-sm font-bold font-serif" fill="#1B1B1B">
                  Design
                </text>

                <circle cx="280" cy="100" r="50" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
                <text x="280" y="105" textAnchor="middle" className="text-sm font-bold font-serif" fill="#1B1B1B">
                  Idea
                </text>

                <path
                  d="M 140 80 Q 210 50 230 50"
                  stroke="#1B1B1B"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4 4"
                  markerEnd="url(#arrowhead)"
                />

                <rect x="50" y="180" width="100" height="70" fill="none" stroke="#1B1B1B" strokeWidth="2.5" rx="2" strokeLinecap="round" />
                <text x="100" y="220" textAnchor="middle" className="text-sm font-bold font-serif" fill="#1B1B1B">
                  Prototype
                </text>

                <circle cx="280" cy="220" r="45" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
                <text x="280" y="228" textAnchor="middle" className="text-sm font-bold font-serif" fill="#1B1B1B">
                  Deploy
                </text>

                <path
                  d="M 150 220 Q 210 220 235 220"
                  stroke="#1B1B1B"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />

                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="12"
                    markerHeight="12"
                    refX="10"
                    refY="4"
                    orient="auto"
                  >
                    <path d="M0,0 L12,4 L0,8" fill="none" stroke="#1B1B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
