import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Shield, Sparkles, X } from 'lucide-react';

interface PresentationModeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SLIDES = [
  {
    slideNumber: 1,
    title: 'Farmesy Executive Briefing',
    subtitle: 'The Living Science of Grains, Dairy & Soil Regeneration',
    keyTakeaway: 'Transforming commercial agriculture from high-cost synthetic dependency to resilient, high-margin biological prosperity.',
    bullets: [
      'Comprehensive cultivation blueprints for Wheat, Paddy, Millets, and Silage Corn.',
      'Scientific Bovine Dairy Management optimizing cow milk FAT (4.5%) and SNF (9.0%).',
      'Dynamic Regional Crop Tracking across 8 agricultural village clusters.',
      'Data-backed Natural vs Chemical comparative economics and soil health curves.'
    ],
    tag: 'Executive Thesis'
  },
  {
    slideNumber: 2,
    title: '10 Crop Typologies & 3 Seasons of India',
    subtitle: 'From Food & Fibre to Cash, Oilseeds, Pulses & High-Protein Fodder',
    keyTakeaway: 'National food security and commercial export earnings rely on synchronized agro-climatic seasonal discipline across Kharif, Rabi, and Zaid.',
    bullets: [
      '10 Foundational Classes: Food crops (Rice/Wheat), Fibre (Cotton/Jute), Cash (Sugarcane), Oilseeds (Mustard/Soybean), Pulses (Chickpea/Tur), Vegetables, Fruits, Plantations (Tea/Coffee), Medicinals, and Fodder (Napier/Berseem).',
      'Kharif Monsoon (June–Nov): Heat & humidity loving crops (Rice, Maize, Cotton, Soybean) driven by South-West monsoon.',
      'Rabi Winter (Oct–April): Cool-season grain filling (Wheat, Mustard, Chickpea) with crisp night photoperiods.',
      'Zaid Summer (March–June): High-efficiency catch crops (Watermelon, Cucumber, Summer Moong) filling warm fallow windows.'
    ],
    tag: 'National Crop Index'
  },
  {
    slideNumber: 3,
    title: 'Grain & Wheat Cultivation Architecture',
    subtitle: 'Mastering the 6 Critical Stages from CRI to Golden Harvest',
    keyTakeaway: 'Wheat yields of 20+ quintals/acre can be achieved naturally with zero chemical pesticide residues.',
    bullets: [
      'Crown Root Initiation (Day 21) is non-negotiable: water stress here cuts tillering by 40%.',
      'Beejamrutha & Trichoderma seed coatings eliminate loose smut and soil-borne wilt.',
      'Millet integration (Ragi/Bajra) delivers climate resilience and 340mg/100g natural calcium.',
      'Unpolished traditional grains retain critical selenium, manganese, and insoluble fiber.'
    ],
    tag: 'Crops Blueprint'
  },
  {
    slideNumber: 4,
    title: 'Natural vs Chemical: The Agronomist Lens',
    subtitle: 'Objective Advantages & Disadvantages Breakdown',
    keyTakeaway: 'Chemical inputs offer Year 1 speed; Natural farming builds compound ecological and financial wealth by Year 3.',
    bullets: [
      'Soil Carbon: Natural farming elevates organic carbon from 0.4% to >1.5%, doubling water holding capacity.',
      'Input Costs: Eliminating synthetic bagged fertilizers slashes cash outlays by 60% – 75%.',
      'Chemical Penalty: Continuous urea/DAP acidifies topsoil, breeds pesticide resistance, and leaches nitrates.',
      'Premium Realization: Certified organic grains command 25% – 50% price premiums in commercial exchanges.'
    ],
    tag: 'Agronomic Matrix'
  },
  {
    slideNumber: 5,
    title: 'Smart Fertilizer Dosing & On-Farm Recipes',
    subtitle: 'Bio-Catalysts vs Synthetic Mineral Salts',
    keyTakeaway: 'Jeevamrutha and vermicompost unlock billions of native soil microbes that solubilize fixed minerals.',
    bullets: [
      'Jeevamrutha: 200L/acre provides billions of beneficial CFUs, auxins, and gibberellins at near-zero cost.',
      'Neem Seed Cake: Acts as natural nitrification inhibitor, preventing nitrogen evaporation.',
      'Controlled Synthetic Warning: Never overdose prilled urea; luxury consumption invites severe pest attacks.',
      'Integrated Transition: Combining 35% reduced synthetic fertilizer with bio-consortia cushions yields during transition.'
    ],
    tag: 'Nutrition Strategy'
  },
  {
    slideNumber: 6,
    title: 'The Dairy Engine: Cow Milk & Herd Health',
    subtitle: 'Optimizing Fat, SNF & Closed-Loop Farm Ecology',
    keyTakeaway: 'Dairy cows are the bio-refinery of the regenerative farm: producing liquid gold milk and rich field manure.',
    bullets: [
      'Balanced TMR: 60:40 roughage-to-concentrate ratio protects rumen pH and elevates butterfat to 4.5%–4.8%.',
      'Indigenous Desi Breeds: Gir & Sahiwal yield A2 beta-casein milk with superior human digestion profiles.',
      'Milking Hygiene: 5-step clean milking protocol eliminates mastitis and guarantees low somatic cell counts.',
      'Circular Integration: 10 milking cows generate sufficient daily bio-slurry to fertilize 15 acres of food grains.'
    ],
    tag: 'Dairy Science'
  },
  {
    slideNumber: 7,
    title: 'Live Village Regional Radar',
    subtitle: 'Current Growth Stages Across Key Agricultural Belts',
    keyTakeaway: 'Direct agro-climatic intelligence from leading village farm clusters in real time.',
    bullets: [
      'Kheri Gurna (Punjab): Wheat in Dough Stage (Harvest in 18 days) with zero-stubble residue mulching.',
      'Alanganallur (Tamil Nadu): SRI Paddy at Flowering with live Azolla fern biological nitrogen fixation.',
      'Haveri (Karnataka): Ragi Millets at active Tillering with drought-resistant intercropping.',
      'Baramati (Maharashtra): Drip fertigated Maize silage feeding high-producing dairy cooperatives.'
    ],
    tag: 'Field Intelligence'
  },
  {
    slideNumber: 8,
    title: 'Farm Manager Financial ROI & Verdict',
    subtitle: '5-Year Wealth Multiplication & Legacy Stewardship',
    keyTakeaway: 'Biological agriculture isn’t just ethical—it is the highest-margin commercial strategy for modern farm managers.',
    bullets: [
      'Profit Expansion: 50-acre model generates an extra $35,000+ net operating profit annually.',
      '5-Year Capital Surplus: Cumulative advantage exceeds $175,000+ compared to chemical input attrition.',
      'Asset Valuation: Farmland with >1.5% organic carbon is substantially more drought-proof and valuable.',
      'The Farmesy Directive: Lead the industry with data, respect the soil microbiome, and inspire the next generation.'
    ],
    tag: 'Manager Horizon'
  }
];

