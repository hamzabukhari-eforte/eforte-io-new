"use client";

import Container from "@/components/atoms/Container";
import { motion } from "@/lib/replayMotion";

// Video previously used in this slot, preserved for possible future reuse:
// import ReactPlayer from "@/components/atoms/ReactPlayerClient";
// const YOUTUBE_URL = "https://www.youtube.com/watch?v=AxnIFqEakag";

const PINK = "#D3287A";
const BLUE = "#2563EB";
const LINE = "rgba(255,255,255,0.32)";

const TOKEN_PATH =
  "M 160 426 V 354 H 250 V 322 Q 250 306 266 306 H 430 V 278 H 594 Q 610 278 610 262 V 198 Q 610 182 594 182 H 430 V 154 H 594 Q 610 154 610 138 V 106 C 672 106 710 138 768 138 V 112 Q 768 98 782 98 H 974 Q 988 98 988 112 V 138 C 1038 138 1062 222 1100 250";

const FLOW_STYLES = `
@keyframes fs-tx-dash { to { stroke-dashoffset: -28; } }
@keyframes fs-tx-pulse {
  0%, 100% { opacity: 0.35; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.18); }
}
@keyframes fs-tx-glow {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}
@keyframes fs-tx-orb {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(18px, -14px); }
}

.fs-tx-dash { stroke-dasharray: 6 10; animation: fs-tx-dash 1.15s linear infinite; }
.fs-tx-pulse { transform-box: fill-box; transform-origin: center; animation: fs-tx-pulse 2.2s ease-in-out infinite; }
.fs-tx-glow { animation: fs-tx-glow 2.8s ease-in-out infinite; }
.fs-tx-orb { animation: fs-tx-orb 10s ease-in-out infinite; }

@media (prefers-reduced-motion: reduce) {
  .fs-tx-dash, .fs-tx-pulse, .fs-tx-glow, .fs-tx-orb { animation: none !important; }
}
`;

function FlowDot({
  begin,
  radius = 5,
  ring = false,
}: {
  begin: string;
  radius?: number;
  ring?: boolean;
}) {
  return (
    <circle
      cx={0}
      cy={0}
      r={radius}
      fill={ring ? "none" : PINK}
      stroke={ring ? PINK : "none"}
      strokeWidth={ring ? 1.2 : 0}
      opacity={ring ? 0.45 : 1}
    >
      <animateMotion
        dur="11.5s"
        begin={begin}
        repeatCount="indefinite"
        rotate="0"
        calcMode="linear"
        path={TOKEN_PATH}
      />
    </circle>
  );
}

function Junction({ cx, cy, delay = "0s" }: { cx: number; cy: number; delay?: string }) {
  return (
    <circle
      className="fs-tx-pulse"
      cx={cx}
      cy={cy}
      r="3.2"
      fill={PINK}
      style={{ animationDelay: delay }}
    />
  );
}

