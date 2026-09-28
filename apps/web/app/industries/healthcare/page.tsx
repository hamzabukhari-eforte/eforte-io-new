import { pageMeta } from "@/lib/seo/meta";
import {
  HealthcareHeroSection,
  HealthcareExpertiseSection,
  // HealthcareVideoSection, // preserved — Health & Wellbeing Studio video block
  // HealthcareEventsSection, // preserved — “mission to make healthcare more human” section
  HealthcareHighlightsSection,
  HealthcareCertificationsSection,
  HealthcareCapabilitiesSection,
  HealthcareTestimonialsSection,
  // HealthcareStoryVideoSection, // preserved — placeholder YouTube under testimonials
  HealthcarePortfolioSection,
  HealthcareSuccessStoriesSection,
} from "@/components/sections/healthcare";

export const metadata = pageMeta({
  title: "Health & Wellbeing | eForte",
  description: "Human centered health technology built with Velocity AI, virtual care, connected devices, Agentic Orchestration, and a Foundational Data Layer for health systems.",
  path: "/industries/healthcare",
});

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <HealthcareHeroSection />
      <HealthcareExpertiseSection />
      {/* <HealthcareVideoSection /> */}
      {/* <HealthcareEventsSection /> */}
      <HealthcareHighlightsSection />
      <HealthcareCertificationsSection />
      <HealthcareCapabilitiesSection />
      <HealthcareTestimonialsSection />
      {/* <HealthcareStoryVideoSection /> */}
      <HealthcarePortfolioSection />
      <HealthcareSuccessStoriesSection />
    </main>
  );
}
