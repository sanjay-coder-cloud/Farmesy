import React, { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Compass,
  ShieldCheck,
  Sun,
  Sparkles,
  Layers,
  CheckCircle2,
  Sliders,
  Wind
} from 'lucide-react';

interface HeroProps {
  onExploreGrains: () => void;
  onExploreFertilizers: () => void;
  onExploreVillages: () => void;
  onExploreIndianCrops?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreGrains,
  onExploreFertilizers,
  onExploreVillages,
  onExploreIndianCrops,
}) => {
  // Backdrop mode: 'rice-paddy' (2nd image from user upload), 'cotton-sunset', or 'split-fusion'
  const [backdropMode, setBackdropMode] = useState<'rice-paddy' | 'cotton-sunset' | 'split-fusion'>('rice-paddy');
  const [sunGlowEnabled, setSunGlowEnabled] = useState<boolean>(true);
  const [particlesEnabled, setParticlesEnabled] = useState<boolean>(true);

  // Card backdrop mode: 2nd Image (Lush Green Rice Panicle in Paddy Field) applied to 1st image background
  const [cardSpecimen, setCardSpecimen] = useState<'rice-paddy' | 'cotton'>('rice-paddy');
  const [cardGlassStyle, setCardGlassStyle] = useState<'cool-glass' | 'vivid' | 'deep'>('cool-glass');
  const [activeGrainMetric, setActiveGrainMetric] = useState<string>('panicle');

  return (
    <section className="relative text-stone-100 overflow-hidden border-b border-stone-800 transition-colors duration-700 bg-stone-950">
      {/* =========================================================================
          DYNAMIC BACKGROUND LAYER (The 2nd Image: Blooming Cotton Field at Golden Sunset)
          Applied to the 1st image background / Hero Showcase
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {backdropMode === 'cotton-sunset' || backdropMode === 'split-fusion' ? (
          /* 2ND IMAGE: Cotton picking season. Blooming cotton field. Close up of the crop before the harvest, under a golden sunset light */
          <div className="absolute inset-0 transition-opacity duration-1000">
            {/* Sunset Sky Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-b from-[#2b1104] via-[#451a03] to-[#1c1917] transition-all duration-700 ${
                sunGlowEnabled ? 'opacity-90' : 'opacity-70'
              }`}
            />

            {/* Glowing Golden Sunset Solar Disc & Radiant Flare */}
            <div className="absolute top-[-40px] right-1/4 sm:right-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-500/25 via-yellow-500/20 to-orange-600/10 blur-3xl pointer-events-none animate-sunset-glow" />
            <div className="absolute top-10 right-1/4 sm:right-1/3 w-48 h-48 rounded-full bg-gradient-to-r from-amber-300/40 via-yellow-200/50 to-orange-400/30 blur-2xl pointer-events-none" />

            {/* Comprehensive SVG Canvas: Blooming Cotton Field at Golden Sunset */}
            <svg
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 700"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                {/* Sunset sky gradient */}
                <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2e1005" stopOpacity="0.95" />
                  <stop offset="35%" stopColor="#78350f" stopOpacity="0.75" />
                  <stop offset="65%" stopColor="#b45309" stopOpacity="0.55" />
                  <stop offset="85%" stopColor="#d97706" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#1c1917" stopOpacity="0.95" />
                </linearGradient>

                {/* Golden sun radial */}
                <radialGradient id="sunBurst" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
                  <stop offset="20%" stopColor="#fde047" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#b45309" stopOpacity="0" />
                </radialGradient>

                {/* Cotton Boll Fluffy Gradient */}
                <radialGradient id="cottonFluff" cx="40%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="60%" stopColor="#fef3c7" stopOpacity="0.95" />
                  <stop offset="85%" stopColor="#fde68a" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#d97706" stopOpacity="0.4" />
                </radialGradient>

                {/* Calyx & Bracts Dried Brown Husk */}
                <linearGradient id="bractGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#78350f" />
                  <stop offset="50%" stopColor="#451a03" />
                  <stop offset="100%" stopColor="#1c1917" />
                </linearGradient>

                {/* Golden Rim Light for Cotton Stalks */}
                <linearGradient id="goldenStalk" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#451a03" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Sky base */}
              <rect width="1440" height="700" fill="url(#skyGrad)" />

              {/* Radiant Sun in Golden Hour */}
              <circle cx="920" cy="220" r="140" fill="url(#sunBurst)" />
              <circle cx="920" cy="220" r="42" fill="#fffbeb" opacity="0.95" />

              {/* Distant farm ridges and village tree silhouettes */}
              <path
                d="M 0 460 Q 280 430 520 450 T 1050 440 T 1440 455 L 1440 700 L 0 700 Z"
                fill="#261005"
                opacity="0.65"
              />
              <path
                d="M 0 500 Q 320 470 680 495 T 1200 485 T 1440 505 L 1440 700 L 0 700 Z"
                fill="#1c0d02"
                opacity="0.8"
              />

              {/* Distant Acacia Tree Silhouettes */}
              <path
                d="M 280 440 Q 285 410 270 380 Q 295 385 320 375 Q 315 410 325 440 Z"
                fill="#180b02"
                opacity="0.75"
              />
              <ellipse cx="295" cy="375" rx="35" ry="14" fill="#180b02" opacity="0.8" />

              <path
                d="M 1180 460 Q 1185 425 1170 395 Q 1195 400 1215 390 Q 1210 425 1220 460 Z"
                fill="#180b02"
                opacity="0.75"
              />
              <ellipse cx="1195" cy="390" rx="38" ry="16" fill="#180b02" opacity="0.8" />

              {/* Middleground: Dense Cotton Field Rows under sunset */}
              <g opacity="0.75">
                {/* Horizontal undulating rows */}
                <path d="M 0 540 Q 360 525 720 535 T 1440 530" stroke="#f59e0b" strokeWidth="1.2" opacity="0.3" fill="none" />
                <path d="M 0 580 Q 360 565 720 575 T 1440 570" stroke="#fbbf24" strokeWidth="1.4" opacity="0.35" fill="none" />
                
                {/* Midground Cotton Bolls dots glowing in rows */}
                {Array.from({ length: 28 }).map((_, i) => {
                  const cx = 40 + i * 50 + (i % 3) * 12;
                  const cy = 520 + (i % 5) * 14 + (i % 2) * 8;
                  const r = 4 + (i % 3) * 2;
                  return (
                    <g key={`mid-cotton-${i}`}>
                      <circle cx={cx} cy={cy} r={r} fill="#ffffff" opacity="0.85" />
                      <circle cx={cx - 1} cy={cy - 1} r={r * 0.7} fill="#fef3c7" opacity="0.9" />
                    </g>
                  );
                })}
              </g>

              {/* Foreground: Artistic Close-Up of Blooming Cotton Stalk & Open Bolls */}
              {/* Left Foreground Cotton Branch */}
              <g transform="translate(60, 360)" className="animate-cotton-sway" opacity="0.85">
                {/* Main woody stalk */}
                <path d="M 40 320 Q 70 200 60 80 Q 55 20 85 0" stroke="url(#goldenStalk)" strokeWidth="6" strokeLinecap="round" fill="none" />
                <path d="M 60 160 Q 110 130 150 110" stroke="url(#goldenStalk)" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M 55 240 Q 10 200 0 170" stroke="url(#goldenStalk)" strokeWidth="4" strokeLinecap="round" fill="none" />

                {/* Big Foreground Blooming Cotton Boll #1 (Golden Sunset backlit) */}
                <g transform="translate(150, 105)">
                  {/* Calyx & Bracts (sepals) */}
                  <path d="M -15 15 L 0 35 L 15 15 L 25 30 L 10 0 L 0 -10 L -10 0 L -25 30 Z" fill="url(#bractGrad)" />
                  {/* 4 Fluffy Lobes of Cotton */}
                  <circle cx="-16" cy="-8" r="22" fill="url(#cottonFluff)" />
                  <circle cx="16" cy="-8" r="22" fill="url(#cottonFluff)" />
                  <circle cx="0" cy="-24" r="24" fill="url(#cottonFluff)" />
                  <circle cx="0" cy="4" r="20" fill="url(#cottonFluff)" />
                  {/* Sunset golden rim highlights */}
                  <circle cx="4" cy="-26" r="16" fill="#fef08a" opacity="0.45" />
                  <path d="M -6 -10 L 0 5 L 6 -10" stroke="#78350f" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                </g>

                {/* Big Foreground Blooming Cotton Boll #2 */}
                <g transform="translate(60, 75)">
                  <path d="M -12 12 L 0 28 L 12 12 L 20 22 L 8 0 L 0 -8 L -8 0 L -20 22 Z" fill="url(#bractGrad)" />
                  <circle cx="-14" cy="-6" r="18" fill="url(#cottonFluff)" />
                  <circle cx="14" cy="-6" r="18" fill="url(#cottonFluff)" />
                  <circle cx="0" cy="-20" r="20" fill="url(#cottonFluff)" />
                  <circle cx="0" cy="3" r="17" fill="url(#cottonFluff)" />
                </g>
              </g>

              {/* Right Foreground Cotton Branch Close-up (under sunset light) */}
              <g transform="translate(1220, 340)" className="animate-cotton-sway" opacity="0.8">
                <path d="M 80 340 Q 50 210 65 90 Q 75 30 50 0" stroke="url(#goldenStalk)" strokeWidth="6" strokeLinecap="round" fill="none" />
                <path d="M 68 180 Q 20 140 -20 120" stroke="url(#goldenStalk)" strokeWidth="4.5" strokeLinecap="round" fill="none" />

                {/* Cotton Boll Right */}
                <g transform="translate(-20, 115)">
                  <path d="M -15 15 L 0 32 L 15 15 L 22 28 L 10 0 L 0 -8 L -10 0 L -22 28 Z" fill="url(#bractGrad)" />
                  <circle cx="-16" cy="-8" r="22" fill="url(#cottonFluff)" />
                  <circle cx="16" cy="-8" r="22" fill="url(#cottonFluff)" />
                  <circle cx="0" cy="-24" r="24" fill="url(#cottonFluff)" />
                  <circle cx="0" cy="4" r="20" fill="url(#cottonFluff)" />
                  <circle cx="-4" cy="-26" r="16" fill="#fde047" opacity="0.4" />
                </g>
              </g>
            </svg>
          </div>
        ) : (
          /* 2ND IMAGE FROM CHAT: Lush Green Rice Panicle in Paddy Field under Blue Sky */
          <div className="absolute inset-0 transition-opacity duration-1000">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f281e] via-[#051c14] to-[#0c0a09]" />
            {/* Soft sky and sun glow at top right */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[350px] rounded-full bg-gradient-to-b from-sky-300/20 via-emerald-400/10 to-transparent blur-3xl pointer-events-none" />

            <svg
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 700"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient id="heroSkyRice" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="35%" stopColor="#7dd3fc" stopOpacity="0.6" />
                  <stop offset="70%" stopColor="#bae6fd" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#052e16" stopOpacity="0.9" />
                </linearGradient>

                <linearGradient id="heroGrainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="50%" stopColor="#facc15" />
                  <stop offset="85%" stopColor="#84cc16" />
                  <stop offset="100%" stopColor="#3f6212" />
                </linearGradient>

                <linearGradient id="heroLeafGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#15803d" />
                  <stop offset="50%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#166534" />
                </linearGradient>
              </defs>

              {/* Sky base */}
              <rect width="1440" height="700" fill="url(#heroSkyRice)" />

              {/* Distant farm ridges and village trees line */}
              <path d="M 0 320 Q 360 280 720 300 T 1440 285 L 1440 700 L 0 700 Z" fill="#14532d" opacity="0.45" />
              <path d="M 0 380 Q 400 350 800 370 T 1440 355 L 1440 700 L 0 700 Z" fill="#166534" opacity="0.6" />
              
              {/* Midground wooden post from Image 2 */}
              <rect x="980" y="240" width="6" height="180" fill="#a16207" opacity="0.6" rx="2" />
              <path d="M 920 270 L 1050 278" stroke="#94a3b8" strokeWidth="1.2" opacity="0.3" />

              {/* Midground dense green paddy field rows */}
              <path d="M 0 460 Q 360 420 720 445 T 1440 435 L 1440 700 L 0 700 Z" fill="#052e16" opacity="0.9" />
              <path d="M 0 530 Q 380 490 760 515 T 1440 500 L 1440 700 L 0 700 Z" fill="#022c22" />

              {/* Reflective paddy irrigation canal */}
              <path d="M 120 480 Q 450 460 780 490 T 1440 475" stroke="#34d399" strokeWidth="12" opacity="0.25" fill="none" />

              {/* Vertical Green Flag Leaves framing the scene */}
              <path d="M 40 700 L 20 180 Q 60 380 80 700 Z" fill="url(#heroLeafGrad)" opacity="0.8" />
              <path d="M 90 700 L 75 240 Q 120 420 140 700 Z" fill="url(#heroLeafGrad)" opacity="0.75" />
              <path d="M 1340 700 L 1380 200 Q 1340 400 1310 700 Z" fill="url(#heroLeafGrad)" opacity="0.8" />

              {/* Foreground Arched Rice Panicle (Stalk) Swaying gently */}
              <g transform="translate(180, 180)" className="animate-cotton-sway" opacity="0.9">
                <path
                  d="M 50 380 Q 120 240 240 180 Q 360 170 480 240 Q 560 310 600 400"
                  stroke="#84cc16"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 50 380 Q 120 240 240 180 Q 360 170 480 240 Q 560 310 600 400"
                  stroke="#fef08a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.8"
                  fill="none"
                />

                {/* Golden Rice Grains along panicle */}
                {Array.from({ length: 24 }).map((_, i) => {
                  const t = i / 23;
                  const cx = 160 + t * 400 + Math.sin(t * Math.PI) * 40;
                  const cy = 200 + Math.sin(t * Math.PI) * 80 + (i % 3) * 12;
                  const rot = -20 + t * 75;
                  return (
                    <g key={`hero-grain-${i}`} transform={`rotate(${rot} ${cx} ${cy})`}>
                      <ellipse cx={cx} cy={cy} rx={16} ry={7} fill="url(#heroGrainGrad)" stroke="#a16207" strokeWidth="1" />
                      <line x1={cx - 14} y1={cy} x2={cx + 14} y2={cy} stroke="#fef9c3" strokeWidth="1" opacity="0.9" />
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>
        )}

        {/* Floating Animated Golden Cotton Dust / Fluff Particles */}
        {particlesEnabled && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Drifting Cotton Fluff 1 */}
            <div
              className="absolute top-1/4 left-1/5 w-4 h-4 rounded-full bg-amber-100/70 blur-[1px] animate-float-particle shadow-[0_0_12px_rgba(251,191,36,0.6)]"
              style={{ animationDelay: '0s', animationDuration: '8s' }}
            />
            {/* Drifting Cotton Fluff 2 */}
            <div
              className="absolute top-1/3 left-1/2 w-5 h-5 rounded-full bg-white/80 blur-[1px] animate-float-particle shadow-[0_0_15px_rgba(245,158,11,0.5)]"
              style={{ animationDelay: '2.5s', animationDuration: '10s' }}
            />
            {/* Drifting Cotton Fluff 3 */}
            <div
              className="absolute top-1/2 right-1/4 w-3.5 h-3.5 rounded-full bg-amber-200/75 blur-[0.5px] animate-float-particle"
              style={{ animationDelay: '4s', animationDuration: '7s' }}
            />
            {/* Drifting Cotton Fluff 4 */}
            <div
              className="absolute top-2/3 left-1/3 w-6 h-6 rounded-full bg-white/60 blur-[2px] animate-float-particle"
              style={{ animationDelay: '1.2s', animationDuration: '11s' }}
            />
            {/* Small golden sparkles */}
            <div
              className="absolute top-1/6 right-1/3 w-2 h-2 rounded-full bg-amber-300 animate-ping"
              style={{ animationDuration: '3s' }}
            />
          </div>
        )}

        {/* Premium Dark Vignette & Mesh Grid for pristine text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/40 to-stone-950/85" />
      </div>

      {/* =========================================================================
          HERO MAIN CONTENT CONTAINER
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-20 relative z-10">
        
        {/* TOP COOL CONTROL HUD: Image Background Switcher & Telemetry Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-stone-800/80">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <span>Backdrop Active:</span>
              <span className="text-stone-200 normal-case font-normal bg-stone-900/90 border border-amber-500/30 px-2.5 py-0.5 rounded-full shadow-inner">
                {backdropMode === 'cotton-sunset'
                  ? '🌅 2nd Image: Blooming Cotton Field at Golden Sunset'
                  : backdropMode === 'rice-paddy'
                  ? '🌾 1st Image: Lush Green Rice Paddy Field'
                  : '✨ Split Blend: Sunset Cotton & Paddy'}
              </span>
            </span>
          </div>

          {/* Interactive Mode Switcher for the user */}
          <div className="flex items-center gap-1.5 bg-stone-900/90 p-1 rounded-xl border border-stone-700/80 backdrop-blur-md shadow-lg text-xs">
            <button
              onClick={() => setBackdropMode('cotton-sunset')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                backdropMode === 'cotton-sunset'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 font-bold shadow-md'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
              title="Cotton picking season. Blooming cotton field. Close up of the crop before the harvest, under a golden sunset light."
            >
              <span>🌅 2nd Image (Cotton Sunset)</span>
            </button>

            <button
              onClick={() => setBackdropMode('rice-paddy')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                backdropMode === 'rice-paddy'
                  ? 'bg-emerald-500 text-stone-950 font-bold shadow-md'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
              title="Lush Green Rice Paddy Field in India"
            >
              <span>🌾 1st Image (Paddy Field)</span>
            </button>

            <button
              onClick={() => setBackdropMode('split-fusion')}
              className={`px-2.5 py-1.5 rounded-lg font-medium transition-all hidden sm:flex items-center gap-1 ${
                backdropMode === 'split-fusion'
                  ? 'bg-amber-400 text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
              title="Split blend of both agricultural landscapes"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Fusion</span>
            </button>

            <div className="h-4 w-px bg-stone-700 mx-1 hidden sm:block" />

            {/* Sunset Glow Toggle */}
            <button
              onClick={() => setSunGlowEnabled(!sunGlowEnabled)}
              className={`p-1.5 rounded-lg transition-colors hidden sm:block ${
                sunGlowEnabled ? 'text-amber-400 bg-amber-500/20' : 'text-stone-500 hover:text-stone-300'
              }`}
              title={sunGlowEnabled ? 'Golden Sunset Glow: ON' : 'Golden Sunset Glow: OFF'}
            >
              <Sun className="w-4 h-4" />
            </button>

            {/* Floating Particles Toggle */}
            <button
              onClick={() => setParticlesEnabled(!particlesEnabled)}
              className={`p-1.5 rounded-lg transition-colors hidden sm:block ${
                particlesEnabled ? 'text-amber-300 bg-amber-500/20' : 'text-stone-500 hover:text-stone-300'
              }`}
              title={particlesEnabled ? 'Floating Cotton Fluff Particles: ON' : 'Floating Particles: OFF'}
            >
              <Wind className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-Column Split: Editorial & Live Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full w-fit backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>National Crop Typology & Telemetry</span>
              <span className="text-amber-500/60" aria-hidden="true">·</span>
              <span className="text-stone-200 font-medium normal-case">Golden Hour Harvest Cycle</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.15] text-balance">
              The Living Science of Grains, Dairy & Sustainable Soil.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl font-normal">
              From golden wheat fields and blooming cotton harvests to rich dairy milk yields:
              explore all <span className="text-amber-400 font-semibold">10 Types of Crops in India</span>,
              the <span className="text-emerald-400 font-semibold">3 Agro-Climatic Seasons</span>, and
              compare natural versus chemical agronomy with real-time Gemini API intelligence.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              {onExploreIndianCrops && (
                <button
                  onClick={onExploreIndianCrops}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded-xl transition-all shadow-lg shadow-amber-950/40 hover:shadow-amber-500/20 hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <Sparkles className="w-4 h-4 text-stone-900" />
                  <span>10 Crop Types of India & Seasons</span>
                  <ArrowRight className="w-4 h-4 text-stone-900" />
                </button>
              )}

              <button
                onClick={onExploreGrains}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-xl transition-all shadow-md hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <span>Grain Cultivation Guide</span>
              </button>

              <button
                onClick={onExploreFertilizers}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-stone-200 bg-stone-900/80 hover:bg-stone-800 border border-stone-700/80 rounded-xl transition-all backdrop-blur-sm whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Fertilizer Advisor</span>
              </button>

              <button
                onClick={onExploreVillages}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-stone-300 hover:text-white transition-colors whitespace-nowrap"
              >
                <Compass className="w-4 h-4 text-sky-400" />
                <span>Village Tracker</span>
              </button>
            </div>

            {/* Real-Time Context Tag */}
            <div className="mt-6 flex items-center gap-3 text-xs text-stone-400">
              <span className="flex items-center gap-1.5 text-amber-400 font-medium">
                <Sun className="w-3.5 h-3.5" />
                <span>Sunset Solar Lux: 48,000 lm</span>
              </span>
              <span>·</span>
              <span className="text-stone-300">Cotton Harvest Readiness: <strong className="text-white">96% bolls open</strong></span>
              <span>·</span>
              <span className="text-stone-400">Rabi Pre-Sowing: <strong className="text-emerald-400">Active Window</strong></span>
            </div>
          </div>

          {/* Right Column: Visual Artwork showcasing the 1st Image (Macro Specimen Card) with the 2nd Image (Rice Paddy Panicle) as Background */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-md border border-emerald-500/40 bg-stone-950/80 transition-all duration-700 group hover:shadow-emerald-950/60 hover:border-emerald-400/60">
              
              {/* =========================================================================
                  THE 2ND IMAGE DIRECTLY IN THE BACKGROUND OF THE 1ST IMAGE (CARD)
                  "i want the 2nd image for the 1st image background .and the image should be in baground and i want in coll"
                  ========================================================================= */}
              <div className="absolute inset-0 pointer-events-none select-none overflow-hidden rounded-2xl">
                {cardSpecimen === 'rice-paddy' ? (
                  /* 2ND IMAGE AS FULL CARD BACKGROUND: Lush Green Rice Panicle in Paddy Field */
                  <div className="absolute inset-0">
                    <svg
                      viewBox="0 0 420 540"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        {/* Clear Blue to Summer Sky Gradient from Image 2 */}
                        <linearGradient id="riceSky" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#60a5fa" />
                          <stop offset="25%" stopColor="#93c5fd" />
                          <stop offset="50%" stopColor="#bae6fd" />
                          <stop offset="75%" stopColor="#e0f2fe" />
                          <stop offset="100%" stopColor="#dcfce7" />
                        </linearGradient>

                        {/* Sunlight Glow in Upper Right from Image 2 */}
                        <radialGradient id="riceSunGlow" cx="75%" cy="18%" r="65%">
                          <stop offset="0%" stopColor="#fef08a" stopOpacity="0.85" />
                          <stop offset="35%" stopColor="#fef9c3" stopOpacity="0.4" />
                          <stop offset="70%" stopColor="#bae6fd" stopOpacity="0.1" />
                          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                        </radialGradient>

                        {/* Ripening Golden-Green Rice Grain Gradients */}
                        <linearGradient id="grainGold1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fef08a" />
                          <stop offset="35%" stopColor="#facc15" />
                          <stop offset="70%" stopColor="#a3e635" />
                          <stop offset="100%" stopColor="#4d7c0f" />
                        </linearGradient>

                        <linearGradient id="grainGold2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="30%" stopColor="#fde047" />
                          <stop offset="75%" stopColor="#84cc16" />
                          <stop offset="100%" stopColor="#3f6212" />
                        </linearGradient>

                        {/* Vertical Green Flag Leaves Gradients from Image 2 */}
                        <linearGradient id="riceLeafLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#15803d" />
                          <stop offset="40%" stopColor="#22c55e" />
                          <stop offset="75%" stopColor="#4ade80" />
                          <stop offset="100%" stopColor="#166534" />
                        </linearGradient>

                        <linearGradient id="riceLeafMid" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#14532d" />
                          <stop offset="50%" stopColor="#16a34a" />
                          <stop offset="100%" stopColor="#15803d" />
                        </linearGradient>
                      </defs>

                      {/* Sky Canvas */}
                      <rect width="420" height="540" fill="url(#riceSky)" />
                      <rect width="420" height="540" fill="url(#riceSunGlow)" />

                      {/* Distant trees and wood pole in midground from Image 2 */}
                      <path d="M 0 170 Q 110 155 210 165 T 340 160 T 420 170 L 420 250 L 0 250 Z" fill="#15803d" opacity="0.6" />
                      <path d="M 0 185 Q 130 175 260 182 T 420 178 L 420 270 L 0 270 Z" fill="#166534" opacity="0.75" />
                      
                      {/* Midground wooden utility pole from Image 2 */}
                      <rect x="285" y="95" width="4" height="120" fill="#a16207" opacity="0.65" rx="1" />
                      <path d="M 255 118 L 340 123" stroke="#94a3b8" strokeWidth="0.8" opacity="0.4" />

                      {/* Deep green paddy grass layer */}
                      <path d="M 0 220 Q 140 200 280 215 T 420 210 L 420 540 L 0 540 Z" fill="#14532d" opacity="0.9" />
                      <path d="M 0 250 Q 130 230 270 245 T 420 238 L 420 540 L 0 540 Z" fill="#166534" />

                      {/* Upward vertical paddy blades in background */}
                      <g opacity="0.85">
                        <path d="M 50 540 Q 65 310 120 180 L 126 180 Q 80 320 68 540 Z" fill="url(#riceLeafMid)" />
                        <path d="M 140 540 Q 170 330 200 190 L 206 190 Q 185 340 155 540 Z" fill="url(#riceLeafMid)" />
                        <path d="M 230 540 Q 255 360 275 220 L 280 220 Q 265 370 242 540 Z" fill="url(#riceLeafMid)" />
                        <path d="M 320 540 Q 340 390 350 250 L 355 250 Q 348 400 335 540 Z" fill="url(#riceLeafMid)" />
                        <path d="M 380 540 Q 390 400 405 280 L 409 280 Q 398 410 390 540 Z" fill="url(#riceLeafMid)" />
                      </g>

                      {/* Prominent Foreground Vertical Flag Leaves on the Left (from Image 2) */}
                      <path d="M 0 540 L 0 0 Q 32 160 36 340 L 40 540 Z" fill="url(#riceLeafLeft)" />
                      <path d="M 10 540 Q 15 190 24 0 L 30 0 Q 22 210 28 540 Z" fill="#4ade80" opacity="0.8" />
                      <path d="M 22 540 Q 28 280 44 140 L 49 140 Q 35 300 30 540 Z" fill="url(#riceLeafLeft)" />

                      {/* The Graceful Arching Golden-Green Rice Panicle (Exact Stalk from Image 2) */}
                      <g className="animate-cotton-sway">
                        {/* Main Arching Rachis Stem */}
                        <path
                          d="M 130 190 Q 170 135 250 115 Q 315 120 365 170 Q 405 220 418 265"
                          stroke="#84cc16"
                          strokeWidth="4"
                          strokeLinecap="round"
                          fill="none"
                        />
                        <path
                          d="M 130 190 Q 170 135 250 115 Q 315 120 365 170 Q 405 220 418 265"
                          stroke="#fef08a"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          opacity="0.8"
                          fill="none"
                        />

                        {/* Branching pedicels */}
                        <path d="M 190 145 Q 220 160 240 195" stroke="#65a30d" strokeWidth="2.2" fill="none" />
                        <path d="M 240 125 Q 270 150 290 190" stroke="#65a30d" strokeWidth="2.2" fill="none" />
                        <path d="M 285 130 Q 320 155 345 200" stroke="#65a30d" strokeWidth="2" fill="none" />
                        <path d="M 325 145 Q 360 175 390 220" stroke="#65a30d" strokeWidth="2" fill="none" />
                        <path d="M 360 170 Q 385 200 405 250" stroke="#65a30d" strokeWidth="2" fill="none" />

                        {/* Terminal Tip Rice Grains (Spikelets) */}
                        {[
                          { cx: 412, cy: 260, r: 13, rot: 55 },
                          { cx: 404, cy: 246, r: 14, rot: 50 },
                          { cx: 393, cy: 232, r: 14.5, rot: 45 },
                          { cx: 380, cy: 218, r: 15, rot: 40 },
                          { cx: 365, cy: 204, r: 15, rot: 35 },
                        ].map((g, i) => (
                          <g key={`tip-g-${i}`} transform={`rotate(${g.rot} ${g.cx} ${g.cy})`}>
                            <ellipse cx={g.cx} cy={g.cy} rx={g.r} ry={g.r * 0.44} fill="url(#grainGold1)" stroke="#ca8a04" strokeWidth="1" />
                            <line x1={g.cx - g.r + 2} y1={g.cy} x2={g.cx + g.r - 2} y2={g.cy} stroke="#fef08a" strokeWidth="1" opacity="0.9" />
                            <line x1={g.cx + g.r} y1={g.cy} x2={g.cx + g.r + 5} y2={g.cy - 1} stroke="#eab308" strokeWidth="0.8" />
                          </g>
                        ))}

                        {/* Mid-Arch Golden-Green Ripening Rice Grains */}
                        {[
                          { cx: 348, cy: 186, r: 15.5, rot: 30 },
                          { cx: 332, cy: 172, r: 16, rot: 25 },
                          { cx: 315, cy: 158, r: 16, rot: 20 },
                          { cx: 297, cy: 147, r: 16.5, rot: 15 },
                          { cx: 278, cy: 138, r: 16.5, rot: 10 },
                          { cx: 258, cy: 133, r: 16.5, rot: 5 },
                          { cx: 238, cy: 131, r: 16, rot: 0 },
                          { cx: 218, cy: 133, r: 16, rot: -5 },
                          { cx: 198, cy: 140, r: 15.5, rot: -12 },
                          { cx: 179, cy: 149, r: 15, rot: -18 },
                          { cx: 161, cy: 162, r: 14.5, rot: -24 },
                          { cx: 145, cy: 178, r: 14, rot: -30 },
                        ].map((g, i) => (
                          <g key={`mid-g-${i}`} transform={`rotate(${g.rot} ${g.cx} ${g.cy})`}>
                            <ellipse cx={g.cx} cy={g.cy} rx={g.r} ry={g.r * 0.44} fill="url(#grainGold2)" stroke="#a16207" strokeWidth="1" />
                            <line x1={g.cx - g.r + 2} y1={g.cy} x2={g.cx + g.r - 2} y2={g.cy} stroke="#fef9c3" strokeWidth="1.2" opacity="0.95" />
                            <line x1={g.cx + g.r} y1={g.cy} x2={g.cx + g.r + 6} y2={g.cy - 2} stroke="#facc15" strokeWidth="0.9" />
                          </g>
                        ))}

                        {/* Cascading Sub-Branch Grains */}
                        {[
                          { cx: 226, cy: 172, r: 14, rot: 65 },
                          { cx: 237, cy: 194, r: 14, rot: 70 },
                          { cx: 268, cy: 162, r: 14.5, rot: 60 },
                          { cx: 284, cy: 184, r: 14.5, rot: 65 },
                          { cx: 310, cy: 174, r: 15, rot: 55 },
                          { cx: 330, cy: 196, r: 15, rot: 60 },
                          { cx: 350, cy: 190, r: 14.5, rot: 50 },
                          { cx: 372, cy: 212, r: 14.5, rot: 55 },
                        ].map((g, i) => (
                          <g key={`sub-g-${i}`} transform={`rotate(${g.rot} ${g.cx} ${g.cy})`}>
                            <ellipse cx={g.cx} cy={g.cy} rx={g.r} ry={g.r * 0.44} fill="url(#grainGold1)" stroke="#854d0e" strokeWidth="1" />
                            <line x1={g.cx - g.r + 2} y1={g.cy} x2={g.cx + g.r - 2} y2={g.cy} stroke="#fef08a" strokeWidth="1" opacity="0.9" />
                          </g>
                        ))}

                        {/* Glistening Morning Dew Droplets on Rice Panicle */}
                        <circle cx="282" cy="134" r="3" fill="#ffffff" opacity="0.95" />
                        <circle cx="344" cy="174" r="2.8" fill="#ffffff" opacity="0.9" />
                        <circle cx="220" cy="168" r="2.5" fill="#ffffff" opacity="0.95" />
                      </g>
                    </svg>
                  </div>
                ) : (
                  /* Cotton Sunset Backdrop */
                  <div className="absolute inset-0 bg-gradient-to-b from-[#451a03] via-[#78350f] to-[#1c1917]" />
                )}

                {/* Frosted Glass Overlay for Contrast and Cool Look ("i want in coll") */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    cardGlassStyle === 'vivid'
                      ? 'bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-stone-950/70'
                      : cardGlassStyle === 'deep'
                      ? 'bg-gradient-to-t from-stone-950/95 via-stone-950/80 to-stone-950/90'
                      : 'bg-gradient-to-t from-stone-950/88 via-stone-950/55 to-stone-950/80 backdrop-blur-[1px]'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950/75 via-transparent to-stone-950/70" />
              </div>

              {/* =========================================================================
                  CARD FOREGROUND HUD (The 1st Image Specimen Overlay)
                  ========================================================================= */}
              <div className="relative z-10 space-y-4">
                
                {/* Top Header: Badge, Specimen Name, and 2nd Image Tag */}
                <div className="flex items-center justify-between pb-3 border-b border-stone-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-extrabold text-emerald-400 uppercase tracking-wider text-[11px] sm:text-xs drop-shadow-md">
                      ● MACRO AGRONOMY SPECIMEN
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-300 font-mono text-[11px] bg-stone-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40 shadow-inner">
                      {cardSpecimen === 'rice-paddy' ? 'Oryza sativa (Paddy)' : 'Gossypium hirsutum'}
                    </span>
                  </div>
                </div>

                {/* Cool Indicator Badge: Explicitly noting 2nd Image in Background */}
                <div className="flex items-center justify-between text-[11px]">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 font-medium shadow-sm">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span>2nd Image Background: Active & Focused</span>
                  </span>

                  {/* Cool Glass Style Switcher */}
                  <div className="flex items-center gap-1 bg-stone-950/90 p-0.5 rounded-lg border border-stone-800 text-[10px]">
                    <button
                      onClick={() => setCardGlassStyle('cool-glass')}
                      className={`px-2 py-0.5 rounded transition-all ${
                        cardGlassStyle === 'cool-glass' ? 'bg-emerald-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-white'
                      }`}
                      title="Cool Glass overlay with background transparency"
                    >
                      Glass
                    </button>
                    <button
                      onClick={() => setCardGlassStyle('vivid')}
                      className={`px-2 py-0.5 rounded transition-all ${
                        cardGlassStyle === 'vivid' ? 'bg-emerald-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-white'
                      }`}
                      title="High visibility vivid photograph background"
                    >
                      Vivid
                    </button>
                    <button
                      onClick={() => setCardGlassStyle('deep')}
                      className={`px-2 py-0.5 rounded transition-all ${
                        cardGlassStyle === 'deep' ? 'bg-emerald-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-white'
                      }`}
                      title="Deep contrast focus"
                    >
                      Deep
                    </button>
                  </div>
                </div>

                {/* Center Visual Stage: Interactive Precision Target HUD on the Background */}
                <div className="py-2 flex flex-col items-center justify-center relative min-h-[170px]">
                  {/* Floating Panicle Target Reticle */}
                  <div className="relative w-full max-w-[280px] p-4 rounded-xl bg-stone-950/60 border border-emerald-500/30 backdrop-blur-sm shadow-xl flex flex-col items-center text-center">
                    <div className="w-full flex items-center justify-between text-[10px] text-stone-400 mb-2">
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Panicle Close-Up
                      </span>
                      <span className="text-stone-300 font-mono">Dough-to-Ripe Stage</span>
                    </div>

                    <div className="relative my-2 w-20 h-20 rounded-full border-2 border-emerald-400/60 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-emerald-950/40">
                      {/* Crosshair lines */}
                      <div className="absolute w-full h-px bg-emerald-400/40" />
                      <div className="absolute h-full w-px bg-emerald-400/40" />
                      <span className="text-2xl">🌾</span>
                    </div>

                    <div className="mt-2 text-xs font-bold text-white flex items-center gap-1.5">
                      <span className="text-amber-300 font-mono">88% Golden Ripening</span>
                      <span className="text-stone-500">·</span>
                      <span className="text-emerald-300 text-[11px] font-normal">Basmati Ear</span>
                    </div>

                    <div className="mt-1 text-[10px] text-stone-400">
                      Lush paddy grass & golden grains in background
                    </div>
                  </div>
                </div>

                {/* 3 Metric Cards Strip (Exact layout of Image 1 with Rice Data) */}
                <div className="pt-2 border-t border-stone-800/80 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-stone-950/80 border border-emerald-500/30 backdrop-blur-md shadow-sm">
                    <div className="text-xs sm:text-sm font-bold text-amber-400 font-mono">14.2%</div>
                    <div className="text-[10px] text-stone-300 font-medium mt-0.5">Moisture Index</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-stone-950/80 border border-emerald-500/30 backdrop-blur-md shadow-sm">
                    <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">138 Grains</div>
                    <div className="text-[10px] text-stone-300 font-medium mt-0.5">Panicle Count</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-stone-950/80 border border-emerald-500/30 backdrop-blur-md shadow-sm">
                    <div className="text-xs sm:text-sm font-bold text-sky-400 font-mono">29.4 g</div>
                    <div className="text-[10px] text-stone-300 font-medium mt-0.5">1000-Grain Wt</div>
                  </div>
                </div>

                {/* Context Footer (Matching Image 1) */}
                <div className="pt-2 text-[11px] text-stone-400 flex items-center justify-between">
                  <span className="text-stone-300">
                    Category: <strong className="text-emerald-400 font-semibold">1. Food Crops (Paddy / Rice)</strong>
                  </span>
                  
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Harvest Window Active</span>
                  </span>
                </div>

                {/* Interactive Specimen Toggle Button */}
                <div className="pt-2 flex items-center justify-between border-t border-stone-800/60">
                  <span className="text-[10px] text-stone-400">Specimen Switcher:</span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setCardSpecimen('rice-paddy')}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all ${
                        cardSpecimen === 'rice-paddy'
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-stone-900 text-stone-400 hover:text-white'
                      }`}
                    >
                      🌾 2nd Image (Rice Ear)
                    </button>
                    <button
                      onClick={() => setCardSpecimen('cotton')}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all ${
                        cardSpecimen === 'cotton'
                          ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                          : 'bg-stone-900 text-stone-400 hover:text-white'
                      }`}
                    >
                      🌸 Cotton Specimen
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* 4-column KPI strip below the hero split */}
        <div className="mt-14 pt-8 border-t border-stone-800/90 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800/80 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400 tabular-nums">
              10 Typologies
            </div>
            <div className="text-xs sm:text-sm text-stone-300 mt-1">
              Food, Fibre, Cash, Oilseeds & More
            </div>
          </div>

          <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800/80 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tabular-nums">
              3 Seasons
            </div>
            <div className="text-xs sm:text-sm text-stone-300 mt-1">
              Kharif, Rabi & Zaid Cycles
            </div>
          </div>

          <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800/80 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-sky-400 tabular-nums">
              8 Villages
            </div>
            <div className="text-xs sm:text-sm text-stone-300 mt-1">
              Active Regional Phenology Tracking
            </div>
          </div>

          <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800/80 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-300 tabular-nums">
              +45%
            </div>
            <div className="text-xs sm:text-sm text-stone-300 mt-1">
              Long-Term Organic Soil Humus Gain
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
