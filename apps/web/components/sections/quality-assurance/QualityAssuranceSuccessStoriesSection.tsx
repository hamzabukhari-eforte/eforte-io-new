"use client";

import { StudioSuccessStoriesSection } from "@/components/sections/studio-shared";
import { dataShowcase } from "@/data/capabilities/data";

/**
 * Reuses Data capability success stories (same as DataShowcaseSection).
 * Previous QA-specific success stories remain in qualityAssurance.ts for possible reuse.
 */
export default function QualityAssuranceSuccessStoriesSection() {
  return (
    <StudioSuccessStoriesSection
      stories={dataShowcase}
      className="pt-16 pb-0"
    />
  );
}
