import {
  FinancialServicesAgentsSection,
  FinancialServicesDataFoundationsSection,
  FinancialServicesExpertiseSection,
  FinancialServicesFaqSection,
  FinancialServicesFinanceStudioSection,
  FinancialServicesHeroSection,
  FinancialServicesInsightsSection,
  FinancialServicesOurWorkSection,
  FinancialServicesRelatedArticlesSection,
  FinancialServicesSolutionsSection,
  FinancialServicesSuccessStoriesSection,
  FinancialServicesTestimonialsSection,
  FinancialServicesWebinarSection,
} from "@/components/sections/financial-services";
import TrustedBySection from "@/components/sections/TrustedBySection";
import { defaultTrustedByLogosDark } from "@/data/trustedByLogos";

export const metadata = {
  title: "Finance | eForte",
  description: "Intelligent infrastructure for the next era of financial services, secure, scalable systems across lending, payments, and embedded finance.",
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
      <FinancialServicesSuccessStoriesSection />
      <FinancialServicesInsightsSection />
      <FinancialServicesRelatedArticlesSection />
      <FinancialServicesFaqSection />
    </main>
  );
}
