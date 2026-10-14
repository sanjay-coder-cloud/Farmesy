export interface CropTypeCategory {
  id: string;
  categoryNumber: number;
  name: string;
  tagline: string;
  definition: string;
  colorTheme: string;
  crops: {
    name: string;
    localName?: string;
    botanicalName: string;
    primaryStates: string[];
    soilType: string;
    duration: string;
    season: 'Kharif' | 'Rabi' | 'Zaid' | 'Perennial / Annual';
    economicRole: string;
    keyNutrientOrUse: string;
  }[];
}

export interface SeasonalCategory {
  id: 'kharif' | 'rabi' | 'zaid';
  seasonName: string;
  hindiName: string;
  sowingPeriod: string;
  harvestingPeriod: string;
  climateProfile: string;
  rainfallPattern: string;
  keyCrops: string[];
  activeNowInIndia: boolean; // Current October context
  agronomicActionNow: string;
}

export const SEASONS_DATA: SeasonalCategory[] = [
  {
    id: 'kharif',
    seasonName: 'Kharif Season (Monsoon Crops)',
    hindiName: 'खरीफ फसल',
    sowingPeriod: 'June – July (Onset of South-West Monsoon)',
    harvestingPeriod: 'September – November (Post-Monsoon)',
    climateProfile: 'High heat, high humidity, and heavy monsoon precipitation; requires long daylight hours for vegetative growth.',
    rainfallPattern: 'Dependent on South-West Monsoon (750 mm – 1500 mm)',
    keyCrops: ['Rice (Paddy)', 'Maize (Corn)', 'Cotton', 'Soybean', 'Groundnut', 'Pearl Millet (Bajra)', 'Pigeon Pea (Arhar/Tur)'],
    activeNowInIndia: true,
    agronomicActionNow: 'Harvesting & threshing underway across northern and western plains. Ensure dry storage moisture < 12% to prevent mold.'
  },
  {
    id: 'rabi',
    seasonName: 'Rabi Season (Winter Crops)',
    hindiName: 'रबी फसल',
    sowingPeriod: 'October – December (Post-Monsoon Winter Initiation)',
    harvestingPeriod: 'March – April (Spring / Early Summer)',
    climateProfile: 'Cool, crisp temperatures during vegetative establishment; warm, dry sunny days during maturity and grain filling.',
    rainfallPattern: 'Sub-tropical winter moisture, Western Disturbances (150 mm – 350 mm) + canal/borewell irrigation',
    keyCrops: ['Wheat', 'Mustard & Rapeseed', 'Chickpea (Chana)', 'Lentils (Masoor)', 'Field Peas', 'Barley'],
    activeNowInIndia: true,
    agronomicActionNow: 'CRITICAL PRE-SOWING WINDOW NOW: Rauni (pre-sowing irrigation), seedbed pulverization, seed inoculation with Rhizobium/Trichoderma, and timely drilling before Nov 20.'
  },
  {
    id: 'zaid',
    seasonName: 'Zaid Season (Summer Catch Crops)',
    hindiName: 'जायद फसल',
    sowingPeriod: 'March – April (Early Summer Post-Rabi Harvest)',
    harvestingPeriod: 'May – June (Before South-West Monsoon Arrives)',
    climateProfile: 'Warm, dry, sunny weather with long photoperiods; rapid growth cycle with zero frost risk.',
    rainfallPattern: 'High evaporation rates; strictly reliant on assured tube-well or drip irrigation',
    keyCrops: ['Watermelon', 'Muskmelon', 'Cucumber', 'Summer Moong (Green Gram)', 'Bitter Gourd', 'Pumpkin', 'Fodder Cowpea'],
    activeNowInIndia: false,
    agronomicActionNow: 'Planning phase. Select short-duration heat-tolerant varieties to utilize fallow gaps between Rabi harvest and Kharif transplanting.'
  }
];

