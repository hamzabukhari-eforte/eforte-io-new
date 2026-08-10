"use client";

import LocationsHeroSection from "@/components/sections/locations/LocationsHeroSection";
import LocationsGridSection from "@/components/sections/locations/LocationsGridSection";

export default function LocationsPageContent() {
  return (
    <main className="min-h-screen bg-default">
      <LocationsHeroSection />
      <LocationsGridSection />
    </main>
  );
}
