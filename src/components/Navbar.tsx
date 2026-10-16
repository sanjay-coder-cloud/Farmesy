import React from 'react';
import { Presentation, Sprout } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenPresentation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenPresentation,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Brand */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            <Sprout className="w-4 h-4 text-emerald-100" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 font-display whitespace-nowrap shrink-0">
            Farmesy
          </span>
        </button>

        {/* Navigation links - streamlined */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => onNavigate('indian-crops')}
            className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
              activeSection === 'indian-crops' ? 'text-emerald-600 font-semibold' : ''
            }`}
          >
            Crops
          </button>
          <button
            onClick={() => onNavigate('grains')}
            className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
              activeSection === 'grains' ? 'text-emerald-600 font-semibold' : ''
            }`}
          >
            Grains
          </button>
          <button
            onClick={() => onNavigate('fertilizers')}
            className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
              activeSection === 'fertilizers' ? 'text-emerald-600 font-semibold' : ''
            }`}
          >
            Fertilizers
          </button>
          <button
            onClick={() => onNavigate('villages')}
            className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
              activeSection === 'villages' ? 'text-emerald-600 font-semibold' : ''
            }`}
          >
            Villages
          </button>
          <button
            onClick={() => onNavigate('roi')}
            className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
              activeSection === 'roi' ? 'text-emerald-600 font-semibold' : ''
            }`}
          >
            Economics
          </button>
        </nav>

        {/* Primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPresentation}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <Presentation className="w-4 h-4" />
            <span>Presentation</span>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="lg:hidden flex items-center overflow-x-auto px-4 py-2 bg-slate-50 border-t border-slate-200 text-sm text-slate-600 gap-4 no-scrollbar">
        <button
          onClick={() => onNavigate('indian-crops')}
          className={`whitespace-nowrap shrink-0 py-1 ${
            activeSection === 'indian-crops' ? 'text-emerald-600 font-semibold' : 'hover:text-slate-900'
          }`}
        >
          Crops
        </button>
        <button
          onClick={() => onNavigate('grains')}
          className={`whitespace-nowrap shrink-0 py-1 ${
            activeSection === 'grains' ? 'text-emerald-600 font-semibold' : 'hover:text-slate-900'
          }`}
        >
          Grains
        </button>
        <button
          onClick={() => onNavigate('fertilizers')}
          className={`whitespace-nowrap shrink-0 py-1 ${
            activeSection === 'fertilizers' ? 'text-emerald-600 font-semibold' : 'hover:text-slate-900'
          }`}
        >
          Fertilizers
        </button>
        <button
          onClick={() => onNavigate('villages')}
          className={`whitespace-nowrap shrink-0 py-1 ${
            activeSection === 'villages' ? 'text-emerald-600 font-semibold' : 'hover:text-slate-900'
          }`}
        >
          Villages
        </button>
        <button
          onClick={() => onNavigate('roi')}
          className={`whitespace-nowrap shrink-0 py-1 ${
            activeSection === 'roi' ? 'text-emerald-600 font-semibold' : 'hover:text-slate-900'
          }`}
        >
          Economics
        </button>
      </div>
    </header>
  );
};
