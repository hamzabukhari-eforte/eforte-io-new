import {
  ALL_INSIGHT_POSTS,
  categoryToSlug,
  type InsightPost,
} from "@/components/sections/insights/data";
import { formatStrapiContent } from "@/lib/strapi/content";

const REVALIDATE_SECONDS = 60;
const DEFAULT_STRAPI_URL = `http://localhost:${process.env.STRAPI_PORT ?? "6400"}`;
const FALLBACK_IMAGE = "/assets/images/velocity-ai/insight-1.png";

const BLOG_POPULATE = "populate[images]=true&populate[categories]=true";

export type InsightCategory = {
  id?: string;
  title: string;
  slug: string;
};

export type InsightsMenuItem = {
  title: string;
  description?: string;
  imageSrc?: string;
  href?: string;
};

export type InsightsMenuData = {
  highlighted: InsightsMenuItem[];
  latest: InsightsMenuItem[];
};

export type StrapiCategory = {
  id?: number | string;
  documentId?: string;
  title: string;
};

type StrapiMedia = {
  url?: string;
};

export type StrapiBlog = {
  id?: number | string;
  documentId?: string;
  slug: string;
  title: string;
  writtenBy: string;
  date: string;
  description: string;
  tag?: string;
  metaData?: string;
  images?: StrapiMedia[] | StrapiMedia | null;
  categories?: StrapiCategory[] | null;
};

export type InsightDetail = InsightPost & {
  body: string;
  tags: string[];
  publishedAt: string;
};

function getStrapiUrl(): string {
  return (process.env.NEXT_PUBLIC_STRAPI_URL ?? DEFAULT_STRAPI_URL).replace(/\/$/, "");
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
}

function unwrapStrapiList<T>(payload: unknown): T[] {
  if (Array.isArray(payload)) return payload as T[];
  if (
    payload &&
    typeof payload === "object" &&
    "data" in payload &&
    Array.isArray((payload as { data: unknown }).data)
  ) {
    return (payload as { data: T[] }).data;
  }
  return [];
}

function unwrapStrapiEntity<T>(payload: unknown): T | null {
  if (!payload || typeof payload !== "object") return null;
  if ("data" in payload) {
    const data = (payload as { data: unknown }).data;
    if (Array.isArray(data)) return (data[0] as T) ?? null;
    if (data && typeof data === "object") return data as T;
    return null;
  }
  return payload as T;
}

