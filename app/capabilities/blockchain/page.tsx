import { CapabilityStudioPage } from "@/components/sections/capability-studio";
import { blockchainContent } from "@/data/capabilities/blockchain";

export const metadata = {
  title: "Blockchain | eForte",
  description:
    "Blockchain development studio for smart contracts, integrations, security, tokenization, and infrastructure.",
};

export default function BlockchainPage() {
  return <CapabilityStudioPage content={blockchainContent} />;
}
