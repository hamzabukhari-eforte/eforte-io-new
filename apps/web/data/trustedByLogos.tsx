import Image from "next/image";
import type { ReactNode } from "react";
import {
  SiAmazonwebservices,
  SiFigma,
  SiGoogle,
  SiPaypal,
  SiSlack,
} from "react-icons/si";

const wrap =
  "flex h-12 items-center justify-center px-4 md:h-16";
const imgClass = "h-7 w-auto object-contain md:h-8";
const iconClass = "text-2xl md:text-3xl";

function LogoTooltip({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  return (
    <div className="group relative z-10 flex items-center justify-center overflow-visible hover:z-[100]">
      {children}
      <span className="pointer-events-none absolute left-1/2 top-full z-[100] mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black px-3 py-1 text-xs font-medium tracking-wide text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        {name}
      </span>
    </div>
  );
}

function BrandImage({
  src,
  alt,
  width = 120,
  tone,
}: {
  src: string;
  alt: string;
  width?: number;
  tone: "white" | "dark";
}) {
  // Gray brand SVGs → pure white on dark bg, pure black on light bg
  const toneClass =
    tone === "white" ? " brightness-0 invert" : " brightness-0";

  return (
    <LogoTooltip name={alt}>
      <div className={wrap}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={32}
          className={`${imgClass}${toneClass}`}
        />
      </div>
    </LogoTooltip>
  );
}

function buildLogos(tone: "white" | "dark") {
  const iconTone = tone === "white" ? "text-white" : "text-default";

  return [
    {
      id: "land-id",
      content: (
        <BrandImage
          src="/assets/final-images/brands/landid.svg"
          alt="Land id."
          width={110}
          tone={tone}
        />
      ),
    },
    {
      id: "figma",
      content: (
        <LogoTooltip name="Figma">
          <div className={`${wrap} ${iconTone}`}>
            <SiFigma className={iconClass} aria-hidden />
          </div>
        </LogoTooltip>
      ),
    },
    {
      id: "ripple",
      content: (
        <BrandImage
          src="/assets/final-images/brands/ripple.svg"
          alt="Ripple"
          width={110}
          tone={tone}
        />
      ),
    },
    {
      id: "google",
      content: (
        <LogoTooltip name="Google">
          <div className={`${wrap} ${iconTone}`}>
            <SiGoogle className={iconClass} aria-hidden />
          </div>
        </LogoTooltip>
      ),
    },
    {
      id: "shopify",
      content: (
        <BrandImage
          src="/assets/final-images/brands/shopify.svg"
          alt="Shopify"
          width={120}
          tone={tone}
        />
      ),
    },
    {
      id: "onesignal",
      content: (
        <BrandImage
          src="/assets/final-images/brands/onesignal.svg"
          alt="OneSignal"
          width={130}
          tone={tone}
        />
      ),
    },
    {
      id: "slack",
      content: (
        <LogoTooltip name="Slack">
          <div className={`${wrap} ${iconTone}`}>
            <SiSlack className={iconClass} aria-hidden />
          </div>
        </LogoTooltip>
      ),
    },
    {
      id: "paypal",
      content: (
        <LogoTooltip name="PayPal">
          <div className={`${wrap} ${iconTone}`}>
            <SiPaypal className={iconClass} aria-hidden />
          </div>
        </LogoTooltip>
      ),
    },
    {
      id: "aws",
      content: (
        <LogoTooltip name="AWS">
          <div className={`${wrap} ${iconTone}`}>
            <SiAmazonwebservices className={iconClass} aria-hidden />
          </div>
        </LogoTooltip>
      ),
    },
  ];
}

export const defaultTrustedByLogos = buildLogos("white");

/** Light-background variant — dark logos */
export const defaultTrustedByLogosDark = buildLogos("dark");
