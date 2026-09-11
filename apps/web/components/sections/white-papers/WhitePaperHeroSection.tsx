"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiArrowLeft } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import type { FinanceWhitePaper } from "@/data/industries/financialServicesWhitePaper";
import { motion } from "@/lib/replayMotion";

type WhitePaperHeroSectionProps = {
  paper: FinanceWhitePaper;
  parentLabel?: string;
  parentHref?: string;
};

export default function WhitePaperHeroSection({
  paper,
  parentLabel = "Home",
  parentHref = "/",
}: WhitePaperHeroSectionProps) {
  const router = useRouter();

  const goBack = () => {
    const referrer = document.referrer;
    const cameFromThisSite =
      Boolean(referrer) && referrer.includes(window.location.origin);

    if (cameFromThisSite) {
      router.back();
      return;
    }

    router.push(parentHref);
  };

  return (
    <section className="relative flex min-h-[420px] items-end overflow-hidden bg-default pt-28 md:min-h-[520px] md:pt-36">
      <Image
        src={paper.heroSrc}
        alt={paper.heroAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1A] via-[#0A0A1A]/80 to-[#0A0A1A]/40" />

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
            {parentHref !== "/" && (
              <>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href={parentHref}
                    className="transition-colors hover:text-white"
                  >
                    {parentLabel}
                  </Link>
                </li>
              </>
            )}
            <li aria-hidden="true">/</li>
            <li className="text-white">White Paper</li>
          </ol>
        </nav>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[12px] font-semibold uppercase tracking-[0.22em] text-primary-pink"
        >
          {paper.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-3 max-w-4xl text-[40px] font-medium leading-[46px] text-white md:text-[48px] md:leading-[52px]"
        >
          {paper.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="mt-4 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl"
        >
          {paper.subtitle}
        </motion.p>

        <p className="mt-6 text-sm text-white/60">
          {paper.date}
          <span className="mx-2 text-white/30">·</span>
          {paper.readTime}
        </p>
      </Container>
    </section>
  );
}
