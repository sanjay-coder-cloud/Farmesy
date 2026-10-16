import React, { useState } from 'react';
import { Award, Calendar, Check, Droplets, Heart, Info, Leaf, Loader2, RefreshCw, Sparkles, Sun, TrendingUp, Volume2, VolumeX, Wheat as WheatIcon, Zap } from 'lucide-react';
import { CROPS_DATA, CropDetail } from '../data/cropsData';
import { getCropImage } from '../data/cropImages';

interface LiveAlertInfo {
  currentStage: string;
  weatherAlert: string;
  mandiPriceTrend: string;
  agronomistTip: string;
  lastUpdated: string;
}

export const GrainsDeepDive: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCropId, setSelectedCropId] = useState<string>('wheat');
  const [methodView, setMethodView] = useState<'natural' | 'chemical'>('natural');
  const [cropsList, setCropsList] = useState<CropDetail[]>(CROPS_DATA);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [liveAlerts, setLiveAlerts] = useState<Record<string, LiveAlertInfo>>({
    wheat: {
      currentStage: 'Pre-Sowing Land Preparation & Early Sowing Window',
      weatherAlert: 'Night temperatures dipping to 16°C; ideal soil moisture following monsoon retreat.',
      mandiPriceTrend: '$28.40 – $34.50 / quintal (robust miller and buffer procurement demand)',
      agronomistTip: 'Ensure pre-sowing irrigation (Paleva) is uniform. Prioritize CRI irrigation at Day 21.',
      lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
    'chickpea-gram': {
      currentStage: 'Pre-Sowing Seed Inoculation & Early Emergence',
      weatherAlert: 'Dry sunny days and cool nights optimal; zero rainfall required during seedling phase.',
      mandiPriceTrend: '$48.00 – $56.00 / quintal (high festive demand for pulse flour and split dal)',
      agronomistTip: 'Treat seeds with Rhizobium culture and avoid applying synthetic urea to protect nitrogen nodules.',
      lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  });
  const [isLoadingRealtime, setIsLoadingRealtime] = useState<boolean>(false);
  const [customCropQuery, setCustomCropQuery] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Filter crops by category
  const filteredCrops = cropsList.filter((c) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'pulse') return c.category === 'pulse';
    if (selectedCategory === 'millet') return c.category === 'millet';
    if (selectedCategory === 'oilseed') return c.category === 'oilseed';
    if (selectedCategory === 'commercial') return c.category === 'commercial';
    if (selectedCategory === 'grain') return c.category === 'grain' || c.category === 'wheat';
    return true;
  });

  const currentCrop: CropDetail =
    cropsList.find((c) => c.id === selectedCropId) || cropsList[0];

  const currentLiveAlert = liveAlerts[selectedCropId];

  // Speech reader for agronomist guide
  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToRead = `${currentCrop.name}. ${currentCrop.summary}. Ideal temperature: ${currentCrop.temperature}. Ideal soil: ${currentCrop.idealSoil}. Expected natural yield: ${currentCrop.naturalMethod.expectedYield}. Key benefit: ${currentCrop.keyBenefits[0]?.desc}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  // Fetch real-time update from backend Gemini API
  const handleFetchRealtimeUpdate = async (cropNameToFetch?: string) => {
    const targetCropName = cropNameToFetch || currentCrop.name;
    setIsLoadingRealtime(true);
    setStatusMessage(`Contacting Gemini Agronomy Engine for live ${targetCropName} data...`);

    try {
      const response = await fetch('/api/realtime/crop-update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cropName: targetCropName,
          category: currentCrop.category,
          region: 'North, Central & Deccan Agro-Climatic Zones',
        }),
      });

      const result = await response.json();

      if (result.success && result.data) {
        const liveData = result.data;
        const cropId = liveData.id || targetCropName.toLowerCase().replace(/\s+/g, '-');

        // Update crops list with live data
        setCropsList((prevList) => {
          const index = prevList.findIndex((c) => c.id === cropId || c.name.toLowerCase().includes(targetCropName.toLowerCase()));
          if (index >= 0) {
            const updated = [...prevList];
            updated[index] = { ...updated[index], ...liveData };
            return updated;
          } else {
            return [liveData, ...prevList];
          }
        });

        setSelectedCropId(cropId);

        if (liveData.liveAlert) {
          setLiveAlerts((prev) => ({
            ...prev,
            [cropId]: {
              ...liveData.liveAlert,
              lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            },
          }));
        }

        setStatusMessage(`Live real-time data received for ${targetCropName}!`);
        setTimeout(() => setStatusMessage(null), 4000);
      } else {
        setStatusMessage(result.error || 'API response unavailable. Reverting to scientific baseline.');
        setTimeout(() => setStatusMessage(null), 4000);
      }
    } catch (err: any) {
      console.error('Real-time fetch error:', err);
      setStatusMessage('Network update failed. Using calibrated baseline.');
      setTimeout(() => setStatusMessage(null), 4000);
    } finally {
      setIsLoadingRealtime(false);
    }
  };

  // Handle custom crop search submission
  const handleCustomCropSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customCropQuery.trim()) return;
    handleFetchRealtimeUpdate(customCropQuery.trim());
    setCustomCropQuery('');
  };

  return (
    <section id="grains" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-2">
              Comprehensive Agronomy Compendium · 14 Calibrated Crops
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display text-balance">
              Growing Grains, Pulses, Oilseeds & Cash Crops
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              Scientifically rigorous cultivation blueprints, critical moisture milestones, nutritional profiles, and live real-time seasonal advisories powered by the Gemini Agronomy Engine.
            </p>
          </div>
          <div className="relative">
            <img
              src={getCropImage(currentCrop.name)}
              alt={currentCrop.name}
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-xs uppercase tracking-wider font-bold text-emerald-400 mb-1">{currentCrop.category} Class</div>
              <div className="text-xl font-bold font-display">{currentCrop.name}</div>
              <div className="text-xs text-slate-200">{currentCrop.botanicalName} · {currentCrop.durationDays}</div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-white rounded-lg w-fit overflow-x-auto no-scrollbar max-w-full shadow-sm border border-slate-200">
          {[
            { id: 'all', label: 'All Crops', count: cropsList.length },
            { id: 'pulse', label: 'Pulses & Legumes', count: cropsList.filter((c) => c.category === 'pulse').length },
            { id: 'grain', label: 'Grains & Wheat', count: cropsList.filter((c) => c.category === 'grain' || c.category === 'wheat').length },
            { id: 'millet', label: 'Millets', count: cropsList.filter((c) => c.category === 'millet').length },
            { id: 'oilseed', label: 'Oilseeds', count: cropsList.filter((c) => c.category === 'oilseed').length },
            { id: 'commercial', label: 'Cash Crops', count: cropsList.filter((c) => c.category === 'commercial').length },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-all whitespace-nowrap flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-xs font-mono px-2 py-0.5 rounded ${selectedCategory === cat.id ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-600'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Crop Selection Bar & Custom Crop Query */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Preset Buttons for filtered category */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {filteredCrops.map((crop) => {
              const isSelected = crop.id === selectedCropId;
              return (
                <button
                  key={crop.id}
                  onClick={() => setSelectedCropId(crop.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-500/30'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                  }`}
                >
                  <WheatIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-300' : 'text-slate-400'}`} />
                  <span>{crop.name}</span>
                </button>
              );
            })}
          </div>

          {/* Custom Crop Input Box */}
          <form onSubmit={handleCustomCropSubmit} className="flex items-center gap-2 shrink-0">
            <input
              type="text"
              placeholder="Query any crop (e.g. Oats, Barley, Sunflower)..."
              value={customCropQuery}
              onChange={(e) => setCustomCropQuery(e.target.value)}
              className="text-xs px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64 shadow-2xs"
            />
            <button
              type="submit"
              disabled={isLoadingRealtime}
              className="px-4 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors whitespace-nowrap shadow-xs"
            >
              Fetch Live
            </button>
          </form>
        </div>

        {/* Main Crop Overview Card */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Content */}
            <div className="p-8">
              {/* Live Alert Banner */}
              {currentLiveAlert && (
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-200/80 text-xs text-slate-800 shadow-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-amber-200/60 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-bold text-emerald-900 uppercase tracking-wide">
                        Live Seasonal Radar · {currentCrop.name.split(' ')[0]}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-500">
                      Last Updated: {currentLiveAlert.lastUpdated}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <strong className="text-slate-900 block font-semibold">Active Seasonal Stage:</strong>
                      <span className="text-slate-700">{currentLiveAlert.currentStage}</span>
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Agro-Weather Alert:</strong>
                      <span className="text-slate-700">{currentLiveAlert.weatherAlert}</span>
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-semibold">Mandi Market Trend:</strong>
                      <span className="text-slate-700">{currentLiveAlert.mandiPriceTrend}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 italic mb-1">
                    <span>{currentCrop.botanicalName}</span>
                    <span aria-hidden="true">·</span>
                    <span className="capitalize font-semibold text-emerald-800">{currentCrop.category} Class</span>
                    <span aria-hidden="true">·</span>
                    <span>{currentCrop.sowingSeason}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                    {currentCrop.name}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {currentCrop.summary}
                  </p>
                </div>

                {/* Quick Environmental Requirements Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <div className="text-stone-500 flex items-center gap-1.5 mb-1">
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span>Temperature</span>
                  </div>
                  <div className="font-semibold text-stone-900 leading-tight">{currentCrop.temperature}</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <div className="text-stone-500 flex items-center gap-1.5 mb-1">
                    <Droplets className="w-3.5 h-3.5 text-sky-500" />
                    <span>Water Footprint</span>
                  </div>
                  <div className="font-semibold text-stone-900 leading-tight">{currentCrop.rainfall}</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <div className="text-stone-500 flex items-center gap-1.5 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Duration</span>
                  </div>
                  <div className="font-semibold text-stone-900 leading-tight">{currentCrop.durationDays}</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <div className="text-stone-500 flex items-center gap-1.5 mb-1">
                    <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Ideal Soil</span>
                  </div>
                  <div className="font-semibold text-stone-900 truncate" title={currentCrop.idealSoil}>
                    {currentCrop.idealSoil}
                  </div>
                </div>
              </div>

              {/* Cultivation Methodology Selector */}
              <div className="bg-white p-5 rounded-xl border border-stone-200">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100 flex-wrap gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                    Cultivation Protocol Blueprint
                  </span>
                  <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-md text-xs">
                    <button
                      onClick={() => setMethodView('natural')}
                      className={`px-3 py-1 rounded transition-colors ${
                        methodView === 'natural'
                          ? 'bg-emerald-800 text-white font-medium shadow-xs'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      Natural / Organic
                    </button>
                    <button
                      onClick={() => setMethodView('chemical')}
                      className={`px-3 py-1 rounded transition-colors ${
                        methodView === 'chemical'
                          ? 'bg-stone-800 text-white font-medium shadow-xs'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      Chemical / Synthetic
                    </button>
                  </div>
                </div>

                {/* Selected Method Details */}
                {methodView === 'natural' ? (
                  <div className="mt-4 space-y-3 text-xs sm:text-sm text-stone-700">
                    <div>
                      <strong className="text-emerald-900 block font-semibold">1. Seed Bio-Treatment & Inoculation:</strong>
                      <span className="text-stone-600 leading-relaxed">{currentCrop.naturalMethod.seedTreatment}</span>
                    </div>
                    <div>
                      <strong className="text-emerald-900 block font-semibold">2. Land Preparation & Organic Manure:</strong>
                      <span className="text-stone-600 leading-relaxed">{currentCrop.naturalMethod.landPrep}</span>
                    </div>
                    <div>
                      <strong className="text-emerald-900 block font-semibold">3. Biological Nutrition Schedule:</strong>
                      <span className="text-stone-600 leading-relaxed">{currentCrop.naturalMethod.nutrition}</span>
                    </div>
                    <div>
                      <strong className="text-emerald-900 block font-semibold">4. Botanical & Herbal Pest Defense:</strong>
                      <span className="text-stone-600 leading-relaxed">{currentCrop.naturalMethod.pestControl}</span>
                    </div>
                    <div>
                      <strong className="text-emerald-900 block font-semibold">5. Precision Water Scheduling:</strong>
                      <span className="text-stone-600 leading-relaxed">{currentCrop.naturalMethod.irrigation}</span>
                    </div>
                    <div className="pt-2 text-xs font-mono text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
                      <strong>Target Natural Yield:</strong> {currentCrop.naturalMethod.expectedYield}
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 space-y-3 text-xs sm:text-sm text-stone-700">
                    <div>
                      <strong className="text-stone-900 block font-semibold">1. Fungicidal Seed Dressing:</strong>
                      <span className="text-stone-600 leading-relaxed">{currentCrop.chemicalMethod.seedTreatment}</span>
                    </div>
                    <div>
                      <strong className="text-stone-900 block font-semibold">2. Synthetic Basal Placement (DAP / MOP / SSP):</strong>
                      <span className="text-stone-600 leading-relaxed">{currentCrop.chemicalMethod.landPrep}</span>
                    </div>
                    <div>
                      <strong className="text-stone-900 block font-semibold">3. Nitrogen / Urea Split Program:</strong>
                      <span className="text-stone-600 leading-relaxed">{currentCrop.chemicalMethod.nutrition}</span>
                    </div>
                    <div>
                      <strong className="text-stone-900 block font-semibold">4. Chemical Spray Regime:</strong>
                      <span className="text-stone-600 leading-relaxed">{currentCrop.chemicalMethod.pestControl}</span>
                    </div>
                    <div>
                      <strong className="text-stone-900 block font-semibold">5. Conventional Flood Irrigation:</strong>
                      <span className="text-stone-600 leading-relaxed">{currentCrop.chemicalMethod.irrigation}</span>
                    </div>
                    <div className="pt-2 text-xs font-mono text-stone-800 bg-stone-100 p-2.5 rounded-lg border border-stone-200">
                      <strong>Target Chemical Yield:</strong> {currentCrop.chemicalMethod.expectedYield}
                    </div>
                  </div>
                )}
              </div>
            </div>
            </div>

            {/* Right 5 Columns: Crop Benefits & Nutrition Matrix */}
            <div className="lg:col-span-5 space-y-6">
              {/* Grain Benefits Card */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs">
                <div className="flex items-center gap-2 pb-3 border-b border-stone-100">
                  <Award className="w-4 h-4 text-amber-500" />
                  <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                    Core Benefits of {currentCrop.name.split(' ')[0]}
                  </h4>
                </div>

                <div className="mt-4 space-y-3.5">
                  {currentCrop.keyBenefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs">
                      <div className="w-5 h-5 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <strong className="text-stone-900 font-semibold block">{b.title}</strong>
                        <span className="text-stone-600 leading-relaxed">{b.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nutritional Fact Sheet */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white p-6 rounded-2xl border border-emerald-900/50 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Nutritional Profile (per 100g)
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">
                    GI: {currentCrop.nutritionalValue.glycemicIndex}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Energy / Calories</span>
                    <span className="font-mono font-semibold text-white text-sm">
                      {currentCrop.nutritionalValue.calories}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px]">Protein Density</span>
                    <span className="font-mono font-semibold text-emerald-400 text-sm">
                      {currentCrop.nutritionalValue.protein}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px]">Dietary Fiber</span>
                    <span className="font-mono font-semibold text-white text-sm">
                      {currentCrop.nutritionalValue.fiber}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px]">Carbohydrates</span>
                    <span className="font-mono font-semibold text-white text-sm">
                      {currentCrop.nutritionalValue.carbs}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-200">Key Minerals: </span>
                  {currentCrop.nutritionalValue.minerals}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Growth Stages Stepper */}
          <div className="mt-8 pt-6 border-t border-stone-200">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-stone-900 font-display">
                Crop Growth Stages & Critical Milestones
              </h4>
              <span className="text-xs text-stone-500">
                Total cycle: {currentCrop.durationDays}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {currentCrop.stages.map((stg) => (
                <div
                  key={stg.stageNumber}
                  className="bg-white p-3.5 rounded-xl border border-stone-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-mono font-semibold text-emerald-700 uppercase">
                      Stage {stg.stageNumber} · {stg.dayRange}
                    </div>
                    <div className="text-xs font-bold text-stone-900 mt-1">
                      {stg.name}
                    </div>
                  </div>
                  <div className="mt-3 text-[11px] text-stone-600 border-t border-stone-100 pt-2 leading-tight">
                    {stg.criticalCare}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
