import { pageMeta } from "@/lib/seo/meta";
import {
  BankingApproachSection,
  BankingCapabilitiesSection,
  BankingHeroSection,
  BankingTrustSection,
} from "@/components/sections/banking";

export const metadata = pageMeta({
  title: "Banking | eForte",
  description: "AI-driven banking modernization services across core systems, compliance, and cybersecurity.",
  path: "/industries/banking",
});

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
