"use client";

import { useState } from "react";
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
@keyframes fs-ag-flow { to { offset-distance: 100%; } }
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
.fs-ag-token-pay {
  offset-path: path("M 118 478 C 250 478 290 300 450 300 C 640 300 690 478 792 478");
  offset-rotate: 0deg;
  animation: fs-ag-flow 5.6s linear infinite;
}
.fs-ag-token-lend {
  offset-path: path("M 160 520 C 280 430 360 250 450 250 C 560 250 640 430 760 520");
  offset-rotate: 0deg;
  animation: fs-ag-flow 6s linear infinite;
}
.fs-ag-token-infra {
  offset-path: path("M 210 560 V 390 H 450 V 220 H 690 V 390 H 450 V 560");
  offset-rotate: 0deg;
  animation: fs-ag-flow 7s linear infinite;
}
.fs-ag-token-bank {
  offset-path: path("M 180 560 C 180 420 320 390 450 390 C 620 390 720 430 720 560");
  offset-rotate: 0deg;
  animation: fs-ag-flow 6.4s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .fs-ag-dash, .fs-ag-pulse, .fs-ag-float, .fs-ag-spin,
  .fs-ag-gauge, .fs-ag-glow, .fs-ag-slide, .fs-ag-stack,
  .fs-ag-token-pay, .fs-ag-token-lend, .fs-ag-token-infra, .fs-ag-token-bank {
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
      <rect width="900" height="734" fill={`url(#${id}-bg)`} />
      <rect width="900" height="734" fill={`url(#${id}-grid)`} />
      <circle cx="120" cy="640" r="160" fill={BLUE} opacity="0.07" />
      <circle cx="790" cy="110" r="150" fill={BLUE} opacity="0.08" />
      <circle cx="780" cy="620" r="90" fill={PINK} opacity="0.06" />
    </>
  );
}

function PaymentsIllustration() {
  return (
    <svg viewBox="0 0 900 734" className="h-full w-full" role="img" aria-label="Payments and settlement agents moving transactions across rails and ledgers">
      <SceneBackdrop id="pay" />
      <text x="450" y="64" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600" letterSpacing="2.4">
        SETTLEMENT RAILS
      </text>

      <rect x="86" y="118" width="210" height="118" rx="16" fill="url(#pay-panel)" stroke={BLUE_SOFT} strokeWidth="1.4" />
      <text x="191" y="162" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">TX IN</text>
      <text x="191" y="186" textAnchor="middle" fill="#fff" fontSize="12">Card · ACH · wire</text>
      <circle className="fs-ag-glow" cx="248" cy="142" r="5" fill={BLUE} />

      <rect x="604" y="118" width="210" height="118" rx="16" fill="url(#pay-panel)" stroke={BLUE_SOFT} strokeWidth="1.4" />
      <text x="709" y="162" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">CLEARED</text>
      <text x="709" y="186" textAnchor="middle" fill="#fff" fontSize="12">Matched · posted</text>
      <circle className="fs-ag-glow" cx="766" cy="142" r="5" fill={BLUE} />

      <g className="fs-ag-float">
        <rect x="352" y="108" width="196" height="86" rx="14" fill="rgba(37,99,235,0.12)" stroke={BLUE} strokeWidth="1.5" />
        <text x="450" y="144" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600">Reconciliation</text>
        <text x="450" y="168" textAnchor="middle" fill="#fff" fontSize="11">Ledger A  ↔  Ledger B</text>
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
        d="M 118 478 C 250 478 290 300 450 300 C 640 300 690 478 792 478"
        fill="none"
        stroke={BLUE}
        strokeWidth="2"
        opacity="0.45"
      />

      <g filter="url(#pay-glow)">
        <circle className="fs-ag-token-pay" r="7" fill={PINK} />
        <circle className="fs-ag-token-pay" r="14" fill="none" stroke={PINK} strokeWidth="1.2" opacity="0.45" />
      </g>

      <g transform="translate(400 560)">
        <circle className="fs-ag-pulse" r="18" fill="rgba(211,40,122,0.18)" stroke={PINK} strokeWidth="1.4" />
        <circle r="5" fill={PINK} />
        <text x="36" y="5" fill="#fff" fontSize="12">Fraud triage</text>
      </g>
    </svg>
  );
}

