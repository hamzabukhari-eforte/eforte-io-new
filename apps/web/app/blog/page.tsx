import { pageMeta } from "@/lib/seo/meta";
import { InsightsHeroSection, InsightsPostsSection } from "@/components/sections/insights";
import { getInsightCategories, getInsightPosts } from "@/lib/strapi/insights";

export const metadata = pageMeta({
  title: "Insights | eForte",
  description: "Dive into expert insights on Data & AI, Databricks, and AI-native product development from the eForte team.",
  path: "/blog",
});

export default async function InsightsPage() {
  const [posts, categories] = await Promise.all([getInsightPosts(), getInsightCategories()]);
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <main className="min-h-screen bg-black text-white">
      <InsightsHeroSection featuredPost={featuredPost} categories={categories} />
      <InsightsPostsSection posts={otherPosts} allPosts={posts} />
    </main>
  );
}
