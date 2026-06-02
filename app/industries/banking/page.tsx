import {
  BankingApproachSection,
  BankingCapabilitiesSection,
  BankingHeroSection,
  BankingTrustSection,
} from "@/components/sections/banking";

export const metadata = {
  title: "Banking | eForte",
  description:
    "AI-driven banking modernization services across core systems, compliance, and cybersecurity.",
};

export default function BankingPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <BankingHeroSection />
      <BankingApproachSection />
      <BankingCapabilitiesSection />
      <BankingTrustSection />
    </main>
  );
}
