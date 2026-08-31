"use client";

import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import { getStudioAccent } from "@/data/capabilities/accents";
import type {
  StudioAccentId,
  StudioHeroContent,
} from "@/data/capabilities/types";
import { cn } from "@/lib/utils";
import AppSolutionsHeroGraphic from "./AppSolutionsHeroGraphic";
import PlatformEngineeringHeroGraphic from "./PlatformEngineeringHeroGraphic";

type CapabilityStudioHeroProps = {
  accent: StudioAccentId;
  hero: StudioHeroContent;
};

const heroGraphicClassName =
  "h-auto w-full max-h-[280px] object-contain sm:max-h-[340px] md:max-h-[400px] lg:max-h-[440px]";

export default function CapabilityStudioHero({
  accent,
  hero,
}: CapabilityStudioHeroProps) {
  const tokens = getStudioAccent(accent);
  const graphicPath = (hero.graphicSrc.split("?")[0] ?? hero.graphicSrc).toLowerCase();
  const isPlatformHero =
    graphicPath.includes("platform-engineering") && graphicPath.endsWith(".svg");
  const isAppSolutionsHero =
    graphicPath.includes("/app-solution/") && graphicPath.endsWith(".svg");
  const isBlockchainHero =
    graphicPath.includes("blockchain") && graphicPath.includes("hero");
  const graphicClassName = isBlockchainHero
    ? "h-auto w-full max-h-[200px] object-contain sm:max-h-[240px] md:max-h-[280px] lg:max-h-[300px]"
    : heroGraphicClassName;

  return (
    <section className="bg-white pb-0 pt-28 text-black md:pt-32">
      <Container>
        <div className="overflow-hidden rounded-none border border-[#E8E8E8] md:rounded-[12px]">
          <div className="grid lg:grid-cols-[1.35fr_0.9fr]">
            {/* Left copy */}
            <div className="flex flex-col border-[#E8E8E8] lg:border-r">
              <div className="flex flex-1 flex-col justify-center px-6 py-10 sm:px-10 md:px-12 md:py-14">
                <p className="text-base font-medium text-black md:text-lg">
                  {hero.label}
                </p>

                <h1 className="mt-6 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-black sm:text-4xl lg:text-[48px]">
                  {hero.titleBefore}
                  <span className={tokens.textClass}>{hero.titleHighlight}</span>
                  {hero.titleMiddle}
                  {hero.titleHighlight2 ? (
                    <span className={tokens.textClass}>{hero.titleHighlight2}</span>
                  ) : null}
                  {hero.titleAfter}
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-black md:text-lg">
                  {hero.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-[#E8E8E8] px-6 py-5 sm:px-10 md:px-12">
                <p className="shrink-0 text-sm font-semibold text-black md:text-base">
                  {hero.brandsLabel}
                </p>
                {hero.brands.map((brand) => {
                  const src = brand.logoSrc ?? brand.iconSrc;
                  if (!src) return null;

                  return (
                    <span
                      key={brand.name}
                      className="inline-flex h-6 shrink-0 items-center justify-center md:h-7"
                    >
                      <Image
                        src={src}
                        alt={brand.name}
                        width={140}
                        height={28}
                        unoptimized
                        className="h-full w-auto object-contain"
                      />
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Right mark + CTA */}
            <div className="flex min-h-[320px] flex-col border-t border-[#E8E8E8] lg:min-h-[480px] lg:border-t-0">
              <div className="relative flex flex-1 items-center justify-center bg-[#F5F5F5] px-6 py-8 sm:px-8 md:py-10 lg:px-10">
                {isPlatformHero ? (
                  <PlatformEngineeringHeroGraphic className={graphicClassName} />
                ) : isAppSolutionsHero ? (
                  <AppSolutionsHeroGraphic className={graphicClassName} />
                ) : (
                  <Image
                    src={hero.graphicSrc}
                    alt=""
                    width={560}
                    height={560}
                    className={graphicClassName}
                    priority
                    aria-hidden
                  />
                )}
              </div>

              <ContactCTA
                className={cn(
                  "flex h-14 w-full items-center justify-center gap-3 text-base font-medium text-white transition-opacity hover:opacity-90 md:h-16",
                  hero.ctaBgClass ?? tokens.bgClass
                )}
              >
                {hero.ctaLabel}
                <HiArrowRight className="h-5 w-5" />
              </ContactCTA>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
