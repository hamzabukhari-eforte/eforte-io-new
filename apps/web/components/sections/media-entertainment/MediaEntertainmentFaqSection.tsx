"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";
import { motion } from "@/lib/replayMotion";

const faqs = [
  {
    question: "What kind of media and entertainment companies does eForte work with?",
    answer:
      "eForte works with a broad range of media, entertainment, and gaming companies - from streaming platforms, publishers, and live event organizers to gaming studios and digital content providers. We support both high-growth startups and established enterprises looking to become AI-native.",
  },
  {
    question: "What makes eForte different from other digital service providers?",
    answer:
      "We combine deep data and AI expertise with end-to-end product capabilities. Rather than delivering isolated features, we help media companies modernize their data foundations, build intelligent platforms, and deliver personalized, real-time experiences at scale.",
  },
  {
    question: "Does eForte work on both strategy and execution?",
    answer:
      "Yes. We partner with clients across the full journey - from strategy, design, and architecture through development, deployment, and ongoing support - ensuring solutions are not only well-conceived but successfully delivered and maintained.",
  },
  {
    question: "Can eForte support large-scale, global media and entertainment platforms?",
    answer:
      "Absolutely. We design cloud-native architectures that support millions of users, massive content libraries, and real-time performance demands - building resilient, cost-efficient infrastructures optimized for scalability, security, and seamless global delivery.",
  },
  {
    question: "How does eForte ensure the security of media and entertainment platforms?",
    answer:
      "eForte protects platforms with AI-driven security that safeguards content, user data, and accounts. Our solutions include real-time threat detection, automated response, and compliance with industry standards, ensuring secure experiences without disrupting audiences.",
  },
];

export default function MediaEntertainmentFaqSection() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <section className="bg-default py-20 md:py-24">
      <Container className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8 overflow-hidden rounded-[12px] bg-[#0F1118] px-6 py-7 md:px-8 md:py-8"
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
              Everything you need to know about our Media and Entertainment
              services
            </p>
          </div>
        </motion.div>

        <div className="mt-8">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqs.includes(idx);
            return (
              <div
                key={faq.question}
                className={cn(
                  "rounded-[12px] transition-colors duration-200",
                  isOpen && "bg-white/5"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full cursor-pointer items-start gap-4 px-4 py-4 text-left"
                >
                  <HiChevronDown
                    className={`mt-1 h-5 w-5 shrink-0 text-white transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span className="text-xl font-semibold leading-tight text-white md:text-2xl">
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
                      <div className="px-14 pb-4 pt-1">
                        <p className="text-base leading-relaxed text-white/80 md:text-lg">
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
