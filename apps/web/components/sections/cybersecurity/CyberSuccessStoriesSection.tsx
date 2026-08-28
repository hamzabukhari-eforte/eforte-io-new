"use client";

import { StudioSuccessStoriesSection } from "@/components/sections/studio-shared";
import { productDesignShowcase } from "@/data/productDesign";

export default function CyberSuccessStoriesSection() {
  return (
    <StudioSuccessStoriesSection
      stories={productDesignShowcase}
      className="pb-8"
    />
  );
}
