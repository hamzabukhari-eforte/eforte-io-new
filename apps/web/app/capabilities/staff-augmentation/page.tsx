import StaffAugmentationPageSections from "@/components/sections/staff-augmentation/StaffAugmentationPageSections";

export const metadata = {
  title: "Staff Augmentation – Dedicated Resource Hiring | eForte",
  description:
    "Build and scale software faster with eForte's staff augmentation services. Access top-tier AI engineers, data scientists, cloud specialists, and software developers.",
};

export default function StaffAugmentationPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <StaffAugmentationPageSections />
    </main>
  );
}
