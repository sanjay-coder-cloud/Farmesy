import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ChevronRight, Layers, Sparkles, TrendingUp, XCircle } from 'lucide-react';

interface ComparisonDimension {
  id: string;
  title: string;
  naturalApproach: {
    method: string;
    advantage: string;
    disadvantage: string;
    impactScore: number; // 0-100
  };
  chemicalApproach: {
    method: string;
    advantage: string;
    disadvantage: string;
    impactScore: number; // 0-100
  };
}

const COMPARISON_DIMENSIONS: ComparisonDimension[] = [
  {
    id: 'soil',
    title: 'Soil Microbiome & Organic Carbon',
    naturalApproach: {
      method: 'Feeds soil life using vermicompost, cow dung-urine bio-cultures (Jeevamrutha), green manuring, and mulching.',
      advantage: 'Restores living earthworms and mycorrhizae; increases organic carbon from 0.4% to >1.5%; retains 2.5x more moisture.',
      disadvantage: 'Requires 2 to 3 transition seasons for depleted soil biology to fully reactivate if transitioning from chemical soil.',
      impactScore: 95
    },
    chemicalApproach: {
      method: 'Delivers raw synthetic mineral salts (Urea, DAP, MOP) directly into soil solution without adding organic matter.',
      advantage: 'Immediately bypasses cold or dormant soil biology to deliver concentrated ionic nitrogen and phosphorus.',
      disadvantage: 'Acidifies soil, destroys mycorrhizae, burns earthworms, causes soil compaction, and creates chronic salt encrustation.',
      impactScore: 28
    }
  },
  {
    id: 'yield',
    title: 'Yield Trajectory & Consistency',
    naturalApproach: {
      method: 'Relies on natural plant circadian cycles, deep root elongation, and biological nitrogen fixation.',
      advantage: 'Yield stabilizes and increases year-on-year with climate resilience; plants survive prolonged drought and heat waves.',
      disadvantage: 'Initial Year 1 and Year 2 yields can be 10% – 15% lower while farm transitioning out of synthetic dependency.',
      impactScore: 82
    },
    chemicalApproach: {
      method: 'Pushes plant metabolism with rapid nitrogen surges for instant high vegetative biomass.',
      advantage: 'Delivers high initial bulk grain yield in Years 1–3 under optimal weather and guaranteed synthetic inputs.',
      disadvantage: 'Plateaus over time (Law of Diminishing Marginal Returns); requires ever-increasing fertilizer doses for identical yields.',
      impactScore: 65
    }
  },
  {
    id: 'cost',
    title: 'Input Cost & Farmer Profit Margin',
    naturalApproach: {
      method: 'Zero-Budget Natural Farming (ZBNF) model; uses on-farm livestock dung, crop residue, and native bio-extracts.',
      advantage: 'Cultivation cash out-of-pocket expenses plunge by 60% – 75%; eliminates agricultural loan debt and vendor dependency.',
      disadvantage: 'Requires disciplined on-farm labor and livestock care for regular compost and bio-catalyst preparation.',
      impactScore: 92
    },
    chemicalApproach: {
      method: 'Purchases branded bagged chemical fertilizers, hybrid coated seeds, synthetic weedicides, and chemical insecticides.',
      advantage: 'Convenient "buy-and-broadcast" system with lower on-farm preparation labor.',
      disadvantage: 'High recurring input costs, subject to petroleum/gas price surges; creates severe debt vulnerability if crops fail.',
      impactScore: 40
    }
  },
  {
    id: 'grain-quality',
    title: 'Grain Nutritional Density & Safety',
    naturalApproach: {
      method: 'Roots assimilate balanced micronutrients, trace minerals, and secondary metabolites via mycorrhizal networks.',
      advantage: 'Zero chemical pesticides or heavy metals; grains have richer aroma, higher zinc/iron density, and longer natural storage shelf-life.',
      disadvantage: 'Requires organic certification paperwork and trace verification to command full retail consumer premiums.',
      impactScore: 98
    },
    chemicalApproach: {
      method: 'Rapid cellular expansion driven by luxury nitrogen consumption; often retains trace pesticide and nitrate residues.',
      advantage: 'Grain looks cosmetically uniform in size and color during initial bulk harvest.',
      disadvantage: 'Lower antioxidant and mineral concentrations; risk of organophosphate/carbamate residues in human food chain.',
      impactScore: 45
    }
  },
  {
    id: 'pest-defense',
    title: 'Pest Defense & Plant Immunity',
    naturalApproach: {
      method: 'Integrated multi-cropping, border trap crops (marigolds/sunflowers), neem extracts (NSKE), and bio-predators.',
      advantage: 'Maintains natural predator-prey equilibrium; pests never develop synthetic resistance.',
      disadvantage: 'Requires proactive preventative observation rather than emergency knockdown spray reactions.',
      impactScore: 88
    },
    chemicalApproach: {
      method: 'Chemical systemic and contact neurotoxin sprays (organophosphates, synthetic pyrethroids, neonicotinoids).',
      advantage: 'Immediate 24-hour knock-down of heavy catastrophic pest infestations.',
      disadvantage: 'Kills friendly pollinator bees, ladybugs, and spiders; triggers pest resurgence and chemical immunity mutations.',
      impactScore: 50
    }
  }
];

