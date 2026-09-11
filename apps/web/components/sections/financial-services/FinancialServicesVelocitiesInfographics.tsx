"use client";

import { motion } from "framer-motion";

const BLUE = "#426CFF";
const PINK = "#D3287A";
const easeSoft = [0.45, 0, 0.55, 1] as const;

const visualClassName =
  "mx-auto h-auto w-full max-h-[165px] max-w-[200px] transition-transform duration-500 group-hover:scale-105";

/** Banking UI component library — reusable UI pieces around a shared kit */
function BankingUiVisual() {
  const parts = [
    { x: 110, y: 28, label: "Cards" },
    { x: 178, y: 80, label: "Forms" },
    { x: 110, y: 132, label: "Flows" },
    { x: 42, y: 80, label: "Auth" },
  ];

  return (
    <svg
      viewBox="0 0 220 160"
      className={visualClassName}
      fill="none"
      aria-hidden
    >
      <defs>
        <radialGradient id="fs-ui-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={BLUE} stopOpacity="0.45" />
          <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fs-ui-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={BLUE} />
          <stop offset="100%" stopColor={PINK} stopOpacity="0.7" />
        </linearGradient>
      </defs>

      <motion.circle
        cx="110"
        cy="80"
        r="62"
        fill="url(#fs-ui-glow)"
        animate={{ opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: easeSoft }}
      />

      {parts.map((part, i) => (
        <motion.line
          key={`line-${part.label}`}
          x1="110"
          y1="80"
          x2={part.x}
          y2={part.y}
          stroke="url(#fs-ui-ring)"
          strokeWidth="1.5"
          animate={{ opacity: [0.3, 0.75, 0.3] }}
          transition={{
            duration: 3.2,
            delay: i * 0.35,
            repeat: Infinity,
            ease: easeSoft,
          }}
        />
      ))}

      <motion.circle
        cx="110"
        cy="80"
        r="54"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        animate={{ strokeDashoffset: [0, -40] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {parts.map((part, i) => (
        <motion.g
          key={part.label}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{
            duration: 3.5,
            delay: i * 0.4,
            repeat: Infinity,
            ease: easeSoft,
          }}
          style={{ transformOrigin: `${part.x}px ${part.y}px` }}
        >
          <rect
            x={part.x - 22}
            y={part.y - 12}
            width="44"
            height="24"
            rx="8"
            fill="#0B1020"
            stroke={BLUE}
            strokeWidth="1.5"
          />
          <text
            x={part.x}
            y={part.y + 4}
            fill="white"
            fontSize="9"
            fontFamily="sans-serif"
            fontWeight="600"
            textAnchor="middle"
          >
            {part.label}
          </text>
        </motion.g>
      ))}

      <motion.g
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: easeSoft }}
        style={{ transformOrigin: "110px 80px" }}
      >
        <circle
          cx="110"
          cy="80"
          r="24"
          fill="#0B1020"
          stroke="url(#fs-ui-ring)"
          strokeWidth="2"
        />
        <circle cx="110" cy="80" r="24" fill={BLUE} fillOpacity="0.15" />
      </motion.g>

      <text
        x="110"
        y="76"
        fill="white"
        fontSize="9"
        fontFamily="sans-serif"
        fontWeight="700"
        textAnchor="middle"
      >
        UI Kit
      </text>
      <text
        x="110"
        y="90"
        fill={PINK}
        fontSize="8"
        fontFamily="sans-serif"
        fontWeight="600"
        textAnchor="middle"
      >
        Banking
      </text>
    </svg>
  );
}

