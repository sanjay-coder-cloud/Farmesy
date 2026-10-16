import React, { useState } from 'react';
import {
  ArrowRightLeft,
  CheckCircle2,
  Droplets,
  Clock,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Scale,
  ShieldCheck,
  Wheat,
  Sprout,
  DollarSign,
  ChevronRight
} from 'lucide-react';
import { getCropImage } from '../data/cropImages';

interface CropComparisonMetric {
  id: string;
  name: string;
  category: string;
  season: string;
  durationDays: number;
  waterDemandMm: number;
  waterLevel: 'Very Low' | 'Low' | 'Moderate' | 'High' | 'Very High';
  soilImpact: 'Enriches Soil (N-Fixer)' | 'Neutral / Moderate' | 'Heavy Nutrient Depleter';
  laborNeed: 'Low' | 'Medium' | 'High';
  estGrossRevenue: string;
  estCostPerAcre: string;
  estNetProfitPerAcre: string;
  proteinContent: string;
  climateTolerance: string;
  bestSuitedFor: string;
  keyRisk: string;
}

const COMPARISON_INDEX: Record<string, CropComparisonMetric> = {
  wheat: {
    id: 'wheat',
    name: 'Wheat (Golden Grain)',
    category: 'Food Crop',
    season: 'Rabi (Winter)',
    durationDays: 130,
    waterDemandMm: 500,
    waterLevel: 'Moderate',
    soilImpact: 'Neutral / Moderate',
    laborNeed: 'Medium',
    estGrossRevenue: '$680 – $840 / acre',
    estCostPerAcre: '$280 – $340 / acre',
    estNetProfitPerAcre: '$400 – $500 / acre',
    proteinContent: '12.6% Protein',
    climateTolerance: 'Requires cool vegetative winter, sensitive to terminal heat',
    bestSuitedFor: 'Assured canal or tube-well irrigation; stable national food security',
    keyRisk: 'Terminal heat waves during March grain filling and yellow rust fungi'
  },
  rice: {
    id: 'rice',
    name: 'Rice (Paddy)',
    category: 'Food Crop',
    season: 'Kharif (Monsoon)',
    durationDays: 135,
    waterDemandMm: 1250,
    waterLevel: 'Very High',
    soilImpact: 'Heavy Nutrient Depleter',
    laborNeed: 'High',
    estGrossRevenue: '$750 – $1,100 / acre',
    estCostPerAcre: '$380 – $480 / acre',
    estNetProfitPerAcre: '$370 – $620 / acre',
    proteinContent: '7.5% Protein',
    climateTolerance: 'Thrives in high heat and standing water, sensitive to dry spells',
    bestSuitedFor: 'Clay soils with canal flooding or heavy monsoon deltas',
    keyRisk: 'Depletion of underground aquifers; methane emissions from flooding'
  },
  mustard: {
    id: 'mustard',
    name: 'Mustard & Rapeseed',
    category: 'Oilseed Crop',
    season: 'Rabi (Winter)',
    durationDays: 115,
    waterDemandMm: 320,
    waterLevel: 'Low',
    soilImpact: 'Neutral / Moderate',
    laborNeed: 'Low',
    estGrossRevenue: '$620 – $780 / acre',
    estCostPerAcre: '$210 – $260 / acre',
    estNetProfitPerAcre: '$410 – $520 / acre',
    proteinContent: '35% in de-oiled cake',
    climateTolerance: 'Drought-tolerant, needs cold sunny winter, sensitive to frost',
    bestSuitedFor: 'Sandy loam soils with limited 2–3 irrigations; high edible oil market',
    keyRisk: 'Aphid attacks during flowering and cloudy unseasonal weather'
  },
  chickpea: {
    id: 'chickpea',
    name: 'Chickpea (Chana)',
    category: 'Pulse Crop',
    season: 'Rabi (Winter)',
    durationDays: 105,
    waterDemandMm: 280,
    waterLevel: 'Very Low',
    soilImpact: 'Enriches Soil (N-Fixer)',
    laborNeed: 'Low',
    estGrossRevenue: '$580 – $740 / acre',
    estCostPerAcre: '$160 – $220 / acre',
    estNetProfitPerAcre: '$420 – $520 / acre',
    proteinContent: '22% Complete Plant Protein',
    climateTolerance: 'High drought hardiness, sensitive to excess standing water and heavy frost',
    bestSuitedFor: 'Conserves residual moisture; ideal pulse rotation after Kharif paddy',
    keyRisk: 'Pod borer (Helicoverpa armigera) and collar rot in waterlogged patches'
  },
  cotton: {
    id: 'cotton',
    name: 'Cotton (White Gold)',
    category: 'Fibre Crop',
    season: 'Kharif (Monsoon)',
    durationDays: 165,
    waterDemandMm: 750,
    waterLevel: 'Moderate',
    soilImpact: 'Heavy Nutrient Depleter',
    laborNeed: 'High',
    estGrossRevenue: '$850 – $1,250 / acre',
    estCostPerAcre: '$420 – $550 / acre',
    estNetProfitPerAcre: '$430 – $700 / acre',
    proteinContent: 'N/A (Lint & 18% oil in cottonseed)',
    climateTolerance: 'Requires long frost-free periods, high sunshine, deep black soils',
    bestSuitedFor: 'Deccan black soils with drip irrigation or assured seasonal rainfall',
    keyRisk: 'Pink bollworm resistance and excessive pesticide expenditure'
  },
  superNapier: {
    id: 'superNapier',
    name: 'Super Napier Grass',
    category: 'Fodder Crop',
    season: 'Perennial / Multi-Cut',
    durationDays: 45, // per cut
    waterDemandMm: 650,
    waterLevel: 'Moderate',
    soilImpact: 'Enriches Soil (N-Fixer)',
    laborNeed: 'Low',
    estGrossRevenue: '$1,200 – $1,600 / acre / yr',
    estCostPerAcre: '$320 – $400 / acre / yr',
    estNetProfitPerAcre: '$880 – $1,200 / acre / yr',
    proteinContent: '12% Crude Protein',
    climateTolerance: 'Rapid year-round biomass generation; cut every 45 days for 5 years',
    bestSuitedFor: 'Integrated dairy farms seeking zero green fodder deficit',
    keyRisk: 'Needs regular cutting before 4 feet to prevent stem lignification'
  },
  soybean: {
    id: 'soybean',
    name: 'Soybean (Golden Bean)',
    category: 'Oilseed & Pulse',
    season: 'Kharif (Monsoon)',
    durationDays: 98,
    waterDemandMm: 500,
    waterLevel: 'Moderate',
    soilImpact: 'Enriches Soil (N-Fixer)',
    laborNeed: 'Medium',
    estGrossRevenue: '$520 – $680 / acre',
    estCostPerAcre: '$210 – $270 / acre',
    estNetProfitPerAcre: '$310 – $410 / acre',
    proteinContent: '40% Complete Protein',
    climateTolerance: 'Moderate drought tolerance, requires drainage to prevent root rot',
    bestSuitedFor: 'Black soils of central India as premier monsoon oilseed crop',
    keyRisk: 'Yellow mosaic virus transmitted by whitefly; erratic monsoon gaps'
  }
};

