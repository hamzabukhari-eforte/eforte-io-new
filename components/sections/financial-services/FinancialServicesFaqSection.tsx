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
      "eForte partners with financial-services organizations to design, build, and scale secure, data- and AI-driven products. From core banking and banking-as-a-service to payments, risk, compliance, and analytics, we engineer the platforms and AI systems that modernize how financial institutions operate, engage, and grow.",
  },
  {
    question: "What types of financial institutions does eForte work with?",
    answer:
      "We work with a broad range of organizations including banks, fintechs, paytechs, lenders, insurers, and financial infrastructure providers - from high-growth startups to established enterprises operating in highly regulated environments.",
  },
  {
    question: "What AI capabilities does eForte offer for financial services?",
    answer:
      "Our capabilities span the full AI lifecycle: data engineering and governed lakehouse foundations, machine learning for credit scoring and risk, agentic AI for operations and compliance, and embedded analytics - all delivered with responsible AI design, model governance, and explainability.",
  },
  {
    question: "Does eForte have expertise in building AI agents for financial services?",
    answer:
      "Yes. We design and deploy AI agents tailored to finance use cases such as payments reconciliation, fraud detection, KYC verification, regulatory compliance monitoring, and funds transfer - built on production-ready architectures using platforms like Databricks and LangGraph.",
  },
  {
    question: "Is eForte certified in security and compliance frameworks?",
    answer:
      "Security and compliance are foundational to how we work. eForte is SOC 2 Type II certified, ISO/IEC 27001 certified, and compliant with the NIST AI Risk Management Framework, ensuring our processes, controls, and systems meet rigorous standards for information security and risk management.",
  },
  {
    question: "What cloud and technology platforms does eForte work with?",
    answer:
      "We deliver on industry-leading platforms including Databricks, Snowflake, AWS, Azure, Airflow, dbt, and MLflow, and integrate with modern banking ecosystems such as Galileo and Fiserv to extend and modernize financial technology stacks.",
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
          viewport={{ once: true, margin: "-80px" }}
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
