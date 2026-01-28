'use client';

import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-20 pb-32 sm:pt-32 sm:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                Draw, Design, and Brainstorm Together
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A free and open-source whiteboard application that lets you create diagrams, wireframes, and flowcharts with a hand-drawn aesthetic. Perfect for real-time collaboration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                Start Drawing
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-semibold">
                <Play className="w-5 h-5" />
                View Demo
              </button>
            </div>

            <div className="flex items-center gap-8 text-gray-600 pt-4">
              <div>
                <div className="text-2xl font-bold text-gray-900">100K+</div>
                <div className="text-sm">Daily Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">50M+</div>
                <div className="text-sm">Diagrams Created</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm">GitHub Stars</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl blur-3xl opacity-30 -z-10"></div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <svg className="w-full h-auto" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="40" width="120" height="80" fill="none" stroke="#3b82f6" strokeWidth="2" rx="8" />
                <text x="80" y="85" textAnchor="middle" className="text-sm font-semibold" fill="#1f2937">
                  Design
                </text>

                <circle cx="280" cy="100" r="50" fill="none" stroke="#06b6d4" strokeWidth="2" />
                <text x="280" y="105" textAnchor="middle" className="text-sm font-semibold" fill="#1f2937">
                  Idea
                </text>

                <path
                  d="M 140 80 Q 210 50 230 50"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />

                <rect x="50" y="180" width="100" height="70" fill="none" stroke="#ec4899" strokeWidth="2" rx="8" />
                <text x="100" y="220" textAnchor="middle" className="text-sm font-semibold" fill="#1f2937">
                  Prototype
                </text>

                <circle cx="280" cy="220" r="45" fill="none" stroke="#f59e0b" strokeWidth="2" />
                <text x="280" y="228" textAnchor="middle" className="text-sm font-semibold" fill="#1f2937">
                  Deploy
                </text>

                <path
                  d="M 150 220 Q 210 220 235 220"
                  stroke="#10b981"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />

                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
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
