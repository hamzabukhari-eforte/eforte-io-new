import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * All PNGs are height-normalized (128px). Displayed at a shared CSS height.
 * `opticalScale` corrects ink-density differences (sparse marks like Single Grain
 * vs bold wordmarks like Greentoe) so they read as the same size.
 */
const LOGO_HEIGHT_PX = 36;

const wrap =
  "flex h-14 shrink-0 items-center justify-center px-4 md:px-5";

function LogoTooltip({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  return (
    <div
      title={name}
      className="group relative z-10 flex items-center justify-center overflow-visible hover:z-[200]"
    >
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-[200] mb-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-black/95 px-3 py-1.5 text-xs font-semibold tracking-wide text-white opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-opacity duration-200 group-hover:opacity-100"
      >
        {name}
      </span>
    </div>
  );
}

function ClientBrandImage({
  src,
  alt,
  tone,
  opticalScale = 1,
}: {
  src: string;
  alt: string;
  tone: "white" | "dark";
  opticalScale?: number;
}) {
  const style = {
    height: LOGO_HEIGHT_PX,
    width: "auto",
    ["--logo-scale" as string]: String(opticalScale),
    transform: "scale(var(--logo-scale))",
  } satisfies CSSProperties;

  return (
    <LogoTooltip name={alt}>
      <div className={wrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={style}
          className={cn(
            "object-contain opacity-90 transition-[opacity,transform] duration-300 ease-out group-hover:opacity-100",
            "group-hover:[transform:scale(calc(var(--logo-scale)*1.05))]",
            tone === "white"
              ? "[mix-blend-mode:screen]"
              : "[mix-blend-mode:multiply] brightness-0"
          )}
        />
      </div>
    </LogoTooltip>
  );
}

/**
 * opticalScale from measured ink density + visual QA:
 * sparse/light marks scale up; bold wide wordmarks scale down.
 */
const CLIENT_LOGOS = [
  {
    id: "1and1",
    src: "/assets/final-images/Clients/Trusted_Brands_1.png?v=8",
    alt: "1&1",
    opticalScale: 0.92,
  },
  {
    id: "york-university",
    src: "/assets/final-images/Clients/Trusted_Brands_2.png?v=8",
    alt: "York University",
    opticalScale: 0.95,
  },
  {
    id: "universal-music-sa",
    src: "/assets/final-images/Clients/Trusted_Brands_3.png?v=8",
    alt: "Universal Music South Africa",
    opticalScale: 1.2,
  },
  {
    id: "single-grain",
    src: "/assets/final-images/Clients/Trusted_Brands_4.png?v=8",
    alt: "Single Grain",
    opticalScale: 1.25,
  },
  {
    id: "harley-davidson",
    src: "/assets/final-images/Clients/Trusted_Brands_5.png?v=8",
    alt: "Harley-Davidson",
    opticalScale: 1.15,
  },
  {
    id: "markethealth",
    src: "/assets/final-images/Clients/Trusted_Brands_6.png?v=8",
    alt: "MarketHealth Affiliate Network",
    opticalScale: 1.05,
  },
  {
    id: "decathlon",
    src: "/assets/final-images/Clients/Trusted_Brands_7.png?v=8",
    alt: "Decathlon",
    opticalScale: 0.82,
  },
  {
    id: "greentoe",
    src: "/assets/final-images/Clients/Trusted_Brands_8.png?v=8",
    alt: "Greentoe",
    opticalScale: 0.78,
  },
  {
    id: "london-real",
    src: "/assets/final-images/Clients/Trusted_Brands_9.png?v=8",
    alt: "London Real",
    opticalScale: 0.8,
  },
] as const;

function buildLogos(tone: "white" | "dark") {
  return CLIENT_LOGOS.map((logo) => ({
    id: logo.id,
    content: (
      <ClientBrandImage
        src={logo.src}
        alt={logo.alt}
        tone={tone}
        opticalScale={logo.opticalScale}
      />
    ),
  }));
}

/* Preserved prior tech-brand strip (Google, PayPal, Slack, Shopify, Figma,
   Ripple, OneSignal, AWS, Land id) — removed for audit C-03; assets remain
   under public/assets/final-images/brands/ for possible reuse.
   Untouched source PNGs backed up under Clients/_originals/. */

export const defaultTrustedByLogos = buildLogos("white");

/** Light-background variant — dark logos */
export const defaultTrustedByLogosDark = buildLogos("dark");
