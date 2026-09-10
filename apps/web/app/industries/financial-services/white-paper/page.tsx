import {
  FinancialServicesWhitePaperArticleSection,
  FinancialServicesWhitePaperCtaSection,
  FinancialServicesWhitePaperHeroSection,
} from "@/components/sections/financial-services";
import { financialServicesWhitePaper } from "@/data/industries/financialServicesWhitePaper";

export const metadata = {
  title: `${financialServicesWhitePaper.title} | eForte`,
  description: financialServicesWhitePaper.description,
};

export default function FinancialServicesWhitePaperPage() {
  return (
    <main className="min-h-screen bg-white text-default">
      <FinancialServicesWhitePaperHeroSection />
      <FinancialServicesWhitePaperArticleSection />
      <FinancialServicesWhitePaperCtaSection />
    </main>
  );
}
