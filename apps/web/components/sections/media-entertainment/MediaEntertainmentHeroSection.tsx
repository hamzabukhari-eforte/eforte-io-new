"use client";

import IndustryHeroSection from "@/components/sections/industry-page/IndustryHeroSection";

const mediaHero = {
  badge: "Media & Entertainment",
  headline: "AI-native solutions for media, entertainment, and gaming companies",
  paragraphs: [
    "The media, entertainment, and gaming industries have already made the digital leap. Now, the next frontier is becoming AI-native. Streaming, gaming, publishing, and live events are being redefined by AI - delivering personalized, real-time, and immersive experiences at scale.",
    "At eForte, we help leading media and entertainment companies harness data and AI to build memorable brands and experiences via high-quality digital solutions.",
  ],
  ctaLabel: "Contact Us",
  imageSrc: "/assets/final-images/industries/media-entertainment/hero-v4.png",
  // Previous hero graphics preserved for possible future reuse:
  // "/assets/final-images/industries/media-entertainment/hero-v3.png",
  // "/assets/final-images/industries/media-entertainment/hero-v2.png",
};

export default function MediaEntertainmentHeroSection() {
  return <IndustryHeroSection content={mediaHero} />;
}
