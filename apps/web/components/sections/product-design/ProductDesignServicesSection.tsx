"use client";

import { StudioValuesSection } from "@/components/sections/studio-shared";
import { productDesignValues } from "@/data/productDesign";

export default function ProductDesignServicesSection() {
  return (
    <StudioValuesSection
      eyebrow="Product Design"
      title="A user-centric approach to help your business grow"
      values={productDesignValues}
      iconPosition="top-right"
      className="pt-26 md:pt-34"
    />
  );
}
