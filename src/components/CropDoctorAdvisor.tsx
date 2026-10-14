import React, { useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  FlaskConical,
  Leaf,
  ShieldCheck,
  Sparkles,
  Zap,
  Info,
  Clock,
  Printer,
  Copy,
  Check
} from 'lucide-react';

interface DiagnosticCase {
  id: string;
  crop: string;
  issueName: string;
  symptomDescription: string;
  severity: 'Moderate' | 'Critical' | 'Severe';
  naturalSolution: {
    recipeName: string;
    ingredients: string;
    application: string;
    mechanism: string;
    advantage: string;
    costPerAcre: string;
  };
  chemicalSolution: {
    commercialCompound: string;
    activeIngredient: string;
    dosagePer15L: string;
    application: string;
    phiDays: number; // Pre-harvest interval
    warning: string;
    costPerAcre: string;
  };
  soilRehabilitation: string;
}

const DIAGNOSTIC_CASES: DiagnosticCase[] = [
  {
    id: 'wheat-yellow-rust',
    crop: 'Wheat (Golden Grain)',
    issueName: 'Yellow / Stripe Rust (Puccinia striiformis)',
    symptomDescription: 'Linear yellow-orange fungal pustules along leaf veins in stripes during cool, humid January-February weather. Reduces photosynthesis and shrivels kernels.',
    severity: 'Critical',
    naturalSolution: {
      recipeName: 'Fermented Sour Buttermilk (Khatta Chhachh) + Copper Infusion',
      ingredients: '5 Litres 7-day-old sour buttermilk fermented in a copper vessel with 200g turmeric powder and 100 Litres clean water.',
      application: 'Foliar spray during early morning before 10 AM. Repeat after 7 days.',
      mechanism: 'Lactic acid bacteria and natural copper ions disrupt fungal spore germination and coat leaf stomata with protective probiotic biofilm.',
      advantage: 'Zero chemical toxicity; enriches leaf cuticle with trace copper and bio-enzymes; zero residue in flour.',
      costPerAcre: '$3.50 – $5.00'
    },
    chemicalSolution: {
      commercialCompound: 'Tilt 25 EC / Folicur',
      activeIngredient: 'Propiconazole 25% EC or Tebuconazole 25.9% EC',
      dosagePer15L: '15 ml per 15-litre knapsack sprayer (200 ml in 200L water per acre)',
      application: 'Thorough canopy drenching at first appearance of yellow stripes.',
      phiDays: 30,
      warning: 'Causes chemical scorch if applied above 28°C; hazardous to pollinators and aquatic life; requires protective mask.',
      costPerAcre: '$12.00 – $16.00'
    },
    soilRehabilitation: 'Apply 150 kg/acre vermicompost enriched with Trichoderma viride bio-fungicide to destroy soil-borne resting spores.'
  },
  {
    id: 'chickpea-pod-borer',
    crop: 'Chickpea (Chana / Bengal Gram)',
    issueName: 'Gram Pod Borer (Helicoverpa armigera)',
    symptomDescription: 'Green/brown caterpillars bore circular holes into young chickpea pods and feed voraciously on developing edible seeds, destroying 30–50% of grain yield.',
    severity: 'Severe',
    naturalSolution: {
      recipeName: 'Five-Leaf Decoction (Panchapatti / Dashaparni Kashayam) + Bird Perches',
      ingredients: 'Extract of Neem, Datura, Papaya, Calotropis (Aak), and Custard Apple leaves fermented with cow urine + 15 T-shaped wooden bird perches per acre.',
      application: 'Spray 5% extract at 50% flowering; bird perches invite predatory drongos and mynas to devour larvae naturally.',
      mechanism: 'Potent phyto-alkaloids inhibit larval feeding (anti-feedant) and disrupt insect molting hormone ecdysone without harming bees.',
      advantage: 'Natural predator-prey balance restored; zero chemical resistance build-up; preserves wild bee pollination.',
      costPerAcre: '$2.00 – $4.00'
    },
    chemicalSolution: {
      commercialCompound: 'Coragen / Fame',
      activeIngredient: 'Chlorantraniliprole 18.5% SC or Flubendiamide 39.35% SC',
      dosagePer15L: '6 ml per 15-litre sprayer (60 ml per acre in 150L water)',
      application: 'High-pressure foliar mist targeting lower pod canopy.',
      phiDays: 14,
      warning: 'High synthetic cost; repeated applications breed super-resistant caterpillar generations; destroys beneficial ladybug beetles.',
      costPerAcre: '$18.00 – $24.00'
    },
    soilRehabilitation: 'Deep summer ploughing exposes pupae to scorching sun and birds; intercrop with Coriander or Mustard as trap barriers.'
  },
  {
    id: 'rice-stem-borer',
    crop: 'Rice (Paddy)',
    issueName: 'Yellow Stem Borer (Scirpophaga incertulas)',
    symptomDescription: 'Larvae bore into central paddy stems causing "Dead Hearts" in vegetative phase and unfilled white empty panicles ("White Ears") at maturity.',
    severity: 'Critical',
    naturalSolution: {
      recipeName: 'Pheromone Trap Network + Trichocards (Trichogramma japonicum)',
      ingredients: '8 Scirpo-lure pheromone traps per acre + 2 Trichocards (50,000 parasitoid egg wasps per card) stapled under rice leaves.',
      application: 'Install pheromone traps 20 days after transplanting; release parasitoid cards at 30 and 45 days.',
      mechanism: 'Egg parasitoid micro-wasps lay their own eggs inside stem borer eggs, destroying 85% of larvae before they ever hatch.',
      advantage: 'Completely biological; operates 24/7 without water or tractor fuel; zero chemical water table contamination.',
      costPerAcre: '$4.50 – $6.00'
    },
    chemicalSolution: {
      commercialCompound: 'Ferterra / Cartap Granules',
      activeIngredient: 'Cartap Hydrochloride 4% G or Chlorantraniliprole 0.4% GR',
      dosagePer15L: '4 kg granules broadcast per acre mixed with dry sand in standing water',
      application: 'Broadcast into 2-inch standing water; do not drain field for 48 hours.',
      phiDays: 21,
      warning: 'Extremely toxic to fish, freshwater crabs, and aquatic frogs in paddy ecosystem; groundwater leaching risk.',
      costPerAcre: '$14.00 – $18.00'
    },
    soilRehabilitation: 'Incorporate Azolla bio-fertilizer and rice straw compost; maintain fish-duck-paddy polyculture.'
  },
  {
    id: 'mustard-aphids',
    crop: 'Mustard & Rapeseed',
    issueName: 'Mustard Aphid (Lipaphis erysimi)',
    symptomDescription: 'Dense colonies of tiny greenish-grey aphids suck sap from inflorescences, tender pods, and leaves, causing curling and severe oil recovery drop.',
    severity: 'Moderate',
    naturalSolution: {
      recipeName: 'Neem Seed Kernel Extract (NSKE 5%) + Castor Oil Soap Emulsion',
      ingredients: '5 kg crushed neem seed kernels soaked overnight in 100L water + 200g khadi/potassium soap as wetting agent.',
      application: 'Spray thoroughly on flower clusters in late afternoon after honeybees retire.',
      mechanism: 'Azadirachtin repellent and growth inhibitor suffocates soft-bodied aphid nymphs while sparing ladybird beetles.',
      advantage: 'Maintains healthy pollinator populations essential for cross-pollinating mustard flowers; zero pesticide taste in oil.',
      costPerAcre: '$3.00 – $4.50'
    },
    chemicalSolution: {
      commercialCompound: 'Confidor / Actara',
      activeIngredient: 'Imidacloprid 17.8% SL or Thiamethoxam 25% WG',
      dosagePer15L: '5 ml Imidacloprid per 15-litre sprayer (50 ml per acre)',
      application: 'Foliar spray when aphid count crosses economic threshold level (ETL > 25 aphids/plant).',
      phiDays: 21,
      warning: 'Neonicotinoid active is lethal to honeybees; strictly prohibited from spraying during active morning bee pollination!',
      costPerAcre: '$8.00 – $11.00'
    },
    soilRehabilitation: 'Apply 20 kg/acre elemental sulfur or gypsum to strengthen mustard leaf cell walls against puncture.'
  },
  {
    id: 'tomato-blight',
    crop: 'Tomato & Vegetables',
    issueName: 'Early & Late Blight (Alternaria / Phytophthora)',
    symptomDescription: 'Concentric dark target spots on lower leaves spreading to stems and rotting fruit with greasy water-soaked brown patches.',
    severity: 'Critical',
    naturalSolution: {
      recipeName: 'Pseudomonas fluorescens + Panchagavya Foliar Shield',
      ingredients: '1 kg Pseudomonas fluorescens bio-culture + 3 Litres fresh Panchagavya diluted in 100 Litres water.',
      application: 'Spray every 10 days starting from 20 days after seedling transplanting.',
      mechanism: 'Beneficial bacteria colonize leaf surface, producing antibiotic siderophores that starve and crowd out blight pathogens.',
      advantage: 'Boosts plant immunity, elevates lycopene fruit firmness, and extends harvest shelf life by 5 days.',
      costPerAcre: '$4.00 – $6.50'
    },
    chemicalSolution: {
      commercialCompound: 'Ridomil Gold / Antracol',
      activeIngredient: 'Metalaxyl 4% + Mancozeb 64% WP or Propineb 70% WP',
      dosagePer15L: '35g per 15-litre sprayer (500g per acre in 200L water)',
      application: 'Preventative and curative foliar canopy spray at first signs of cloudiness and high humidity.',
      phiDays: 10,
      warning: 'Mancozeb is a synthetic dithiocarbamate with skin/eye irritation warnings; do not harvest within 10 days of spray.',
      costPerAcre: '$14.00 – $19.00'
    },
    soilRehabilitation: 'Drip fertigation with bio-digested cow urine slurry (10%) and staking vines off wet soil.'
  }
];

