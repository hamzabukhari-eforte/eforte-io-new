import { insightProfileImages } from "./insightProfileImages";

export const CLOUD_SRE_ACCENT = "#D3287A";

export const cloudSreSplitCards = [
  {
    id: "cloud-sre",
    title: "Cloud, SRE, and DevOps",
    description:
      "Accelerated development combined with reliable, secure, and scalable environments.",
    cta: "Keep reading",
    href: "#studio",
    iconId: "cloud" as const,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Comprehensive, adaptable security services that protect data and reputation, and maintain business continuity.",
    cta: "Learn more",
    href: "#solutions",
    iconId: "shield" as const,
  },
];

export const cloudSrePrinciples = [
  {
    id: "iac",
    title: "Infrastructure as code",
    description:
      "Treating infrastructure like code with version control, so changes and fixes are traceable and builds are consistent and repeatable.",
    image:
      "/assets/final-images/capabilities/cloud-sre/1-infrastructure_as_code.png",
    toolsImage:
      "/assets/final-images/capabilities/cloud-sre/Ias-tab-stack.png",
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Automating repetitive and error-prone tasks to improve speed, reliability, and consistency across environments.",
    image: "/assets/final-images/capabilities/cloud-sre/2-Automation.png",
    toolsImage:
      "/assets/final-images/capabilities/cloud-sre/automation-tab-stack.png",
  },
  {
    id: "monitoring",
    title: "Monitoring & Error tracking",
    description:
      "Implementing observability, alerting, and error tracking to detect issues early and maintain high system reliability.",
    image:
      "/assets/final-images/capabilities/cloud-sre/3-monitoring_error_tracking.png",
    toolsImage:
      "/assets/final-images/capabilities/cloud-sre/monitoring-tab-stack.png",
  },
  {
    id: "scalability",
    title: "Scalability",
    description:
      "Designing architectures that scale up or down smoothly based on demand, while maintaining performance and cost efficiency.",
    image: "/assets/final-images/capabilities/cloud-sre/4-scalability.png",
    toolsImage:
      "/assets/final-images/capabilities/cloud-sre/Kubernet-tab-stack.png",
  },
  {
    id: "security",
    title: "Security",
    description:
      "Embedding security at every layer, from infrastructure and networks to applications and data.",
    image: "/assets/final-images/capabilities/cloud-sre/5-security.png",
    toolsImage:
      "/assets/final-images/capabilities/cloud-sre/cloud-security-tab-stack.png",
  },
] as const;

export const cloudSreSolutions = [
  {
    id: "finops",
    title: "FinOps & cost optimization",
    description:
      "Using FinOps best practices, eForte helps organizations get maximum value from cloud spending through real-time monitoring, rightsizing, and automation that aligns costs with business goals.",
    iconId: "rocket" as const,
  },
  {
    id: "migration",
    title: "Cloud migration",
    description:
      "A mature, multi-phase migration approach tailored to your objectives, optimizing architectures for performance and scalability with technologies such as Kubernetes and serverless.",
    iconId: "migrate" as const,
  },
  {
    id: "modernization",
    title: "Cloud modernization",
    description:
      "Support for moving to modern architectures, automation, and best practices — including decomposing monoliths, adopting containers, and implementing Infrastructure as Code — to improve agility, security, and cost effectiveness.",
    iconId: "monitor" as const,
  },
  {
    id: "sre",
    title: "SRE & observability",
    description:
      "Implementation of Site Reliability Engineering practices to improve reliability, automate operations, and strengthen incident response, leveraging observability stacks, SLOs, and error budgets tied to business outcomes.",
    iconId: "search" as const,
  },
  {
    id: "mlops",
    title: "AI & ML model deployment",
    description:
      "Seamless deployment and scaling of machine learning stacks in the cloud, integrating MLOps practices from training to serving and monitoring to ensure performance and efficiency.",
    iconId: "sparkles" as const,
  },
  {
    id: "cicd",
    title: "CI/CD & DevOps automation",
    description:
      "Automated delivery workflows that reduce manual steps and deployment risk, combining CI/CD pipelines, infrastructure automation, and cloud-native tooling for fast, consistent, and secure releases.",
    iconId: "timer" as const,
  },
  {
    id: "security",
    title: "Cloud security & compliance",
    description:
      "Services to secure cloud environments and maintain compliance with regulations and standards, using automated controls, proactive monitoring, and continuous compliance assessments.",
    iconId: "secure" as const,
  },
];

