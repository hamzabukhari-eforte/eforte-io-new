"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";

type Tab = {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
};

const tabs: Tab[] = [
  {
    id: "paytech",
    label: "Paytech & payment processing",
    title: "Paytech & payment processing",
    description:
      "We design intelligent agents that automate critical payment workflows, reduce manual effort, and improve accuracy across the entire transaction lifecycle.",
    bullets: [
      "Customer journey agent",
      "AI reconciliation agent",
      "Fraud detection agent",
    ],
    imageSrc: "/assets/images/industry/accelerators-1.jpg",
  },
  {
    id: "lendtech",
    label: "Lendtech & consumer lending",
    title: "Lendtech & consumer lending",
    description:
      "We build AI agents that streamline lending operations, enhance decision accuracy, and create faster, more reliable borrower experiences.",
    bullets: [
      "AI reconciliation agent",
      "KYC agent",
      "Digital agreement agent",
    ],
    imageSrc: "/assets/images/industry/accelerators-2.jpg",
  },
  {
    id: "financial-infrastructure",
    label: "Financial infrastructure",
    title: "Financial infrastructure",
    description:
      "Our agents strengthen the backbone of financial platforms - enhancing security, simplifying integrations, and monitoring transactions.",
    bullets: [
      "OWASP security agent",
      "API integration agent",
      "Transaction monitoring agent",
    ],
    imageSrc: "/assets/images/industry/accelerators-3.jpg",
  },
  {
    id: "banking-banktech",
    label: "Banking & banktech",
    title: "Banking & banktech",
    description:
      "Combining deep banktech expertise with advanced AI, we design agents that enhance compliance monitoring, automate KYC workflows, and ensure reliable execution of funds transfers.",
    bullets: [
      "Regulatory compliance agent",
      "KYC verification agent",
      "Funds transfer agent",
    ],
    imageSrc: "/assets/images/industry/accelerators-4.jpg",
  },
];

export default function FinancialServicesAgentsSection() {
  const [activeId, setActiveId] = useState<string>(tabs[0].id);
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <section className="bg-white py-20 text-default md:py-28">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-default/70"
        >
          Sample Agents Built &amp; Deployed by eForte
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-4 max-w-2xl text-center text-3xl font-semibold leading-tight text-default md:text-4xl"
        >
          We build AI agents that align directly with core finance processes
        </motion.h2>

        <div className="mt-12 flex justify-center md:mt-16">
          <div
            role="tablist"
            aria-label="Sample agents categories"
            className="flex w-full max-w-4xl flex-wrap items-center justify-center gap-1 rounded-full border border-default/10 bg-white p-1.5 shadow-sm"
          >
            {tabs.map((tab) => {
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveId(tab.id)}
                  className={cn(
                    "cursor-pointer rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 md:px-6",
                    isActive
                      ? "bg-default text-white shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                      : "text-default/70 hover:bg-default hover:text-white"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              role="tabpanel"
              id={`tabpanel-${activeTab.id}`}
              aria-labelledby={`tab-${activeTab.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className="max-w-lg">
                <h3 className="text-2xl font-semibold leading-tight text-default md:text-[26px]">
                  {activeTab.title}
                </h3>
                <p className="mt-5 text-[15px] leading-relaxed text-default/75 md:text-base">
                  {activeTab.description}
                </p>

                <ul className="mt-8 space-y-3 text-[15px] text-default md:text-base">
                  {activeTab.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2.5">
                      <HiCheckCircle className="h-5 w-5 shrink-0 text-default/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative aspect-900/734 w-full max-w-[560px] overflow-hidden rounded-3xl border border-default/10 bg-default">
                  <Image
                    src={activeTab.imageSrc}
                    alt={activeTab.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
