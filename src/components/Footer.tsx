import React from 'react';
import { Sprout } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPresentation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPresentation }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Col (4 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Sprout className="w-4 h-4 text-emerald-100" />
              </div>
              <span className="text-lg font-bold text-white font-display">Farmesy</span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              Empowering farmers, estate managers, and agricultural leaders with scientific knowledge on food grains, wheat cultivation, cow milk yield, organic versus chemical agronomy, and regional village crop intelligence.
            </p>
            <div className="text-[11px] text-slate-500 pt-1">
              Building resilient soil microbiomes and profitable farm stewardship.
            </div>
          </div>

          {/* Nav links 1 */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Agronomy Modules
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('indian-crops')}
                  className="hover:text-emerald-400 text-emerald-400/90 font-medium transition-colors"
                >
                  10 Types of Crops in India & Seasons
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('grains')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Grains & Wheat Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('dairy')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Dairy Cow Milk & Ration
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('comparison')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Organic vs Chemical Comparison
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('fertilizers')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Smart Fertilizer Advisor
                </button>
              </li>
            </ul>
          </div>

          {/* Nav links 2 */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Field Intelligence & Strategy
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('comparator')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Side-by-Side Crop Comparator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('agro-zones')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  6 Prime Agro-Climatic Zones
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('crop-doctor')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Precision Crop Doctor & Bio-Remedies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('villages')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Village Crop Stage Tracker
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('roi')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Farm ROI & Economics Simulator
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPresentation}
                  className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
                >
                  Launch Manager Boardroom Deck
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} Farmesy Agronomy Intelligence. Dedicated to sustainable food security.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Soil First</span>
            <span>·</span>
            <span>Zero Toxic Residue</span>
            <span>·</span>
            <span>Farmer Prosperity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
