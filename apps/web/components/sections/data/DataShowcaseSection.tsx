"use client";

import { StudioSuccessStoriesSection } from "@/components/sections/studio-shared";
import { dataShowcase } from "@/data/capabilities/data";

export default function DataShowcaseSection() {
  return <StudioSuccessStoriesSection stories={dataShowcase} />;
}
