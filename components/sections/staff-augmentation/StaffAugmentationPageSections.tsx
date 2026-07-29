"use client";

import {
  StudioProcessSection,
  StudioValuesSection,
} from "@/components/sections/studio-shared";
import { staffAugmentationContent } from "@/data/capabilities/staffAugmentation";
import StaffAugmentationHeroSection from "./StaffAugmentationHeroSection";

export default function StaffAugmentationPageSections() {
  const { valuesIntro, values, process } = staffAugmentationContent;

  return (
    <>
      <StaffAugmentationHeroSection />
      <StudioValuesSection
        eyebrow={valuesIntro.eyebrow}
        title={valuesIntro.title}
        values={values}
      />
      <StudioProcessSection items={process} />
      {/* Closing CTA banner removed — layout already covers get-in-touch */}
      {/* <StudioContactBanner content={closingCta} /> */}
    </>
  );
}