/** Workflow orchestration blueprints — financial pipeline stages */
function OrchestrationVisual() {
  const stages = [
    { y: 36, label: "Ingest", accent: BLUE, progress: 12 },
    { y: 84, label: "Orchestrate", accent: "#7C9BFF", progress: 20 },
    { y: 132, label: "Deliver", accent: PINK, progress: 28 },
  ];

  return (
    <svg
      viewBox="0 0 240 180"
      className={visualClassName}
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="fs-orch-ribbon" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={BLUE} />
          <stop offset="100%" stopColor={PINK} />
        </linearGradient>
      </defs>

      <motion.path
        d="M48 28 V152"
        stroke="url(#fs-orch-ribbon)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{
          duration: 5.5,
          times: [0, 0.45, 0.7, 1],
          repeat: Infinity,
          ease: easeSoft,
          repeatDelay: 0.4,
        }}
      />
      <motion.circle
        cx="48"
        cy="28"
        r="6"
        fill={BLUE}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: easeSoft }}
      />
      <motion.circle
        cx="48"
        cy="152"
        r="6"
        fill={PINK}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, delay: 0.4, repeat: Infinity, ease: easeSoft }}
      />

      {stages.map((stage, i) => (
        <motion.g
          key={stage.label}
          initial={{ opacity: 0.35, x: -6 }}
          animate={{ opacity: [0.4, 1, 1, 0.4], x: [-6, 0, 0, -6] }}
          transition={{
            duration: 5.5,
            delay: 0.35 + i * 0.35,
            times: [0, 0.2, 0.75, 1],
            repeat: Infinity,
            ease: easeSoft,
            repeatDelay: 0.4,
          }}
        >
          <rect
            x="68"
            y={stage.y - 18}
            width="148"
            height="36"
            rx="10"
            fill="#12162a"
            stroke="white"
            strokeOpacity="0.1"
          />
          <rect
            x="68"
            y={stage.y - 18}
            width="5"
            height="36"
            rx="2"
            fill={stage.accent}
          />
          <line
            x1="48"
            y1={stage.y}
            x2="68"
            y2={stage.y}
            stroke={stage.accent}
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <motion.rect
            x="78"
            y={stage.y - 9}
            width="34"
            height="18"
            rx="5"
            fill={stage.accent}
            fillOpacity="0.2"
            stroke={stage.accent}
            strokeWidth="1"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 2.2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: easeSoft,
            }}
          />
          <text
            x="95"
            y={stage.y + 4}
            fill={stage.accent}
            fontSize="7"
            fontFamily="sans-serif"
            fontWeight="700"
            textAnchor="middle"
          >
            FLOW
          </text>
          <text
            x="122"
            y={stage.y + 5}
            fill="white"
            fontSize="12"
            fontFamily="sans-serif"
            fontWeight="600"
          >
            {stage.label}
          </text>
          <rect
            x="176"
            y={stage.y - 4}
            width="28"
            height="8"
            rx="3"
            fill="white"
            fillOpacity="0.08"
          />
          <motion.rect
            x="176"
            y={stage.y - 4}
            height="8"
            rx="3"
            fill={stage.accent}
            fillOpacity="0.7"
            initial={{ width: 0 }}
            animate={{ width: [0, stage.progress, stage.progress, 0] }}
            transition={{
              duration: 5.5,
              delay: 0.5 + i * 0.35,
              times: [0, 0.35, 0.75, 1],
              repeat: Infinity,
              ease: easeSoft,
              repeatDelay: 0.4,
            }}
          />
        </motion.g>
      ))}
    </svg>
  );
}

/** Model performance dashboards — drift / accuracy monitoring */
function ModelDashboardsVisual() {
  return (
    <svg
      viewBox="0 0 240 180"
      className={visualClassName}
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="fs-dash-bar" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={BLUE} stopOpacity="0.35" />
          <stop offset="100%" stopColor={BLUE} />
        </linearGradient>
        <linearGradient id="fs-dash-uplift" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={BLUE} />
          <stop offset="100%" stopColor={PINK} />
        </linearGradient>
      </defs>

      <rect
        x="20"
        y="24"
        width="140"
        height="132"
        rx="12"
        fill="#12162a"
        stroke="white"
        strokeOpacity="0.1"
      />

      <text x="36" y="48" fill="white" fontSize="10" fontFamily="sans-serif" opacity="0.5">
        Live model health
      </text>

      <text x="36" y="78" fill="white" fontSize="9" fontFamily="sans-serif" opacity="0.55">
        Drift risk
      </text>
      <rect x="36" y="86" width="100" height="12" rx="4" fill="white" fillOpacity="0.08" />
      <motion.rect
        x="36"
        y="86"
        height="12"
        rx="4"
        fill="white"
        fillOpacity="0.28"
        initial={{ width: 0 }}
        animate={{ width: [0, 42, 42, 0] }}
        transition={{
          duration: 5,
          times: [0, 0.35, 0.7, 1],
          repeat: Infinity,
          ease: easeSoft,
          repeatDelay: 0.35,
        }}
      />

      <text x="36" y="122" fill={BLUE} fontSize="9" fontFamily="sans-serif" fontWeight="600">
        Accuracy
      </text>
      <rect x="36" y="130" width="100" height="12" rx="4" fill="white" fillOpacity="0.08" />
      <motion.rect
        x="36"
        y="130"
        height="12"
        rx="4"
        fill="url(#fs-dash-bar)"
        initial={{ width: 0 }}
        animate={{ width: [0, 94, 94, 0] }}
        transition={{
          duration: 5,
          delay: 0.2,
          times: [0, 0.4, 0.7, 1],
          repeat: Infinity,
          ease: easeSoft,
          repeatDelay: 0.35,
        }}
      />

      <motion.g
        animate={{ opacity: [0.7, 1, 0.7], scale: [0.97, 1.03, 0.97] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: easeSoft }}
        style={{ transformOrigin: "198px 68px" }}
      >
        <rect
          x="172"
          y="40"
          width="52"
          height="56"
          rx="10"
          fill="#0B1020"
          stroke="url(#fs-dash-uplift)"
          strokeWidth="1.5"
        />
        <text
          x="198"
          y="68"
          fill={PINK}
          fontSize="14"
          fontFamily="sans-serif"
          fontWeight="700"
          textAnchor="middle"
        >
          98%
        </text>
        <text
          x="198"
          y="84"
          fill="white"
          fontSize="8"
          fontFamily="sans-serif"
          opacity="0.55"
          textAnchor="middle"
        >
          stable
        </text>
      </motion.g>

      <motion.rect
        x="172"
        y="108"
        width="52"
        height="22"
        rx="6"
        fill="#12162a"
        stroke="white"
        strokeOpacity="0.1"
        animate={{ opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: easeSoft }}
      />
      <text
        x="198"
        y="123"
        fill="white"
        fontSize="9"
        fontFamily="sans-serif"
        fontWeight="600"
        textAnchor="middle"
      >
        Drift
      </text>
      <motion.rect
        x="172"
        y="136"
        width="52"
        height="22"
        rx="6"
        fill="#12162a"
        stroke={PINK}
        strokeOpacity="0.4"
        animate={{ opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 2.8, delay: 0.35, repeat: Infinity, ease: easeSoft }}
      />
      <text
        x="198"
        y="151"
        fill={PINK}
        fontSize="9"
        fontFamily="sans-serif"
        fontWeight="600"
        textAnchor="middle"
      >
        Alert
      </text>
    </svg>
  );
}

