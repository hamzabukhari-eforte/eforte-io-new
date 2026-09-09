import type { CSSProperties, ReactNode } from "react";
import {
  SiAmazonwebservices,
  SiFigma,
  SiGoogle,
  SiPaypal,
  SiSlack,
} from "react-icons/si";
import { cn } from "@/lib/utils";

const wrap =
  "flex h-12 items-center justify-center px-4 md:h-16";
const iconClass =
  "text-2xl md:text-3xl transition-[color,transform] duration-300 ease-out";

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
      {/* Above the logo so overflow-hidden heroes don't clip the name */}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-[200] mb-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-black/95 px-3 py-1.5 text-xs font-semibold tracking-wide text-white opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-opacity duration-200 group-hover:opacity-100"
      >
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
  hoverColor,
}: {
  src: string;
  alt: string;
  width?: number;
  tone: "white" | "dark";
  hoverColor: string;
}) {
  // Monochrome mask so hover can swap to brand color (assets are gray fills)
  const maskStyle: CSSProperties = {
    width,
    height: 32,
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  };

  return (
    <LogoTooltip name={alt}>
      <div className={wrap}>
        <span
          aria-label={alt}
          role="img"
          style={maskStyle}
          className={cn(
            "inline-block transition-[background-color,transform] duration-300 ease-out group-hover:scale-105",
            tone === "white" ? "bg-white" : "bg-default",
            hoverColor
          )}
        />
      </div>
    </LogoTooltip>
  );
}

function BrandIcon({
  name,
  tone,
  hoverClass,
  Icon,
}: {
  name: string;
  tone: "white" | "dark";
  hoverClass: string;
  Icon: typeof SiFigma;
}) {
  const iconTone = tone === "white" ? "text-white" : "text-default";

  return (
    <LogoTooltip name={name}>
      <div className={cn(wrap, iconTone)}>
        <Icon
          className={cn(iconClass, "group-hover:scale-105", hoverClass)}
          aria-hidden
        />
      </div>
    </LogoTooltip>
  );
}

function buildLogos(tone: "white" | "dark") {
  return [
    {
      id: "land-id",
      content: (
        <BrandImage
          src="/assets/final-images/brands/landid.svg"
          alt="Land id."
          width={110}
          tone={tone}
          hoverColor="group-hover:bg-[#4F46E5]"
        />
      ),
    },
    {
      id: "figma",
      content: (
        <BrandIcon
          name="Figma"
          tone={tone}
          Icon={SiFigma}
          hoverClass="group-hover:text-[#F24E1E]"
        />
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
          hoverColor="group-hover:bg-[#008CFF]"
        />
      ),
    },
    {
      id: "google",
      content: (
        <BrandIcon
          name="Google"
          tone={tone}
          Icon={SiGoogle}
          hoverClass="group-hover:text-[#4285F4]"
        />
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
          hoverColor="group-hover:bg-[#96BF48]"
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
          hoverColor="group-hover:bg-[#E54B4D]"
        />
      ),
    },
    {
      id: "slack",
      content: (
        <BrandIcon
          name="Slack"
          tone={tone}
          Icon={SiSlack}
          hoverClass="group-hover:text-[#E01E5A]"
        />
      ),
    },
    {
      id: "paypal",
      content: (
        <BrandIcon
          name="PayPal"
          tone={tone}
          Icon={SiPaypal}
          hoverClass="group-hover:text-[#0070BA]"
        />
      ),
    },
    {
      id: "aws",
      content: (
        <BrandIcon
          name="AWS"
          tone={tone}
          Icon={SiAmazonwebservices}
          hoverClass="group-hover:text-[#FF9900]"
        />
      ),
    },
  ];
}

export const defaultTrustedByLogos = buildLogos("white");

/** Light-background variant — dark logos */
export const defaultTrustedByLogosDark = buildLogos("dark");
