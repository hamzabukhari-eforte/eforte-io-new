import {
  // CyberStudioVideoSection, // preserved — “eForte's approach…” section intentionally omitted
  // CyberExpertsSpotlightSection, // preserved — experts spotlight intentionally omitted
  CyberAiSecurityIntroSection,
  CyberCertificationsSection,
  CyberFaqSection,
  CyberHeroSection,
  CyberInsightsSection,
  CyberPillarsSection,
  CyberServicesSection,
  CyberSolutionsSection,
  CyberSuccessStoriesSection,
} from "@/components/sections/cybersecurity";

export const metadata = {
  title: "Cybersecurity | eForte",
  description:
    "AI-powered cybersecurity from eForte — securing AI systems, managed defense, DevSecOps, compliance, and security advisory for modern enterprises.",
};

export default function CybersecurityPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <CyberHeroSection />
      <CyberAiSecurityIntroSection />
      {/* <CyberStudioVideoSection /> */}
      <CyberPillarsSection />
      <CyberSolutionsSection />
      <CyberServicesSection />
      <CyberCertificationsSection />
      <CyberSuccessStoriesSection />
      {/* <CyberExpertsSpotlightSection /> */}
      <CyberInsightsSection />
      <CyberFaqSection />
    </main>
  );
}
