"use client";

import Container from "@/components/atoms/Container";
import type { LegalBlock, LegalSection } from "@/data/legalContent";
import { motion } from "@/lib/replayMotion";

function LegalBlockContent({ block }: { block: LegalBlock }) {
  if (block.type === "list") {
    return (
      <ul className="list-disc space-y-2 pl-5">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return <p>{block.text}</p>;
}

interface LegalPageSectionProps {
  eyebrow: string;
  title: string;
  intro?: string;
  sections: LegalSection[];
}

export default function LegalPageSection({
  eyebrow,
  title,
  intro,
  sections,
}: LegalPageSectionProps) {
  return (
    <main className="min-h-screen bg-default text-white">
      <section className="relative overflow-hidden bg-default pt-28 pb-16 md:pt-36 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(211,40,122,0.12),transparent_70%)]"
          aria-hidden
        />
        <Container className="relative text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-pink">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro ? (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-desc md:text-lg">
              {intro}
            </p>
          ) : null}
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container className="max-w-4xl">
          <div className="space-y-10 md:space-y-12">
            {sections.map((section, idx) => (
              <motion.article
                key={section.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px", amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.02 }}
              >
                <h2 className="text-xl font-semibold text-white md:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-desc md:text-base">
                  {section.blocks.map((block, blockIdx) => (
                    <LegalBlockContent key={`${section.id}-${blockIdx}`} block={block} />
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
