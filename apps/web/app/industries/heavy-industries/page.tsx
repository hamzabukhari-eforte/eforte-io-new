import { pageMeta } from "@/lib/seo/meta";
import { IndustryPageSections } from "@/components/sections/industry-page";
import { heavyIndustriesIndustry } from "@/data/industries/heavyIndustries";

export const metadata = pageMeta({
  title: heavyIndustriesIndustry.metadata.title,
  description: heavyIndustriesIndustry.metadata.description,
  path: "/industries/heavy-industries",
});

export default function HeavyIndustriesPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <IndustryPageSections content={heavyIndustriesIndustry} />
    </main>
  );
}
