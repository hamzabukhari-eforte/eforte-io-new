import { pageMeta } from "@/lib/seo/meta";
import { CapabilityStudioPage } from "@/components/sections/capability-studio";
import { getBlockchainContent } from "@/data/capabilities/blockchain";

export const metadata = pageMeta({
  title: "Blockchain | eForte",
  description: "Blockchain development studio for smart contracts, integrations, security, tokenization, and infrastructure.",
  path: "/capabilities/blockchain",
});

export default function BlockchainPage() {
  return <CapabilityStudioPage content={getBlockchainContent()} />;
}
