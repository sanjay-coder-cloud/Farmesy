import React, { useState } from 'react';
import { ArrowUpRight, BarChart3, Coins, DollarSign, Layers, ShieldCheck, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';

export const FarmRoiCalculator: React.FC = () => {
  const [acreage, setAcreage] = useState<number>(50);
  const [selectedCrop, setSelectedCrop] = useState<'wheat' | 'paddy' | 'corn' | 'chickpea' | 'mustard'>('chickpea');

  // Economics parameters per acre
  const cropEconomics = {
    wheat: {
      chemYieldQuintal: 24,
      chemPricePerQuintal: 28, // $28 per quintal
      chemInputCost: 290, // Fertilizer, pesticide, diesel
      natYieldQuintal: 21,
      natPricePerQuintal: 42, // Organic premium $42
      natInputCost: 110 // On-farm bio inputs, seed
    },
    paddy: {
      chemYieldQuintal: 26,
      chemPricePerQuintal: 32,
      chemInputCost: 340,
      natYieldQuintal: 23,
      natPricePerQuintal: 50,
      natInputCost: 130
    },
    chickpea: {
      chemYieldQuintal: 11,
      chemPricePerQuintal: 48,
      chemInputCost: 230,
      natYieldQuintal: 10,
      natPricePerQuintal: 72,
      natInputCost: 85 // Near-zero nitrogen cost due to Rhizobium
    },
    mustard: {
      chemYieldQuintal: 13,
      chemPricePerQuintal: 46,
      chemInputCost: 210,
      natYieldQuintal: 11,
      natPricePerQuintal: 65,
      natInputCost: 95
    },
    corn: {
      chemYieldQuintal: 34,
      chemPricePerQuintal: 22,
      chemInputCost: 310,
      natYieldQuintal: 29,
      natPricePerQuintal: 35,
      natInputCost: 120
    }
  }[selectedCrop];

  // Calculations per year
  const chemGrossRevenue = acreage * cropEconomics.chemYieldQuintal * cropEconomics.chemPricePerQuintal;
  const chemTotalCost = acreage * cropEconomics.chemInputCost;
  const chemNetProfit = chemGrossRevenue - chemTotalCost;
  const chemMargin = Math.round((chemNetProfit / chemGrossRevenue) * 100);

  const natGrossRevenue = acreage * cropEconomics.natYieldQuintal * cropEconomics.natPricePerQuintal;
  const natTotalCost = acreage * cropEconomics.natInputCost;
  const natNetProfit = natGrossRevenue - natTotalCost;
  const natMargin = Math.round((natNetProfit / natGrossRevenue) * 100);

  const profitAdvantage = natNetProfit - chemNetProfit;
  const fiveYearAdvantage = profitAdvantage * 5;

  return (
    <section id="roi" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Agri-Business Strategy & Profit Simulator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display text-balance">
              Farm Economics & Manager ROI Simulator
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Demonstrate to board members and farm stakeholders how transitioning to biological agronomy cuts input costs and expands net operating margins.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
              alt="Golden agricultural field under sunset"
              className="w-full h-[280px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold mb-1.5 inline-block">
                Regenerative Farm Economics
              </span>
              <h3 className="text-lg font-bold">Sustainable Capital Stewardship</h3>
              <p className="text-xs text-slate-200">Up to 62% cash input reduction with verified premium farm-gate yields</p>
            </div>
          </div>
        </div>

        {/* Interactive Calculator Workspace */}
        <div className="bg-slate-50/70 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Sliders (5 cols) */}
            <div className="lg:col-span-5 space-y-6 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 pb-3 border-b border-slate-150">
                <BarChart3 className="w-4 h-4 text-emerald-600" />
                <span>Simulation Parameters</span>
              </h3>

              {/* Acreage Slider */}
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-semibold text-slate-700">Farm Cultivation Land:</span>
                  <span className="font-mono font-bold text-emerald-800 text-sm bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                    {acreage} Acres ({(acreage * 0.404).toFixed(1)} Ha)
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="300"
                  step="5"
                  value={acreage}
                  onChange={(e) => setAcreage(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
                  <span>5 Acres</span>
                  <span>150 Acres</span>
                  <span>300 Acres</span>
                </div>
              </div>

              {/* Crop Selector */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-2">
                  Selected Crop Model
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'chickpea', name: 'Chickpea (Pulses)' },
                    { id: 'wheat', name: 'Wheat' },
                    { id: 'paddy', name: 'Paddy / Rice' },
                    { id: 'mustard', name: 'Mustard (Oilseed)' },
                    { id: 'corn', name: 'Corn / Maize' },
                  ].map((c) => {
                    const isSelected = selectedCrop === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => setSelectedCrop(c.id as any)}
                        className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-all ${
                          isSelected
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm ring-2 ring-emerald-500/30 font-bold'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                        }`}
                      >
                        {c.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Cost Basis Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="font-bold text-slate-900">Per Acre Benchmark:</div>
                <div className="flex justify-between">
                  <span>Chemical Synthetic Cost:</span>
                  <span className="font-mono text-slate-800 font-semibold">${cropEconomics.chemInputCost} / acre</span>
                </div>
                <div className="flex justify-between">
                  <span>Natural Bio-Input Cost:</span>
                  <span className="font-mono text-emerald-800 font-bold">${cropEconomics.natInputCost} / acre</span>
                </div>
                <div className="flex justify-between text-emerald-800 pt-2 border-t border-slate-200 font-semibold">
                  <span>Input Cost Savings:</span>
                  <span className="bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded text-[11px]">-62% cash outlay</span>
                </div>
              </div>
            </div>

            {/* Results Grid (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Natural Farming Financials */}
                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-6 shadow-md space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-emerald-500/60">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-100">
                      Natural Biological Farm
                    </span>
                    <span className="text-xs font-mono bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-white font-bold">
                      {natMargin}% Margin
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-emerald-100 block font-medium">Annual Net Operating Profit</span>
                    <div className="text-3xl font-bold font-mono text-white mt-1 tabular-nums drop-shadow-xs">
                      ${natNetProfit.toLocaleString()}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-emerald-500/60 space-y-1.5 text-xs text-emerald-100">
                    <div className="flex justify-between">
                      <span>Gross Revenue:</span>
                      <span className="font-mono font-bold text-white">${natGrossRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Input Cost:</span>
                      <span className="font-mono font-bold text-emerald-200">${natTotalCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Chemical Farming Financials */}
                <div className="bg-white text-slate-900 rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-150">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Chemical Conventional Farm
                    </span>
                    <span className="text-xs font-mono bg-slate-100 px-2.5 py-0.5 rounded-full text-slate-700 font-semibold">
                      {chemMargin}% Margin
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Annual Net Operating Profit</span>
                    <div className="text-3xl font-bold font-mono text-slate-900 mt-1 tabular-nums">
                      ${chemNetProfit.toLocaleString()}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-150 space-y-1.5 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span>Gross Revenue:</span>
                      <span className="font-mono font-bold text-slate-900">${chemGrossRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Input Cost:</span>
                      <span className="font-mono font-bold text-rose-600">${chemTotalCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inspiring Bottom Executive Callout */}
              <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-slate-900 flex items-start gap-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-amber-950 flex items-center justify-center shrink-0 shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-amber-950 font-display">
                    Strategic Agribusiness Horizon: +${profitAdvantage.toLocaleString()} / Year Extra Surplus
                  </div>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    Over a 5-year farm stewardship cycle, adopting Farmesy’s natural grain & dairy bio-slurry practices yields an accumulated capital surplus of <strong className="text-emerald-900 font-bold font-mono">${fiveYearAdvantage.toLocaleString()}</strong>, while regenerating topsoil organic carbon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
