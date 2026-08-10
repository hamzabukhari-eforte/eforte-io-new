import { IndustryPageSections } from "@/components/sections/industry-page";
import { automobileIndustry } from "@/data/industries/automobile";

export const metadata = {
  title: automobileIndustry.metadata.title,
  description: automobileIndustry.metadata.description,
};

export default function AutomobilePage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <IndustryPageSections content={automobileIndustry} />
    </main>
  );
}
