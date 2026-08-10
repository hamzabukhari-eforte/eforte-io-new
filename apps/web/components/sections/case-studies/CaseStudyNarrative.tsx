"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiOutlineLightningBolt,
  HiOutlineDatabase,
  HiOutlineCog,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiArrowRight,
} from "react-icons/hi";
import Container from "@/components/atoms/Container";
import ContactCTA from "@/components/atoms/ContactCTA";
import { useInViewReplay } from "@/lib/useInViewReplay";
import type { ImpactStudyNarrative } from "@/data/impactStudyNarrativeTypes";
import { cn } from "@/lib/utils";

type Props = {
  content: ImpactStudyNarrative;
  theme: number[];
};

const ease = [0.16, 1, 0.3, 1] as const;

/** Capabilities-aligned type + badge tokens */
const badgeLight =
  "inline-flex rounded-full border border-default/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-default";
const badgeDark =
  "inline-flex rounded-full border border-white/25 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white";
const badgeOnColor =
  "inline-flex rounded-full border border-white/30 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white";
const sectionTitle =
  "text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-[42px]";
const bodyMuted = "text-[15px] leading-relaxed text-[#555] md:text-base";
const bodyOnDark = "text-[15px] leading-relaxed text-white/75 md:text-base";
const eyebrowPlain =
  "text-[12px] font-semibold uppercase tracking-[0.18em]";
const cardTitle = "text-xl font-semibold md:text-[22px]";
const cardBody = "text-[15px] leading-relaxed text-[#555] md:text-base";

const pillarIcons = [HiOutlineLightningBolt, HiOutlineDatabase, HiOutlineCog];
const resultIcons = [HiOutlineClock, HiOutlineShieldCheck, HiOutlineChartBar];

