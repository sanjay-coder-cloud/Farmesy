export interface CropDetail {
  id: string;
  name: string;
  botanicalName: string;
  category: 'grain' | 'wheat' | 'millet' | 'pulse' | 'oilseed' | 'commercial';
  summary: string;
  idealSoil: string;
  temperature: string;
  rainfall: string;
  durationDays: string;
  sowingSeason: string;
  naturalMethod: {
    seedTreatment: string;
    landPrep: string;
    nutrition: string;
    pestControl: string;
    irrigation: string;
    expectedYield: string;
  };
  chemicalMethod: {
    seedTreatment: string;
    landPrep: string;
    nutrition: string;
    pestControl: string;
    irrigation: string;
    expectedYield: string;
  };
  keyBenefits: {
    title: string;
    desc: string;
  }[];
  nutritionalValue: {
    calories: string;
    protein: string;
    carbs: string;
    fiber: string;
    minerals: string;
    glycemicIndex: string;
  };
  stages: {
    stageNumber: number;
    name: string;
    dayRange: string;
    criticalCare: string;
  }[];
}

export const CROPS_DATA: CropDetail[] = [
  {
    id: 'wheat',
    name: 'Wheat (Golden Grain)',
    botanicalName: 'Triticum aestivum (Poaceae)',
    category: 'wheat',
    summary: 'The primary staple cereal feeding over 35% of humanity. Demands cool, crisp winters for vigorous tillering and bright, dry warmth during golden grain filling.',
    idealSoil: 'Deep, well-drained clay loam to rich alluvial silt, pH 6.0 – 7.5 (avoids waterlogging)',
    temperature: '12°C – 25°C (14°C–18°C optimum for tillering; max 28°C during grain fill)',
    rainfall: '450 mm – 650 mm water footprint across 5 to 6 scheduled canal/sprinkler irrigations',
    durationDays: '120 – 140 days',
    sowingSeason: 'Rabi season (November 1 – November 25)',
    naturalMethod: {
      seedTreatment: 'Beejamrutha liquid coating + Trichoderma viride (10g/kg) with cow dung ash to inoculate roots against loose smut and flag smut.',
      landPrep: 'Summer sub-soiling followed by 8–10 tonnes/acre aged vermicompost or decomposed FYM enriched with neem seed cake.',
      nutrition: 'Jeevamrutha (200L/acre) applied with canal water every 21 days + Ghana-jeevamrutha pellets (250kg/acre) broadcast at crown root stage.',
      pestControl: 'Sour fermented buttermilk spray (5%) against fungal yellow rust; 5% Neem Seed Kernel Extract (NSKE) for aphid suppression.',
      irrigation: 'Critical at Crown Root Initiation (CRI at Day 21) and Flowering (Day 75); micro-sprinklers preserve crumb structure and prevent crusting.',
      expectedYield: '18 – 23 quintals/acre of premium heavy-test-weight grains with 13%+ pure plant protein and zero chemical residue.'
    },
    chemicalMethod: {
      seedTreatment: 'Carboxin 37.5% + Thiram 37.5% @ 2.5g/kg seed + Chlorpyrifos 20 EC for subterranean termites.',
      landPrep: 'Disc harrow passes with 55kg DAP + 25kg Muriate of Potash (MOP) placed as deep basal fertilizer band.',
      nutrition: '120kg Urea applied in 3 splits (Basal, 1st irrigation at CRI, and booting stage) + 10kg Zinc Sulfate (33% Zn).',
      pestControl: 'Propiconazole 25 EC (Tilt) spray for stripe/yellow rust; Imidacloprid 17.8 SL for aphid colonization.',
      irrigation: 'Flood irrigation at 6 critical stages: CRI, Tillering, Late Jointing, Flowering, Milk stage, and Dough stage.',
      expectedYield: '22 – 28 quintals/acre (High bulk volume; requires continuous chemical soil buffering to avoid acidification).'
    },
    keyBenefits: [
      { title: 'Sustained Complex Carbohydrates', desc: 'Slow-digesting amylose starches provide steady cellular glucose without triggering sharp postprandial insulin spikes.' },
      { title: 'Rich in Selenium & Manganese', desc: 'Crucial enzymatic cofactors that shield thyroid tissue, fuel antioxidant superoxide dismutase, and support bone mineral density.' },
      { title: 'High Dietary Fiber & Arabinoxylans', desc: 'Prebiotic dietary fiber nourishes bifidobacteria in the colon and significantly lowers systemic serum LDL cholesterol.' },
      { title: 'Superior Storage & Baking Elasticity', desc: 'Naturally high glutenin-to-gliadin protein ratio gives dough structural elasticity, storing safely up to 3 years under dry aeration.' }
    ],
    nutritionalValue: {
      calories: '340 kcal/100g',
      protein: '12.6 g',
      carbs: '71.2 g',
      fiber: '10.7 g',
      minerals: 'Iron 3.9mg, Zinc 2.8mg, Magnesium 126mg, Selenium 70.7µg',
      glycemicIndex: '54 (Whole Grain)'
    },
    stages: [
      { stageNumber: 1, name: 'Crown Root Initiation (CRI)', dayRange: 'Day 20 – 25', criticalCare: 'Most crucial first irrigation. Moisture stress at this 5-day window permanently cuts tillering capacity by 40%.' },
      { stageNumber: 2, name: 'Active Tillering Phase', dayRange: 'Day 40 – 45', criticalCare: 'Top dressing with bio-digested slurry or second dose of nitrogen. Weeding and inter-row aeration must be completed.' },
      { stageNumber: 3, name: 'Jointing & Stem Elongation', dayRange: 'Day 60 – 65', criticalCare: 'Internodes elongate rapidly. Maintain consistent moisture to develop elongated, heavy ear-heads with maximum spikelets.' },
      { stageNumber: 4, name: 'Flowering / Anthesis', dayRange: 'Day 80 – 85', criticalCare: 'Pollination stage. Protect from desiccating dry hot winds with light micro-sprinkling; avoid chemical spray drift.' },
      { stageNumber: 5, name: 'Milking & Dough Stage', dayRange: 'Day 100 – 110', criticalCare: 'Starch accumulates in kernels. Terminal heat mitigation using foliar potassium schoenite or bio-silica mist.' },
      { stageNumber: 6, name: 'Maturity & Golden Harvest', dayRange: 'Day 125 – 135', criticalCare: 'Moisture drops to 12-14%. Harvest when grain snaps crisply between molars to prevent field cracking.' }
    ]
  },
  {
    id: 'chickpea-gram',
    name: 'Chickpea / Bengal Gram (King of Pulses)',
    botanicalName: 'Cicer arietinum (Fabaceae)',
    category: 'pulse',
    summary: 'The world’s premier protein legume. Naturally fixes 30–50 kg of atmospheric nitrogen per acre through root nodules, requiring minimal external nitrogen.',
    idealSoil: 'Well-aerated deep black cotton soil (Vertisols) or sandy loam, pH 6.2 – 7.8 (cannot tolerate waterlogging)',
    temperature: '15°C – 28°C (Cool nights and warm sunny dry days during podding)',
    rainfall: '250 mm – 400 mm (Extremely drought-resilient; thrives on residual soil moisture)',
    durationDays: '95 – 115 days',
    sowingSeason: 'Rabi season (Mid-October to early November)',
    naturalMethod: {
      seedTreatment: 'Rhizobium leguminosarum culture (250g/10kg seed) + Trichoderma viride to stimulate nitrogen nodulation and prevent Fusarium wilt.',
      landPrep: 'Deep plowing with 4 tonnes vermicompost + 100kg neem cake to control root grubs and collar rot.',
      nutrition: 'Zero synthetic urea; bio-digested slurry with Phosphorus Solubilizing Bacteria (PSB) + 2% cow urine foliar spray at flowering.',
      pestControl: 'Bird perches (T-shaped, 15/acre) to attract insectivorous birds; Helicoverpa armigera pheromone traps (5/acre); NSKE 5% at 50% flowering.',
      irrigation: 'Requires only 1 to 2 light irrigations: at pre-flowering branching (Day 40) and pod filling (Day 75). Flood irrigation causes wilt.',
      expectedYield: '8 – 12 quintals/acre of high-protein desi or kabuli grain; leaves behind 35kg/acre residual nitrogen in soil for next crop.'
    },
    chemicalMethod: {
      seedTreatment: 'Carbendazim 12% + Mancozeb 63% WP (Saaf) @ 2g/kg seed to suppress wilt and root rot pathogens.',
      landPrep: 'Basal placement of 20kg Nitrogen + 40kg P2O5 (via 85kg DAP) + 20kg Sulfur per acre (Sulfur is critical for pulse protein synthesis).',
      nutrition: 'Foliar spray of 2% Urea or DAP solution at pre-flowering and pod development to enhance pod set and test weight.',
      pestControl: 'Emamectin Benzoate 5% SG @ 80g/acre or Chlorantraniliprole 18.5 SC for pod borer (Helicoverpa) suppression.',
      irrigation: 'Light furrow irrigation at branching and early pod fill; stop watering before flowering completes to avoid flower drop.',
      expectedYield: '10 – 14 quintals/acre of uniform grain; high chemical pesticide expenses if pod borer pressure surges.'
    },
    keyBenefits: [
      { title: 'Plant-Based Protein Powerhouse', desc: 'Contains 20–22% bio-available protein with balanced essential amino acids, serving as the cornerstone of vegetarian diets.' },
      { title: 'Natural Soil Nitrogen Factory', desc: 'Symbiotic Rhizobium root nodules fix up to 45 kg of pure atmospheric nitrogen per acre, naturally enriching the topsoil.' },
      { title: 'Remarkably Low Glycemic Index', desc: 'GI of only 28; high resistant starch and amylose prevent blood glucose surges, making it the ideal pulse for metabolic health.' },
      { title: 'High Folate, Iron & Molybdenum', desc: 'Provides over 70% of daily folate needs per 100g along with non-heme iron to support hemoglobin synthesis and cellular oxygenation.' }
    ],
    nutritionalValue: {
      calories: '364 kcal/100g',
      protein: '20.5 g',
      carbs: '60.6 g',
      fiber: '17.4 g',
      minerals: 'Iron 6.2mg, Zinc 3.4mg, Magnesium 115mg, Folate 557µg',
      glycemicIndex: '28 (Very Low)'
    },
    stages: [
      { stageNumber: 1, name: 'Sowing & Emergence', dayRange: 'Day 1 – 8', criticalCare: 'Drill seed at 7-8cm depth into moist soil zone. Ensure seedbed is loose and well-drained.' },
      { stageNumber: 2, name: 'Vegetative Branching & N-Nodulation', dayRange: 'Day 20 – 35', criticalCare: 'Root nodules begin pink active nitrogen fixation. Nipper/terminal shoot pinching at 30 days promotes multi-lateral branching.' },
      { stageNumber: 3, name: 'Flower Bud Initiation', dayRange: 'Day 45 – 55', criticalCare: 'Install bird perches and pheromone traps. Never overwater; waterlogging causes massive flower drop.' },
      { stageNumber: 4, name: 'Active Flowering & Pollination', dayRange: 'Day 60 – 70', criticalCare: 'Foliar spray of 2% pulse miracle / micronutrient mixture (Boron 0.2% + Zinc) to set maximum pods.' },
      { stageNumber: 5, name: 'Pod Development & Grain Filling', dayRange: 'Day 75 – 90', criticalCare: 'Scout daily for green pod borer entry holes. Apply bio-pesticide (Bt or HaNPV) or botanical spray at sunset.' },
      { stageNumber: 6, name: 'Maturity & Golden Browning', dayRange: 'Day 100 – 115', criticalCare: 'Plants shed leaves and pods turn straw-yellow. Harvest in morning dew to prevent pod shattering and seed loss.' }
    ]
  },
  {
    id: 'paddy-rice',
    name: 'Paddy / Basmati Rice (Wetland Cereal)',
    botanicalName: 'Oryza sativa (Poaceae)',
    category: 'grain',
    summary: 'The primary dietary staple feeding over 50% of the world population. Cultivated in specialized wetland clay basins with managed water films or modern SRI aerobic beds.',
    idealSoil: 'Heavy clay loam, silt clay with impermeable subsoil layer (hardpan), pH 5.5 – 6.8',
    temperature: '22°C – 32°C (Warm humid days with bright sunshine during reproductive phase)',
    rainfall: '1000 mm – 1500 mm or reliable canal irrigation system with standing water management',
    durationDays: '115 – 150 days (variety dependent)',
    sowingSeason: 'Kharif season (June – July) & Rabi/Navrai (November)',
    naturalMethod: {
      seedTreatment: 'Salt-water flotation test to discard chaff + soaking in 3% Panchagavya for 12 hours prior to nursery broadcasting.',
      landPrep: 'Green manuring with Sesbania aculeata (Dhaincha) ploughed into soil 45 days prior to puddled transplanting.',
      nutrition: 'Azolla micro-fern cultured in standing water (fixes 30kg N/acre) + Jeevamrutha (200L/acre) delivered via inlet channels.',
      pestControl: 'Agniastra herbal decoction (garlic, green chili, neem) against leaf folders and yellow stem borers; pheromone traps (5/acre).',
      irrigation: 'System of Rice Intensification (SRI) with Alternate Wetting and Drying (AWD) saves 40% water while boosting root aeration.',
      expectedYield: '20 – 26 quintals/acre of aromatic, pesticide-free rice fetching 30% higher wholesale pricing.'
    },
    chemicalMethod: {
      seedTreatment: 'Carbendazim 50 WP @ 2g/kg seed + Streptocycline (1g/10kg) to shield against bacterial leaf blight.',
      landPrep: 'Mechanical puddling with power tillers; basal application of 40kg DAP + 25kg Muriate of Potash + 10kg Zinc Sulfate.',
      nutrition: '100kg Urea split in 3 equal top-dressings at transplanting, active tillering, and panicle initiation stages.',
      pestControl: 'Chlorantraniliprole 0.4% GR (Ferterra) for stem borer; Tricyclazole 75 WP for rice blast prevention.',
      irrigation: 'Continuous standing water depth of 5cm maintained from transplanting through milky stage, draining 10 days before harvest.',
      expectedYield: '25 – 32 quintals/acre (High bulk volume; produces nitrate runoff into regional water tables).'
    },
    keyBenefits: [
      { title: 'Clean, Hypoallergenic Nutrition', desc: 'Naturally 100% gluten-free and easy on sensitive digestive tracts, making it the universal gentle carbohydrate staple.' },
      { title: 'Rich in B-Complex & Micronutrients', desc: 'Traditional brown and red rice varieties retain thiamine, niacin, riboflavin, and iron in the protective aleurone layer.' },
      { title: 'High Caloric & Work Efficiency', desc: 'Provides fast-digesting, clean glycogen replenishment for agricultural workers and athletes without gastrointestinal distress.' },
      { title: 'Complete Circular Biomass', desc: 'Paddy straw provides livestock bedding, bio-gas feedstock, and organic mulching material that shields soil moisture.' }
    ],
    nutritionalValue: {
      calories: '360 kcal/100g',
      protein: '7.1 g',
      carbs: '79.0 g',
      fiber: '2.8 g (Unpolished Brown)',
      minerals: 'Phosphorus 115mg, Potassium 115mg, Iron 1.2mg, Zinc 1.4mg',
      glycemicIndex: '58 (Traditional Parboiled) / 73 (Polished White)'
    },
    stages: [
      { stageNumber: 1, name: 'Nursery & Wet-Bed Sowing', dayRange: 'Day 1 – 20', criticalCare: 'Seedlings nurtured in raised beds or SRI mat nurseries with thin water layer until 2-to-3 leaf stage.' },
      { stageNumber: 2, name: 'Transplanting & Root Establishment', dayRange: 'Day 21 – 30', criticalCare: 'Single young seedling per hill at 25x25cm square spacing. Shallow 2cm water film to promote deep rooting.' },
      { stageNumber: 3, name: 'Active Tillering Phase', dayRange: 'Day 45 – 55', criticalCare: 'Run cono-weeder twice to incorporate weeds as green manure and aerate root rhizosphere with oxygen.' },
      { stageNumber: 4, name: 'Panicle Initiation & Booting', dayRange: 'Day 70 – 80', criticalCare: 'Flag leaf emergence is critical. Apply bio-potash / potassium schoenite; scout for stem borer dead hearts.' },
      { stageNumber: 5, name: 'Flowering & Anthesis', dayRange: 'Day 85 – 95', criticalCare: 'Morning pollination. Maintain steady water table; avoid any pesticide sprays that disrupt pollination.' },
      { stageNumber: 6, name: 'Dough & Golden Harvest', dayRange: 'Day 120 – 135', criticalCare: 'Drain field water 10 days before harvest. Cut when 85% of panicles transition to deep golden grain color.' }
    ]
  },
  {
    id: 'pigeon-pea',
    name: 'Pigeon Pea / Arhar / Toor (Perennial Pulse)',
    botanicalName: 'Cajanus cajan (Fabaceae)',
    category: 'pulse',
    summary: 'The grand tropical pulse. Deep taproots reach 2 meters into the subsoil, breaking up hardpans and recycling deep nutrients while fixing high nitrogen.',
    idealSoil: 'Deep, well-drained loam or alluvial silt, pH 6.0 – 7.5 (intolerant to salinity and waterlogging)',
    temperature: '20°C – 35°C (High heat tolerance; thrives in semi-arid zones)',
    rainfall: '600 mm – 850 mm (Extremely drought hardy after primary taproot establishment)',
    durationDays: '140 – 180 days (Medium-to-long duration)',
    sowingSeason: 'Kharif season (June – July onset of monsoon)',
    naturalMethod: {
      seedTreatment: 'Rhizobium CC-1 culture + Trichoderma viride (10g/kg) with jaggery water slurried onto seed coats.',
      landPrep: 'Ridge and furrow planting; 5 tonnes farmyard compost + 150kg castor cake to buffer soil microbes.',
      nutrition: 'Ghana-jeevamrutha dry pellets (200kg/acre) along planting furrows + foliar spray of 3% Panchagavya at branching.',
      pestControl: 'Intercropped with sorghum/maize as barrier crops; pheromone traps (5/acre); neem oil spray for pod fly and pod borer.',
      irrigation: 'Largely rainfed; requires 1 to 2 supplemental furrow irrigations during severe dry spells at flowering and podding.',
      expectedYield: '7 – 10 quintals/acre of high-protein pulse; provides 2 tonnes of woody biomass stems for bio-char and fencing.'
    },
    chemicalMethod: {
      seedTreatment: 'Thiram + Carbendazim (1:1) @ 2g/kg seed to protect against seed rot and Fusarium wilt.',
      landPrep: 'Basal application of 15kg Nitrogen + 40kg P2O5 (via Single Super Phosphate, which also provides 11% Sulfur).',
      nutrition: 'Foliar spray of 2% Urea or DAP + 0.2% Boron at 50% flowering to boost pod setting efficiency.',
      pestControl: 'Flubendiamide 39.35% SC or Chlorantraniliprole 18.5 SC for pod borer and pod wasp suppression.',
      irrigation: 'Furrow irrigation at critical vegetative branching, flower bud formation, and pod filling stages.',
      expectedYield: '8 – 12 quintals/acre of golden split pulses (Toor Dal).'
    },
    keyBenefits: [
      { title: 'Universal Indian Protein Staple (Toor Dal)', desc: 'Supplies 22% concentrated plant protein with high levels of lysine, threonine, and methionine when eaten with rice.' },
      { title: 'Deep Subsoil Biological Ploughing', desc: 'Taproot penetrates up to 2 meters, fracturing impermeable compacted plow pans and bringing subsoil minerals to surface.' },
      { title: 'Rich in Dietary Potassium & Magnesium', desc: 'Supports cardiovascular vasodilation and healthy blood pressure levels with zero dietary cholesterol.' },
      { title: 'Tremendous Carbon Biomass Yield', desc: 'Produces massive leaf fall that naturally mulches the soil and woody stalks used for clean rural cooking bio-fuel.' }
    ],
    nutritionalValue: {
      calories: '343 kcal/100g',
      protein: '21.7 g',
      carbs: '62.8 g',
      fiber: '15.5 g',
      minerals: 'Potassium 1392mg, Phosphorus 304mg, Magnesium 183mg, Iron 5.2mg',
      glycemicIndex: '32 (Low)'
    },
    stages: [
      { stageNumber: 1, name: 'Sowing & Germination', dayRange: 'Day 1 – 10', criticalCare: 'Sow on ridges at 90x20cm wide spacing to ensure drainage during heavy monsoon rains.' },
      { stageNumber: 2, name: 'Early Vegetative Branching', dayRange: 'Day 25 – 45', criticalCare: 'Slow initial growth; keep field weed-free with manual hoeing or inter-row cultivation.' },
      { stageNumber: 3, name: 'Grand Canopy Expansion', dayRange: 'Day 60 – 90', criticalCare: 'Vigorous bushy branching; taproots penetrate subsoil; nodules actively fix nitrogen.' },
      { stageNumber: 4, name: 'Flower Bud Initiation', dayRange: 'Day 100 – 115', criticalCare: 'First floral flushes appear. Spray bio-extracts or boron to prevent premature flower drop.' },
      { stageNumber: 5, name: 'Pod Development & Grain Filling', dayRange: 'Day 120 – 145', criticalCare: 'Scout for Maruca pod borer webs; apply targeted biological or botanical sprays.' },
      { stageNumber: 6, name: 'Maturity & Harvest', dayRange: 'Day 155 – 175', criticalCare: 'Pods turn dark brown and dry. Harvest whole plants with sickle, sun-dry, and thresh on threshing floor.' }
    ]
  },
  {
    id: 'green-gram',
    name: 'Green Gram / Moong (Fast-Cycle Pulse)',
    botanicalName: 'Vigna radiata (Fabaceae)',
    category: 'pulse',
    summary: 'The ultra-short duration miracle pulse. Matures in just 60–65 days, making it the ideal catch crop between major wheat, paddy, or sugarcane rotations.',
    idealSoil: 'Well-drained sandy loam to deep alluvial soil, pH 6.5 – 7.5 (sensitive to water stagnation)',
    temperature: '25°C – 35°C (Warm tropical and sub-tropical conditions; frost sensitive)',
    rainfall: '300 mm – 450 mm (Lowest total water consumption of all commercial pulses)',
    durationDays: '60 – 68 days',
    sowingSeason: 'Summer / Zaid (March – April) & Kharif (June – July)',
    naturalMethod: {
      seedTreatment: 'Rhizobium phaseoli culture + Trichoderma viride (10g/kg) with rice kanji binder for rapid nodulation.',
      landPrep: 'Minimum tillage; 3 tonnes vermicompost ploughed into moist soil with fine tilth.',
      nutrition: 'Jeevamrutha (200L/acre) at first irrigation + foliar spray of 2% vermiwash at flowering.',
      pestControl: 'Yellow sticky traps (15/acre) to control whiteflies (the vector of Mungbean Yellow Mosaic Virus - MYMV); neem oil spray.',
      irrigation: 'Requires only 2 to 3 light irrigations; first at 20-25 days, second at pod formation.',
      expectedYield: '5 – 8 quintals/acre of clean green grains in only 60 days, rejuvenating soil nitrogen for the next wheat crop.'
    },
    chemicalMethod: {
      seedTreatment: 'Imidacloprid 600 FS @ 5ml/kg seed + Captan 50 WP @ 2g/kg against sucking pests and collar rot.',
      landPrep: 'Basal application of 10kg Nitrogen + 25kg P2O5 (via 55kg DAP) per acre along seed furrows.',
      nutrition: 'Foliar spray of 1% 19:19:19 soluble fertilizer or 2% DAP at flower initiation.',
      pestControl: 'Diafenthiuron 50% WP for whitefly vector control; Spinosad 45 SC for pod borer suppression.',
      irrigation: 'Light furrow irrigation; avoid standing water at all costs to prevent root asphyxiation.',
      expectedYield: '6 – 9 quintals/acre of uniform shiny green pulses.'
    },
    keyBenefits: [
      { title: 'The World’s Most Digestible Pulse', desc: 'Free of flatulence-causing oligosaccharides; gentle on infants, convalescents, and sensitive stomachs.' },
      { title: 'Ultra-Fast 60-Day Cash Turnaround', desc: 'Quickest crop cycle in agriculture, generating swift farm cash-flow between Rabi wheat and Kharif paddy.' },
      { title: 'Exceptional Sprouting Nutrient Surge', desc: 'When sprouted, Vitamin C multiplies by 300% and antioxidant polyphenol bioavailability doubles.' },
      { title: 'Soil Enrichment Green Manure Bonus', desc: 'After picking mature pods, crop foliage can be plowed directly into the soil as nitrogen-rich green manure.' }
    ],
    nutritionalValue: {
      calories: '347 kcal/100g',
      protein: '24.0 g',
      carbs: '62.6 g',
      fiber: '16.3 g',
      minerals: 'Iron 6.7mg, Potassium 1246mg, Magnesium 189mg, Folate 625µg',
      glycemicIndex: '31 (Very Low)'
    },
    stages: [
      { stageNumber: 1, name: 'Sowing & Germination', dayRange: 'Day 1 – 5', criticalCare: 'Sow at 2.5-3cm depth in moist soil. Fast uniform emergence occurs within 4 days.' },
      { stageNumber: 2, name: 'Early Vegetative & Nodulation', dayRange: 'Day 12 – 20', criticalCare: 'Inspect underside of leaves for whitefly activity; install yellow sticky traps.' },
      { stageNumber: 3, name: 'Flowering Initiation', dayRange: 'Day 28 – 35', criticalCare: 'First purple-yellow flowers emerge. Ensure light moisture; never let soil crack.' },
      { stageNumber: 4, name: 'Peak Pod Setting', dayRange: 'Day 38 – 45', criticalCare: 'Slender green pods form rapidly in clusters. Apply bio-extract or micronutrient spray.' },
      { stageNumber: 5, name: 'Pod Maturation & Blackening', dayRange: 'Day 50 – 58', criticalCare: 'Pods transition from green to blackish-brown. Pods dry quickly under bright sunshine.' },
      { stageNumber: 6, name: 'Harvesting & Threshing', dayRange: 'Day 60 – 68', criticalCare: 'Pick pods in 2 pickings or harvest whole plants when 85% of pods are black and dry.' }
    ]
  },
  {
    id: 'pearl-millet',
    name: 'Pearl Millet / Bajra (Nutri-Cereal)',
    botanicalName: 'Pennisetum glaucum (Poaceae)',
    category: 'millet',
    summary: 'The ultimate climate-resilient super-cereal. Survives 44°C scorching heat and acute drought in harsh sandy terrains with negligible water and zero agro-chemicals.',
    idealSoil: 'Sandy loam, light red soil, or gravelly arid soil, pH 6.0 – 8.2',
    temperature: '25°C – 38°C (Extreme heat and drought tolerance; C4 photosynthetic efficiency)',
    rainfall: '300 mm – 450 mm (Lowest water footprint of all cereal crops)',
    durationDays: '75 – 90 days',
    sowingSeason: 'Kharif season (June – July onset of monsoon)',
    naturalMethod: {
      seedTreatment: 'Cow urine soak (1:10 dilution) for 30 minutes, shade dried and dusted with wood ash against downy mildew.',
      landPrep: 'Minimum tillage; 3 tonnes dry sheep/goat manure mixed into furrows before first soaking rain.',
      nutrition: 'Bio-NPK consortia (Azospirillum + PSB) mixed with farmyard manure; zero chemical fertilizer needed.',
      pestControl: 'Naturally pest-repellent due to high polyphenols; bird perches manage any occasional grasshoppers.',
      irrigation: 'Predominantly rainfed; requires only 1 to 2 life-saving supplemental irrigations if drought exceeds 25 days.',
      expectedYield: '12 – 16 quintals/acre of nutrient-dense grain with 80%+ gross profit margin due to negligible input costs.'
    },
    chemicalMethod: {
      seedTreatment: 'Metalaxyl 35 SD @ 6g/kg seed for downy mildew suppression.',
      landPrep: 'Standard deep ploughing with 25kg DAP + 15kg Potash applied along seed drill lines.',
      nutrition: '60kg Urea per acre applied in two split doses during monsoon rainy spells.',
      pestControl: 'Mancozeb 75 WP spray if leaf blast appears in humid microclimates.',
      irrigation: 'Furrow irrigation at tillering and grain filling stages if rains fail.',
      expectedYield: '15 – 19 quintals/acre.'
    },
    keyBenefits: [
      { title: 'Super-Dense Bio-Available Iron & Zinc', desc: 'Contains 8.0 mg iron/100g—3x higher than polished rice—combating anemia naturally and boosting cellular immunity.' },
      { title: 'Naturally Gluten-Free & Low GI', desc: 'Slow digestive transit and high resistant starch make it ideal for diabetic management and gut health.' },
      { title: 'Heat Shielded & Climate Future-Proof', desc: 'Thrives in 42°C heat and requires 70% less water than rice, making it the most resilient food security cereal.' },
      { title: 'Nutritious Green Fodder Straw', desc: 'High-sugar bajra straw provides palatable fodder for dryland sheep, goats, and dairy cattle.' }
    ],
    nutritionalValue: {
      calories: '361 kcal/100g',
      protein: '11.6 g',
      carbs: '67.5 g',
      fiber: '12.5 g',
      minerals: 'Iron 8.0mg, Zinc 3.1mg, Magnesium 114mg, Phosphorus 296mg',
      glycemicIndex: '42 (Low)'
    },
    stages: [
      { stageNumber: 1, name: 'Sowing & Germination', dayRange: 'Day 1 – 6', criticalCare: 'Direct seed drilling at 3-4cm shallow depth after first monsoon soaking rain.' },
      { stageNumber: 2, name: 'Thinning & Intercultivation', dayRange: 'Day 15 – 20', criticalCare: 'Thin seedlings to 12-15cm intra-row spacing. Run blade harrow to create dust mulch.' },
      { stageNumber: 3, name: 'Tillering & Stem Elongation', dayRange: 'Day 25 – 40', criticalCare: 'Deep extensive rooting develops. Rapid vegetative canopy shades out weed growth.' },
      { stageNumber: 4, name: 'Ear-Head Emergence', dayRange: 'Day 45 – 55', criticalCare: 'Ear-heads push through top sheath. Soil moisture critical for uniform head size and seed set.' },
      { stageNumber: 5, name: 'Grain Hardening', dayRange: 'Day 60 – 75', criticalCare: 'Grains harden rapidly; bird scaring devices placed around field borders.' },
      { stageNumber: 6, name: 'Harvesting & Threshing', dayRange: 'Day 80 – 90', criticalCare: 'Heads turn grey-brown. Cut ear-heads, sun-dry on clean canvas, and thresh with roller.' }
    ]
  },
  {
    id: 'finger-millet',
    name: 'Finger Millet / Ragi (Calcium Powerhouse)',
    botanicalName: 'Eleusine coracana (Poaceae)',
    category: 'millet',
    summary: 'The ancient wonder nutri-grain. Packed with 344mg of natural calcium per 100g—30x more than rice—making it the champion grain for bone density and infant nourishment.',
    idealSoil: 'Red gravelly loam, laterite, or shallow porous soils, pH 5.5 – 7.5',
    temperature: '20°C – 32°C (Prefers moderate tropical temperatures)',
    rainfall: '500 mm – 750 mm (Tolerates moderate dry spells with deep rooting)',
    durationDays: '90 – 110 days',
    sowingSeason: 'Kharif season (July – August)',
    naturalMethod: {
      seedTreatment: 'Soaking in Beejamrutha + Trichoderma (10g/kg) with wood ash dusting prior to nursery sowing or direct drilling.',
      landPrep: '4 tonnes aged farmyard manure + 1 tonne vermicompost incorporated into fine red loam tilth.',
      nutrition: 'Ghana-jeevamrutha (200kg/acre) broadcasted at 25 days + fermented Jeevamrutha with irrigation.',
      pestControl: 'Extremely hardy against insects; border marigold rows repel any leaf caterpillars naturally.',
      irrigation: 'Predominantly rainfed; 2 protective light irrigations during tillering and ear-head emergence if rains fail.',
      expectedYield: '14 – 18 quintals/acre of ruby-brown nutrient-dense grain.'
    },
    chemicalMethod: {
      seedTreatment: 'Captan or Thiram @ 2.5g/kg seed to prevent seedling damping-off.',
      landPrep: 'Basal application of 20kg Nitrogen + 20kg P2O5 + 15kg K2O per acre.',
      nutrition: 'Top-dress 20kg Urea at 25–30 days after transplanting or direct sowing.',
      pestControl: 'Mancozeb 75 WP spray if blast symptoms appear on finger ear-heads.',
      irrigation: 'Light supplemental irrigation at flowering and grain dough stage.',
      expectedYield: '16 – 22 quintals/acre.'
    },
    keyBenefits: [
      { title: 'The World’s Highest Calcium Grain', desc: 'Contains 344 mg of elemental calcium/100g—surpassing cow milk and all other cereals, preventing osteoporosis.' },
      { title: 'Ultra-Low Glycemic Index & Anti-Diabetic', desc: 'High polyphenol and dietary fiber content slows amylase digestion, providing superior blood sugar regulation.' },
      { title: 'Natural Cooling & Satiety', desc: 'Traditional Ragi Mudde / porridge provides long-lasting sustained stamina for hard manual farm labor.' },
      { title: 'Safe Storage Over Decades', desc: 'Seeds contain natural antimicrobial tannins; traditional granaries store unpolished ragi for over 10 years without pest damage.' }
    ],
    nutritionalValue: {
      calories: '328 kcal/100g',
      protein: '7.3 g',
      carbs: '72.0 g',
      fiber: '11.5 g',
      minerals: 'Calcium 344mg, Iron 3.9mg, Phosphorus 283mg, Potassium 408mg',
      glycemicIndex: '44 (Low)'
    },
    stages: [
      { stageNumber: 1, name: 'Nursery or Direct Sowing', dayRange: 'Day 1 – 15', criticalCare: 'Nursery raised seedlings or direct line sowing at 22x10cm spacing in moist red soil.' },
      { stageNumber: 2, name: 'Transplanting / Thinning', dayRange: 'Day 18 – 25', criticalCare: 'Transplant 20-day old seedlings at 2-3cm depth. Light watering to establish roots.' },
      { stageNumber: 3, name: 'Active Tillering', dayRange: 'Day 35 – 45', criticalCare: 'Profuse tillering occurs. Inter-cultivation with blade harrow removes weeds and loosens soil.' },
      { stageNumber: 4, name: 'Finger Ear-Head Emergence', dayRange: 'Day 55 – 65', criticalCare: 'Characteristic 5 to 7 claw-like fingers emerge. Moisture stress here causes blast vulnerability.' },
      { stageNumber: 5, name: 'Grain Hardening (Dough Stage)', dayRange: 'Day 75 – 88', criticalCare: 'Fingers curve inwards as grains fill with dense starch and turn copper-red.' },
      { stageNumber: 6, name: 'Maturity & Harvest', dayRange: 'Day 95 – 110', criticalCare: 'Ear-heads turn golden brown. Clip ear-heads with sickle, heap for curing 3 days, and thresh.' }
    ]
  },
  {
    id: 'sorghum-jowar',
    name: 'Sorghum / Jowar (Gluten-Free Great Grain)',
    botanicalName: 'Sorghum bicolor (Poaceae)',
    category: 'grain',
    summary: 'The grand ancient cereal of the semi-arid tropics. Highly efficient C4 photosynthesis yields abundant nutritious human food grains and rich sweet livestock fodder.',
    idealSoil: 'Deep black cotton soils (Vertisols) or clay loam with high water holding capacity, pH 6.0 – 8.5',
    temperature: '25°C – 35°C (High heat tolerance; dormant during acute drought and revives upon rainfall)',
    rainfall: '450 mm – 650 mm',
    durationDays: '100 – 120 days',
    sowingSeason: 'Kharif (June – July) & Rabi (September – October in Deccan)',
    naturalMethod: {
      seedTreatment: 'Beejamrutha coating + Azospirillum culture (200g/10kg seed) to stimulate early root strike.',
      landPrep: 'Summer deep plowing with 5 tonnes compost per acre; ridge and furrow formation to conserve moisture.',
      nutrition: 'Ghana-jeevamrutha at sowing + fermented bio-digested slurry via irrigation at knee-high stage.',
      pestControl: 'Intercropping with cowpea (2:1 ratio) to suppress shoot fly; neem oil spray at early whorl stage.',
      irrigation: 'Predominantly rainfed; 2 irrigations at primordial initiation (Day 35) and grain filling (Day 75).',
      expectedYield: '14 – 18 quintals/acre of clean pearl-white grain + 4 tonnes nutritious dry fodder.'
    },
    chemicalMethod: {
      seedTreatment: 'Thiamethoxam 30 FS @ 10ml/kg seed for shoot fly protection + Carbendazim @ 2g/kg.',
      landPrep: 'Basal placement of 30kg Nitrogen + 25kg P2O5 + 15kg K2O per acre.',
      nutrition: 'Top-dress 30kg Nitrogen (via Urea) at 30 days after sowing along crop rows.',
      pestControl: 'Phorate 10G or Carbofuran granules in soil furrows at sowing for shoot fly management.',
      irrigation: 'Furrow irrigation at critical vegetative and boot-leaf stages.',
      expectedYield: '18 – 24 quintals/acre.'
    },
    keyBenefits: [
      { title: 'Naturally Gluten-Free & Heart-Healthy', desc: 'Completely gluten-free with unique policosanols that naturally modulate cholesterol metabolism.' },
      { title: 'Dense Dietary Fiber & Satiety', desc: 'High insoluble fiber slows digestion, supporting stable blood sugar and long-lasting energy.' },
      { title: 'Exceptional Phenolic Antioxidants', desc: 'Contains anthocyanins and tannins that provide higher antioxidant activity than blueberries or pomegranates.' },
      { title: 'Dual-Purpose Food & Fodder Security', desc: 'Provides golden edible grain for flatbreads (Jowar Roti) and high-tonnage sweet dry stover for cattle.' }
    ],
    nutritionalValue: {
      calories: '349 kcal/100g',
      protein: '10.4 g',
      carbs: '72.6 g',
      fiber: '9.7 g',
      minerals: 'Iron 4.1mg, Phosphorus 287mg, Potassium 350mg, Magnesium 165mg',
      glycemicIndex: '50 (Low)'
    },
    stages: [
      { stageNumber: 1, name: 'Sowing & Germination', dayRange: 'Day 1 – 6', criticalCare: 'Sow at 4-5cm depth in moist soil. Shoot emerges vigorously within 5 days.' },
      { stageNumber: 2, name: 'Knee-High Stage (Shoot Fly Critical)', dayRange: 'Day 15 – 30', criticalCare: 'Most sensitive to shoot fly attack. Maintain trap crops and monitor central whorls.' },
      { stageNumber: 3, name: 'Panicle Primordial Initiation', dayRange: 'Day 35 – 45', criticalCare: 'Flower head begins developing inside stem. Moisture and nutrient availability determine head size.' },
      { stageNumber: 4, name: 'Booting & Panicle Emergence', dayRange: 'Day 55 – 65', criticalCare: 'Large compact panicle pushes out of top leaf sheath. Avoid moisture stress.' },
      { stageNumber: 5, name: 'Milk & Soft Dough Stage', dayRange: 'Day 75 – 90', criticalCare: 'Kernels fill with starch fluid. Install reflective ribbons to prevent bird damage.' },
      { stageNumber: 6, name: 'Black Layer Maturity & Harvest', dayRange: 'Day 100 – 120', criticalCare: 'Black abscission spot appears at kernel base. Cut whole stalks, sun-cure, and thresh.' }
    ]
  },
  {
    id: 'maize-corn',
    name: 'Maize / Corn (Queen of Cereals)',
    botanicalName: 'Zea mays (Poaceae)',
    category: 'grain',
    summary: 'The most genetically productive cereal crop on earth. Supplies human dietary nutrition, sweet corn, poultry grain, and high-energy dairy cattle silage.',
    idealSoil: 'Deep, rich, fertile loam or silt loam with high organic humus, pH 6.0 – 7.2 (sensitive to waterlogging)',
    temperature: '18°C – 32°C (Optimal warm sunny conditions; sensitive to frost and extreme drought at silking)',
    rainfall: '500 mm – 750 mm well-distributed',
    durationDays: '95 – 110 days',
    sowingSeason: 'Kharif (June) & Rabi (October – November)',
    naturalMethod: {
      seedTreatment: 'Beejamrutha + Azospirillum culture (200g/10kg seed) to enhance nitrogen uptake.',
      landPrep: 'Ridge and furrow system with 8 tonnes compost + 2 tonnes sheep manure per acre.',
      nutrition: 'Compost tea foliar sprays at 30 & 50 days; mustard oil cake slurry (100kg/acre) applied in furrows.',
      pestControl: 'Intercropping with cowpea (traps fall armyworm); release of Trichogramma egg parasitoids (50,000/acre).',
      irrigation: 'Drip fertigation delivers uniform organic tea directly to root zones, saving 50% water.',
      expectedYield: '25 – 30 quintals/acre of golden, carotenoid-rich cobs.'
    },
    chemicalMethod: {
      seedTreatment: 'Cyantraniliprole 19.8% + Thiamethoxam 19.8% FS against Fall Armyworm (FAW).',
      landPrep: 'Basal application of 60kg DAP + 30kg Muriate of Potash + 10kg Zinc Sulphate.',
      nutrition: '120kg Urea split across knee-high, tasseling, and silking stages.',
      pestControl: 'Spinetoram 11.7 SC or Chlorantraniliprole 18.5 SC spray in early whorls for Fall Armyworm.',
      irrigation: 'Furrow irrigation at knee-high, tasseling, silking, and grain dough stages.',
      expectedYield: '32 – 40 quintals/acre.'
    },
    keyBenefits: [
      { title: 'Eye Health & Carotenoid Density', desc: 'Loaded with Lutein and Zeaxanthin that concentrate in the retinal macula, shielding eyes from blue light damage.' },
      { title: 'High Insoluble Fiber & Gut Prebiotics', desc: 'Promotes beneficial probiotic bacteria and aids in regular, healthy intestinal digestion.' },
      { title: 'World’s Highest Dairy Silage Tonnage', desc: 'Whole green maize chopped at milk-dough stage produces the world’s most digestible, milk-yielding dairy silage.' },
      { title: 'Rich in Essential Minerals & B-Vitamins', desc: 'Supplies bio-available magnesium, phosphorus, zinc, thiamine, niacin, and folate.' }
    ],
    nutritionalValue: {
      calories: '365 kcal/100g',
      protein: '9.4 g',
      carbs: '74.3 g',
      fiber: '7.3 g',
      minerals: 'Potassium 287mg, Phosphorus 210mg, Magnesium 127mg, Iron 2.7mg',
      glycemicIndex: '52 (Boiled Whole Corn)'
    },
    stages: [
      { stageNumber: 1, name: 'Germination & Emergence', dayRange: 'Day 1 – 6', criticalCare: 'Seed planted 4-5cm deep. Ensure soil is moist but never waterlogged.' },
      { stageNumber: 2, name: 'Knee-High Vegetative', dayRange: 'Day 25 – 30', criticalCare: 'First major nutrient application and earthing up around root crowns to prevent lodging.' },
      { stageNumber: 3, name: 'Tasseling (Male Flower)', dayRange: 'Day 50 – 55', criticalCare: 'Tassels emerge at plant apex. Moisture stress during pollen shed causes yield collapse.' },
      { stageNumber: 4, name: 'Silking & Pollination', dayRange: 'Day 58 – 65', criticalCare: 'Silks capture windblown pollen. Maintain optimum soil moisture; avoid chemical sprays.' },
      { stageNumber: 5, name: 'Milk & Dough Stage', dayRange: 'Day 75 – 85', criticalCare: 'Kernel fluid changes from milky to solid starch. Prime time for dairy silage harvest.' },
      { stageNumber: 6, name: 'Black Layer & Harvest', dayRange: 'Day 95 – 105', criticalCare: 'Black abscission layer forms at kernel tip signalling physiological maturity.' }
    ]
  },
  {
    id: 'mustard-rapeseed',
    name: 'Mustard / Rapeseed (Golden Winter Oilseed)',
    botanicalName: 'Brassica juncea (Brassicaceae)',
    category: 'oilseed',
    summary: 'The premier winter oilseed. Produces high-pungency cold-pressed golden cooking oil rich in omega-3 and essential glucosinolates, with high sulfur requirements.',
    idealSoil: 'Light to medium sandy loam or alluvial soil with good drainage, pH 6.0 – 7.5',
    temperature: '15°C – 25°C (Cool weather during vegetative growth and clear sunny days at podding)',
    rainfall: '250 mm – 400 mm (Requires 2 to 3 light irrigations only)',
    durationDays: '110 – 125 days',
    sowingSeason: 'Rabi season (October 1 – October 25 optimal window)',
    naturalMethod: {
      seedTreatment: 'Beejamrutha liquid coating + Trichoderma (10g/kg) to shield against white rust and damping-off.',
      landPrep: '5 tonnes well-rotted FYM + 200kg gypsum per acre (Gypsum is vital as natural sulfur & calcium source for oil synthesis).',
      nutrition: 'Jeevamrutha (200L/acre) with irrigation at 30 days + foliar spray of fermented buttermilk for white rust resistance.',
      pestControl: 'Yellow sticky traps (15/acre) for mustard aphid monitoring; 5% NSKE spray when aphid colonies first appear on inflorescence.',
      irrigation: 'Critical at pre-flowering branching (Day 30-35) and siliqua pod development (Day 60-65).',
      expectedYield: '8 – 12 quintals/acre with 40%+ cold-press oil recovery; de-oiled mustard cake provides premium organic fertilizer.'
    },
    chemicalMethod: {
      seedTreatment: 'Thiamethoxam 70 WS @ 4g/kg seed + Metalaxyl 35 SD @ 6g/kg for downy mildew and white rust.',
      landPrep: 'Basal placement of 30kg Nitrogen + 20kg P2O5 + 15kg K2O + 20kg elemental Sulfur per acre.',
      nutrition: 'Top-dress 30kg Urea per acre at first irrigation (30 days after sowing).',
      pestControl: 'Dimethoate 30 EC or Oxydemeton-methyl 25 EC spray for severe mustard aphid infestations.',
      irrigation: 'Furrow irrigation at early branching and pod elongation.',
      expectedYield: '10 – 15 quintals/acre.'
    },
    keyBenefits: [
      { title: 'Heart-Healthy Monounsaturated Fats', desc: 'Contains 60% oleic and erucic acid with an optimal 1:2 balance of Omega-3 to Omega-6 fatty acids.' },
      { title: 'Potent Antimicrobial Glucosinolates', desc: 'Natural allylisothiocyanates provide natural antimicrobial, anti-fungal, and food preservation properties.' },
      { title: 'De-Oiled Cake as Bio-Fertilizer', desc: 'Mustard meal residue is rich in 5% nitrogen, acting as both an organic fertilizer and root nematode repellent.' },
      { title: 'Vital Winter Pollinator Haven', desc: 'Bright yellow floral blooms produce immense nectar and pollen, sustaining wild honeybee populations.' }
    ],
    nutritionalValue: {
      calories: '508 kcal/100g (Seeds)',
      protein: '26.0 g',
      carbs: '28.0 g',
      fiber: '12.2 g',
      minerals: 'Calcium 266mg, Iron 9.2mg, Magnesium 370mg, Selenium 208µg',
      glycemicIndex: '35 (Low)'
    },
    stages: [
      { stageNumber: 1, name: 'Sowing & Emergence', dayRange: 'Day 1 – 6', criticalCare: 'Sow at 2-3cm depth in moist soil. Ensure fine crumb seedbed without clods.' },
      { stageNumber: 2, name: 'Rosette & Early Branching', dayRange: 'Day 20 – 30', criticalCare: 'Thin seedlings to 10-15cm spacing. First irrigation and weed eradication.' },
      { stageNumber: 3, name: 'Bolting & Floral Inflorescence', dayRange: 'Day 35 – 45', criticalCare: 'Stems bolt upwards and bright yellow flowers open. Monitor daily for mustard aphids.' },
      { stageNumber: 4, name: 'Flowering & Bee Pollination', dayRange: 'Day 50 – 65', criticalCare: 'Active honeybee pollination. Avoid all chemical insecticide sprays to safeguard bees.' },
      { stageNumber: 5, name: 'Siliqua (Pod) Elongation & Oil Fill', dayRange: 'Day 70 – 90', criticalCare: 'Elongated pods fill with round seeds. Maintain light soil moisture; prevent frost.' },
      { stageNumber: 6, name: 'Maturity & Harvest', dayRange: 'Day 105 – 120', criticalCare: 'Pods turn golden straw-yellow. Harvest early morning to avoid pod dehiscence and seed shatter.' }
    ]
  },
  {
    id: 'soybean',
    name: 'Soybean (Golden Protein & Oil Bean)',
    botanicalName: 'Glycine max (Fabaceae)',
    category: 'oilseed',
    summary: 'The dual-purpose global powerhouse. Delivers 38–40% complete plant protein and 20% high-grade vegetable oil while fixing atmospheric nitrogen.',
    idealSoil: 'Deep well-drained fertile black cotton soils or clay loams, pH 6.0 – 7.5',
    temperature: '22°C – 32°C (Sensitive to extreme dry heat during flowering and waterlogging)',
    rainfall: '650 mm – 900 mm well-distributed',
    durationDays: '90 – 105 days',
    sowingSeason: 'Kharif season (Late June to mid-July onset of monsoon)',
    naturalMethod: {
      seedTreatment: 'Bradyrhizobium japonicum specific culture + Trichoderma viride (10g/kg seed) to guarantee root nodule infection.',
      landPrep: 'Broad-bed and furrow (BBF) layout; 4 tonnes compost + 100kg neem cake per acre.',
      nutrition: 'Ghana-jeevamrutha at basal + foliar spray of 2% cow urine + vermiwash at flowering.',
      pestControl: 'Intercropped with pigeon pea (4:2 ratio); pheromone traps for Spodoptera litura; botanical NSKE 5% spray.',
      irrigation: 'Predominantly rainfed; 1 protective irrigation during pod fill if dry spell exceeds 15 days.',
      expectedYield: '10 – 14 quintals/acre of clean golden beans.'
    },
    chemicalMethod: {
      seedTreatment: 'Thiophanate Methyl + Pyraclostrobin (2.5ml/kg) + Thiamethoxam for stem fly and damping-off.',
      landPrep: 'Basal placement of 15kg Nitrogen + 30kg P2O5 + 20kg K2O + 15kg Sulfur per acre.',
      nutrition: 'Foliar spray of 2% DAP or water-soluble 00:52:34 at pod development.',
      pestControl: 'Chlorantraniliprole 18.5 SC for girdle beetle and semilooper caterpillar suppression.',
      irrigation: 'Furrow irrigation at pod initiation and seed filling stages.',
      expectedYield: '12 – 18 quintals/acre.'
    },
    keyBenefits: [
      { title: 'The Highest Plant Protein Density (40%)', desc: 'Contains complete protein with all 9 essential amino acids, matching egg and meat biological values.' },
      { title: 'Rich in Healthy Isoflavones & Lecithin', desc: 'High genistein and daidzein phytoestrogens that support hormonal balance and lower LDL cholesterol.' },
      { title: 'High Unsaturated Fatty Acids', desc: 'Provides linoleic and alpha-linolenic essential fats supporting cognitive and cardiovascular longevity.' },
      { title: 'Critical Livestock Protein Meal (DOC)', desc: 'Soybean de-oiled cake is the world standard feed protein for dairy cows, poultry, and aquaculture.' }
    ],
    nutritionalValue: {
      calories: '446 kcal/100g',
      protein: '36.5 g',
      carbs: '30.2 g',
      fiber: '9.3 g',
      minerals: 'Iron 15.7mg, Calcium 277mg, Magnesium 280mg, Potassium 1797mg',
      glycemicIndex: '18 (Extremely Low)'
    },
    stages: [
      { stageNumber: 1, name: 'Emergence & Unifoliate Leaves', dayRange: 'Day 1 – 6', criticalCare: 'Sow at 3-4cm depth. Ensure adequate soil moisture for quick uniform emergence.' },
      { stageNumber: 2, name: 'Trifoliate Leaf Development', dayRange: 'Day 15 – 25', criticalCare: 'Root nodules begin pink nitrogen fixation. Keep crop weed-free during first 30 days.' },
      { stageNumber: 3, name: 'Floral Initiation', dayRange: 'Day 35 – 45', criticalCare: 'Tiny purple or white flowers form in axils. Moisture stress causes blossom abortion.' },
      { stageNumber: 4, name: 'Pod Elongation', dayRange: 'Day 50 – 65', criticalCare: 'Hairy pods elongate rapidly. Scout for girdle beetle and tobacco caterpillar.' },
      { stageNumber: 5, name: 'Seed Filling & Bean Swelling', dayRange: 'Day 70 – 85', criticalCare: 'Beans swell inside pods. Supplemental irrigation during dry spells dramatically lifts yield.' },
      { stageNumber: 6, name: 'Defoliation & Harvest', dayRange: 'Day 90 – 105', criticalCare: 'Leaves turn golden and drop completely. Pods rattle when shaken. Harvest before over-drying.' }
    ]
  },
  {
    id: 'cotton-cash',
    name: 'Cotton (White Gold Fiber Crop)',
    botanicalName: 'Gossypium hirsutum (Malvaceae)',
    category: 'commercial',
    summary: 'The premier natural textile fiber of the world. Produces pure cellulose lint fibers for spinning and high-oil cottonseed for cattle feed.',
    idealSoil: 'Deep black cotton soils (Vertisols) with high clay content and water retention, pH 6.5 – 8.0',
    temperature: '21°C – 35°C (Requires warm days, warm nights, and long frost-free sunshine)',
    rainfall: '600 mm – 1000 mm or managed drip fertigation',
    durationDays: '150 – 180 days',
    sowingSeason: 'Kharif season (May – June)',
    naturalMethod: {
      seedTreatment: 'Delinted seed treated with Beejamrutha + Trichoderma + Azotobacter bio-culture.',
      landPrep: 'Deep chisel plowing; 6 tonnes FYM + 2 tonnes vermicompost with 100kg neem cake per acre.',
      nutrition: 'Jeevamrutha (200L/acre) via drip every 15 days + foliar 3% Panchagavya at square and boll formation.',
      pestControl: 'Border trap crops of castor and marigold; yellow & blue sticky traps; release of Chrysoperla carnea predators.',
      irrigation: 'Drip irrigation maintains uniform root moisture without excess humidity that triggers boll rot.',
      expectedYield: '8 – 12 quintals/acre of clean seed cotton (Kapas) with long staple length.'
    },
    chemicalMethod: {
      seedTreatment: 'Imidacloprid 70 WS + Carbendazim to protect against early sucking pests.',
      landPrep: 'Basal placement of 30kg Nitrogen + 30kg P2O5 + 30kg K2O per acre.',
      nutrition: 'Split application of 70kg Nitrogen via Urea up to peak flowering + 1% Potassium Nitrate foliar spray.',
      pestControl: 'Targeted insecticide rotations for pink bollworm, whitefly, and thrips.',
      irrigation: 'Scheduled furrow or drip irrigation during squaring and boll formation.',
      expectedYield: '10 – 16 quintals/acre.'
    },
    keyBenefits: [
      { title: 'Global Natural Textile Fiber', desc: '100% natural breathable cellulose fiber supporting global spinning, garment manufacturing, and rural livelihoods.' },
      { title: 'Cottonseed Oil & High-Protein Meal', desc: 'Seeds yield refined edible cooking oil and 24% protein cottonseed cake (Kapasia Khali) for dairy cattle.' },
      { title: 'High Commercial Farm Monetization', desc: 'Commands immediate liquidity at agricultural cotton exchanges and government MSP procurement centers.' },
      { title: 'Deep Subsoil Nutrient Extraction', desc: 'Extensive taproot extracts deep subsoil nutrients and tolerates high summer heat.' }
    ],
    nutritionalValue: {
      calories: '506 kcal/100g (Cottonseed Kernel)',
      protein: '23.0 g',
      carbs: '24.0 g',
      fiber: '15.0 g',
      minerals: 'Magnesium 280mg, Potassium 780mg, Phosphorus 450mg',
      glycemicIndex: 'N/A (Fiber / Oil Crop)'
    },
    stages: [
      { stageNumber: 1, name: 'Sowing & Seedling Emergence', dayRange: 'Day 1 – 10', criticalCare: 'Sow at 4-5cm depth in moist soil. Thin to single plant per hill at 90x60cm spacing.' },
      { stageNumber: 2, name: 'Square (Flower Bud) Formation', dayRange: 'Day 35 – 50', criticalCare: 'Pyramidal squares form. Scout for sucking thrips and aphids; apply neem oil.' },
      { stageNumber: 3, name: 'Flowering & Pollination', dayRange: 'Day 60 – 75', criticalCare: 'Cream flowers open, pollinate, and turn pinkish-red next day. Avoid water stress.' },
      { stageNumber: 4, name: 'Boll Development & Elongation', dayRange: 'Day 80 – 110', criticalCare: 'Green spherical bolls expand. Inspect for pink bollworm rosette flowers and entry holes.' },
      { stageNumber: 5, name: 'Boll Bursting & Lint Fluffing', dayRange: 'Day 120 – 145', criticalCare: 'Bolls burst open exposing fluffy white cotton lint. Cease irrigation to avoid lint staining.' },
      { stageNumber: 6, name: 'Harvest (Multiple Pickings)', dayRange: 'Day 150 – 180', criticalCare: 'Hand-pick clean dry cotton bolls in morning sun. Store in clean dry cotton bags.' }
    ]
  },
  {
    id: 'sugarcane',
    name: 'Sugarcane (Grand Bio-Energy & Sugar Crop)',
    botanicalName: 'Saccharum officinarum (Poaceae)',
    category: 'commercial',
    summary: 'The heavyweight champion of agricultural biomass. Absorbs immense carbon and sunlight to produce sucrose sugar, molasses, bio-ethanol, and cogeneration power.',
    idealSoil: 'Deep, rich alluvial loam or well-drained fertile black soil with high organic matter, pH 6.5 – 7.8',
    temperature: '24°C – 38°C (High heat and solar radiation required for grand growth)',
    rainfall: '1500 mm – 2200 mm water requirement (demands drip irrigation management)',
    durationDays: '300 – 365 days (10–12 months)',
    sowingSeason: 'Spring (February – March) & Autumn (October – November)',
    naturalMethod: {
      seedTreatment: 'Sett treatment with Beejamrutha + Trichoderma (2kg/acre slurry) to prevent red rot and whip smut.',
      landPrep: 'Trench method; 12 tonnes FYM + 2 tonnes vermicompost with pressmud compost per acre.',
      nutrition: 'Jeevamrutha (400L/acre/month) via drip fertigation + intercropped green manure (Dhaincha) buried at 45 days.',
      pestControl: 'Trichogramma chilonis egg parasitoid cards (20,000/acre) for early shoot borer; trash mulching preserves moisture.',
      irrigation: 'Drip fertigation delivers 60% water savings directly to cane root zones.',
      expectedYield: '38 – 50 tonnes/acre of high-sucrose, thick-girthed chemical-free canes.'
    },
    chemicalMethod: {
      seedTreatment: 'Carbendazim 50 WP @ 1g/L water sett soaking for 15 minutes before furrow placement.',
      landPrep: 'Basal placement of 40kg Nitrogen + 50kg P2O5 + 40kg K2O per acre in furrows.',
      nutrition: '150kg Urea split across tillering, formative, and grand growth stages before earthing-up.',
      pestControl: 'Chlorantraniliprole 18.5 SC for shoot borer; Phorate granules for white grub suppression.',
      irrigation: 'Furrow flood irrigation every 8 to 12 days during summer peak.',
      expectedYield: '45 – 65 tonnes/acre.'
    },
    keyBenefits: [
      { title: 'The World’s Highest Solar Energy Conversion', desc: 'Converts sunlight into sucrose biomass with unrivaled photosynthetic efficiency, yielding sugar and green bio-ethanol.' },
      { title: 'Clean Cogeneration Green Energy', desc: 'Crushed sugarcane bagasse fuels thermal power generation, exporting clean green electricity to rural grids.' },
      { title: 'Rich Natural Molasses & Jaggery (Gur)', desc: 'Unrefined sugarcane jaggery preserves organic iron, potassium, and minerals, serving as an unrefined natural sweetener.' },
      { title: 'Complete Multi-Ratoon Economic Lifecycle', desc: 'A single planting yields 2 to 3 successive ratoon harvests, reducing seed cost and labor over multiple years.' }
    ],
    nutritionalValue: {
      calories: '269 kcal/100g (Raw Jaggery)',
      protein: '0.4 g',
      carbs: '85.0 g',
      fiber: '0.0 g',
      minerals: 'Iron 11.4mg, Magnesium 70mg, Potassium 1050mg, Calcium 80mg',
      glycemicIndex: '55 (Natural Jaggery) / 68 (Refined Sugar)'
    },
    stages: [
      { stageNumber: 1, name: 'Germination & Sett Sprouting', dayRange: 'Day 1 – 35', criticalCare: 'Eyebuds on setts swell and sprout. Maintain moist soil; prevent crust formation.' },
      { stageNumber: 2, name: 'Tillering & Formative Phase', dayRange: 'Day 40 – 100', criticalCare: 'Cane tillers multiply from root crowns. Apply first fertilizer split and control shoot borer.' },
      { stageNumber: 3, name: 'Grand Growth (Stem Elongation)', dayRange: 'Day 110 – 240', criticalCare: 'Canes grow rapidly at 1 inch per day. Heavy irrigation and partial earthing-up to prevent lodging.' },
      { stageNumber: 4, name: 'Full Earthing-Up & Trash Detrashing', dayRange: 'Day 180 – 210', criticalCare: 'Ridge soil firmly around root crowns; remove dead bottom dry leaves to improve aeration.' },
      { stageNumber: 5, name: 'Ripening & Sucrose Accumulation', dayRange: 'Day 250 – 320', criticalCare: 'Withhold nitrogen; cool dry weather triggers sucrose accumulation. Reduce water frequency.' },
      { stageNumber: 6, name: 'Harvesting at Peak Brix', dayRange: 'Day 330 – 365', criticalCare: 'Check hand refractometer Brix >18%. Cut canes flush with ground level to promote healthy ratoon sprouting.' }
    ]
  }
];

