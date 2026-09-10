export type FinanceWhitePaperItem = {
  title: string;
  body: string;
};

export type FinanceWhitePaperStep = {
  step: string;
  title: string;
  body: string;
};

export type FinanceWhitePaper = {
  slug: string;
  href: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  readTime: string;
  coverSrc: string;
  coverAlt: string;
  heroSrc: string;
  heroAlt: string;
  operatingModelSrc: string;
  operatingModelAlt: string;
  operatingModelCaption: string;
  supervisionSrc: string;
  supervisionAlt: string;
  supervisionCaption: string;
  executiveSummary: string[];
  whyNowTitle: string;
  whyNow: string[];
  buildOrderTitle: string;
  buildOrderLead: string;
  layers: FinanceWhitePaperItem[];
  controlsTitle: string;
  controlsLead: string;
  controls: FinanceWhitePaperItem[];
  useCasesTitle: string;
  useCasesLead: string;
  useCases: FinanceWhitePaperItem[];
  sequenceTitle: string;
  sequenceLead: string;
  sequence: FinanceWhitePaperStep[];
  closingTitle: string;
  closing: string[];
};

const IMAGE_BASE = "/assets/final-images/industries/financial-services";

export const financialServicesWhitePaper: FinanceWhitePaper = {
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
  coverSrc: `${IMAGE_BASE}/white-paper-cover.png`,
  coverAlt: "Glass AI agent core above an immutable financial audit trail",
  heroSrc: `${IMAGE_BASE}/white-paper-hero.png`,
  heroAlt: "Regulated finance control plane with AI agents supervising payment rails",
  operatingModelSrc: `${IMAGE_BASE}/white-paper-operating-model.png`,
  operatingModelAlt:
    "Three-layer operating model: foundational data, applied AI, and agentic orchestration",
  operatingModelCaption:
    "The operating model: governed data, explainable models, then agents with a narrow mandate.",
  supervisionSrc: `${IMAGE_BASE}/white-paper-supervision.png`,
  supervisionAlt:
    "Risk officer reviewing an AI agent decision with an explainability trail",
  supervisionCaption:
    "Supervision belongs on the irreversible step: approve, escalate, or halt — with a trail a reviewer can reconstruct.",
  executiveSummary: [
    "Financial institutions are no longer experimenting with chatbots. They are putting AI agents into workflows that move money, change credit exposure, and touch a customer’s legal record. That is a different class of system — and regulators already treat it that way.",
    "The institutions that will ship agents in 2026 are not the ones with the flashiest demo. They are the ones that can show, for every material action, what data was used, which policy applied, who was allowed to override it, and how the outcome can be reconstructed six months later in an exam.",
    "This paper lays out an operating model we use inside eForte’s Finance Studio: start with an audit-ready Foundational Data Layer, layer Applied AI that can be explained, then give Agentic Orchestration a narrow mandate with human supervision at the points that actually create risk.",
  ],
  whyNowTitle: "Why 2026 is the year agents leave the sandbox",
  whyNow: [
    "Three clocks are running at once. Real-time payment rails and ISO 20022-rich messages have made exception handling a seconds problem, not a batch problem. Credit teams are underwriting thin-file borrowers with cash-flow and alternative data that legacy scorecards were never designed to defend. And the EU AI Act, NIST AI RMF, and model-risk programs inside US banks now expect a human-readable trail for high-risk automated decisions — not a slide deck after the fact.",
    "Meanwhile, most “agent” pilots still sit on top of fragmented cores, ticket queues, and spreadsheet overlays. The agent looks intelligent in a sandbox because a human has already cleaned the context. In production, that context is incomplete, delayed, or legally sensitive. The failure is rarely the model. It is the missing paper trail.",
  ],
  buildOrderTitle: "Build in this order, not the reverse",
  buildOrderLead:
    "Most failed pilots start with the agent and try to bolt on governance later. The sequence that survives an exam is the same sequence Finance Studio uses to move a transaction: data, then models, then orchestration.",
  layers: [
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
  ],
  controlsTitle: "Five controls every production agent needs",
  controlsLead:
    "Policy PDFs do not govern agents. Runtime controls do. These five are the minimum set we put around any agent that can change money, credit, or a customer’s legal record.",
  controls: [
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
  ],
  useCasesTitle: "Where it pays off first",
  useCasesLead:
    "Do not give an agent the whole bank. Give it a workflow that already has a clock, a policy, and an audit question.",
  useCases: [
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
  ],
  sequenceTitle: "A ninety-day sequence",
  sequenceLead:
    "This is not a transformation program. It is the shortest path from a regulated pain point to a supervised agent in production.",
  sequence: [
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
  ],
  closingTitle: "The paper trail is the product",
  closing: [
    "Agentic AI will not wait for a perfect core. Competitors, customers, and payment schemes are already compressing the time between a signal and an action. The question for a bank or fintech is not whether an agent will sit in the workflow. It is whether that agent can be shown, explained, and stopped.",
    "Build the paper trail first. Then give the agent a narrow job. That is how Finance Studio moves a transaction from insight to an outcome a regulator, an auditor, and a customer can still trust.",
  ],
};

