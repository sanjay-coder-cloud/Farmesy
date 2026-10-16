import React, { useState } from 'react';
import { Activity, Calculator, CheckCircle, Droplet, Flame, HeartPulse, Milk, Sparkles, Thermometer, ShieldCheck } from 'lucide-react';
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
    <section id="dairy" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Featured Dairy Image Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Milk className="w-3.5 h-3.5 text-emerald-600" />
              <span>Dairy Science & Livestock Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display text-balance">
              Cow Milk Excellence & Bovine Management
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              The foundation of regenerative farming: how healthy dairy cows convert green fodder into pure, high-fat A2 milk while supplying rich bio-fertilizer for grain fields.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&q=80"
              alt="Healthy dairy cows grazing on lush green pasture"
              className="w-full h-[320px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold mb-1.5 inline-block">
                Indigenous Gir & Sahiwal Dairy
              </span>
              <h3 className="text-lg font-bold">Pasture-Fed Holistic Cattle</h3>
              <p className="text-xs text-slate-200">Rich in A2 beta-casein protein and bio-available micronutrients</p>
            </div>
          </div>
        </div>

        {/* 4 Core Quality Benchmarks */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {DAIRY_DATA.metrics.map((m, idx) => (
            <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{m.label}</div>
              <div className="text-2xl font-bold font-mono text-emerald-700 mt-1 tabular-nums">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Split: Management Protocols & Feed Formula */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Management Principles & Hygiene */}
          <div className="lg:col-span-7 space-y-6">
            {/* Key Practices */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2 mb-4">
                <Milk className="w-5 h-5 text-emerald-600" />
                <span>Core Pillars of High Milk Yield & Cow Longevity</span>
              </h3>

              <div className="space-y-3">
                {DAIRY_DATA.keyPractices.map((practice, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-150 text-xs sm:text-sm">
                    <strong className="text-slate-900 font-bold block mb-1">
                      {idx + 1}. {practice.label}
                    </strong>
                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">{practice.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Milking Hygiene Protocol */}
            <div className="bg-emerald-50/70 p-6 sm:p-8 rounded-2xl border border-emerald-200 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-200 mb-4">
                <div className="flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-emerald-700" />
                  <h4 className="text-sm font-bold text-emerald-950 uppercase tracking-wider">
                    5-Step Scientific Clean Milking Protocol
                  </h4>
                </div>
                <span className="text-xs font-semibold text-emerald-800 bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs">
                  Zero-Mastitis Standard
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                {DAIRY_DATA.hygieneProtocol.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Nutrition Formula & Interactive Dairy Station */}
          <div className="lg:col-span-5 space-y-6">
            {/* Scientific Total Mixed Ration (TMR) Feed Formula */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 font-display flex items-center gap-2 mb-2">
                <Droplet className="w-4 h-4 text-amber-500" />
                <span>Scientific Bovine Feed Ration (TMR)</span>
              </h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Rumen fermentation requires strict 60:40 roughage-to-concentrate proportion to avoid acidosis and maximize milk butterfat.
              </p>

              <div className="space-y-2.5">
                {DAIRY_DATA.feedFormula.map((feed, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-150 text-xs">
                    <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                      <span>{feed.ingredient}</span>
                      <span className="font-mono text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded font-semibold">
                        {feed.proportion}
                      </span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">{feed.purpose}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Dairy Herd Simulator */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50/70 p-6 rounded-2xl border border-emerald-200 shadow-sm">
              <div className="flex items-center gap-2 pb-3 border-b border-emerald-200 mb-4">
                <Calculator className="w-4 h-4 text-emerald-700" />
                <h4 className="text-sm font-bold tracking-wide uppercase text-emerald-950">
                  Interactive Herd Yield Simulator
                </h4>
              </div>

              {/* Slider for Cow Count */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Number of Milking Cows</span>
                  <span className="font-mono text-emerald-800 text-sm font-bold">{cowCount} Cows</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="100"
                  step="2"
                  value={cowCount}
                  onChange={(e) => setCowCount(parseInt(e.target.value, 10))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              {/* Radio breed selector */}
              <div className="grid grid-cols-2 gap-2 mb-4 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setBreedType('indigenous')}
                  className={`py-2 px-3 rounded-xl border text-center transition-all ${
                    breedType === 'indigenous'
                      ? 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
                  }`}
                >
                  Indigenous Gir/Sahiwal (A2)
                </button>
                <button
                  type="button"
                  onClick={() => setBreedType('crossbreed')}
                  className={`py-2 px-3 rounded-xl border text-center transition-all ${
                    breedType === 'crossbreed'
                      ? 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
                  }`}
                >
                  Crossbreed HF / Jersey
                </button>
              </div>

              {/* Feed Quality toggle */}
              <div className="grid grid-cols-2 gap-2 mb-5 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setFeedQuality('balanced')}
                  className={`py-1.5 px-3 rounded-xl border text-center transition-all ${
                    feedQuality === 'balanced'
                      ? 'bg-emerald-800 text-white border-emerald-800 font-semibold shadow-xs'
                      : 'bg-white text-slate-600 border-slate-200'
                  }`}
                >
                  Balanced TMR Feed
                </button>
                <button
                  type="button"
                  onClick={() => setFeedQuality('basic')}
                  className={`py-1.5 px-3 rounded-xl border text-center transition-all ${
                    feedQuality === 'basic'
                      ? 'bg-emerald-800 text-white border-emerald-800 font-semibold shadow-xs'
                      : 'bg-white text-slate-600 border-slate-200'
                  }`}
                >
                  Basic Grazing Only
                </button>
              </div>

              {/* Output Telemetrics Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs pt-3 border-t border-emerald-200">
                <div className="p-3 bg-white rounded-xl border border-emerald-200 shadow-2xs">
                  <div className="text-slate-500 text-[10px] uppercase font-semibold">Daily Production</div>
                  <div className="text-lg font-bold font-mono text-emerald-800 mt-0.5">
                    {dailyTotalLitres.toLocaleString()} L/day
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-emerald-200 shadow-2xs">
                  <div className="text-slate-500 text-[10px] uppercase font-semibold">Monthly Gross Revenue</div>
                  <div className="text-lg font-bold font-mono text-emerald-800 mt-0.5">
                    ${Math.round(monthlyRevenue).toLocaleString()}
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-emerald-200 shadow-2xs">
                  <div className="text-slate-500 text-[10px] uppercase font-semibold">Green Fodder Need</div>
                  <div className="text-sm font-bold font-mono text-slate-800 mt-0.5">
                    {dailyGreenFodderKg} kg/day
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-emerald-200 shadow-2xs">
                  <div className="text-slate-500 text-[10px] uppercase font-semibold">Butterfat Density</div>
                  <div className="text-sm font-bold font-mono text-amber-700 mt-0.5">
                    {expectedFat}% Fat ({expectedSNF}% SNF)
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
