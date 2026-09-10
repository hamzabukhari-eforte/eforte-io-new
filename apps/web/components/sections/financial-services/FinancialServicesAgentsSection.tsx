"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import {
  HiOutlineBuildingLibrary,
  HiOutlineCreditCard,
  HiOutlineDocumentText,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";
import { motion } from "@/lib/replayMotion";

const BLUE = "#2563EB";
const BLUE_SOFT = "#3B82F6";
const PINK = "#D3287A";
const ILLUSTRATION_VIEWBOX = "0 28 900 576";
const LABEL_SIZE = 28;

const AGENT_ILLUSTRATION_STYLES = `
@keyframes fs-ag-dash { to { stroke-dashoffset: -40; } }
@keyframes fs-ag-pulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.14); }
}
@keyframes fs-ag-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
@keyframes fs-ag-spin { to { transform: rotate(360deg); } }
@keyframes fs-ag-gauge {
  0% { stroke-dashoffset: 250; }
  55% { stroke-dashoffset: 72; }
  100% { stroke-dashoffset: 250; }
}
@keyframes fs-ag-glow {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 1; }
}
@keyframes fs-ag-slide {
  0% { transform: translateY(16px); opacity: 0.15; }
  25%, 70% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-16px); opacity: 0.15; }
}
@keyframes fs-ag-stack {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
}

.fs-ag-dash { stroke-dasharray: 7 11; animation: fs-ag-dash 1.05s linear infinite; }
.fs-ag-pulse { transform-box: fill-box; transform-origin: center; animation: fs-ag-pulse 2.1s ease-in-out infinite; }
.fs-ag-float { animation: fs-ag-float 3.4s ease-in-out infinite; }
.fs-ag-spin { transform-box: fill-box; transform-origin: center; animation: fs-ag-spin 24s linear infinite; }
.fs-ag-gauge { stroke-dasharray: 260; animation: fs-ag-gauge 4.2s ease-in-out infinite; }
.fs-ag-glow { animation: fs-ag-glow 2.2s ease-in-out infinite; }
.fs-ag-slide { animation: fs-ag-slide 4.6s ease-in-out infinite; }
.fs-ag-stack { animation: fs-ag-stack 2.8s ease-in-out infinite; }

@media (prefers-reduced-motion: reduce) {
  .fs-ag-dash, .fs-ag-pulse, .fs-ag-float, .fs-ag-spin,
  .fs-ag-gauge, .fs-ag-glow, .fs-ag-slide, .fs-ag-stack {
    animation: none !important;
  }
}
`;

