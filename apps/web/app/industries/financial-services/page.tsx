import { pageMeta } from "@/lib/seo/meta";
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
  // FinancialServicesWebinarSection, // preserved — Agentic Orchestration Webinar section
} from "@/components/sections/financial-services";

export const metadata = pageMeta({
  title: "Finance | eForte",
  description: "Intelligent infrastructure for the next era of financial services, secure, scalable systems across lending, payments, and embedded finance.",
  path: "/industries/financial-services",
});

export default function FinancialServicesPage() {
  return (
    <main className="min-h-screen bg-white text-default">
      <FinancialServicesHeroSection />
      <FinancialServicesOurWorkSection />
      <FinancialServicesFinanceStudioSection />
      <FinancialServicesAgentsSection />
      {/* <FinancialServicesWebinarSection /> */}
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