function Reveal({
  children,
  className,
  delay = 0,
  x = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  x?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInViewReplay(ref, { margin: "-80px", amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40, x }}
      animate={
        inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 40, x }
      }
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function CaseStudyNarrative({ content, theme }: Props) {
  const accent = `rgb(${theme[0]}, ${theme[1]}, ${theme[2]})`;
  const accentSoft = `rgba(${theme[0]}, ${theme[1]}, ${theme[2]}, 0.22)`;
  const solutionImage =
    content.challenge.image.replace("Detail1", "Detail2") ||
    content.challenge.image;

  return (
    <div className="relative z-10 -mt-6 text-default md:-mt-10">
      {/* ── Overview: white overlapping panel ── */}
      <section className="relative overflow-hidden rounded-t-[36px] bg-white pb-16 pt-14 shadow-[0_-16px_48px_rgba(0,0,0,0.18)] md:rounded-t-[48px] md:pb-24 md:pt-20">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full opacity-50 blur-[100px]"
          style={{ backgroundColor: accentSoft }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-24 h-64 w-64 rounded-full bg-primary-pink/10 blur-[90px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(10,10,26,0.08) 1px, transparent 0)",
            backgroundSize: "22px 22px",
            maskImage: "linear-gradient(to bottom, black, transparent)",
          }}
          aria-hidden
        />

        <Container className="relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className={cn(badgeLight, "shadow-[0_4px_16px_rgba(0,0,0,0.04)]")}>
              Impact study
            </span>
            <h2 className={cn("mt-6 text-default", sectionTitle)}>
              {content.headline}
            </h2>
            <div
              className="mx-auto mt-5 h-px w-12"
              style={{ backgroundColor: accent }}
              aria-hidden
            />
            <div className={cn("mt-6 space-y-4", bodyMuted)}>
              {content.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {/* Pillars strip */}
          <Reveal className="mt-12 md:mt-16" delay={0.08}>
            <div
              className="relative overflow-hidden rounded-[28px] px-6 py-9 text-white shadow-[0_24px_60px_rgba(14,119,244,0.22)] md:rounded-[36px] md:px-10 md:py-11"
              style={{
                background: `linear-gradient(125deg, ${accent} 0%, #0b1a3a 42%, #0a0a1a 72%, #1a0820 100%)`,
              }}
            >
              <div
                className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-white/15 blur-[50px]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-8 bottom-0 h-36 w-36 rounded-full bg-primary-pink/30 blur-[55px]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(115deg, rgba(255,255,255,0.35) 0, rgba(255,255,255,0.35) 1px, transparent 1px, transparent 18px)",
                }}
                aria-hidden
              />

              <p
                className={cn(
                  "relative text-center text-white/70",
                  eyebrowPlain
                )}
              >
                Pillars involved
              </p>
              <ul className="relative mt-7 flex flex-wrap items-center justify-center gap-3 md:gap-4">
                {content.pillars.map((pillar, i) => {
                  const Icon = pillarIcons[i % pillarIcons.length];
                  return (
                    <motion.li
                      key={pillar}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.4 }}
                      transition={{ duration: 0.45, delay: 0.1 + i * 0.08, ease }}
                      whileHover={{ y: -3, scale: 1.03 }}
                      className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/12 px-4 py-2.5 text-sm font-medium shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-md md:px-5 md:py-3 md:text-[15px]"
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-pink/20 ring-1 ring-primary-pink/40">
                        <Icon className="h-4 w-4 text-primary-pink" />
                      </span>
                      {pillar}
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          {/* Deliverables */}
          <div className="mt-10 md:mt-12">
            <Reveal>
              <p
                className={cn(
                  "mb-6 text-center text-default/70",
                  eyebrowPlain
                )}
              >
                Deliverables
              </p>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {content.deliverables.map((item, index) => (
                <DeliverableCard
                  key={item}
                  item={item}
                  index={index}
                  accent={accent}
                />
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── Challenge ── */}
      <section className="relative overflow-hidden bg-[#05060f] py-20 text-white md:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full blur-[140px]"
          style={{ backgroundColor: accentSoft }}
          aria-hidden
        />

        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-5" x={-24}>
              <span className={badgeDark}>The Challenge</span>
              <h3 className={cn("mt-4 text-white", sectionTitle)}>
                {content.challenge.title}
              </h3>
              <div className={cn("mt-6 space-y-4", bodyOnDark)}>
                {content.challenge.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative lg:col-span-7" delay={0.1} x={24}>
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-[36px] opacity-60 blur-2xl md:-inset-6"
                  style={{
                    background: `linear-gradient(135deg, ${accentSoft}, transparent 70%)`,
                  }}
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0c14] shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:rounded-[36px]">
                  <div className="relative aspect-4/3">
                    <Image
                      src={content.challenge.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-contain p-6 md:p-10"
                    />
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="absolute -bottom-5 left-6 max-w-[240px] rounded-2xl border border-white/15 bg-black/80 px-4 py-3 backdrop-blur-md md:left-10"
                >
                  <p className="text-[14px] leading-relaxed text-white/90">
                    {content.challenge.paragraphs[0]?.slice(0, 110)}
                    {(content.challenge.paragraphs[0]?.length ?? 0) > 110
                      ? "…"
                      : ""}
                  </p>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Solution ── */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className={badgeLight}>Solution</span>
            <h3 className={cn("mt-4 text-default", sectionTitle)}>
              {content.solution.title}
            </h3>
            <p className={cn("mt-5", bodyMuted)}>{content.solution.lead}</p>
          </Reveal>

          <div className="mt-14 space-y-8 md:mt-16 md:space-y-10">
            {content.solution.items.map((item, index) => {
              const Icon =
                index % 2 === 0 ? HiOutlineLightningBolt : HiOutlineDatabase;
              const reverse = index % 2 === 1;

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article
                    className={cn(
                      "grid overflow-hidden rounded-[28px] border border-black/5 bg-[#f7f7fb] shadow-[0_16px_48px_rgba(0,0,0,0.06)] md:rounded-[36px]",
                      reverse
                        ? "lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:[&>*:first-child]:order-2"
                        : "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)]"
                    )}
                  >
                    <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                      <span
                        className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                        style={{ backgroundColor: accent }}
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                      <div className="mb-3 flex items-center gap-3">
                        <span
                          className="h-px w-6 shrink-0"
                          style={{ backgroundColor: accent }}
                          aria-hidden
                        />
                        <p className={cn("text-default/70", eyebrowPlain)}>
                          Capability {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <h4 className={cn("text-default", cardTitle)}>
                        {item.title}
                      </h4>
                      <p className={cn("mt-3", cardBody)}>{item.body}</p>
                    </div>
                    <div
                      className="relative min-h-[280px] md:min-h-[380px] lg:min-h-[440px]"
                      style={{
                        background: `linear-gradient(145deg, ${accent} 0%, #0a0a1a 70%)`,
                      }}
                    >
                      <div
                        className="pointer-events-none absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(60deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 24px)",
                        }}
                        aria-hidden
                      />
                      <div className="absolute inset-0 flex items-center justify-center p-5 md:p-7 lg:p-8">
                        <div className="relative h-full w-full">
                          <Image
                            src={
                              index === 0
                                ? content.challenge.image
                                : solutionImage
                            }
                            alt=""
                            fill
                            sizes="(max-width: 1024px) 90vw, 55vw"
                            className="object-contain drop-shadow-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Results: pink band ── */}
      <section className="bg-white pb-4">
        <div className="relative overflow-hidden rounded-[36px] bg-primary-pink py-16 text-white md:rounded-[48px] md:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(60deg, rgba(255,255,255,0.14) 0, rgba(255,255,255,0.14) 1px, transparent 1px, transparent 28px)",
            }}
            aria-hidden
          />
          <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-white/10 blur-[100px]" aria-hidden />

          <Container className="relative">
            <Reveal className="mx-auto max-w-3xl text-center">
              <span className={badgeOnColor}>Results</span>
              <h3 className={cn("mt-4 text-white", sectionTitle)}>
                {content.results.title}
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-white/85 md:text-base">
                {content.results.lead}
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
              {content.results.items.map((item, index) => {
                const Icon = resultIcons[index % resultIcons.length];
                return (
                  <Reveal key={item.title} delay={index * 0.08}>
                    <motion.article
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-full flex-col rounded-[28px] bg-white p-7 text-default shadow-[0_20px_50px_rgba(0,0,0,0.18)] md:p-8"
                    >
                      <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-pink/10 text-primary-pink">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h4 className={cn("text-default", cardTitle)}>
                        {item.title}
                      </h4>
                      <p className={cn("mt-3", cardBody)}>{item.body}</p>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </div>
      </section>

      {/* ── Closing: editorial pull-quote (not a second footer CTA) ── */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="grid overflow-hidden rounded-[32px] border border-black/5 shadow-[0_24px_60px_rgba(0,0,0,0.08)] md:rounded-[40px] lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative bg-[#0a0a1a] px-8 py-12 text-white md:px-12 md:py-16 lg:px-14 lg:py-20">
                <div
                  className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full blur-[90px]"
                  style={{ backgroundColor: accentSoft }}
                  aria-hidden
                />
                <p
                  className="pointer-events-none absolute left-6 top-4 select-none text-[120px] font-serif leading-none text-white/10 md:left-10 md:top-6 md:text-[160px]"
                  aria-hidden
                >
                  “
                </p>
                <div className="relative">
                  <span className={badgeOnColor}>Key takeaway</span>
                  <p className="mt-5 max-w-xl text-xl font-semibold leading-snug tracking-tight md:text-2xl lg:text-[28px] lg:leading-snug">
                    {content.closing}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-10 bg-[#f7f7fb] px-8 py-12 md:px-10 md:py-16 lg:px-12">
                <div>
                  <p className={cn("text-default/70", eyebrowPlain)}>
                    Impact study
                  </p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-default md:text-[28px]">
                    {content.name}
                  </p>
                  <p className={cn("mt-3", bodyMuted)}>
                    {content.headline}
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href="/impact-studies"
                    className="group inline-flex w-full items-center justify-between rounded-2xl border border-black/8 bg-white px-5 py-4 text-sm font-semibold text-default transition-colors hover:border-primary-pink/40 hover:text-primary-pink"
                  >
                    Browse all impact studies
                    <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <ContactCTA className="group inline-flex w-full items-center justify-between rounded-2xl bg-default px-5 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                    Talk to our team
                    <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </ContactCTA>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}

function DeliverableCard({
  item,
  index,
  accent,
}: {
  item: string;
  index: number;
  accent: string;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInViewReplay(ref, { margin: "-40px", amount: 0.25 });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease }}
      whileHover={{ y: -6 }}
      className="group relative flex min-h-[168px] flex-col overflow-hidden rounded-[22px] border border-black/5 bg-white p-5 shadow-[0_10px_32px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_18px_44px_rgba(14,119,244,0.14)] md:min-h-[180px] md:p-6"
    >
      <span
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        style={{
          background: `linear-gradient(90deg, ${accent}, #d3287a)`,
        }}
        aria-hidden
      />
      <div className="mb-5 flex items-center justify-between">
        <span
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white shadow-[0_6px_16px_rgba(14,119,244,0.35)]"
          style={{ backgroundColor: accent }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-pink/10 text-primary-pink/70 transition-colors group-hover:bg-primary-pink/15 group-hover:text-primary-pink">
          <HiOutlineCheckCircle className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-auto text-[15px] font-semibold leading-snug text-default md:text-base">
        {item}
      </p>
    </motion.li>
  );
}
