import { IndustryPageSections } from "@/components/sections/industry-page";
import { insuranceIndustry } from "@/data/industries/insurance";

export const metadata = {
  title: insuranceIndustry.metadata.title,
  description: insuranceIndustry.metadata.description,
};

export default function InsurancePage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <IndustryPageSections content={insuranceIndustry} />
    </main>
  );
}
