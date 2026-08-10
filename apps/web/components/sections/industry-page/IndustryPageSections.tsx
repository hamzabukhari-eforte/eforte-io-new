"use client";

import type { IndustryPageContent } from "@/data/industries/types";
import IndustryExpertiseSection from "./IndustryExpertiseSection";
import IndustryHeroSection from "./IndustryHeroSection";
import IndustryHighlightsSection from "./IndustryHighlightsSection";
import IndustrySecuritySection from "./IndustrySecuritySection";
import IndustrySuccessStoriesSection from "./IndustrySuccessStoriesSection";

type IndustryPageSectionsProps = {
  content: IndustryPageContent;
};

export default function IndustryPageSections({
  content,
}: IndustryPageSectionsProps) {
  return (
    <>
      <IndustryHeroSection content={content.hero} />
      <IndustryExpertiseSection content={content.expertise} />
      <IndustryHighlightsSection highlights={content.highlights} />
      <IndustrySecuritySection content={content.security} />
      <IndustrySuccessStoriesSection stories={content.successStories} />
    </>
  );
}
