/**
 * PARKED / NOT SHIPPED (audit H-08)
 * ---------------------------------------------------------------
 * This route is intentionally preserved for later reuse.
 * It has been fully unlinked from navigation, footer, sitemap,
 * llms.txt, ai.txt, and llms-full.txt.
 * Content is not finalized — do not treat as a live marketing page.
 * Re-link only when claims/copy are approved.
 * robots noindex is set so crawlers/audits know this is intentional.
 */
import { pageMeta } from "@/lib/seo/meta";
import LocationsPageContent from "./LocationsPageContent";

export const metadata = {
  ...pageMeta({
    title: "Locations | eForte",
    description:
      "eForte offices in Wilmington, San Jose, and Austin, plus remote and nearshore delivery centers.",
    path: "/locations",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function LocationsPage() {
  return <LocationsPageContent />;
}
