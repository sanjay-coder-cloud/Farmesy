export interface VillageCropRecord {
  id: string;
  villageName: string;
  district: string;
  state: string;
  primaryCrop: string;
  cropCategory: 'Wheat' | 'Paddy' | 'Millet' | 'Corn' | 'Pulses' | 'Fodder';
  currentStage: 'Sowing & Germination' | 'Early Vegetative / Tillering' | 'Flowering & Heading' | 'Milking & Dough' | 'Maturity & Harvesting' | 'Post-Harvest Preparation';
  stageProgressPercent: number;
  farmingApproach: '100% Natural Organic' | 'Integrated Nutrient (INM)' | 'Conventional Intensive';
  estimatedHarvestDate: string;
  totalVillageAcreage: number;
  avgSoilHealthIndex: number; // 0-100
  soilType: string;
  irrigationSource: string;
  temperature: string;
  localPracticeHighlight: string;
  managerAdvisory: string;
  fertilizerUsedCurrentStage: string;
}

export const VILLAGES_DATA: VillageCropRecord[] = [
  {
    id: 'vil-1',
    villageName: 'Kheri Gurna',
    district: 'Patiala',
    state: 'Punjab',
    primaryCrop: 'Wheat (HD-3086 & PBW-824)',
    cropCategory: 'Wheat',
    currentStage: 'Milking & Dough',
    stageProgressPercent: 82,
    farmingApproach: 'Integrated Nutrient (INM)',
    estimatedHarvestDate: 'April 20 (in 18 days)',
    totalVillageAcreage: 2450,
    avgSoilHealthIndex: 74,
    soilType: 'Deep Alluvial Sandy Loam',
    irrigationSource: 'Bhakra Canal + Deep Borewell with Micro-Sprinklers',
    temperature: '26°C / 14°C',
    localPracticeHighlight: 'Happy Seeder zero-tillage with standing paddy residue mulch; 100% ban on stubble burning across 400 households.',
    managerAdvisory: 'Avoid late chemical nitrogen top dressing to prevent lodging during March pre-monsoon squalls. Apply light foliar potassium spray.',
    fertilizerUsedCurrentStage: 'Foliar spray of 1% Potassium Nitrate (13-0-45) + Fermented butter-milk spray for glume blotch defense'
  },
  {
    id: 'vil-2',
    villageName: 'Alanganallur',
    district: 'Madurai',
    state: 'Tamil Nadu',
    primaryCrop: 'Traditional Paddy (Seeraga Samba & Ponni)',
    cropCategory: 'Paddy',
    currentStage: 'Flowering & Heading',
    stageProgressPercent: 68,
    farmingApproach: '100% Natural Organic',
    estimatedHarvestDate: 'May 12 (in 32 days)',
    totalVillageAcreage: 1820,
    avgSoilHealthIndex: 89,
    soilType: 'Heavy River Delta Clay Loam',
    irrigationSource: 'Periyar River Canal network & farm percolation ponds',
    temperature: '31°C / 23°C',
    localPracticeHighlight: 'System of Rice Intensification (SRI) paired with live Azolla fern biomass cover that naturally chokes weeds and fixes atmospheric nitrogen.',
    managerAdvisory: 'Maintain Alternate Wetting & Drying (AWD) water depths of 2cm; apply fish amino acid tonic at sunset for panicle elongation.',
    fertilizerUsedCurrentStage: 'Fermented Jeevamrutha (200L/acre via irrigation) + Panchagavya 3% foliar misting'
  },
  {
    id: 'vil-3',
    villageName: 'Haveri Rural Cluster',
    district: 'Haveri',
    state: 'Karnataka',
    primaryCrop: 'Finger Millet (Ragi GPU-28) & Maize',
    cropCategory: 'Millet',
    currentStage: 'Early Vegetative / Tillering',
    stageProgressPercent: 35,
    farmingApproach: '100% Natural Organic',
    estimatedHarvestDate: 'June 28 (in 75 days)',
    totalVillageAcreage: 3100,
    avgSoilHealthIndex: 86,
    soilType: 'Red Gravelly Loam with High Porosity',
    irrigationSource: 'Rainfed with farm pond supplementary drip',
    temperature: '29°C / 20°C',
    localPracticeHighlight: 'Intercropping with pigeon pea (Arhar) and cowpea in 4:1 row ratio; zero chemical synthetic inputs practiced since 2018.',
    managerAdvisory: 'Run inter-cultivation blade harrow (Danti) this week to break soil crust and terminate weed flushes without chemical herbicides.',
    fertilizerUsedCurrentStage: 'Ghana-jeevamrutha dry pellets (250kg/acre) broadcasted before light rainfall'
  },
  {
    id: 'vil-4',
    villageName: 'Baramati Green Belt',
    district: 'Pune',
    state: 'Maharashtra',
    primaryCrop: 'Corn / Hybrid Maize (Silage & Grain)',
    cropCategory: 'Corn',
    currentStage: 'Early Vegetative / Tillering',
    stageProgressPercent: 42,
    farmingApproach: 'Integrated Nutrient (INM)',
    estimatedHarvestDate: 'May 25 (in 45 days)',
    totalVillageAcreage: 4200,
    avgSoilHealthIndex: 78,
    soilType: 'Deep Black Cotton Soil (Regur)',
    irrigationSource: 'Nira Left Bank Canal & Solar Drip Irrigation',
    temperature: '33°C / 19°C',
    localPracticeHighlight: 'Automated solar drip fertigation delivering digested biogas slurry directly to crop root zones; earthing-up completed with tractor cultivator.',
    managerAdvisory: 'Monitor weekly for Fall Armyworm (FAW) egg masses in central whorls. Release Trichogramma parasitoid wasps immediately if found.',
    fertilizerUsedCurrentStage: 'Soluble bio-enriched 19:19:19 via venturi drip + 50kg Neem-coated urea split'
  },
  {
    id: 'vil-5',
    villageName: 'Sehore Mandi Rural',
    district: 'Sehore',
    state: 'Madhya Pradesh',
    primaryCrop: 'Sharbati Wheat (C-306 Heritage)',
    cropCategory: 'Wheat',
    currentStage: 'Maturity & Harvesting',
    stageProgressPercent: 95,
    farmingApproach: '100% Natural Organic',
    estimatedHarvestDate: 'In Harvest Now (Completed in 4 days)',
    totalVillageAcreage: 5100,
    avgSoilHealthIndex: 92,
    soilType: 'Deep Fertile Vertisol (Medium Black Soil)',
    irrigationSource: 'Limited tube-well (2 life-saving irrigations only)',
    temperature: '28°C / 16°C',
    localPracticeHighlight: 'Famed rainfed Sharbati wheat grown on residual black soil moisture without excessive chemicals, commanding a 40% wholesale price premium.',
    managerAdvisory: 'Ensure combine harvesters maintain cutter bar height above 15cm to preserve root stubble for organic carbon buildup.',
    fertilizerUsedCurrentStage: 'Final maturation complete; zero chemical desiccants used'
  },
  {
    id: 'vil-6',
    villageName: 'Anand Milk Shed (Vasad)',
    district: 'Anand',
    state: 'Gujarat',
    primaryCrop: 'Green Fodder (Super Napier & Lucerne)',
    cropCategory: 'Fodder',
    currentStage: 'Early Vegetative / Tillering',
    stageProgressPercent: 50,
    farmingApproach: '100% Natural Organic',
    estimatedHarvestDate: 'Continuous 45-day cutting cycle',
    totalVillageAcreage: 1650,
    avgSoilHealthIndex: 94,
    soilType: 'Alluvial Goradu Loam',
    irrigationSource: 'Mahi River Canal & Treated Bio-slurry fertigation',
    temperature: '32°C / 21°C',
    localPracticeHighlight: 'Every hectare directly supports dairy cattle herds feeding into the local dairy cooperative; slurry returned directly to fodder fields.',
    managerAdvisory: 'Cut Napier at 3.5 feet height before stem lignification sets in to preserve crude protein above 14% and maximize cow milk fat.',
    fertilizerUsedCurrentStage: 'Liquid bio-digested vermiwash (500L/acre) applied immediately after cutting'
  },
  {
    id: 'vil-7',
    villageName: 'Taraori Basmati Zone',
    district: 'Karnal',
    state: 'Haryana',
    primaryCrop: 'Aromatic Basmati Rice (Pusa-1121 & Traditional)',
    cropCategory: 'Paddy',
    currentStage: 'Post-Harvest Preparation',
    stageProgressPercent: 10,
    farmingApproach: 'Integrated Nutrient (INM)',
    estimatedHarvestDate: 'Upcoming Kharif cycle planting in June',
    totalVillageAcreage: 3800,
    avgSoilHealthIndex: 72,
    soilType: 'Alluvial Silt Clay Loam',
    irrigationSource: 'Western Yamuna Canal & Solar Tube-wells',
    temperature: '27°C / 15°C',
    localPracticeHighlight: 'Currently planting summer green manure crops (Sesbania / Moong pulse) to naturally rejuvenate soil nitrogen before the main rice cycle.',
    managerAdvisory: 'Incorporate 45-day green manure into wet soil 2 weeks prior to puddling to build organic humus and cut synthetic urea demand by 50%.',
    fertilizerUsedCurrentStage: 'Microbial bio-decomposer spray over winter wheat residue'
  },
  {
    id: 'vil-8',
    villageName: 'Mandi Valley Foothills',
    district: 'Mandi',
    state: 'Himachal Pradesh',
    primaryCrop: 'Heritage Red Rice & Hill Wheat',
    cropCategory: 'Wheat',
    currentStage: 'Sowing & Germination',
    stageProgressPercent: 20,
    farmingApproach: '100% Natural Organic',
    estimatedHarvestDate: 'July 10 (in 90 days)',
    totalVillageAcreage: 920,
    avgSoilHealthIndex: 96,
    soilType: 'Terraced Mountain Forest Humus Loam',
    irrigationSource: 'Glacial stream snow-melt kuls',
    temperature: '21°C / 9°C',
    localPracticeHighlight: 'Traditional zero-budget hill farming with oak leaf mould, pine-needle compost, and local mountain cattle dung slurry.',
    managerAdvisory: 'Maintain terraced bund integrity during spring thaw to avoid soil erosion; apply cow-horn silica preparation (BD-501) for cold resistance.',
    fertilizerUsedCurrentStage: 'Aged mountain farmyard manure + wood ash broadcast'
  }
];