export function formatInsightListDate(dateStr: string): string {
  const parsed = new Date(dateStr);
  if (Number.isNaN(parsed.getTime())) return dateStr;
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatInsightDetailDate(dateStr: string): string {
  const parsed = new Date(dateStr);
  if (Number.isNaN(parsed.getTime())) return dateStr.toUpperCase();
  return parsed
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .toUpperCase();
}

function resolveImageUrl(images?: StrapiBlog["images"]): string {
  if (!images) return FALLBACK_IMAGE;

  const list = Array.isArray(images) ? images : [images];
  const first = list.find(
    (item): item is StrapiMedia => typeof item === "object" && item !== null && "url" in item
  );

  if (!first?.url) return FALLBACK_IMAGE;
  if (first.url.startsWith("http")) return first.url;
  return `${getStrapiUrl()}${first.url}`;
}

function resolveCategory(blog: StrapiBlog): string {
  if (Array.isArray(blog.categories)) {
    const titles = blog.categories
      .filter((c): c is StrapiCategory => typeof c === "object" && c !== null && "title" in c)
      .map((c) => c.title)
      .filter(Boolean);

    if (titles.length > 0) return titles.join(" · ");
  }

  return blog.tag?.trim() ?? "";
}

function parseTags(tag?: string): string[] {
  if (!tag?.trim()) return [];
  return tag
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

function mapBlogToInsightPost(blog: StrapiBlog): InsightPost {
  const plainDescription = stripHtml(blog.description ?? "");
  const excerpt = blog.metaData?.trim() || plainDescription;

  return {
    id: blog.slug,
    title: blog.title,
    description: excerpt.length > 300 ? truncate(excerpt, 300) : excerpt,
    imageSrc: resolveImageUrl(blog.images),
    category: resolveCategory(blog),
    date: formatInsightListDate(blog.date),
    author: blog.writtenBy,
  };
}

function mapPostToMenuItem(post: InsightPost): InsightsMenuItem {
  return {
    title: post.title,
    description: truncate(post.description, 80),
    imageSrc: post.imageSrc,
    href: `/blog/${post.id}`,
  };
}

async function fetchStrapiBlogs(): Promise<StrapiBlog[]> {
  try {
    const response = await fetch(
      `${getStrapiUrl()}/api/blogs?sort=date:desc&${BLOG_POPULATE}`,
      { next: { revalidate: REVALIDATE_SECONDS } }
    );

    if (!response.ok) return [];
    const payload: unknown = await response.json();
    return unwrapStrapiList<StrapiBlog>(payload).filter((blog) => Boolean(blog?.slug));
  } catch {
    return [];
  }
}

export async function getInsightPosts(): Promise<InsightPost[]> {
  const blogs = await fetchStrapiBlogs();
  if (blogs.length === 0) return ALL_INSIGHT_POSTS;
  return blogs.map(mapBlogToInsightPost);
}

export async function getInsightsMenuData(): Promise<InsightsMenuData> {
  const posts = await getInsightPosts();
  const menuItems = posts.map(mapPostToMenuItem);

  return {
    highlighted: menuItems.slice(0, 2),
    latest: menuItems.slice(2, 8),
  };
}

export async function getInsightCategories(): Promise<InsightCategory[]> {
  const categories = await getStrapiCategories();
  return categories.map((category) => ({
    id: category.id?.toString() ?? category.documentId,
    title: category.title,
    slug: categoryToSlug(category.title),
  }));
}

export function findCategoryBySlug(
  slug: string,
  categories: InsightCategory[]
): InsightCategory | undefined {
  return categories.find((category) => category.slug === slug);
}

export function filterPostsByCategory(
  posts: InsightPost[],
  categoryTitle: string
): InsightPost[] {
  const normalizedTitle = categoryTitle.toLowerCase();
  return posts.filter((post) => post.category.toLowerCase().includes(normalizedTitle));
}

export async function getStrapiCategories(): Promise<StrapiCategory[]> {
  try {
    const response = await fetch(`${getStrapiUrl()}/api/categories`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) return [];
    const payload: unknown = await response.json();
    return unwrapStrapiList<StrapiCategory>(payload)
      .filter((item) => typeof item === "object" && item !== null && "title" in item)
      .map((item) => ({
        id: item.id,
        documentId: item.documentId,
        title: String(item.title),
      }));
  } catch {
    return [];
  }
}

export function getCategoryHref(title: string, categories: InsightCategory[] = []): string {
  const slug = categoryToSlug(title);
  if (categories.some((category) => category.slug === slug)) {
    return `/blog/category/${slug}`;
  }
  return "/blog";
}

export async function getInsightBySlug(slug: string): Promise<InsightDetail | null> {
  try {
    const response = await fetch(
      `${getStrapiUrl()}/api/blogs?filters[slug][$eq]=${encodeURIComponent(slug)}&${BLOG_POPULATE}`,
      { next: { revalidate: REVALIDATE_SECONDS } }
    );

    if (!response.ok) {
      const fallback = ALL_INSIGHT_POSTS.find((post) => post.id === slug);
      if (!fallback) return null;
      return {
        ...fallback,
        body: formatStrapiContent(fallback.description),
        tags: [],
        publishedAt: fallback.date ?? "",
      };
    }

    const payload: unknown = await response.json();
    const blog = unwrapStrapiEntity<StrapiBlog>(payload);
    if (!blog?.slug) {
      const fallback = ALL_INSIGHT_POSTS.find((post) => post.id === slug);
      if (!fallback) return null;
      return {
        ...fallback,
        body: formatStrapiContent(fallback.description),
        tags: [],
        publishedAt: fallback.date ?? "",
      };
    }

    const post = mapBlogToInsightPost(blog);

    return {
      ...post,
      body: formatStrapiContent(blog.description),
      tags: parseTags(blog.tag),
      publishedAt: blog.date,
    };
  } catch {
    const fallback = ALL_INSIGHT_POSTS.find((post) => post.id === slug);
    if (!fallback) return null;
    return {
      ...fallback,
      body: formatStrapiContent(fallback.description),
      tags: [],
      publishedAt: fallback.date ?? "",
    };
  }
}

export async function getAllInsightSlugs(): Promise<string[]> {
  try {
    const response = await fetch(
      `${getStrapiUrl()}/api/blogs?fields[0]=slug&pagination[pageSize]=100`,
      { next: { revalidate: REVALIDATE_SECONDS } }
    );

    if (!response.ok) return ALL_INSIGHT_POSTS.map((post) => post.id);

    const payload: unknown = await response.json();
    const blogs = unwrapStrapiList<{ slug?: string }>(payload);
    const slugs = blogs.map((item) => item.slug ?? "").filter(Boolean);
    return slugs.length > 0 ? slugs : ALL_INSIGHT_POSTS.map((post) => post.id);
  } catch {
    return ALL_INSIGHT_POSTS.map((post) => post.id);
  }
}

export async function getRecentInsightPosts(
  currentSlug: string,
  limit = 5
): Promise<InsightPost[]> {
  const posts = await getInsightPosts();
  return posts.filter((post) => post.id !== currentSlug).slice(0, limit);
}