type Tab = {
  id: "paytech" | "lendtech" | "financial-infrastructure" | "banking-banktech";
  label: string;
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

const tabs: Tab[] = [
  {
    id: "paytech",
    label: "Payments & settlement",
    icon: HiOutlineCreditCard,
    title: "Payments & settlement",
    description:
      "Purpose built AI agents for the workflows that run modern payments and settlement operations.",
    bullets: [
      "Settlement reconciliation agent matches transactions across ledgers and flags mismatches before they become disputes.",
      "Chargeback response agent assembles evidence packets automatically to contest disputed transactions faster.",
      "Real time fraud triage agent scores incoming transactions instantly and routes suspicious activity for review.",
    ],
  },
  {
    id: "lendtech",
    label: "Lending & credit",
    icon: HiOutlineDocumentText,
    title: "Lending & credit",
    description:
      "Purpose built AI agents for the workflows that run modern lending and credit operations.",
    bullets: [
      "Application intake agent extracts and validates borrower data from documents and forms automatically.",
      "Adverse action agent generates compliant, clearly worded decline explanations for regulatory requirements.",
      "Portfolio risk monitoring agent continuously rescans the loan book for early signs of deteriorating credit quality.",
    ],
  },
  {
    id: "financial-infrastructure",
    label: "Financial infrastructure",
    icon: HiOutlineSquares2X2,
    title: "Financial infrastructure",
    description:
      "Purpose built AI agents for the workflows that run modern financial infrastructure.",
    bullets: [
      "Ledger reconciliation agent keeps internal and partner bank ledgers synchronized in near real time.",
      "Compliance document agent screens onboarding documents against KYC/AML requirements automatically.",
      "Vendor payment agent automates invoice matching and payment scheduling across finance operations.",
    ],
  },
  {
    id: "banking-banktech",
    label: "Banking & banktech",
    icon: HiOutlineBuildingLibrary,
    title: "Banking & banktech",
    description:
      "Purpose built AI agents for the workflows that run modern banking and banktech operations.",
    bullets: [
      "Account servicing agent handles routine servicing requests like statements, limit changes, and disputes.",
      "Onboarding concierge agent guides new account holders through KYC and setup with conversational support.",
      "Regulatory reporting agent assembles and validates recurring compliance reports before submission deadlines.",
    ],
  },
];

function SceneBackdrop({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#070B18" />
          <stop offset="55%" stopColor="#0A0A1A" />
          <stop offset="100%" stopColor="#0B1228" />
        </linearGradient>
        <linearGradient id={`${id}-panel`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(37,99,235,0.16)" />
          <stop offset="100%" stopColor="rgba(37,99,235,0.04)" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id={`${id}-grid`} width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(59,130,246,0.08)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="900" height="620" fill={`url(#${id}-bg)`} />
      <rect width="900" height="620" fill={`url(#${id}-grid)`} />
      <circle cx="120" cy="560" r="120" fill={BLUE} opacity="0.07" />
      <circle cx="790" cy="90" r="110" fill={BLUE} opacity="0.08" />
      <circle cx="780" cy="540" r="70" fill={PINK} opacity="0.06" />
    </>
  );
}

function TravelingDot({
  pathId,
  duration,
  delay = "0s",
  color = PINK,
  radius = 7,
}: {
  pathId: string;
  duration: string;
  delay?: string;
  color?: string;
  radius?: number;
}) {
  return (
    <g>
      <animateMotion dur={duration} begin={delay} repeatCount="indefinite" rotate="0">
        <mpath href={`#${pathId}`} />
      </animateMotion>
      <circle r={radius} fill={color} />
      <circle
        r={radius * 2}
        fill="none"
        stroke={color}
        strokeWidth="1.2"
        opacity="0.45"
      />
    </g>
  );
}
function PaymentsIllustration() {
  return (
    <svg viewBox={ILLUSTRATION_VIEWBOX} className="h-full w-full" role="img" aria-label="Payments and settlement agents moving transactions across rails and ledgers">
      <SceneBackdrop id="pay" />
      <text x="450" y="64" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE} fontWeight="600" letterSpacing="2.4">
        SETTLEMENT RAILS
      </text>

      <rect x="32" y="118" width="268" height="118" rx="16" fill="url(#pay-panel)" stroke={BLUE_SOFT} strokeWidth="1.4" />
      <text x="166" y="162" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE} fontWeight="600">TX IN</text>
      <text x="166" y="190" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE}>Card · ACH · wire</text>
      <circle className="fs-ag-glow" cx="274" cy="142" r="5" fill={BLUE} />

      <rect x="600" y="118" width="268" height="118" rx="16" fill="url(#pay-panel)" stroke={BLUE_SOFT} strokeWidth="1.4" />
      <text x="734" y="162" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE} fontWeight="600">CLEARED</text>
      <text x="734" y="190" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE}>Matched · posted</text>
      <circle className="fs-ag-glow" cx="842" cy="142" r="5" fill={BLUE} />

      <g className="fs-ag-float">
        <rect x="316" y="108" width="268" height="86" rx="14" fill="rgba(37,99,235,0.12)" stroke={BLUE} strokeWidth="1.5" />
        <text x="450" y="144" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE} fontWeight="600">Reconciliation</text>
        <text x="450" y="172" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE}>Ledger A  ↔  Ledger B</text>
      </g>

      {[0, 1, 2, 3].map((row) => (
        <g key={row}>
          <rect x="120" y={268 + row * 52} width="200" height="36" rx="8" fill="rgba(37,99,235,0.1)" stroke="rgba(59,130,246,0.35)" />
          <rect x="580" y={268 + row * 52} width="200" height="36" rx="8" fill="rgba(37,99,235,0.1)" stroke="rgba(59,130,246,0.35)" />
          <path
            className="fs-ag-dash"
            d={`M 320 ${286 + row * 52} H 580`}
            fill="none"
            stroke={BLUE_SOFT}
            strokeWidth="1.6"
          />
        </g>
      ))}

      <path
        id="pay-rail"
        d="M 118 478 C 250 478 290 300 450 300 C 640 300 690 478 792 478"
        fill="none"
        stroke={BLUE}
        strokeWidth="2"
        opacity="0.45"
      />
      <path
        d="M 118 478 C 250 478 290 300 450 300 C 640 300 690 478 792 478"
        fill="none"
        stroke={PINK}
        strokeWidth="2"
        strokeLinecap="round"
        pathLength="100"
        strokeDasharray="10 90"
        opacity="0.9"
      >
        <animate attributeName="stroke-dashoffset" values="0;-100" dur="6s" repeatCount="indefinite" />
      </path>
      <TravelingDot pathId="pay-rail" duration="6s" />

      <g transform="translate(400 560)">
        <circle className="fs-ag-pulse" r="18" fill="rgba(211,40,122,0.18)" stroke={PINK} strokeWidth="1.4" />
        <circle r="5" fill={PINK} />
        <text x="36" y="6" fill="#fff" fontSize={LABEL_SIZE}>Fraud triage</text>
      </g>
    </svg>
  );
}

