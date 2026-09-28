import { pageMeta } from "@/lib/seo/meta";
import { TechnologyPartnersPageSections } from "@/components/sections/technology-partners";

export const metadata = pageMeta({
  title: "Technology Partners | eForte",
  description: "Explore eForte's technology partnerships with Microsoft Azure, Anthropic, OpenAI, Snowflake, and AWS, powering AI-native transformation.",
  path: "/technology-partners",
});

export default function TechnologyPartnersPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <TechnologyPartnersPageSections />
    </main>
  );
}
