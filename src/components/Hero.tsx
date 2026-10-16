import React from 'react';
import { ArrowRight, Sprout } from 'lucide-react';

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
    <section className="relative bg-gradient-to-br from-slate-50 to-emerald-50 border-b border-slate-200 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80"
          alt="Modern agriculture field"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
              <Sprout className="w-4 h-4" />
              <span>Sustainable Agriculture Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Smart Farming for
              <span className="text-emerald-600 block">Modern Agriculture</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl">
              Explore 10 crop types, agro-climatic zones, and compare natural vs chemical farming methods with AI-powered insights.
            </p>

            <div className="flex flex-wrap gap-4">
              {onExploreIndianCrops && (
                <button
                  onClick={onExploreIndianCrops}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <span>Explore Crops</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={onExploreGrains}
                className="px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                Grains Guide
              </button>

              <button
                onClick={onExploreFertilizers}
                className="px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                Fertilizer Advisor
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80"
                  alt="Agricultural field with crops"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-emerald-500 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                    <span className="text-sm opacity-90">Precision Agriculture</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Sustainable Crop Management</h3>
                  <p className="text-sm opacity-90">AI-powered insights for better yields</p>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-slate-200 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Sprout className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">10+</div>
                    <div className="text-xs text-slate-500">Crop Types</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