export const PresentationModeModal: React.FC<PresentationModeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentSlide = SLIDES[currentSlideIndex];

  return (
    <div className="fixed inset-0 z-50 bg-stone-950 flex flex-col justify-between text-stone-100 p-6 sm:p-12 animate-in fade-in duration-200">
      {/* Top Presentation Bar */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
            F
          </div>
          <div>
            <span className="text-sm font-bold tracking-tight text-white font-display">
              Farmesy Boardroom Presentation
            </span>
            <span className="text-xs text-stone-400 block">
              Slide {currentSlide.slideNumber} of {SLIDES.length} · {currentSlide.tag}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-stone-400 hidden sm:inline">
            Use Arrow Keys ← → or click buttons
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
            title="Exit Presentation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Content Canvas */}
      <div className="max-w-5xl mx-auto w-full my-auto py-8">
        <div className="inline-block text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800 px-3 py-1 rounded-md mb-4">
          {currentSlide.tag}
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
          {currentSlide.title}
        </h2>

        <p className="text-lg sm:text-xl text-emerald-400 font-medium mt-3">
          {currentSlide.subtitle}
        </p>

        {/* Core Takeaway Banner */}
        <div className="my-8 p-5 rounded-2xl bg-stone-900 border border-stone-800 text-stone-200 text-sm sm:text-base flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block mb-0.5">Executive Principle:</strong>
            <span>{currentSlide.keyTakeaway}</span>
          </div>
        </div>

        {/* Bullets List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentSlide.bullets.map((bullet, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 text-xs sm:text-sm text-stone-300 flex items-start gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-emerald-800">
                {idx + 1}
              </div>
              <span className="leading-relaxed">{bullet}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="flex items-center justify-between border-t border-stone-800 pt-4">
        {/* Slide Indicators */}
        <div className="flex items-center gap-1.5">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlideIndex
                  ? 'w-8 bg-emerald-400'
                  : 'w-2 bg-stone-700 hover:bg-stone-500'
              }`}
              title={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentSlideIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentSlideIndex === 0}
            className={`p-2.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              currentSlideIndex === 0
                ? 'border-stone-800 text-stone-600 cursor-not-allowed'
                : 'border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={() => setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1))}
            disabled={currentSlideIndex === SLIDES.length - 1}
            className={`p-2.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              currentSlideIndex === SLIDES.length - 1
                ? 'border-stone-800 text-stone-600 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-500 border-emerald-600 text-white shadow-sm'
            }`}
          >
            <span>Next Slide</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
