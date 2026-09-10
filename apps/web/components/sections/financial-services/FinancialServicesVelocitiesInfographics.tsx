const BLUE = "#2563EB";
const BLUE_SOFT = "#3B82F6";
const PINK = "#D3287A";

const VELOCITY_ILLUSTRATION_STYLES = `
@keyframes fs-vel-dash { to { stroke-dashoffset: -36; } }
@keyframes fs-vel-pulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.12); }
}
@keyframes fs-vel-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes fs-vel-spin { to { transform: rotate(360deg); } }
@keyframes fs-vel-gauge {
  0% { stroke-dashoffset: 220; }
  55% { stroke-dashoffset: 58; }
  100% { stroke-dashoffset: 220; }
}
@keyframes fs-vel-flow { to { offset-distance: 100%; } }
@keyframes fs-vel-glow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
@keyframes fs-vel-bar {
  0%, 100% { transform: scaleY(0.42); }
  50% { transform: scaleY(1); }
}
@keyframes fs-vel-draw {
  0% { stroke-dashoffset: 420; }
  55% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 420; }
}
@keyframes fs-vel-scan {
  0% { transform: translateY(0); opacity: 0.15; }
  50% { transform: translateY(118px); opacity: 0.85; }
  100% { transform: translateY(0); opacity: 0.15; }
}

.fs-vel-dash { stroke-dasharray: 6 10; animation: fs-vel-dash 1.05s linear infinite; }
.fs-vel-pulse { transform-box: fill-box; transform-origin: center; animation: fs-vel-pulse 2.1s ease-in-out infinite; }
.fs-vel-float { animation: fs-vel-float 3.2s ease-in-out infinite; }
.fs-vel-spin { transform-box: fill-box; transform-origin: center; animation: fs-vel-spin 18s linear infinite; }
.fs-vel-gauge { stroke-dasharray: 230; animation: fs-vel-gauge 4s ease-in-out infinite; }
.fs-vel-glow { animation: fs-vel-glow 2.2s ease-in-out infinite; }
.fs-vel-bar { transform-box: fill-box; transform-origin: bottom; animation: fs-vel-bar 2.8s ease-in-out infinite; }
.fs-vel-draw { stroke-dasharray: 420; animation: fs-vel-draw 4.4s ease-in-out infinite; }
.fs-vel-scan { animation: fs-vel-scan 3.6s ease-in-out infinite; }
.fs-vel-token-ui {
  offset-path: path("M 168 430 C 250 430 310 210 430 210 C 540 210 590 360 690 360");
  offset-rotate: 0deg;
  animation: fs-vel-flow 5.4s linear infinite;
}
.fs-vel-token-flow {
  offset-path: path("M 90 300 H 250 V 180 H 410 V 300 H 570 V 420 H 710");
  offset-rotate: 0deg;
  animation: fs-vel-flow 6.2s linear infinite;
}
.fs-vel-token-dash {
  offset-path: path("M 70 470 C 180 430 280 510 400 450 C 530 380 640 500 740 430");
  offset-rotate: 0deg;
  animation: fs-vel-flow 5.8s linear infinite;
}
.fs-vel-token-infra {
  offset-path: path("M 140 470 H 400 V 240 H 660 V 470 H 400 V 240");
  offset-rotate: 0deg;
  animation: fs-vel-flow 7s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .fs-vel-dash, .fs-vel-pulse, .fs-vel-float, .fs-vel-spin,
  .fs-vel-gauge, .fs-vel-glow, .fs-vel-bar, .fs-vel-draw, .fs-vel-scan,
  .fs-vel-token-ui, .fs-vel-token-flow, .fs-vel-token-dash, .fs-vel-token-infra {
    animation: none !important;
  }
}
`;

function SceneBackdrop({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#070B18" />
          <stop offset="55%" stopColor="#0A0A1A" />
          <stop offset="100%" stopColor="#0B1228" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id={`${id}-grid`} width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(59,130,246,0.08)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill={`url(#${id}-bg)`} />
      <rect width="800" height="600" fill={`url(#${id}-grid)`} />
      <circle cx="90" cy="520" r="120" fill={BLUE} opacity="0.07" />
      <circle cx="720" cy="90" r="110" fill={BLUE} opacity="0.08" />
      <circle cx="710" cy="520" r="70" fill={PINK} opacity="0.06" />
    </>
  );
}

