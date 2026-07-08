import { notFound } from "next/navigation";
import { InsightDetailSection } from "@/components/sections/insights";
import {
  getAllInsightSlugs,
  getInsightBySlug,
  getInsightCategories,
  getRecentInsightPosts,
  getStrapiCategories,
} from "@/lib/strapi/insights";

export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getAllInsightSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getInsightBySlug(slug);
  if (!post) return { title: "Blog | eForte" };

  return {
    title: `${post.title} | Blog | eForte`,
    description: post.description,
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, recentPosts, categories, insightCategories] = await Promise.all([
    getInsightBySlug(slug),
    getRecentInsightPosts(slug),
    getStrapiCategories(),
    getInsightCategories(),
  ]);

  if (!post) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://eforte.io";
  const shareUrl = `${siteUrl}/blog/${slug}`;

  return (
    <main className="min-h-screen bg-default text-white">
      <InsightDetailSection
        post={post}
        recentPosts={recentPosts}
        categories={categories}
        insightCategories={insightCategories}
        shareUrl={shareUrl}
      />
    </main>
  );
}