export const cloudSreAccelerators = [
  {
    id: "bootstrapper",
    label: "Cloud Bootstrapper",
    imageSrc: "/assets/images/capabilities/bootstrapper.webp",
    imageAlt: "Cloud Bootstrapper accelerator",
    paragraphs: [
      "This accelerator automates the cloud infrastructure setup and integrates automatic build and deployment pipelines. A typical manual process for setting up infrastructure and provisioning could take many weeks – mixed in of course with the risks of human errors.",
      "With eForte's Cloud Bootstrapper we do it in minutes. It enables us to provision almost everything – servers, networks, storages, certificates, domains, scaling automation, and much more.",
    ],
  },
  {
    id: "engine",
    label: "AI Cloud Engine",
    imageSrc:
      "/assets/final-images/capabilities/cloud-sre/ai_cloud_engine_visual_final.png?v=2",
    imageAlt: "AI Cloud Engine accelerator",
    paragraphs: [
      "Streamline AI/ML infrastructure deployment and management using industry-leading platforms like Databricks, Snowflake, Airflow, dbt, and MLflow.",
      "With our AI Cloud Engine, we simplify the complex process of setting up data pipelines, ML workflows, and cloud-native infrastructure, empowering teams to focus on model development and data insights, instead of infrastructure hassles.",
    ],
  },
  {
    id: "terraform",
    label: "Terraform Blueprints",
    imageSrc:
      "/assets/final-images/capabilities/cloud-sre/Terraform_Blueprints.png?v=2",
    imageAlt: "Terraform Blueprints accelerator",
    paragraphs: [
      "There are common components in all infrastructures, such as basic network configurations, provisioning of auto-scalable clusters, or even the setup of email and push notification services. Doing the same work over and over again is not only inefficient but also unchallenging for our engineers.",
      "Therefore, we have created a set of templates and reusable modules that are optimized for the vast majority of projects.",
      "These modules accelerate the deployment process, facilitate knowledge sharing, and enhance our deliverables every day.",
    ],
  },
] as const;

export const cloudSreSuccessStories = [
  {
    id: "prism",
    brand: "Prism",
    category: "Retail forecasting",
    paragraphs: [
      "PRISM is a trends forecasting engine built for retail demand — handling seasonality, holidays, and messy real-world data without losing accuracy.",
    ],
    tags: [
      "Demand forecasting",
      "Seasonality modeling",
      "Prophet API",
    ],
    image: "/assets/images/case-study/new-images/prism/prism-main.png",
    imageAlt: "Prism retail trends forecasting platform",
    background: "#48306E",
    href: "/case-studies/prism",
  },
  {
    id: "scheduling-engine",
    brand: "Scheduling Engine",
    category: "Workforce management",
    paragraphs: [
      "eForte built a multi-vertical scheduling engine for StrateX that automates workforce planning for call center and retail clients.",
    ],
    tags: [
      "Automated scheduling",
      "Compliance monitoring",
      "Multi-vertical platform",
    ],
    image:
      "/assets/final-images/capabilities/cloud-sre/Scheduling-Engine.png",
    imageAlt: "Scheduling Engine workforce management platform",
    background: "#0A2A42",
    href: "/case-studies/scheduling-engine",
  },
];

export const cloudSreInsights = [
  {
    id: "1",
    author: "eForte Cloud Studio",
    authorImage: insightProfileImages.benjamin,
    title: "How SRE practices reduce downtime in multi-cloud environments",
    summary:
      "A practical look at SLOs, error budgets, and observability patterns that keep multi-cloud systems reliable as traffic and complexity grow.",
    date: "July 8, 2026",
    tags: ["Cloud", "SRE"],
    image: "/assets/images/velocity-ai/insight-1.png",
  },
  {
    id: "2",
    author: "Gabriel Fagundez",
    authorImage: insightProfileImages.edward,
    title: "A practical guide to Infrastructure as Code at enterprise scale",
    summary:
      "How to standardize Terraform modules, environments, and review workflows so IaC stays secure, reusable, and maintainable across teams.",
    date: "June 22, 2026",
    tags: ["DevOps", "Cloud"],
    image: "/assets/images/velocity-ai/insight-2.png",
  },
  {
    id: "3",
    author: "eForte Cloud Studio",
    authorImage: insightProfileImages.profile,
    title: "Building secure CI/CD pipelines without slowing delivery",
    summary:
      "Security controls that fit into the delivery path — scanning, policy gates, and secrets management that protect releases without blocking velocity.",
    date: "June 4, 2026",
    tags: ["Security", "DevOps"],
    image: "/assets/images/velocity-ai/insight-3.png",
  },
];

export const cloudSreFaqs = [
  {
    question: "Which cloud providers do you work with?",
    answer:
      "We work across AWS, Azure, and Google Cloud, and help you choose the right one (or right combination) based on your existing stack and requirements.",
  },
  {
    question: "Can you migrate us to the cloud without downtime?",
    answer:
      "Yes: we design migrations in phases, validating each step in parallel with existing production systems before cutting over.",
  },
  {
    question: "Do you provide ongoing infrastructure support, or just the migration?",
    answer:
      "Both. Many clients start with a migration engagement and move into an ongoing SRE/DevOps support arrangement afterward.",
  },
  {
    question: "How do you help control cloud costs?",
    answer:
      "Through infrastructure right-sizing, automated scaling policies, and ongoing cost monitoring built into the observability stack we set up.",
  },
];
