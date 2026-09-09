"use client";

import type { IndustryPageContent } from "@/data/industries/types";
import ProductDesignShowcaseSection from "@/components/sections/product-design/ProductDesignShowcaseSection";
import IndustryExpertiseSection from "./IndustryExpertiseSection";
import IndustryHeroSection from "./IndustryHeroSection";
import IndustryHighlightsSection from "./IndustryHighlightsSection";
import IndustrySecuritySection from "./IndustrySecuritySection";
import IndustrySuccessStoriesSection from "./IndustrySuccessStoriesSection";

const SHARED_STUDIO_INDUSTRY_SLUGS = new Set([
  "bpo-shared services",
  "insurance",
  "automobile",
  "heavy-industries",
  "hospitality",
]);

type IndustryPageSectionsProps = {
  content: IndustryPageContent;
};

export default function IndustryPageSections({
  content,
}: IndustryPageSectionsProps) {
  const useSharedStudioLayout = SHARED_STUDIO_INDUSTRY_SLUGS.has(content.slug);

  return (
    <>
      <IndustryHeroSection content={content.hero} />
      <IndustryExpertiseSection
        content={content.expertise}
        expandStatCards={useSharedStudioLayout}
      />
      <IndustryHighlightsSection highlights={content.highlights} />
      <IndustrySecuritySection content={content.security} />
      {useSharedStudioLayout ? (
        <ProductDesignShowcaseSection />
      ) : (
        <IndustrySuccessStoriesSection stories={content.successStories} />
      )}
    </>
  );
}
