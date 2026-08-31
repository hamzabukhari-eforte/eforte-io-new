"use client";

import { StudioValuesSection } from "@/components/sections/studio-shared";
import { productDesignValues } from "@/data/productDesign";

export default function ProductDesignServicesSection() {
  return (
    <StudioValuesSection
      eyebrow="Product Design"
      title="Our user-centric approach is designed to support business growth while keeping delivery practical for your teams."
      values={productDesignValues}
      iconPosition="top-right"
      eyebrowClassName="text-primary-pink"
    />
  );
}
