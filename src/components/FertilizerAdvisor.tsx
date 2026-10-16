import React, { useState } from 'react';
import { AlertTriangle, Check, Copy, Download, FileText, FlaskConical, Info, Leaf, Loader2, PlusCircle, Printer, Sparkles, Zap } from 'lucide-react';
import { CROPS_DATA } from '../data/cropsData';
import { FERTILIZERS_DATA, FertilizerProfile, FertilizerRecommendation, calculateFertilizerPlan } from '../data/fertilizersData';

export const FertilizerAdvisor: React.FC = () => {
  const [crop, setCrop] = useState<string>('chickpea-gram');
  const [soil, setSoil] = useState<string>('Deep Alluvial Sandy Loam');
  const [stage, setStage] = useState<string>('Active Tillering / Branching');
  const [philosophy, setPhilosophy] = useState<'organic' | 'chemical' | 'integrated'>('organic');
  const [copied, setCopied] = useState<boolean>(false);
  const [selectedFertilizerModal, setSelectedFertilizerModal] = useState<FertilizerProfile | null>(null);

  // Live real-time prescription state
  const [isGeneratingLive, setIsGeneratingLive] = useState<boolean>(false);
  const [livePlan, setLivePlan] = useState<FertilizerRecommendation | null>(null);
  const [liveTimestamp, setLiveTimestamp] = useState<string | null>(null);
  const [liveRecipe, setLiveRecipe] = useState<string | null>(null);

  // Find crop name for display
  const currentCropObj = CROPS_DATA.find((c) => c.id === crop) || {
    id: crop,
    name: crop.toUpperCase(),
  };

  const baselinePlan = calculateFertilizerPlan(crop, soil, stage, philosophy);
  const activePlan = livePlan || baselinePlan;

  const handleGenerateLivePlan = async () => {
    setIsGeneratingLive(true);
    try {
      const response = await fetch('/api/realtime/fertilizer-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          crop: currentCropObj.name,
          soil,
          stage,
          philosophy,
        }),
      });
      const result = await response.json();
      if (result.success && result.data) {
        setLivePlan(result.data);
        setLiveTimestamp(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        if (result.data.onFarmRecipe) {
          setLiveRecipe(result.data.onFarmRecipe);
        }
      }
    } catch (err) {
      console.error('Error generating live plan:', err);
    } finally {
      setIsGeneratingLive(false);
    }
  };

  const handleCopyPlan = () => {
    const text = `FARMESY SCIENTIFIC FERTILIZER PRESCRIPTION\nCrop: ${currentCropObj.name} | Stage: ${stage} | Soil: ${soil}\nPhilosophy: ${philosophy.toUpperCase()}\n\nRECOMMENDED FORMULATIONS:\n${activePlan.recommendedProducts
      .map(
        (p, idx) =>
          `${idx + 1}. ${p.productName}\n   Dosage: ${p.dosagePerAcre}\n   Method: ${p.applicationMethod}\n   Timing: ${p.timing}\n   Purpose: ${p.purpose}`
      )
      .join('\n\n')}\n\nAgronomist Caution: ${activePlan.expertCaution}\nEstimated Cost: ${activePlan.estimatedCostPerAcre}\nSoil Impact: ${activePlan.longTermSoilImpact}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="fertilizers" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Featured Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <FlaskConical className="w-3.5 h-3.5 text-emerald-600" />
              <span>Soil Nutrition & Precision Dosing Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display text-balance">
              Smart Fertilizer Advisor & Dosing
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Generate exact, scientifically calibrated nutrition schedules tailored to your target crop physiology, soil type, and farming methodology.
            </p>

            <div className="mt-6">
              <button
                onClick={handleGenerateLivePlan}
                disabled={isGeneratingLive}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-sm hover:shadow-md transition-all whitespace-nowrap focus-visible:outline-none disabled:opacity-75"
              >
                {isGeneratingLive ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Computing Live Formulation...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                    <span>Generate Real-Time API Prescription</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80"
              alt="Rich fertile soil and young crop seedlings"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80';
              }}
              className="w-full h-[280px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold mb-1.5 inline-block">
                Precision Nutrient Management
              </span>
              <h3 className="text-lg font-bold">Soil Health & Micronutrient Balancing</h3>
              <p className="text-xs text-slate-200">ICAR and global agronomic standards for 1-acre production units</p>
            </div>
          </div>
        </div>

        {/* Interactive Prescription Generator */}
        <div className="bg-slate-50/70 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Parameters Controls (5 cols) */}
            <div className="lg:col-span-5 space-y-5 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                    Field Configuration
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                  1 Acre Standard
                </span>
              </div>

              {/* 1. Target Crop */}
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                  1. Target Crop ({CROPS_DATA.length} Available)
                </label>
                <select
                  value={crop}
                  onChange={(e) => {
                    setCrop(e.target.value);
                    setLivePlan(null);
                  }}
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-xs sm:text-sm font-medium text-stone-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <optgroup label="Pulses & Legumes (High Protein & N-Fixing)">
                    <option value="chickpea-gram">Chickpea / Bengal Gram (Pulses)</option>
                    <option value="pigeon-pea">Pigeon Pea / Arhar / Toor (Pulses)</option>
                    <option value="green-gram">Green Gram / Moong (Fast-Cycle Pulse)</option>
                  </optgroup>
                  <optgroup label="Cereals & Food Grains">
                    <option value="wheat">Wheat (Golden Winter Cereal)</option>
                    <option value="paddy-rice">Paddy / Basmati Rice (Wetland Cereal)</option>
                    <option value="maize-corn">Maize / Corn (Fodder & Grain)</option>
                  </optgroup>
                  <optgroup label="Climate-Resilient Millets (Nutri-Cereals)">
                    <option value="finger-millet">Finger Millet / Ragi (Calcium Powerhouse)</option>
                    <option value="pearl-millet">Pearl Millet / Bajra (Nutri-Cereal)</option>
                    <option value="sorghum-jowar">Sorghum / Jowar (Gluten-Free Great Grain)</option>
                  </optgroup>
                  <optgroup label="High-Sulfur Oilseeds">
                    <option value="mustard-rapeseed">Mustard / Rapeseed (Golden Winter Oilseed)</option>
                    <option value="soybean">Soybean (Golden Protein & Oil Bean)</option>
                  </optgroup>
                  <optgroup label="Commercial & Cash Crops">
                    <option value="cotton-cash">Cotton (White Gold Fiber Crop)</option>
                    <option value="sugarcane">Sugarcane (Grand Sugar & Bio-Energy Crop)</option>
                  </optgroup>
                </select>
              </div>

              {/* 2. Soil Type */}
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                  2. Soil Type
                </label>
                <select
                  value={soil}
                  onChange={(e) => {
                    setSoil(e.target.value);
                    setLivePlan(null);
                  }}
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-xs sm:text-sm font-medium text-stone-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="Deep Alluvial Sandy Loam">Deep Alluvial Sandy Loam (Indo-Gangetic Belt)</option>
                  <option value="Black Cotton Soil (Vertisol)">Black Cotton Soil / Vertisol (Deccan & Central)</option>
                  <option value="Red Laterite & Gravelly Loam">Red Laterite & Gravelly Loam (Porous, Low P)</option>
                  <option value="Heavy River Delta Silt Clay">Heavy River Delta Silt Clay (Wetland Basin)</option>
                </select>
              </div>

              {/* 3. Crop Growth Stage */}
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                  3. Crop Growth Stage
                </label>
                <select
                  value={stage}
                  onChange={(e) => {
                    setStage(e.target.value);
                    setLivePlan(null);
                  }}
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-xs sm:text-sm font-medium text-stone-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="Basal / Pre-Sowing Land Preparation">Basal / Pre-Sowing Land Preparation</option>
                  <option value="Active Tillering / Branching">Crown Root / Active Tillering / Branching</option>
                  <option value="Pre-Flowering & Panicle Initiation">Pre-Flowering & Flower Bud Initiation</option>
                  <option value="Pod & Grain Filling (Milking to Dough)">Pod & Grain Filling (Milking to Dough)</option>
                </select>
              </div>

              {/* 4. Agricultural Philosophy */}
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                  4. Agricultural Philosophy
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      setPhilosophy('organic');
                      setLivePlan(null);
                    }}
                    className={`p-2.5 text-xs font-semibold rounded-xl border text-center transition-all ${
                      philosophy === 'organic'
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs ring-2 ring-emerald-500/30'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                    }`}
                  >
                    100% Organic
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPhilosophy('integrated');
                      setLivePlan(null);
                    }}
                    className={`p-2.5 text-xs font-semibold rounded-xl border text-center transition-all ${
                      philosophy === 'integrated'
                        ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs ring-2 ring-emerald-700/30'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                    }`}
                  >
                    Integrated INM
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPhilosophy('chemical');
                      setLivePlan(null);
                    }}
                    className={`p-2.5 text-xs font-semibold rounded-xl border text-center transition-all ${
                      philosophy === 'chemical'
                        ? 'bg-amber-600 text-white border-amber-600 shadow-xs ring-2 ring-amber-500/30'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-amber-300 hover:bg-amber-50/50'
                    }`}
                  >
                    Conventional
                  </button>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-stone-500 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>Prescriptions are calibrated for 1 acre (0.404 hectare) land unit.</span>
              </div>
            </div>

            {/* Generated Prescription Card (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-stone-300 p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200 flex-wrap gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      {livePlan ? 'Live Real-Time API Prescription' : 'Calibrated Scientific Prescription'}
                    </span>
                    {liveTimestamp && (
                      <span className="text-[10px] text-stone-400 font-mono">
                        Synced: {liveTimestamp}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 font-display mt-1">
                    Fertilizer Schedule for {currentCropObj.name.toUpperCase()} · {stage.split('/')[0]}
                  </h3>
                </div>

                {/* Print & Copy buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyPlan}
                    className="p-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg flex items-center gap-1 transition-colors"
                    title="Copy Prescription"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
                  </button>

                  <button
                    onClick={handlePrint}
                    className="p-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg flex items-center gap-1 transition-colors"
                    title="Print Prescription"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Print</span>
                  </button>
                </div>
              </div>

              {/* Recommended Fertilizer Products List */}
              <div className="mt-5 space-y-3.5">
                {activePlan.recommendedProducts.map((prod, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/70 text-xs sm:text-sm"
                  >
                    <div className="flex items-center justify-between font-semibold text-stone-900 mb-1 flex-wrap gap-1">
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[11px]">
                          {idx + 1}
                        </span>
                        {prod.productName}
                      </span>
                      <span className="font-mono text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded text-xs font-semibold">
                        Dosage: {prod.dosagePerAcre}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600 mt-2 pt-2 border-t border-stone-200/60">
                      <div>
                        <strong className="text-stone-700">Application: </strong>
                        <span>{prod.applicationMethod}</span>
                      </div>
                      <div>
                        <strong className="text-stone-700">Optimal Timing: </strong>
                        <span>{prod.timing}</span>
                      </div>
                    </div>

                    <div className="mt-2 text-[11px] text-stone-500">
                      <strong>Agronomy Purpose: </strong> {prod.purpose}
                    </div>
                  </div>
                ))}
              </div>

              {/* Live Recipe (if available) */}
              {(liveRecipe || activePlan.onFarmRecipe) && (
                <div className="mt-4 p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950">
                  <strong className="block font-semibold mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>On-Farm Preparation Protocol:</span>
                  </strong>
                  <p className="text-emerald-900 leading-relaxed">
                    {liveRecipe || activePlan.onFarmRecipe}
                  </p>
                </div>
              )}

              {/* Safety Warning & Economics */}
              <div className="mt-5 pt-4 border-t border-stone-200 space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Agronomist Caution: </strong>
                    <span>{activePlan.expertCaution}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  <div className="p-2.5 rounded-lg bg-stone-100 text-stone-700 text-[11px]">
                    <strong>Est. Cost / Acre: </strong>
                    <span className="font-mono font-semibold text-stone-900">{activePlan.estimatedCostPerAcre}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-stone-100 text-stone-700 text-[11px]">
                    <strong>Soil Health Horizon: </strong>
                    <span className="text-stone-800">{activePlan.longTermSoilImpact}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fertilizer Library & Profiles */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-stone-900 font-display">
                Agronomic Fertilizer Compendium & On-Farm Recipes
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Explore detailed specifications, biological mechanisms, and preparation recipes for major organic bio-fertilizers and mineral compounds.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FERTILIZERS_DATA.map((fert) => (
              <div
                key={fert.id}
                className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between shadow-xs hover:border-emerald-500 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        fert.type === 'organic'
                          ? 'bg-emerald-50 text-emerald-800'
                          : fert.type === 'biofertilizer'
                          ? 'bg-sky-50 text-sky-800'
                          : 'bg-amber-50 text-amber-800'
                      }`}
                    >
                      {fert.type}
                    </span>
                    <span className="text-xs font-mono text-stone-500">{fert.npkRatio}</span>
                  </div>

                  <h4 className="text-base font-bold text-stone-900 mt-3 font-display">
                    {fert.name}
                  </h4>

                  <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                    {fert.recipeOrApplication}
                  </p>

                  <div className="mt-4 pt-3 border-t border-stone-100 space-y-1.5 text-xs">
                    <div className="text-stone-700">
                      <strong className="text-stone-900">Speed: </strong> {fert.actionSpeed}
                    </div>
                    <div className="text-stone-700">
                      <strong className="text-stone-900">Soil Impact: </strong> {fert.soilImpact}
                    </div>
                    <div className="text-stone-700">
                      <strong className="text-stone-900">Dosage: </strong> {fert.dosageGuide}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-100">
                  <button
                    onClick={() => setSelectedFertilizerModal(fert)}
                    className="w-full py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors text-center"
                  >
                    View Full Recipe & Specs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal: Full Fertilizer Profile */}
        {selectedFertilizerModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-xs">
            <div className="bg-white max-w-xl w-full rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <span className="text-xs font-mono font-semibold uppercase text-emerald-800">
                  {selectedFertilizerModal.type} Fertilizer Dossier
                </span>
                <button
                  onClick={() => setSelectedFertilizerModal(null)}
                  className="p-1 rounded-md text-stone-400 hover:text-stone-800"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-xl font-bold text-stone-900 font-display mt-3">
                {selectedFertilizerModal.name}
              </h3>
              <div className="text-xs font-mono text-stone-500 mt-1">
                NPK Formulation: {selectedFertilizerModal.npkRatio}
              </div>

              <div className="mt-4 space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block font-semibold mb-1">
                    Preparation Recipe / Application Directive:
                  </strong>
                  <p className="leading-relaxed">{selectedFertilizerModal.recipeOrApplication}</p>
                </div>

                <div>
                  <strong className="text-stone-900 block font-semibold mb-1">
                    Primary Plant Nutrients:
                  </strong>
                  <p className="text-stone-600">{selectedFertilizerModal.primaryNutrients}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                    <strong className="text-emerald-900 font-semibold block mb-1">Top Advantages:</strong>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-stone-700">
                      {selectedFertilizerModal.advantages.map((adv, idx) => (
                        <li key={idx}>{adv}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-stone-100 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 font-semibold block mb-1">Trade-offs / Limits:</strong>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-stone-700">
                      {selectedFertilizerModal.disadvantages.map((dis, idx) => (
                        <li key={idx}>{dis}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setSelectedFertilizerModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