export const INDIAN_CROP_TYPES: CropTypeCategory[] = [
  {
    id: 'food-crops',
    categoryNumber: 1,
    name: 'Food Crops',
    tagline: 'Primary human caloric sustenance & dietary staples',
    definition: 'Crops cultivated primarily for direct human food consumption, supplying carbohydrates, dietary fiber, and baseline nutrition.',
    colorTheme: 'amber',
    crops: [
      {
        name: 'Rice (Paddy)',
        localName: 'Dhan / Chawal',
        botanicalName: 'Oryza sativa',
        primaryStates: ['West Bengal', 'Punjab', 'Uttar Pradesh', 'Andhra Pradesh', 'Tamil Nadu'],
        soilType: 'Heavy river silt clay loam with high water holding capacity',
        duration: '115 – 150 days',
        season: 'Kharif',
        economicRole: 'Feeds 65% of India; major export earner through aromatic Basmati rice.',
        keyNutrientOrUse: 'Staple clean carbohydrate, hypoallergenic energy, and livestock straw.'
      },
      {
        name: 'Wheat',
        localName: 'Gehun',
        botanicalName: 'Triticum aestivum',
        primaryStates: ['Uttar Pradesh', 'Punjab', 'Haryana', 'Madhya Pradesh', 'Rajasthan'],
        soilType: 'Well-drained alluvial loam to clay loam, pH 6.0 – 7.5',
        duration: '120 – 140 days',
        season: 'Rabi',
        economicRole: 'Cornerstone of national food security, public distribution system (PDS), and milling industries.',
        keyNutrientOrUse: 'Complex carbs, high dietary fiber, selenium, manganese, and gluten elasticity.'
      },
      {
        name: 'Maize (Corn)',
        localName: 'Makka',
        botanicalName: 'Zea mays',
        primaryStates: ['Karnataka', 'Madhya Pradesh', 'Bihar', 'Maharashtra', 'Telangana'],
        soilType: 'Deep fertile loam with good drainage, free of waterlogging',
        duration: '90 – 110 days',
        season: 'Kharif',
        economicRole: 'Tri-purpose grain for poultry feed (60%), industrial starch, and human culinary consumption.',
        keyNutrientOrUse: 'Lutein, zeaxanthin for retinal health, resistant starch, and sweet corn.'
      },
      {
        name: 'Millets (Ragi, Bajra, Jowar)',
        localName: 'Mota Anaj / Sri Anna',
        botanicalName: 'Eleusine coracana / Pennisetum glaucum',
        primaryStates: ['Rajasthan', 'Karnataka', 'Maharashtra', 'Gujarat', 'Tamil Nadu'],
        soilType: 'Sandy loam, shallow gravelly red soils with low moisture',
        duration: '75 – 105 days',
        season: 'Kharif',
        economicRole: 'Branded globally as "Sri Anna" super-grains; thriving export market for healthy wellness foods.',
        keyNutrientOrUse: 'Calcium (344mg/100g in Ragi), iron (8mg/100g in Bajra), low glycemic index, gluten-free.'
      },
      {
        name: 'Pulses (Dals)',
        localName: 'Dalan / Dal',
        botanicalName: 'Fabaceae family',
        primaryStates: ['Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Uttar Pradesh'],
        soilType: 'Deep black cotton soil or sandy loam with neutral pH',
        duration: '60 – 160 days',
        season: 'Rabi',
        economicRole: 'Universal vegetarian protein source; enriches soil nitrogen naturally.',
        keyNutrientOrUse: '20–25% plant protein, high lysine, iron, and folic acid.'
      }
    ]
  },
  {
    id: 'fibre-crops',
    categoryNumber: 2,
    name: 'Fibre Crops',
    tagline: 'Raw natural textile fibers for spinning, apparel & packaging',
    definition: 'Crops grown specifically to harvest biological plant fibers used in spinning yarns, manufacturing textiles, ropes, and eco-packaging.',
    colorTheme: 'sky',
    crops: [
      {
        name: 'Cotton',
        localName: 'Kapas / Rui',
        botanicalName: 'Gossypium hirsutum',
        primaryStates: ['Gujarat', 'Maharashtra', 'Telangana', 'Rajasthan', 'Haryana'],
        soilType: 'Deep moisture-retentive black cotton soil (Regur), pH 6.5 – 8.0',
        duration: '150 – 180 days',
        season: 'Kharif',
        economicRole: 'India is the world’s largest cotton producer; anchors the domestic textile export economy.',
        keyNutrientOrUse: 'Pure natural cellulose fiber for apparel, plus high-protein cottonseed meal for dairy cattle.'
      },
      {
        name: 'Jute (Golden Fibre)',
        localName: 'Pat / Patson',
        botanicalName: 'Corchorus olitorius / C. capsularis',
        primaryStates: ['West Bengal', 'Bihar', 'Assam', 'Odisha', 'Meghalaya'],
        soilType: 'New alluvial silt loam renewed annually by river floods',
        duration: '120 – 150 days',
        season: 'Kharif',
        economicRole: 'World-leading producer of 100% biodegradable golden packaging bags, gunny sacks, and geotextiles.',
        keyNutrientOrUse: 'Bast fiber with high tensile strength, eco-packaging, and paper pulp.'
      },
      {
        name: 'Flax (Linseed Fibre)',
        localName: 'Alsi',
        botanicalName: 'Linum usitatissimum',
        primaryStates: ['Madhya Pradesh', 'Uttar Pradesh', 'Chhattisgarh', 'Bihar'],
        soilType: 'Fertile clay loams with steady moisture retention',
        duration: '110 – 130 days',
        season: 'Rabi',
        economicRole: 'Produces premium linen luxury fabrics and omega-3 rich functional linseed oil.',
        keyNutrientOrUse: 'Linen yarn spinning, high alpha-linolenic acid (ALA), and industrial drying oils.'
      }
    ]
  },
  {
    id: 'cash-crops',
    categoryNumber: 3,
    name: 'Cash Crops',
    tagline: 'High-value commercial crops cultivated for direct market sale',
    definition: 'Agricultural crops grown not for domestic consumption by the grower, but for commerce, industrial processing, and substantial financial revenue.',
    colorTheme: 'emerald',
    crops: [
      {
        name: 'Sugarcane',
        localName: 'Ganna',
        botanicalName: 'Saccharum officinarum',
        primaryStates: ['Uttar Pradesh', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat'],
        soilType: 'Deep rich alluvial loam or heavy clay loam with high organic carbon',
        duration: '300 – 365 days',
        season: 'Perennial / Annual',
        economicRole: 'Supplies sugar mills, jaggery (Gur), green bio-ethanol fuel blending, and bagasse power cogeneration.',
        keyNutrientOrUse: 'Sucrose sugar, mineral-dense jaggery, bio-ethanol, and cattle molasses.'
      },
      {
        name: 'Cotton',
        localName: 'Kapas',
        botanicalName: 'Gossypium spp.',
        primaryStates: ['Gujarat', 'Maharashtra', 'Telangana', 'Andhra Pradesh'],
        soilType: 'Black cotton clay soil',
        duration: '160 – 180 days',
        season: 'Kharif',
        economicRole: 'Generates immediate liquidity for farmers through direct ginning mill sales.',
        keyNutrientOrUse: 'Textile lint and high-oil cottonseed cake.'
      },
      {
        name: 'Tobacco',
        localName: 'Tambaku',
        botanicalName: 'Nicotiana tabacum',
        primaryStates: ['Andhra Pradesh', 'Gujarat', 'Karnataka', 'Uttar Pradesh'],
        soilType: 'Light sandy loam with excellent drainage and neutral pH',
        duration: '100 – 130 days',
        season: 'Rabi',
        economicRole: 'Major commercial foreign exchange earner; cultivated under strict Tobacco Board licensing.',
        keyNutrientOrUse: 'Commercial curing, nicotine alkaloids for biopesticides, and pharmaceutical research.'
      },
      {
        name: 'Jute',
        localName: 'Jute / Pat',
        botanicalName: 'Corchorus spp.',
        primaryStates: ['West Bengal', 'Bihar', 'Assam'],
        soilType: 'River delta silt',
        duration: '120 – 140 days',
        season: 'Kharif',
        economicRole: 'Commercial cash sales directly to riverbank jute mills.',
        keyNutrientOrUse: 'Commercial gunny packaging and export handicrafts.'
      }
    ]
  },
  {
    id: 'oilseed-crops',
    categoryNumber: 4,
    name: 'Oilseed Crops',
    tagline: 'High-lipid seeds for edible cooking oils & industrial lubricants',
    definition: 'Crops grown for extracting culinary cooking oils, industrial lubricants, and protein-dense de-oiled cake (DOC) for livestock feed.',
    colorTheme: 'yellow',
    crops: [
      {
        name: 'Mustard & Rapeseed',
        localName: 'Sarson / Rai',
        botanicalName: 'Brassica juncea',
        primaryStates: ['Rajasthan', 'Madhya Pradesh', 'Haryana', 'Uttar Pradesh'],
        soilType: 'Light to medium sandy loam, pH 6.0 – 7.5 with sulfur requirement',
        duration: '110 – 125 days',
        season: 'Rabi',
        economicRole: 'India’s foremost winter edible oil; reduces edible oil import bill.',
        keyNutrientOrUse: 'Pungent cold-pressed Kachi Ghani oil, high monounsaturated fats, and 35% protein cake.'
      },
      {
        name: 'Groundnut (Peanut)',
        localName: 'Moongphali',
        botanicalName: 'Arachis hypogaea',
        primaryStates: ['Gujarat', 'Rajasthan', 'Tamil Nadu', 'Andhra Pradesh', 'Karnataka'],
        soilType: 'Well-drained light sandy loam with loose texture for underground pegging',
        duration: '105 – 120 days',
        season: 'Kharif',
        economicRole: 'High-value confectionery peanut exports and premium heart-healthy cooking oil.',
        keyNutrientOrUse: '48% healthy oil, 26% protein, resveratrol, and subterranean nitrogen fixation.'
      },
      {
        name: 'Sunflower',
        localName: 'Surajmukhi',
        botanicalName: 'Helianthus annuus',
        primaryStates: ['Karnataka', 'Odisha', 'Maharashtra', 'Bihar'],
        soilType: 'Deep loams and fertile black soils with good drainage',
        duration: '85 – 100 days',
        season: 'Kharif',
        economicRole: 'Produces premium polyunsaturated refined oil with high smoke point.',
        keyNutrientOrUse: 'High Vitamin E, linoleic acid, and cardiac-friendly low saturated fat profile.'
      },
      {
        name: 'Sesame (Gingelly)',
        localName: 'Til',
        botanicalName: 'Sesamum indicum',
        primaryStates: ['Gujarat', 'West Bengal', 'Rajasthan', 'Tamil Nadu'],
        soilType: 'Well-drained light sandy loam; highly drought-resilient',
        duration: '80 – 95 days',
        season: 'Kharif',
        economicRole: 'Traditional ayurvedic oil and massive export of hulled white sesame seeds.',
        keyNutrientOrUse: 'Sesamol antioxidant, high calcium (975mg/100g), and anti-aging lignans.'
      },
      {
        name: 'Soybean',
        localName: 'Soyabean',
        botanicalName: 'Glycine max',
        primaryStates: ['Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Karnataka'],
        soilType: 'Deep black cotton soils with good drainage',
        duration: '90 – 105 days',
        season: 'Kharif',
        economicRole: 'Drives national meal exports and the multi-billion dollar domestic refined oil industry.',
        keyNutrientOrUse: '20% oil and 40% complete amino acid protein meal.'
      }
    ]
  },
  {
    id: 'pulse-crops',
    categoryNumber: 5,
    name: 'Pulse Crops',
    tagline: 'High-protein grain legumes that naturally regenerate soil nitrogen',
    definition: 'Harvested exclusively for dry, edible seeds, pulses are the nutritional cornerstone of plant-based protein, fixing atmospheric nitrogen through root nodules.',
    colorTheme: 'orange',
    crops: [
      {
        name: 'Chickpea (Chana)',
        localName: 'Chana / Kabuli Chana',
        botanicalName: 'Cicer arietinum',
        primaryStates: ['Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Karnataka', 'Uttar Pradesh'],
        soilType: 'Deep moisture-retentive black cotton soils or alluvial loams',
        duration: '95 – 115 days',
        season: 'Rabi',
        economicRole: 'Accounts for nearly 50% of India’s total pulse production; traded globally.',
        keyNutrientOrUse: '20.5% protein, very low GI (28), high iron, folate, and resistant starch.'
      },
      {
        name: 'Pigeon Pea (Tur / Arhar)',
        localName: 'Arhar / Toor Dal',
        botanicalName: 'Cajanus cajan',
        primaryStates: ['Maharashtra', 'Madhya Pradesh', 'Karnataka', 'Gujarat', 'Uttar Pradesh'],
        soilType: 'Deep well-drained loam or alluvial silt; taproot reaches 2 meters',
        duration: '140 – 180 days',
        season: 'Kharif',
        economicRole: 'The essential daily Indian Dal; commands year-round steady price realization.',
        keyNutrientOrUse: '22% protein, potassium, biological hardpan fracturing, and bio-char stalks.'
      },
      {
        name: 'Green Gram (Moong)',
        localName: 'Moong Dal',
        botanicalName: 'Vigna radiata',
        primaryStates: ['Rajasthan', 'Madhya Pradesh', 'Maharashtra', 'Karnataka', 'Bihar'],
        soilType: 'Well-drained sandy loam with good organic matter',
        duration: '60 – 68 days',
        season: 'Zaid',
        economicRole: 'Fastest 60-day cash turnaround; fits perfectly as summer catch crop.',
        keyNutrientOrUse: '24% protein, hypoallergenic, high sprouting Vitamin C, and green manure residue.'
      },
      {
        name: 'Black Gram (Urad)',
        localName: 'Urad Dal',
        botanicalName: 'Vigna mungo',
        primaryStates: ['Madhya Pradesh', 'Andhra Pradesh', 'Uttar Pradesh', 'Tamil Nadu'],
        soilType: 'Heavy black soils or alluvial loams with good water capacity',
        duration: '70 – 85 days',
        season: 'Kharif',
        economicRole: 'Primary ingredient for fermentation batters (Idli/Dosa) and rich dals (Dal Makhani).',
        keyNutrientOrUse: '25% protein, high phosphoric acid, and gut-healthy mucilage.'
      },
      {
        name: 'Lentils (Masoor)',
        localName: 'Masoor Dal',
        botanicalName: 'Lens culinaris',
        primaryStates: ['Madhya Pradesh', 'Uttar Pradesh', 'West Bengal', 'Bihar'],
        soilType: 'Alluvial soils to light loams; can tolerate mild alkaline soils',
        duration: '110 – 130 days',
        season: 'Rabi',
        economicRole: 'Cool-season staple; major import-substitution pulse.',
        keyNutrientOrUse: '25% protein, rapid cooking time, prebiotic oligosaccharides, and iron.'
      }
    ]
  },
  {
    id: 'vegetable-crops',
    categoryNumber: 6,
    name: 'Vegetable Crops',
    tagline: 'Horticultural crops supplying essential vitamins, minerals & daily nutrition',
    definition: 'Fast-growing herbaceous plants grown for edible succulent leaves, roots, tubers, stems, flowers, or savory fruits.',
    colorTheme: 'rose',
    crops: [
      {
        name: 'Tomato',
        localName: 'Tamatar',
        botanicalName: 'Solanum lycopersicum',
        primaryStates: ['Andhra Pradesh', 'Madhya Pradesh', 'Karnataka', 'Gujarat', 'Odisha'],
        soilType: 'Rich, well-drained sandy loam with pH 6.0 – 7.0',
        duration: '90 – 120 days',
        season: 'Rabi',
        economicRole: 'Critical TOP (Tomato-Onion-Potato) kitchen staple; massive food processing demand.',
        keyNutrientOrUse: 'Potent lycopene antioxidant, Vitamin C, potassium, and fresh puree.'
      },
      {
        name: 'Potato',
        localName: 'Aloo',
        botanicalName: 'Solanum tuberosum',
        primaryStates: ['Uttar Pradesh', 'West Bengal', 'Bihar', 'Gujarat', 'Punjab'],
        soilType: 'Loose, friable sandy loam rich in organic matter (enables tuber expansion)',
        duration: '80 – 100 days',
        season: 'Rabi',
        economicRole: 'World’s number one non-grain food commodity; fuels massive cold storage chains.',
        keyNutrientOrUse: 'Easily digestible carbohydrates, Vitamin B6, potassium, and resistant starch.'
      },
      {
        name: 'Onion',
        localName: 'Piyaz / Kanda',
        botanicalName: 'Allium cepa',
        primaryStates: ['Maharashtra (Nashik belt)', 'Madhya Pradesh', 'Karnataka', 'Gujarat'],
        soilType: 'Deep, crumbly silt loam, pH 6.0 – 6.8',
        duration: '120 – 140 days',
        season: 'Rabi',
        economicRole: 'Essential Indian culinary base; strategic price-sensitive export commodity.',
        keyNutrientOrUse: 'Quercetin antioxidant, organosulfur compounds, and natural antimicrobial benefits.'
      },
      {
        name: 'Brinjal (Eggplant)',
        localName: 'Baingan',
        botanicalName: 'Solanum melongena',
        primaryStates: ['West Bengal', 'Odisha', 'Gujarat', 'Madhya Pradesh', 'Bihar'],
        soilType: 'Deep, fertile silt loam or clay loam with high organic carbon',
        duration: '110 – 140 days',
        season: 'Kharif',
        economicRole: 'Year-round high yielding vegetable with continuous multi-picking revenue.',
        keyNutrientOrUse: 'Nasunin anthocyanin (brain cellular protection), dietary fiber, and low calories.'
      },
      {
        name: 'Cabbage & Cauliflower',
        localName: 'Patta Gobhi / Phool Gobhi',
        botanicalName: 'Brassica oleracea',
        primaryStates: ['West Bengal', 'Bihar', 'Madhya Pradesh', 'Punjab', 'Odisha'],
        soilType: 'Heavy loams with cool moisture retention',
        duration: '75 – 95 days',
        season: 'Rabi',
        economicRole: 'Winter commercial horticulture staple with fast local market turnover.',
        keyNutrientOrUse: 'Sulforaphane, indole-3-carbinol, Vitamin K, and high dietary roughage.'
      },
      {
        name: 'Carrot',
        localName: 'Gajar',
        botanicalName: 'Daucus carota',
        primaryStates: ['Haryana', 'Punjab', 'Uttar Pradesh', 'Tamil Nadu (Ooty)'],
        soilType: 'Deep, stone-free loose sandy loam (allows straight taproot growth)',
        duration: '85 – 105 days',
        season: 'Rabi',
        economicRole: 'Major winter root vegetable for fresh markets, processing, and traditional sweets (Halwa).',
        keyNutrientOrUse: 'Beta-carotene (precursor to Vitamin A), lutein, and ocular protection.'
      }
    ]
  },
  {
    id: 'fruit-crops',
    categoryNumber: 7,
    name: 'Fruit Crops',
    tagline: 'Perennial orchard trees providing fresh succulent fruits & export earnings',
    definition: 'Woody perennial trees and vines cultivated in specialized orchards for delicious, nutrient-dense fruits and fruit processing industries.',
    colorTheme: 'orange',
    crops: [
      {
        name: 'Mango (King of Fruits)',
        localName: 'Aam (Alphonso, Dasheri, Kesar)',
        botanicalName: 'Mangifera indica',
        primaryStates: ['Uttar Pradesh', 'Andhra Pradesh', 'Karnataka', 'Bihar', 'Maharashtra'],
        soilType: 'Deep, well-drained alluvial loam or laterite soil with deep water table',
        duration: 'Perennial (Bearing at 4-5 years)',
        season: 'Perennial / Annual',
        economicRole: 'National fruit of India; premier global fresh fruit export earner (GI-tagged varieties).',
        keyNutrientOrUse: 'Mangiferin antioxidant, Vitamin A, Vitamin C, and natural fruit enzymes.'
      },
      {
        name: 'Banana',
        localName: 'Kela (Grand Naine, Robusta)',
        botanicalName: 'Musa acuminata',
        primaryStates: ['Andhra Pradesh', 'Maharashtra', 'Gujarat', 'Tamil Nadu', 'Karnataka'],
        soilType: 'Rich, moisture-retentive clay loam with high organic humus, pH 6.5 – 7.5',
        duration: '11 – 12 months',
        season: 'Perennial / Annual',
        economicRole: 'India is the world’s #1 banana producer; year-round steady farmer income stream.',
        keyNutrientOrUse: 'Potassium (400mg/100g), Vitamin B6, instant natural glycogen replenishment, and pectin.'
      },
      {
        name: 'Grapes',
        localName: 'Angoor (Thomson Seedless)',
        botanicalName: 'Vitis vinifera',
        primaryStates: ['Maharashtra (Nashik)', 'Karnataka', 'Tamil Nadu', 'Andhra Pradesh'],
        soilType: 'Well-drained gravelly loam to medium black soil, pH 6.5 – 7.5',
        duration: 'Perennial (Pruned twice yearly)',
        season: 'Rabi',
        economicRole: 'High-tech export commodity to European and Middle Eastern fresh markets + wine industry.',
        keyNutrientOrUse: 'Resveratrol, proanthocyanidins, polyphenols, and heart protection.'
      },
      {
        name: 'Orange & Sweet Lime',
        localName: 'Santra / Mosambi',
        botanicalName: 'Citrus reticulata / C. limetta',
        primaryStates: ['Maharashtra (Nagpur)', 'Madhya Pradesh', 'Punjab', 'Rajasthan'],
        soilType: 'Well-drained light loams without hardpan layer',
        duration: 'Perennial (8-9 months fruit cycle)',
        season: 'Rabi',
        economicRole: 'Famous Nagpur orange belt drives fresh juice market and cold storage trade.',
        keyNutrientOrUse: 'High Vitamin C, hesperidin bioflavonoids, and immune stimulation.'
      },
      {
        name: 'Papaya',
        localName: 'Papita (Red Lady 786)',
        botanicalName: 'Carica papaya',
        primaryStates: ['Gujarat', 'Andhra Pradesh', 'Madhya Pradesh', 'Karnataka'],
        soilType: 'Rich sandy loam with rapid drainage (roots rot in standing water)',
        duration: '9 – 10 months to first harvest',
        season: 'Perennial / Annual',
        economicRole: 'Fast-fruiting horticultural crop delivering rapid cash flow within 10 months.',
        keyNutrientOrUse: 'Papain digestive enzyme, beta-carotene, Vitamin C, and gut motility.'
      },
      {
        name: 'Guava',
        localName: 'Amrood (Allahabad Safeda)',
        botanicalName: 'Psidium guajava',
        primaryStates: ['Uttar Pradesh', 'Madhya Pradesh', 'Bihar', 'Maharashtra'],
        soilType: 'Hardy; adapts from alluvial soils to marginal riverbeds',
        duration: 'Perennial tree',
        season: 'Rabi',
        economicRole: 'Extremely hardy, high yielding fruit with low pest maintenance cost.',
        keyNutrientOrUse: 'Contains 4x more Vitamin C than oranges (228mg/100g) + high dietary fiber.'
      }
    ]
  },
  {
    id: 'plantation-crops',
    categoryNumber: 8,
    name: 'Plantation Crops',
    tagline: 'High-capital perennial estate crops processed on-site for international trade',
    definition: 'Crops cultivated on extensive contiguous estates, requiring specialized capital investment, organized labor, and continuous factory processing.',
    colorTheme: 'teal',
    crops: [
      {
        name: 'Tea',
        localName: 'Chai',
        botanicalName: 'Camellia sinensis',
        primaryStates: ['Assam (Brahmaputra Valley)', 'West Bengal (Darjeeling)', 'Tamil Nadu (Nilgiris)', 'Kerala'],
        soilType: 'Well-drained, acidic forest humus soils on rolling slopes, pH 4.5 – 5.5',
        duration: 'Perennial (Productive for 50+ years)',
        season: 'Perennial / Annual',
        economicRole: 'World-renowned Darjeeling & Assam brands; anchors organized employment for 1.2M workers.',
        keyNutrientOrUse: 'EGCG catechins, theanine, natural alertness, and global beverage.'
      },
      {
        name: 'Coffee (Arabica & Robusta)',
        localName: 'Coffee / Kaapi',
        botanicalName: 'Coffea arabica / C. canephora',
        primaryStates: ['Karnataka (Chikkamagaluru, Kodagu)', 'Kerala (Wayanad)', 'Tamil Nadu'],
        soilType: 'Deep, rich, acidic humus forest loams shaded under multi-tier jungle canopy',
        duration: 'Perennial (Harvest Nov–Jan)',
        season: 'Rabi',
        economicRole: '70% exported as specialty shade-grown Indian coffee to Italy, Germany, and Russia.',
        keyNutrientOrUse: 'Caffeine, chlorogenic acid antioxidants, and gourmet roast beverage.'
      },
      {
        name: 'Natural Rubber',
        localName: 'Rubber',
        botanicalName: 'Hevea brasiliensis',
        primaryStates: ['Kerala', 'Tripura', 'Tamil Nadu (Kanyakumari)', 'Assam'],
        soilType: 'Deep laterite and red loamy soils with high organic matter',
        duration: 'Perennial (Tapped from Year 7 onwards)',
        season: 'Perennial / Annual',
        economicRole: 'Critical raw material for domestic tire, automotive, and industrial manufacturing.',
        keyNutrientOrUse: 'Natural polyisoprene latex for elastic automotive tires and medical gloves.'
      },
      {
        name: 'Coconut',
        localName: 'Nariyal (Kalpavriksha)',
        botanicalName: 'Cocos nucifera',
        primaryStates: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Andhra Pradesh'],
        soilType: 'Coastal sandy loams, alluvial delta soils with good subsoil water table',
        duration: 'Perennial (Bears for 60–80 years)',
        season: 'Perennial / Annual',
        economicRole: 'Every part of the palm is monetized: copra oil, tender water, coir fiber, and shell bio-char.',
        keyNutrientOrUse: 'Medium-chain triglycerides (MCT / Lauric acid), electrolyte tender water, and fiber coir.'
      },
      {
        name: 'Arecanut (Betel Nut)',
        localName: 'Supari',
        botanicalName: 'Areca catechu',
        primaryStates: ['Karnataka (Malnad belt)', 'Kerala', 'Assam', 'Meghalaya'],
        soilType: 'Moisture-retentive deep clay loams and laterite soils',
        duration: 'Perennial (Bears from Year 6 onwards)',
        season: 'Perennial / Annual',
        economicRole: 'High-value commercial cash crop cultivated in multi-tier agroforestry with pepper and cardamom.',
        keyNutrientOrUse: 'Traditional cultural masticatory, tannins, and arecoline alkaloids.'
      }
    ]
  },
  {
    id: 'medicinal-aromatic-crops',
    categoryNumber: 9,
    name: 'Medicinal & Aromatic Crops',
    tagline: 'Bioactive therapeutic botanicals & essential oil crops',
    definition: 'Crops grown for their active pharmaceutical phytochemicals, therapeutic roots, essential oils, and aromatic fragrances.',
    colorTheme: 'emerald',
    crops: [
      {
        name: 'Aloe Vera',
        localName: 'Ghritkumari',
        botanicalName: 'Aloe barbadensis miller',
        primaryStates: ['Rajasthan', 'Gujarat', 'Maharashtra', 'Andhra Pradesh'],
        soilType: 'Dry, sandy loam with low fertility; highly sensitive to waterlogging',
        duration: 'Perennial (Succulent leaves harvested from 8 months)',
        season: 'Perennial / Annual',
        economicRole: 'Drives global multi-billion skincare, cosmetic, and functional health beverage supply chains.',
        keyNutrientOrUse: 'Acemannan polysaccharides, soothing gel, wound healing, and digestive enzymes.'
      },
      {
        name: 'Tulsi (Holy Basil)',
        localName: 'Tulsi',
        botanicalName: 'Ocimum sanctum',
        primaryStates: ['Uttar Pradesh', 'Madhya Pradesh', 'Rajasthan', 'Gujarat'],
        soilType: 'Well-drained rich loam with good sunshine, pH 6.5 – 7.5',
        duration: 'Annual / Biennial (Leaves harvested every 75 days)',
        season: 'Kharif',
        economicRole: 'Core ingredient in Ayurvedic wellness teas, immunity supplements, and essential oil extracts.',
        keyNutrientOrUse: 'Eugenol, rosmarinic acid, adaptogenic stress reduction, and respiratory support.'
      },
      {
        name: 'Ashwagandha (Indian Ginseng)',
        localName: 'Ashwagandha',
        botanicalName: 'Withania somnifera',
        primaryStates: ['Madhya Pradesh (Neemuch/Mandsaur)', 'Rajasthan', 'Gujarat'],
        soilType: 'Light sandy or red loam with pH 7.5 – 8.0, requires dry weather at maturity',
        duration: '150 – 170 days',
        season: 'Rabi',
        economicRole: 'Top exported Ayurvedic botanical globally; prized for its adaptogenic roots.',
        keyNutrientOrUse: 'Withanolides, withaferin-A, natural cortisol reduction, and deep cellular rejuvenation.'
      },
      {
        name: 'Mentha (Japanese Mint)',
        localName: 'Pudina',
        botanicalName: 'Mentha arvensis',
        primaryStates: ['Uttar Pradesh (Barabanki/Sambhal)', 'Punjab', 'Bihar'],
        soilType: 'Rich, moist alluvial loam with high water holding capacity',
        duration: '90 – 110 days',
        season: 'Zaid',
        economicRole: 'India produces over 80% of the world’s natural menthol essential oil.',
        keyNutrientOrUse: '70%+ natural menthol crystals, cooling confectionery, and pharmaceuticals.'
      },
      {
        name: 'Lemongrass',
        localName: 'Nimbu Ghas',
        botanicalName: 'Cymbopogon citratus',
        primaryStates: ['Kerala', 'Karnataka', 'Uttar Pradesh', 'Assam'],
        soilType: 'Porous, well-drained sandy loam or marginal wastelands',
        duration: 'Perennial (Harvested 4 times a year for 5 years)',
        season: 'Perennial / Annual',
        economicRole: 'Steam-distilled on farm for high-value citral essential oil used in perfumes and soaps.',
        keyNutrientOrUse: '75–85% Citral content, antimicrobial, mosquito repellent, and aromatic teas.'
      }
    ]
  },
  {
    id: 'fodder-crops',
    categoryNumber: 10,
    name: 'Fodder Crops',
    tagline: 'High-biomass forage crops feeding India’s dairy cattle & livestock',
    definition: 'Crops grown specifically to be grazed by or harvested as green feed, hay, or silage for dairy cows, buffaloes, and small ruminants.',
    colorTheme: 'lime',
    crops: [
      {
        name: 'Super Napier Grass (Hybrid Napier)',
        localName: 'Napier Ghas',
        botanicalName: 'Pennisetum purpureum x P. glaucum',
        primaryStates: ['Gujarat (Amul milk shed)', 'Maharashtra', 'Karnataka', 'Punjab', 'Tamil Nadu'],
        soilType: 'Fertile loams with good drainage and bio-slurry fertigation',
        duration: 'Perennial (Cut every 45 days, yields 150–200 tonnes green fodder/year)',
        season: 'Perennial / Annual',
        economicRole: 'Foundational forage driving India’s position as the world’s #1 milk producer.',
        keyNutrientOrUse: '10–14% crude protein when cut at 3.5 feet; high moisture and rumen fermentation volume.'
      },
      {
        name: 'Lucerne (Alfalfa - Queen of Forages)',
        localName: 'Rijka',
        botanicalName: 'Medicago sativa',
        primaryStates: ['Gujarat', 'Rajasthan', 'Maharashtra', 'Punjab'],
        soilType: 'Deep, well-drained fertile loam with neutral to lime-rich pH',
        duration: 'Perennial legume (Multiple cuts throughout winter and spring)',
        season: 'Rabi',
        economicRole: 'The ultimate protein forage for high-producing dairy cows, dramatically boosting milk fat and SNF.',
        keyNutrientOrUse: '20–22% crude protein, high beta-carotene (creamy milk tint), and calcium.'
      },
      {
        name: 'Berseem (Egyptian Clover - King of Forages)',
        localName: 'Barseem',
        botanicalName: 'Trifolium alexandrinum',
        primaryStates: ['Punjab', 'Haryana', 'Uttar Pradesh', 'Rajasthan'],
        soilType: 'Medium to heavy clay loam with good moisture retention',
        duration: 'Winter multi-cut forage (5 to 6 cuttings from Nov to April)',
        season: 'Rabi',
        economicRole: 'The primary winter green forage for Punjab & Haryana dairy herds.',
        keyNutrientOrUse: '18–20% digestible crude protein, succulent, highly palatable, and milk-boosting.'
      },
      {
        name: 'Fodder Maize',
        localName: 'Chara Makka',
        botanicalName: 'Zea mays',
        primaryStates: ['All dairy states across India'],
        soilType: 'Fertile loam with high organic compost',
        duration: '60 – 75 days (harvested at milk-dough stage for silage)',
        season: 'Kharif',
        economicRole: 'The world standard for fermented bunker silage, ensuring year-round green fodder security.',
        keyNutrientOrUse: 'High starch, digestible fiber, and energy-dense rumen fuel.'
      },
      {
        name: 'Fodder Sorghum (Chari)',
        localName: 'Jowar Chari',
        botanicalName: 'Sorghum bicolor',
        primaryStates: ['Rajasthan', 'Maharashtra', 'Gujarat', 'Haryana', 'Madhya Pradesh'],
        soilType: 'Tolerates drought and light sandy soils',
        duration: '65 – 80 days',
        season: 'Kharif',
        economicRole: 'Drought-proof summer forage producing high dry-matter tonnage for livestock.',
        keyNutrientOrUse: 'High dry-matter roughage, sweet juicy stalks, and cud-chewing stimulus.'
      }
    ]
  }
];
