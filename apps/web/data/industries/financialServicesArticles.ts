import { insightProfileImages } from "@/data/capabilities/insightProfileImages";

export type FinanceArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type FinanceArticle = {
  slug: string;
  href: string;
  author: string;
  authorAvatar: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  categories: string[];
  imageSrc: string;
  imageAlt: string;
  sections: FinanceArticleSection[];
};

const IMAGE_BASE =
  "/assets/final-images/industries/financial-services";

export const financialServicesArticles: FinanceArticle[] = [
  {
    slug: "instant-payments-instant-fraud",
    href: "/industries/financial-services/articles/instant-payments-instant-fraud",
    author: "Gabriel Fagundez",
    authorAvatar: "/assets/images/capabilities/ai/avatar-gabriel-fagundez.jpg",
    title:
      "Instant rails collapsed the fraud window. Detection has to live in the payment path.",
    excerpt:
      "FedNow, RTP, and SCT Inst do not give a fraud team overnight to review a mule account. In 2026 the useful control is not another batch model. It is a decision that can halt, step up, or release a payment while the message is still in flight — with Confirmation of Payee, mule-network signals, and an explainable reason code an investigator can defend.",
    date: "September 4, 2026",
    readTime: "8 min read",
    categories: ["Data and AI"],
    imageSrc: `${IMAGE_BASE}/article-instant-payments-fraud.png`,
    imageAlt:
      "Instant payment rails intercepted by a glass fraud-detection prism",
    sections: [
      {
        heading: "The overnight review is gone",
        paragraphs: [
          "Card fraud had a settlement delay. ACH had a return window. Instant credit transfer has neither. Once the funds land, recovery is a collections problem, not a payments problem. That is why authorized push payment fraud, mule pass-through, and account-takeover payouts have moved from a quarterly risk topic to an operating constraint on every real-time rail.",
          "Most banks still score these payments with the same batch mindset: enrich after the fact, case it in a queue, tell the customer later. The customer already saw “sent.” The mule account already cashed out. The model was not wrong. It was late.",
        ],
      },
      {
        heading: "Put the decision in the path, not beside it",
        paragraphs: [
          "The institutions that are holding fraud losses down are not adding another dashboard. They are inserting a supervised decision into the payment path: Confirmation of Payee or equivalent name-check, velocity and mule-network features, a policy threshold, and a halt/step-up/release action that completes in the latency budget of the rail.",
          "That only works if the Foundational Data Layer already knows the payer, the payee, recent devices, and related accounts. An agent that “looks at the payment” without that context will either block too much good traffic or wave through the mule. Applied AI scores the risk. Agentic orchestration executes the narrow action — hold, request a second factor, or let it go — and writes the reason.",
        ],
      },
      {
        heading: "Investigators still have to win the argument",
        paragraphs: [
          "A blocked instant payment is a customer conversation. If the reason is a black-box score, operations lose. Store the features, the policy clause, the name-match outcome, and a short narrative. Then let a human override with the same trail. That is the same exam posture we argue for in audit-ready agents: if you cannot reconstruct it, you cannot defend it.",
        ],
      },
    ],
  },
  {
    slug: "iso-20022-exception-operations",
    href: "/industries/financial-services/articles/iso-20022-exception-operations",
    author: "Marcelo Cordini",
    authorAvatar: insightProfileImages.benjamin,
    title:
      "ISO 20022 is live. Exception handling is now a seconds problem, not a batch job.",
    excerpt:
      "The migration gave banks richer payment data. It also moved repair, investigation, and customer notice onto a clock that overnight ops teams were never staffed for. The institutions pulling ahead treat structured messages as product infrastructure — and put a supervised agent on the exception, not a spreadsheet after cutoff.",
    date: "August 19, 2026",
    readTime: "7 min read",
    categories: ["Software Engineering"],
    imageSrc: `${IMAGE_BASE}/article-iso-20022-exceptions.png`,
    imageAlt:
      "Structured ISO 20022 payment messages flowing through a clearing lattice",
    sections: [
      {
        heading: "Richer data, shorter fuse",
        paragraphs: [
          "ISO 20022 was sold as structured, richer, more automatable payments. That part is true. What operations felt first was the opposite of relief: more fields to get wrong, more counterparties sending incomplete data, and a customer who can already see the payment on an instant rail while the exception is still sitting in a work queue.",
          "The old model — extract a file, repair at 2 a.m., notify in the morning — does not survive FedNow-adjacent flows or cross-border gpi-style tracking. Exception handling is now a product surface. If you treat it as a back-office format project, you will spend the next two years explaining delays that the message standard was supposed to remove.",
        ],
      },
      {
        heading: "Repair is a workflow, not a mapping exercise",
        paragraphs: [
          "Most “ISO programs” stopped at schema mapping. The work that matters is classifying the break, proposing a repair from the structured data you actually received, drafting the customer or correspondent notice, and stopping for a human when amount, jurisdiction, or sanctions risk crosses a line.",
          "That is core banking API work and orchestration work, not a one-time translator. The agent should never invent a new credit or originate a payment it cannot reconstruct. It should assemble the evidence pack from the message, the core, and the sanctions list, then wait.",
        ],
      },
      {
        heading: "Make the exception visible in the product",
        paragraphs: [
          "If the only view of a failed payment is an internal ticket, you have already lost the customer. Surface status, next action, and who owns the pause. Use the same audit trail the exception agent writes. ISO 20022 gave you the data to do this. The remaining gap is an operating model that can act on it in seconds.",
        ],
      },
    ],
  },
  {
    slug: "dora-ai-operational-resilience",
    href: "/industries/financial-services/articles/dora-ai-operational-resilience",
    author: "Sebastian Diaz",
    authorAvatar: insightProfileImages.edward,
    title:
      "DORA does not care that your model is accurate. It cares that you can stop it.",
    excerpt:
      "Europe’s Digital Operational Resilience Act is now an operating test for any AI that sits in a critical function: payments, lending, reporting, or the vendor that runs them. Accuracy is not the exam. Concentration risk, ICT third parties, incident reporting, and a kill switch that actually works are. If your agent cannot be halted by role, replayed, and failed over, it is not production-ready — no matter what the confusion matrix says.",
    date: "August 5, 2026",
    readTime: "8 min read",
    categories: ["Data and AI", "Software Engineering"],
    imageSrc: `${IMAGE_BASE}/article-dora-resilience.png`,
    imageAlt:
      "Dual banking systems with a failover path and operational kill switch",
    sections: [
      {
        heading: "Resilience is now a product requirement",
        paragraphs: [
          "DORA did not invent operational risk. It made it examinable in a way that catches AI programs off guard. A credit model that is 40 basis points better is still a concentration risk if it runs on one vendor, one region, and one prompt pipeline nobody can freeze. A payments agent that cannot be disabled by role is an incident waiting for a reporting clock.",
          "US firms are not exempt in practice. Supervisors already ask the same questions under operational-resilience and third-party guidance. The label is European. The failure mode is global: an intelligent system with no graceful stop.",
        ],
      },
      {
        heading: "Four tests before an agent is a critical function",
        paragraphs: [
          "First: identity. Every agent class has a named owner, a system identity, and a mandate written in operations language, not research language. Second: halt. You can disable that class in seconds without taking down the rail. Third: replay. You can reconstruct the last N actions from the log, not from Slack. Fourth: failover. If the model host or the orchestration layer dies, the workflow degrades to a human queue — it does not silently pass.",
          "Those tests sit on the Foundational Data Layer as much as on MLOps. If lineage and access control are optional, the kill switch is theatre.",
        ],
      },
      {
        heading: "Vendors are in scope, including yours",
        paragraphs: [
          "If a fintech, a BaaS partner, or a model host sits in a critical or important function, their incident is your incident. Contract for logs, for halt rights, and for a tested failover. Then exercise it. DORA’s point is not paperwork. It is whether the institution can still serve customers when the clever part of the stack misbehaves.",
        ],
      },
    ],
  },
  {
    slug: "tokenized-deposits-regulated-settlement",
    href: "/industries/financial-services/articles/tokenized-deposits-regulated-settlement",
    author: "Benjamin Walsh",
    authorAvatar: insightProfileImages.profile,
    title:
      "Tokenized deposits will not wait for a new core. Banks need a settlement layer examiners can read.",
    excerpt:
      "Wholesale pilots and deposit-token experiments are moving from whiteboards into limited production. The constraint is not the ledger. It is whether the token, the cash, and the customer still reconcile to a regulated deposit record — with the same AML, sanctions, and audit trail a core already owes. Treat tokenization as a settlement fabric on top of a governed data layer, not as a second bank.",
    date: "July 22, 2026",
    readTime: "7 min read",
    categories: ["Software Engineering"],
    imageSrc: `${IMAGE_BASE}/article-tokenized-deposits.png`,
    imageAlt:
      "A glass bank vault fused with a crystalline settlement ledger",
    sections: [
      {
        heading: "A token is still a deposit if a bank issued it",
        paragraphs: [
          "The industry conversation keeps sliding toward “crypto rails.” That is the wrong frame for a chartered bank. A tokenized deposit is a representation of a liability the institution already has. If the on-chain record and the core record diverge, you do not have innovation. You have a reconciling nightmare and a potential run on meaning.",
          "Wholesale CBDC experiments, commercial-bank deposit tokens, and DvP settlement on shared ledgers all hit the same requirement: the movement of value must be explainable in the same language as today’s books — customer, amount, purpose, sanctions result, and who was allowed to move it.",
        ],
      },
      {
        heading: "Do not rebuild the bank. Attach a settlement layer.",
        paragraphs: [
          "Big-bang core replacement to “go on-chain” will miss the window. The workable pattern is the same one we use for embedded banking APIs: keep the licensed core as the system of record, expose a controlled settlement interface, and let a narrow orchestration layer mint, burn, or transfer representations under policy.",
          "Applied AI can score wallet risk, detect abnormal mint/burn patterns, and assemble the travel-rule package. It should not be the ledger. Agentic orchestration can execute a DvP versus a counterparty once both sides have passed the same controls that already apply to a wire.",
        ],
      },
      {
        heading: "Examiners will ask the boring questions first",
        paragraphs: [
          "Who is the customer. Where is the money. What happens if the ledger is unavailable. Can you reverse or compensate. Can you produce the trail for this transfer the way you would for ISO 20022. Answer those on the Foundational Data Layer before you advertise finality. Tokenization rewards the banks that already know how to move a transaction through data, models, and a supervised action — not the ones that bought a new vocabulary.",
        ],
      },
    ],
  },
];

export function getFinanceArticleBySlug(slug: string) {
  return financialServicesArticles.find((article) => article.slug === slug);
}

export function getFinanceArticleSlugs() {
  return financialServicesArticles.map((article) => article.slug);
}
