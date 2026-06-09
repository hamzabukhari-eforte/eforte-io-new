"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { OTHER_POSTS, getPostsByCategorySlug, slugToCategory } from "./data";
import type { InsightPost } from "./data";

const POSTS_PER_PAGE = 10;

export interface InsightsPostsSectionProps {
  /** When set, only posts in this category (by slug) are shown. */
  categorySlug?: string | null;
}

export default function InsightsPostsSection({ categorySlug = null }: InsightsPostsSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const posts: InsightPost[] = useMemo(
    () => (categorySlug ? getPostsByCategorySlug(categorySlug) : OTHER_POSTS),
    [categorySlug]
  );

  const categoryLabel = categorySlug ? slugToCategory(categorySlug) ?? "this category" : null;

  if (categorySlug && posts.length === 0) {
    return (
      <section className="bg-black pb-10 max-w-5xl mx-auto">
        <Container>
          <div className="py-16 text-center">
         
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              No posts in {categoryLabel} yet
            </h2>
            <p className="mt-3 text-sm text-desc max-w-md mx-auto">
              We&apos;re still preparing content for this topic. In the meantime, you can browse all of
              our latest insights.
            </p>
            <Link
              href="/blog"
              className="inline-flex mt-6 px-5 py-2.5 rounded-full border-2 border-primary-pink bg-white/5 text-sm font-medium text-white hover:bg-gradient-to-r from-[#be185d] to-[#db2777] hover:text-white transition-colors"
            >
              Browse all insights
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);

    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-black pb-10 max-w-5xl mx-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link
                href="#"
                className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-lg shadow-black/30 hover:-translate-y-2 transition-transform duration-300 h-full"
              >
                <div className="relative min-h-[220px] overflow-hidden">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col text-black">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-pink mb-2">
                    {post.category}
                  </span>
                    <h3 className="text-lg md:text-xl font-semibold leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">{post.description}</p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-500">
                    {post.author && <span>{post.author}</span>}
                    {post.date && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-gray-400" />
                        <span>{post.date}</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-3 text-xs">
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 h-9 rounded-full border border-white/20 text-desc hover:text-white hover:border-white/40 disabled:opacity-40 disabled:cursor-not-allowed bg-white/5 hover:bg-white/10"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              const isActive = page === currentPage;

              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => handlePageChange(page)}
                  className={`h-9 w-9 flex items-center justify-center rounded-full border text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-primary-pink text-white border-primary-pink shadow-[0_0_12px_rgba(211,40,122,0.6)]"
                      : "border-white/20 text-desc hover:text-white hover:border-white/40 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {page}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 h-9 rounded-full border border-white/20 text-desc hover:text-white hover:border-white/40 disabled:opacity-40 disabled:cursor-not-allowed bg-white/5 hover:bg-white/10"
            >
              Next
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
