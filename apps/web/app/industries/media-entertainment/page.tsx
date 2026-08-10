import {
  MediaEntertainmentHeroSection,
  MediaEntertainmentExperienceSection,
  MediaEntertainmentWorkSection,
  MediaEntertainmentSolutionsSection,
  MediaEntertainmentServicesSection,
  MediaEntertainmentPartnerSection,
  MediaEntertainmentSuccessStoriesSection,
  MediaEntertainmentFaqSection,
} from "@/components/sections/media-entertainment";

export const metadata = {
  title: "Media & Entertainment | eForte",
  description:
    "AI-native solutions for media, entertainment, and gaming companies - delivering personalized, real-time, and immersive experiences at scale.",
};

export default function MediaEntertainmentPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <MediaEntertainmentHeroSection />
      <MediaEntertainmentExperienceSection />
      <MediaEntertainmentWorkSection />
      <MediaEntertainmentSolutionsSection />
      <MediaEntertainmentServicesSection />
      <MediaEntertainmentPartnerSection />
      <MediaEntertainmentSuccessStoriesSection />
      <MediaEntertainmentFaqSection />
    </main>
  );
}
