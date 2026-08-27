"use client";

import { StudioSuccessStoriesSection } from "@/components/sections/studio-shared";
import { productDesignShowcase } from "@/data/productDesign";

export default function ProductDesignShowcaseSection() {
  return <StudioSuccessStoriesSection stories={productDesignShowcase} />;
}