/** AI infrastructure engine — secure deploy / scale foundation */
function AiInfraVisual() {
  const stages = [
    { y: 36, label: "Deploy", accent: BLUE, progress: 14 },
    { y: 84, label: "Scale", accent: "#7C9BFF", progress: 22 },
    { y: 132, label: "Secure", accent: PINK, progress: 26 },
  ];

  return (
    <svg
      viewBox="0 0 240 180"
      className={visualClassName}
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="fs-infra-ribbon" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={BLUE} />
          <stop offset="100%" stopColor={PINK} />
        </linearGradient>
      </defs>

      <motion.path
        d="M48 28 V152"
        stroke="url(#fs-infra-ribbon)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{
          duration: 5.5,
          times: [0, 0.45, 0.7, 1],
          repeat: Infinity,
          ease: easeSoft,
          repeatDelay: 0.4,
        }}
      />
      <motion.circle
        cx="48"
        cy="28"
        r="6"
        fill={BLUE}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: easeSoft }}
      />
      <motion.circle
        cx="48"
        cy="152"
        r="6"
        fill={PINK}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, delay: 0.4, repeat: Infinity, ease: easeSoft }}
      />

      {stages.map((stage, i) => (
        <motion.g
          key={stage.label}
          initial={{ opacity: 0.35, x: -6 }}
          animate={{ opacity: [0.4, 1, 1, 0.4], x: [-6, 0, 0, -6] }}
          transition={{
            duration: 5.5,
            delay: 0.35 + i * 0.35,
            times: [0, 0.2, 0.75, 1],
            repeat: Infinity,
            ease: easeSoft,
            repeatDelay: 0.4,
          }}
        >
          <rect
            x="68"
            y={stage.y - 18}
            width="148"
            height="36"
            rx="10"
            fill="#12162a"
            stroke="white"
            strokeOpacity="0.1"
          />
          <rect
            x="68"
            y={stage.y - 18}
            width="5"
            height="36"
            rx="2"
            fill={stage.accent}
          />
          <line
            x1="48"
            y1={stage.y}
            x2="68"
            y2={stage.y}
            stroke={stage.accent}
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <motion.rect
            x="78"
            y={stage.y - 9}
            width="28"
            height="18"
            rx="5"
            fill={stage.accent}
            fillOpacity="0.2"
            stroke={stage.accent}
            strokeWidth="1"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 2.2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: easeSoft,
            }}
          />
          <text
            x="92"
            y={stage.y + 4}
            fill={stage.accent}
            fontSize="8"
            fontFamily="sans-serif"
            fontWeight="700"
            textAnchor="middle"
          >
            AI
          </text>
          <text
            x="118"
            y={stage.y + 5}
            fill="white"
            fontSize="13"
            fontFamily="sans-serif"
            fontWeight="600"
          >
            {stage.label}
          </text>
          <rect
            x="176"
            y={stage.y - 4}
            width="28"
            height="8"
            rx="3"
            fill="white"
            fillOpacity="0.08"
          />
          <motion.rect
            x="176"
            y={stage.y - 4}
            height="8"
            rx="3"
            fill={stage.accent}
            fillOpacity="0.7"
            initial={{ width: 0 }}
            animate={{ width: [0, stage.progress, stage.progress, 0] }}
            transition={{
              duration: 5.5,
              delay: 0.5 + i * 0.35,
              times: [0, 0.35, 0.75, 1],
              repeat: Infinity,
              ease: easeSoft,
              repeatDelay: 0.4,
            }}
          />
        </motion.g>
      ))}
    </svg>
  );
}

/**
 * Finance Velocities animations — Velocity AI motion style,
 * with labels and meaning tuned to each finance card.
 */
export default function FinancialServicesVelocitiesInfographics({
  id,
}: {
  id: string;
}) {
  if (id === "ui-banking-wrappers") return <BankingUiVisual />;
  if (id === "airflow-blueprints") return <OrchestrationVisual />;
  if (id === "model-monitoring-dashboards") return <ModelDashboardsVisual />;
  if (id === "ai-cloud-engine") return <AiInfraVisual />;
  return null;
}
