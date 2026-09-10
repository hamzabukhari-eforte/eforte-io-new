"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/atoms/Container";
import type { FinanceArticle } from "@/data/industries/financialServicesArticles";
import { motion } from "@/lib/replayMotion";

type FinancialServicesArticleHeroSectionProps = {
  article: FinanceArticle;
};

export default function FinancialServicesArticleHeroSection({
  article,
}: FinancialServicesArticleHeroSectionProps) {
  return (
    <section className="relative flex min-h-[420px] items-end overflow-hidden bg-default pt-28 md:min-h-[500px] md:pt-36">
      <Image
        src={article.imageSrc}
        alt={article.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1A] via-[#0A0A1A]/80 to-[#0A0A1A]/45" />

      <Container className="relative z-10 pb-12 md:pb-16">
        <nav className="mb-5 text-xs text-white/70" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/industries/financial-services"
                className="transition-colors hover:text-white"
              >
                Finance
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white">Article</li>
          </ol>
        </nav>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[12px] font-semibold uppercase tracking-[0.22em] text-primary-pink"
        >
          {article.categories[0]}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-3 max-w-4xl text-[36px] font-medium leading-[42px] text-white md:text-[44px] md:leading-[50px]"
        >
          {article.title}
        </motion.h1>

        <p className="mt-6 text-sm text-white/60">
          {article.author}
          <span className="mx-2 text-white/30">·</span>
          {article.date}
          <span className="mx-2 text-white/30">·</span>
          {article.readTime}
        </p>
      </Container>
    </section>
  );
}