function LendingIllustration() {
  const ring = 2 * Math.PI * 78;
  return (
    <svg viewBox="0 0 900 734" className="h-full w-full" role="img" aria-label="Lending and credit agents scoring applications and watching portfolio risk">
      <SceneBackdrop id="lend" />
      <text x="450" y="64" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600" letterSpacing="2.4">
        CREDIT DECISIONING
      </text>

      <g className="fs-ag-slide">
        <rect x="78" y="150" width="150" height="190" rx="12" fill="url(#lend-panel)" stroke={BLUE_SOFT} strokeWidth="1.4" />
        <rect x="98" y="176" width="110" height="10" rx="5" fill={BLUE} opacity="0.55" />
        <rect x="98" y="198" width="88" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
        <rect x="98" y="218" width="96" height="8" rx="4" fill="rgba(255,255,255,0.16)" />
        <rect x="98" y="238" width="72" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
        <text x="153" y="310" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">Intake</text>
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
        <text y="8" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="700">742</text>
        <text y="32" textAnchor="middle" fill="#fff" fontSize="12">score</text>
      </g>

      <g className="fs-ag-float">
        <rect x="672" y="168" width="150" height="64" rx="14" fill="rgba(37,99,235,0.16)" stroke={BLUE} strokeWidth="1.4" />
        <text x="747" y="206" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">Approve</text>
        <rect x="672" y="248" width="150" height="64" rx="14" fill="rgba(211,40,122,0.12)" stroke={PINK} strokeWidth="1.4" />
        <text x="747" y="286" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">Review</text>
      </g>

      <path
        className="fs-ag-dash"
        d="M 80 560 C 180 500 280 620 380 540 C 480 460 560 620 680 520 C 760 460 820 540 850 500"
        fill="none"
        stroke={BLUE_SOFT}
        strokeWidth="2"
      />
      <text x="450" y="660" textAnchor="middle" fill="#fff" fontSize="12">
        Portfolio risk waveform
      </text>
      <circle className="fs-ag-token-lend" r="6" fill={PINK} />
    </svg>
  );
}

function InfrastructureIllustration() {
  return (
    <svg viewBox="0 0 900 734" className="h-full w-full" role="img" aria-label="Financial infrastructure agents syncing ledgers, compliance, and vendor payments">
      <SceneBackdrop id="infra" />
      <text x="450" y="64" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600" letterSpacing="2.4">
        CORE SYNC FABRIC
      </text>

      <path d="M 210 560 V 390 H 690 V 560" fill="none" stroke="rgba(59,130,246,0.35)" strokeWidth="1.6" />
      <path d="M 450 560 V 220 H 690 V 390" fill="none" stroke="rgba(59,130,246,0.35)" strokeWidth="1.6" />
      <path d="M 210 390 H 450 V 220" fill="none" stroke="rgba(59,130,246,0.35)" strokeWidth="1.6" />

      <g className="fs-ag-float">
        <rect x="300" y="168" width="300" height="96" rx="18" fill="url(#infra-panel)" stroke={BLUE} strokeWidth="1.6" />
        <text x="450" y="212" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="600">Ledger core</text>
        <text x="450" y="236" textAnchor="middle" fill="#fff" fontSize="12">Near-real-time sync</text>
      </g>

      <rect x="96" y="332" width="220" height="92" rx="16" fill="url(#infra-panel)" stroke={BLUE_SOFT} strokeWidth="1.4" />
      <text x="206" y="374" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">Partner bank</text>
      <text x="206" y="398" textAnchor="middle" fill="#fff" fontSize="12">External ledger</text>

      <rect x="584" y="332" width="220" height="92" rx="16" fill="url(#infra-panel)" stroke={BLUE_SOFT} strokeWidth="1.4" />
      <text x="694" y="374" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">Vendor pay</text>
      <text x="694" y="398" textAnchor="middle" fill="#fff" fontSize="12">Invoice match</text>

      <g className="fs-ag-spin">
        <circle cx="450" cy="500" r="54" fill="rgba(37,99,235,0.12)" stroke={BLUE} strokeWidth="1.6" />
        <circle cx="450" cy="500" r="28" fill="none" stroke={BLUE_SOFT} strokeWidth="1.2" strokeDasharray="6 8" />
        <text x="450" y="506" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">API</text>
      </g>

      <g transform="translate(206 560)">
        <circle className="fs-ag-pulse" r="16" fill="rgba(211,40,122,0.16)" stroke={PINK} strokeWidth="1.4" />
        <circle r="5" fill={PINK} />
      </g>
      <text x="234" y="564" fill="#fff" fontSize="12">KYC / AML</text>

      <circle className="fs-ag-token-infra" r="6" fill={BLUE} />
      <circle className="fs-ag-token-infra" r="6" fill={PINK} style={{ animationDelay: "-3.5s" }} />
    </svg>
  );
}

