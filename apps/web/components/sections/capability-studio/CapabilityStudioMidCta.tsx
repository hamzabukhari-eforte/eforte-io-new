"use client";

import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import { getStudioAccent } from "@/data/capabilities/accents";
import type {
  StudioAccentId,
  StudioMidCtaContent,
} from "@/data/capabilities/types";
import { cn } from "@/lib/utils";

type CapabilityStudioMidCtaProps = {
  accent: StudioAccentId;
  midCta: StudioMidCtaContent;
  graphicSrc: string;
};

export default function CapabilityStudioMidCta({
  accent,
  midCta,
  graphicSrc,
}: CapabilityStudioMidCtaProps) {
  const tokens = getStudioAccent(accent);

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="max-w-2xl">
            <Image
              src={graphicSrc}
              alt=""
              width={36}
              height={36}
              className="h-8 w-8 object-contain"
              aria-hidden
            />
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-default sm:text-4xl lg:text-[48px] lg:leading-[1.12]">
              {midCta.titleBefore}
              <span className={tokens.textClass}>{midCta.titleHighlight}</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#8A8A8A] md:text-lg">
              {midCta.description}
            </p>
          </div>

          <ContactCTA
            className={cn(
              "inline-flex w-fit items-center gap-2 border-b pb-1 text-base font-medium text-default transition-opacity hover:opacity-70",
              tokens.underlineClass
            )}
          >
            {midCta.ctaLabel}
            <HiArrowRight className="h-4 w-4" />
          </ContactCTA>
        </div>
      </Container>
    </section>
  );
}
