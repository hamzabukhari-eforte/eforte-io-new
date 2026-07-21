export const DATA_ACCENT = "#2D52F0";

export const dataPartnerCertifications = [
  { src: "/assets/images/landing/soc.png", alt: "SOC 2 Type 2 certified" },
  { src: "/assets/images/landing/iso.png", alt: "ISO 27001 certified" },
  {
    src: "/assets/images/industry/badge.png",
    alt: "Snowflake Services Partner Select",
  },
  {
    src: "/assets/images/industry/aws-partner.png",
    alt: "AWS Partner Advanced Tier Services",
  },
  {
    src: "/assets/images/industry/databricks-badge.png",
    alt: "Databricks Partner Gold",
  },
];

export const dataOverviewChecklist = [
  "Data Architecture",
  "Data Integration & ETL",
  "Data Lakes",
];

export const dataStudioTabs = [
  {
    id: "governance",
    label: "Data governance",
    description:
      "Our specialized data governance services are the base of all data initiatives - ensuring data quality, compliance, and security.",
    image: "/assets/images/capabilities/data-governance.png",
  },
  {
    id: "storage",
    label: "Data storage",
    description:
      "We create modern data warehouse and data lake solutions on top of technologies including, but not limited to, Snowflake, Synapse and Redshift.",
    image: "/assets/images/capabilities/data-storage.webp",
  },
  {
    id: "management",
    label: "Data management",
    description:
      "Our experts will efficiently organize and maintain your data for easy access and use.",
    image: "/assets/images/capabilities/data-management.webp",
  },
  {
    id: "analytics",
    label: "Analytics & insight generation",
    description:
      "Our data analyst experts use advanced statistical techniques, find patterns, and discover insights. BI tools include PowerBI, Tableau, QlikView, Sense, Domo.",
    image: "/assets/images/capabilities/analytics.webp",
  },
  {
    id: "genai",
    label: "AI & GenAI",
    description:
      "We build secure, proprietary knowledge-bases that can be queried with natural language, with 95%+ accuracy and zero hallucinations. LLM tech includes Langchain, GPT, and others.",
    image: "/assets/images/capabilities/genai.webp",
  },
] as const;

export const dataServices = [
  {
    id: "data-quality",
    title: "Data Quality and Governance",
    bullets: [
      "Define quality standards and monitoring across pipelines",
      "Establish ownership, stewardship, and accountability models",
    ],
    tags: ["Data Discovery", "Data Quality Management"],
  },
  {
    id: "mdm",
    title: "Master Data Management (MDM)",
    bullets: [
      "Unify golden records across business domains",
      "Enable trusted reference data for analytics and operations",
    ],
    tags: ["Data Stewardship", "Data Lineage"],
  },
  {
    id: "metadata",
    title: "Metadata Management",
    bullets: [
      "Catalog datasets, schemas, and transformations",
      "Improve discoverability for analysts and engineers",
    ],
    tags: ["Data Cataloging", "Metadata Search"],
  },
  {
    id: "policy",
    title: "Policy and Privacy",
    bullets: [
      "Align data usage with regulatory requirements",
      "Implement consent, retention, and access controls",
    ],
    tags: ["Data Privacy", "Consent Management"],
  },
];

export const dataAcceleratorGroups = [
  {
    id: "governance",
    title: "Governance",
    subtitle: "Foundation & Security",
    iconId: "lock" as const,
    items: [
      {
        title: "Unity Catalog Setup",
        description:
          "Automates end-to-end Unity Catalog deployment from metadata, ERDs, and infrastructure code.",
      },
      {
        title: "Governance Migration Agent",
        description:
          "AI agent that translates legacy roles, permissions, and tags into Unity Catalog policies.",
      },
    ],
  },
  {
    id: "ai-genai",
    title: "AI & GenAI",
    subtitle: "Innovation & Intelligence",
    iconId: "bulb" as const,
    items: [
      {
        title: "Financial Analyst AI Agent",
        description:
          "Natural language analytics over financial data and documents with built-in KPI guardrails.",
      },
      {
        title: "Unstructured Knowledge Assistant",
        description:
          "Databricks-native semantic search engine providing citation-based answers from docs.",
      },
    ],
  },
  {
    id: "platform",
    title: "Platform",
    subtitle: "Operations & Resilience",
    iconId: "server" as const,
    items: [
      {
        title: "Platform CI/CD Setup",
        description:
          "Terraform-based workspace automation, pipeline deployment, and environment management.",
      },
      {
        title: "Cost Management",
        description:
          "DBU and infrastructure cost observability, automated tagging strategies, and dashboards.",
      },
      {
        title: "Disaster Recovery",
        description:
          "Automated failover strategies and cross-cloud backup orchestration.",
      },
    ],
  },
];

