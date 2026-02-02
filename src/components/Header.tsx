'use client';

import { PenTool, Github, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onLoginClick?: () => void;
}

export function Header({ onLoginClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-ink/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-ink text-paper p-2 rounded-lg transform -rotate-3">
            <PenTool className="w-6 h-6" />
          </div>
          <span className="text-2xl font-serif font-bold text-ink tracking-tight">Excalidraw</span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden lg:flex items-center gap-8">
          <a href="#features" className="text-ink/70 hover:text-ink font-medium transition-colors">
            Features
          </a>
          <a href="#use-cases" className="text-ink/70 hover:text-ink font-medium transition-colors">
            Use Cases
          </a>
          <a href="#stats" className="text-ink/70 hover:text-ink font-medium transition-colors">
            About
          </a>
          <a
            href="https://github.com/excalidraw/excalidraw"
            className="flex items-center gap-2 text-ink/70 hover:text-ink font-medium transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <button
            onClick={onLoginClick}
            className="px-6 py-2 bg-ink text-paper rounded-xl hover:bg-primary-600 hover:text-white transition-all font-bold shadow-md hover:shadow-lg"
          >
            Start Drawing
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-paper border-b border-ink/5 lg:hidden shadow-lg animate-fade-in-down">
            <div className="flex flex-col p-6 gap-6">
              <a href="#features" className="text-lg font-medium text-ink/70 hover:text-ink transition-colors font-serif">
                Features
              </a>
              <a href="#use-cases" className="text-lg font-medium text-ink/70 hover:text-ink transition-colors font-serif">
                Use Cases
              </a>
              <a href="#stats" className="text-lg font-medium text-ink/70 hover:text-ink transition-colors font-serif">
                About
              </a>
              <a
                href="https://github.com/excalidraw/excalidraw"
                className="flex items-center gap-2 text-lg font-medium text-ink/70 hover:text-ink transition-colors font-serif"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <button
                onClick={onLoginClick}
                className="w-full px-6 py-3 bg-ink text-paper rounded-xl hover:bg-primary-600 hover:text-white transition-all font-bold shadow-md"
              >
                Start Drawing
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
