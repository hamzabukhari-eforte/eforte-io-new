"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { productDesignFaqs } from "@/data/productDesign";

export default function ProductDesignFaqSection() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <section className="bg-white py-20 text-default md:pb-28">
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
              Frequently asked questions about our product design services
            </p>
          </div>
        </motion.div>

        <div className="mt-10 space-y-1">
          {productDesignFaqs.map((faq, idx) => {
            const isOpen = openFaqs.includes(idx);
            return (
              <div
                key={faq.question}
                className={`rounded-xl transition-colors ${
                  isOpen ? "bg-black/3" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full cursor-pointer items-start gap-4 px-2 py-4 text-left md:px-4"
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
