"use client";

import IndustryHeroSection from "@/components/sections/industry-page/IndustryHeroSection";

const embeddedHero = {
  badge: "Capabilities / Embedded Engineering",
  headline:
    "Embedded engineering services for semiconductors and embedded systems",
  paragraphs: [
    "eForte accelerates embedded innovation through nearshore firmware development with our proven methodology and highly qualified software engineers. We collaborate in real-time and build solutions tailored for the U.S. market.",
  ],
  ctaLabel: "Let's Talk",
  imageSrc: "/assets/final-images/industries/embedded-engineering/hero-v4.png",
  // Previous hero graphics preserved for possible future reuse:
  // "/assets/final-images/industries/embedded-engineering/hero-v3.png",
  // "/assets/final-images/industries/embedded-engineering/hero-v2.png",
};

export default function EmbeddedEngineeringHeroSection() {
  return <IndustryHeroSection content={embeddedHero} />;
}
