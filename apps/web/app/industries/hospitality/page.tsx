import { IndustryPageSections } from "@/components/sections/industry-page";
import { hospitalityIndustry } from "@/data/industries/hospitality";

export const metadata = {
  title: hospitalityIndustry.metadata.title,
  description: hospitalityIndustry.metadata.description,
};

export default function HospitalityPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <IndustryPageSections content={hospitalityIndustry} />
    </main>
  );
}
