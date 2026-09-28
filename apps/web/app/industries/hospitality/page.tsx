import { pageMeta } from "@/lib/seo/meta";
import { IndustryPageSections } from "@/components/sections/industry-page";
import { hospitalityIndustry } from "@/data/industries/hospitality";

export const metadata = pageMeta({
  title: hospitalityIndustry.metadata.title,
  description: hospitalityIndustry.metadata.description,
  path: "/industries/hospitality",
});

export default function HospitalityPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <IndustryPageSections content={hospitalityIndustry} />
    </main>
  );
}
