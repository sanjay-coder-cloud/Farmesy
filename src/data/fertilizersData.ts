export interface FertilizerProfile {
  id: string;
  name: string;
  type: 'organic' | 'chemical' | 'biofertilizer';
  npkRatio: string;
  primaryNutrients: string;
  actionSpeed: 'Slow & Sustained' | 'Immediate Spike' | 'Microbial Catalyst';
  soilImpact: 'Rebuilds microbial life & carbon' | 'Degrades humus if unmanaged' | 'Inoculates living rhizobacteria';
  bestUsedFor: string;
  dosageGuide: string;
  recipeOrApplication: string;
  advantages: string[];
  disadvantages: string[];
}

export const FERTILIZERS_DATA: FertilizerProfile[] = [
  {
    id: 'jeevamrutha',
    name: 'Jeevamrutha (Liquid Bio-Catalyst)',
    type: 'organic',
    npkRatio: 'Biological (Trillions of CFUs/mL)',
    primaryNutrients: 'Beneficial aerobic & anaerobic bacteria, mycorrhizae, growth hormones (Auxins, Gibberellins)',
    actionSpeed: 'Microbial Catalyst',
    soilImpact: 'Rebuilds microbial life & carbon',
    bestUsedFor: 'All food grains (Wheat, Paddy, Millets), pulses, oilseeds, and vegetables at any growth stage',
    dosageGuide: '200 Litres per acre mixed with irrigation water or drip, repeated every 21 days',
    recipeOrApplication: 'Recipe: Mix 10kg fresh desi cow dung + 10L cow urine + 2kg jaggery + 2kg pulse flour (Besan) + handful of undisturbed native forest soil in 200L water. Stir clockwise twice daily for 4-7 days in shade.',
    advantages: [
      'Near-zero production cost for farmers with livestock',
      'Transforms locked soil minerals into bio-available ionic form',
      'Stimulates earthworm burrowing, enhancing soil aeration and water infiltration',
      'Zero risk of root burn or chemical salinity accumulation'
    ],
    disadvantages: [
      'Requires active farm livestock (dung and urine availability)',
      'Labor needed for bi-weekly stirring and fresh preparation',
      'Does not provide massive macro-bulk NPK instantly if soil is completely barren'
    ]
  },
  {
    id: 'rhizobium-bio',
    name: 'Rhizobium Legume Inoculant',
    type: 'biofertilizer',
    npkRatio: 'Atmospheric Nitrogen Fixer (35-50 kg N/acre)',
    primaryNutrients: 'Symbiotic Rhizobium leguminosarum / Bradyrhizobium strains',
    actionSpeed: 'Microbial Catalyst',
    soilImpact: 'Inoculates living rhizobacteria',
    bestUsedFor: 'All pulse crops (Chickpea, Gram, Pigeon pea/Arhar, Moong, Urad, Soybean, Groundnut)',
    dosageGuide: '250g per 10kg seed slurry treatment with jaggery water before sowing',
    recipeOrApplication: 'Mix 250g carrier-based powder or 50ml liquid in 1L of 10% warm jaggery water. Coat clean seeds uniformly in shade 30 minutes before drilling into damp soil.',
    advantages: [
      'Directly fixes 35 to 50 kg of pure nitrogen per acre directly inside root nodules',
      'Completely eliminates the need for expensive synthetic urea in pulses',
      'Leaves 30kg of residual soil nitrogen for the succeeding cereal crop',
      'Secretes organic acids that enhance soil phosphorus solubilization'
    ],
    disadvantages: [
      'Specific strain matching required (e.g. Bradyrhizobium for Soybean vs Cicer strain for Chickpea)',
      'Vulnerable to high direct sunlight and chemical fungicide contact during seed treatment'
    ]
  },
  {
    id: 'vermicompost',
    name: 'Vermicompost (Black Gold Earthworm Castings)',
    type: 'organic',
    npkRatio: '1.8% N : 1.2% P : 1.6% K + Micronutrients',
    primaryNutrients: 'Humic acid, fulvic acid, calcium, magnesium, zinc, iron, enzymes',
    actionSpeed: 'Slow & Sustained',
    soilImpact: 'Rebuilds microbial life & carbon',
    bestUsedFor: 'Basal land preparation and top dressing for Wheat, Paddy, Pulses, Oilseeds, and Corn',
    dosageGuide: '1.5 to 2.5 tonnes per acre during land preparation; 400kg during tillering/branching',
    recipeOrApplication: 'Produced by earthworms (Eisenia fetida) digesting cow dung and organic farm residues over 45-60 days in shaded compost beds.',
    advantages: [
      'Increases soil water holding capacity by up to 250%',
      'Cushions soil against severe drought and temperature swings',
      'Enhances natural root elongation and plant immune defenses',
      'High cation-exchange capacity (CEC) prevents nutrient runoff'
    ],
    disadvantages: [
      'High volume required compared to synthetic chemical granules',
      'Higher transportation and physical distribution effort',
      'Variable moisture content requires proper storage under shade'
    ]
  },
  {
    id: 'neem-cake',
    name: 'Neem Cake (De-oiled Neem Seed Meal)',
    type: 'organic',
    npkRatio: '5.2% N : 1.0% P : 1.4% K',
    primaryNutrients: 'Azadirachtin, Nimbin, sulfur, natural organic nitrogen',
    actionSpeed: 'Slow & Sustained',
    soilImpact: 'Rebuilds microbial life & carbon',
    bestUsedFor: 'Root nematode control, white grub suppression, and natural nitrification inhibition',
    dosageGuide: '100 – 150 kg per acre applied during final ploughing or around root zones',
    recipeOrApplication: 'Cold-pressed residue after neem oil extraction. Broadcast evenly onto moist soil before sowing.',
    advantages: [
      'Acts as a dual organic fertilizer and natural soil insecticide',
      'Naturally inhibits denitrifying bacteria, keeping nitrogen in soil 2.5x longer',
      'Suppresses harmful root parasitic nematodes without killing earthworms'
    ],
    disadvantages: [
      'Moderate cost in market compared to generic manures',
      'Bitter scent and slow initial mineralization curve'
    ]
  },
  {
    id: 'panchagavya',
    name: 'Panchagavya (Five Cow Nectars Elixir)',
    type: 'organic',
    npkRatio: 'Plant Growth Regulator + Micronutrients',
    primaryNutrients: 'Indole acetic acid, lactic acid bacteria, lactobacillus, gibberellin, yeasts',
    actionSpeed: 'Microbial Catalyst',
    soilImpact: 'Rebuilds microbial life & carbon',
    bestUsedFor: 'Foliar spray during tillering, pre-flowering, and grain/pod development stages',
    dosageGuide: '3 Litres diluted in 100 Litres water (3% solution) sprayed per acre in early morning or late afternoon',
    recipeOrApplication: 'Fermented blend of 5 cow derivatives: Cow dung, cow urine, cow milk, cow curd, and cow ghee + tender coconut water + sugarcane juice, fermented for 21 days with daily stirring.',
    advantages: [
      'Dramatically accelerates branching, tillering, and ear-head size',
      'Produces a waxy cuticle coating on leaves that deters fungal spores',
      'Enhances photosynthetic efficiency, yielding deeper emerald foliage'
    ],
    disadvantages: [
      'Strict dilution compliance required (never exceed 3% on tender flowers)',
      'Requires authentic desi cow ingredients for highest microbial activity'
    ]
  },
  {
    id: 'urea-synthetic',
    name: 'Urea (Synthetic Prilled Nitrogen)',
    type: 'chemical',
    npkRatio: '46% N : 0% P : 0% K',
    primaryNutrients: 'Amide Nitrogen',
    actionSpeed: 'Immediate Spike',
    soilImpact: 'Degrades humus if unmanaged',
    bestUsedFor: 'Rapid vegetative surge and leaf chlorophyll boost in wheat, rice, and maize (Avoid excess in pulses!)',
    dosageGuide: '40 – 50 kg per split dose (Never apply all at once to prevent ammonia volatilization)',
    recipeOrApplication: 'Manufactured via Haber-Bosch ammonia synthesis. Apply strictly on moist soil, preferably neem-coated, followed by light irrigation.',
    advantages: [
      'Highest concentrated nitrogen source (46% active N)',
      'Produces rapid visible dark green foliage within 72 hours',
      'Low upfront cost due to governmental fertilizer subsidies'
    ],
    disadvantages: [
      'Up to 60% lost to atmosphere via volatilization or leached into groundwater as nitrates',
      'Kills beneficial soil earthworms and mycorrhizal fungi over continuous usage',
      'Excessive vegetative soft growth attracts severe insect pest attacks',
      'Acidifies soil and creates mineral lockup over decades of overuse'
    ]
  },
  {
    id: 'dap-synthetic',
    name: 'Di-Ammonium Phosphate (DAP)',
    type: 'chemical',
    npkRatio: '18% N : 46% P : 0% K',
    primaryNutrients: 'Ammoniacal Nitrogen & Water-Soluble Phosphate',
    actionSpeed: 'Immediate Spike',
    soilImpact: 'Degrades humus if unmanaged',
    bestUsedFor: 'Basal placement near seeds during sowing to stimulate seedling root growth',
    dosageGuide: '40 – 50 kg per acre placed 5cm below and beside seed line',
    recipeOrApplication: 'Formed by reacting ammonia with phosphoric acid. Granules placed in furrows at time of sowing.',
    advantages: [
      'High water-soluble phosphorus available immediately to fragile young seedlings',
      'Kickstarts rapid primary root elongation and early tillering'
    ],
    disadvantages: [
      'Phosphate rapidly binds with iron/aluminum in acidic soils or calcium in alkaline soils',
      'Excess chemical phosphorus inhibits zinc and mycorrhizal nutrient uptake',
      'Runoff causes heavy eutrophication and algae blooms in village water bodies'
    ]
  },
  {
    id: 'single-super-phosphate',
    name: 'Single Super Phosphate (SSP - High Sulfur)',
    type: 'chemical',
    npkRatio: '0% N : 16% P : 0% K + 11% Sulfur + 19% Calcium',
    primaryNutrients: 'Water Soluble Phosphate, Elemental Sulfur, Calcium',
    actionSpeed: 'Immediate Spike',
    soilImpact: 'Degrades humus if unmanaged',
    bestUsedFor: 'Ideal basal fertilizer for Pulses (Chickpea, Arhar, Moong) and Oilseeds (Mustard, Groundnut, Soybean)',
    dosageGuide: '100 – 125 kg per acre applied during final land preparation',
    recipeOrApplication: 'Manufactured by treating rock phosphate with sulfuric acid. Contains 11% essential sulfur required for protein and oil synthesis.',
    advantages: [
      'Provides both vital phosphorus and 11% sulfur essential for pulse amino acids',
      'Superior to DAP for leguminous pulses and oilseed crops',
      'Provides generous calcium for root tip development'
    ],
    disadvantages: [
      'Requires higher volumetric bulk compared to DAP',
      'Susceptible to moisture caking during monsoon storage'
    ]
  }
];

