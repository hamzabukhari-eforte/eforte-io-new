import { pageMeta } from "@/lib/seo/meta";
import LocationsPageContent from "./LocationsPageContent";

export const metadata = pageMeta({
  title: "Locations | eForte",
  description: "eForte offices in Wilmington, San Jose, and Austin, plus remote and nearshore delivery centers.",
  path: "/locations",
});

export default function LocationsPage() {
  return <LocationsPageContent />;
}
