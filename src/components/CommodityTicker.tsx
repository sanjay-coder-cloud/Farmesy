import React from 'react';
import { TrendingUp, TrendingDown, Clock, Zap, ShieldCheck } from 'lucide-react';

export const CommodityTicker: React.FC = () => {
  const commodities = [
    { name: 'Wheat (Sharbati/Mill)', price: '$31.80 / qtl', change: '+2.4%', isUp: true, mandi: 'Khanna, Punjab' },
    { name: 'Basmati Rice (1121)', price: '$52.40 / qtl', change: '+1.8%', isUp: true, mandi: 'Taraori, Haryana' },
    { name: 'Yellow Mustard (Sarson)', price: '$58.20 / qtl', change: '+3.1%', isUp: true, mandi: 'Alwar, Rajasthan' },
    { name: 'Desi Chickpea (Chana)', price: '$55.50 / qtl', change: '+1.5%', isUp: true, mandi: 'Indore, MP' },
    { name: 'Cotton (Shankar-6)', price: '$74.10 / qtl', change: '-0.4%', isUp: false, mandi: 'Rajkot, Gujarat' },
    { name: 'Pigeon Pea (Tur / Arhar)', price: '$79.60 / qtl', change: '+4.2%', isUp: true, mandi: 'Akola, Maharashtra' },
    { name: 'Soybean (Yellow)', price: '$44.30 / qtl', change: '+0.8%', isUp: true, mandi: 'Dewas, MP' },
    { name: 'A2 Cow Milk (Fat 4.5%)', price: '$0.52 / L', change: '+2.0%', isUp: true, mandi: 'Amul Dairy Belt' },
    { name: 'Sugarcane (FRP Rate)', price: '$4.10 / qtl', change: '+0.0%', isUp: true, mandi: 'Muzaffarnagar, UP' },
    { name: 'Organic Vermicompost', price: '$85.00 / tonne', change: '+1.2%', isUp: true, mandi: 'National Bio-Hub' },
  ];

  return (
    <div className="bg-stone-950 border-b border-stone-800 text-stone-300 text-xs py-2 overflow-hidden relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Left Badge: Live Telemetry Indicator */}
        <div className="flex items-center gap-2 shrink-0 z-10 bg-stone-950 pr-4">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[11px] font-bold text-emerald-400 uppercase tracking-wider hidden sm:inline">
            Live Agri-Mandi Telemetry
          </span>
          <span className="font-mono text-[11px] font-bold text-emerald-400 uppercase tracking-wider sm:hidden">
            Live
          </span>
          <span className="text-stone-700">|</span>
        </div>

        {/* Scrolling or Overflowing Ticker Strip */}
        <div className="flex-1 overflow-x-auto no-scrollbar flex items-center gap-6 whitespace-nowrap">
          {commodities.map((item, index) => (
            <div key={index} className="inline-flex items-center gap-2 group hover:text-white transition-colors">
              <span className="text-stone-400 font-medium">{item.name}:</span>
              <span className="text-stone-100 font-bold font-mono">{item.price}</span>
              <span
                className={`inline-flex items-center text-[10px] font-bold font-mono ${
                  item.isUp ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {item.isUp ? <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> : <TrendingDown className="w-2.5 h-2.5 mr-0.5" />}
                {item.change}
              </span>
              <span className="text-[10px] text-stone-600 hidden md:inline">({item.mandi})</span>
              {index < commodities.length - 1 && <span className="text-stone-800 ml-3">·</span>}
            </div>
          ))}
        </div>

        {/* Right Info: Current Sowing Context */}
        <div className="hidden lg:flex items-center gap-2 shrink-0 z-10 bg-stone-950 pl-4 text-[11px] text-amber-400/90 font-medium">
          <Clock className="w-3 h-3 text-amber-400" />
          <span>Active Window: Rabi Sowing Pre-Drilling</span>
        </div>
      </div>
    </div>
  );
};