function LendingIllustration() {
  const ring = 2 * Math.PI * 78;
  return (
    <svg viewBox={ILLUSTRATION_VIEWBOX} className="h-full w-full" role="img" aria-label="Lending and credit agents scoring applications and watching portfolio risk">
      <SceneBackdrop id="lend" />
      <text x="450" y="64" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE} fontWeight="600" letterSpacing="2.4">
        CREDIT DECISIONING
      </text>

      <g className="fs-ag-slide">
        <rect x="78" y="150" width="150" height="190" rx="12" fill="url(#lend-panel)" stroke={BLUE_SOFT} strokeWidth="1.4" />
        <rect x="98" y="176" width="110" height="10" rx="5" fill={BLUE} opacity="0.55" />
        <rect x="98" y="198" width="88" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
        <rect x="98" y="218" width="96" height="8" rx="4" fill="rgba(255,255,255,0.16)" />
        <rect x="98" y="238" width="72" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
        <text x="153" y="314" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE} fontWeight="600">Intake</text>
      </g>

      <g transform="translate(450 340)">
        <circle r="108" fill="rgba(37,99,235,0.08)" stroke="rgba(59,130,246,0.25)" />
        <circle r="78" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="10" />
        <circle
          className="fs-ag-gauge"
          r="78"
          fill="none"
          stroke={BLUE}
          strokeWidth="10"
          strokeLinecap="round"
          transform="rotate(-90)"
          strokeDasharray={ring}
          strokeDashoffset="90"
        />
        <path d="M 0 -6 L 8 70 L -8 70 Z" fill={PINK} opacity="0.95" />
        <text y="8" textAnchor="middle" fill="#fff" fontSize="46" fontWeight="700">742</text>
        <text y="36" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE}>score</text>
      </g>

      <g className="fs-ag-float">
        <rect x="672" y="168" width="150" height="64" rx="14" fill="rgba(37,99,235,0.16)" stroke={BLUE} strokeWidth="1.4" />
        <text x="747" y="206" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE} fontWeight="600">Approve</text>
        <rect x="672" y="248" width="150" height="64" rx="14" fill="rgba(211,40,122,0.12)" stroke={PINK} strokeWidth="1.4" />
        <text x="747" y="286" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE} fontWeight="600">Review</text>
      </g>

      <path
        id="lend-rail"
        d="M 80 560 C 180 500 280 620 380 540 C 480 460 560 620 680 520 C 760 460 820 540 850 500"
        fill="none"
        stroke={BLUE_SOFT}
        strokeWidth="2"
        opacity="0.45"
      />
      <path
        d="M 80 560 C 180 500 280 620 380 540 C 480 460 560 620 680 520 C 760 460 820 540 850 500"
        fill="none"
        stroke={PINK}
        strokeWidth="2"
        strokeLinecap="round"
        pathLength="100"
        strokeDasharray="10 90"
        opacity="0.9"
      >
        <animate attributeName="stroke-dashoffset" values="0;-100" dur="7s" repeatCount="indefinite" />
      </path>
      <text x="450" y="588" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE}>
        Portfolio risk waveform
      </text>
      <TravelingDot pathId="lend-rail" duration="7s" radius={6} />
    </svg>
  );
}

