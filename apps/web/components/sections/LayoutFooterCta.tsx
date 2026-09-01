"use client";

import { usePathname } from "next/navigation";
import { VelocityAIFooterCTASection } from "@/components/sections/velocity-ai";

/** Pages that render VelocityAIFooterCTASection in their own tree. */
const EMBEDDED_CTA_PATHS = new Set(["/about-us", "/technology-partners"]);

export default function LayoutFooterCta() {
  const pathname = usePathname();
  if (EMBEDDED_CTA_PATHS.has(pathname)) return null;
  return <VelocityAIFooterCTASection />;
}
