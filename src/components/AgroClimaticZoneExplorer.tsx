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
  ChevronRight,
  Sun,
  Droplets
} from 'lucide-react';
import { ZONE_IMAGES } from '../data/cropImages';

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
  const zoneImg = ZONE_IMAGES[currentZone.id] || ZONE_IMAGES['indo-gangetic'];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-150">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            <span>National Regional Agronomy Map</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1">
            6 Prime Agro-Climatic Zones of India
          </h3>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl leading-relaxed">
            Explore how soil chemistry, monsoon dynamics, and seasonal temperatures dictate crop suitability from the Indo-Gangetic plains to the Western Ghat plantations.
          </p>
        </div>

        <span className="text-xs font-semibold px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 shadow-2xs self-start md:self-auto">
          Context: <strong className="text-emerald-700">Post-Monsoon Transition</strong>
        </span>
      </div>

      {/* Zone selection chips */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {AGRO_ZONES.map((zone) => {
          const isSelected = zone.id === selectedZoneId;
          return (
            <button
              key={zone.id}
              onClick={() => setSelectedZoneId(zone.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-md ring-2 ring-emerald-500/30'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/50 hover:text-emerald-900 shadow-xs'
              }`}
            >
              <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-emerald-100' : 'text-emerald-700'}`}>
                {zone.geography.split(',')[0]}
              </span>
              <span className="text-xs font-bold mt-1.5 line-clamp-1">{zone.name.split(' ')[0]} {zone.name.split(' ')[1] || ''}</span>
              <span className={`text-[10px] mt-1 font-medium ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`}>
                {zone.primaryCrops.length} Flagship Crops
              </span>
            </button>
          );
        })}
      </div>

      {/* Detailed Zone Card with Landscape Image */}
      <div className="mt-8 rounded-2xl border border-slate-200 shadow-sm overflow-hidden bg-white">
        {/* Landscape Image Banner */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
          <img
            src={zoneImg}
            alt={currentZone.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Overlay info */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-white/90 text-slate-800 text-xs font-mono font-bold backdrop-blur-xs shadow-xs">
              {currentZone.hindiName}
            </span>

            <span className="px-3 py-1 rounded-full bg-emerald-600/90 text-white text-xs font-semibold backdrop-blur-xs flex items-center gap-1.5 shadow-xs">
              <MapPin className="w-3.5 h-3.5" />
              {currentZone.geography.split(',').slice(0, 2).join(', ')}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h4 className="text-2xl sm:text-3xl font-bold font-display drop-shadow-xs">
              {currentZone.name}
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-2xl drop-shadow-2xs">
              States covered: {currentZone.geography}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-150 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                <CloudRain className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-sky-800 block">
                  Annual Precipitation
                </span>
                <span className="text-sm font-bold text-slate-900">{currentZone.annualRainfall}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-150 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                <Thermometer className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-800 block">
                  Diurnal Temperature Regime
                </span>
                <span className="text-sm font-bold text-slate-900">{currentZone.temperatureRange}</span>
              </div>
            </div>
          </div>

          {/* Agronomy Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                Soil Chemistry & Texture Profile
              </span>
              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">{currentZone.soilProfile}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                Live Seasonal Operations (October Window)
              </span>
              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">{currentZone.currentSeasonalStage}</p>
            </div>
          </div>

          {/* Flagship crops */}
          <div>
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2.5">
              Flagship Crops Cultivated in this Zone:
            </span>
            <div className="flex flex-wrap gap-2">
              {currentZone.primaryCrops.map((crop) => (
                <span
                  key={crop}
                  className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1.5 shadow-2xs hover:border-emerald-300 transition-colors"
                >
                  <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{crop}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Strategic Agronomic Directive */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-emerald-50/60 to-teal-50 border border-emerald-200 text-xs shadow-2xs">
            <span className="font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-2 mb-1.5 text-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Executive Agronomic Directive for {currentZone.name}:
            </span>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">{currentZone.agronomicHighlight}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
