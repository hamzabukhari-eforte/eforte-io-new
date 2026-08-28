"use client";

import {
  StudioProcessSection,
  StudioValuesSection,
} from "@/components/sections/studio-shared";
import { technologyPartnersContent } from "@/data/technologyPartners";
import TechnologyPartnersHeroSection from "./TechnologyPartnersHeroSection";

export default function TechnologyPartnersPageSections() {
  const { partners, advantageIntro, advantage } = technologyPartnersContent;

  return (
    <>
      <TechnologyPartnersHeroSection />
      <div className="relative z-10 -mt-10 overflow-hidden rounded-t-[12px] bg-white pt-12 md:pt-16">
        <StudioProcessSection items={partners} className="pt-0 pb-16" />
      </div>
      <StudioValuesSection
        eyebrow={advantageIntro.eyebrow}
        title={advantageIntro.title}
        values={advantage}
      />
    </>
  );
}