export interface FertilizerRecommendation {
  cropId: string;
  soilType: string;
  stage: string;
  philosophy: 'organic' | 'chemical' | 'integrated';
  recommendedProducts: {
    productName: string;
    dosagePerAcre: string;
    applicationMethod: string;
    timing: string;
    purpose: string;
  }[];
  expertCaution: string;
  estimatedCostPerAcre: string;
  longTermSoilImpact: string;
  onFarmRecipe?: string;
}

export function calculateFertilizerPlan(
  crop: string,
  soil: string,
  stage: string,
  philosophy: 'organic' | 'chemical' | 'integrated'
): FertilizerRecommendation {
  const isPulse = crop.toLowerCase().includes('pulse') || crop.toLowerCase().includes('chickpea') || crop.toLowerCase().includes('gram') || crop.toLowerCase().includes('moong') || crop.toLowerCase().includes('pea');
  const isOilseed = crop.toLowerCase().includes('mustard') || crop.toLowerCase().includes('soybean') || crop.toLowerCase().includes('groundnut') || crop.toLowerCase().includes('rapeseed');
  const isPaddy = crop.toLowerCase().includes('paddy') || crop.toLowerCase().includes('rice');
  const isCorn = crop.toLowerCase().includes('corn') || crop.toLowerCase().includes('maize');
  const isCottonOrCane = crop.toLowerCase().includes('cotton') || crop.toLowerCase().includes('sugarcane');

  if (philosophy === 'organic') {
    if (isPulse) {
      return {
        cropId: crop,
        soilType: soil,
        stage: stage,
        philosophy: 'organic',
        recommendedProducts: [
          {
            productName: 'Rhizobium Legume Bio-Inoculant + Trichoderma',
            dosagePerAcre: '250g in 1L jaggery water (seed slurry) + 500g in compost',
            applicationMethod: 'Seed coating prior to drilling + furrow incorporation',
            timing: 'Pre-sowing or early seedling emergence',
            purpose: 'Establishes symbiotic root nodules that fix 35-45kg of free atmospheric nitrogen per acre'
          },
          {
            productName: 'Phosphate Rich Organic Manure (PROM) / Rock Phosphate',
            dosagePerAcre: '150 kg / acre',
            applicationMethod: 'Band placement 5cm below seed line in furrows',
            timing: 'Basal land preparation',
            purpose: 'Provides slow-release phosphorus essential for ATP energy in nitrogenase enzyme activity'
          },
          {
            productName: 'Natural Gypsum / Agricultural Sulfur Bio-Culture',
            dosagePerAcre: '100 kg / acre',
            applicationMethod: 'Broadcast and shallow incorporation into moist soil',
            timing: 'Early vegetative branching (Day 25)',
            purpose: 'Supplies essential sulfur required to synthesize methionine & cysteine pulse protein chains'
          },
          {
            productName: 'Boron-Enriched Panchagavya 3% Foliar Mist',
            dosagePerAcre: '3L Panchagavya + 100g solubor in 100L water',
            applicationMethod: 'Fine mist on upper canopy at flower bud initiation',
            timing: 'Pre-flowering (Day 45-50) and early pod fill',
            purpose: 'Stimulates pollen tube germination, halts flower drop, and ensures 100% pod filling'
          }
        ],
        expertCaution: 'CRITICAL: Never apply high nitrogen manure or urea to pulses! Excess nitrogen signals the plant to abort Rhizobium nodulation, destroying its natural nitrogen-fixing capacity.',
        estimatedCostPerAcre: '$14 – $24 (Lowest cash outlay; generates $45 worth of residual soil nitrogen)',
        longTermSoilImpact: 'Leaves 35kg/acre active fixed nitrogen in soil, elevates microbial diversity, and conditions soil for next cereal crop.',
        onFarmRecipe: 'Pulse Bio-Booster: Soak 100g Rhizobium + 100g PSB in 500ml of cold jaggery solution. Coat seeds evenly 30 mins before drilling into damp seedbeds.'
      };
    } else if (isOilseed) {
      return {
        cropId: crop,
        soilType: soil,
        stage: stage,
        philosophy: 'organic',
        recommendedProducts: [
          {
            productName: 'Aged Farmyard Manure Fortified with Gypsum',
            dosagePerAcre: '2 Tonnes FYM + 150 kg Agricultural Gypsum',
            applicationMethod: 'Broadcast during final land preparation',
            timing: 'Basal stage before sowing',
            purpose: 'Gypsum provides sulfur and calcium, driving enzymatic oil synthesis and glucosinolate aroma'
          },
          {
            productName: 'Azotobacter + PSB Liquid Consortia',
            dosagePerAcre: '1 Litre / acre in 100kg vermicompost',
            applicationMethod: 'Band placement near roots',
            timing: 'Rosette & early branching phase (Day 25)',
            purpose: 'Supplies biological nitrogen and releases locked soil phosphorus for root branching'
          },
          {
            productName: 'Fermented Jeevamrutha Bio-Slurry',
            dosagePerAcre: '200 Litres / acre',
            applicationMethod: 'Channel irrigation or filtered drip',
            timing: 'At first irrigation (Day 30) and pod elongation (Day 60)',
            purpose: 'Multiplies rhizosphere beneficial microbes, keeping leaves dark green and active'
          },
          {
            productName: 'Fermented Buttermilk (5%) + Vermiwash Foliar Spray',
            dosagePerAcre: '5L buttermilk + 2L vermiwash in 100L water',
            applicationMethod: 'Foliar spray in late afternoon',
            timing: 'Pre-flowering and siliqua pod formation',
            purpose: 'Shields leaves against white rust fungus and enhances oil percentage in ripening seeds'
          }
        ],
        expertCaution: 'Oilseeds are heavy sulfur consumers. Deficiency causes stunted pale yellow leaves and 20% lower oil extraction recovery.',
        estimatedCostPerAcre: '$20 – $32 / acre',
        longTermSoilImpact: 'Rebuilds organic matter, improves sulfur availability, and leaves zero chemical residues in cooking oils.'
      };
    } else if (isPaddy) {
      return {
        cropId: crop,
        soilType: soil,
        stage: stage,
        philosophy: 'organic',
        recommendedProducts: [
          {
            productName: 'Sesbania (Dhaincha) Green Manure Soil Incorporation',
            dosagePerAcre: '20 kg seed grown 45 days & ploughed into wet puddle',
            applicationMethod: 'Incorporate 15 days prior to transplanting',
            timing: 'Puddle land preparation',
            purpose: 'Adds 12 tonnes of succulent organic green biomass and 35kg biological nitrogen per acre'
          },
          {
            productName: 'Live Azolla Pinnata Water-Fern Culture',
            dosagePerAcre: '200 kg / acre fresh biomass inoculated in standing water',
            applicationMethod: 'Spread evenly across flooded paddy basin',
            timing: '7 days after seedling transplanting',
            purpose: 'Forms a living green blanket that fixes 30kg N/acre, suppresses weeds, and cools water table'
          },
          {
            productName: 'Fermented Jeevamrutha via Irrigation Channels',
            dosagePerAcre: '200 Litres / acre per irrigation',
            applicationMethod: 'Deliver via water inlet canal during flooding',
            timing: 'At active tillering (Day 40) and panicle emergence (Day 70)',
            purpose: 'Inoculates billions of living microbes that convert bound silt nutrients into absorbable ions'
          },
          {
            productName: 'Hardwood Ash + Panchagavya 3% Foliar Mist',
            dosagePerAcre: '50 kg wood ash broadcast + 3L Panchagavya spray',
            applicationMethod: 'Ash broadcast at tillering + Panchagavya mist at booting',
            timing: 'Booting / Flag leaf emergence stage',
            purpose: 'Natural bio-potassium and silica reinforce cell walls, making stems rigid against lodging'
          }
        ],
        expertCaution: 'Maintain 2-3cm shallow water film when culturing Azolla. Never let paddy soil dry out completely during flowering.',
        estimatedCostPerAcre: '$16 – $28 / acre',
        longTermSoilImpact: 'Permanent restoration of wetland aquatic microflora, zero groundwater nitrate leaching, high grain fragrance.'
      };
    } else {
      // General Organic (Wheat, Corn, Millets, Commercial)
      return {
        cropId: crop,
        soilType: soil,
        stage: stage,
        philosophy: 'organic',
        recommendedProducts: [
          {
            productName: 'Enriched Vermicompost + Neem Seed Cake Meal',
            dosagePerAcre: stage === 'Basal' ? '2.0 Tonnes Vermicompost + 100 kg Neem Cake' : '500 kg Vermicompost Top Dressing',
            applicationMethod: 'Broadcast and shallow rake into root zone',
            timing: 'Basal land preparation or early tillering',
            purpose: 'Supplies broad-spectrum organic carbon, slow-release nitrogen, and natural root pest protection'
          },
          {
            productName: 'Fermented Liquid Jeevamrutha Bio-Catalyst',
            dosagePerAcre: '200 Litres / acre',
            applicationMethod: 'Delivered via irrigation channel or 100-mesh drip filter',
            timing: 'Every 21 days during vegetative surge',
            purpose: 'Inoculates trillions of beneficial microbes to unlock soil minerals and stimulate earthworms'
          },
          {
            productName: 'Ghana-Jeevamrutha Dry Granules',
            dosagePerAcre: '250 kg / acre',
            applicationMethod: 'Band placement along plant rows',
            timing: 'Crown root initiation / active tillering phase',
            purpose: 'Sustained microbial activity and humic nourishment during root elongation'
          },
          {
            productName: 'Panchagavya 3% + Potassium Schoenite Foliar Mist',
            dosagePerAcre: '3L Panchagavya in 100L clean water',
            applicationMethod: 'Fine knapsack sprayer mist in early morning (6:30-8:30 AM)',
            timing: 'Jointing, flowering, and early grain filling',
            purpose: 'Accelerates chlorophyll photosynthesis, hardens stems, and increases grain test weight'
          }
        ],
        expertCaution: 'Always maintain soil moisture when applying bio-fertilizers. Avoid spraying botanical ferments under midday harsh sun.',
        estimatedCostPerAcre: '$18 – $35 / acre',
        longTermSoilImpact: 'Continuous soil carbon accumulation (0.4% to >1.5%), zero toxic residues, doubles earthworm populations.'
      };
    }
  } else if (philosophy === 'chemical') {
    if (isPulse) {
      return {
        cropId: crop,
        soilType: soil,
        stage: stage,
        philosophy: 'chemical',
        recommendedProducts: [
          {
            productName: 'Single Super Phosphate (SSP 16% P2O5 + 11% Sulfur)',
            dosagePerAcre: '100 – 125 kg / acre (Superior to DAP for Pulses)',
            applicationMethod: 'Drilled 5cm below seed line at sowing',
            timing: 'Basal stage only',
            purpose: 'Delivers water-soluble phosphorus for root development AND essential sulfur for pulse protein synthesis'
          },
          {
            productName: 'Starter Nitrogen via Urea (Low Controlled Dose)',
            dosagePerAcre: '15 – 20 kg / acre maximum (Never exceed!)',
            applicationMethod: 'Band placement with basal fertilizer',
            timing: 'At sowing as starter dose only',
            purpose: 'Provides seedling vigor before natural Rhizobium nodules form at Day 20'
          },
          {
            productName: 'Muriate of Potash (MOP 60% K2O)',
            dosagePerAcre: '20 kg / acre',
            applicationMethod: 'Basal furrow placement',
            timing: 'Basal stage',
            purpose: 'Imparts drought tolerance and regulates stomatal conductance in dry spells'
          },
          {
            productName: 'Foliar 2% DAP + 0.2% Solubor (Boron) Spray',
            dosagePerAcre: '2kg DAP + 200g Boron in 100L water per acre',
            applicationMethod: 'Foliar spray on leaf canopy at evening',
            timing: 'Pre-flowering (Day 45) and early pod formation (Day 70)',
            purpose: 'Boron stops flower shedding and stimulates 100% pod set; foliar DAP provides direct nitrogen to pods'
          }
        ],
        expertCaution: 'WARNING: Do NOT top-dress heavy urea on pulse crops! Excess nitrogen causes luxurious vegetative growth, attracts pod borers, and completely stops natural nodulation.',
        estimatedCostPerAcre: '$28 – $42 / acre',
        longTermSoilImpact: 'Moderate soil salinization risk; Single Super Phosphate leaves beneficial calcium and sulfate ions.'
      };
    } else if (isOilseed) {
      return {
        cropId: crop,
        soilType: soil,
        stage: stage,
        philosophy: 'chemical',
        recommendedProducts: [
          {
            productName: 'Basal NPK (12:32:16) Complex Fertilizer',
            dosagePerAcre: '60 kg / acre',
            applicationMethod: 'Drilled along seed lines',
            timing: 'Basal at sowing',
            purpose: 'Balanced starter nitrogen, phosphorus, and potassium for rapid seedling strike'
          },
          {
            productName: 'Bentonite Sulfur Granules (90% S) or Agricultural Gypsum',
            dosagePerAcre: '15 kg Bentonite Sulfur or 150 kg Gypsum',
            applicationMethod: 'Broadcast and incorporated before sowing',
            timing: 'Basal land preparation',
            purpose: 'Mandatory sulfur source driving fatty acid elongation and high oil recovery'
          },
          {
            productName: 'Neem-Coated Urea (46% N) Split Top-Dress',
            dosagePerAcre: '30 kg / acre',
            applicationMethod: 'Broadcast over damp soil followed by light irrigation',
            timing: 'At first irrigation (Day 30 after sowing)',
            purpose: 'Provides nitrogen surge during rosette and early branching stages'
          },
          {
            productName: 'Foliar Potassium Nitrate (13:0:45) Spray',
            dosagePerAcre: '1 kg in 100 Litres water per acre',
            applicationMethod: 'Fine mist spray at pod initiation',
            timing: 'Siliqua / pod elongation phase',
            purpose: 'Direct potassium and nitrate supply to maximize seed weight and oil content'
          }
        ],
        expertCaution: 'Never apply urea on dry soil; always time with irrigation to avoid ammonia gas volatilization.',
        estimatedCostPerAcre: '$38 – $55 / acre',
        longTermSoilImpact: 'Requires periodic organic matter buffering to avoid soil crusting and loss of porosity.'
      };
    } else {
      // General Chemical (Wheat, Rice, Corn, Cash Crops)
      return {
        cropId: crop,
        soilType: soil,
        stage: stage,
        philosophy: 'chemical',
        recommendedProducts: [
          {
            productName: 'Di-Ammonium Phosphate (DAP 18-46-0)',
            dosagePerAcre: '50 kg / acre',
            applicationMethod: 'Drilled 5cm below seed during sowing',
            timing: 'Basal stage only',
            purpose: 'High water-soluble phosphorus for rapid primary root elongation'
          },
          {
            productName: 'Neem-Coated Urea (46% N) - 3 Split Program',
            dosagePerAcre: '40 kg per split dose (Total 110-120 kg/acre)',
            applicationMethod: 'Even broadcast over moist soil',
            timing: 'Split: Basal (25%), Active Tillering (50%), Booting Stage (25%)',
            purpose: 'Supplies concentrated nitrogen surges to drive rapid green photosynthetic biomass'
          },
          {
            productName: 'Muriate of Potash (MOP 0-0-60)',
            dosagePerAcre: '25 kg / acre',
            applicationMethod: 'Broadcast with basal DAP',
            timing: 'Basal land preparation',
            purpose: 'Imparts drought resistance, straw stiffness, and grain plumpness'
          },
          {
            productName: 'Zinc Sulfate Monohydrate (33% Zn)',
            dosagePerAcre: '8 kg / acre',
            applicationMethod: 'Soil broadcast (Never mix directly in same bag with DAP)',
            timing: 'Basal land preparation',
            purpose: 'Prevents Khaira disease, chlorosis, and stunted leaf nodes in cereals'
          }
        ],
        expertCaution: 'Over-application of chemical urea causes soft foliage, heavy crop lodging during storms, and aphid vulnerability.',
        estimatedCostPerAcre: '$55 – $85 / acre',
        longTermSoilImpact: 'Progressive soil acidification, loss of native organic humus, and risk of groundwater nitrate contamination over years.'
      };
    }
  } else {
    // Integrated Nutrient Management (INM)
    return {
      cropId: crop,
      soilType: soil,
      stage: stage,
      philosophy: 'integrated',
      recommendedProducts: [
        {
          productName: 'Bio-NPK Liquid Consortia + 500kg Enriched Vermicompost',
          dosagePerAcre: '1 Litre consortia in 500kg compost',
          applicationMethod: 'Basal soil incorporation before sowing',
          timing: 'Land preparation',
          purpose: 'Inoculates living rhizobacteria that reduce synthetic chemical demand by 35% to 45%'
        },
        {
          productName: isPulse ? 'Single Super Phosphate (Reduced dose) + Gypsum' : 'Balanced Reduced Neem-Coated Urea',
          dosagePerAcre: isPulse ? '60 kg SSP + 50 kg Gypsum' : '25 kg Urea (Reduced by 40%)',
          applicationMethod: 'Band placement along crop rows',
          timing: 'Early vegetative / tillering / branching phase',
          purpose: 'Provides vital nutrients without burning delicate soil biology or sterilizing mycorrhizae'
        },
        {
          productName: 'Vermiwash + Potassium Schoenite Foliar Spray',
          dosagePerAcre: '10L Vermiwash + 1kg Potassium Schoenite in 100L water',
          applicationMethod: 'Foliar spray during pre-heading or flower bud initiation',
          timing: 'Pre-flowering / Booting stage',
          purpose: 'Delivers plant growth regulators and natural potassium to maximize grain fill and test weight'
        }
      ],
      expertCaution: 'The Integrated (INM) strategy provides the safest transitional bridge for commercial farms moving toward biological regeneration.',
      estimatedCostPerAcre: '$30 – $45 / acre (Optimized commercial yield with soil conservation)',
      longTermSoilImpact: 'Maintains commercial yield targets while steadily rebuilding organic carbon and reducing chemical runoff by 40%.'
    };
  }
}