function BankingIllustration() {
  return (
    <svg viewBox="0 0 900 734" className="h-full w-full" role="img" aria-label="Banking agents guiding onboarding, servicing, and regulatory reporting">
      <SceneBackdrop id="bank" />
      <text x="450" y="64" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600" letterSpacing="2.4">
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
        d="M 180 560 C 180 420 320 390 450 390 C 620 390 720 430 720 560"
        fill="none"
        stroke={BLUE}
        strokeWidth="1.8"
        opacity="0.45"
      />

      <g className="fs-ag-stack">
        <rect x="86" y="470" width="168" height="96" rx="14" fill="url(#bank-panel)" stroke={BLUE_SOFT} strokeWidth="1.4" />
        <text x="170" y="514" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600">Onboarding</text>
        <text x="170" y="536" textAnchor="middle" fill="#fff" fontSize="11">KYC concierge</text>
      </g>

      <rect x="366" y="500" width="168" height="96" rx="14" fill="url(#bank-panel)" stroke={BLUE_SOFT} strokeWidth="1.4" />
      <text x="450" y="544" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600">Servicing</text>
      <text x="450" y="566" textAnchor="middle" fill="#fff" fontSize="11">Limits · disputes</text>

      <g className="fs-ag-stack" style={{ animationDelay: "0.6s" }}>
        <rect x="646" y="470" width="168" height="96" rx="14" fill="url(#bank-panel)" stroke={BLUE_SOFT} strokeWidth="1.4" />
        <text x="730" y="514" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600">Reporting</text>
        <text x="730" y="536" textAnchor="middle" fill="#fff" fontSize="11">Audit pack</text>
        <circle cx="786" cy="488" r="8" fill={PINK} className="fs-ag-glow" />
      </g>

      <circle className="fs-ag-token-bank" r="7" fill={PINK} />
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
  const [activeId, setActiveId] = useState<Tab["id"]>(tabs[0].id);
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <section className="bg-default py-20 text-white md:py-28">
      <style>{AGENT_ILLUSTRATION_STYLES}</style>
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-pink"
        >
          Sample Agents Categories
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-4 max-w-2xl text-center text-3xl font-semibold leading-tight text-white md:text-4xl"
        >
          Purpose built AI agents for the workflows that run modern finance
        </motion.h2>

        <div className="mt-12 md:mt-16">
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
                  onClick={() => setActiveId(tab.id)}
                  className={cn(
                    "relative flex min-h-12 cursor-pointer items-center justify-center gap-2 px-4 py-3.5 text-[13px] font-medium tracking-wide transition-colors duration-200 md:text-sm",
                    isActive
                      ? "text-white"
                      : "text-white hover:text-white"
                  )}
                >
                  {isActive ? (
                    <Icon className="h-4 w-4 shrink-0 text-primary-pink" aria-hidden />
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

        <div className="mt-12 md:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              role="tabpanel"
              id={`tabpanel-${activeTab.id}`}
              aria-labelledby={`tab-${activeTab.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
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
                <div className="relative aspect-900/734 w-full max-w-[560px] overflow-hidden rounded-[12px] border border-white/10 bg-black">
                  <AgentTabIllustration id={activeTab.id} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
