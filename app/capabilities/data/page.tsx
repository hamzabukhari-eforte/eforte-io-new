import {
  DataAcceleratorsSection,
  DataCaseStudySection,
  DataCtaBannerSection,
  DataDatabricksPartnerSection,
  DataFaqSection,
  DataGovernanceSection,
  DataHeroSection,
  DataInsightsSection,
  DataPartnersSection,
  DataServicesSection,
} from "@/components/sections/data";

export const metadata = {
  title: "Data | eForte",
  description:
    "Data engineering, governance, analytics, and modern platform capabilities — from architecture and ETL to lakehouses, BI, and AI-ready foundations.",
};

export default function DataCapabilityPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <DataHeroSection />
      <DataGovernanceSection />
      <DataPartnersSection />
      <DataDatabricksPartnerSection />
      <DataServicesSection />
      <DataAcceleratorsSection />
      <DataCaseStudySection />
      <DataCtaBannerSection />
      <DataInsightsSection />
      <DataFaqSection />
    </main>
  );
}
