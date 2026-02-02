'use client';

import { ArrowRight, Github } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 sm:py-32 bg-primary-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-5xl sm:text-6xl font-bold font-serif text-white mb-6">
          Ready to Start Creating?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
          Join thousands of teams who use Excalidraw to bring their ideas to life. No signup required, completely free and open source.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-ink text-paper rounded-2xl hover:bg-white hover:text-ink transition-all duration-300 font-bold shadow-xl hover:-translate-y-1">
            Launch Excalidraw
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white/20 rounded-2xl hover:bg-white/10 transition-colors duration-300 font-bold">
            <Github className="w-5 h-5" />
            View on GitHub
          </button>
        </div>

        <p className="text-white/70 text-sm font-medium tracking-wide uppercase">
          No credit card required • Works offline • Open source • Always free
        </p>
      </div>
    </section>
  );
}
