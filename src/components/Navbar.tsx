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
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md text-stone-100 border-b border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single line, no clutter) */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            <Sprout className="w-4 h-4 text-emerald-100" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-display whitespace-nowrap shrink-0">
            Farmesy
          </span>
        </button>

        {/* Zone 2: clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs xl:text-sm font-medium text-stone-300">
          <button
            onClick={() => onNavigate('indian-crops')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white flex items-center gap-1.5 ${
              activeSection === 'indian-crops' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>10 Crop Types</span>
          </button>
          <button
            onClick={() => onNavigate('comparator')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white ${
              activeSection === 'comparator' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            Comparator
          </button>
          <button
            onClick={() => onNavigate('agro-zones')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white ${
              activeSection === 'agro-zones' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            Agro-Zones
          </button>
          <button
            onClick={() => onNavigate('crop-doctor')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white ${
              activeSection === 'crop-doctor' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            Crop Doctor
          </button>
          <button
            onClick={() => onNavigate('grains')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white ${
              activeSection === 'grains' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            Grains & Wheat
          </button>
          <button
            onClick={() => onNavigate('dairy')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white ${
              activeSection === 'dairy' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            Dairy & Milk
          </button>
          <button
            onClick={() => onNavigate('comparison')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white ${
              activeSection === 'comparison' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            Organic vs Chemical
          </button>
          <button
            onClick={() => onNavigate('fertilizers')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white ${
              activeSection === 'fertilizers' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            Fertilizers
          </button>
          <button
            onClick={() => onNavigate('villages')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white ${
              activeSection === 'villages' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            Villages
          </button>
          <button
            onClick={() => onNavigate('roi')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white ${
              activeSection === 'roi' ? 'text-emerald-400 font-semibold' : ''
            }`}
          >
            Economics
          </button>
        </nav>

        {/* Zone 3: Exactly 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPresentation}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>Manager Presentation</span>
          </button>
        </div>
      </div>

      {/* Mobile subnav strip */}
      <div className="lg:hidden flex items-center overflow-x-auto px-4 py-2 bg-stone-950 border-t border-stone-800 text-xs text-stone-300 gap-4 no-scrollbar">
        <button
          onClick={() => onNavigate('indian-crops')}
          className="whitespace-nowrap shrink-0 text-emerald-400 font-semibold py-1 flex items-center gap-1"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>10 Crop Types</span>
        </button>
        <button
          onClick={() => onNavigate('comparator')}
          className="whitespace-nowrap shrink-0 hover:text-white py-1"
        >
          Comparator
        </button>
        <button
          onClick={() => onNavigate('agro-zones')}
          className="whitespace-nowrap shrink-0 hover:text-white py-1"
        >
          Agro-Zones
        </button>
        <button
          onClick={() => onNavigate('crop-doctor')}
          className="whitespace-nowrap shrink-0 hover:text-white py-1"
        >
          Crop Doctor
        </button>
        <button
          onClick={() => onNavigate('grains')}
          className="whitespace-nowrap shrink-0 hover:text-white py-1"
        >
          Grains & Wheat
        </button>
        <button
          onClick={() => onNavigate('dairy')}
          className="whitespace-nowrap shrink-0 hover:text-white py-1"
        >
          Dairy Milk
        </button>
        <button
          onClick={() => onNavigate('comparison')}
          className="whitespace-nowrap shrink-0 hover:text-white py-1"
        >
          Organic vs Chemical
        </button>
        <button
          onClick={() => onNavigate('fertilizers')}
          className="whitespace-nowrap shrink-0 hover:text-white py-1"
        >
          Fertilizers
        </button>
        <button
          onClick={() => onNavigate('villages')}
          className="whitespace-nowrap shrink-0 hover:text-white py-1"
        >
          Village Tracker
        </button>
        <button
          onClick={() => onNavigate('roi')}
          className="whitespace-nowrap shrink-0 hover:text-white py-1"
        >
          Economics
        </button>
      </div>
    </header>
  );
};