function InfrastructureIllustration() {
  return (
    <svg viewBox={ILLUSTRATION_VIEWBOX} className="h-full w-full" role="img" aria-label="Financial infrastructure agents syncing ledgers, compliance, and vendor payments">
      <SceneBackdrop id="infra" />
      <text x="450" y="64" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE} fontWeight="600" letterSpacing="2.4">
        CORE SYNC FABRIC
      </text>

      <path d="M 210 560 V 390 H 690 V 560" fill="none" stroke="rgba(59,130,246,0.35)" strokeWidth="1.6" />
      <path d="M 450 560 V 220 H 690 V 390" fill="none" stroke="rgba(59,130,246,0.35)" strokeWidth="1.6" />
      <path d="M 210 390 H 450 V 220" fill="none" stroke="rgba(59,130,246,0.35)" strokeWidth="1.6" />
      <path
        id="infra-rail"
        d="M 210 560 V 390 H 450 V 220 H 690 V 390 H 450 V 560"
        fill="none"
        stroke="transparent"
      />
      <path
        d="M 210 560 V 390 H 450 V 220 H 690 V 390 H 450 V 560"
        fill="none"
        stroke={PINK}
        strokeWidth="1.8"
        strokeLinecap="round"
        pathLength="100"
        strokeDasharray="8 92"
        opacity="0.85"
      >
        <animate attributeName="stroke-dashoffset" values="0;-100" dur="8s" repeatCount="indefinite" />
      </path>

      <g className="fs-ag-float">
        <rect x="300" y="168" width="300" height="96" rx="18" fill="url(#infra-panel)" stroke={BLUE} strokeWidth="1.6" />
        <text x="450" y="212" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE} fontWeight="600">Ledger core</text>
        <text x="450" y="240" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE}>Near-real-time sync</text>
      </g>

      <rect x="96" y="332" width="220" height="92" rx="16" fill="url(#infra-panel)" stroke={BLUE_SOFT} strokeWidth="1.4" />
      <text x="206" y="374" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE} fontWeight="600">Partner bank</text>
      <text x="206" y="402" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE}>External ledger</text>

      <rect x="584" y="332" width="220" height="92" rx="16" fill="url(#infra-panel)" stroke={BLUE_SOFT} strokeWidth="1.4" />
      <text x="694" y="374" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE} fontWeight="600">Vendor pay</text>
      <text x="694" y="402" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE}>Invoice match</text>

      <g className="fs-ag-spin">
        <circle cx="450" cy="500" r="54" fill="rgba(37,99,235,0.12)" stroke={BLUE} strokeWidth="1.6" />
        <circle cx="450" cy="500" r="28" fill="none" stroke={BLUE_SOFT} strokeWidth="1.2" strokeDasharray="6 8" />
      </g>
      <text x="450" y="506" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE} fontWeight="600">API</text>

      <g transform="translate(206 560)">
        <circle className="fs-ag-pulse" r="16" fill="rgba(211,40,122,0.16)" stroke={PINK} strokeWidth="1.4" />
        <circle r="5" fill={PINK} />
      </g>
      <text x="234" y="566" fill="#fff" fontSize={LABEL_SIZE}>KYC / AML</text>

      <TravelingDot pathId="infra-rail" duration="8s" radius={6} color={BLUE} />
      <TravelingDot pathId="infra-rail" duration="8s" delay="-4s" radius={6} />
    </svg>
  );
}

