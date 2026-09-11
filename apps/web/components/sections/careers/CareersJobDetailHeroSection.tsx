"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiArrowLeft, HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import {
  CAREER_CONTACT_EMAILS,
  type JobOpening,
} from "@/data/careersJobs";

const CAREERS_HREF = "/careers#open-roles";

type CareersJobDetailHeroSectionProps = {
  job: JobOpening;
};

export default function CareersJobDetailHeroSection({
  job,
}: CareersJobDetailHeroSectionProps) {
  const router = useRouter();

  const goBack = () => {
    const referrer = document.referrer;
    const cameFromThisSite =
      Boolean(referrer) && referrer.includes(window.location.origin);

    if (cameFromThisSite) {
      router.back();
      return;
    }

    router.push(CAREERS_HREF);
  };

  return (
    <section className="relative overflow-hidden bg-default pt-28 pb-10 md:pt-36 md:pb-12">
      <div
        className="pointer-events-none absolute top-20 left-1/4 h-64 w-64 rounded-full bg-primary-pink/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative z-10">
        <button
          type="button"
          onClick={goBack}
          aria-label="Go back to open roles"
          className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
        >
          <HiArrowLeft className="h-5 w-5" />
        </button>

        <nav className="mb-6 text-xs text-white/70" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/careers"
                className="transition-colors hover:text-white"
              >
                Careers
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white">{job.title}</li>
          </ol>
        </nav>

        <p className="text-xs font-medium tracking-[0.18em] text-primary-pink uppercase">
          {job.department}
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-5xl">
          {job.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          {job.summary}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1">
            <HiOutlineLocationMarker className="h-4 w-4 text-primary-pink" />
            {job.location}
          </span>
          <span className="rounded-full border border-white/15 px-3 py-1">
            {job.workMode}
          </span>
          <span className="rounded-full border border-white/15 px-3 py-1">
            {job.type}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1">
            <HiOutlineMail className="h-4 w-4 text-primary-pink" />
            {CAREER_CONTACT_EMAILS.join(" · ")}
          </span>
        </div>
      </Container>
    </section>
  );
}
