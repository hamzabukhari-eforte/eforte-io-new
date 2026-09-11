"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  HiArrowRight,
  HiCode,
  HiOutlineBriefcase,
  HiOutlineChip,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";
import { CAREER_CONTACT_EMAILS, jobOpenings } from "@/data/careersJobs";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { cn } from "@/lib/utils";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const departmentIcons: Record<string, IconType> = {
  Engineering: HiCode,
  "Data & AI": HiOutlineChip,
};

const outlineButtonClass =
  "inline-flex h-8 items-center justify-center gap-1.5 rounded-full border border-white/40 px-4 text-xs font-medium text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-black";

const filledButtonClass =
  "inline-flex h-8 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#be185d] to-[#db2777] px-4 text-xs font-medium text-white transition-all duration-200 hover:from-[#db2777] hover:to-[#be185d]";

function JobCard({
  job,
  index,
}: {
  job: (typeof jobOpenings)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });
  const Icon = departmentIcons[job.department] ?? HiOutlineBriefcase;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, ease, delay: index * 0.06 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[12px] border border-white/10 bg-[#0A0A1A] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-pink hover:shadow-[0_12px_28px_rgba(211,40,122,0.14)]"
    >
      <span
        className="pointer-events-none absolute -top-8 -right-6 h-24 w-24 rounded-full bg-primary-pink/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-primary-pink/10 text-primary-pink transition-colors duration-300 group-hover:bg-primary-pink group-hover:text-white">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold text-white md:text-lg">
              {job.title}
            </h3>
            <span className="shrink-0 rounded-full border border-white/20 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
              {job.workMode}
            </span>
          </div>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-white/70">
            <HiOutlineLocationMarker className="h-3.5 w-3.5 shrink-0 text-primary-pink" />
            {job.location} · {job.type}
          </p>
          <p className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-white/60">
            <HiOutlineMail className="h-3.5 w-3.5 shrink-0 text-primary-pink" />
            {CAREER_CONTACT_EMAILS.join(" · ")}
          </p>
        </div>
      </div>

      <div className="relative mt-4 flex flex-wrap items-center justify-end gap-2">
        <Link href={`/careers/${job.id}`} className={outlineButtonClass}>
          View role
        </Link>
        <Link
          href={`/careers?role=${job.id}#join-our-team`}
          className={cn(filledButtonClass, "hover:gap-2.5")}
        >
          Apply
          <HiArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </motion.article>
  );
}

export default function CareersJobOpeningsSection() {
  const introRef = useRef<HTMLDivElement>(null);
  const introInView = useInViewReplay(introRef, { margin: "0px", amount: 0.25 });

  return (
    <section
      id="open-roles"
      className="scroll-mt-24 bg-black pt-16 pb-16"
    >
      <Container>
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 24 }}
          animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease }}
          className="mb-10 text-center md:mb-14"
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-[42px]">
            Open Roles
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white md:text-lg">
            We&apos;re hiring in Karachi. Apply for a role below, or send us
            your resume and we&apos;ll keep you in mind for what&apos;s next.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {jobOpenings.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
