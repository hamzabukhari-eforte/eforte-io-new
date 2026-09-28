import { pageMeta } from "@/lib/seo/meta";
import { CapabilityStudioPage } from "@/components/sections/capability-studio";
import { getAppSolutionsContent } from "@/data/capabilities/appSolutions";

export const metadata = pageMeta({
  title: "App Solutions | eForte",
  description: "Mobile app solutions studio for native and hybrid development, SDKs, testing, device integrations, and store positioning.",
  path: "/capabilities/app-solutions",
});

export default function AppSolutionsPage() {
  return <CapabilityStudioPage content={getAppSolutionsContent()} />;
}
