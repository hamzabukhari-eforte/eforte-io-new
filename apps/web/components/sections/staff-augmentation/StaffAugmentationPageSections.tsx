"use client";

import {
  StudioProcessSection,
  StudioValuesSection,
} from "@/components/sections/studio-shared";
import { staffAugmentationContent } from "@/data/capabilities/staffAugmentation";
import StaffAugmentationHeroSection from "./StaffAugmentationHeroSection";
import StaffAugmentationFaqSection from "./StaffAugmentationFaqSection";

export default function StaffAugmentationPageSections() {
  const { valuesIntro, values, process } = staffAugmentationContent;

  return (
    <>
      <StaffAugmentationHeroSection />
      <StudioValuesSection
        eyebrow={valuesIntro.eyebrow}
        title={valuesIntro.title}
        values={values}
        iconPosition="top-right"
        eyebrowClassName="text-primary-pink"
        headingClassName="text-[36px] sm:text-[36px] lg:text-[36px] lg:leading-tight"
        cardTitleClassName="text-[36px] md:text-[36px]"
        cardDescriptionClassName="text-[16px] md:text-[16px]"
      />
      <StudioProcessSection items={process} solidTypography />
      <StaffAugmentationFaqSection />
      {/* Closing CTA banner removed — layout already covers get-in-touch */}
      {/* <StudioContactBanner content={closingCta} /> */}
    </>
  );
}
