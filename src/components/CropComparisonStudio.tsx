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
  DollarSign
} from 'lucide-react';

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
    estGrossRevenue: '$580 – $750 / acre',
    estCostPerAcre: '$190 – $240 / acre',
    estNetProfitPerAcre: '$390 – $510 / acre',
    proteinContent: '21.5% High Protein',
    climateTolerance: 'High drought resilience; cannot tolerate waterlogging or frost',
    bestSuitedFor: 'Residual moisture farming, rainfed belts, zero synthetic nitrogen',
    keyRisk: 'Root rot in poorly drained soils; pod borer larvae during pod setting'
  },
  cotton: {
    id: 'cotton',
    name: 'Cotton (White Gold)',
    category: 'Fibre & Cash Crop',
    season: 'Kharif (Monsoon)',
    durationDays: 165,
    waterDemandMm: 750,
    waterLevel: 'Moderate',
    soilImpact: 'Heavy Nutrient Depleter',
    laborNeed: 'High',
    estGrossRevenue: '$900 – $1,350 / acre',
    estCostPerAcre: '$420 – $560 / acre',
    estNetProfitPerAcre: '$480 – $790 / acre',
    proteinContent: '40% in cottonseed meal',
    climateTolerance: 'Deep-rooted, heat-loving; requires bright sunny picking weather',
    bestSuitedFor: 'Deep black cotton clay soils with drip or furrow irrigation',
    keyRisk: 'Pink bollworm, sucking pests (whitefly), unseasonal rain during boll burst'
  },
  sugarcane: {
    id: 'sugarcane',
    name: 'Sugarcane (Commercial Cane)',
    category: 'Cash Crop',
    season: 'Perennial / Annual',
    durationDays: 360,
    waterDemandMm: 1800,
    waterLevel: 'Very High',
    soilImpact: 'Heavy Nutrient Depleter',
    laborNeed: 'High',
    estGrossRevenue: '$1,800 – $2,400 / acre',
    estCostPerAcre: '$850 – $1,100 / acre',
    estNetProfitPerAcre: '$950 – $1,300 / acre',
    proteinContent: 'Negligible (Pure Sucrose)',
    climateTolerance: 'Tropical heat and heavy sunlight; sensitive to severe freezing',
    bestSuitedFor: 'Deep alluvial loams near cooperative sugar mills and continuous water',
    keyRisk: 'Year-long capital lock-in; extreme water dependency and mill payment cycles'
  },
  napier: {
    id: 'napier',
    name: 'Super Napier Grass',
    category: 'Fodder Crop',
    season: 'Perennial Multi-Cut',
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

  return (
    <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-stone-950 border border-stone-800 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
            <Scale className="w-4 h-4 text-emerald-400" />
            <span>Interactive Crop Comparison Studio</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
            Compare Any Two Indian Crops Side-by-Side
          </h3>
          <p className="text-stone-400 text-xs sm:text-sm mt-1">
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
          className="inline-flex items-center gap-1.5 px-3 py-2 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 text-xs font-semibold rounded-lg transition-colors self-start md:self-auto"
        >
          <ArrowRightLeft className="w-3.5 h-3.5 text-amber-400" />
          <span>Swap Crops</span>
        </button>
      </div>

      {/* Selectors Bar */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Crop A Selector */}
        <div className="p-4 rounded-xl bg-stone-900/90 border border-emerald-800/60">
          <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Select First Crop (Crop A)
          </label>
          <select
            value={cropAId}
            onChange={(e) => setCropAId(e.target.value)}
            className="w-full px-3 py-2 bg-stone-950 border border-stone-700 rounded-lg text-sm font-semibold text-white focus:outline-none focus:border-emerald-500"
          >
            {Object.values(COMPARISON_INDEX).map((c) => (
              <option key={c.id} value={c.id} disabled={c.id === cropBId}>
                {c.name} — {c.category} ({c.season})
              </option>
            ))}
          </select>
        </div>

        {/* Crop B Selector */}
        <div className="p-4 rounded-xl bg-stone-900/90 border border-amber-800/60">
          <label className="block text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Select Second Crop (Crop B)
          </label>
          <select
            value={cropBId}
            onChange={(e) => setCropBId(e.target.value)}
            className="w-full px-3 py-2 bg-stone-950 border border-stone-700 rounded-lg text-sm font-semibold text-white focus:outline-none focus:border-amber-500"
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
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Crop A Card */}
        <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-stone-800">
            <div>
              <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">{cropA.category}</span>
              <h4 className="text-xl font-bold font-display text-white">{cropA.name}</h4>
            </div>
            <span className="px-2.5 py-1 bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs rounded-full font-semibold">
              {cropA.season}
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-950 border border-stone-800/80">
              <span className="text-stone-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-stone-500" /> Duration in Field:
              </span>
              <span className="text-white font-bold font-mono">{cropA.durationDays} Days</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-950 border border-stone-800/80">
              <span className="text-stone-400 flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-sky-400" /> Water Requirement:
              </span>
              <span className="text-sky-300 font-bold font-mono">
                {cropA.waterDemandMm} mm ({cropA.waterLevel})
              </span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-950 border border-stone-800/80">
              <span className="text-stone-400 flex items-center gap-1.5">
                <Sprout className="w-3.5 h-3.5 text-emerald-400" /> Soil Impact:
              </span>
              <span className={`font-semibold ${
                cropA.soilImpact.includes('Enriches')
                  ? 'text-emerald-400'
                  : cropA.soilImpact.includes('Depleter')
                  ? 'text-amber-400'
                  : 'text-stone-300'
              }`}>
                {cropA.soilImpact}
              </span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-950 border border-stone-800/80">
              <span className="text-stone-400 flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> Est. Net Profit:
              </span>
              <span className="text-emerald-300 font-bold font-mono">{cropA.estNetProfitPerAcre}</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-950 border border-stone-800/80">
              <span className="text-stone-400">Nutritional Density:</span>
              <span className="text-stone-200 font-medium">{cropA.proteinContent}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 text-xs space-y-2">
            <div>
              <strong className="text-emerald-400 block text-[11px] uppercase">Best Suited For:</strong>
              <p className="text-stone-300 mt-0.5 leading-relaxed">{cropA.bestSuitedFor}</p>
            </div>
            <div>
              <strong className="text-rose-400 block text-[11px] uppercase">Key Risk Factor:</strong>
              <p className="text-stone-400 mt-0.5 leading-relaxed">{cropA.keyRisk}</p>
            </div>
          </div>
        </div>

        {/* Crop B Card */}
        <div className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-stone-800">
            <div>
              <span className="text-[11px] font-mono text-amber-400 font-bold uppercase">{cropB.category}</span>
              <h4 className="text-xl font-bold font-display text-white">{cropB.name}</h4>
            </div>
            <span className="px-2.5 py-1 bg-amber-950 border border-amber-800 text-amber-300 text-xs rounded-full font-semibold">
              {cropB.season}
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-950 border border-stone-800/80">
              <span className="text-stone-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-stone-500" /> Duration in Field:
              </span>
              <span className="text-white font-bold font-mono">{cropB.durationDays} Days</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-950 border border-stone-800/80">
              <span className="text-stone-400 flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-sky-400" /> Water Requirement:
              </span>
              <span className="text-sky-300 font-bold font-mono">
                {cropB.waterDemandMm} mm ({cropB.waterLevel})
              </span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-950 border border-stone-800/80">
              <span className="text-stone-400 flex items-center gap-1.5">
                <Sprout className="w-3.5 h-3.5 text-emerald-400" /> Soil Impact:
              </span>
              <span className={`font-semibold ${
                cropB.soilImpact.includes('Enriches')
                  ? 'text-emerald-400'
                  : cropB.soilImpact.includes('Depleter')
                  ? 'text-amber-400'
                  : 'text-stone-300'
              }`}>
                {cropB.soilImpact}
              </span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-950 border border-stone-800/80">
              <span className="text-stone-400 flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> Est. Net Profit:
              </span>
              <span className="text-emerald-300 font-bold font-mono">{cropB.estNetProfitPerAcre}</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-stone-950 border border-stone-800/80">
              <span className="text-stone-400">Nutritional Density:</span>
              <span className="text-stone-200 font-medium">{cropB.proteinContent}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 text-xs space-y-2">
            <div>
              <strong className="text-amber-400 block text-[11px] uppercase">Best Suited For:</strong>
              <p className="text-stone-300 mt-0.5 leading-relaxed">{cropB.bestSuitedFor}</p>
            </div>
            <div>
              <strong className="text-rose-400 block text-[11px] uppercase">Key Risk Factor:</strong>
              <p className="text-stone-400 mt-0.5 leading-relaxed">{cropB.keyRisk}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Agronomist Decision Verdict Banner */}
      <div className="mt-6 p-4 rounded-xl bg-emerald-950/50 border border-emerald-700/60 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div className="text-xs">
          <span className="font-bold text-emerald-300 uppercase tracking-wider block">
            Farmesy Agronomic Verdict:
          </span>
          <p className="text-stone-200 mt-1 leading-relaxed">
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
