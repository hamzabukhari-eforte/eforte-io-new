"use client";

import type { DifferentiatorCard as CardType } from "./differentiatorsData";

const iconMap = {
  grid: (color: string) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  compass: (color: string) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  ),
  layers: (color: string) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polygon points="2 17 12 22 22 17" />
      <polygon points="2 12 12 17 22 12" />
    </svg>
  ),
  medal: (color: string) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <circle cx="12" cy="8" r="5" />
      <path d="M12 13v6M9 19h6" />
      <path d="M8 19l2-2 2 2 2-2 2 2" />
    </svg>
  ),
  flag: (color: string) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  ),
  shield: (color: string) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  lightning: (color: string) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  cube: (color: string) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  placeholder: (color: string) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l2 2" />
    </svg>
  ),
};

interface DifferentiatorCardProps {
  card: CardType;
}

export default function DifferentiatorCard({ card }: DifferentiatorCardProps) {
  const Icon = iconMap[card.iconName](card.accentColor);

  return (
    <div
      className="group relative rounded-2xl border bg-default/95 p-6 md:p-8 md:h-80 transition-all duration-300 ease-out overflow-hidden"
      style={
        {
          borderColor: "rgba(255,255,255,0.08)",
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = card.accentColor;
        e.currentTarget.style.boxShadow = `0 0 24px ${card.accentGlow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Bottom-right gradient overlay + same icon: visible only on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      >
        {/* Gradient overlay anchored at bottom-right, behind the icon */}
        <div
          className="absolute bottom-0 right-0 w-full h-full min-w-[50vw] min-h-[60vh]"
          style={{
            background: `radial-gradient(ellipse 90% 90% at 100% 100%, ${card.accentGlow} 0%, transparent 50%)`,
          }}
        />
        <div className="absolute -bottom-5 -right-10 flex items-end justify-end p-0">
          <div className="scale-[4] origin-bottom-right -mr-2 -mb-2 opacity-20">
            {iconMap[card.iconName](card.accentColor)}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="mb-4 transition-transform duration-300 group-hover:scale-105">
          {Icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 transition-colors duration-300">
          {card.title}
        </h3>
        <p className="text-sm md:text-base text-white/70 leading-relaxed transition-colors duration-300">
          {card.description}
        </p>
      </div>
    </div>
  );
}
