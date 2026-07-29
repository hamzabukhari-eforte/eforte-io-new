export const DATA_ACCENT = "#D3287A";

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
      "Foundational governance services that underpin every data initiative, protecting quality, compliance, and security.",
    image: "/assets/images/capabilities/data-governance.png",
  },
  {
    id: "storage",
    label: "Data storage",
    description:
      "Modern storage architectures designed for performance, scalability, and cost efficiency.",
    image: "/assets/images/capabilities/data-storage.webp",
  },
  {
    id: "management",
    label: "Data management",
    description:
      "Structured processes to organize, catalog, and control data throughout its lifecycle.",
    image: "/assets/images/capabilities/data-management.webp",
  },
  {
    id: "analytics",
    label: "Analytics & insight generation",
    description:
      "Capabilities that turn raw information into actionable, decision-ready insights.",
    image: "/assets/images/capabilities/analytics.webp",
  },
  {
    id: "genai",
    label: "AI & GenAI",
    description:
      "Data foundations that support advanced AI and generative AI use cases.",
    image: "/assets/images/capabilities/genai.webp",
  },
] as const;

export const dataServices = [
  {
    id: "platform",
    title: "Data platform creation",
    bullets: [
      "eForte designs and builds comprehensive data platforms tailored to your needs, spanning cloud, on-premises, and hybrid environments. Solutions are built to be scalable and maintainable, with strong performance, security, and seamless integration at their core.",
    ],
    tags: [
      "Architecture design",
      "Batch & realtime data processing",
      "Data security & compliance",
    ],
  },
  {
    id: "team",
    title: "Expand your team with expert data engineers",
    bullets: [
      "Tap into a flexible pool of data engineering specialists to grow your capabilities, enhance data quality, and move faster. eForte's modular teams integrate smoothly into your existing structures, tools, and workflows.",
    ],
    tags: ["Rapid team expansion", "Knowledge transfer", "Project acceleration"],
  },
  {
    id: "integrate",
    title: "Integrate new data sources into your platform",
    bullets: [
      "eForte integrates diverse data sources into unified platforms using modern tools and protocols. This gives users a single place to access and analyze information from databases, warehouses, and live data streams.",
    ],
    tags: [
      "Diverse data source connectivity",
      "Data quality management",
      "Realtime or batch integrations",
    ],
  },
  {
    id: "governance",
    title: "Data governance consultancy & mentoring",
    bullets: [
      "eForte's cloud-aware governance and security approach helps organizations reduce risk and avoid disruptions. The team supports you with advanced assessments and ongoing guidance to keep your data estate safe and compliant.",
    ],
    tags: [
      "Data policy design",
      "Governance best practices",
      "Regulatory compliance",
    ],
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
      "eForte improves data quality through profiling, validation, and monitoring, ensuring consistency and compliance with business standards.",
  },
  {
    question: "What data sources does eForte typically integrate?",
    answer:
      "We seamlessly connect to a wide range of data sources, including Amazon S3, Azure Blob Storage, Google Cloud Storage, Snowflake, SQL and NoSQL databases, Hadoop file systems, and formats like CSV, XML, and JSON. For data integration, we use tools such as Matillion, Alteryx, and Fivetran, or build custom solutions using Python, Airflow, and cloud computing when needed.",
  },
  {
    question: "How can data engineering improve my business performance?",
    answer:
      "eForte's data engineering services streamline your data workflows, delivering faster processing with reduced latency, real-time insights for informed decisions, and reliable, accessible data for stronger strategy.",
  },
  {
    question: "Can eForte help monetize my data?",
    answer:
      "Yes, eForte helps businesses monetize their data by uncovering new data-driven opportunities — building new products and services, optimizing pricing, and improving customer targeting to drive higher sales and profitability.",
  },
  {
    question: "What cloud platforms does eForte work with for data storage?",
    answer:
      "We specialize in solutions built on AWS Redshift, Snowflake, Databricks, and Azure Synapse, delivering scalable and secure data storage.",
  },
  {
    question: "How can business intelligence solutions from eForte help my company?",
    answer:
      "We use BI tools such as Power BI, Tableau, Qlik, and Domo to create actionable reports that empower leadership teams to make data-driven decisions.",
  },
  {
    question: "How does eForte manage data migration?",
    answer:
      "eForte ensures seamless data migration with minimal disruption, using proven tools and strategies to protect data integrity. Timelines vary based on migration approach, infrastructure complexity, data volume, and third-party integrations.",
  },
  {
    question: "What AI services does eForte provide?",
    answer:
      "Our team brings deep expertise in AI, including LLM development, Generative AI, and advanced computer vision. We help businesses optimize operations, automate complex tasks, and extract insights through tailored AI solutions.",
  },
];
