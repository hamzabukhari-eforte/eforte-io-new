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
    id: "reciprocity-health",
    companyName: "Reciprocity Health",
    testimonial:
      "We have been very pleased with the work and work product delivered to date by the team. Their work was on time, on budget, and on brief. They have the ability to build, learn, react, and adjust to the flexible needs and wants of a startup company. The workflow between the teams was seamless. If you met two of the members, you wouldn't have known who worked for whom. That to me is the test of a good team!",
    author: "Jon Silvon",
    title: "COO, Reciprocity Health",
  },
  {
    id: "vivihealth",
    companyName: "ViviHealth",
    testimonial:
      "The team brought deep healthcare expertise and a genuine commitment to our mission. They helped us build a patient monitoring platform that is reliable, secure, and intuitive for both clinicians and patients.",
    author: "Sarah Bennett",
    title: "VP of Product, ViviHealth",
  },
  {
    id: "thmydoc",
    companyName: "THmyDOC",
    testimonial:
      "They understood the complexity of telehealth and remote patient monitoring from day one. Their work accelerated our roadmap and gave us the confidence to scale our care delivery to more patients.",
    author: "Daniel Cross",
    title: "CTO, THmyDOC",
  },
];

const AUTOPLAY_INTERVAL_MS = 6000;

export default function HealthcareTestimonialsSection() {
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
        className="bg-default py-20 text-white md:py-52"
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
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-medium leading-tight text-white md:text-4xl lg:text-[40px]"
              >
                What our healthcare
                <br />
                and healthtech clients
                <br />
                say about us
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
                    <span className="text-base text-white/90">
                      {testimonial.companyName}
                    </span>
                  </div>

                  <p className="mt-6 max-w-xl text-base italic leading-relaxed text-white/80 md:text-[17px]">
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
