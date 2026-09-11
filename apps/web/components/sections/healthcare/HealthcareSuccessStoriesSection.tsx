"use client";

import { StudioSuccessStoriesSection } from "@/components/sections/studio-shared";
import { healthcareShowcase } from "@/data/industries/healthcareShowcase";

/**
 * Same success stories carousel as Product Design, plus the five Healthcare
 * Capabilities tab case studies (Digital Patient Experience, mHealth, Virtual
 * Care, Agentic Orchestration, Foundational Data Layer).
 */
export default function HealthcareSuccessStoriesSection() {
  return (
    <div className="relative -mt-8 bg-default md:-mt-10">
      <StudioSuccessStoriesSection
        stories={healthcareShowcase}
        className="rounded-[12px] bg-white py-20 md:py-28"
      />
    </div>
  );
}
