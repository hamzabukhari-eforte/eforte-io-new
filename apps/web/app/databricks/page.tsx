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
  title: "Databricks | eForte",
  description:
    "Databricks data and AI professional services from eForte — Gold Partner expertise for the Databricks Intelligence Platform.",
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