export const humanSupervisedCreditWhitePaper: FinanceWhitePaper = {
  slug: "human-supervised-credit",
  href: "/industries/financial-services/white-paper/human-supervised-credit",
  eyebrow: "White Paper",
  title: "Human-Supervised Credit at Production Scale",
  subtitle:
    "How lenders put hybrid scoring into production without loosening risk or losing the right to explain a no",
  description:
    "A practical model for instant-approving low-risk applications while keeping a person in control of every decline — with bureau, cash-flow, and behavioral signals on one exam-ready trail.",
  date: "September 11, 2026",
  readTime: "11 min read",
  coverSrc: `${IMAGE_BASE}/white-paper-credit-cover.png`,
  coverAlt: "Hybrid credit scoring core with a human review path in electric blue and pink",
  heroSrc: `${IMAGE_BASE}/white-paper-credit-hero.png`,
  heroAlt: "Supervised credit desk with score gauges and a human review queue",
  operatingModelSrc: `${IMAGE_BASE}/white-paper-credit-model.png`,
  operatingModelAlt:
    "Three-layer credit stack: data signals, scoring model, and human-in-the-loop gate",
  operatingModelCaption:
    "The credit stack: unified underwriting signals, an explainable score, then a human gate on every decline.",
  supervisionSrc: `${IMAGE_BASE}/white-paper-credit-review.png`,
  supervisionAlt: "Credit officer reviewing a borderline application with reason codes",
  supervisionCaption:
    "Borderline files belong in a review queue. Instant approval is a privilege the model earns, not a default.",
  executiveSummary: [
    "Most mid-market lenders are not short on applications. They are short on underwriter hours that actually change risk. Low-risk files sit in the same queue as thin-file and borderline cases, so decision time stretches, cost-per-application rises, and the customer who should have been funded yesterday is still waiting on a person to open the packet.",
    "The answer is not a fully automated decline engine. Adverse action, fair-lending, and model-risk programs still expect a contestable explanation and a human who can own the no. The answer is a hybrid desk: instant-approve the cases the model can defend, and spend human attention only where the score is close, the data is thin, or the policy says a person must decide.",
    "This paper lays out how Finance Studio builds that desk. Unify bureau, cash-flow, and behavioral signals. Score with reason codes. Route. Keep a person in control of every decline. Measure override rates so the model does not quietly become the policy.",
  ],
  whyNowTitle: "Why speed without a human gate is a credit event waiting to happen",
  whyNow: [
    "Application volume is no longer the bottleneck. Decisioning is. Digital origination dumped 500,000-plus files a year onto desks that were staffed for a slower channel. Meanwhile, alternative data — bank transactions, cash-flow, and behavioral signals — can separate a fundable small-business borrower from a lookalike who will miss the second payment. Legacy scorecards were not built to defend that distinction in an exam.",
    "Fully automated no’s look efficient until the first fair-lending review, the first adverse-action dispute, or the first model that drifted after a rate-cycle change. Instant yes on a low-risk file is an operational win. Instant no on a close file, with no person and no reason code, is how a lender trades a queue problem for a regulatory one.",
  ],
  buildOrderTitle: "Build the desk in this order",
  buildOrderLead:
    "Do not start by turning the model loose on declines. Start by giving underwriters and the score the same picture of the applicant, then decide which files never needed a person in the first place.",
  layers: [
    {
      title: "Foundational Data Layer",
      body: "Bureau, cash-flow, and behavioral indicators in one governed view. If the underwriter and the model cannot see the same facts, hybrid scoring is just two opinions in two systems.",
    },
    {
      title: "Applied AI",
      body: "A hybrid score with features, versions, and reason codes a reviewer can contest. Instant approval is only safe when the same features can be monitored for drift after go-live.",
    },
    {
      title: "Human-in-the-loop orchestration",
      body: "Low-risk files clear. Borderline files enter a review queue. Every decline still has a named underwriter. The agent sequences work. It does not rewrite credit policy.",
    },
  ],
  controlsTitle: "Five controls a hybrid credit desk needs",
  controlsLead:
    "A score without a gate is autopilot. These five keep speed on the yes and accountability on the no.",
  controls: [
    {
      title: "A written instant-approve band",
      body: "Define the score, data completeness, and product limits that may clear without a person. Everything outside that band is a queue, not a maybe.",
    },
    {
      title: "A person on every decline",
      body: "Adverse action is not a batch job. A named underwriter owns the no, sees the reason codes, and can override with a recorded rationale.",
    },
    {
      title: "Reason codes that survive a dispute",
      body: "The applicant, the examiner, and the underwriter should be able to read why the file scored where it did without a data-science translator.",
    },
    {
      title: "Override metrics, not folklore",
      body: "If humans rubber-stamp every model recommendation, you have theatre. If they override everything, you have the wrong cutoff. Measure both.",
    },
    {
      title: "Drift and fair-lending watch",
      body: "The same features that power instant approval must be monitored after go-live. A model that was fair in January can concentrate risk by June.",
    },
  ],
  useCasesTitle: "Where hybrid scoring pays off first",
  useCasesLead:
    "Start where volume is high, policy is already written, and the cost of waiting is obvious.",
  useCases: [
    {
      title: "Small-business origination",
      body: "High application volume, mixed data quality, and a clear low-risk band. Instant-approve the files the score can defend; put thin-file and high-exposure cases in review.",
    },
    {
      title: "Thin-file and alternative-data underwriting",
      body: "Cash-flow signals only help if a declined applicant can receive a contestable explanation, and if a person still owns the close calls.",
    },
    {
      title: "Limit increases and renewals",
      body: "Existing-customer files often have enough history to auto-clear a subset. The rest should not wait behind a generic queue.",
    },
    {
      title: "Second-look on borderline declines",
      body: "A review queue is where policy, hardship, and relationship context still belong. The model should never be the last word on a close no.",
    },
  ],
  sequenceTitle: "A ninety-day sequence",
  sequenceLead:
    "This is the shortest path from a bloated underwriting queue to a supervised hybrid desk.",
  sequence: [
    {
      step: "01",
      title: "Pick one origination product",
      body: "Small-business term, a single unsecured line, or renewals. Do not start with the whole book. Start where queue time is already a complaint.",
    },
    {
      step: "02",
      title: "Unify the signals underwriters already use",
      body: "Bureau, cash-flow, and behavioral data in one layer, with lineage. If the packet is still a PDF scavenger hunt, the model will not save you.",
    },
    {
      step: "03",
      title: "Score with reason codes, then open the instant-approve band",
      body: "Ship explanations first. Only then let low-risk files clear automatically. Action without explanation is how speed becomes an incident.",
    },
    {
      step: "04",
      title: "Put people on declines and measure the queue",
      body: "Track decision time, cost-per-application, override rate, and adverse-action quality. If declines still have no owner, you automated the wrong step.",
    },
  ],
  closingTitle: "Keep the person where the risk actually lives",
  closing: [
    "Hybrid credit is not a compromise between automation and caution. It is the only design that lets a lender move 500,000 applications a year without pretending a model can own a decline.",
    "Instant-approve what you can defend. Route what you cannot. Keep a human on every no. That is how Finance Studio cuts decision time without loosening the standards that protect the book.",
  ],
};

export const financialServicesWhitePapers: FinanceWhitePaper[] = [
  financialServicesWhitePaper,
  humanSupervisedCreditWhitePaper,
];

export function getFinanceWhitePaperBySlug(slug: string) {
  return financialServicesWhitePapers.find((paper) => paper.slug === slug);
}

export function getFinanceWhitePaperSlugs() {
  return financialServicesWhitePapers.map((paper) => paper.slug);
}

export const whitePaperExecutiveSummary =
  financialServicesWhitePaper.executiveSummary;
export const whitePaperWhyNow = financialServicesWhitePaper.whyNow;
export const whitePaperLayers = financialServicesWhitePaper.layers;
export const whitePaperControls = financialServicesWhitePaper.controls;
export const whitePaperUseCases = financialServicesWhitePaper.useCases;
export const whitePaperSequence = financialServicesWhitePaper.sequence;
export const whitePaperClosing = financialServicesWhitePaper.closing;
