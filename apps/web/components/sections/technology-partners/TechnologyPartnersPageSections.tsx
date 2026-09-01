"use client";

import {
  StudioProcessSection,
  StudioValuesSection,
} from "@/components/sections/studio-shared";
import { VelocityAIFooterCTASection } from "@/components/sections/velocity-ai";
import { technologyPartnersContent } from "@/data/technologyPartners";
import TechnologyPartnersHeroSection from "./TechnologyPartnersHeroSection";
import styles from "@/components/sections/ai-workflows/aiWorkflows.module.css";

export default function TechnologyPartnersPageSections() {
  const { partners, advantageIntro, advantage } = technologyPartnersContent;

  return (
    <>
      <TechnologyPartnersHeroSection />
      <div className={`${styles.workflows} ${styles.bannerFollowSheet}`}>
        <StudioProcessSection
          items={partners}
          imageFit="contain"
          solidTypography
          className="pt-0 pb-16 bg-transparent"
          labelClassName="text-[12px]"
          titleClassName="text-[36px] text-black"
          descriptionClassName="text-[16px] text-black"
          tagClassName="border-primary-pink text-primary-pink"
        />
      </div>
      <StudioValuesSection
        eyebrow={advantageIntro.eyebrow}
        title={advantageIntro.title}
        values={advantage}
        iconPosition="top-right"
        solidPalette
        invertDarkIcons
        className="mt-0 rounded-none bg-white pt-0 pb-16"
        eyebrowClassName="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink"
        headingClassName="text-[36px] text-black sm:text-[36px] lg:text-[36px] lg:leading-tight"
        cardTitleClassName="text-[20px] md:text-[20px] font-semibold"
        cardDescriptionClassName="text-[16px] md:text-[16px]"
      />
      <VelocityAIFooterCTASection />
    </>
  );
}
