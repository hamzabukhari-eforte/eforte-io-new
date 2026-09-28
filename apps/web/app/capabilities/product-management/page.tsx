import { pageMeta } from "@/lib/seo/meta";
import { CapabilityStudioPage } from "@/components/sections/capability-studio";
import { productManagementContent } from "@/data/capabilities/productManagement";

export const metadata = pageMeta({
  title: "Product Management | eForte",
  description: "Product management studio for roadmap leadership, product consulting, and monetization strategy.",
  path: "/capabilities/product-management",
});

export default function ProductManagementPage() {
  return <CapabilityStudioPage content={productManagementContent} />;
}
