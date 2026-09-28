import { pageMeta } from "@/lib/seo/meta";
import StaffAugmentationPageSections from "@/components/sections/staff-augmentation/StaffAugmentationPageSections";

export const metadata = pageMeta({
  title: "Staff Augmentation – Dedicated Resource Hiring | eForte",
  description: "Build and scale software faster with eForte's staff augmentation services. Access top-tier AI engineers, data scientists, cloud specialists, and software developers.",
  path: "/capabilities/staff-augmentation",
});

export default function StaffAugmentationPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <StaffAugmentationPageSections />
    </main>
  );
}
