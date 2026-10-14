import React from 'react';
import { ArrowRight, BookOpen, Compass, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreGrains: () => void;
  onExploreFertilizers: () => void;
  onExploreVillages: () => void;
  onExploreIndianCrops?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreGrains,
  onExploreFertilizers,
  onExploreVillages,
  onExploreIndianCrops,
}) => {
  return (
    <section className="relative bg-stone-900 text-stone-100 overflow-hidden border-b border-stone-800">
      {/* Subtle organic decorative background mesh */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="soil-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-emerald-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#soil-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Executive Agronomy Intelligence</span>
              <span className="text-stone-500" aria-hidden="true">·</span>
              <span className="text-amber-400 font-medium normal-case">Live Real-Time API Synced</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display leading-tight text-balance">
              The Living Science of Grains, Dairy & Sustainable Soil.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              From golden wheat and heritage millets to rich dairy milk yields:
              compare natural versus chemical agronomy, generate scientific fertilizer schedules,
              and track live crop growth stages across agricultural villages.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              {onExploreIndianCrops && (
                <button
                  onClick={onExploreIndianCrops}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-800 animate-ping"></span>
                  <span>10 Crop Types of India & Seasons</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={onExploreGrains}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <span>Grain Cultivation Guide</span>
              </button>

              <button
                onClick={onExploreFertilizers}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-stone-200 bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Fertilizer Advisor</span>
              </button>

              <button
                onClick={onExploreVillages}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-stone-300 hover:text-white transition-colors whitespace-nowrap"
              >
                <Compass className="w-4 h-4 text-sky-400" />
                <span>Village Tracker</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Artwork showcasing modern agronomy */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full bg-gradient-to-br from-stone-800/90 to-stone-900/90 border border-stone-700/80 rounded-2xl p-6 shadow-xl relative overflow-hidden backdrop-blur-sm">
              <div className="flex items-center justify-between pb-4 border-b border-stone-700/60 text-xs text-stone-400">
                <span className="font-semibold text-emerald-400">Farmesy Agro-Ecosystem</span>
                <span>Active Cycle 2026</span>
              </div>

              {/* Bespoke SVG Infographic */}
              <div className="py-6 flex flex-col items-center justify-center">
                <svg viewBox="0 0 360 220" className="w-full h-auto max-h-56 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Sky & Sun */}
                  <circle cx="180" cy="50" r="32" fill="#F59E0B" fillOpacity="0.15" />
                  <circle cx="180" cy="50" r="20" fill="#FBBF24" />
                  
                  {/* Rolling Farmland Hills */}
                  <path d="M 0 170 Q 90 120 180 145 T 360 130 L 360 220 L 0 220 Z" fill="#14532D" fillOpacity="0.4" />
                  <path d="M 0 185 Q 110 145 220 170 T 360 160 L 360 220 L 0 220 Z" fill="#047857" fillOpacity="0.3" />
                  <path d="M 0 200 Q 140 180 270 195 T 360 185 L 360 220 L 0 220 Z" fill="#292524" />

                  {/* Wheat Ears Left */}
                  <g transform="translate(45, 110)">
                    <path d="M 20 90 Q 22 50 15 20" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                    <ellipse cx="14" cy="22" rx="4" ry="7" transform="rotate(-25 14 22)" fill="#F59E0B" />
                    <ellipse cx="20" cy="30" rx="4" ry="7" transform="rotate(25 20 30)" fill="#FBBF24" />
                    <ellipse cx="13" cy="38" rx="4" ry="7" transform="rotate(-25 13 38)" fill="#F59E0B" />
                    <ellipse cx="21" cy="46" rx="4" ry="7" transform="rotate(25 21 46)" fill="#FBBF24" />
                    <ellipse cx="15" cy="54" rx="4" ry="7" transform="rotate(-25 15 54)" fill="#F59E0B" />
                  </g>

                  {/* Wheat Ears Middle-Left */}
                  <g transform="translate(80, 125)">
                    <path d="M 15 75 Q 18 40 22 15" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
                    <ellipse cx="22" cy="18" rx="3.5" ry="6" fill="#FBBF24" />
                    <ellipse cx="16" cy="28" rx="3.5" ry="6" transform="rotate(-20 16 28)" fill="#F59E0B" />
                    <ellipse cx="23" cy="36" rx="3.5" ry="6" transform="rotate(20 23 36)" fill="#FBBF24" />
                  </g>

                  {/* Dairy Cow Silhouette Middle-Right */}
                  <g transform="translate(195, 130) scale(0.85)">
                    <ellipse cx="50" cy="40" rx="28" ry="16" fill="#E7E5E4" />
                    <ellipse cx="74" cy="30" rx="12" ry="10" fill="#E7E5E4" />
                    <path d="M 82 22 L 86 16 L 81 19 Z" fill="#D6D3D1" />
                    <path d="M 76 20 L 75 14 L 72 18 Z" fill="#D6D3D1" />
                    {/* Cow Patches */}
                    <path d="M 45 32 Q 55 28 58 38 Q 50 48 40 42 Z" fill="#44403C" />
                    <path d="M 62 36 Q 68 32 68 42 Z" fill="#44403C" />
                    {/* Legs */}
                    <rect x="30" y="52" width="4" height="22" rx="2" fill="#E7E5E4" />
                    <rect x="38" y="52" width="4" height="20" rx="2" fill="#D6D3D1" />
                    <rect x="62" y="52" width="4" height="22" rx="2" fill="#E7E5E4" />
                    <rect x="70" y="52" width="4" height="20" rx="2" fill="#D6D3D1" />
                    {/* Udder */}
                    <ellipse cx="44" cy="52" rx="7" ry="5" fill="#FDA4AF" />
                  </g>

                  {/* Healthy Living Soil & Microbe Roots Right */}
                  <g transform="translate(290, 135)">
                    <path d="M 15 65 L 15 25" stroke="#10B981" strokeWidth="2.5" />
                    <path d="M 15 35 Q 28 25 32 15" stroke="#10B981" strokeWidth="2" fill="none" />
                    <path d="M 15 45 Q 2 35 0 25" stroke="#10B981" strokeWidth="2" fill="none" />
                    {/* Soil Rhizosphere */}
                    <circle cx="15" cy="72" r="3" fill="#34D399" />
                    <circle cx="24" cy="75" r="2" fill="#FBBF24" />
                    <circle cx="8" cy="78" r="2.5" fill="#34D399" />
                  </g>
                </svg>
              </div>

              {/* 3 Pillars Summary */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-stone-700/60 text-center">
                <div className="p-2 rounded-lg bg-stone-900/60">
                  <div className="text-xs font-semibold text-emerald-400">4 Major Grains</div>
                  <div className="text-[11px] text-stone-400">Wheat, Rice, Millets, Corn</div>
                </div>
                <div className="p-2 rounded-lg bg-stone-900/60">
                  <div className="text-xs font-semibold text-amber-400">Pure Dairy Yield</div>
                  <div className="text-[11px] text-stone-400">4.5% Fat & 9.0% SNF Care</div>
                </div>
                <div className="p-2 rounded-lg bg-stone-900/60">
                  <div className="text-xs font-semibold text-emerald-300">8 Live Villages</div>
                  <div className="text-[11px] text-stone-400">Real Stage Tracking</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-column KPI strip below the hero split */}
        <div className="mt-14 pt-8 border-t border-stone-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tabular-nums">
              100%
            </div>
            <div className="text-xs sm:text-sm text-stone-400 mt-1">
              Natural vs Chemical Rigor
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              8 Villages
            </div>
            <div className="text-xs sm:text-sm text-stone-400 mt-1">
              Active Regional Stages
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400 tabular-nums">
              4.5% Fat
            </div>
            <div className="text-xs sm:text-sm text-stone-400 mt-1">
              Target Dairy Cow Benchmark
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-300 tabular-nums">
              +45%
            </div>
            <div className="text-xs sm:text-sm text-stone-400 mt-1">
              Long-Term Organic Soil Humus
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