export const CropDoctorAdvisor: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('wheat-yellow-rust');
  const [copiedText, setCopiedText] = useState<boolean>(false);

  const activeCase = DIAGNOSTIC_CASES.find((c) => c.id === selectedCaseId) || DIAGNOSTIC_CASES[0];

  const handleCopyRecipe = () => {
    const text = `Farmesy Crop Prescription:\nCrop: ${activeCase.crop}\nIssue: ${activeCase.issueName}\n\n100% Organic Protocol:\nRecipe: ${activeCase.naturalSolution.recipeName}\nIngredients: ${activeCase.naturalSolution.ingredients}\nApplication: ${activeCase.naturalSolution.application}\n\nChemical Protocol:\nCompound: ${activeCase.chemicalSolution.commercialCompound}\nDosage: ${activeCase.chemicalSolution.dosagePer15L}\nSafety Pre-Harvest Interval: ${activeCase.chemicalSolution.phiDays} days\n\nSoil Rehab: ${activeCase.soilRehabilitation}`;
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 3000);
  };

  return (
    <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-stone-950 border border-stone-800 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
            <FlaskConical className="w-4 h-4 text-emerald-400" />
            <span>Precision Crop Doctor & Field Diagnosis</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
            Real-Time Crop Symptom & Treatment Matrix
          </h3>
          <p className="text-stone-400 text-xs sm:text-sm mt-1">
            Diagnose common pest and pathogen threats, evaluate natural biological remedies versus synthetic chemical knockdowns, and preserve long-term soil ecology.
          </p>
        </div>

        <button
          onClick={handleCopyRecipe}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 text-xs font-semibold rounded-lg transition-colors self-start md:self-auto"
        >
          {copiedText ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Prescription Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-amber-400" />
              <span>Copy Treatment Card</span>
            </>
          )}
        </button>
      </div>

      {/* Case Selector Tabs */}
      <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {DIAGNOSTIC_CASES.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedCaseId(item.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border flex items-center gap-2 ${
              selectedCaseId === item.id
                ? 'bg-emerald-950 border-emerald-500 text-white shadow-sm ring-1 ring-emerald-500/50'
                : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-200'
            }`}
          >
            <span>{item.crop.split(' ')[0]}</span>
            <span className="text-[10px] text-stone-500">·</span>
            <span className="text-stone-300 font-normal">{item.issueName.split(' ')[0]} {item.issueName.split(' ')[1] || ''}</span>
          </button>
        ))}
      </div>

      {/* Active Diagnostic Detail */}
      <div className="mt-6 p-6 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-6">
        
        {/* Symptom Header */}
        <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">{activeCase.crop}</span>
              <span className="text-stone-600">·</span>
              <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                activeCase.severity === 'Severe'
                  ? 'bg-rose-950 text-rose-300 border border-rose-800'
                  : 'bg-amber-950 text-amber-300 border border-amber-800'
              }`}>
                {activeCase.severity} Threat Level
              </span>
            </div>
            <h4 className="text-xl font-bold font-display text-white mt-1">{activeCase.issueName}</h4>
            <p className="text-stone-300 text-xs mt-1 leading-relaxed max-w-3xl">
              {activeCase.symptomDescription}
            </p>
          </div>
        </div>

        {/* Dual Prescription: Natural vs Chemical */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Natural Solution Card */}
          <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-600/50 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-800/60">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-sm text-emerald-300">100% Organic Bio-Protocol</span>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                Cost: {activeCase.naturalSolution.costPerAcre} / acre
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <strong className="text-emerald-300 block text-[11px] uppercase">Recipe / Bio-Extract:</strong>
                <p className="text-white font-medium mt-0.5">{activeCase.naturalSolution.recipeName}</p>
              </div>

              <div>
                <strong className="text-stone-400 block text-[11px] uppercase">Ingredients & Ratio:</strong>
                <p className="text-stone-300 mt-0.5 leading-relaxed">{activeCase.naturalSolution.ingredients}</p>
              </div>

              <div>
                <strong className="text-stone-400 block text-[11px] uppercase">Application Protocol:</strong>
                <p className="text-stone-300 mt-0.5 leading-relaxed">{activeCase.naturalSolution.application}</p>
              </div>

              <div>
                <strong className="text-stone-400 block text-[11px] uppercase">Biological Mechanism:</strong>
                <p className="text-stone-300 mt-0.5 leading-relaxed">{activeCase.naturalSolution.mechanism}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-700/60 text-xs flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-emerald-200 text-[11px] leading-relaxed">
                <strong className="text-emerald-300">Key Advantage:</strong> {activeCase.naturalSolution.advantage}
              </p>
            </div>
          </div>

          {/* Chemical Solution Card */}
          <div className="p-5 rounded-2xl bg-stone-950/90 border border-stone-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-amber-400" />
                <span className="font-bold text-sm text-amber-300">Chemical Intervention (Emergency)</span>
              </div>
              <span className="text-xs font-mono text-amber-400 font-bold">
                Cost: {activeCase.chemicalSolution.costPerAcre} / acre
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <strong className="text-amber-300 block text-[11px] uppercase">Commercial Compound:</strong>
                <p className="text-white font-medium mt-0.5">{activeCase.chemicalSolution.commercialCompound}</p>
              </div>

              <div>
                <strong className="text-stone-400 block text-[11px] uppercase">Active Ingredient:</strong>
                <p className="text-stone-300 font-mono mt-0.5">{activeCase.chemicalSolution.activeIngredient}</p>
              </div>

              <div>
                <strong className="text-stone-400 block text-[11px] uppercase">Knapsack Spray Dosage:</strong>
                <p className="text-stone-200 font-bold mt-0.5">{activeCase.chemicalSolution.dosagePer15L}</p>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-900 border border-stone-800">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-stone-400">Pre-Harvest Interval (PHI):</span>
                <span className="text-amber-300 font-bold font-mono">
                  {activeCase.chemicalSolution.phiDays} Days Mandatory Wait
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/60 text-xs flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-amber-200 text-[11px] leading-relaxed">
                <strong className="text-amber-300">Safety Warning:</strong> {activeCase.chemicalSolution.warning}
              </p>
            </div>
          </div>
        </div>

        {/* Long-Term Soil Recovery Recommendation */}
        <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-xs flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-emerald-300 uppercase tracking-wider block text-[11px]">
              Post-Infestation Soil Rehabilitation Protocol:
            </strong>
            <p className="text-stone-300 mt-1 leading-relaxed">
              {activeCase.soilRehabilitation}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
