import { pageMeta } from "@/lib/seo/meta";
import { notFound } from "next/navigation";
import CareersJobDetailHeroSection from "@/components/sections/careers/CareersJobDetailHeroSection";
import CareersJobDetailBodySection from "@/components/sections/careers/CareersJobDetailBodySection";
import JsonLd from "@/components/atoms/JsonLd";
import { getJobOpening, jobOpenings } from "@/data/careersJobs";
import { breadcrumbJsonLd, jobPostingJsonLd } from "@/lib/seo/jsonLd";

export const dynamicParams = true;

export function generateStaticParams() {
  return jobOpenings.map((job) => ({ slug: job.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobOpening(slug);

  if (!job) {
    return { title: "Role not found | eForte" };
  }

  return pageMeta({
    title: `${job.title} | Careers | eForte`,
    description: job.summary,
    path: `/careers/${slug}`,
  });
}

export default async function CareersJobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobOpening(slug);

  if (!job) return notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
    { name: job.title, path: `/careers/${job.id}` },
  ]);

  return (
    <main className="min-h-screen bg-black">
      <JsonLd data={[jobPostingJsonLd(job), breadcrumb]} />
      <CareersJobDetailHeroSection job={job} />
      <CareersJobDetailBodySection job={job} />
    </main>
  );
}
