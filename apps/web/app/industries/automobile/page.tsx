import { pageMeta } from "@/lib/seo/meta";
import { IndustryPageSections } from "@/components/sections/industry-page";
import { automobileIndustry } from "@/data/industries/automobile";

export const metadata = pageMeta({
  title: automobileIndustry.metadata.title,
  description: automobileIndustry.metadata.description,
  path: "/industries/automobile",
});

export default function AutomobilePage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <IndustryPageSections content={automobileIndustry} />
    </main>
  );
}
