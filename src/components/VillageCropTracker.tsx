import React, { useState } from 'react';
import { Calendar, Compass, Droplets, Filter, Loader2, MapPin, Plus, Search, Sparkles, Sprout, Thermometer, UserCheck, Zap } from 'lucide-react';
import { VILLAGES_DATA, VillageCropRecord } from '../data/villagesData';
import { getCropImage } from '../data/cropImages';

export const VillageCropTracker: React.FC = () => {
  const [villagesList, setVillagesList] = useState<VillageCropRecord[]>(VILLAGES_DATA);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCropCategory, setSelectedCropCategory] = useState<string>('All');
  const [selectedStageFilter, setSelectedStageFilter] = useState<string>('All');
  const [selectedVillage, setSelectedVillage] = useState<VillageCropRecord | null>(null);
  const [isSyncingId, setIsSyncingId] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [newVillageName, setNewVillageName] = useState<string>('');
  const [newDistrict, setNewDistrict] = useState<string>('');
  const [newState, setNewState] = useState<string>('');
  const [newCrop, setNewCrop] = useState<string>('Wheat');
  const [isAddingVillage, setIsAddingVillage] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync village in real-time via Gemini API
  const handleSyncVillage = async (village: VillageCropRecord, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsSyncingId(village.id);
    setToastMessage(`Syncing real-time agronomy for ${village.villageName}...`);

    try {
      const response = await fetch('/api/realtime/village-update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          villageName: village.villageName,
          district: village.district,
          state: village.state,
          crop: village.primaryCrop,
        }),
      });

      const result = await response.json();

      if (result.success && result.data) {
        const live = result.data;
        const updatedRecord: VillageCropRecord = {
          ...village,
          currentStage: live.currentStage || village.currentStage,
          stageProgressPercent: live.stageProgressPercent || village.stageProgressPercent,
          farmingApproach: live.farmingApproach || village.farmingApproach,
          estimatedHarvestDate: live.estimatedHarvestDate || village.estimatedHarvestDate,
          totalVillageAcreage: live.totalVillageAcreage || village.totalVillageAcreage,
          avgSoilHealthIndex: live.avgSoilHealthIndex || village.avgSoilHealthIndex,
          soilType: live.soilType || village.soilType,
          irrigationSource: live.irrigationSource || village.irrigationSource,
          temperature: live.temperature || village.temperature,
          localPracticeHighlight: live.localPracticeHighlight || village.localPracticeHighlight,
          managerAdvisory: live.managerAdvisory || village.managerAdvisory,
          fertilizerUsedCurrentStage: live.fertilizerUsedCurrentStage || village.fertilizerUsedCurrentStage,
        };

        setVillagesList((prev) =>
          prev.map((v) => (v.id === village.id ? updatedRecord : v))
        );

        if (selectedVillage?.id === village.id) {
          setSelectedVillage(updatedRecord);
        }

        setToastMessage(`Real-time update received for ${village.villageName}!`);
        setTimeout(() => setToastMessage(null), 4000);
      } else {
        setToastMessage(result.error || 'Live sync unavailable.');
        setTimeout(() => setToastMessage(null), 4000);
      }
    } catch (err: any) {
      console.error('Village sync error:', err);
      setToastMessage('Network sync failed.');
      setTimeout(() => setToastMessage(null), 4000);
    } finally {
      setIsSyncingId(null);
    }
  };

  // Add custom village & fetch live stage via API
  const handleAddCustomVillage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVillageName.trim()) return;

    setIsAddingVillage(true);
    setToastMessage(`Querying live agronomy for ${newVillageName}...`);

    try {
      const response = await fetch('/api/realtime/village-update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          villageName: newVillageName.trim(),
          district: newDistrict.trim() || 'Regional Cluster',
          state: newState.trim() || 'Agro Zone',
          crop: newCrop,
        }),
      });

      const result = await response.json();
      const live = result.data || {};

      const newRecord: VillageCropRecord = {
        id: `vil-${Date.now()}`,
        villageName: newVillageName.trim(),
        district: newDistrict.trim() || live.district || 'Regional Cluster',
        state: newState.trim() || live.state || 'Agro Zone',
        primaryCrop: newCrop,
        cropCategory: newCrop.includes('Paddy') || newCrop.includes('Rice')
          ? 'Paddy'
          : newCrop.includes('Millet')
          ? 'Millet'
          : newCrop.includes('Corn') || newCrop.includes('Maize')
          ? 'Corn'
          : newCrop.includes('Fodder')
          ? 'Fodder'
          : 'Wheat',
        currentStage: live.currentStage || 'Early Vegetative / Tillering',
        stageProgressPercent: live.stageProgressPercent || 45,
        farmingApproach: live.farmingApproach || '100% Natural Organic',
        estimatedHarvestDate: live.estimatedHarvestDate || 'In 45 days',
        totalVillageAcreage: live.totalVillageAcreage || 1800,
        avgSoilHealthIndex: live.avgSoilHealthIndex || 85,
        soilType: live.soilType || 'Fertile Alluvial Loam',
        irrigationSource: live.irrigationSource || 'Canal & Borewell',
        temperature: live.temperature || '28°C / 18°C',
        localPracticeHighlight: live.localPracticeHighlight || 'Active organic manure composting and rotational planting.',
        managerAdvisory: live.managerAdvisory || 'Maintain balanced root zone moisture and test soil nitrogen.',
        fertilizerUsedCurrentStage: live.fertilizerUsedCurrentStage || 'Bio-consortia and aged farmyard compost',
      };

      setVillagesList((prev) => [newRecord, ...prev]);
      setSelectedVillage(newRecord);
      setShowAddModal(false);
      setNewVillageName('');
      setNewDistrict('');
      setNewState('');

      setToastMessage(`Added and synced ${newRecord.villageName} in real-time!`);
      setTimeout(() => setToastMessage(null), 4000);
    } catch (err: any) {
      console.error('Add village error:', err);
      setToastMessage('Could not connect to live API.');
      setTimeout(() => setToastMessage(null), 4000);
    } finally {
      setIsAddingVillage(false);
    }
  };

  // Filtered villages
  const filteredVillages = villagesList.filter((v) => {
    const matchesSearch =
      v.villageName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.primaryCrop.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCrop =
      selectedCropCategory === 'All' || v.cropCategory === selectedCropCategory;

    const matchesStage =
      selectedStageFilter === 'All' || v.currentStage === selectedStageFilter;

    return matchesSearch && matchesCrop && matchesStage;
  });

  return (
    <section id="villages" className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              <span>Live Regional Agronomy Radar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display text-balance">
              Village Crop Tracker & Growth Stages
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Real-time tracking of what agricultural villages are cultivating right now, their current seasonal growth stage, and stage-specific fertilizer inputs powered by the Gemini API.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-sm hover:shadow-md transition-all whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              <span>Track Custom Village</span>
            </button>
          </div>
        </div>

        {/* Live Toast Message */}
        {toastMessage && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Search & Filter Toolbar */}
        <div className="mt-8 bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-xs space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search village, state, district, or crop name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800"
              />
            </div>

            {/* Crop Category Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedCropCategory}
                onChange={(e) => setSelectedCropCategory(e.target.value)}
                aria-label="Filter by Crop Category"
                className="w-full py-2 px-3 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-700"
              >
                <option value="All">All Crop Types</option>
                <option value="Wheat">Wheat</option>
                <option value="Paddy">Paddy / Rice</option>
                <option value="Millet">Millets / Ragi</option>
                <option value="Corn">Corn / Maize</option>
                <option value="Fodder">Dairy Green Fodder</option>
              </select>
            </div>

            {/* Growth Stage Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedStageFilter}
                onChange={(e) => setSelectedStageFilter(e.target.value)}
                aria-label="Filter by Current Growth Stage"
                className="w-full py-2 px-3 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-700"
              >
                <option value="All">All Growth Stages</option>
                <option value="Sowing & Germination">Sowing & Germination</option>
                <option value="Early Vegetative / Tillering">Early Vegetative / Tillering</option>
                <option value="Flowering & Heading">Flowering & Heading</option>
                <option value="Milking & Dough">Milking & Dough</option>
                <option value="Maturity & Harvesting">Maturity & Harvesting</option>
                <option value="Post-Harvest Preparation">Post-Harvest Preparation</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-stone-100 flex-wrap gap-2">
            <span>
              Showing <strong className="text-stone-900 font-semibold">{filteredVillages.length}</strong> monitored agricultural clusters
            </span>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                100% Natural Organic
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-stone-500 inline-block" />
                Integrated INM
              </span>
            </div>
          </div>
        </div>

        {/* Village Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVillages.map((village) => {
            const cropImg = getCropImage(village.primaryCrop);
            return (
              <div
                key={village.id}
                onClick={() => setSelectedVillage(village)}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-400 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Crop Image Header */}
                  <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                    <img
                      src={cropImg}
                      alt={village.primaryCrop}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-slate-800 text-[10px] font-bold backdrop-blur-xs shadow-2xs">
                        {village.state}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold shadow-2xs">
                        {village.totalVillageAcreage}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <div className="text-base font-bold font-display drop-shadow-xs flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{village.villageName}</span>
                      </div>
                      <div className="text-xs text-slate-200 font-medium">
                        {village.primaryCrop}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    {/* Current Stage Badge & Progress */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-150">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-semibold text-slate-800 truncate" title={village.currentStage}>
                          {village.currentStage}
                        </span>
                        <span className="font-mono text-emerald-700 font-bold tabular-nums">
                          {village.stageProgressPercent}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                          style={{ width: `${village.stageProgressPercent}%` }}
                        />
                      </div>

                      <div className="mt-2 text-[10px] text-slate-500 flex justify-between">
                        <span>Est. Harvest:</span>
                        <span className="font-semibold text-slate-700">{village.estimatedHarvestDate}</span>
                      </div>
                    </div>

                    {/* Local Highlight Snippet */}
                    <div className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {village.localPracticeHighlight}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Approach & Action */}
                <div className="p-4 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                        village.farmingApproach.includes('Organic')
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {village.farmingApproach}
                    </span>

                    <button
                      onClick={(e) => handleSyncVillage(village, e)}
                      disabled={isSyncingId === village.id}
                      className="flex items-center gap-1 text-[11px] text-emerald-700 hover:text-emerald-800 font-semibold disabled:opacity-50"
                      title="Fetch real-time stage update via API"
                    >
                      {isSyncingId === village.id ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <Zap className="w-3 h-3 text-amber-500" />
                      )}
                      <span>Live Sync</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredVillages.length === 0 && (
          <div className="mt-8 p-12 text-center bg-white rounded-2xl border border-stone-200 text-stone-500 text-sm">
            No agricultural clusters matched your search filters. Try adjusting crop category or stage criteria.
          </div>
        )}

        {/* Modal: Full Village Agronomy Dossier */}
        {selectedVillage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-xs">
            <div className="bg-white max-w-2xl w-full rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>
                    {selectedVillage.villageName}, {selectedVillage.district}, {selectedVillage.state}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedVillage(null)}
                  className="p-1 rounded-md text-stone-400 hover:text-stone-800 text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display">
                    {selectedVillage.primaryCrop}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-stone-500 mt-1">
                    <span>Acreage: {selectedVillage.totalVillageAcreage.toLocaleString()} Acres</span>
                    <span>·</span>
                    <span>Soil Health Index: {selectedVillage.avgSoilHealthIndex}/100</span>
                    <span>·</span>
                    <span>Approach: {selectedVillage.farmingApproach}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleSyncVillage(selectedVillage)}
                  disabled={isSyncingId === selectedVillage.id}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors shrink-0"
                >
                  {isSyncingId === selectedVillage.id ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                  )}
                  <span>Sync Real-Time via API</span>
                </button>
              </div>

              {/* Growth Stage Tracker in Modal */}
              <div className="mt-5 p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between text-xs font-semibold text-stone-900 mb-1">
                  <span>Current Stage: {selectedVillage.currentStage}</span>
                  <span className="font-mono text-emerald-700">{selectedVillage.stageProgressPercent}% Complete</span>
                </div>
                <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden mt-2">
                  <div
                    className="bg-emerald-600 h-full rounded-full"
                    style={{ width: `${selectedVillage.stageProgressPercent}%` }}
                  />
                </div>
                <div className="mt-2 text-xs text-stone-500 flex justify-between">
                  <span>Irrigation Source: {selectedVillage.irrigationSource}</span>
                  <span>Weather: {selectedVillage.temperature}</span>
                </div>
              </div>

              {/* Fertilization Details at this stage */}
              <div className="mt-5 space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-100">
                  <strong className="text-emerald-950 font-semibold block mb-1">
                    Fertilizer Applied at Current Stage:
                  </strong>
                  <p className="text-stone-700">{selectedVillage.fertilizerUsedCurrentStage}</p>
                </div>

                <div>
                  <strong className="text-stone-900 font-semibold block mb-1">
                    Local Indigenous / Sustainable Practice:
                  </strong>
                  <p className="text-stone-600 leading-relaxed">{selectedVillage.localPracticeHighlight}</p>
                </div>

                <div className="p-3.5 bg-stone-100 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 font-semibold block mb-1 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-emerald-700" />
                    <span>Farm Manager Advisory Note:</span>
                  </strong>
                  <p className="text-stone-700 leading-relaxed">{selectedVillage.managerAdvisory}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setSelectedVillage(null)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors"
                >
                  Close Village Dossier
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Add & Track Custom Village */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-xs">
            <div className="bg-white max-w-md w-full rounded-2xl border border-stone-200 p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800">
                  <Compass className="w-4 h-4 text-emerald-600" />
                  <span>Track Custom Village via API</span>
                </div>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-1 rounded-md text-stone-400 hover:text-stone-800 text-sm"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddCustomVillage} className="mt-4 space-y-3.5 text-xs">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Village Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rampur, Shivamogga, Bhatinda"
                    value={newVillageName}
                    onChange={(e) => setNewVillageName(e.target.value)}
                    className="w-full p-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-semibold text-stone-700 block mb-1">District</label>
                    <input
                      type="text"
                      placeholder="e.g. Ludhiana, Mandya"
                      value={newDistrict}
                      onChange={(e) => setNewDistrict(e.target.value)}
                      className="w-full p-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-stone-700 block mb-1">State / Province</label>
                    <input
                      type="text"
                      placeholder="e.g. Punjab, Karnataka"
                      value={newState}
                      onChange={(e) => setNewState(e.target.value)}
                      className="w-full p-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Primary Crop</label>
                  <select
                    value={newCrop}
                    onChange={(e) => setNewCrop(e.target.value)}
                    className="w-full p-2 bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="Wheat">Wheat</option>
                    <option value="Paddy / Rice">Paddy / Rice</option>
                    <option value="Finger Millet (Ragi)">Finger Millet (Ragi)</option>
                    <option value="Pearl Millet (Bajra)">Pearl Millet (Bajra)</option>
                    <option value="Maize / Corn">Maize / Corn</option>
                    <option value="Soybean">Soybean</option>
                    <option value="Mustard">Mustard</option>
                    <option value="Green Fodder (Napier)">Green Fodder (Napier)</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-3 py-1.5 text-stone-600 hover:text-stone-900 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isAddingVillage}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-xs"
                  >
                    {isAddingVillage ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Querying Gemini...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-3.5 h-3.5 text-amber-300" />
                        <span>Query & Track</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
