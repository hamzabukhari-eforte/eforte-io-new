import { pageMeta } from "@/lib/seo/meta";
import {
  FinancialServicesWhitePaperArticleSection,
  FinancialServicesWhitePaperCtaSection,
  FinancialServicesWhitePaperHeroSection,
} from "@/components/sections/financial-services";
import { financialServicesWhitePaper } from "@/data/industries/financialServicesWhitePaper";

export const metadata = pageMeta({
  title: `${financialServicesWhitePaper.title} | eForte`,
  description: financialServicesWhitePaper.description,
  path: "/industries/financial-services/white-paper",
});

export default function FinancialServicesWhitePaperPage() {
  return (
    <main className="min-h-screen bg-white text-default">
      <FinancialServicesWhitePaperHeroSection />
      <FinancialServicesWhitePaperArticleSection />
      <FinancialServicesWhitePaperCtaSection />
    </main>
  );
}
