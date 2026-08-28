"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { qualityAssuranceFaqs } from "@/data/capabilities/qualityAssurance";

export default function QualityAssuranceFaqSection() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <section className="bg-white py-16 text-black">
      <Container className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[12px] bg-[#0F1118] px-8 py-9 md:rounded-[12px] md:px-10 md:py-10"
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
            <p className="mt-2 text-base text-white">
              FAQs about our quality assurance services
            </p>
          </div>
        </motion.div>

        <div className="mt-10 space-y-2">
          {qualityAssuranceFaqs.map((faq, idx) => {
            const isOpen = openFaqs.includes(idx);
            return (
              <div
                key={faq.question}
                className={`rounded-[12px] transition-colors ${
                  isOpen ? "bg-[#F5F5F5]" : "hover:bg-[#F8F8F8]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full cursor-pointer items-start gap-4 px-4 py-4 text-left md:px-5"
                >
                  <HiChevronDown
                    className={`mt-1 h-5 w-5 shrink-0 text-black transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span className="text-lg font-medium leading-tight text-black md:text-xl">
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
                      <div className="px-12 pb-5 pt-0 md:px-14">
                        <p className="text-base leading-relaxed text-black md:text-[17px]">
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
