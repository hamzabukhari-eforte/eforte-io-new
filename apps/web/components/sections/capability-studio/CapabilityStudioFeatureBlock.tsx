"use client";

import Image from "next/image";
import { getStudioAccent } from "@/data/capabilities/accents";
import { motion } from "@/lib/replayMotion";
import type {
  StudioAccentId,
  StudioFeature,
} from "@/data/capabilities/types";
import { cn } from "@/lib/utils";
import ConsultancyMentoringMedia from "./ConsultancyMentoringMedia";
import BlockchainInfrastructureMedia from "./BlockchainInfrastructureMedia";

type CapabilityStudioFeatureBlockProps = {
  accent: StudioAccentId;
  feature: StudioFeature;
  index: number;
};

const themeStyles = {
  light: {
    card: "bg-[#F2F2F2] text-black",
    number: "text-black",
    title: "text-black",
    description: "text-black",
    visualTitle: "text-black",
  },
  muted: {
    card: "bg-[#E8E8E8] text-black",
    number: "text-black",
    title: "text-black",
    description: "text-black",
    visualTitle: "text-black",
  },
  dark: {
    card: "bg-[#1A1A1A] text-white",
    number: "text-white",
    title: "text-white",
    description: "text-white",
    visualTitle: "text-white",
  },
  black: {
    card: "bg-black text-white",
    number: "text-white",
    title: "text-white",
    description: "text-white",
    visualTitle: "text-white",
  },
} as const;

function FeatureCopy({
  feature,
  styles,
}: Readonly<{
  feature: StudioFeature;
  styles: (typeof themeStyles)[keyof typeof themeStyles];
}>) {
  return (
    <div className="flex h-full flex-col justify-center p-8 md:p-10 lg:p-12">
      {feature.number ? (
        <p className={cn("text-sm font-semibold md:text-base", styles.number)}>
          {feature.number}
        </p>
      ) : null}
      <h3
        className={cn(
          "text-[36px] font-semibold leading-tight",
          feature.number ? "mt-4" : "mt-0",
          styles.title
        )}
      >
        {feature.title}
      </h3>
      {feature.description ? (
        <p
          className={cn(
            "mt-5 max-w-md text-[16px] leading-relaxed",
            styles.description
          )}
        >
          {feature.description}
        </p>
      ) : null}
    </div>
  );
}

function resolveSolidBg(
  customBg: string | undefined,
  panel: "image" | "accent" | "black" | undefined,
  accentColor: string
): string | undefined {
  if (customBg) return customBg;
  if (panel === "black") return "#000000";
  if (panel === "accent") return accentColor;
  return undefined;
}

function resolveObjectPosition(
  position: StudioFeature["mediaObjectPosition"]
): string {
  if (position === "bottom") return "object-bottom";
  if (position === "top") return "object-top";
  return "object-center";
}

function CustomFeatureMedia({
  feature,
  solidBg,
  isFullBleed,
  kind,
}: Readonly<{
  feature: StudioFeature;
  solidBg: string | undefined;
  isFullBleed: boolean;
  kind: "consultancy" | "infrastructure";
}>) {
  return (
    <div
      className={cn(
        "relative flex h-full min-h-[300px] items-center justify-center overflow-hidden md:min-h-[380px] lg:min-h-full",
        isFullBleed ? "" : "p-6 md:p-10"
      )}
      style={solidBg ? { backgroundColor: solidBg } : undefined}
    >
      {kind === "consultancy" ? (
        <ConsultancyMentoringMedia className="h-full w-full max-h-full object-contain" />
      ) : (
        <BlockchainInfrastructureMedia className="h-full w-full max-h-full object-contain" />
      )}
      <span className="sr-only">{feature.imageAlt}</span>
    </div>
  );
}

