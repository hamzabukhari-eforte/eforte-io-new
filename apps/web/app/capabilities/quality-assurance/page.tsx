import { pageMeta } from "@/lib/seo/meta";
import {
  QualityAssuranceAcceleratorsSection,
  QualityAssuranceCapabilitiesSection,
  QualityAssuranceFaqSection,
  QualityAssuranceHeroSection,
  QualityAssuranceInsightsSection,
  QualityAssuranceNumbersSection,
  QualityAssuranceSuccessStoriesSection,
} from "@/components/sections/quality-assurance";

export const metadata = pageMeta({
  title: "Quality Assurance | eForte",
  description: "AI-driven QA for impactful digital experiences — test automation, CI/CD integration, and agile expertise from eForte.",
  path: "/capabilities/quality-assurance",
});

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
