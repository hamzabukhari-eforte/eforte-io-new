import {
  HealthcareHeroSection,
  HealthcareExpertiseSection,
  HealthcareVideoSection,
  HealthcareEventsSection,
  HealthcareHighlightsSection,
  HealthcareCertificationsSection,
  HealthcareCapabilitiesSection,
  HealthcareTestimonialsSection,
  HealthcareStoryVideoSection,
  HealthcarePortfolioSection,
  HealthcareSuccessStoriesSection,
} from "@/components/sections/healthcare";

export const metadata = {
  title: "Healthcare | eForte",
  description:
    "Healthcare solutions with AI and mHealth technologies - from patient management systems and virtual care to health integrations, wearable tech, smart devices, and fitness apps.",
};

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <HealthcareHeroSection />
      <HealthcareExpertiseSection />
      <HealthcareVideoSection />
      <HealthcareEventsSection />
      <HealthcareHighlightsSection />
      <HealthcareCertificationsSection />
      <HealthcareCapabilitiesSection />
      <HealthcareTestimonialsSection />
      <HealthcareStoryVideoSection />
      <HealthcarePortfolioSection />
      <HealthcareSuccessStoriesSection />
    </main>
  );
}