export interface DairyGuide {
  id: string;
  topic: string;
  summary: string;
  metrics: { label: string; value: string }[];
  keyPractices: { label: string; text: string }[];
  feedFormula: {
    ingredient: string;
    proportion: string;
    purpose: string;
  }[];
  hygieneProtocol: string[];
}

export const DAIRY_DATA: DairyGuide = {
  id: 'cow-milk-excellence',
  topic: 'Scientific Cow Milk & Dairy Management',
  summary: 'Achieving pure, high-fat, high-SNF cow milk naturally through balanced bovine nutrition, stress-free housing, clean milking techniques, and holistic herd health.',
  metrics: [
    { label: 'Ideal Milk Fat %', value: '4.2% – 4.8%' },
    { label: 'Ideal SNF (Solids-Not-Fat)', value: '8.8% – 9.2%' },
    { label: 'Daily Water per Milking Cow', value: '70 – 100 Litres' },
    { label: 'Somatic Cell Count (SCC)', value: '< 150,000 / mL' }
  ],
  keyPractices: [
    {
      label: 'Indigenous (Desi) vs Cross-Bred Breeds',
      text: 'Indigenous breeds (Gir, Sahiwal, Rathi, Tharparkar) produce pure A2 beta-casein milk, known for lower digestive inflammation and high heat tolerance. Cross-breeds (HF/Jersey cross) provide higher volumetric yield (18-25L/day) but require cooling systems and strict metabolic management.'
    },
    {
      label: 'The 24-Hour Circadian Routine',
      text: 'Milk cows at exact 12-hour intervals (e.g. 5:30 AM and 5:30 PM). Punctuality stimulates natural oxytocin release without artificial injections, ensuring full milk let-down.'
    },
    {
      label: 'Free-Stall Open Paddock Housing',
      text: 'Cows kept loose in sand-bedded open loafing sheds yield 15-20% more milk than tethered cows due to freedom of movement, natural grooming, and zero joint sores.'
    },
    {
      label: 'Clean Water & Mineral Licks',
      text: 'Milk is 87% water. Clean, cool, ad-libitum drinking water increases daily milk volume by 1.5 to 2.5 Litres per cow. Provide natural Himalayan pink rock salt and mineral lick blocks in pens.'
    }
  ],
  feedFormula: [
    { ingredient: 'Green Leguminous Fodder (Lucerne / Berseem)', proportion: '25%', purpose: 'Supplies high plant protein (18-20% CP) and essential beta-carotene for creamy milk tint.' },
    { ingredient: 'Green Cereal Fodder (Hybrid Napier / Maize)', proportion: '40%', purpose: 'Provides digestible carbohydrates, moisture, and high rumen fermentation volume.' },
    { ingredient: 'Dry Fodder (Wheat Straw / Paddy Straw)', proportion: '20%', purpose: 'Crucial for rumen cud chewing (rumination); maintains rumen pH > 6.2 and elevates milk FAT %.' },
    { ingredient: 'Concentrate Feed (Mustard Cake + Cottonseed + Grains)', proportion: '12%', purpose: 'Delivers concentrated bypass fats, bypass proteins, and mineral-vitamin premix.' },
    { ingredient: 'Live Probiotics + Yeast Culture', proportion: '3%', purpose: 'Stabilizes rumen microflora, preventing sub-acute ruminal acidosis (SARA).' }
  ],
  hygieneProtocol: [
    'Strip Cup Test: Always strip first 3 streams of milk into a black plate to inspect for flakes or mastitis.',
    'Pre-Milking Teat Dip: Dip teats in herbal or 0.5% iodine solution for 30 seconds; wipe with single-use clean cloth.',
    'Full-Hand Milking: Use full-hand squeeze (never knuckle thumb pressure) to protect teat canal sphincters.',
    'Post-Milking Teat Seal: Dip in barrier solution immediately; keep cows standing for 30 minutes with fresh feed while sphincter closes.',
    'Rapid Chilling: Chill raw milk to 4°C within 90 minutes of milking to halt bacterial multiplication completely.'
  ]
};
