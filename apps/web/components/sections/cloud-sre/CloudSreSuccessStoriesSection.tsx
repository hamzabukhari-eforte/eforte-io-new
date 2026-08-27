"use client";

import { StudioSuccessStoriesSection } from "@/components/sections/studio-shared";
import { cloudSreSuccessStories } from "@/data/capabilities/cloudSre";

export default function CloudSreSuccessStoriesSection() {
  return <StudioSuccessStoriesSection stories={cloudSreSuccessStories} />;
}
