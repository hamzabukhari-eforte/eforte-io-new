"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { motion } from "@/lib/replayMotion";

const whyCards = [
  {
    title: "Deep domain experience",
    description:
      "Most of our largest engagements are in financial services, giving us strong context across operations and regulation.",
    iconSrc: "/assets/images/industry/choose-1.svg",
  },
  {
    title: "AI-native transformation",
    description:
      "We combine data pipelines, automation, and agentic AI to improve decision speed and business outcomes.",
    iconSrc: "/assets/images/industry/choose-2.svg",
  },
  {
    title: "Secure and compliant by design",
    description:
      "Security and governance are built into every engagement with alignment to major standards and controls.",
    iconSrc: "/assets/images/industry/choose-3.svg",
  },
];

const faqs = [
  {
    question: "What types of banking institutions does eForte work with?",
    answer:
      "eForte partners with a broad range of financial institutions, including community banks, regional banks, fintechs, and financial services organizations. We have deep experience supporting banks operating in highly regulated environments, helping them modernize technology, improve operational efficiency, and deliver secure digital products at scale.",
  },
  {
    question: "What experience does eForte have with banking clients?",
    answer:
      "eForte has extensive, hands-on experience working with banking clients such as Coastal Community Bank, among others. Our teams understand the operational, regulatory, and security challenges banks face and have successfully delivered solutions across core banking integrations, digital channels, data platforms, and AI-driven systems.",
  },
  {
    question: "How does eForte address security and compliance requirements?",
    answer:
      "Security and compliance are foundational to how we work with banking clients. eForte is SOC 2 Type II certified, ISO/IEC 27001 certified, and compliant with the NIST AI Risk Management Framework. These certifications ensure our processes, controls, and systems meet rigorous standards for information security, data protection, and risk management.",
  },
  {
    question: "What is eForte’s expertise in artificial intelligence for banking?",
    answer:
      "eForte has deep expertise in designing and building AI agents and AI-powered systems for highly regulated industries, including banking. We focus on responsible AI design, model governance and transparency, risk mitigation and explainability, and secure data pipelines with controlled model deployment.",
  },
];

export default function BankingTrustSection() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <>
      <section className="border-t border-white/10 bg-default py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[12px] bg-[#12141B] p-8 md:min-h-[430px] md:p-12"
          >
        
            <div className="relative grid items-center gap-12 md:grid-cols-[340px_1fr]">
              <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
                <Image
                  src="/assets/images/industry/bg-partner-databricks.svg"
                  alt=""
                  fill
                  className="scale-[1.09] object-contain opacity-100"
                  aria-hidden
                />
                <Image
                  src="/assets/images/industry/databricks-badge.png"
                  alt="Databricks Gold Partner badge"
                  fill
                  className="object-contain p-16"
                />
              </div>
              <div>
                <h2 className="text-3xl font-medium text-white md:text-4xl">A Databricks Gold Partner</h2>
                <p className="mt-4 text-base leading-relaxed text-white/80 md:text-[17px]">
                  As a Gold Databricks Partner, we&apos;ve demonstrated our deep knowledge of the
                  platform and a proven track record of successful implementations. 
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/80 md:text-[17px]">
                  We have 200+ professionals certified on the Databricks Intelligence platform.
                  Our people have Databricks certifications ranging from Associate Data Analyst,
                  Data Engineer, to Professional Machine Learning Engineer and GenAI Engineers.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="relative border-t border-white/10 bg-default py-20">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/industry/bg-expertise.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-55"
            aria-hidden
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-4xl font-medium leading-tight text-white md:text-5xl lg:text-[56px]">
              Expertise across core and API-driven banking platforms, including Galileo and Fiserv
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-[17px]">
              eForte has proven expertise working across both established core banking platforms
              like Fiserv and modern, API-driven platforms like Galileo.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/85 md:text-[17px]">
              We help banks and financial institutions integrate, extend, and modernize their
              technology ecosystems while maintaining the security, compliance, and reliability
              required in regulated environments.
            </p>
        
            <div className="mt-8 flex items-center justify-center gap-12 md:gap-16">
              <Image
                src="/assets/images/industry/fiserv.svg"
                alt="Fiserv logo"
                width={130}
                height={40}
                className="h-8 w-auto md:h-10"
              />
              <Image
                src="/assets/images/industry/galileo.png"
                alt="Galileo logo"
                width={180}
                height={44}
                className="h-8 w-auto md:h-10"
              />
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-default py-24">
        <Container>
          <h2 className="mt-1 text-center text-4xl font-medium text-white md:text-5xl lg:text-[56px]">
            Why banks choose eForte
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {whyCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-[12px] border border-white/10 bg-white/5 p-7 backdrop-blur-lg"
              >
                <div className="relative h-14 w-14">
                  <Image src={card.iconSrc} alt="" fill className="object-contain" aria-hidden />
                </div>
                <h3 className="mt-5 text-2xl font-medium text-white">{card.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/80">{card.description}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-default py-20">
        <Container className="max-w-4xl">
          <div className="relative mb-8 overflow-hidden rounded-[12px] bg-[#0F1118] px-6 py-7 md:px-8 md:py-8">
            <Image
              src="/assets/images/industry/faq-banner-bg.svg"
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
            <div className="relative">
              <p className="text-4xl font-medium text-white md:text-5xl">FAQs</p>
              <p className="mt-1 text-base text-white/80">FAQs about eForte&apos;s banking capabilities</p>
            </div>
          </div>
          <div className="mt-8">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqs.includes(idx);
              return (
                <div key={faq.question} className="py-2">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full cursor-pointer items-start gap-4 px-4 py-3 text-left"
                  >
                    <HiChevronDown
                      className={`mt-1 h-5 w-5 shrink-0 text-white transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                    <span className="text-xl font-semibold leading-tight text-white md:text-2xl">{faq.question}</span>
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
                        <div className="px-14 pb-4 pt-1">
                          <p className="text-base leading-relaxed text-white/80 md:text-lg">{faq.answer}</p>
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
    </>
  );
}
