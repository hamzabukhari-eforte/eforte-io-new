import type { FinanceWhitePaper } from "@/data/industries/financialServicesWhitePaper";

const IMAGE_BASE = "/assets/final-images/white-papers";

/**
 * Homepage Navigate AI white paper — Strategy · Finance · EdTech.
 * Reuses the FinanceWhitePaper content shape so article layouts stay consistent.
 */
export const aiAdoptionWhitePaper: FinanceWhitePaper = {
  slug: "navigate-ai-adoption",
  href: "/white-papers/navigate-ai-adoption",
  eyebrow: "White Paper",
  title: "Navigate the Complexities of AI Adoption",
  subtitle:
    "A practical playbook for unlocking real-world business value — without getting stuck in pilot theater",
  description:
    "AI is a game-changer, but successful implementation requires expert guidance. This white paper shows how to move from reactive operations to predictive systems across strategy, finance, and EdTech — with governance built in.",
  date: "September 11, 2026",
  readTime: "11 min read",
  coverSrc: `${IMAGE_BASE}/ai-adoption-cover.png`,
  coverAlt: "Neural network brain visualization representing strategic AI adoption",
  heroSrc: `${IMAGE_BASE}/ai-adoption-hero.png`,
  heroAlt: "Electric-blue neural network brain on a dark strategic AI backdrop",
  operatingModelSrc: `${IMAGE_BASE}/ai-adoption-operating-model.png`,
  operatingModelAlt:
    "Three-layer AI operating model: data foundation, applied AI, and agentic orchestration",
  operatingModelCaption:
    "Ship value in this order: governed data, explainable models, then agents with a narrow mandate.",
  supervisionSrc: `${IMAGE_BASE}/ai-adoption-supervision.png`,
  supervisionAlt:
    "Cross-functional team reviewing an AI decision trail on large office monitors",
  supervisionCaption:
    "Human supervision belongs on irreversible steps — approve, escalate, or halt — with a trail a reviewer can reconstruct.",
  executiveSummary: [
    "Most AI programs do not fail because the model is weak. They fail because the organization treats adoption as a demo: a sandbox proof, a slide deck of use cases, and a pilot that never touches a production workflow. The gap between “we tried AI” and “AI changed how we operate” is where budget, trust, and executive patience disappear.",
    "eForte’s work across finance and EdTech shows a clearer pattern. Bankruptcy prediction, fraud detection, clinical documentation agents, and adaptive learning systems all deliver when three conditions hold: a governed source of truth, models that can be explained to a human reviewer, and orchestration that stops for a person before irreversible action.",
    "This paper is a playbook for leaders who want predictive operations — not another pilot. It covers why adoption stalls, the operating model we use to unlock value, the controls every production system needs, and a 90-day sequence that turns strategy into shipped outcomes across Strategy, Finance, and EdTech.",
  ],
  whyNowTitle: "Why AI adoption stalls after the pilot",
  whyNow: [
    "Three pressures are colliding. Boards expect measurable AI outcomes, not innovation theater. Regulators and model-risk teams expect an audit trail for high-impact decisions. And competitors who industrialize delivery are compressing cycle times from months to weeks — especially in payments, lending, care operations, and digital learning.",
    "Inside most enterprises, the stack is still fragmented: data in silos, models owned by a lab, and workflows owned by operations. An agent looks brilliant in a sandbox because a human already cleaned the context. In production, that context is incomplete, delayed, or legally sensitive. The failure is rarely the LLM. It is the missing operating model.",
  ],
  buildOrderTitle: "Build in this order — not the reverse",
  buildOrderLead:
    "Failed pilots usually start with the agent and try to bolt on data and governance later. The sequence that survives scrutiny — and actually ships — is the same sequence eForte uses across Velocity AI, Applied AI, and Agentic Orchestration.",
  layers: [
    {
      title: "Foundational Data Layer",
      body: "One governed picture of the customer, the learner, or the patient — with lineage, access control, and quality checks. If two systems disagree about a balance or a grade, an agent should not pick a winner in the dark.",
    },
    {
      title: "Applied AI",
      body: "Models that score, detect, draft, and recommend — credit risk, fraud, documentation, personalization — with versions, features, and reason codes a reviewer can contest without a data-science translator.",
    },
    {
      title: "Agentic Orchestration",
      body: "Agents that take bounded actions: gather missing evidence, draft a note, route an exception, or assemble a briefing. They execute inside policy, stop for a human at irreversible steps, and leave a trail.",
    },
  ],
  controlsTitle: "Five controls every production AI system needs",
  controlsLead:
    "Strategy decks do not govern AI. Runtime controls do. These five are the minimum we put around any system that can change money, credit, care records, or a learner’s path.",
  controls: [
    {
      title: "Clear mandate",
      body: "Every agent and model has a named purpose and an allow-listed set of tools and data domains. “Help the business” is not a mandate. “Draft a visit summary for clinician review; never write to the chart unattended” is.",
    },
    {
      title: "Human gate on irreversible steps",
      body: "Approve, escalate, or halt before money moves, credit changes, a clinical record updates, or a high-stakes learner decision is locked. Assistive drafts can run freely; consequential writes cannot.",
    },
    {
      title: "Explainability that survives review",
      body: "Store inputs, model version, policy clauses, and a short reason narrative. Finance examiners, clinical leaders, and academic integrity teams all need the same thing: a trail they can reconstruct months later.",
    },
    {
      title: "Evaluation before scale",
      body: "Define golden sets, offline metrics, and online guards before wide rollout. A bankruptcy model, a fraud scorer, and an adaptive learning recommender each need different evals — none should ship on vibes.",
    },
    {
      title: "Observability in production",
      body: "Latency, drift, override rates, and failure modes are product signals. If humans constantly reject the draft, the system is not “almost right” — it is not ready.",
    },
  ],
  useCasesTitle: "Where this playbook already unlocks value",
  useCasesLead:
    "The homepage white paper section highlights Strategy, Finance, and EdTech for a reason: these domains punish weak adoption quickly — and reward a governed operating model just as fast.",
  useCases: [
    {
      title: "Finance — predictive risk and supervised agents",
      body: "Bankruptcy prediction, fraud detection, and credit workflows move from reactive queues to ranked, explainable decisions. Agents gather evidence and draft actions; humans approve anything that changes exposure or money.",
    },
    {
      title: "EdTech — adaptive learning without black boxes",
      body: "Personalized paths and content recommendations work when learner data is governed and every adaptation can be explained to instructors and institutions. The model personalizes; the institution retains accountability.",
    },
    {
      title: "Strategy — from use-case lists to an adoption roadmap",
      body: "Discovery identifies high-ROI workflows, feasibility, and risk class. Leaders get a sequenced roadmap: data readiness, model scope, agent mandate, and the KPIs that prove value in 90 days — not 18.",
    },
    {
      title: "Cross-industry pattern — assist, then act",
      body: "Whether the domain is care documentation, payments exceptions, or learning interventions, the winning pattern is the same: AI drafts and triages; humans gate irreversible outcomes; the trail is always reconstructible.",
    },
  ],
  sequenceTitle: "A 90-day sequence that ships",
  sequenceLead:
    "Treat adoption as a delivery program, not a lab tour. This is the sequence we use when a client is ready to move from ambition to a production workflow.",
  sequence: [
    {
      step: "01",
      title: "Pick one irreversible workflow",
      body: "Choose a process with clear owners, measurable pain, and a defined “irreversible step” (approve credit, post a note, release a payment repair, lock a learning path). Avoid boiling the ocean with ten use cases.",
    },
    {
      step: "02",
      title: "Make the data picture auditable",
      body: "Stand up the minimum Foundational Data Layer for that workflow: sources, joins, lineage, and access. If the picture is wrong, every model and agent will amplify the error.",
    },
    {
      step: "03",
      title: "Ship an assistive model first",
      body: "Deploy Applied AI that drafts, scores, or recommends — with evals and reason codes — before you allow autonomous action. Prove trust with override metrics and reviewer feedback.",
    },
    {
      step: "04",
      title: "Add a narrow agent with a human gate",
      body: "Wrap the model in Agentic Orchestration with a written mandate, tool allow-lists, and a hard stop before irreversible writes. Measure cycle time, error rate, and reviewer load — not vanity engagement.",
    },
    {
      step: "05",
      title: "Industrialize and expand",
      body: "Once one workflow is audit-ready, replicate the pattern: same controls, new mandate, new data slice. That is how Strategy · Finance · EdTech programs compound instead of fragmenting into disconnected pilots.",
    },
  ],
  closingTitle: "From reactive to predictive — with accountability intact",
  closing: [
    "AI adoption unlocks real-world business value when it is treated as an operating system: governed data, explainable models, and supervised agents. Anything less is pilot theater — impressive in a demo, invisible in the P&L.",
    "eForte helps organizations navigate that complexity end to end: discovery and strategy, Velocity AI delivery, Applied AI models, and Agentic Orchestration that always stops for a human where it matters. The goal is not more experiments. It is predictive operations you can defend.",
  ],
};

export const aiAdoptionWhitePapers: FinanceWhitePaper[] = [aiAdoptionWhitePaper];

export function getAiAdoptionWhitePaperBySlug(slug: string) {
  return aiAdoptionWhitePapers.find((paper) => paper.slug === slug);
}

export function getAiAdoptionWhitePaperSlugs() {
  return aiAdoptionWhitePapers.map((paper) => paper.slug);
}
