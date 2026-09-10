"use client";

import Container from "@/components/atoms/Container";
import { motion } from "@/lib/replayMotion";

// Video previously used in this slot, preserved for possible future reuse:
// import ReactPlayer from "@/components/atoms/ReactPlayerClient";
// const YOUTUBE_URL = "https://www.youtube.com/watch?v=AxnIFqEakag";

const PINK = "#D3287A";
const TOKEN_PATH =
  "M 168 566 V 466 H 430 V 340 V 214 C 610 214 700 246 875 246 C 990 246 1050 330 1163 356";

function FinanceStudioTrustFlow() {
  return (
    <svg
      viewBox="0 0 1280 720"
      className="h-full w-full"
      role="img"
      aria-label="Finance Studio flow: a transaction moves through the Foundational Data Layer, Applied AI, and Agentic Orchestration, then into payments, lending, and embedded finance."
    >
      <defs>
        <linearGradient id="fs-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#070714" />
          <stop offset="55%" stopColor="#0A0A1A" />
          <stop offset="100%" stopColor="#12081A" />
        </linearGradient>
        <linearGradient id="fs-layer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
        </linearGradient>
        <filter id="fs-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="1280" height="720" fill="url(#fs-bg)" />
      <circle cx="220" cy="620" r="180" fill={PINK} opacity="0.07" />
      <circle cx="1080" cy="140" r="200" fill={PINK} opacity="0.08" />

      <text x="640" y="64" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600" letterSpacing="2.4">
        HOW FINANCE STUDIO MOVES A TRANSACTION
      </text>

      <path d="M 168 520 V 466 H 250" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
      <path d="M 430 418 V 214" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />

      <rect x="78" y="520" width="180" height="92" rx="18" fill="rgba(211,40,122,0.12)" stroke={PINK} strokeWidth="1.5" />
      <text x="168" y="558" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="600">Transaction in</text>
      <text x="168" y="582" textAnchor="middle" fill="#fff" fontSize="12">Bank · lender · payments</text>

      <rect x="250" y="418" width="360" height="96" rx="16" fill="url(#fs-layer)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
      <text x="430" y="460" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="600">Foundational Data Layer</text>
      <text x="430" y="486" textAnchor="middle" fill="#fff" fontSize="12">Lineage, encryption, KYC / AML</text>

      <rect x="250" y="292" width="360" height="96" rx="16" fill="url(#fs-layer)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
      <text x="430" y="334" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="600">Applied AI</text>
      <text x="430" y="360" textAnchor="middle" fill="#fff" fontSize="12">Credit scoring, fraud, delinquency</text>

      <rect x="250" y="166" width="360" height="96" rx="16" fill="url(#fs-layer)" stroke={PINK} strokeWidth="1.5" />
      <text x="430" y="208" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="600">Agentic Orchestration</text>
      <text x="430" y="234" textAnchor="middle" fill="#fff" fontSize="12">Settlement, servicing, onboarding</text>

      <path d="M 610 214 C 680 214 700 246 760 246" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.6" />
      <rect x="760" y="206" width="230" height="80" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.4" />
      <text x="875" y="240" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="600">Payments & settlement</text>
      <text x="875" y="262" textAnchor="middle" fill="#fff" fontSize="11">Reconcile · chargeback · rails</text>

      <path d="M 610 340 C 680 340 700 372 760 372" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.6" />
      <rect x="760" y="332" width="230" height="80" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.4" />
      <text x="875" y="366" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="600">Lending & credit</text>
      <text x="875" y="388" textAnchor="middle" fill="#fff" fontSize="11">Intake · score · decision</text>

      <path d="M 610 466 C 680 466 700 498 760 498" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.6" />
      <rect x="760" y="458" width="230" height="80" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.4" />
      <text x="875" y="492" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="600">Embedded finance</text>
      <text x="875" y="514" textAnchor="middle" fill="#fff" fontSize="11">BaaS · APIs · banking features</text>

      <path d="M 990 246 C 1040 246 1050 320 1088 352" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.6" />
      <path d="M 990 372 H 1088" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.6" />
      <path d="M 990 498 C 1040 498 1050 400 1088 368" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.6" />

      <rect x="1088" y="312" width="150" height="88" rx="18" fill="rgba(211,40,122,0.14)" stroke={PINK} strokeWidth="1.6" />
      <text x="1163" y="350" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="600">Trust proven</text>
      <text x="1163" y="374" textAnchor="middle" fill="#fff" fontSize="11">Audit-ready outcome</text>

      <g filter="url(#fs-glow)">
        <circle r="7" fill={PINK}>
          <animateMotion dur="6.4s" repeatCount="indefinite" path={TOKEN_PATH} />
        </circle>
        <circle r="14" fill="none" stroke={PINK} strokeWidth="1.2" opacity="0.45">
          <animateMotion dur="6.4s" repeatCount="indefinite" path={TOKEN_PATH} />
        </circle>
      </g>
    </svg>
  );
}

export default function FinancialServicesFinanceStudioSection() {
  return (
    <section className="rounded-[12px] bg-default py-20 text-white md:rounded-[12px] md:py-28">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-pink"
        >
          Data and AI-Driven Financial Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-4 max-w-2xl text-center text-3xl font-medium leading-tight text-white md:text-4xl lg:text-[44px]"
        >
          Inside eForte&apos;s Finance Studio: engineering trust into every
          transaction
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mx-auto mt-12 max-w-5xl md:mt-16"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-[12px] border border-white/10 shadow-[0_20px_60px_rgba(0, 0, 0, 0.4)]">
            <FinanceStudioTrustFlow />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