function BankingIllustration() {
  return (
    <svg viewBox={ILLUSTRATION_VIEWBOX} className="h-full w-full" role="img" aria-label="Banking agents guiding onboarding, servicing, and regulatory reporting">
      <SceneBackdrop id="bank" />
      <text x="450" y="64" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE} fontWeight="600" letterSpacing="2.4">
        BANKING OPERATIONS
      </text>

      <g className="fs-ag-float">
        <rect x="330" y="128" width="240" height="28" rx="4" fill={BLUE} opacity="0.85" />
        <rect x="350" y="156" width="200" height="150" fill="url(#bank-panel)" stroke={BLUE_SOFT} strokeWidth="1.5" />
        {[0, 1, 2, 3].map((col) => (
          <rect key={col} x={372 + col * 44} y="176" width="22" height="110" rx="3" fill={BLUE} opacity="0.45" />
        ))}
        <rect x="410" y="248" width="80" height="58" rx="4" fill="rgba(10,10,26,0.85)" stroke={PINK} strokeWidth="1.4" />
      </g>

      <path
        id="bank-rail"
        d="M 180 560 C 180 420 320 390 450 390 C 620 390 720 430 720 560"
        fill="none"
        stroke={BLUE}
        strokeWidth="1.8"
        opacity="0.45"
      />
      <path
        d="M 180 560 C 180 420 320 390 450 390 C 620 390 720 430 720 560"
        fill="none"
        stroke={PINK}
        strokeWidth="1.8"
        strokeLinecap="round"
        pathLength="100"
        strokeDasharray="10 90"
        opacity="0.9"
      >
        <animate attributeName="stroke-dashoffset" values="0;-100" dur="6.5s" repeatCount="indefinite" />
      </path>

      <g className="fs-ag-stack">
        <rect x="46" y="470" width="248" height="96" rx="14" fill="url(#bank-panel)" stroke={BLUE_SOFT} strokeWidth="1.4" />
        <text x="170" y="512" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE} fontWeight="600">Onboarding</text>
        <text x="170" y="540" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE}>KYC concierge</text>
      </g>

      <rect x="326" y="500" width="248" height="96" rx="14" fill="url(#bank-panel)" stroke={BLUE_SOFT} strokeWidth="1.4" />
      <text x="450" y="542" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE} fontWeight="600">Servicing</text>
      <text x="450" y="570" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE}>Limits · disputes</text>

      <g className="fs-ag-stack" style={{ animationDelay: "0.6s" }}>
        <rect x="606" y="470" width="248" height="96" rx="14" fill="url(#bank-panel)" stroke={BLUE_SOFT} strokeWidth="1.4" />
        <text x="730" y="512" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE} fontWeight="600">Reporting</text>
        <text x="730" y="540" textAnchor="middle" fill="#fff" fontSize={LABEL_SIZE}>Audit pack</text>
        <circle cx="826" cy="488" r="8" fill={PINK} className="fs-ag-glow" />
      </g>

      <TravelingDot pathId="bank-rail" duration="6.5s" />
    </svg>
  );
}

function AgentTabIllustration({ id }: { id: Tab["id"] }) {
  if (id === "paytech") return <PaymentsIllustration />;
  if (id === "lendtech") return <LendingIllustration />;
  if (id === "financial-infrastructure") return <InfrastructureIllustration />;
  return <BankingIllustration />;
}