function BankingUiInfographic() {
  return (
    <svg viewBox="0 0 800 600" className="h-full w-full" role="img" aria-label="Banking UI component library outline">
      <SceneBackdrop id="vel-ui" />
      <text x="400" y="46" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600" letterSpacing="2.4">
        UI COMPONENT LIBRARY
      </text>

      <g className="fs-vel-float">
        <rect x="86" y="96" width="196" height="368" rx="28" fill="none" stroke={BLUE} strokeWidth="1.8" />
        <rect x="104" y="126" width="160" height="308" rx="16" fill="none" stroke={BLUE_SOFT} strokeWidth="1.2" />
        <rect x="118" y="148" width="132" height="72" rx="10" fill="none" stroke={BLUE} strokeWidth="1.4" />
        <rect x="130" y="164" width="64" height="10" rx="5" fill={BLUE} opacity="0.7" />
        <rect x="130" y="184" width="88" height="8" rx="4" fill="rgba(255,255,255,0.18)" />
        {[0, 1, 2].map((row) => (
          <rect
            key={row}
            x="118"
            y={240 + row * 52}
            width="132"
            height="38"
            rx="8"
            fill="none"
            stroke="rgba(59,130,246,0.55)"
          />
        ))}
        <rect x="148" y="418" width="72" height="10" rx="5" fill={PINK} opacity="0.85" />
      </g>

      {[
        { x: 360, y: 112, label: "Buttons" },
        { x: 560, y: 112, label: "Cards" },
        { x: 360, y: 248, label: "Inputs" },
        { x: 560, y: 248, label: "Nav" },
        { x: 360, y: 384, label: "Charts" },
        { x: 560, y: 384, label: "Modals" },
      ].map((tile, index) => (
        <g key={tile.label} className={index % 2 === 0 ? "fs-vel-float" : undefined} style={index % 2 === 0 ? { animationDelay: `${index * 0.18}s` } : undefined}>
          <rect
            x={tile.x}
            y={tile.y}
            width="168"
            height="104"
            rx="14"
            fill="none"
            stroke={index === 1 ? PINK : BLUE_SOFT}
            strokeWidth="1.5"
          />
          <circle cx={tile.x + 28} cy={tile.y + 28} r="7" fill="none" stroke={BLUE} strokeWidth="1.4" />
          <rect x={tile.x + 46} y={tile.y + 22} width="90" height="8" rx="4" fill="rgba(255,255,255,0.22)" />
          <rect x={tile.x + 22} y={tile.y + 52} width="124" height="8" rx="4" fill="rgba(59,130,246,0.35)" />
          <text x={tile.x + 84} y={tile.y + 86} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">
            {tile.label}
          </text>
        </g>
      ))}

      <path
        className="fs-vel-dash"
        d="M 282 280 H 360"
        fill="none"
        stroke={BLUE_SOFT}
        strokeWidth="1.5"
      />
      <path
        d="M 168 430 C 250 430 310 210 430 210 C 540 210 590 360 690 360"
        fill="none"
        stroke={BLUE}
        strokeWidth="1.5"
        opacity="0.35"
      />
      <g filter="url(#vel-ui-glow)">
        <circle className="fs-vel-token-ui" r="6" fill={PINK} />
      </g>
    </svg>
  );
}

