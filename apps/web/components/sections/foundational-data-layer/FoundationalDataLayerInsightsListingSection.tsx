"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/atoms/Container";
import type { FoundationalDataInsightArticle } from "@/data/foundationalDataInsights";
import { motion } from "@/lib/replayMotion";

type FoundationalDataLayerInsightsListingSectionProps = {
  articles: FoundationalDataInsightArticle[];
};

export default function FoundationalDataLayerInsightsListingSection({
  articles,
}: FoundationalDataLayerInsightsListingSectionProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-default pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-[-20%] right-[-20%] h-[70%] w-[70%] rounded-full bg-[#581c87] opacity-50 blur-[140px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A1A]" />
        </div>

        <Container className="relative z-10">
          <nav className="mb-8 text-xs text-white/70" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/foundational-data-layer"
                  className="transition-colors hover:text-white"
                >
                  Foundational Data Layer
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Insights</li>
            </ol>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
              Expert Insights
            </p>
            <h1 className="text-[36px] font-semibold leading-tight tracking-tight text-white md:text-[48px]">
              Foundational Data Insights
            </h1>
            <p className="mt-4 text-[16px] font-light leading-relaxed text-white/80 md:text-[18px]">
              Practical guidance on AI-ready platforms, governed lakehouses, and
              trusted metrics — the data foundation behind intelligent
              enterprise systems.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-default pb-20 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={article.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[12px] bg-white shadow-lg shadow-black/30 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="relative min-h-[220px] overflow-hidden">
                    <Image
                      src={article.imageSrc}
                      alt={article.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="mb-3 block text-[13px] font-semibold text-[#2563EB]">
                      {article.category}
                    </span>
                    <h2 className="mb-4 text-[20px] font-bold leading-snug text-black transition-colors group-hover:text-[#2563EB]">
                      {article.title}
                    </h2>
                    <p className="mb-6 line-clamp-3 text-[14px] leading-relaxed text-black/70">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto text-[13px] text-black">
                      <p className="mb-2">by {article.author}</p>
                      <p>
                        {article.date}
                        <span className="mx-2 text-black/30">·</span>
                        {article.readTime}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
