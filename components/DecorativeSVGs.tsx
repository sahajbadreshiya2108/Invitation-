import React from "react";

// Sacred Ganesha Motif in Gold Vector
export function GaneshaIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFB76C" />
          <stop offset="50%" stopColor="#FFF2B2" />
          <stop offset="100%" stopColor="#C5A059" />
        </linearGradient>
      </defs>
      {/* Crown / Mukut */}
      <path
        d="M50 12 L56 22 L62 18 L58 30 L42 30 L38 18 L44 22 Z"
        fill="url(#goldGrad)"
        stroke="#9E782F"
        strokeWidth="1"
      />
      {/* Tilak */}
      <path
        d="M48 24 Q50 20 52 24 L52 32 Q50 34 48 32 Z"
        fill="#800F2F"
      />
      <circle cx="50" cy="35" r="2" fill="#DFB76C" />
      {/* Trunk and Face */}
      <path
        d="M36 34 C36 45 42 54 48 58 C52 61 54 66 54 74 C54 80 50 84 45 84 C41 84 38 80 40 76 C41 74 44 74 44 76"
        stroke="url(#goldGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Big Right Ear */}
      <path
        d="M36 34 C26 34 20 40 20 48 C20 56 28 62 36 56"
        stroke="url(#goldGrad)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Left Ear */}
      <path
        d="M64 34 C74 34 80 40 80 48 C80 56 72 62 64 56"
        stroke="url(#goldGrad)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Tusk */}
      <path d="M42 55 L37 57" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" />
      <path d="M58 55 L61 58" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Modak */}
      <ellipse cx="64" cy="68" rx="5" ry="4" fill="url(#goldGrad)" />
      {/* Halo Aura */}
      <circle cx="50" cy="46" r="38" stroke="url(#goldGrad)" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />
    </svg>
  );
}

// Royal Corner Ornament
export function RoyalCornerOrnament({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cornerGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFB76C" />
          <stop offset="60%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#8C6A28" />
        </linearGradient>
      </defs>
      <path
        d="M0 0 L55 0 C45 10 38 18 36 28 C34 38 28 45 0 55 L0 0 Z"
        fill="url(#cornerGold)"
        opacity="0.15"
      />
      <path
        d="M5 5 L60 5 C50 12 42 20 40 32 C38 42 32 50 5 60 L5 5 Z"
        stroke="url(#cornerGold)"
        strokeWidth="1.5"
      />
      <path
        d="M8 8 L30 8 C25 15 20 20 20 28 C20 35 15 40 8 45"
        stroke="url(#cornerGold)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="15" cy="15" r="2.5" fill="url(#cornerGold)" />
      <circle cx="32" cy="12" r="1.5" fill="url(#cornerGold)" />
      <circle cx="12" cy="32" r="1.5" fill="url(#cornerGold)" />
    </svg>
  );
}

// Royal Floral Divider
export function FloralDivider({ className = "w-full my-6" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-[#C5A059] to-[#C5A059]" />
      <svg
        viewBox="0 0 60 20"
        className="w-12 h-5 text-[#C5A059]"
        fill="currentColor"
      >
        <path d="M30 3 C32 7 38 10 44 10 C38 10 35 14 34 18 C33 13 31 11 30 11 C29 11 27 13 26 18 C25 14 22 10 16 10 C22 10 28 7 30 3 Z" />
        <circle cx="30" cy="10" r="2" fill="#DFB76C" />
        <circle cx="14" cy="10" r="1.5" fill="#C5A059" />
        <circle cx="46" cy="10" r="1.5" fill="#C5A059" />
      </svg>
      <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-l from-transparent via-[#C5A059] to-[#C5A059]" />
    </div>
  );
}

// Royal Mandala Rosette
export function MandalaRosette({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mandalaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFB76C" />
          <stop offset="50%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#8C6A28" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="46" stroke="url(#mandalaGrad)" strokeWidth="1" strokeDasharray="4 2" />
      <circle cx="50" cy="50" r="40" stroke="url(#mandalaGrad)" strokeWidth="0.8" />
      <circle cx="50" cy="50" r="28" stroke="url(#mandalaGrad)" strokeWidth="1" />
      <circle cx="50" cy="50" r="12" fill="url(#mandalaGrad)" fillOpacity="0.2" stroke="url(#mandalaGrad)" strokeWidth="1" />
      <circle cx="50" cy="50" r="4" fill="url(#mandalaGrad)" />
      {/* Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 50 50)`}>
          <path
            d="M50 20 C46 28 46 36 50 40 C54 36 54 28 50 20 Z"
            fill="url(#mandalaGrad)"
            fillOpacity="0.6"
            stroke="url(#mandalaGrad)"
            strokeWidth="0.8"
          />
          <circle cx="50" cy="16" r="1.8" fill="url(#mandalaGrad)" />
        </g>
      ))}
    </svg>
  );
}

// Royal Seal / Wax Stamp
export function WaxSeal({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center rounded-full shadow-2xl ${className}`}>
      {/* Outer wax drip texture */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#800F2F] via-[#590D22] to-[#380514] border-2 border-[#C5A059] shadow-[0_8px_20px_rgba(0,0,0,0.6)]" />
      <div className="absolute inset-1.5 rounded-full border border-dashed border-[#DFB76C]/60" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <span className="font-calligraphy text-2xl text-[#FFF2B2] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          D & I
        </span>
        <span className="text-[8px] font-cinzel tracking-widest text-[#DFB76C] uppercase -mt-1">
          Forever
        </span>
      </div>
    </div>
  );
}

