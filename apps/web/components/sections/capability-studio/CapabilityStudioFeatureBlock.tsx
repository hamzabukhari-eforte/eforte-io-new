"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getStudioAccent } from "@/data/capabilities/accents";
import type {
  StudioAccentId,
  StudioFeature,
} from "@/data/capabilities/types";
import { cn } from "@/lib/utils";

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
}: {
  feature: StudioFeature;
  styles: (typeof themeStyles)[keyof typeof themeStyles];
}) {
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

function FeatureMedia({
  feature,
  accentColor,
  panel,
}: {
  feature: StudioFeature;
  accentColor: string;
  panel?: "image" | "accent" | "black";
}) {
  const isSolidPanel = panel === "accent" || panel === "black";
  const isInset = Boolean(feature.mediaInset);
  const isFullBleed = Boolean(feature.mediaFullBleed);
  const imagePath = feature.image.split("?")[0] ?? feature.image;
  const isSvg = imagePath.endsWith(".svg");
  const solidBg =
    panel === "black" ? "#000000" : panel === "accent" ? accentColor : undefined;

  if (isInset) {
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

  return (
    <div
      className={cn(
        "relative h-full min-h-[300px] overflow-hidden md:min-h-[380px] lg:min-h-full",
        isSolidPanel && !isFullBleed ? "flex items-center justify-center" : ""
      )}
      style={solidBg ? { backgroundColor: solidBg } : undefined}
    >
      {isSolidPanel && !isFullBleed ? (
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
      ) : (
        <Image
          src={feature.image}
          alt={feature.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={cn(
            isSvg || isFullBleed || isSolidPanel
              ? "object-contain object-center"
              : "object-cover object-center",
            isSvg && !isFullBleed && !isSolidPanel ? "p-6 md:p-10" : ""
          )}
          unoptimized={isSvg}
        />
      )}
    </div>
  );
}

function VisualCard({
  feature,
  styles,
}: {
  feature: StudioFeature;
  styles: (typeof themeStyles)[keyof typeof themeStyles];
}) {
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

function MediaOnlyCard({ feature }: { feature: StudioFeature }) {
  const fit = feature.mediaObjectFit ?? "cover";

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
        className={
          fit === "contain"
            ? "object-contain object-center"
            : "object-cover object-center"
        }
      />
    </div>
  );
}

export default function CapabilityStudioFeatureBlock({
  accent,
  feature,
  index,
}: CapabilityStudioFeatureBlockProps) {
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
        {cardKind === "visual" ? (
          <VisualCard feature={feature} styles={styles} />
        ) : cardKind === "media" ? (
          <MediaOnlyCard feature={feature} />
        ) : (
          <FeatureCopy feature={feature} styles={styles} />
        )}
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
