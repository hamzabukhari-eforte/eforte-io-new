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
    label: "Payments & settlement",
    title: "Payments & settlement",
    description:
      "Purpose built AI agents for the workflows that run modern payments and settlement operations.",
    bullets: [
      "Settlement reconciliation agent matches transactions across ledgers and flags mismatches before they become disputes.",
      "Chargeback response agent assembles evidence packets automatically to contest disputed transactions faster.",
      "Real time fraud triage agent scores incoming transactions instantly and routes suspicious activity for review.",
    ],
    imageSrc: "/assets/images/industry/accelerators-1.jpg",
  },
  {
    id: "lendtech",
    label: "Lending & credit",
    title: "Lending & credit",
    description:
      "Purpose built AI agents for the workflows that run modern lending and credit operations.",
    bullets: [
      "Application intake agent extracts and validates borrower data from documents and forms automatically.",
      "Adverse action agent generates compliant, clearly worded decline explanations for regulatory requirements.",
      "Portfolio risk monitoring agent continuously rescans the loan book for early signs of deteriorating credit quality.",
    ],
    imageSrc: "/assets/images/industry/accelerators-2.jpg",
  },
  {
    id: "financial-infrastructure",
    label: "Financial infrastructure",
    title: "Financial infrastructure",
    description:
      "Purpose built AI agents for the workflows that run modern financial infrastructure.",
    bullets: [
      "Ledger reconciliation agent keeps internal and partner bank ledgers synchronized in near real time.",
      "Compliance document agent screens onboarding documents against KYC/AML requirements automatically.",
      "Vendor payment agent automates invoice matching and payment scheduling across finance operations.",
    ],
    imageSrc: "/assets/images/industry/accelerators-3.jpg",
  },
  {
    id: "banking-banktech",
    label: "Banking & banktech",
    title: "Banking & banktech",
    description:
      "Purpose built AI agents for the workflows that run modern banking and banktech operations.",
    bullets: [
      "Account servicing agent handles routine servicing requests like statements, limit changes, and disputes.",
      "Onboarding concierge agent guides new account holders through KYC and setup with conversational support.",
      "Regulatory reporting agent assembles and validates recurring compliance reports before submission deadlines.",
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
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-default/70"
        >
          Sample Agents Categories
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-4 max-w-2xl text-center text-3xl font-semibold leading-tight text-default md:text-4xl"
        >
          Purpose built AI agents for the workflows that run modern finance
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
                    "h-10 cursor-pointer rounded-full px-4 py-0 text-sm font-medium transition-all duration-200 md:px-6",
                    isActive
                      ? "bg-default text-white shadow-[0_2px_8px_rgba(0, 0, 0, 0.15)]"
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
                    <li key={bullet} className="flex items-start gap-2.5">
                      <HiCheckCircle className="h-5 w-5 shrink-0 text-default/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative aspect-900/734 w-full max-w-[560px] overflow-hidden rounded-[12px] border border-default/10 bg-default">
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
