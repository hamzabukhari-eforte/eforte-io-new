import { pageMeta } from "@/lib/seo/meta";
import ImpactStudiesContent from "./ImpactStudiesContent";

export const metadata = pageMeta({
  title: "Impact Studies | eForte",
  description: "Explore in-depth case studies showcasing how we empower organizations to lead, innovate, and transform their industries.",
  path: "/impact-studies",
});

export default function ImpactStudiesPage() {
  return <ImpactStudiesContent />;
}

