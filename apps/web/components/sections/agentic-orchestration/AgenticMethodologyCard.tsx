"use client";

import type { CSSProperties, ReactNode } from "react";

function StrokeIcon({ color, children }: { color: string; children: ReactNode }) {
  return (
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
      {children}
    </svg>
  );
}

const ICONS = {
  shield: (color: string) => (
    <StrokeIcon color={color}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </StrokeIcon>
  ),
  cycle: (color: string) => (
    <StrokeIcon color={color}>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <polyline points="21 3 21 8 16 8" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <polyline points="3 21 3 16 8 16" />
    </StrokeIcon>
  ),
  backlog: (color: string) => (
    <StrokeIcon color={color}>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="16" y2="14" />
      <line x1="8" y1="18" x2="12" y2="18" />
    </StrokeIcon>
  ),
  users: (color: string) => (
    <StrokeIcon color={color}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </StrokeIcon>
  ),
};

export type MethodologyIconName = keyof typeof ICONS;

export default function AgenticMethodologyCard({
  title,
  description,
  iconName,
  accentColor,
  accentGlow,
}: {
  title: string;
  description: string;
  iconName: MethodologyIconName;
  accentColor: string;
  accentGlow: string;
}) {
  const icon = ICONS[iconName](accentColor);

  return (
    <div
      className="group relative overflow-hidden rounded-[12px] border bg-default/95 p-6 transition-all duration-300 ease-out md:h-80 md:p-8"
      style={{ borderColor: "rgba(255,255,255,0.08)" } as CSSProperties}
      onMouseEnter={(event) => {
        event.currentTarget.style.borderColor = accentColor;
        event.currentTarget.style.boxShadow = `0 0 24px ${accentGlow}`;
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        event.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      >
        <div
          className="absolute right-0 bottom-0 h-full w-full min-h-[60vh] min-w-[50vw]"
          style={{
            background: `radial-gradient(ellipse 90% 90% at 100% 100%, ${accentGlow} 0%, transparent 50%)`,
          }}
        />
        <div className="absolute -right-10 -bottom-5 flex items-end justify-end p-0">
          <div className="origin-bottom-right -mr-2 -mb-2 scale-[4] opacity-20">
            {ICONS[iconName](accentColor)}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="mb-4 transition-transform duration-300 group-hover:scale-105">{icon}</div>
        <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 md:text-2xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-white transition-colors duration-300 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
