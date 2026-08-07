"use client";

import Image from "next/image";
import { FaBell, FaMapMarkedAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { SiRipple, SiShopify } from "react-icons/si";
import type { IconType } from "react-icons";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import { getStudioAccent } from "@/data/capabilities/accents";
import type {
  StudioAccentId,
  StudioBrandIconId,
  StudioHeroContent,
} from "@/data/capabilities/types";
import { cn } from "@/lib/utils";

const brandIcons: Record<StudioBrandIconId, IconType> = {
  shopify: SiShopify,
  onesignal: FaBell,
  ripple: SiRipple,
  "land-id": FaMapMarkedAlt,
};

type CapabilityStudioHeroProps = {
  accent: StudioAccentId;
  hero: StudioHeroContent;
};

export default function CapabilityStudioHero({
  accent,
  hero,
}: CapabilityStudioHeroProps) {
  const tokens = getStudioAccent(accent);

  return (
    <section className="bg-white pb-4 pt-28 text-default md:pb-6 md:pt-32">
      <Container>
        <div className="overflow-hidden rounded-none border border-[#E8E8E8] md:rounded-sm">
          <div className="grid lg:grid-cols-[1.35fr_0.9fr]">
            {/* Left copy */}
            <div className="flex flex-col border-[#E8E8E8] lg:border-r">
              <div className="flex flex-1 flex-col justify-center px-6 py-10 sm:px-10 md:px-12 md:py-14">
                <div className="flex items-center gap-3">
                  <Image
                    src={hero.graphicSrc}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                    aria-hidden
                  />
                  <p className="text-base font-medium text-default md:text-lg">
                    {hero.label}
                  </p>
                </div>

                <h1 className="mt-6 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-default sm:text-4xl lg:text-[48px]">
                  {hero.titleBefore}
                  <span className={tokens.textClass}>{hero.titleHighlight}</span>
                  {hero.titleMiddle}
                  {hero.titleHighlight2 ? (
                    <span className={tokens.textClass}>{hero.titleHighlight2}</span>
                  ) : null}
                  {hero.titleAfter}
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#8A8A8A] md:text-lg">
                  {hero.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#E8E8E8] px-6 py-5 sm:px-10 md:px-12">
                <p className="text-sm font-semibold text-default md:text-base">
                  {hero.brandsLabel}
                </p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 md:gap-x-6">
                  {hero.brands.map((brand) => {
                    if (brand.logoSrc) {
                      return (
                        <Image
                          key={brand.name}
                          src={brand.logoSrc}
                          alt={brand.name}
                          width={88}
                          height={24}
                          className="h-5 w-auto opacity-45 grayscale"
                        />
                      );
                    }

                    const BrandIcon = brand.iconId
                      ? brandIcons[brand.iconId]
                      : undefined;

                    return (
                      <span
                        key={brand.name}
                        className="inline-flex items-center gap-1.5 text-[#B0B0B0] transition-colors hover:text-[#8A8A8A]"
                      >
                        {BrandIcon ? (
                          <BrandIcon
                            className="h-4 w-4 shrink-0 md:h-5 md:w-5"
                            aria-hidden
                          />
                        ) : null}
                        <span className="text-sm font-medium tracking-tight md:text-base">
                          {brand.name}
                        </span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right mark + CTA */}
            <div className="flex min-h-[320px] flex-col border-t border-[#E8E8E8] lg:min-h-[480px] lg:border-t-0">
              <div className="relative flex flex-1 items-center justify-center bg-[#F5F5F5] px-6 py-8 sm:px-8 md:py-10 lg:px-10">
                <Image
                  src={hero.graphicSrc}
                  alt=""
                  width={560}
                  height={560}
                  className="h-auto w-full max-h-[280px] object-contain sm:max-h-[340px] md:max-h-[400px] lg:max-h-[440px]"
                  priority
                  aria-hidden
                />
              </div>

              <ContactCTA
                className={cn(
                  "flex h-14 w-full items-center justify-center gap-3 text-base font-medium text-white transition-opacity hover:opacity-90 md:h-16",
                  tokens.bgClass
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
