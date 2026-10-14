import React, { useState } from 'react';
import { CommodityTicker } from './components/CommodityTicker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndianCropsDirectory } from './components/IndianCropsDirectory';
import { CropComparisonStudio } from './components/CropComparisonStudio';
import { AgroClimaticZoneExplorer } from './components/AgroClimaticZoneExplorer';
import { GrainsDeepDive } from './components/GrainsDeepDive';
import { CropDoctorAdvisor } from './components/CropDoctorAdvisor';
import { DairyCowMilk } from './components/DairyCowMilk';
import { NaturalVsChemical } from './components/NaturalVsChemical';
import { FertilizerAdvisor } from './components/FertilizerAdvisor';
import { VillageCropTracker } from './components/VillageCropTracker';
import { FarmRoiCalculator } from './components/FarmRoiCalculator';
import { PresentationModeModal } from './components/PresentationModeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isPresentationOpen, setIsPresentationOpen] = useState<boolean>(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      {/* Real-Time Agri-Mandi Commodity Ticker */}
      <CommodityTicker />

      {/* 3-Zone Top Navigation Contract */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenPresentation={() => setIsPresentationOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreIndianCrops={() => handleNavigate('indian-crops')}
          onExploreGrains={() => handleNavigate('grains')}
          onExploreFertilizers={() => handleNavigate('fertilizers')}
          onExploreVillages={() => handleNavigate('villages')}
        />

        {/* 1. Types of Crops Grown in India & Growing Seasons (Kharif, Rabi, Zaid) */}
        <IndianCropsDirectory />

        {/* 2. Interactive Side-by-Side Crop Comparison Studio */}
        <section id="comparator" className="py-12 bg-stone-900 text-stone-100 border-b border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CropComparisonStudio />
          </div>
        </section>

        {/* 3. National Regional Agro-Climatic Zones of India */}
        <section id="agro-zones" className="py-12 bg-stone-900 text-stone-100 border-b border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AgroClimaticZoneExplorer />
          </div>
        </section>

        {/* 4. Grains & Wheat Deep Dive */}
        <GrainsDeepDive />

        {/* 5. Precision Crop Doctor & Symptom Diagnosis (Natural vs Chemical Knockdown) */}
        <section id="crop-doctor" className="py-12 bg-stone-900 text-stone-100 border-b border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CropDoctorAdvisor />
          </div>
        </section>

        {/* 6. Natural vs Chemical Farming Matrix & Pros/Cons */}
        <NaturalVsChemical />

        {/* 7. Fertilizer Advisor & Dosing Calculator */}
        <FertilizerAdvisor />

        {/* 8. Live Village Crop Tracker & Current Stages */}
        <VillageCropTracker />

        {/* 9. Cow Milk & Dairy Intelligence */}
        <DairyCowMilk />

        {/* 10. Farm Economics & Manager ROI Simulator */}
        <FarmRoiCalculator />
      </main>

      {/* Quiet, Compliant Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPresentation={() => setIsPresentationOpen(true)}
      />

      {/* Executive Boardroom Slide Deck Modal */}
      <PresentationModeModal
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
      />
    </div>
  );
}
