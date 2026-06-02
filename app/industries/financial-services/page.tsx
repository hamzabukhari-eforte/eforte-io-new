import {
  FinancialServicesAgentsSection,
  FinancialServicesDataFoundationsSection,
  FinancialServicesExpertiseSection,
  FinancialServicesFinanceStudioSection,
  FinancialServicesHeroSection,
  FinancialServicesOurWorkSection,
  FinancialServicesSolutionsSection,
  FinancialServicesTestimonialsSection,
  FinancialServicesWebinarSection,
} from "@/components/sections/financial-services";
import TrustedBySection from "@/components/sections/TrustedBySection";
import { defaultTrustedByLogosDark } from "@/data/trustedByLogos";

export const metadata = {
  title: "Financial Services | eForte",
  description:
    "Modern data and AI-driven financial services solutions - from core banking and BaaS to financial AI agents and payments.",
};

export default function FinancialServicesPage() {
  return (
    <main className="min-h-screen bg-white text-default">
      <FinancialServicesHeroSection />
      <TrustedBySection items={defaultTrustedByLogosDark} variant="light" />
      <FinancialServicesOurWorkSection />
      <FinancialServicesFinanceStudioSection />
      <FinancialServicesAgentsSection />
      <FinancialServicesWebinarSection />
      <FinancialServicesDataFoundationsSection />
      <FinancialServicesSolutionsSection />
      <FinancialServicesExpertiseSection />
      <FinancialServicesTestimonialsSection />
    </main>
  );
}
