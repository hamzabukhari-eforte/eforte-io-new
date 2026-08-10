"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLeft, HiArrowRight, HiStar } from "react-icons/hi";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import Container from "@/components/atoms/Container";

interface Testimonial {
  id: string;
  companyName: string;
  testimonial: string;
  author: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    id: "biostrap",
    companyName: "BIOSTRAP",
    testimonial:
      "This team is extremely fast and good, which is a rare combination. This was instrumental in our ability to launch the business and close customers early in the cycle. They're extremely responsive, and one of the reasons we chose their team was their ability to understand a challenge we were having and provide help.",
    author: "Sameer Sontakey",
    title: "Founder & CEO",
  },
  {
    id: "cardiex",
    companyName: "CardieX",
    testimonial:
      "Their firmware and embedded engineering expertise was exactly what we needed. They took ownership of complex hardware challenges, delivered on time, and integrated seamlessly with our internal team to bring our medical device to market.",
    author: "Craig Cooper",
    title: "CEO",
  },
  {
    id: "semitech",
    companyName: "SemiTech",
    testimonial:
      "We've worked with a lot of engineering partners, and this team stands out. Their nearshore model gave us the speed and quality of an in-house team while letting us scale up and down as our roadmap evolved.",
    author: "Laura Mitchell",
    title: "VP of Engineering",
  },
];

const AUTOPLAY_INTERVAL_MS = 6000;

export default function EmbeddedEngineeringTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonial = testimonials[activeIndex];

  const goPrev = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isPaused, activeIndex]);

  return (
    <section className="bg-default">
      <div
        className="bg-default py-20 text-white md:py-32"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-medium leading-tight text-white md:text-4xl lg:text-[40px]"
              >
                What our clients say
                <br />
                about us
              </motion.h2>

              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-default"
                >
                  <HiArrowLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-default"
                >
                  <HiArrowRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="leading-tight">
                  <p className="text-lg font-bold text-white">Clutch</p>
                  <p className="text-[11px] text-white/60">57 reviews</p>
                </div>
                <div className="flex items-center gap-1 text-white">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <HiStar key={i} className="h-5 w-5" />
                  ))}
                </div>
                <p className="text-base font-medium text-white">4.9</p>
              </div>
            </div>

            <div className="lg:pt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white">
                      <HiChatBubbleOvalLeft className="h-5 w-5" />
                    </span>
                    <span className="text-base font-semibold tracking-wide text-white/90">
                      {testimonial.companyName}
                    </span>
                  </div>

                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-[17px]">
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </p>

                  <div className="mt-8">
                    <p className="text-base font-bold text-white">
                      {testimonial.author}
                    </p>
                    <p className="mt-1 text-sm italic text-white/80">
                      {testimonial.title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