function FinanceStudioTrustFlow() {
  return (
    <svg
      viewBox="0 0 1280 540"
      className="h-auto w-full"
      role="img"
      aria-label="Finance Studio flow: a transaction moves through the Foundational Data Layer, Applied AI, and Agentic Orchestration, then into payments, lending, and embedded finance."
    >
      <style>{FLOW_STYLES}</style>
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
      </defs>

      <rect width="1280" height="540" fill="url(#fs-bg)" />
      <circle className="fs-tx-orb" cx="220" cy="500" r="160" fill={PINK} opacity="0.07" />
      <circle className="fs-tx-orb" cx="1080" cy="80" r="160" fill={PINK} opacity="0.08" style={{ animationDelay: "-4s" }} />

      <text x="640" y="36" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="600" letterSpacing="2.4">
        HOW FINANCE STUDIO MOVES A TRANSACTION
      </text>

      <path d="M 160 426 V 354 H 250" fill="none" stroke={LINE} strokeWidth="2" strokeLinecap="round" />
      <path d="M 430 306 V 278" fill="none" stroke={LINE} strokeWidth="2" strokeLinecap="round" />
      <path d="M 430 182 V 154" fill="none" stroke={LINE} strokeWidth="2" strokeLinecap="round" />
      <path d="M 610 106 C 672 106 710 138 768 138" fill="none" stroke={LINE} strokeWidth="1.7" />
      <path d="M 610 230 C 672 230 710 264 768 264" fill="none" stroke={LINE} strokeWidth="1.7" />
      <path d="M 610 354 C 672 354 710 390 768 390" fill="none" stroke={LINE} strokeWidth="1.7" />
      <path d="M 988 138 C 1038 138 1062 222 1100 250" fill="none" stroke={LINE} strokeWidth="1.7" />
      <path d="M 988 264 C 1038 264 1062 250 1100 250" fill="none" stroke={LINE} strokeWidth="1.7" />
      <path d="M 988 390 C 1038 390 1062 292 1100 250" fill="none" stroke={LINE} strokeWidth="1.7" />

      <path
        className="fs-tx-dash"
        d="M 160 426 V 354 H 250 M 430 306 V 278 M 430 182 V 154 M 610 106 C 672 106 710 138 768 138 M 988 138 C 1038 138 1062 222 1100 250"
        fill="none"
        stroke={PINK}
        strokeWidth="1.15"
        opacity="0.45"
        strokeLinecap="round"
      />

      <rect x="70" y="426" width="180" height="90" rx="18" fill="rgba(211,40,122,0.12)" stroke={PINK} strokeWidth="1.5" />
      <text x="160" y="464" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="600">Transaction in</text>
      <text x="160" y="488" textAnchor="middle" fill="#fff" fontSize="14">Bank · lender · payments</text>

      <rect x="250" y="306" width="360" height="96" rx="16" fill="url(#fs-layer)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
      <text x="430" y="348" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="600">Foundational Data Layer</text>
      <text x="430" y="374" textAnchor="middle" fill="#fff" fontSize="14">Lineage, encryption, KYC / AML</text>

      <rect x="250" y="182" width="360" height="96" rx="16" fill="url(#fs-layer)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
      <text x="430" y="224" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="600">Applied AI</text>
      <text x="430" y="250" textAnchor="middle" fill="#fff" fontSize="14">Credit scoring, fraud, delinquency</text>

      <rect className="fs-tx-glow" x="250" y="58" width="360" height="96" rx="16" fill="url(#fs-layer)" stroke={PINK} strokeWidth="1.5" />
      <text x="430" y="100" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="600">Agentic Orchestration</text>
      <text x="430" y="126" textAnchor="middle" fill="#fff" fontSize="14">Settlement, servicing, onboarding</text>

      <rect x="768" y="98" width="220" height="80" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.4" />
      <text x="878" y="132" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="600">Payments & settlement</text>
      <text x="878" y="156" textAnchor="middle" fill="#fff" fontSize="14">Reconcile · chargeback · rails</text>

      <rect x="768" y="224" width="220" height="80" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.4" />
      <text x="878" y="258" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="600">Lending & credit</text>
      <text x="878" y="282" textAnchor="middle" fill="#fff" fontSize="14">Intake · score · decision</text>

      <rect x="768" y="350" width="220" height="80" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.4" />
      <text x="878" y="384" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="600">Embedded finance</text>
      <text x="878" y="408" textAnchor="middle" fill="#fff" fontSize="14">BaaS · APIs · banking features</text>

      <rect className="fs-tx-glow" x="1100" y="206" width="148" height="88" rx="18" fill="rgba(37,99,235,0.14)" stroke={BLUE} strokeWidth="1.6" />
      <text x="1174" y="244" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="600">Trust proven</text>
      <text x="1174" y="268" textAnchor="middle" fill="#fff" fontSize="14">Audit-ready outcome</text>

      <Junction cx={160} cy={426} />
      <Junction cx={250} cy={354} delay="0.15s" />
      <Junction cx={430} cy={306} delay="0.3s" />
      <Junction cx={430} cy={278} delay="0.45s" />
      <Junction cx={430} cy={154} delay="0.6s" />
      <Junction cx={610} cy={106} delay="0.75s" />
      <Junction cx={768} cy={138} delay="0.9s" />
      <Junction cx={1100} cy={250} delay="1.05s" />

      <FlowDot begin="0s" radius={5} />
      <FlowDot begin="0s" radius={10} ring />
    </svg>
  );
}

export default function FinancialServicesFinanceStudioSection() {
  return (
    <section className="rounded-[12px] bg-default py-14 text-white md:rounded-[12px] md:py-20">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-primary-pink"
        >
          Data and AI-Driven Financial Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-3 max-w-4xl text-center text-[48px] font-medium leading-[52px] text-white"
        >
          Inside eForte&apos;s Finance Studio: engineering trust into every
          transaction
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mx-auto mt-8 max-w-5xl md:mt-10"
        >
          <div className="relative w-full overflow-hidden rounded-[12px] border border-white/10 shadow-[0_20px_60px_rgba(0, 0, 0, 0.4)]">
            <FinanceStudioTrustFlow />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
