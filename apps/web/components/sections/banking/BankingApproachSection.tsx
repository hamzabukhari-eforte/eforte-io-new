"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

interface StageItem {
  stage: string;
  title: string;
  bullets: string[];
  imageSrc: string;
}

const stages: StageItem[] = [
  {
    stage: "Stage 01",
    title: "Build banking-grade foundations for AI at scale",
    bullets: [
      "Align operating models, governance, and security for AI readiness.",
      "Modernize legacy data into a governed and auditable lakehouse architecture.",
      "Implement enterprise controls for AML, KYC, GDPR, and SOC 2.",
    ],
    imageSrc: "/assets/images/industry/driving-1.jpg",
  },
  {
    stage: "Stage 02",
    title: "Implement a secure and regulator-ready AI operating model",
    bullets: [
      "Integrate AI across delivery and operations.",
      "Ensure systems are predictable, auditable, and measurable.",
      "Scale adoption with banking-grade guardrails.",
    ],
    imageSrc: "/assets/images/industry/driving-2.jpg",
  },
  {
    stage: "Stage 03",
    title: "Launch enterprise AI systems and agentic workflows",
    bullets: [
      "Automate banking workflows and decision support.",
      "Scale from isolated use cases to enterprise AI portfolios.",
      "Continuously improve outcomes using governed feedback loops.",
    ],
    imageSrc: "/assets/images/industry/driving-3.jpg",
  },
];

export default function BankingApproachSection() {
  return (
    <>
      <section className="-mt-8 rounded-t-[12px] bg-[#efefef] py-24 text-slate-900 md:-mt-10 md:rounded-t-[12px]">
        <Container>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            eForte Approach To Banking
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-4xl font-medium leading-tight md:text-5xl lg:text-[56px]">
            We build AI agents and systems that improve core banking processes
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-700">
            Combining deep banktech expertise with advanced AI, we design agents that enhance
            compliance monitoring, automate KYC workflows, and ensure reliable execution of funds
            transfers.
          </p>

          <div className="mx-auto mt-14 space-y-4">
            {stages.map((stage, index) => {
              return (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-60px", amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="grid min-h-[360px] overflow-hidden rounded-[12px] border border-[#202738] bg-[#0b0d13] text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)] lg:grid-cols-[1fr_560px]"
                >
                  <div className="p-7 md:p-9">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                      {stage.stage}
                    </p>
                    <h3 className="mt-3 max-w-xl text-3xl font-medium leading-tight">{stage.title}</h3>
                    <ul className="mt-5 space-y-2.5 text-base text-white/80">
                      {stage.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5">
                          <span className="mt-[9px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative m-4 min-h-[260px] overflow-hidden rounded-[12px] border border-[#25365a] bg-[#0f1630] lg:m-5 lg:min-h-[320px]">
                    <Image
                      src={stage.imageSrc}
                      alt="AI-driven banking illustration"
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-linear-to-br from-[#3f62ff]/35 via-[#1a2f91]/30 to-[#050b1b]/60" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(107,147,255,0.45),transparent_55%)]" />
                    <div className="relative flex h-full min-h-[220px] items-end justify-start p-4">
                      <span className="rounded-[12px] border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white/90">
                        Banking AI
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#efefef] pb-8 text-slate-700">
        <Container>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
            Our Key Partner Certifications
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10 md:gap-14">
            {[
              { src: "/assets/images/industry/aws-partner.png", alt: "AWS Partner certification" },
              {
                src: "/assets/images/industry/databricks-badge.png",
                alt: "Databricks partner certification",
              },
              { src: "/assets/images/industry/badge.png", alt: "AI cloud partner certification" },
            ].map((item) => (
              <div key={item.src} className="relative h-24 w-24 md:h-28 md:w-28">
                <Image src={item.src} alt={item.alt} fill className="object-contain" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
