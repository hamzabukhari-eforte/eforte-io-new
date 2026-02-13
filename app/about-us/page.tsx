import AboutUsSection from "@/components/sections/about-us/AboutUsSection";
import OurTimelineSection from "@/components/sections/about-us/OurTimelineSection";
import OurValuesSection from "@/components/sections/about-us/OurValuesSection";
import WhatMakesUsDifferentSection from "@/components/sections/about-us/WhatMakesUsDifferentSection";

export const metadata = {
  title: "About Us | eForte",
  description:
    "With 20+ years of experience and 900+ highly skilled professionals, we deliver high quality digital solutions.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-default">
      <AboutUsSection />
      <OurTimelineSection />
      <WhatMakesUsDifferentSection />
      <OurValuesSection />
    </main>
  );
}
