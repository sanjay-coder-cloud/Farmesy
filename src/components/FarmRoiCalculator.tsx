import React, { useState } from 'react';
import { ArrowUpRight, BarChart3, Coins, DollarSign, Layers, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

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
    <section id="roi" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
            Agri-Business Strategy & Profit Simulator
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 font-display text-balance">
            Farm Economics & Manager ROI Simulator
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Demonstrate to board members and farm stakeholders how transitioning to biological agronomy cuts input costs and expands net operating margins.
          </p>
        </div>

        {/* Interactive Calculator Workspace */}
        <div className="mt-10 bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Sliders (5 cols) */}
            <div className="lg:col-span-5 space-y-6 bg-white p-6 rounded-xl border border-stone-200 shadow-xs">
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2 pb-3 border-b border-stone-100">
                <BarChart3 className="w-4 h-4 text-emerald-600" />
                <span>Simulation Parameters</span>
              </h3>

              {/* Acreage Slider */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-semibold text-stone-700">Farm Cultivation Land:</span>
                  <span className="font-mono font-bold text-emerald-800 text-sm">
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
                <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                  <span>5 Acres</span>
                  <span>150 Acres</span>
                  <span>300 Acres</span>
                </div>
              </div>

              {/* Crop Selector */}
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                  Selected Crop Model
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedCrop('chickpea')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                      selectedCrop === 'chickpea'
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    Chickpea (Pulses)
                  </button>
                  <button
                    onClick={() => setSelectedCrop('wheat')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                      selectedCrop === 'wheat'
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    Wheat
                  </button>
                  <button
                    onClick={() => setSelectedCrop('paddy')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                      selectedCrop === 'paddy'
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    Paddy / Rice
                  </button>
                  <button
                    onClick={() => setSelectedCrop('mustard')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                      selectedCrop === 'mustard'
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    Mustard (Oilseed)
                  </button>
                  <button
                    onClick={() => setSelectedCrop('corn')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all ${
                      selectedCrop === 'corn'
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    Corn / Maize
                  </button>
                </div>
              </div>

              {/* Cost Basis Card */}
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 space-y-1.5">
                <div className="font-semibold text-stone-800">Per Acre Benchmark:</div>
                <div className="flex justify-between">
                  <span>Chemical Synthetic Cost:</span>
                  <span className="font-mono text-stone-900">${cropEconomics.chemInputCost} / acre</span>
                </div>
                <div className="flex justify-between">
                  <span>Natural Bio-Input Cost:</span>
                  <span className="font-mono text-emerald-800 font-bold">${cropEconomics.natInputCost} / acre</span>
                </div>
                <div className="flex justify-between text-emerald-700 pt-1 border-t border-stone-200 font-medium">
                  <span>Input Cost Savings:</span>
                  <span>-62% cash outlay</span>
                </div>
              </div>
            </div>

            {/* Results Grid (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Natural Farming Financials */}
                <div className="bg-emerald-950 text-white rounded-2xl p-6 border border-emerald-800 shadow-md">
                  <div className="flex items-center justify-between pb-3 border-b border-emerald-800/80">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                      Natural Biological Farm
                    </span>
                    <span className="text-xs font-mono bg-emerald-800/80 px-2 py-0.5 rounded text-emerald-200">
                      {natMargin}% Margin
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="text-xs text-stone-400 block">Annual Net Operating Profit</span>
                    <div className="text-3xl font-bold font-mono text-emerald-300 mt-1 tabular-nums">
                      ${natNetProfit.toLocaleString()}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-emerald-800/60 space-y-1 text-xs text-stone-300">
                    <div className="flex justify-between">
                      <span>Gross Revenue:</span>
                      <span className="font-mono font-medium">${natGrossRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Input Cost:</span>
                      <span className="font-mono font-medium text-emerald-400">${natTotalCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Chemical Farming Financials */}
                <div className="bg-white text-stone-900 rounded-2xl p-6 border border-stone-300 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-600">
                      Chemical Conventional Farm
                    </span>
                    <span className="text-xs font-mono bg-stone-100 px-2 py-0.5 rounded text-stone-600">
                      {chemMargin}% Margin
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="text-xs text-stone-500 block">Annual Net Operating Profit</span>
                    <div className="text-3xl font-bold font-mono text-stone-900 mt-1 tabular-nums">
                      ${chemNetProfit.toLocaleString()}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 space-y-1 text-xs text-stone-600">
                    <div className="flex justify-between">
                      <span>Gross Revenue:</span>
                      <span className="font-mono font-medium">${chemGrossRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Input Cost:</span>
                      <span className="font-mono font-medium text-rose-600">${chemTotalCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inspiring Bottom Executive Callout */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-stone-900 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-stone-900 flex items-center justify-center shrink-0 shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900 font-display">
                    Strategic Agribusiness Horizon: +${profitAdvantage.toLocaleString()} / Year Extra Surplus
                  </div>
                  <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                    Over a 5-year farm stewardship cycle, adopting Farmesy’s natural grain & dairy bio-slurry practices yields an accumulated capital surplus of <strong className="text-emerald-900 font-semibold font-mono">${fiveYearAdvantage.toLocaleString()}</strong>, while regenerating topsoil organic carbon.
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
