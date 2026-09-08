"use client";

import Container from "@/components/atoms/Container";
import { motion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { useRef, type ComponentType } from "react";
import {
  HiOutlineChartBar,
  HiOutlineClipboardCheck,
  HiOutlineCurrencyDollar,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from "react-icons/hi";

interface WorkflowCard {
  id: string;
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
  accent: "pink" | "blue";
}

const workflows: WorkflowCard[] = [
  {
    id: "elevate-service",
    title: "Elevate Service",
    description: "Autonomous Inquiry Handling & Feedback Analysis",
    Icon: HiOutlineSparkles,
    accent: "pink",
  },
  {
    id: "accelerate-revenue",
    title: "Accelerate Revenue",
    description: "AI-Powered Lead Scoring & Proposal Generation",
    Icon: HiOutlineCurrencyDollar,
    accent: "blue",
  },
  {
    id: "guarantee-compliance",
    title: "Guarantee Compliance",
    description: "Intelligent Invoice Processing & Reporting Automation",
    Icon: HiOutlineClipboardCheck,
    accent: "pink",
  },
  {
    id: "optimize-talent",
    title: "Optimize Talent",
    description: "Precision Resume Screening & Onboarding Orchestration",
    Icon: HiOutlineUserGroup,
    accent: "blue",
  },
  {
    id: "ensure-integrity",
    title: "Ensure Integrity",
    description: "Continuous Monitoring, Data Extraction & Policy Enforcement",
    Icon: HiOutlineShieldCheck,
    accent: "pink",
  },
  {
    id: "drive-decisions",
    title: "Drive Decisions",
    description: "Real-Time Analytics and Resource Allocation Optimization",
    Icon: HiOutlineChartBar,
    accent: "blue",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.15 + i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function AIWorkflowsSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref);

  return (
    <section ref={ref} className="w-full bg-default">
      <Container>
        <motion.div
          className="mb-10 text-center md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="mb-3 inline-flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
              AI WORKFLOWS
            </span>
          </motion.div>

          <motion.h2
            className="mb-6 text-[48px] font-medium leading-tight tracking-tight text-white md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            From Task to Autonomous Outcome
          </motion.h2>

          <motion.p
            className="mx-auto max-w-4xl text-[18px] font-light leading-relaxed text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            Revolutionize your enterprise with intelligent agents that reason,
            plan, and execute across your core business functions—freeing your
            team for strategy.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {workflows.map((workflow, index) => {
            const isPink = workflow.accent === "pink";
            const Icon = workflow.Icon;

            return (
              <motion.article
                key={workflow.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative flex flex-col overflow-hidden rounded-[12px] border border-white/10 bg-[#0A0A1A] p-5 transition-colors duration-300 hover:border-primary-pink md:p-5"
              >
                {/* Soft glow */}
                <motion.div
                  className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl ${
                    isPink ? "bg-primary-pink/25" : "bg-[#426CFF]/25"
                  }`}
                  aria-hidden
                  animate={{
                    opacity: [0.35, 0.7, 0.35],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3.5 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r to-transparent ${
                    isPink ? "from-primary-pink" : "from-[#426CFF]"
                  }`}
                  aria-hidden
                />

                <div className="relative mb-3.5 flex items-start justify-between gap-4">
                  <motion.div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border ${
                      isPink
                        ? "border-primary-pink/30 bg-primary-pink/10 text-primary-pink"
                        : "border-[#426CFF]/30 bg-[#426CFF]/10 text-[#426CFF]"
                    }`}
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 2.8 + (index % 3) * 0.35,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  <span
                    className={`text-[11px] font-semibold tabular-nums tracking-wider ${
                      isPink ? "text-primary-pink" : "text-[#426CFF]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mb-2 text-[24px] font-semibold leading-tight text-white">
                  {workflow.title}
                </h3>

                <p className="relative text-[18px] leading-snug text-white">
                  {workflow.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