export const CropComparisonStudio: React.FC = () => {
  const [cropAId, setCropAId] = useState<string>('wheat');
  const [cropBId, setCropBId] = useState<string>('mustard');

  const cropA = COMPARISON_INDEX[cropAId] || COMPARISON_INDEX.wheat;
  const cropB = COMPARISON_INDEX[cropBId] || COMPARISON_INDEX.mustard;

  const cropAImg = getCropImage(cropA.name);
  const cropBImg = getCropImage(cropB.name);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-150">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Scale className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Crop Comparison Studio</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1">
            Compare Any Two Indian Crops Side-by-Side
          </h3>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl leading-relaxed">
            Evaluate water footprints, growth duration, soil regeneration capability, and net operating margins per acre to make informed agronomic decisions.
          </p>
        </div>

        {/* Quick swap button */}
        <button
          onClick={() => {
            const temp = cropAId;
            setCropAId(cropBId);
            setCropBId(temp);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200 hover:border-emerald-300 text-slate-700 text-xs font-semibold rounded-xl transition-all self-start md:self-auto shadow-2xs hover:shadow-xs"
        >
          <ArrowRightLeft className="w-3.5 h-3.5 text-emerald-600" />
          <span>Swap Crops</span>
        </button>
      </div>

      {/* Selectors Bar */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Crop A Selector */}
        <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 shadow-xs">
          <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
            Select First Crop (Crop A)
          </label>
          <select
            value={cropAId}
            onChange={(e) => setCropAId(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-white border border-emerald-300 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs"
          >
            {Object.values(COMPARISON_INDEX).map((c) => (
              <option key={c.id} value={c.id} disabled={c.id === cropBId}>
                {c.name} — {c.category} ({c.season})
              </option>
            ))}
          </select>
        </div>

        {/* Crop B Selector */}
        <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 shadow-xs">
          <label className="block text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
            Select Second Crop (Crop B)
          </label>
          <select
            value={cropBId}
            onChange={(e) => setCropBId(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-white border border-amber-300 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-2xs"
          >
            {Object.values(COMPARISON_INDEX).map((c) => (
              <option key={c.id} value={c.id} disabled={c.id === cropAId}>
                {c.name} — {c.category} ({c.season})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Side-by-Side Comparison Matrix */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Crop A Card */}
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between">
          <div>
            {/* Image Banner */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-100">
              <img
                src={cropAImg}
                alt={cropA.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-xs">
                  Crop A · {cropA.category}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/90 text-slate-800 text-xs font-semibold backdrop-blur-xs">
                  {cropA.season}
                </span>
              </div>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h4 className="text-xl font-bold font-display drop-shadow-xs">{cropA.name}</h4>
              </div>
            </div>

            {/* Metrics */}
            <div className="p-6 space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-150">
                <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-slate-500" /> Duration in Field:
                </span>
                <span className="text-slate-900 font-bold font-mono">{cropA.durationDays} Days</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-150">
                <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                  <Droplets className="w-4 h-4 text-sky-500" /> Water Requirement:
                </span>
                <span className="text-sky-700 font-bold font-mono">
                  {cropA.waterDemandMm} mm ({cropA.waterLevel})
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-150">
                <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                  <Sprout className="w-4 h-4 text-emerald-600" /> Soil Impact:
                </span>
                <span className={`font-semibold ${
                  cropA.soilImpact.includes('Enriches')
                    ? 'text-emerald-700'
                    : cropA.soilImpact.includes('Depleter')
                    ? 'text-amber-700'
                    : 'text-slate-700'
                }`}>
                  {cropA.soilImpact}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-150">
                <span className="text-emerald-900 flex items-center gap-1.5 font-medium">
                  <DollarSign className="w-4 h-4 text-emerald-600" /> Est. Net Profit:
                </span>
                <span className="text-emerald-800 font-bold font-mono text-sm">{cropA.estNetProfitPerAcre}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-150">
                <span className="text-slate-600 font-medium">Nutritional Density:</span>
                <span className="text-slate-900 font-semibold">{cropA.proteinContent}</span>
              </div>

              {/* Agronomic Details */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2.5">
                <div>
                  <strong className="text-emerald-800 block text-[11px] uppercase tracking-wide">Best Suited For:</strong>
                  <p className="text-slate-700 mt-0.5 leading-relaxed">{cropA.bestSuitedFor}</p>
                </div>
                <div className="pt-2 border-t border-slate-200/60">
                  <strong className="text-rose-800 block text-[11px] uppercase tracking-wide">Key Risk Factor:</strong>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">{cropA.keyRisk}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Crop B Card */}
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between">
          <div>
            {/* Image Banner */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-100">
              <img
                src={cropBImg}
                alt={cropB.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-amber-600 text-white text-xs font-bold shadow-xs">
                  Crop B · {cropB.category}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/90 text-slate-800 text-xs font-semibold backdrop-blur-xs">
                  {cropB.season}
                </span>
              </div>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h4 className="text-xl font-bold font-display drop-shadow-xs">{cropB.name}</h4>
              </div>
            </div>

            {/* Metrics */}
            <div className="p-6 space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-150">
                <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-slate-500" /> Duration in Field:
                </span>
                <span className="text-slate-900 font-bold font-mono">{cropB.durationDays} Days</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-150">
                <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                  <Droplets className="w-4 h-4 text-sky-500" /> Water Requirement:
                </span>
                <span className="text-sky-700 font-bold font-mono">
                  {cropB.waterDemandMm} mm ({cropB.waterLevel})
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-150">
                <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                  <Sprout className="w-4 h-4 text-emerald-600" /> Soil Impact:
                </span>
                <span className={`font-semibold ${
                  cropB.soilImpact.includes('Enriches')
                    ? 'text-emerald-700'
                    : cropB.soilImpact.includes('Depleter')
                    ? 'text-amber-700'
                    : 'text-slate-700'
                }`}>
                  {cropB.soilImpact}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-150">
                <span className="text-emerald-900 flex items-center gap-1.5 font-medium">
                  <DollarSign className="w-4 h-4 text-emerald-600" /> Est. Net Profit:
                </span>
                <span className="text-emerald-800 font-bold font-mono text-sm">{cropB.estNetProfitPerAcre}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-150">
                <span className="text-slate-600 font-medium">Nutritional Density:</span>
                <span className="text-slate-900 font-semibold">{cropB.proteinContent}</span>
              </div>

              {/* Agronomic Details */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2.5">
                <div>
                  <strong className="text-amber-800 block text-[11px] uppercase tracking-wide">Best Suited For:</strong>
                  <p className="text-slate-700 mt-0.5 leading-relaxed">{cropB.bestSuitedFor}</p>
                </div>
                <div className="pt-2 border-t border-slate-200/60">
                  <strong className="text-rose-800 block text-[11px] uppercase tracking-wide">Key Risk Factor:</strong>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">{cropB.keyRisk}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Agronomist Decision Verdict Banner */}
      <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-emerald-50/60 to-teal-50 border border-emerald-200 shadow-xs flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5 text-emerald-700" />
        </div>
        <div className="text-xs">
          <span className="font-bold text-emerald-950 uppercase tracking-wider block text-sm">
            Farmesy Agronomic Verdict:
          </span>
          <p className="text-slate-700 mt-1 leading-relaxed text-xs sm:text-sm">
            {cropA.waterDemandMm < cropB.waterDemandMm
              ? `If your farm faces water table constraints or limited tube-well hours, ${cropA.name} saves approximately ${cropB.waterDemandMm - cropA.waterDemandMm} mm of water compared to ${cropB.name}.`
              : `If high water availability and heavy clay soils are present, ${cropB.name} offers specialized economic throughput.`}
            {' '}
            {cropA.soilImpact.includes('Enriches') || cropB.soilImpact.includes('Enriches')
              ? `Note that incorporating ${cropA.soilImpact.includes('Enriches') ? cropA.name : cropB.name} into your rotational cycle builds free biological atmospheric nitrogen for subsequent crops, reducing synthetic fertilizer bills by over 30%.`
              : 'Both crops require rigorous organic humus maintenance and green manuring (Dhaincha/Sunn hemp) between cycles.'}
          </p>
        </div>
      </div>
    </div>
  );
};
