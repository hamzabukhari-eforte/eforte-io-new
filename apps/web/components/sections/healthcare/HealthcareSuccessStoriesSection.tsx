"use client";

import { StudioSuccessStoriesSection } from "@/components/sections/studio-shared";
import { getIndustryShowcase } from "@/data/industries/industryShowcases";

/**
 * Health & Wellbeing industry Success Stories only
 * (Aurelia, PulseLink, Northstar, Thornfield, Helix + ClearPath, Harborlight, PulseWell, BioResearch).
 */
export default function HealthcareSuccessStoriesSection() {
  const stories = getIndustryShowcase("healthcare") ?? [];

  return (
    <div className="relative -mt-8 bg-default md:-mt-10">
      <StudioSuccessStoriesSection
        stories={stories}
        className="rounded-[12px] bg-white pt-10 pb-16 md:pt-12 md:pb-20"
      />
    </div>
  );
}
