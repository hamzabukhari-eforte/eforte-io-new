import {
  InsuranceExpertiseSection,
  InsuranceHeroSection,
  InsuranceHighlightsSection,
  InsuranceSecuritySection,
  InsuranceSuccessStoriesSection,
} from "@/components/sections/insurance";

export const metadata = {
  title: "Insurance | eForte",
  description:
    "Reimagining insurance with data and AI - from usage-based coverage to personalized policies and advanced algorithms across the insurance value chain.",
};

export default function InsurancePage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <InsuranceHeroSection />
      <InsuranceExpertiseSection />
      <InsuranceHighlightsSection />
      <InsuranceSecuritySection />
      <InsuranceSuccessStoriesSection />
    </main>
  );
}
