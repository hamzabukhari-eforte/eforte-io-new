"use client";

import { StudioSuccessStoriesSection } from "@/components/sections/studio-shared";
import { productDesignShowcase } from "@/data/productDesign";

/**
 * Same success stories carousel as Capabilities → Product Design.
 * Previous healthcare-specific stories preserved in git history for possible reuse.
 */
export default function HealthcareSuccessStoriesSection() {
  return <StudioSuccessStoriesSection stories={productDesignShowcase} />;
}
