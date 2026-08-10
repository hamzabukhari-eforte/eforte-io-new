"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/atoms/Container";
import ContactCTA from "@/components/atoms/ContactCTA";
import { jobOpenings } from "@/data/careersJobs";
import { useInViewReplay } from "@/lib/useInViewReplay";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function JobCard({ job }: { job: (typeof jobOpenings)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInViewReplay(ref, { margin: "-40px", amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, ease }}
      className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 hover:bg-white/8 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h3 className="text-lg font-semibold text-white md:text-xl">{job.title}</h3>
        <p className="mt-1 text-sm text-desc">{job.location}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
            {job.type}
          </span>
          <span className="rounded-full bg-primary-pink/20 px-3 py-1 text-xs text-primary-pink">
            {job.department}
          </span>
        </div>
      </div>
      <ContactCTA className="shrink-0 rounded-full bg-gradient-to-r from-[#be185d] to-[#db2777] px-6 py-2.5 text-sm font-medium text-white transition-all hover:from-[#db2777] hover:to-[#be185d]">
        Apply now
      </ContactCTA>
    </motion.div>
  );
}

export default function CareersJobOpeningsSection() {
  const introRef = useRef<HTMLDivElement>(null);
  const introInView = useInViewReplay(introRef, { margin: "-60px", amount: 0.15 });

  return (
    <section
      id="open-roles"
      className="relative z-10 -mt-10 scroll-mt-24 rounded-t-[40px] bg-default pb-20 pt-14 md:-mt-14 md:pb-28 md:pt-20"
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
          <p className="mx-auto mt-4 max-w-2xl text-base text-desc md:text-lg">
            New opportunities open up as our teams grow. Take a look at
            what&apos;s available now.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-desc md:text-base">
            Browse current openings across Engineering, Data &amp; AI, Product
            Design, Quality Assurance, Cloud &amp; DevOps, and Project
            Management. Don&apos;t see the exact right fit today? Send us your
            resume anyway. We keep strong candidates in mind for what&apos;s
            next.
          </p>
        </motion.div>

        <div className="mx-auto flex max-w-4xl flex-col gap-4 md:gap-5">
          {jobOpenings.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </Container>
    </section>
  );
}
