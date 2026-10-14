import React, { useState } from 'react';
import { Activity, Calculator, CheckCircle, Droplet, Flame, HeartPulse, Milk, Sparkles, Thermometer } from 'lucide-react';
import { DAIRY_DATA } from '../data/cropsData';

export const DairyCowMilk: React.FC = () => {
  // Interactive dairy calculator state
  const [cowCount, setCowCount] = useState<number>(10);
  const [breedType, setBreedType] = useState<'indigenous' | 'crossbreed'>('indigenous');
  const [feedQuality, setFeedQuality] = useState<'balanced' | 'basic'>('balanced');

  // Calculations
  const avgYieldPerCow =
    breedType === 'indigenous'
      ? feedQuality === 'balanced'
        ? 12
        : 8
      : feedQuality === 'balanced'
      ? 22
      : 15;

  const expectedFat = breedType === 'indigenous' ? 4.8 : 3.8;
  const expectedSNF = breedType === 'indigenous' ? 9.1 : 8.5;
  const pricePerLitre = breedType === 'indigenous' ? 0.95 : 0.65; // High A2 premium

  const dailyTotalLitres = cowCount * avgYieldPerCow;
  const monthlyRevenue = dailyTotalLitres * pricePerLitre * 30;
  const dailyGreenFodderKg = cowCount * 25; // 25kg green fodder per cow
  const dailyDryFodderKg = cowCount * 6; // 6kg dry wheat/paddy straw
  const dailyConcentrateKg = cowCount * (avgYieldPerCow * 0.4 + 1.5); // 400g per litre + 1.5kg maintenance

  return (
    <section id="dairy" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
            Dairy Science & Livestock Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 font-display text-balance">
            Cow Milk Excellence & Holistic Bovine Management
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            The foundation of regenerative farming: how healthy dairy cows convert green fodder into pure, high-fat, nutritious milk while supplying rich bio-fertilizer for grain fields.
          </p>
        </div>

        {/* 4 Core Quality Benchmarks */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {DAIRY_DATA.metrics.map((m, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs">
              <div className="text-stone-500 text-xs font-medium">{m.label}</div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-800 mt-1 tabular-nums">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Split: Management Protocols & Feed Formula */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Management Principles & Hygiene */}
          <div className="lg:col-span-7 space-y-6">
            {/* Key Practices */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="text-lg font-bold text-stone-900 font-display flex items-center gap-2 mb-4">
                <Milk className="w-5 h-5 text-emerald-600" />
                <span>Core Pillars of High Milk Yield & Cow Longevity</span>
              </h3>

              <div className="space-y-4">
                {DAIRY_DATA.keyPractices.map((practice, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 text-xs sm:text-sm">
                    <strong className="text-stone-900 font-semibold block mb-1">
                      {idx + 1}. {practice.label}
                    </strong>
                    <p className="text-stone-600 leading-relaxed">{practice.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Milking Hygiene Protocol */}
            <div className="bg-stone-900 text-stone-100 p-6 sm:p-8 rounded-2xl border border-stone-800 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-4">
                <div className="flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-rose-400" />
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    5-Step Scientific Clean Milking Protocol
                  </h4>
                </div>
                <span className="text-xs text-stone-400">Zero-Mastitis Standard</span>
              </div>

              <div className="space-y-3 text-xs text-stone-300">
                {DAIRY_DATA.hygieneProtocol.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Nutrition Formula & Interactive Dairy Station */}
          <div className="lg:col-span-5 space-y-6">
            {/* Scientific Total Mixed Ration (TMR) Feed Formula */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="text-base font-bold text-stone-900 font-display flex items-center gap-2 mb-3">
                <Droplet className="w-4 h-4 text-amber-500" />
                <span>Scientific Bovine Feed Ration (TMR)</span>
              </h3>
              <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                Rumen fermentation requires strict 60:40 roughage-to-concentrate proportion to avoid acidosis and maximize milk butterfat.
              </p>

              <div className="space-y-3">
                {DAIRY_DATA.feedFormula.map((feed, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-stone-50 border border-stone-100 text-xs">
                    <div className="flex items-center justify-between font-semibold text-stone-900 mb-1">
                      <span>{feed.ingredient}</span>
                      <span className="font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {feed.proportion}
                      </span>
                    </div>
                    <p className="text-stone-500 text-[11px] leading-relaxed">{feed.purpose}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Dairy Herd Simulator */}
            <div className="bg-gradient-to-br from-emerald-900 to-stone-900 text-white p-6 rounded-2xl border border-emerald-800 shadow-lg">
              <div className="flex items-center gap-2 pb-3 border-b border-emerald-800/80 mb-4">
                <Calculator className="w-4 h-4 text-emerald-300" />
                <h4 className="text-sm font-bold tracking-wide uppercase text-emerald-100">
                  Interactive Herd Yield Simulator
                </h4>
              </div>

              {/* Controls */}
              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-stone-300">Milking Cows in Herd:</span>
                    <span className="font-mono font-bold text-amber-300">{cowCount} Cows</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={cowCount}
                    onChange={(e) => setCowCount(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-stone-300 block mb-1">Breed Category:</span>
                    <select
                      value={breedType}
                      onChange={(e) => setBreedType(e.target.value as any)}
                      aria-label="Breed Category"
                      className="w-full bg-stone-800 text-white border border-stone-700 rounded-lg p-2 text-xs focus:ring-1 focus:ring-emerald-400"
                    >
                      <option value="indigenous">Indigenous Desi (Gir/Sahiwal A2)</option>
                      <option value="crossbreed">Crossbreed (HF / Jersey)</option>
                    </select>
                  </div>

                  <div>
                    <span className="text-stone-300 block mb-1">Feed Ration Level:</span>
                    <select
                      value={feedQuality}
                      onChange={(e) => setFeedQuality(e.target.value as any)}
                      aria-label="Feed Ration Level"
                      className="w-full bg-stone-800 text-white border border-stone-700 rounded-lg p-2 text-xs focus:ring-1 focus:ring-emerald-400"
                    >
                      <option value="balanced">Balanced TMR + Silage</option>
                      <option value="basic">Standard Farm Grazing</option>
                    </select>
                  </div>
                </div>

                {/* Simulated Outputs */}
                <div className="mt-4 pt-4 border-t border-emerald-800/80 grid grid-cols-2 gap-3 text-center">
                  <div className="p-2.5 rounded-xl bg-stone-800/80">
                    <span className="text-[10px] text-stone-400 uppercase block">Daily Milk Yield</span>
                    <span className="text-lg font-bold font-mono text-emerald-300 tabular-nums">
                      {dailyTotalLitres} L / day
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-stone-800/80">
                    <span className="text-[10px] text-stone-400 uppercase block">Est. Monthly Revenue</span>
                    <span className="text-lg font-bold font-mono text-amber-300 tabular-nums">
                      ${monthlyRevenue.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-stone-300 space-y-1">
                  <div>
                    • Daily Green Fodder Required: <span className="font-mono text-emerald-200">{dailyGreenFodderKg} kg</span>
                  </div>
                  <div>
                    • Daily Dry Straw (Cud Chewing): <span className="font-mono text-emerald-200">{dailyDryFodderKg} kg</span>
                  </div>
                  <div>
                    • Projected Milk Fat: <span className="font-mono text-amber-300">{expectedFat}%</span> · SNF: <span className="font-mono text-amber-300">{expectedSNF}%</span>
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
