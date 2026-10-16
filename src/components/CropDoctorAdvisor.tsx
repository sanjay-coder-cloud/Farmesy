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
  Check,
  Sprout
} from 'lucide-react';
import { getCropImage } from '../data/cropImages';

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
  const caseImg = getCropImage(activeCase.crop);

  const handleCopyRecipe = () => {
    const text = `Farmesy Crop Prescription:\nCrop: ${activeCase.crop}\nIssue: ${activeCase.issueName}\n\n100% Organic Protocol:\nRecipe: ${activeCase.naturalSolution.recipeName}\nIngredients: ${activeCase.naturalSolution.ingredients}\nApplication: ${activeCase.naturalSolution.application}\n\nChemical Protocol:\nCompound: ${activeCase.chemicalSolution.commercialCompound}\nDosage: ${activeCase.chemicalSolution.dosagePer15L}\nSafety Pre-Harvest Interval: ${activeCase.chemicalSolution.phiDays} days\n\nSoil Rehab: ${activeCase.soilRehabilitation}`;
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 3000);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-150">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <FlaskConical className="w-3.5 h-3.5 text-emerald-600" />
            <span>Precision Crop Doctor & Field Diagnosis</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1">
            Real-Time Crop Symptom & Treatment Matrix
          </h3>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl leading-relaxed">
            Diagnose common pest and pathogen threats, evaluate natural biological remedies versus synthetic chemical knockdowns, and preserve long-term soil ecology.
          </p>
        </div>

        <button
          onClick={handleCopyRecipe}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200 hover:border-emerald-300 text-slate-700 text-xs font-semibold rounded-xl transition-all self-start md:self-auto shadow-2xs hover:shadow-xs"
        >
          {copiedText ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Prescription Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-slate-500" />
              <span>Copy Treatment Card</span>
            </>
          )}
        </button>
      </div>

      {/* Case Selector Tabs */}
      <div className="mt-8 flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar">
        {DIAGNOSTIC_CASES.map((item) => {
          const isSelected = selectedCaseId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedCaseId(item.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border flex items-center gap-2 ${
                isSelected
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-md ring-2 ring-emerald-500/30'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/50 hover:text-emerald-900 shadow-2xs'
              }`}
            >
              <span className="font-bold">{item.crop.split(' ')[0]}</span>
              <span className={`text-[10px] ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`}>·</span>
              <span className={`${isSelected ? 'text-emerald-50' : 'text-slate-600'}`}>{item.issueName.split(' ')[0]} {item.issueName.split(' ')[1] || ''}</span>
            </button>
          );
        })}
      </div>

      {/* Active Diagnostic Detail */}
      <div className="mt-8 rounded-2xl border border-slate-200 shadow-sm overflow-hidden bg-white">
        {/* Symptom Banner with Crop Photo */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100">
          <img
            src={caseImg}
            alt={activeCase.issueName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-white/90 text-slate-800 text-xs font-bold backdrop-blur-xs shadow-xs">
              {activeCase.crop}
            </span>

            <span className={`text-xs font-bold uppercase px-3 py-1 rounded-full backdrop-blur-xs shadow-xs ${
              activeCase.severity === 'Critical'
                ? 'bg-rose-500 text-white'
                : 'bg-amber-500 text-white'
            }`}>
              {activeCase.severity} Threat Level
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h4 className="text-2xl sm:text-3xl font-bold font-display drop-shadow-xs">
              {activeCase.issueName}
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-3xl leading-relaxed drop-shadow-2xs">
              {activeCase.symptomDescription}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Dual Prescription: Natural vs Chemical */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Natural Solution Card */}
            <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 shadow-xs space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-emerald-200">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-emerald-600" />
                    <span className="font-bold text-sm text-emerald-950">100% Organic Bio-Protocol</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs">
                    {activeCase.naturalSolution.costPerAcre} / acre
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-xs">
                  <div>
                    <strong className="text-emerald-900 block text-[11px] uppercase tracking-wide">Recipe / Bio-Extract:</strong>
                    <p className="text-slate-800 font-semibold mt-0.5">{activeCase.naturalSolution.recipeName}</p>
                  </div>

                  <div>
                    <strong className="text-emerald-900 block text-[11px] uppercase tracking-wide">Ingredients Formulation:</strong>
                    <p className="text-slate-700 mt-0.5 leading-relaxed">{activeCase.naturalSolution.ingredients}</p>
                  </div>

                  <div>
                    <strong className="text-emerald-900 block text-[11px] uppercase tracking-wide">Application Timing:</strong>
                    <p className="text-slate-700 mt-0.5">{activeCase.naturalSolution.application}</p>
                  </div>

                  <div>
                    <strong className="text-emerald-900 block text-[11px] uppercase tracking-wide">Biological Mechanism:</strong>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">{activeCase.naturalSolution.mechanism}</p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-emerald-200 text-xs text-emerald-900 font-medium flex items-center gap-2 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{activeCase.naturalSolution.advantage}</span>
              </div>
            </div>

            {/* Chemical Knockdown Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <FlaskConical className="w-5 h-5 text-slate-700" />
                    <span className="font-bold text-sm text-slate-900">Synthetic Chemical Knockdown</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-800 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                    {activeCase.chemicalSolution.costPerAcre} / acre
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-xs">
                  <div>
                    <strong className="text-slate-900 block text-[11px] uppercase tracking-wide">Commercial Compound:</strong>
                    <p className="text-slate-800 font-semibold mt-0.5">{activeCase.chemicalSolution.commercialCompound}</p>
                  </div>

                  <div>
                    <strong className="text-slate-900 block text-[11px] uppercase tracking-wide">Active Ingredient & Dosage:</strong>
                    <p className="text-slate-700 mt-0.5">{activeCase.chemicalSolution.activeIngredient} · {activeCase.chemicalSolution.dosagePer15L}</p>
                  </div>

                  <div>
                    <strong className="text-slate-900 block text-[11px] uppercase tracking-wide">Application Regime:</strong>
                    <p className="text-slate-700 mt-0.5">{activeCase.chemicalSolution.application}</p>
                  </div>

                  <div>
                    <strong className="text-slate-900 block text-[11px] uppercase tracking-wide">Pre-Harvest Interval (PHI):</strong>
                    <p className="text-slate-700 mt-0.5">{activeCase.chemicalSolution.phiDays} mandatory withdrawal days before consumption</p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-medium flex items-center gap-2 shadow-2xs">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{activeCase.chemicalSolution.warning}</span>
              </div>
            </div>
          </div>

          {/* Soil Rehabilitation Strategy */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-emerald-50/60 to-teal-50 border border-emerald-200 text-xs shadow-2xs">
            <span className="font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-2 mb-1 text-sm">
              <Sprout className="w-4 h-4 text-emerald-600" />
              Long-Term Soil Rehabilitation Directive:
            </span>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">{activeCase.soilRehabilitation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
