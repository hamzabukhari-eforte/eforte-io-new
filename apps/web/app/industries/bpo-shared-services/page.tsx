import { IndustryPageSections } from "@/components/sections/industry-page";
import { bpoSharedServicesIndustry } from "@/data/industries/bpoSharedServices";

export const metadata = {
  title: bpoSharedServicesIndustry.metadata.title,
  description: bpoSharedServicesIndustry.metadata.description,
};

export default function BpoSharedServicesPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <IndustryPageSections content={bpoSharedServicesIndustry} />
    </main>
  );
}