export default function FinancialServicesAgentsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<Tab["id"]>(tabs[0].id);
  const [reduceMotion, setReduceMotion] = useState(false);
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduceMotion(media.matches);
    syncMotion();
    media.addEventListener("change", syncMotion);
    return () => media.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const updateActiveTab = () => {
      frame = 0;
      const rect = track.getBoundingClientRect();
      const scrollable = track.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const scrolled = Math.min(scrollable, Math.max(0, -rect.top));
      const progress = scrolled / scrollable;
      const nextIndex = Math.min(
        tabs.length - 1,
        Math.floor(progress * tabs.length)
      );
      const nextId = tabs[nextIndex].id;
      setActiveId((current) => (current === nextId ? current : nextId));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveTab);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateActiveTab();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

  const selectTab = (id: Tab["id"]) => {
    if (reduceMotion) {
      setActiveId(id);
      return;
    }

    const track = trackRef.current;
    const index = tabs.findIndex((tab) => tab.id === id);
    if (!track || index < 0) {
      setActiveId(id);
      return;
    }

    const start = track.getBoundingClientRect().top + window.scrollY;
    const scrollable = track.offsetHeight - window.innerHeight;
    const target =
      start + ((index + 0.2) / tabs.length) * Math.max(scrollable, 0);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <div
      ref={trackRef}
      className="relative bg-default"
      style={reduceMotion ? undefined : { height: `${tabs.length * 70}vh` }}
    >
      <section className="sticky top-16 bg-default pt-6 pb-6 text-white md:top-20 md:pt-8 md:pb-8">
        <style>{AGENT_ILLUSTRATION_STYLES}</style>
        <Container>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-40px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="text-center text-[12px] font-semibold uppercase tracking-[0.16em] text-primary-pink"
          >
            Sample Agents Categories
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-40px", amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mx-auto mt-3 max-w-4xl text-center text-[48px] font-semibold leading-[52px] text-white"
          >
            Purpose built AI agents for the workflows that run modern finance
          </motion.h2>

          <div className="mt-7 md:mt-8">
            <div
              role="tablist"
              aria-label="Sample agents categories"
              className="grid w-full grid-cols-1 border-b border-white/12 sm:grid-cols-2 lg:grid-cols-4"
            >
              {tabs.map((tab) => {
                const isActive = tab.id === activeId;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`tabpanel-${tab.id}`}
                    id={`tab-${tab.id}`}
                    onClick={() => selectTab(tab.id)}
                    className={cn(
                      "relative flex min-h-12 cursor-pointer items-center justify-center gap-2 px-3 py-3.5 text-[18px] font-medium tracking-wide transition-colors duration-200",
                      isActive ? "text-white" : "text-white hover:text-white"
                    )}
                  >
                    {isActive ? (
                      <Icon className="h-5 w-5 shrink-0 text-primary-pink" aria-hidden />
                    ) : null}
                    <span>{tab.label}</span>
                    <span
                      className={cn(
                        "absolute inset-x-0 -bottom-px h-0.5 transition-colors duration-200",
                        isActive ? "bg-primary-pink" : "bg-transparent"
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-7 md:mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                role="tabpanel"
                id={`tabpanel-${activeTab.id}`}
                aria-labelledby={`tab-${activeTab.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className="max-w-lg">
                  <h3 className="text-2xl font-semibold leading-tight text-white md:text-[26px]">
                    {activeTab.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-relaxed text-white md:text-base">
                    {activeTab.description}
                  </p>

                  <ul className="mt-8 space-y-3 text-[15px] text-white md:text-base">
                    {activeTab.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <HiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary-pink" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="relative aspect-[900/576] w-full max-w-[480px] overflow-hidden rounded-[12px] border border-white/10 bg-black lg:max-w-[520px]">
                    <AgentTabIllustration id={activeTab.id} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>
      </section>
    </div>
  );
}
