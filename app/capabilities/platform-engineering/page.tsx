import { CapabilityStudioPage } from "@/components/sections/capability-studio";
import { platformEngineeringContent } from "@/data/capabilities/platformEngineering";

export const metadata = {
  title: "Platform Engineering | eForte",
  description:
    "Platform engineering studio for architecture, APIs, code quality, discovery, due diligence, and scalable delivery foundations.",
};

export default function PlatformEngineeringPage() {
  return <CapabilityStudioPage content={platformEngineeringContent} />;
}
