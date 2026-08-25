"use client";

import { StudioProcessSection } from "@/components/sections/studio-shared";
import { productDesignProcess } from "@/data/productDesign";

export default function ProductDesignProcessSection() {
  return (
    <StudioProcessSection
      items={productDesignProcess}
      className="pt-10"
      imageFit="contain"
    />
  );
}
