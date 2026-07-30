"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import Container from "@/components/atoms/Container";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 animate-pulse rounded-2xl bg-black/80" />
  ),
});

const YOUTUBE_URL = "https://www.youtube.com/watch?v=AxnIFqEakag";

export default function FinancialServicesWebinarSection() {
  return (
    <section className="rounded-[36px] bg-default py-20 text-white md:rounded-[42px] md:py-28">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80"
        >
          Agentic Orchestration Webinar
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-4 max-w-2xl text-center text-3xl font-medium leading-tight text-white md:text-4xl lg:text-[44px]"
        >
          Agentic Orchestration in Finance: How eForte Builds Production Grade
          Agents with Databricks and LangGraph
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-8 flex justify-center"
        >
          <Link
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-default"
          >
            Learn more about our approach to building AI agents
            <HiArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mx-auto mt-12 max-w-5xl md:mt-16"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0, 0, 0, 0.4)]">
            <ReactPlayer
              src={YOUTUBE_URL}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
              config={{
                youtube: {
                  rel: 0,
                },
              }}
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