export const NaturalVsChemical: React.FC = () => {
  const [selectedDimensionId, setSelectedDimensionId] = useState<string>('soil');
  const [activeTab, setActiveTab] = useState<'matrix' | 'proscons' | 'timeline'>('matrix');

  const selectedDim =
    COMPARISON_DIMENSIONS.find((d) => d.id === selectedDimensionId) ||
    COMPARISON_DIMENSIONS[0];

  return (
    <section id="comparison" className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Split Banner Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Agronomic Decision Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display text-balance">
              Natural Organic vs Chemical Farming
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              An executive, data-driven analysis of how food grains grow under pure biological regeneration versus conventional synthetic inputs.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
              alt="Natural agriculture field with healthy crops"
              className="w-full h-[280px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold mb-1.5 inline-block">
                Regenerative Soil Ecology
              </span>
              <h3 className="text-lg font-bold">Living Microbes vs Synthetic Minerals</h3>
              <p className="text-xs text-slate-200">Comparing 5-year soil humus trajectory, farmer net margins, and grain safety</p>
            </div>
          </div>
        </div>

        {/* View mode buttons */}
        <div className="mt-8 flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl w-fit shadow-xs">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'matrix'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Direct Lens Comparison
          </button>
          <button
            onClick={() => setActiveTab('proscons')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'proscons'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Advantages & Disadvantages
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'timeline'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            5-Year Soil & Yield Curve
          </button>
        </div>

        {/* Tab 1: Interactive Lens Comparison */}
        {activeTab === 'matrix' && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Dimensions Selector Sidebar */}
            <div className="lg:col-span-4 space-y-2">
              <div className="text-xs font-semibold uppercase text-slate-500 mb-3 tracking-wider">
                Compare By Agronomic Pillar
              </div>
              {COMPARISON_DIMENSIONS.map((dim) => {
                const isActive = dim.id === selectedDimensionId;
                return (
                  <button
                    key={dim.id}
                    onClick={() => setSelectedDimensionId(dim.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm font-semibold ring-2 ring-emerald-500/30'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                    }`}
                  >
                    <span className="text-sm font-semibold">{dim.title}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-emerald-300' : 'text-stone-400'}`} />
                  </button>
                );
              })}

              {/* Quick Summary Box */}
              <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 text-xs mt-6 leading-relaxed">
                <span className="font-semibold text-stone-900 block mb-1">Manager Note:</span>
                Natural organic food grains command a 20% to 45% farm-gate price premium in modern grain exchanges while eliminating recurring agro-chemical debt.
              </div>
            </div>

            {/* Split Comparison Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Natural Approach Card */}
              <div className="bg-white rounded-2xl border border-emerald-300 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                      Methodology 01
                    </span>
                    <span className="text-xs font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Bio-Sustainability: {selectedDim.naturalApproach.impactScore}/100
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-emerald-950 mt-3 font-display">
                    Natural / Organic Agronomy
                  </h3>

                  <div className="mt-4 text-xs text-stone-600">
                    <div className="font-medium text-stone-900 mb-1">Execution Mechanism:</div>
                    <p className="leading-relaxed">{selectedDim.naturalApproach.method}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 space-y-3">
                    <div className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-emerald-900 block font-semibold">Decisive Advantage:</strong>
                        <span className="text-stone-700 leading-relaxed">{selectedDim.naturalApproach.advantage}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-xs">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-900 block font-semibold">Trade-off / Challenge:</strong>
                        <span className="text-stone-700 leading-relaxed">{selectedDim.naturalApproach.disadvantage}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-100 text-[11px] text-emerald-800">
                  Standard: Beejamrutha + Jeevamrutha + Vermicompost + Green Manure
                </div>
              </div>

              {/* Chemical Approach Card */}
              <div className="bg-white rounded-2xl border border-stone-300 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-600">
                      Methodology 02
                    </span>
                    <span className="text-xs font-mono font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                      Bio-Sustainability: {selectedDim.chemicalApproach.impactScore}/100
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 mt-3 font-display">
                    Chemical / Synthetic Agronomy
                  </h3>

                  <div className="mt-4 text-xs text-stone-600">
                    <div className="font-medium text-stone-900 mb-1">Execution Mechanism:</div>
                    <p className="leading-relaxed">{selectedDim.chemicalApproach.method}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 space-y-3">
                    <div className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-stone-900 block font-semibold">Decisive Advantage:</strong>
                        <span className="text-stone-700 leading-relaxed">{selectedDim.chemicalApproach.advantage}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-xs">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-rose-900 block font-semibold">Trade-off / Penalty:</strong>
                        <span className="text-stone-700 leading-relaxed">{selectedDim.chemicalApproach.disadvantage}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] text-stone-500">
                  Standard: Synthetic Urea (46% N) + DAP + Glyphosate + Chemical Insecticides
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Full Advantages & Disadvantages Breakdown */}
        {activeTab === 'proscons' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Natural Organic Breakdown */}
            <div className="bg-white rounded-2xl border border-emerald-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-800 font-display text-xl font-bold mb-4">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span>Growing Food Grains Naturally</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-900 mb-3">
                    Top Advantages
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">1.</span>
                      <span><strong>Permanent Soil Rejuvenation:</strong> Cultivates billion-strong microbial communities, mycorrhizal hyphae, and deep earthworm networks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">2.</span>
                      <span><strong>Drought & Climate Immunity:</strong> Organic humus absorbs up to 200,000 litres of water per hectare, cushioning grains against monsoon dry spells.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">3.</span>
                      <span><strong>Zero Toxin Food Chain:</strong> Grains are free from neurotoxic organophosphates, ensuring pure consumption for families and livestock.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">4.</span>
                      <span><strong>High Farm-Gate Pricing:</strong> Certified organic grains fetch guaranteed 25% – 50% premiums in export and urban wellness markets.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">5.</span>
                      <span><strong>Elimination of Financial Debt:</strong> On-farm inputs (cow dung, urine, crop mulches) reduce commercial fertilizer expenditure to near zero.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-800 mb-3">
                    Key Challenges & Disadvantages
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>3-Year Transition Lag:</strong> Depleted commercial soil requires 2-3 seasons to awaken natural microbial nutrient-cycling enzymes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>Labor Intensity:</strong> Composting, Jeevamrutha fermentation, and manual or mechanical inter-row weeding require diligent scheduling.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>Strict Preventative Monitoring:</strong> Pest control relies on pest traps and early herbal sprays before heavy infestation spreads.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Chemical Farming Breakdown */}
            <div className="bg-white rounded-2xl border border-stone-300 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-stone-900 font-display text-xl font-bold mb-4">
                <Layers className="w-5 h-5 text-stone-600" />
                <span>Growing Food Grains with Chemical Inputs</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-900 mb-3">
                    Top Advantages
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="text-stone-700 font-bold">1.</span>
                      <span><strong>Instant Nutrient Surges:</strong> Synthetic urea and DAP provide immediate bio-available nitrogen and phosphorus regardless of cold weather.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-stone-700 font-bold">2.</span>
                      <span><strong>Predictable Initial Volumes:</strong> Commercial hybrids bred specifically for synthetic nitrogen deliver standardized high metric tonnage in early years.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-stone-700 font-bold">3.</span>
                      <span><strong>Rapid Chemical Knockdown:</strong> Synthetic pesticides exterminate heavy borer or rust outbreaks within 24 to 48 hours.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-stone-700 font-bold">4.</span>
                      <span><strong>Standardized Bag Handling:</strong> Concentrated prills are easy to store, transport, and distribute through conventional machinery.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-rose-900 mb-3">
                    Severe Long-Term Disadvantages
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span><strong>Microbiome Collapse:</strong> High salt indices kill nitrogen-fixing bacteria, sterilizing the natural soil ecosystem into dead dirt.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span><strong>Pest Immunity Escalation:</strong> Insects develop resistance to synthetic active ingredients, necessitating stronger and costlier poisons.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span><strong>Groundwater Contamination:</strong> Up to 50% of synthetic nitrates leach into village drinking water wells, causing health hazards.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span><strong>Farmer Margin Erosion:</strong> Soaring prices of proprietary seeds, synthetic fertilizers, and fungicides eat away farmer profits.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: 5-Year Soil & Yield Curve Timeline */}
        {activeTab === 'timeline' && (
          <div className="mt-8 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-stone-900 font-display">
                  5-Year Longitudinal Trajectory: Soil Carbon & Farm Net Profit
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  How biological regeneration outpaces synthetic chemical farming over a 5-year farm management cycle.
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-medium">
                <span className="flex items-center gap-1.5 text-emerald-800">
                  <span className="w-3 h-3 rounded-full bg-emerald-600 inline-block" />
                  Natural Organic Path
                </span>
                <span className="flex items-center gap-1.5 text-stone-600">
                  <span className="w-3 h-3 rounded-full bg-stone-400 inline-block" />
                  Chemical Synthetic Path
                </span>
              </div>
            </div>

            {/* Visual Timeline Stepper */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                {
                  year: 'Year 1: Transition',
                  organicYield: '85% of baseline',
                  organicCarbon: '0.45% Organic C',
                  organicProfit: 'Modest (Zero chemical bill offsets dip)',
                  chemicalYield: '100% (High)',
                  chemicalCarbon: '0.40% Organic C',
                  chemicalProfit: 'Standard baseline'
                },
                {
                  year: 'Year 2: Soil Awakening',
                  organicYield: '95% of baseline',
                  organicCarbon: '0.65% Organic C',
                  organicProfit: '+15% Net profit gain',
                  chemicalYield: '98% (Slight dip)',
                  chemicalCarbon: '0.36% Organic C',
                  chemicalProfit: 'Margins tighten as inputs rise'
                },
                {
                  year: 'Year 3: Parity & Health',
                  organicYield: '105% of baseline',
                  organicCarbon: '0.95% Organic C',
                  organicProfit: '+35% Net profit (Organic certification)',
                  chemicalYield: '95% (Plateau)',
                  chemicalCarbon: '0.32% Organic C',
                  chemicalProfit: 'Pest resistance spray costs surge'
                },
                {
                  year: 'Year 4: Resilience Surpass',
                  organicYield: '115% of baseline',
                  organicCarbon: '1.25% Organic C',
                  organicProfit: '+55% Net profit',
                  chemicalYield: '90% (Soil fatigue)',
                  chemicalCarbon: '0.28% Organic C',
                  chemicalProfit: 'High fertilizer dose required'
                },
                {
                  year: 'Year 5: Full Regeneration',
                  organicYield: '125% of baseline',
                  organicCarbon: '1.60% Organic C (Rich Humus)',
                  organicProfit: '+75% Net profit & high grain premium',
                  chemicalYield: '86% (Salinity & compaction)',
                  chemicalCarbon: '0.25% (Depleted)',
                  chemicalProfit: 'Compressed margins'
                }
              ].map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-stone-200 bg-stone-50 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-stone-900 block pb-2 border-b border-stone-200">
                      {step.year}
                    </span>

                    {/* Organic Block */}
                    <div className="mt-3 p-2 rounded-lg bg-emerald-50 border border-emerald-100 text-xs">
                      <div className="text-[11px] font-bold text-emerald-900 uppercase">Natural</div>
                      <div className="text-emerald-950 font-medium mt-1">{step.organicYield}</div>
                      <div className="text-emerald-700 text-[11px]">{step.organicCarbon}</div>
                      <div className="text-emerald-800 font-semibold text-[11px] mt-1">{step.organicProfit}</div>
                    </div>

                    {/* Chemical Block */}
                    <div className="mt-2 p-2 rounded-lg bg-stone-100 border border-stone-200 text-xs">
                      <div className="text-[11px] font-bold text-stone-700 uppercase">Chemical</div>
                      <div className="text-stone-900 font-medium mt-1">{step.chemicalYield}</div>
                      <div className="text-stone-500 text-[11px]">{step.chemicalCarbon}</div>
                      <div className="text-stone-600 text-[11px] mt-1">{step.chemicalProfit}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-stone-600 bg-stone-100 p-3 rounded-lg">
              <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>Agronomy Conclusion:</strong> While chemical fertilizers offer quick results in Year 1, natural farming builds cumulative living capital that makes the farm biologically self-sustaining and commercially lucrative by Year 3.
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
