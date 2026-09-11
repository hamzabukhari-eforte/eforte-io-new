import { notFound } from "next/navigation";
import CareersJobDetailHeroSection from "@/components/sections/careers/CareersJobDetailHeroSection";
import CareersJobDetailBodySection from "@/components/sections/careers/CareersJobDetailBodySection";
import { getJobOpening, jobOpenings } from "@/data/careersJobs";

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

  return {
    title: `${job.title} | Careers | eForte`,
    description: job.summary,
  };
}

export default async function CareersJobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobOpening(slug);

  if (!job) return notFound();

  return (
    <main className="min-h-screen bg-black">
      <CareersJobDetailHeroSection job={job} />
      <CareersJobDetailBodySection job={job} />
    </main>
  );
}
