'use client';

import { PenTool, Github, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PenTool className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">Excalidraw</span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden lg:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </a>
          <a href="#use-cases" className="text-gray-600 hover:text-gray-900 transition-colors">
            Use Cases
          </a>
          <a href="#stats" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </a>
          <a
            href="https://github.com/excalidraw/excalidraw"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Start Drawing
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 lg:hidden">
            <div className="flex flex-col p-4 gap-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#use-cases" className="text-gray-600 hover:text-gray-900 transition-colors">
                Use Cases
              </a>
              <a href="#stats" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a
                href="https://github.com/excalidraw/excalidraw"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Start Drawing
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
