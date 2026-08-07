import {
  CloudSreAcceleratorsSection,
  CloudSreApproachSection,
  CloudSreAwsPartnerSection,
  CloudSreFaqSection,
  CloudSreHeroSection,
  CloudSreInsightsSection,
  CloudSreProvidersSection,
  CloudSreSolutionsSection,
  CloudSreSplitSection,
  CloudSreStudioSection,
  CloudSreSuccessStoriesSection,
} from "@/components/sections/cloud-sre";

export const metadata = {
  title: "Cloud, SRE & DevOps | eForte",
  description:
    "Cloud migration, SRE, DevOps, and cybersecurity solutions — from Infrastructure as Code and CI/CD to observability, FinOps, and secure multi-cloud operations.",
};

export default function CloudSrePage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <CloudSreHeroSection />
      <CloudSreSplitSection />
      <CloudSreStudioSection />
      <CloudSreAwsPartnerSection />
      <CloudSreApproachSection />
      <CloudSreProvidersSection />
      <CloudSreSolutionsSection />
      <CloudSreAcceleratorsSection />
      <CloudSreSuccessStoriesSection />
      <CloudSreInsightsSection />
      <CloudSreFaqSection />
    </main>
  );
}
