"use client";

import type { CSSProperties } from "react";
import Link from "next/link";

const THEME_BLUE = "#426CFF";
const THEME_PINK = "#D3287A";

export const industryCardAccents = {
  blue: {
    accentColor: THEME_BLUE,
    accentGlow: "rgba(66, 108, 255, 0.4)",
  },
  pink: {
    accentColor: THEME_PINK,
    accentGlow: "rgba(211, 40, 122, 0.4)",
  },
  green: {
    accentColor: "#22C55E",
    accentGlow: "rgba(34, 197, 94, 0.4)",
  },
  orange: {
    accentColor: "#F97316",
    accentGlow: "rgba(249, 115, 22, 0.4)",
  },
  yellow: {
    accentColor: "#EAB308",
    accentGlow: "rgba(234, 179, 8, 0.4)",
  },
  sky: {
    accentColor: "#0EA5E9",
    accentGlow: "rgba(14, 165, 233, 0.4)",
  },
  violet: {
    accentColor: "#8B5CF6",
    accentGlow: "rgba(139, 92, 246, 0.4)",
  },
} as const;

export type IndustryCardAccent = keyof typeof industryCardAccents;

/** Renders an SVG/PNG as a solid accent-colored glyph via CSS mask */
function AccentIcon({
  src,
  color,
  className,
  size = 32,
}: {
  src: string;
  color: string;
  className?: string;
  size?: number;
}) {
  return (
    <span
      role="img"
      aria-hidden
      className={className}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        backgroundColor: color,
        WebkitMaskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        WebkitMaskPosition: "center",
        maskImage: `url(${src})`,
        maskRepeat: "no-repeat",
        maskSize: "contain",
        maskPosition: "center",
      }}
    />
  );
}

interface IndustriesMethodologyCardProps {
  title: string;
  description: string;
  /** Path under /public — tinted with accent color */
  iconSrc: string;
  accent?: IndustryCardAccent;
  pills?: string[];
  href?: string;
  className?: string;
  /** Large corner watermark on hover (Why cards). Off for industry grid. */
  showWatermark?: boolean;
}

/**
 * Visual match for AgenticMethodologyCard — dark card, subtle border,
 * corner accent glow on hover. Icons follow accent color.
 */
export default function IndustriesMethodologyCard({
  title,
  description,
  iconSrc,
  accent = "blue",
  pills,
  href,
  className,
  showWatermark = true,
}: IndustriesMethodologyCardProps) {
  const { accentColor, accentGlow } = industryCardAccents[accent];

  const inner = (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-[12px] border bg-default/95 p-6 transition-all duration-300 ease-out md:p-8 ${className ?? ""}`}
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
        {showWatermark ? (
          <div className="absolute -right-4 -bottom-2 flex origin-bottom-right scale-[4] items-end justify-end opacity-25">
            <AccentIcon src={iconSrc} color={accentColor} size={40} />
          </div>
        ) : null}
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-4 transition-transform duration-300 group-hover:scale-105">
          <AccentIcon src={iconSrc} color={accentColor} size={32} />
        </div>
        <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 md:text-2xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-white transition-colors duration-300 md:text-base">
          {description}
        </p>

        {pills && pills.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-2">
            {pills.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[12px] font-medium text-white"
              >
                {pill}
              </li>
            ))}
          </ul>
        ) : null}

        {href ? (
          <span className="mt-auto pt-8 text-[14px] font-medium text-white underline decoration-white/40 underline-offset-8 transition-colors group-hover:decoration-white">
            Explore →
          </span>
        ) : null}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {inner}
      </Link>
    );
  }

  return inner;
}