function InsetFeatureMedia({
  feature,
  solidBg,
}: Readonly<{
  feature: StudioFeature;
  solidBg: string | undefined;
}>) {
  return (
    <div className="flex h-full min-h-[300px] items-stretch p-3 md:min-h-[380px] lg:min-h-full">
      <div
        className="relative w-full min-h-[260px] overflow-hidden rounded-[12px] bg-black md:min-h-0"
        style={solidBg ? { backgroundColor: solidBg } : undefined}
      >
        <Image
          key={feature.image}
          src={feature.image}
          alt={feature.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={100}
          unoptimized
          className="object-contain object-center"
        />
      </div>
    </div>
  );
}

function shouldUseCoverFit(
  feature: StudioFeature,
  isSvg: boolean,
  customBg: string | undefined,
  isFullBleed: boolean,
  isSolidPanel: boolean
): boolean {
  if (feature.mediaObjectFit === "contain") return false;
  if (isSvg || customBg) return false;
  return isFullBleed || !isSolidPanel;
}

function DefaultFeatureMedia({
  feature,
  solidBg,
  isSolidPanel,
  isFullBleed,
  isSvg,
  customBg,
}: Readonly<{
  feature: StudioFeature;
  solidBg: string | undefined;
  isSolidPanel: boolean;
  isFullBleed: boolean;
  isSvg: boolean;
  customBg: string | undefined;
}>) {
  const useCover = shouldUseCoverFit(
    feature,
    isSvg,
    customBg,
    isFullBleed,
    isSolidPanel
  );
  const objectPosition = resolveObjectPosition(feature.mediaObjectPosition);
  const showContained = isSolidPanel && !isFullBleed;
  const objectFitClass = useCover ? "object-cover" : "object-contain";
  let svgPaddingClass = "";
  if (isSvg && !isFullBleed && !isSolidPanel) {
    svgPaddingClass = "p-6 md:p-10";
  }
  const wrapperClass = showContained
    ? "relative h-full min-h-[300px] overflow-hidden md:min-h-[380px] lg:min-h-full flex items-center justify-center"
    : "relative h-full min-h-[300px] overflow-hidden md:min-h-[380px] lg:min-h-full";

  if (showContained) {
    return (
      <div
        className={wrapperClass}
        style={solidBg ? { backgroundColor: solidBg } : undefined}
      >
        <div className="relative h-[85%] w-[88%] max-w-none md:h-[90%] md:w-[92%]">
          <Image
            src={feature.image}
            alt={feature.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain object-center"
            unoptimized={isSvg}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={wrapperClass}
      style={solidBg ? { backgroundColor: solidBg } : undefined}
    >
      <Image
        src={feature.image}
        alt={feature.imageAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={cn(objectFitClass, objectPosition, svgPaddingClass)}
        unoptimized={isSvg || Boolean(customBg)}
      />
    </div>
  );
}

function FeatureMedia({
  feature,
  accentColor,
  panel,
}: Readonly<{
  feature: StudioFeature;
  accentColor: string;
  panel?: "image" | "accent" | "black";
}>) {
  const customBg = feature.mediaBgColor;
  const isSolidPanel = Boolean(customBg) || panel === "accent" || panel === "black";
  const isInset = Boolean(feature.mediaInset);
  const isFullBleed = Boolean(feature.mediaFullBleed);
  const imagePath = feature.image.split("?")[0] ?? feature.image;
  const isSvg = imagePath.endsWith(".svg");
  const isConsultancyMedia =
    feature.id === "consultancy" ||
    imagePath.includes("mobile-consultancy-and-mentoring");
  const isInfrastructureMedia =
    feature.id === "infrastructure" ||
    imagePath.includes("blockchain-infrastructure-and-deployment");
  const solidBg = resolveSolidBg(customBg, panel, accentColor);

  if (isConsultancyMedia) {
    return (
      <CustomFeatureMedia
        feature={feature}
        solidBg={solidBg}
        isFullBleed={isFullBleed}
        kind="consultancy"
      />
    );
  }

  if (isInfrastructureMedia) {
    return (
      <CustomFeatureMedia
        feature={feature}
        solidBg={solidBg}
        isFullBleed={isFullBleed}
        kind="infrastructure"
      />
    );
  }

  if (isInset) {
    return <InsetFeatureMedia feature={feature} solidBg={solidBg} />;
  }

  return (
    <DefaultFeatureMedia
      feature={feature}
      solidBg={solidBg}
      isSolidPanel={isSolidPanel}
      isFullBleed={isFullBleed}
      isSvg={isSvg}
      customBg={customBg}
    />
  );
}

function VisualCard({
  feature,
  styles,
}: Readonly<{
  feature: StudioFeature;
  styles: (typeof themeStyles)[keyof typeof themeStyles];
}>) {
  return (
    <div className="relative flex h-full min-h-[320px] flex-col items-center justify-center gap-6 overflow-hidden p-8 md:min-h-[380px] md:p-10">
      <div className="relative h-28 w-28 md:h-36 md:w-36">
        <Image
          src={feature.image}
          alt={feature.imageAlt}
          fill
          sizes="144px"
          className="object-contain"
        />
      </div>
      <h3
        className={cn(
          "max-w-xs text-center text-[36px] font-semibold leading-tight",
          styles.visualTitle
        )}
      >
        {feature.title}
      </h3>
    </div>
  );
}

function MediaOnlyCard({ feature }: Readonly<{ feature: StudioFeature }>) {
  const fit = feature.mediaObjectFit ?? "cover";

  let imageClass = "object-cover object-center";
  if (fit === "contain") {
    imageClass = "object-contain object-center";
  }

  return (
    <div className="relative h-full min-h-[320px] overflow-hidden bg-black md:min-h-[380px]">
      <Image
        key={feature.image}
        src={feature.image}
        alt={feature.imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={100}
        unoptimized
        className={imageClass}
      />
    </div>
  );
}

function HalfCardContent({
  feature,
  styles,
  cardKind,
}: Readonly<{
  feature: StudioFeature;
  styles: (typeof themeStyles)[keyof typeof themeStyles];
  cardKind: string;
}>) {
  if (cardKind === "visual") {
    return <VisualCard feature={feature} styles={styles} />;
  }
  if (cardKind === "media") {
    return <MediaOnlyCard feature={feature} />;
  }
  return <FeatureCopy feature={feature} styles={styles} />;
}

export default function CapabilityStudioFeatureBlock({
  accent,
  feature,
  index,
}: Readonly<CapabilityStudioFeatureBlockProps>) {
  const tokens = getStudioAccent(accent);
  const styles = themeStyles[feature.theme];
  const imageFirst = feature.imageSide === "left";
  const cardKind = feature.cardKind ?? "text";

  if (feature.layout === "half") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.45, delay: index * 0.04 }}
        className={cn("h-full overflow-hidden rounded-[12px]", styles.card)}
      >
        <HalfCardContent
          feature={feature}
          styles={styles}
          cardKind={cardKind}
        />
      </motion.article>
    );
  }

  if (feature.layout === "split") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.45, delay: index * 0.04 }}
        className="grid gap-4 md:grid-cols-2 md:gap-5"
      >
        <article className={cn("overflow-hidden rounded-[12px]", styles.card)}>
          <FeatureCopy feature={feature} styles={styles} />
        </article>
        <article className="overflow-hidden rounded-[12px] md:min-h-[380px]">
          <FeatureMedia
            feature={feature}
            accentColor={tokens.color}
            panel={feature.mediaPanel ?? "accent"}
          />
        </article>
      </motion.div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className={cn("overflow-hidden rounded-[12px]", styles.card)}
    >
      <div className="grid md:grid-cols-2 md:items-stretch md:min-h-[420px]">
        <div className={cn("min-h-[300px] md:min-h-0", imageFirst ? "md:order-1" : "md:order-2")}>
          <FeatureMedia
            feature={feature}
            accentColor={tokens.color}
            panel={feature.mediaPanel ?? "image"}
          />
        </div>
        <div className={imageFirst ? "md:order-2" : "md:order-1"}>
          <FeatureCopy feature={feature} styles={styles} />
        </div>
      </div>
    </motion.article>
  );
}