export const dataSuccessStories = [
  {
    id: "avant",
    brand: "AVANT",
    title: "Reinventing Avant with machine learning",
    paragraphs: [
      "Avant, a Chicago-based frontrunner in the financial technology sector, has always recognized the potential of harnessing data-driven intelligence — they currently connect 3 million customers to $9 billion in loans and 1 million credit cards. eForte is leading Avant's data and machine learning efforts.",
      "Our work includes implementing new data pipelines, and using AI to drive innovation in key business areas, such as rapidly assessing a person's credit worthiness.",
    ],
    tags: [
      "Machine learning algorithms",
      "Specialized data pipeline",
      "Data visualization",
      "AI finance solutions",
    ],
    cardHeading: "A business transformation with data and machine learning",
    imageSrc: "/assets/images/industry/our-work-2.webp",
    imageAlt: "Avant mobile experience with data and machine learning",
  },
  {
    id: "retailer",
    brand: "RETAIL",
    title: "Staffing a governed data platform for a global retailer",
    paragraphs: [
      "We partnered with a retail leader to stand up a modern data platform — embedding engineers, analysts, and governance practices that accelerated reporting and self-serve analytics.",
      "The engagement focused on reliable pipelines, trusted metrics, and a scalable lakehouse foundation that teams across regions could build on.",
    ],
    tags: ["Data Governance", "Retail", "United Kingdom", "Lakehouse"],
    cardHeading: "A governed data platform built for scale",
    imageSrc: "/assets/images/case-study/InstApp-Dealbanner.png",
    imageAlt: "Retail data platform case study",
  },
];

export const dataInsights = [
  {
    id: "1",
    categories: ["Data and AI"],
    title:
      "eForte Earns Databricks Specialization for Communications, Media, Entertainment & Gaming",
    excerpt:
      "With 250+ certified engineers and deep Databricks experience, we continue expanding industry specialization across media and entertainment workloads.",
    author: "Gabriel Fagundez",
    authorImage: "/assets/images/velocity-ai/avatar-2.jpg",
    date: "July 17, 2026",
    image: "/assets/images/velocity-ai/insight-1.png",
  },
  {
    id: "2",
    categories: ["Culture & Events", "Data and AI"],
    title:
      "What I Learned Watching Four Women Lead Data at the Data+AI Summit",
    excerpt:
      "Four women leading data and AI shared practical lessons on platform strategy, culture, and delivery at the Data+AI Summit.",
    author: "Aldis Stareczek",
    authorImage: "/assets/images/velocity-ai/avatar-3.jpg",
    date: "July 10, 2026",
    image: "/assets/images/velocity-ai/insight-2.png",
  },
  {
    id: "3",
    categories: ["Data and AI"],
    title:
      "AI Needs Reliable Information: Knowledge Management is the Key",
    excerpt:
      "AI tools only perform as well as the documentation and knowledge systems behind them — quality information is the foundation.",
    author: "eForte Data Team",
    authorImage: "/assets/images/velocity-ai/avatar-4.jpg",
    date: "July 1, 2026",
    image: "/assets/images/velocity-ai/insight-3.png",
  },
];

export const dataFaqs = [
  {
    question: "How does eForte improve data quality?",
    answer:
      "We embed quality checks, monitoring, and stewardship into pipelines so issues are caught early. That includes automated tests, SLAs, observability, and clear ownership models for critical datasets.",
  },
  {
    question: "What data sources does eForte typically integrate?",
    answer:
      "We integrate databases, warehouses, SaaS platforms, event streams, files, and APIs — from transactional systems to real-time feeds — into a unified analytics-ready platform.",
  },
  {
    question: "How can data engineering improve my business performance?",
    answer:
      "Reliable data engineering shortens time-to-insight, improves decision quality, and unlocks AI use cases. Teams spend less time fixing data and more time acting on it.",
  },
  {
    question: "Can eForte help monetize my data?",
    answer:
      "Yes. We help identify high-value data products, build trusted pipelines and metrics, and create platforms that support internal and external data monetization models.",
  },
  {
    question: "What cloud platforms does eForte work with for data storage?",
    answer:
      "We work across AWS, Azure, and GCP, with deep experience on Databricks, Snowflake, and modern orchestration tools like Airflow and dbt.",
  },
];
