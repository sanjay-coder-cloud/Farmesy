import React, { useState } from 'react';
import { Award, Calendar, Check, Droplets, Heart, Info, Leaf, Loader2, RefreshCw, Sparkles, Sun, TrendingUp, Volume2, VolumeX, Wheat as WheatIcon, Zap } from 'lucide-react';
import { CROPS_DATA, CropDetail } from '../data/cropsData';

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
    <section id="grains" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
              Comprehensive Agronomy Compendium · 14 Calibrated Crops
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 font-display text-balance">
              Growing Grains, Pulses, Oilseeds & Cash Crops
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Scientifically rigorous cultivation blueprints, critical moisture milestones, nutritional profiles, and live real-time seasonal advisories powered by the Gemini Agronomy Engine.
            </p>
          </div>

          {/* Real-Time API Engine Trigger */}
          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={handleToggleSpeech}
              className={`p-2.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors ${
                isSpeaking
                  ? 'bg-rose-50 border-rose-200 text-rose-700'
                  : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
              }`}
              title={isSpeaking ? 'Stop Audio' : 'Listen to Agronomist Guide'}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
              <span className="hidden sm:inline">{isSpeaking ? 'Stop Audio' : 'Listen Guide'}</span>
            </button>

            <button
              onClick={() => handleFetchRealtimeUpdate()}
              disabled={isLoadingRealtime}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 rounded-lg shadow-sm transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:opacity-75"
            >
              {isLoadingRealtime ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Syncing Live Agronomy...</span>
                </>
              ) : (
                <>
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                  <span>Fetch Real-Time API Update</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live Status Toast Banner */}
        {statusMessage && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{statusMessage}</span>
            </div>
            {currentLiveAlert && (
              <span className="text-[11px] font-mono text-emerald-700">
                Synced at {currentLiveAlert.lastUpdated}
              </span>
            )}
          </div>
        )}

        {/* Category Filter Tabs */}
        <div className="mt-8 flex items-center gap-1.5 p-1 bg-stone-100/90 rounded-lg w-fit overflow-x-auto no-scrollbar max-w-full">
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
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${selectedCategory === cat.id ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-200 text-stone-600'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Crop Selection Bar & Custom Crop Query */}
        <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Preset Buttons for filtered category */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {filteredCrops.map((crop) => {
              const isSelected = crop.id === selectedCropId;
              return (
                <button
                  key={crop.id}
                  onClick={() => setSelectedCropId(crop.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-stone-900 text-white shadow-sm ring-1 ring-stone-900'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  <WheatIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-stone-500'}`} />
                  <span>{crop.name}</span>
                </button>
              );
            })}
          </div>

          {/* Custom Crop Input Box */}
          <form onSubmit={handleCustomCropSubmit} className="flex items-center gap-2 shrink-0">
            <input
              type="text"
              placeholder="Query any crop via API (e.g. Oats, Barley, Sunflower)..."
              value={customCropQuery}
              onChange={(e) => setCustomCropQuery(e.target.value)}
              className="text-xs px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 w-64"
            />
            <button
              type="submit"
              disabled={isLoadingRealtime}
              className="px-3 py-2 text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-white rounded-lg transition-colors whitespace-nowrap"
            >
              Fetch Live
            </button>
          </form>
        </div>

        {/* Main Crop Overview Card */}
        <div className="mt-6 bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8">
          {/* Live Alert Banner */}
          {currentLiveAlert && (
            <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-200/80 text-xs text-stone-800 shadow-2xs">
              <div className="flex items-center justify-between pb-2 border-b border-amber-200/60 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-emerald-900 uppercase tracking-wide">
                    Live Seasonal Radar · {currentCrop.name.split(' ')[0]}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-stone-500">
                  Last Updated: {currentLiveAlert.lastUpdated}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <strong className="text-stone-900 block font-semibold">Active Seasonal Stage:</strong>
                  <span className="text-stone-700">{currentLiveAlert.currentStage}</span>
                </div>
                <div>
                  <strong className="text-stone-900 block font-semibold">Agro-Weather Alert:</strong>
                  <span className="text-stone-700">{currentLiveAlert.weatherAlert}</span>
                </div>
                <div>
                  <strong className="text-stone-900 block font-semibold">Mandi Market Trend:</strong>
                  <span className="text-stone-700">{currentLiveAlert.mandiPriceTrend}</span>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: Key Agronomy Specs & Cultivation Steps */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-stone-500 italic mb-1">
                  <span>{currentCrop.botanicalName}</span>
                  <span aria-hidden="true">·</span>
                  <span className="capitalize font-semibold text-emerald-800">{currentCrop.category} Class</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentCrop.sowingSeason}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display">
                  {currentCrop.name}
                </h3>
                <p className="text-stone-600 text-sm mt-2 leading-relaxed">
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
              <div className="bg-stone-900 text-stone-100 p-6 rounded-xl border border-stone-800">
                <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-300">
                      Nutritional Profile (per 100g)
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">
                    GI: {currentCrop.nutritionalValue.glycemicIndex}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[11px]">Energy / Calories</span>
                    <span className="font-mono font-semibold text-white text-sm">
                      {currentCrop.nutritionalValue.calories}
                    </span>
                  </div>

                  <div>
                    <span className="text-stone-400 block text-[11px]">Protein Density</span>
                    <span className="font-mono font-semibold text-emerald-400 text-sm">
                      {currentCrop.nutritionalValue.protein}
                    </span>
                  </div>

                  <div>
                    <span className="text-stone-400 block text-[11px]">Dietary Fiber</span>
                    <span className="font-mono font-semibold text-white text-sm">
                      {currentCrop.nutritionalValue.fiber}
                    </span>
                  </div>

                  <div>
                    <span className="text-stone-400 block text-[11px]">Carbohydrates</span>
                    <span className="font-mono font-semibold text-white text-sm">
                      {currentCrop.nutritionalValue.carbs}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400">
                  <span className="font-semibold text-stone-200">Key Minerals: </span>
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
