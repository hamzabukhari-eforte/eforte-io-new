/**
 * PARKED / NOT SHIPPED (audit H-09)
 * ---------------------------------------------------------------
 * This route is intentionally preserved for later reuse.
 * It has been fully unlinked from navigation, footer, sitemap,
 * industries CTAs, llms.txt, and ai.txt.
 * Content is not finalized — do not treat as a live marketing page.
 * Re-link only when claims/copy are approved.
 * robots noindex is set so crawlers/audits know this is intentional.
 */
import { pageMeta } from "@/lib/seo/meta";
import {
  DatabricksConferencesSection,
  DatabricksExperienceSection,
  DatabricksExpertiseVideoSection,
  DatabricksFaqSection,
  DatabricksGoldPartnerSection,
  DatabricksHeroSection,
  DatabricksInsightsSection,
  DatabricksServicesSection,
  DatabricksSpecializationSection,
  DatabricksSuccessStoriesSection,
  DatabricksTestimonialsSection,
  DatabricksWhitepaperSection,
} from "@/components/sections/databricks";

export const metadata = {
  ...pageMeta({
    title: "Databricks | eForte",
    description:
      "Databricks data and AI professional services from eForte — Gold Partner expertise for the Databricks Intelligence Platform.",
    path: "/databricks",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function DatabricksPage() {
  return (
    <main className="min-h-screen bg-[#F4F4F5] text-default">
      <DatabricksHeroSection />
      <DatabricksGoldPartnerSection />
      <DatabricksSpecializationSection />
      <DatabricksExperienceSection />
      <DatabricksExpertiseVideoSection />
      <DatabricksSuccessStoriesSection />
      <DatabricksServicesSection />
      <DatabricksWhitepaperSection />
      <DatabricksConferencesSection />
      <DatabricksTestimonialsSection />
      <DatabricksInsightsSection />
      <DatabricksFaqSection />
    </main>
  );
}
