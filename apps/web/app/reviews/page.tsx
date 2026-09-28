import { pageMeta } from "@/lib/seo/meta";
import ReviewsPageContent from "@/components/sections/ReviewsPageContent";

export const metadata = pageMeta({
  title: "Client Reviews | eForte",
  description: "Read detailed client reviews from eForte partners — project category, duration, ratings, and feedback summaries.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return <ReviewsPageContent />;
}
