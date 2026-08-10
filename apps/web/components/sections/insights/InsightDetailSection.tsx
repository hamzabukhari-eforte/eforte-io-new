import InsightImage from "@/components/atoms/InsightImage";
import Link from "next/link";
import Container from "@/components/atoms/Container";
import {
  formatInsightDetailDate,
  getCategoryHref,
  type InsightDetail,
  type InsightCategory,
  type StrapiCategory,
} from "@/lib/strapi/insights";
import type { InsightPost } from "./data";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

export interface InsightDetailSectionProps {
  post: InsightDetail;
  recentPosts: InsightPost[];
  categories: StrapiCategory[];
  insightCategories: InsightCategory[];
  shareUrl: string;
}

function MetaItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-desc">
      <span className="font-semibold text-primary-pink">{label}</span>
      <span className="text-white/90">{children}</span>
    </div>
  );
}

export default function InsightDetailSection({
  post,
  recentPosts,
  categories,
  insightCategories,
  shareUrl,
}: InsightDetailSectionProps) {
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(post.title);

  return (
    <article className="bg-default min-h-screen">
      {/* Hero — legacy banner layout, current dark theme */}
      <section className="relative pt-16 md:pt-20 min-h-[320px] md:min-h-[420px] flex items-end">
        <InsightImage
          src={post.imageSrc}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <Container className="relative z-10 pb-10 md:pb-14 w-full">
          <nav className="mb-4 text-xs text-white/70" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ol>
          </nav>
          <h1 className="max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-white uppercase leading-tight tracking-tight">
            {post.title}
          </h1>
        </Container>
      </section>

      {/* Main content + sidebar — legacy two-column layout */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Article column */}
            <div className="lg:col-span-8">
              <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-xl shadow-black/30">
                <div className="px-6 md:px-10 pt-8 pb-4 border-b border-white/10">
                  <div className="flex flex-col gap-3">
                    <MetaItem label="Date">
                      {formatInsightDetailDate(post.publishedAt)}
                    </MetaItem>
                    {post.author && <MetaItem label="Author">{post.author}</MetaItem>}
                  </div>
                </div>

                <div className="px-6 md:px-10 py-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-8">
                    {post.title}
                  </h2>

                  <div
                    className="insight-article-body text-desc text-[15px] leading-7"
                    dangerouslySetInnerHTML={{ __html: post.body }}
                  />

                  <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Facebook"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-desc hover:border-primary-pink hover:text-primary-pink transition-colors"
                    >
                      <FaFacebookF className="h-4 w-4" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Twitter"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-desc hover:border-primary-pink hover:text-primary-pink transition-colors"
                    >
                      <FaTwitter className="h-4 w-4" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-desc hover:border-primary-pink hover:text-primary-pink transition-colors"
                    >
                      <FaLinkedinIn className="h-4 w-4" />
                    </a>
                    <a
                      href={shareUrl}
                      aria-label="Copy link"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-desc hover:border-primary-pink hover:text-primary-pink transition-colors"
                    >
                      <FiLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-5 pb-3 border-b border-white/10">
                  Recent Posts
                </h3>
                <ul className="space-y-4">
                  {recentPosts.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/blog/${item.id}`}
                        className="group flex gap-3 items-start"
                      >
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-black/40">
                          <InsightImage
                            src={item.imageSrc}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="56px"
                          />
                        </div>
                        <p className="text-sm font-medium text-white leading-snug line-clamp-3 group-hover:text-primary-pink transition-colors">
                          {item.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {categories.length > 0 && (
                <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                  <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-5 pb-3 border-b border-white/10">
                    Categories
                  </h3>
                  <ul className="space-y-2.5">
                    {categories.map((category) => (
                      <li key={category.id ?? category.title}>
                        <Link
                          href={getCategoryHref(category.title, insightCategories)}
                          className="flex items-start gap-2 text-sm text-desc hover:text-white transition-colors"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-pink" />
                          <span>{category.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {post.tags.length > 0 && (
                <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                  <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-5 pb-3 border-b border-white/10">
                    Tags
                  </h3>
                  <ul className="space-y-2.5">
                    {post.tags.map((tag) => (
                      <li key={tag}>
                        <span className="flex items-start gap-2 text-sm text-desc">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-pink" />
                          <span>{tag}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </Container>
      </section>
    </article>
  );
}