function OrchestrationInfographic() {
  const nodes = [
    { x: 70, y: 250, label: "Extract", sub: "Core feeds" },
    { x: 230, y: 130, label: "Validate", sub: "Schema" },
    { x: 390, y: 250, label: "Transform", sub: "Rules" },
    { x: 550, y: 370, label: "Score", sub: "Model" },
    { x: 690, y: 250, label: "Load", sub: "Ledger" },
  ];

  return (
    <svg viewBox="0 0 800 600" className="h-full w-full" role="img" aria-label="Workflow orchestration blueprint DAG">
      <SceneBackdrop id="vel-flow" />
      <text x="400" y="46" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600" letterSpacing="2.4">
        ORCHESTRATION BLUEPRINT
      </text>

      <path
        d="M 90 300 H 250 V 180 H 410 V 300 H 570 V 420 H 710"
        fill="none"
        stroke={BLUE}
        strokeWidth="1.8"
        opacity="0.45"
      />
      <path
        className="fs-vel-dash"
        d="M 90 300 H 250 V 180 H 410 V 300 H 570 V 420 H 710"
        fill="none"
        stroke={BLUE_SOFT}
        strokeWidth="1.6"
      />

      {nodes.map((node, index) => (
        <g key={node.label} className={index === 2 ? "fs-vel-float" : undefined}>
          <rect
            x={node.x}
            y={node.y}
            width="140"
            height="86"
            rx="14"
            fill="none"
            stroke={index === 3 ? PINK : BLUE}
            strokeWidth="1.6"
          />
          <circle
            className="fs-vel-pulse"
            cx={node.x + 22}
            cy={node.y + 22}
            r="6"
            fill={index === 3 ? PINK : BLUE}
            style={{ animationDelay: `${index * 0.25}s` }}
          />
          <text x={node.x + 70} y={node.y + 40} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">
            {node.label}
          </text>
          <text x={node.x + 70} y={node.y + 62} textAnchor="middle" fill="#fff" fontSize="11">
            {node.sub}
          </text>
        </g>
      ))}

      <g className="fs-vel-float">
        <rect x="268" y="488" width="264" height="64" rx="12" fill="none" stroke={BLUE_SOFT} strokeWidth="1.4" />
        <text x="400" y="526" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600">
          Retry · SLA · lineage
        </text>
      </g>

      <g filter="url(#vel-flow-glow)">
        <circle className="fs-vel-token-flow" r="6" fill={PINK} />
        <circle className="fs-vel-token-flow" r="6" fill={BLUE} style={{ animationDelay: "-3.1s" }} />
      </g>
    </svg>
  );
}

function DashboardsInfographic() {
  const ring = 2 * Math.PI * 62;

  return (
    <svg viewBox="0 0 800 600" className="h-full w-full" role="img" aria-label="Model performance dashboard outline">
      <SceneBackdrop id="vel-dash" />
      <text x="400" y="46" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600" letterSpacing="2.4">
        MODEL PERFORMANCE
      </text>

      <rect x="48" y="84" width="704" height="452" rx="18" fill="none" stroke="rgba(59,130,246,0.35)" strokeWidth="1.4" />
      <rect className="fs-vel-scan" x="64" y="104" width="672" height="2" fill={BLUE} opacity="0.7" />

      <g transform="translate(210 250)">
        <circle r="86" fill="none" stroke="rgba(59,130,246,0.2)" />
        <circle r="62" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="10" />
        <circle
          className="fs-vel-gauge"
          r="62"
          fill="none"
          stroke={BLUE}
          strokeWidth="10"
          strokeLinecap="round"
          transform="rotate(-90)"
          strokeDasharray={ring}
          strokeDashoffset="70"
        />
        <text y="4" textAnchor="middle" fill="#fff" fontSize="26" fontWeight="700">
          98
        </text>
        <text y="26" textAnchor="middle" fill="#fff" fontSize="11">
          accuracy
        </text>
      </g>

      {[
        { x: 400, h: 118, delay: "0s", color: BLUE },
        { x: 470, h: 86, delay: "0.25s", color: BLUE_SOFT },
        { x: 540, h: 142, delay: "0.5s", color: PINK },
        { x: 610, h: 104, delay: "0.75s", color: BLUE },
        { x: 680, h: 72, delay: "1s", color: BLUE_SOFT },
      ].map((bar) => (
        <rect
          key={bar.x}
          className="fs-vel-bar"
          x={bar.x}
          y={340 - bar.h}
          width="36"
          height={bar.h}
          rx="6"
          fill="none"
          stroke={bar.color}
          strokeWidth="1.6"
          style={{ animationDelay: bar.delay }}
        />
      ))}
      <text x="558" y="372" textAnchor="middle" fill="#fff" fontSize="12">
        Drift · latency · recall
      </text>

      <path
        className="fs-vel-draw"
        d="M 70 470 C 160 430 230 510 320 450 C 410 390 500 500 590 430 C 660 380 720 460 740 430"
        fill="none"
        stroke={BLUE_SOFT}
        strokeWidth="2"
      />
      <path
        d="M 70 470 C 160 430 230 510 320 450 C 410 390 500 500 590 430 C 660 380 720 460 740 430"
        fill="none"
        stroke={BLUE}
        strokeWidth="1.2"
        opacity="0.35"
      />

      <g transform="translate(620 148)">
        <circle className="fs-vel-pulse" r="10" fill="none" stroke={PINK} strokeWidth="1.6" />
        <circle r="4" fill={PINK} />
      </g>
      <text x="644" y="152" fill="#fff" fontSize="12">
        Drift watch
      </text>

      <g filter="url(#vel-dash-glow)">
        <circle className="fs-vel-token-dash" r="6" fill={PINK} />
      </g>
    </svg>
  );
}

