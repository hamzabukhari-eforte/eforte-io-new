import {
  QualityAssuranceAcceleratorsSection,
  QualityAssuranceCapabilitiesSection,
  QualityAssuranceFaqSection,
  QualityAssuranceHeroSection,
  QualityAssuranceInsightsSection,
  QualityAssuranceNumbersSection,
  QualityAssuranceSuccessStoriesSection,
} from "@/components/sections/quality-assurance";

export const metadata = {
  title: "Quality Assurance | eForte",
  description:
    "AI-driven QA for impactful digital experiences — test automation, CI/CD integration, and agile expertise from eForte.",
};

export default function QualityAssurancePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <QualityAssuranceHeroSection />
      <QualityAssuranceNumbersSection />
      <QualityAssuranceCapabilitiesSection />
      <QualityAssuranceAcceleratorsSection />
      <QualityAssuranceSuccessStoriesSection />
      <QualityAssuranceInsightsSection />
      <QualityAssuranceFaqSection />
    </main>
  );
}
