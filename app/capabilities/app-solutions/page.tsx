import { CapabilityStudioPage } from "@/components/sections/capability-studio";
import { appSolutionsContent } from "@/data/capabilities/appSolutions";

export const metadata = {
  title: "App Solutions | eForte",
  description:
    "Mobile app solutions studio for native and hybrid development, SDKs, testing, device integrations, and store positioning.",
};

export default function AppSolutionsPage() {
  return <CapabilityStudioPage content={appSolutionsContent} />;
}
