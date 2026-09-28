import { pageMeta } from "@/lib/seo/meta";
import CareersPageContent from "./CareersPageContent";
import JsonLd from "@/components/atoms/JsonLd";
import { jobOpenings } from "@/data/careersJobs";
import { jobPostingsJsonLd } from "@/lib/seo/jsonLd";

export const metadata = pageMeta({
  title: "Careers | eForte",
  description: "Grow, Build, and Belong. Join eForte's team of engineers, designers, and strategists who turn ambitious ideas into working products.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <JsonLd data={jobPostingsJsonLd(jobOpenings)} />
      <CareersPageContent />
    </>
  );
}
