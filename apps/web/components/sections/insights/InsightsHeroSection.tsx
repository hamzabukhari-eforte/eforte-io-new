"use client";

import Container from "@/components/atoms/Container";
import InsightImage from "@/components/atoms/InsightImage";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FEATURED_POST, type InsightPost } from "./data";
import type { InsightCategory } from "@/lib/strapi/insights";

export interface InsightsHeroSectionProps {
  featuredPost?: InsightPost;
  categories?: InsightCategory[];
}

export default function InsightsHeroSection({
  featuredPost,
  categories = [],
}: InsightsHeroSectionProps = {}) {
  const featured = featuredPost ?? FEATURED_POST;
  const pathname = usePathname();
  const activeSlug =
    pathname?.startsWith("/blog/category/") ?
      pathname.replace("/blog/category/", "").replace(/\/$/, "")
    : null;
  return (
    <section className="relative bg-black pt-28 md:pt-32 pb-20 md:pb-10 overflow-hidden">
      {/* Background gradient – matches Velocity AI but softly fades before the lower half */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-30%] md:right-[-10%] w-[120%] md:w-[80%] h-[140%] md:h-[120%] bg-[#581c87] rounded-full blur-[120px] md:blur-[180px] opacity-80 md:opacity-90" />
        <div className="absolute top-[10%] right-[10%] w-[80%] md:w-[60%] h-full md:h-[80%] bg-[#4338ca] rounded-full blur-[100px] md:blur-[150px] opacity-70 md:opacity-80" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/90 to-transparent z-0" />
        {/* Soft fade so the gradient doesn't end with a hard line */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black" />
      </div>

      <Container className="relative z-10">
        {/* Eyebrow + Title + Description */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary-pink mb-4">
           Expert Insights
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-white tracking-tight leading-tight">
            Imagine. Learn. Discuss.
          </h1>
          <p className="mt-4 text-sm md:text-base text-desc max-w-xl text-center">
            Dive into our expert insights on the latest in technology and business developments. Explore in-depth stories across Data &amp; AI, Databricks, design, and more.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-8 flex flex-wrap gap-2 md:gap-3 justify-center">
          <Link
            href="/blog"
            className={cn(
              "h-10 px-4 py-1.5 rounded-full border text-[11px] md:text-sm transition-colors",
              activeSlug === null
                ? "bg-gradient-to-r from-[#2946CF] to-[#233cb9] text-white border-none"
                : "border-white/15 text-white/90 hover:bg-gradient-to-r from-[#2946CF] to-[#233cb9] hover:text-white"
            )}
          >
            All
          </Link>
          {categories.map((category) => {
            const isActive = activeSlug === category.slug;
            return (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className={cn(
                  "h-10 px-4 py-1.5 rounded-full border text-[11px] md:text-sm transition-colors",
                  isActive
                    ? "bg-gradient-to-r from-[#2946CF] to-[#233cb9] text-white border-none"
                    : "border-white/15 text-white/90 hover:bg-gradient-to-r from-[#2946CF] to-[#233cb9] hover:text-white"
                )}
              >
                {category.title}
              </Link>
            );
          })}
        </div>

        {/* Featured post card overlapping hero – only on \"All\" view */}
        {activeSlug === null && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative mt-16"
          >
            <div className="max-w-4xl mx-auto">
              <Link
                href={`/blog/${featured.id}`}
                className="group grid md:grid-cols-[3fr,2fr] bg-white rounded-[12px] overflow-hidden shadow-2xl shadow-black/40 border border-white/20"
              >
                <div className="relative min-h-[220px] md:min-h-[450px] bg-black">
                  <InsightImage
                    src={featured.imageSrc}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/20 to-transparent" />
                  <div className="h-10 absolute bottom-5 left-5 px-3 py-1.5 rounded-full bg-black/70 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                    Latest insight
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-between text-black">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-pink mb-3">
                      {featured.category}
                    </p>
                    <h2 className="text-xl md:text-2xl lg:text-[26px] font-semibold leading-snug mb-4 group-hover:text-brand-blue transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-5 line-clamp-3">
                      {featured.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
                    {featured.author && <span>By {featured.author}</span>}
                    {featured.date && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-gray-400" />
                        <span>{featured.date}</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}

