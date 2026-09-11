"use client";

import type { IndustryPageContent } from "@/data/industries/types";
import { getIndustryShowcase } from "@/data/industries/industryShowcases";
import { StudioSuccessStoriesSection } from "@/components/sections/studio-shared";
import IndustryExpertiseSection from "./IndustryExpertiseSection";
import IndustryHeroSection from "./IndustryHeroSection";
import IndustryHighlightsSection from "./IndustryHighlightsSection";
import IndustrySecuritySection from "./IndustrySecuritySection";
import IndustrySuccessStoriesSection from "./IndustrySuccessStoriesSection";

const SHARED_STUDIO_INDUSTRY_SLUGS = new Set([
  "bpo-shared-services",
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
  const showcaseStories = getIndustryShowcase(content.slug);

  return (
    <>
      <IndustryHeroSection content={content.hero} />
      <IndustryExpertiseSection
        content={content.expertise}
        expandStatCards={useSharedStudioLayout}
      />
      <IndustryHighlightsSection highlights={content.highlights} />
      <IndustrySecuritySection content={content.security} />
      {showcaseStories && showcaseStories.length > 0 ? (
        <div className="relative -mt-8 bg-default md:-mt-10">
          <StudioSuccessStoriesSection
            stories={showcaseStories}
            className="rounded-[12px] bg-white py-20 md:py-28"
          />
        </div>
      ) : (
        <IndustrySuccessStoriesSection stories={content.successStories} />
      )}
    </>
  );
}
