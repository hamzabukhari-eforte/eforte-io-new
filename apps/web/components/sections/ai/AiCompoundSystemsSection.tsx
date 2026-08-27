"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import { AI_ACCENT } from "@/data/capabilities/ai";

const DIAGRAM_SRC = "/assets/images/capabilities/ai/modern-ai-systems.svg";

export default function AiCompoundSystemsSection() {
  const diagramRef = useRef<HTMLDivElement>(null);
  const inView = useInView(diagramRef, {
    once: true,
    margin: "-80px",
    amount: 0.25,
  });
  const [svgMarkup, setSvgMarkup] = useState<string | null>(null);
  const [playKey, setPlayKey] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let cancelled = false;

    fetch(DIAGRAM_SRC)
      .then((res) => res.text())
      .then((markup) => {
        if (cancelled) return;
        // Keep diagram transparent on the dark section background
        const transparent = markup.replace(
          /<svg\b([^>]*)>/,
          (_match, attrs: string) => {
            const cleaned = attrs
              .replace(/\sstyle="[^"]*"/, "")
              .replace(/\sclass="[^"]*"/, "");
            return `<svg${cleaned} class="h-full w-full" style="background:transparent" role="img" aria-label="Compound AI Systems architecture diagram">`;
          },
        );
        setSvgMarkup(transparent);
        setPlayKey((key) => key + 1);
      })
      .catch(() => {
        if (!cancelled) setSvgMarkup(null);
      });

    return () => {
      cancelled = true;
    };
  }, [inView]);

  return (
    <section className="bg-white">
      <div className="rounded-t-[12px] bg-black py-16 text-white md:rounded-t-[12px]">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
                Modern AI Systems
              </p>
              <h2 className="mt-4 text-[36px] font-semibold leading-tight">
                Building Compound AI Systems
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white md:text-base">
                <p>
                  eForte builds Compound AI Systems — these are systems that
                  combine multiple components, like AI models, data retrievers,
                  or tools, to solve tasks more effectively.
                </p>
                <p>
                  A prime example is Retrieval Augmented Generation (RAG), which
                  merges a language model with a system for retrieving relevant
                  information.
                </p>
              </div>
              <div className="mt-9">
                <ContactCTA
                  className="inline-flex h-10 items-center justify-center rounded-full leading-none px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: AI_ACCENT }}
                >
                  Get in touch
                </ContactCTA>
              </div>
            </motion.div>

            <div
              ref={diagramRef}
              className="relative mx-auto aspect-[502/449] w-full max-w-xl bg-transparent"
            >
              {svgMarkup ? (
                <div
                  key={playKey}
                  className="absolute inset-0 bg-transparent [&_svg]:h-full [&_svg]:w-full"
                  dangerouslySetInnerHTML={{ __html: svgMarkup }}
                />
              ) : null}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
