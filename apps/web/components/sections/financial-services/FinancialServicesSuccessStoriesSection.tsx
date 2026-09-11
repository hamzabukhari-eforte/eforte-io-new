"use client";

import { StudioSuccessStoriesSection } from "@/components/sections/studio-shared";
import { getIndustryShowcase } from "@/data/industries/industryShowcases";

/**
 * Finance industry Success Stories only
 * (Meridian Pay, Cobalt, Fenwick, Iberian, Dostpay, Investment Markets + Northbridge, Velora, Arclight).
 */
export default function FinancialServicesSuccessStoriesSection() {
  const stories = getIndustryShowcase("financial-services") ?? [];

  return (
    <div className="relative -mt-8 bg-default md:-mt-10">
      <StudioSuccessStoriesSection
        stories={stories}
        className="rounded-[12px] bg-white py-20 md:py-28"
      />
    </div>
  );
}
