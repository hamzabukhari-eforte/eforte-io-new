"use client";

import CareersHeroSection from "@/components/sections/careers/CareersHeroSection";
import CareersValuesIntroSection from "@/components/sections/careers/CareersValuesIntroSection";
import CareersValuesGridSection from "@/components/sections/careers/CareersValuesGridSection";
import CareersBenefitsSection from "@/components/sections/careers/CareersBenefitsSection";
import CareersTestimonialsSection from "@/components/sections/careers/CareersTestimonialsSection";
import CareersJobOpeningsSection from "@/components/sections/careers/CareersJobOpeningsSection";
import CareersPhotoGallerySection from "@/components/sections/careers/CareersPhotoGallerySection";
import CareersJoinTeamSection from "@/components/sections/careers/CareersJoinTeamSection";

export default function CareersPageContent() {
  return (
    <main className="min-h-screen bg-black">
      <CareersHeroSection />
      <CareersValuesIntroSection />
      <CareersValuesGridSection />
      <CareersBenefitsSection />
      <CareersTestimonialsSection />
      <CareersJobOpeningsSection />
      <CareersPhotoGallerySection />
      <CareersJoinTeamSection />
    </main>
  );
}
