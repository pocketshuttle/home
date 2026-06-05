'use client'
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const TrackingVisualization = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
    <svg
      className="w-full h-full"
      viewBox="0 0 1440 820"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Subtle dot grid */}
        <pattern id="dotgrid" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.06)" />
        </pattern>

        {/* Glow filter for moving vehicles */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

      </defs>

      {/* Dot grid background */}
      <rect width="100%" height="100%" fill="url(#dotgrid)" />

      {/* ── ROUTES ─────────────────────────────────────────── */}

      {/* Route A → Hub (school/family route) */}
      <path
        d="M 80 620 C 200 520 370 350 590 390"
        stroke="#38bdf8" strokeWidth="1.5" fill="none"
        strokeDasharray="12 8" opacity="0.5"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-200" dur="6s" repeatCount="indefinite" />
      </path>

      {/* Route Hub → C (interstate) */}
      <path
        d="M 590 390 C 780 420 940 270 1160 310"
        stroke="#38bdf8" strokeWidth="1.5" fill="none"
        strokeDasharray="12 8" opacity="0.5"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-200" dur="7.5s" repeatCount="indefinite" />
      </path>

      {/* Route D → E (secondary / corporate) */}
      <path
        d="M 260 710 C 460 670 680 680 920 600"
        stroke="#a78bfa" strokeWidth="1.3" fill="none"
        strokeDasharray="10 7" opacity="0.38"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-170" dur="10s" repeatCount="indefinite" />
      </path>

      {/* Branch from Hub downward */}
      <path
        d="M 590 390 C 620 510 660 610 710 690"
        stroke="#38bdf8" strokeWidth="1" fill="none"
        strokeDasharray="8 6" opacity="0.28"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-140" dur="5.5s" repeatCount="indefinite" />
      </path>

      {/* Far-right tail */}
      <path
        d="M 1160 310 C 1270 410 1370 510 1420 640"
        stroke="#a78bfa" strokeWidth="1" fill="none"
        strokeDasharray="8 6" opacity="0.25"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-140" dur="9s" repeatCount="indefinite" />
      </path>

      {/* Top-left faint route */}
      <path
        d="M 0 200 C 120 260 250 310 420 290"
        stroke="#38bdf8" strokeWidth="1" fill="none"
        strokeDasharray="8 6" opacity="0.2"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-140" dur="11s" repeatCount="indefinite" />
      </path>

      {/* ── LOCATION PINS (ping effect) ─────────────────────── */}

      {/* Pin A — origin (left) */}
      <g>
        <circle cx="80" cy="620" r="5.5" fill="#38bdf8" opacity="0.95" />
        <circle cx="80" cy="620" r="2.5" fill="white" opacity="0.9" />
        <circle cx="80" cy="620" r="5.5" fill="none" stroke="#38bdf8">
          <animate attributeName="r" values="5.5;22;5.5" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="620" r="5.5" fill="none" stroke="#38bdf8">
          <animate attributeName="r" values="5.5;38;5.5" dur="3s" begin="0.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" begin="0.6s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Pin B — central hub (largest, busiest node) */}
      <g>
        <circle cx="590" cy="390" r="8" fill="#38bdf8" opacity="0.95" />
        <circle cx="590" cy="390" r="4" fill="white" opacity="0.9" />
        <circle cx="590" cy="390" r="8" fill="none" stroke="#38bdf8">
          <animate attributeName="r" values="8;28;8" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.85;0;0.85" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="590" cy="390" r="8" fill="none" stroke="#38bdf8">
          <animate attributeName="r" values="8;46;8" dur="2.6s" begin="0.7s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.45;0;0.45" dur="2.6s" begin="0.7s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Pin C — right destination */}
      <g>
        <circle cx="1160" cy="310" r="6" fill="#a78bfa" opacity="0.9" />
        <circle cx="1160" cy="310" r="3" fill="white" opacity="0.85" />
        <circle cx="1160" cy="310" r="6" fill="none" stroke="#a78bfa">
          <animate attributeName="r" values="6;24;6" dur="3.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0;0.8" dur="3.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="1160" cy="310" r="6" fill="none" stroke="#a78bfa">
          <animate attributeName="r" values="6;40;6" dur="3.4s" begin="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3.4s" begin="0.8s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Pin D — bottom left */}
      <g>
        <circle cx="260" cy="710" r="5" fill="#a78bfa" opacity="0.85" />
        <circle cx="260" cy="710" r="5" fill="none" stroke="#a78bfa">
          <animate attributeName="r" values="5;20;5" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.75;0;0.75" dur="4s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Pin E — bottom right */}
      <g>
        <circle cx="920" cy="600" r="5" fill="#f472b6" opacity="0.85" />
        <circle cx="920" cy="600" r="5" fill="none" stroke="#f472b6">
          <animate attributeName="r" values="5;19;5" dur="3.7s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.75;0;0.75" dur="3.7s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Pin F — branch bottom */}
      <g>
        <circle cx="710" cy="690" r="4" fill="#38bdf8" opacity="0.65" />
        <circle cx="710" cy="690" r="4" fill="none" stroke="#38bdf8">
          <animate attributeName="r" values="4;15;4" dur="4.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="4.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Pin G — top-left faint */}
      <g>
        <circle cx="420" cy="290" r="4" fill="#38bdf8" opacity="0.5" />
        <circle cx="420" cy="290" r="4" fill="none" stroke="#38bdf8">
          <animate attributeName="r" values="4;14;4" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* ── MOVING VEHICLES ─────────────────────────────────── */}

      {/* Vehicle 1 — route A→Hub (school bus / white) */}
      <circle r="4.5" fill="white" filter="url(#glow)">
        <animateMotion dur="6s" repeatCount="indefinite"
          path="M 80 620 C 200 520 370 350 590 390" />
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.04;0.1;0.9;1" dur="6s" repeatCount="indefinite" />
      </circle>

      {/* Vehicle 2 — route Hub→C (interstate bus / sky) */}
      <circle r="4" fill="#38bdf8" filter="url(#glow)">
        <animateMotion dur="7.5s" repeatCount="indefinite" begin="2s"
          path="M 590 390 C 780 420 940 270 1160 310" />
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.04;0.1;0.9;1" dur="7.5s" begin="2s" repeatCount="indefinite" />
      </circle>

      {/* Vehicle 3 — secondary route D→E (corporate / purple) */}
      <circle r="3.5" fill="#a78bfa" filter="url(#glow)">
        <animateMotion dur="10s" repeatCount="indefinite" begin="1s"
          path="M 260 710 C 460 670 680 680 920 600" />
        <animate attributeName="opacity" values="0;0;0.9;0.9;0" keyTimes="0;0.04;0.1;0.9;1" dur="10s" begin="1s" repeatCount="indefinite" />
      </circle>

      {/* Vehicle 4 — reverse on secondary (pink / family mode) */}
      <circle r="3" fill="#f472b6" filter="url(#glow)">
        <animateMotion dur="9s" repeatCount="indefinite" begin="4s"
          path="M 920 600 C 680 680 460 670 260 710" />
        <animate attributeName="opacity" values="0;0;0.85;0.85;0" keyTimes="0;0.04;0.1;0.9;1" dur="9s" begin="4s" repeatCount="indefinite" />
      </circle>

      {/* Vehicle 5 — branch route (small, white) */}
      <circle r="3" fill="white">
        <animateMotion dur="5.5s" repeatCount="indefinite" begin="1.5s"
          path="M 590 390 C 620 510 660 610 710 690" />
        <animate attributeName="opacity" values="0;0;0.8;0.8;0" keyTimes="0;0.04;0.1;0.9;1" dur="5.5s" begin="1.5s" repeatCount="indefinite" />
      </circle>

      {/* ── SUBTLE LABELS ───────────────────────────────────── */}
      <text x="91" y="638" fill="#38bdf8" fontSize="7" opacity="0.55" fontFamily="monospace" letterSpacing="1">ORIGIN</text>
      <text x="601" y="383" fill="#38bdf8" fontSize="7" opacity="0.55" fontFamily="monospace" letterSpacing="1">HUB</text>
      <text x="1168" y="304" fill="#a78bfa" fontSize="7" opacity="0.55" fontFamily="monospace" letterSpacing="1">DEST</text>
      <text x="270" y="726" fill="#a78bfa" fontSize="7" opacity="0.45" fontFamily="monospace" letterSpacing="1">TERMINAL</text>
      <text x="928" y="616" fill="#f472b6" fontSize="7" opacity="0.45" fontFamily="monospace" letterSpacing="1">STOP</text>

      {/* Subtle framing so the route map blends with the hero background */}
      <rect width="100%" height="100%" fill="#201678" opacity="0.08" />
    </svg>
  </div>
);

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])

  return (
    <div className='relative pt-40 md:pt-52 header_bg min-h-[820px] md:min-h-[900px] overflow-hidden'>

      {/* Tracking animation replaces the old spinning globe */}
      <TrackingVisualization />

      <div className='text-center relative z-10 px-4'>
        <div data-aos="fade-up">

          {/* headline */}
          <h1 className='text-4xl md:text-7xl lg:text-[88px] font-bold text-white leading-tight tracking-tight mb-6'>
            The Safety Layer<br />
            <span className='hero-title-accent'>
              for Every Journey
            </span>
          </h1>

          {/* sub-headline */}
          <p className='text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed'>
            Know where your people are — every step of the way.
            Real-time accountability for families, schools, drivers,
            and transport companies.
          </p>

          {/* CTAs */}
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
            <Link href="https://app.pocketshuttle.com/login">
              <button className='bg-sky-400 hover:bg-sky-300 text-black rounded-md w-[210px] px-6 text-md font-semibold py-3 transition-colors'>
                Get Early Access
              </button>
            </Link>
            <Link href="/solutions">
              <button className='border border-white/30 hover:bg-white/10 text-white rounded-md w-[210px] px-6 text-md font-medium py-3 transition-colors'>
                See How It Works
              </button>
            </Link>
          </div>

          {/* quick stats */}
          <div className='mt-16 flex justify-center items-center gap-6 md:gap-12 flex-wrap'>
            <div className='text-center'>
              <p className='text-3xl md:text-4xl font-bold text-white'>3</p>
              <p className='text-slate-400 text-sm mt-1'>Trip Types</p>
            </div>
            <div className='w-px h-10 bg-white/20 hidden sm:block'></div>
            <div className='text-center'>
              <p className='text-3xl md:text-4xl font-bold text-white'>6</p>
              <p className='text-slate-400 text-sm mt-1'>User Roles</p>
            </div>
            <div className='w-px h-10 bg-white/20 hidden sm:block'></div>
            <div className='text-center'>
              <p className='text-3xl md:text-4xl font-bold text-white'>Live</p>
              <p className='text-slate-400 text-sm mt-1'>Realtime Updates</p>
            </div>
            <div className='w-px h-10 bg-white/20 hidden sm:block'></div>
            <div className='text-center'>
              <p className='text-3xl md:text-4xl font-bold text-white'>4</p>
              <p className='text-slate-400 text-sm mt-1'>Market Segments</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
