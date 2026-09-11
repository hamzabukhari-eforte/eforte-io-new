"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiArrowLeft } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import type { VelocityAIInsightArticle } from "@/data/velocityAIInsights";
import { motion } from "@/lib/replayMotion";

const BACK_HREF = "/velocity-ai";

type VelocityAIInsightHeroSectionProps = {
  article: VelocityAIInsightArticle;
};

export default function VelocityAIInsightHeroSection({
  article,
}: VelocityAIInsightHeroSectionProps) {
  const router = useRouter();

  const goBack = () => {
    const referrer = document.referrer;
    const cameFromThisSite =
      Boolean(referrer) && referrer.includes(window.location.origin);

    if (cameFromThisSite) {
      router.back();
      return;
    }

    router.push(BACK_HREF);
  };

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
        <button
          type="button"
          onClick={goBack}
          aria-label="Go back to previous page"
          className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
        >
          <HiArrowLeft className="h-5 w-5" />
        </button>

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
                href="/velocity-ai"
                className="transition-colors hover:text-white"
              >
                Velocity AI
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white">Insight</li>
          </ol>
        </nav>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[12px] font-semibold uppercase tracking-[0.22em] text-primary-pink"
        >
          {article.category}
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