function InfraInfographic() {
  return (
    <svg viewBox="0 0 800 600" className="h-full w-full" role="img" aria-label="AI infrastructure engine outline">
      <SceneBackdrop id="vel-infra" />
      <text x="400" y="46" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600" letterSpacing="2.4">
        AI INFRASTRUCTURE ENGINE
      </text>

      <g className="fs-vel-float">
        <ellipse cx="400" cy="136" rx="168" ry="46" fill="none" stroke={BLUE} strokeWidth="1.7" />
        <path d="M 232 136 V 176 C 232 204 308 224 400 224 C 492 224 568 204 568 176 V 136" fill="none" stroke={BLUE_SOFT} strokeWidth="1.5" />
        <text x="400" y="142" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="600">
          Secure cloud
        </text>
      </g>

      <g transform="translate(400 318)">
        <g className="fs-vel-spin">
          <circle r="78" fill="none" stroke={BLUE} strokeWidth="1.6" strokeDasharray="10 12" />
          <circle r="54" fill="none" stroke={BLUE_SOFT} strokeWidth="1.3" strokeDasharray="4 8" />
        </g>
        <rect x="-42" y="-42" width="84" height="84" rx="16" fill="none" stroke={PINK} strokeWidth="1.6" />
        <rect x="-22" y="-22" width="44" height="44" rx="8" fill="none" stroke={BLUE} strokeWidth="1.4" />
        <circle className="fs-vel-glow" r="6" fill={PINK} />
      </g>

      <path
        d="M 140 470 H 400 V 240 H 660 V 470 H 400 V 240"
        fill="none"
        stroke={BLUE}
        strokeWidth="1.5"
        opacity="0.35"
      />
      <path
        className="fs-vel-dash"
        d="M 400 240 V 176"
        fill="none"
        stroke={BLUE_SOFT}
        strokeWidth="1.5"
      />

      {[
        { x: 86, label: "GPU" },
        { x: 246, label: "Serve" },
        { x: 494, label: "Scale" },
        { x: 654, label: "Guard" },
      ].map((rack, index) => (
        <g key={rack.label}>
          <rect x={rack.x} y="430" width="120" height="110" rx="12" fill="none" stroke={BLUE_SOFT} strokeWidth="1.5" />
          {[0, 1, 2].map((slot) => (
            <rect
              key={slot}
              x={rack.x + 16}
              y={448 + slot * 22}
              width="88"
              height="12"
              rx="3"
              fill="none"
              stroke={index === 3 ? PINK : BLUE}
              strokeWidth="1.2"
            />
          ))}
          <text x={rack.x + 60} y="526" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">
            {rack.label}
          </text>
        </g>
      ))}

      <g filter="url(#vel-infra-glow)">
        <circle className="fs-vel-token-infra" r="6" fill={PINK} />
        <circle className="fs-vel-token-infra" r="6" fill={BLUE} style={{ animationDelay: "-3.5s" }} />
      </g>
    </svg>
  );
}

export default function FinancialServicesVelocitiesInfographics({
  id,
}: {
  id: string;
}) {
  return (
    <>
      <style>{VELOCITY_ILLUSTRATION_STYLES}</style>
      {id === "ui-banking-wrappers" ? <BankingUiInfographic /> : null}
      {id === "airflow-blueprints" ? <OrchestrationInfographic /> : null}
      {id === "model-monitoring-dashboards" ? <DashboardsInfographic /> : null}
      {id === "ai-cloud-engine" ? <InfraInfographic /> : null}
    </>
  );
}
