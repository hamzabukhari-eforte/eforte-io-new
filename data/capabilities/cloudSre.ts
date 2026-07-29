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
    image: "/assets/images/industry/cloud.jpg",
    tools: [
      "Azure Resource Manager",
      "Pulumi",
      "Terraform",
      "AWS CloudFormation",
    ],
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Automating repetitive and error-prone tasks to improve speed, reliability, and consistency across environments.",
    image: "/assets/images/industry/qa.jpg",
    tools: ["Ansible", "Terraform", "Jenkins", "GitHub Actions"],
  },
  {
    id: "monitoring",
    title: "Monitoring & Error tracking",
    description:
      "Implementing observability, alerting, and error tracking to detect issues early and maintain high system reliability.",
    image: "/assets/images/industry/monitoring.jpg",
    tools: ["Elastic", "Dynatrace", "Splunk", "Datadog", "New Relic"],
  },
  {
    id: "scalability",
    title: "Scalability",
    description:
      "Designing architectures that scale up or down smoothly based on demand, while maintaining performance and cost efficiency.",
    image: "/assets/images/industry/accelerators-3.jpg",
    tools: ["Kubernetes"],
  },
  {
    id: "security",
    title: "Security",
    description:
      "Embedding security at every layer, from infrastructure and networks to applications and data.",
    image: "/assets/images/industry/bg-security.jpg",
    tools: ["Datadog", "Istio", "checkov", "tfsec"],
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
    imageSrc: "/assets/images/capabilities/cloud-engine.svg",
    imageAlt: "AI Cloud Engine accelerator",
    paragraphs: [
      "Streamline AI/ML infrastructure deployment and management using industry-leading platforms like Databricks, Snowflake, Airflow, dbt, and MLflow.",
      "With our AI Cloud Engine, we simplify the complex process of setting up data pipelines, ML workflows, and cloud-native infrastructure, empowering teams to focus on model development and data insights, instead of infrastructure hassles.",
    ],
  },
  {
    id: "terraform",
    label: "Terraform Blueprints",
    imageSrc: "/assets/images/capabilities/terraform.webp",
    imageAlt: "Terraform Blueprints accelerator",
    paragraphs: [
      "There are common components in all infrastructures, such as basic network configurations, provisioning of auto-scalable clusters, or even the setup of email and push notification services. Doing the same work over and over again is not only inefficient but also unchallenging for our engineers.",
      "Therefore, we have created a set of templates and reusable modules that are optimized for the vast majority of projects.",
      "These modules accelerate the deployment process, facilitate knowledge sharing, and enhance our deliverables every day.",
    ],
  },
] as const;

export const cloudSreInsights = [
  {
    id: "1",
    category: "Cloud",
    title: "How SRE practices reduce downtime in multi-cloud environments",
    date: "July 8, 2026",
    image: "/assets/images/velocity-ai/insight-1.png",
  },
  {
    id: "2",
    category: "DevOps",
    title: "A practical guide to Infrastructure as Code at enterprise scale",
    date: "June 22, 2026",
    image: "/assets/images/velocity-ai/insight-2.png",
  },
  {
    id: "3",
    category: "Security",
    title: "Building secure CI/CD pipelines without slowing delivery",
    date: "June 4, 2026",
    image: "/assets/images/velocity-ai/insight-3.png",
  },
];
