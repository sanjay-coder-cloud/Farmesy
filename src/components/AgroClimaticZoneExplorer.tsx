import React, { useState } from 'react';
import {
  Compass,
  MapPin,
  CloudRain,
  Thermometer,
  Sprout,
  CheckCircle2,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';

interface AgroZone {
  id: string;
  name: string;
  hindiName: string;
  geography: string;
  soilProfile: string;
  annualRainfall: string;
  temperatureRange: string;
  primaryCrops: string[];
  currentSeasonalStage: string;
  agronomicHighlight: string;
  color: string;
}

const AGRO_ZONES: AgroZone[] = [
  {
    id: 'indo-gangetic',
    name: 'Indo-Gangetic Alluvial Plain',
    hindiName: 'सिंधु-गंगा का जलोढ़ मैदान',
    geography: 'Punjab, Haryana, Uttar Pradesh, Bihar',
    soilProfile: 'Deep, highly fertile alluvial silt and loam renewed by Himalayan river basins, neutral pH 6.8–7.5.',
    annualRainfall: '650 mm – 1100 mm (Monsoon + Western Disturbances in Winter)',
    temperatureRange: '4°C (Winter Min) to 42°C (Summer Max)',
    primaryCrops: ['Wheat', 'Rice (Basmati)', 'Sugarcane', 'Mustard', 'Potato'],
    currentSeasonalStage: 'Kharif paddy threshing concluding; pre-sowing Rauni irrigation for Wheat & Mustard drilling active.',
    agronomicHighlight: 'The primary grain basket of India, feeding national public distribution reserves. Massive shift towards zero-tillage wheat drilling to preserve residual soil moisture and stop stubble burning.',
    color: 'emerald'
  },
  {
    id: 'western-semiarid',
    name: 'Western Semi-Arid & Thar Belt',
    hindiName: 'पश्चिमी अर्ध-शुष्क क्षेत्र',
    geography: 'Rajasthan, Northern Gujarat, South-West Haryana',
    soilProfile: 'Porous sandy loams, desert soils with low organic matter, highly responsive to vermicompost and microbial binders.',
    annualRainfall: '250 mm – 500 mm (Low, erratic precipitation)',
    temperatureRange: '2°C (Winter Min) to 48°C (Extreme Summer Max)',
    primaryCrops: ['Pearl Millet (Bajra)', 'Mustard', 'Chickpea', 'Groundnut', 'Cumin & Isabgol', 'Aloe Vera'],
    currentSeasonalStage: 'Bajra harvested; Rabi Mustard and Chickpea sowing in full swing utilizing drip irrigation.',
    agronomicHighlight: 'World leader in drought-resilient millets, seed spices (jeera/saunf), and high-yielding Brassica mustard varieties.',
    color: 'amber'
  },
  {
    id: 'deccan-blacksoil',
    name: 'Central Deccan Black Cotton Plateau',
    hindiName: 'दक्कन का काली मिट्टी का पठार',
    geography: 'Maharashtra, Madhya Pradesh, Northern Karnataka, Telangana',
    soilProfile: 'Deep moisture-retentive Regur (Black Cotton) soil high in montmorillonite clay, rich in iron, lime, and magnesium.',
    annualRainfall: '700 mm – 1000 mm',
    temperatureRange: '12°C (Winter Min) to 40°C (Summer Max)',
    primaryCrops: ['Cotton', 'Soybean', 'Pigeon Pea (Tur)', 'Onion (Nashik)', 'Sorghum (Jowar)', 'Pomegranate'],
    currentSeasonalStage: 'First flush cotton boll picking; Tur dal flowering; Rabi Jowar and Chickpea emergence.',
    agronomicHighlight: 'The pulses and oilseed heartland. Deep root penetration allows double cropping on residual black soil moisture without artificial heating.',
    color: 'sky'
  },
  {
    id: 'southern-peninsular',
    name: 'Southern Peninsular & Deltaic Basin',
    hindiName: 'दक्षिणी प्रायद्वीपीय एवं डेल्टा क्षेत्र',
    geography: 'Tamil Nadu, Andhra Pradesh, Eastern Karnataka, Rayalaseema',
    soilProfile: 'Red sandy loams, river delta clays, and laterite soils with good drainage and phosphorus response.',
    annualRainfall: '800 mm – 1200 mm (Northeast Returning Monsoon active in Oct-Dec)',
    temperatureRange: '18°C (Winter Min) to 38°C (Summer Max)',
    primaryCrops: ['Paddy (Samba Season)', 'Ragi (Finger Millet)', 'Banana', 'Groundnut', 'Turmeric', 'Coconut'],
    currentSeasonalStage: 'North-East Monsoon (Thulavaram) active; Samba paddy transplanting and weeding underway.',
    agronomicHighlight: 'Continuous year-round tropical growing seasons with advanced micro-irrigation and System of Rice Intensification (SRI).',
    color: 'rose'
  },
  {
    id: 'western-ghats',
    name: 'Western Ghats & Plantation Corridor',
    hindiName: 'पश्चिमी घाट एवं बागान गलियारा',
    geography: 'Kerala, Malnad Karnataka, Nilgiris & Anamalai Hills',
    soilProfile: 'Acidic, high-humus forest loams and deep red laterites on rolling terraced slopes (pH 4.5–5.8).',
    annualRainfall: '2000 mm – 4500 mm (Very heavy South-West Monsoon)',
    temperatureRange: '14°C to 30°C (Equable tropical highland climate)',
    primaryCrops: ['Tea', 'Coffee (Arabica/Robusta)', 'Natural Rubber', 'Arecanut', 'Black Pepper', 'Cardamom'],
    currentSeasonalStage: 'Post-monsoon flush plucking for tea; Arabica coffee berry ripening; rubber latex tapping peak.',
    agronomicHighlight: 'Multi-tiered agroforestry systems where shade-grown coffee, black pepper vines, and spices coexist sustainably under evergreen jungle canopies.',
    color: 'teal'
  },
  {
    id: 'eastern-deltaic',
    name: 'Eastern Brahmaputra & Deltaic Basin',
    hindiName: 'पूर्वी ब्रह्मपुत्र एवं डेल्टा बेसिन',
    geography: 'West Bengal, Assam, Odisha, Coastal Andhra',
    soilProfile: 'Heavy alluvial river silt, rich in organic matter and delta sediment deposited by Ganga-Brahmaputra floods.',
    annualRainfall: '1400 mm – 2800 mm',
    temperatureRange: '10°C to 36°C (Humid sub-tropical)',
    primaryCrops: ['Rice (Aman / Boro)', 'Jute (Golden Fibre)', 'Tea (Assam Orthodox)', 'Mustard', 'Winter Vegetables'],
    currentSeasonalStage: 'Aman paddy nearing golden harvest; retting of golden jute bast fibres completed; winter vegetable nurseries preparing.',
    agronomicHighlight: 'Global epicentre of biodegradable natural jute and the world’s largest single contiguous tea production zone (Brahmaputra Valley).',
    color: 'lime'
  }
];

export const AgroClimaticZoneExplorer: React.FC = () => {
  const [selectedZoneId, setSelectedZoneId] = useState<string>('indo-gangetic');

  const currentZone = AGRO_ZONES.find((z) => z.id === selectedZoneId) || AGRO_ZONES[0];

  return (
    <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-stone-950 border border-stone-800 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>National Regional Agronomy Map</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
            6 Prime Agro-Climatic Zones of India
          </h3>
          <p className="text-stone-400 text-xs sm:text-sm mt-1">
            Explore how soil chemistry, monsoon dynamics, and seasonal temperatures dictate crop suitability from the Indo-Gangetic plains to the Western Ghat plantations.
          </p>
        </div>

        <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300">
          Current Context: <strong className="text-emerald-400">Post-Monsoon Transition</strong>
        </span>
      </div>

      {/* Zone selection chips */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {AGRO_ZONES.map((zone) => {
          const isSelected = zone.id === selectedZoneId;
          return (
            <button
              key={zone.id}
              onClick={() => setSelectedZoneId(zone.id)}
              className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-md ring-1 ring-emerald-500/50'
                  : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-200'
              }`}
            >
              <span className="text-[10px] font-mono font-bold text-emerald-400">
                {zone.geography.split(',')[0]}
              </span>
              <span className="text-xs font-bold mt-1 line-clamp-1">{zone.name.split(' ')[0]} {zone.name.split(' ')[1] || ''}</span>
              <span className="text-[10px] text-stone-500 mt-1">{zone.primaryCrops.length} Flagship Crops</span>
            </button>
          );
        })}
      </div>

      {/* Detailed Zone Card */}
      <div className="mt-6 p-6 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">{currentZone.hindiName}</span>
              <span className="text-stone-600">·</span>
              <span className="text-xs text-stone-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-500" /> {currentZone.geography}
              </span>
            </div>
            <h4 className="text-2xl font-bold font-display text-white mt-1">{currentZone.name}</h4>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-lg bg-stone-950 border border-stone-800 text-xs">
              <span className="text-stone-400 text-[10px] uppercase block">Rainfall</span>
              <span className="text-sky-300 font-bold font-mono">{currentZone.annualRainfall}</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-stone-950 border border-stone-800 text-xs">
              <span className="text-stone-400 text-[10px] uppercase block">Temperatures</span>
              <span className="text-amber-300 font-bold font-mono">{currentZone.temperatureRange}</span>
            </div>
          </div>
        </div>

        {/* Agronomy Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-stone-950 border border-stone-800/80 space-y-2">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
              Soil Chemistry & Texture Profile
            </span>
            <p className="text-stone-300 leading-relaxed">{currentZone.soilProfile}</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-950 border border-stone-800/80 space-y-2">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
              Live Seasonal Crop Operations (October)
            </span>
            <p className="text-stone-300 leading-relaxed">{currentZone.currentSeasonalStage}</p>
          </div>
        </div>

        {/* Flagship crops */}
        <div>
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-2">
            Flagship Crops Cultivated in this Zone:
          </span>
          <div className="flex flex-wrap gap-2">
            {currentZone.primaryCrops.map((crop) => (
              <span
                key={crop}
                className="px-3 py-1.5 rounded-lg bg-stone-950 border border-stone-800 text-stone-200 text-xs font-medium flex items-center gap-1.5 shadow-xs"
              >
                <Sprout className="w-3.5 h-3.5 text-emerald-400" />
                <span>{crop}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Strategic Agronomic Directive */}
        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs">
          <span className="font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            Executive Agronomic Directive for {currentZone.name}:
          </span>
          <p className="text-stone-200 leading-relaxed">{currentZone.agronomicHighlight}</p>
        </div>
      </div>
    </div>
  );
};
