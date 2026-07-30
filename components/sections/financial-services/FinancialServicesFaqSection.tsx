"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import Container from "@/components/atoms/Container";

const faqs = [
  {
    question: "What does eForte do in the financial-services sector?",
    answer:
      "eForte partners with banks, lenders, payment providers, and fintech innovators to design, build, and scale secure, data- and AI-driven financial products — from core banking modernization and embedded payments to AI-powered credit decisioning and risk monitoring. We work across the full lifecycle, from early product strategy through production deployment and ongoing support.",
  },
  {
    question: "What types of financial institutions does eForte typically work with?",
    answer:
      "We work with a broad range of organizations, including community and regional banks, credit unions, consumer and small-business lenders, cross-border and embedded payment providers, wealth management firms, and venture-backed fintech startups looking to scale quickly without compromising security or compliance.",
  },
  {
    question: "What AI capabilities does eForte offer for lending, payments, and banking?",
    answer:
      "Our finance AI capabilities span credit scoring and risk modeling, fraud and anomaly detection, automated compliance and KYC/AML screening, conversational support agents, and AI-assisted financial analysis. We combine off-the-shelf and custom-built models depending on the accuracy, explainability, and regulatory requirements of each use case.",
  },
  {
    question: "Does eForte have experience building production AI agents for regulated environments?",
    answer:
      "Yes. Our Agentic Orchestration practice focuses specifically on building AI agents that are explainable, auditable, and safe to deploy in regulated settings — with guardrails, human-in-the-loop review points, and monitoring built in from day one, not added as an afterthought.",
  },
  {
    question: "Is eForte certified in relevant security and compliance frameworks?",
    answer:
      "Yes. eForte is SOC 2 Type 2 certified, ISO 27001 certified, and compliant with the NIST AI Risk Management Framework. These certifications are backed by security practices we apply consistently across every financial services engagement, including encryption, access controls, and continuous monitoring.",
  },
  {
    question: "What cloud and data platforms does eForte work with?",
    answer:
      "We're a Databricks Gold Partner and also work extensively with AWS and other major cloud providers. Our Foundational Data practice is built to support cloud-native, secure, and scalable data architectures regardless of which platform a client has standardized on.",
  },
];


export default function FinancialServicesFaqSection() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <section className="bg-white py-20 text-default md:py-28">
      <Container className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-[#0F1118] px-8 py-9 md:px-10 md:py-10"
        >
          <Image
            src="/assets/images/industry/faq-banner-bg.svg"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
          <div className="relative">
            <p className="text-4xl font-medium text-white md:text-5xl">FAQs</p>
            <p className="mt-2 text-base text-white/80">
              FAQs about eForte&apos;s financial services capabilities
            </p>
          </div>
        </motion.div>

        <div className="mt-10">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqs.includes(idx);
            return (
              <div key={faq.question} className="border-b border-default/10 py-2">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full cursor-pointer items-start gap-4 px-2 py-3 text-left md:px-4"
                >
                  <HiChevronDown
                    className={`mt-1 h-5 w-5 shrink-0 text-default transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span className="text-lg font-medium leading-tight text-default md:text-xl">
                    {faq.question}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-11 pb-4 pt-1 md:px-12">
                        <p className="text-base leading-relaxed text-default/70 md:text-[17px]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
