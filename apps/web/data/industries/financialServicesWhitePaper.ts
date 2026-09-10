export const financialServicesWhitePaper = {
  slug: "audit-ready-agentic-finance",
  href: "/industries/financial-services/white-paper",
  eyebrow: "White Paper",
  title: "Audit-Ready Agentic Finance",
  subtitle:
    "How banks and fintechs put AI agents into production without losing the paper trail",
  description:
    "A practical operating model for deploying AI agents in payments, lending, and core banking — with lineage, explainability, and human supervision built in from day one.",
  date: "September 11, 2026",
  readTime: "12 min read",
  coverSrc:
    "/assets/final-images/industries/financial-services/white-paper-cover.png",
  coverAlt:
    "Glass AI agent core above an immutable financial audit trail",
  heroSrc:
    "/assets/final-images/industries/financial-services/white-paper-hero.png",
  heroAlt:
    "Regulated finance control plane with AI agents supervising payment rails",
  operatingModelSrc:
    "/assets/final-images/industries/financial-services/white-paper-operating-model.png",
  operatingModelAlt:
    "Three-layer operating model: foundational data, applied AI, and agentic orchestration",
  supervisionSrc:
    "/assets/final-images/industries/financial-services/white-paper-supervision.png",
  supervisionAlt:
    "Risk officer reviewing an AI agent decision with an explainability trail",
};

export const whitePaperExecutiveSummary = [
  "Financial institutions are no longer experimenting with chatbots. They are putting AI agents into workflows that move money, change credit exposure, and touch a customer’s legal record. That is a different class of system — and regulators already treat it that way.",
  "The institutions that will ship agents in 2026 are not the ones with the flashiest demo. They are the ones that can show, for every material action, what data was used, which policy applied, who was allowed to override it, and how the outcome can be reconstructed six months later in an exam.",
  "This paper lays out an operating model we use inside eForte’s Finance Studio: start with an audit-ready Foundational Data Layer, layer Applied AI that can be explained, then give Agentic Orchestration a narrow mandate with human supervision at the points that actually create risk.",
];

export const whitePaperWhyNow = [
  "Three clocks are running at once. Real-time payment rails and ISO 20022-rich messages have made exception handling a seconds problem, not a batch problem. Credit teams are underwriting thin-file borrowers with cash-flow and alternative data that legacy scorecards were never designed to defend. And the EU AI Act, NIST AI RMF, and model-risk programs inside US banks now expect a human-readable trail for high-risk automated decisions — not a slide deck after the fact.",
  "Meanwhile, most “agent” pilots still sit on top of fragmented cores, ticket queues, and spreadsheet overlays. The agent looks intelligent in a sandbox because a human has already cleaned the context. In production, that context is incomplete, delayed, or legally sensitive. The failure is rarely the model. It is the missing paper trail.",
];

export const whitePaperLayers = [
  {
    title: "Foundational Data Layer",
    body: "Lineage, encryption, KYC/AML attributes, and a single operational view of the customer and the transaction. If two systems disagree about a balance, an agent should not be the one to pick a winner in the dark.",
  },
  {
    title: "Applied AI",
    body: "Models that score, detect, and recommend — credit, fraud, delinquency, document intelligence — with features, versions, and reason codes that a reviewer can contest.",
  },
  {
    title: "Agentic Orchestration",
    body: "Agents that take bounded actions: gather missing KYC evidence, draft a collections path, reroute a failed payment, or assemble an advisor briefing. They execute inside policy, not around it.",
  },
];

export const whitePaperControls = [
  {
    title: "Identity and mandate",
    body: "Every agent has a named role, a system identity, and a written purpose. “Help operations” is not a mandate. “Propose a payment repair within existing scheme rules, never originate a new credit” is.",
  },
  {
    title: "Purpose limits",
    body: "Tools, accounts, and data domains are allow-listed. An onboarding agent should not be able to touch treasury. A collections agent should not rewrite underwriting policy.",
  },
  {
    title: "Explainability that survives an exam",
    body: "For material decisions, the system stores the inputs, the model version, the policy clauses applied, and a short reason narrative a human can read without a data-science translator.",
  },
  {
    title: "Human checkpoints where risk actually lives",
    body: "Not every step needs a person. The ones that change money, credit, or a legal record do. Design the pause before the wire, not after the complaint.",
  },
  {
    title: "A kill switch and a replay",
    body: "Operators can halt an agent class in seconds. Investigators can replay the exact path later. If you cannot reconstruct it, you cannot defend it.",
  },
];

export const whitePaperUseCases = [
  {
    title: "Payments exceptions",
    body: "ISO 20022 gives you richer repair data. An agent can classify a failed payment, propose a fix, and draft the customer notice — then stop for a human when the amount, jurisdiction, or sanctions hit a threshold.",
  },
  {
    title: "Credit decisioning",
    body: "Alternative-data models only become an advantage if a declined applicant can receive a contestable explanation, and if the same features are monitored for drift after go-live.",
  },
  {
    title: "Collections prioritization",
    body: "Early-delinquency signals should change the sequence of outreach, not invent a new credit policy. Agents sequence work; humans still own hardship and legal action.",
  },
  {
    title: "KYC and onboarding refresh",
    body: "Agents gather documents, flag gaps, and keep an evidence pack. They do not declare a customer cleared. Compliance does.",
  },
];

export const whitePaperSequence = [
  {
    step: "01",
    title: "Pick one money-moving workflow",
    body: "Payment repair, thin-file underwriting, or KYC refresh. Do not start with a general assistant. Start where the audit question is already painful.",
  },
  {
    step: "02",
    title: "Make the data layer exam-ready",
    body: "Unify the records the agent will see. Capture lineage. Decide what must never leave the governed environment. This is slower than a prototype and faster than a failed exam.",
  },
  {
    step: "03",
    title: "Instrument the decision, then the action",
    body: "Ship the model or classifier with reason codes first. Only then let an agent act on top of it. Action without explanation is how copilots become incidents.",
  },
  {
    step: "04",
    title: "Put supervision on the irreversible steps",
    body: "Approve, escalate, or halt. Measure override rates. If humans rubber-stamp everything, you have theatre. If they override everything, you have the wrong mandate.",
  },
];

export const whitePaperClosing = [
  "Agentic AI will not wait for a perfect core. Competitors, customers, and payment schemes are already compressing the time between a signal and an action. The question for a bank or fintech is not whether an agent will sit in the workflow. It is whether that agent can be shown, explained, and stopped.",
  "Build the paper trail first. Then give the agent a narrow job. That is how Finance Studio moves a transaction from insight to an outcome a regulator, an auditor, and a customer can still trust.",
];
