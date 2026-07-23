export const CLOUD_SRE_ACCENT = "#D3287A";

export const cloudSreSplitCards = [
  {
    id: "cloud-sre",
    title: "Cloud, SRE, and DevOps",
    description:
      "Accelerated development combined with reliable, secure and scalable environments.",
    cta: "Keep reading",
    href: "#studio",
    iconId: "cloud" as const,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Comprehensive, adaptable security services that safeguard data, reputation, and ensure business continuity.",
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
      "We treat infrastructure like code, using a version management system to log the history of changes and bug fixes. The aim is to create a consistent and reliable build that can be repeated.",
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
      "We automate key processes such as deployment and local setup for developers. This means we achieve the maximum productivity of development teams while promoting service ownership.",
    image: "/assets/images/industry/qa.jpg",
    tools: ["Ansible", "Terraform", "Jenkins", "GitHub Actions"],
  },
  {
    id: "monitoring",
    title: "Monitoring & Error tracking",
    description:
      "Monitoring the performance of services is essential to ensure a quality service. By using monitoring and error tracing tools, we manage to minimize failures and increase stability.",
    image: "/assets/images/industry/monitoring.jpg",
    tools: ["Elastic", "Dynatrace", "Splunk", "Datadog", "New Relic"],
  },
  {
    id: "scalability",
    title: "Scalability",
    description:
      "We use container platforms, like Kubernetes, that can adjust performance and cost to changing demands. Efficient resource utilization and dynamic power addition are possible without major cost changes or refactoring.",
    image: "/assets/images/industry/accelerators-3.jpg",
    tools: ["Kubernetes"],
  },
  {
    id: "security",
    title: "Security",
    description:
      "Our infrastructure always includes fundamental security measures. These include encryption, secure database access, strong authentication methods and automated backups.",
    image: "/assets/images/industry/bg-security.jpg",
    tools: ["Datadog", "Istio", "checkov", "tfsec"],
  },
] as const;

export const cloudSreSolutions = [
  {
    id: "finops",
    title: "FinOps & cost optimization",
    description:
      "We help businesses maximize cloud spending efficiency through monitoring, rightsizing, and automation — without sacrificing performance.",
    iconId: "rocket" as const,
  },
  {
    id: "migration",
    title: "Cloud migration",
    description:
      "A multi-phased approach for cloud migrations, optimizing architecture for performance and scalability using Kubernetes and serverless technologies.",
    iconId: "migrate" as const,
  },
  {
    id: "modernization",
    title: "Cloud modernization",
    description:
      "We help teams adopt modern architectures, automation, containerization, and Infrastructure as Code to evolve legacy systems.",
    iconId: "monitor" as const,
  },
  {
    id: "sre",
    title: "SRE & observability",
    description:
      "We implement Site Reliability Engineering practices, cloud-native observability stacks, and Service Level Objectives (SLOs).",
    iconId: "search" as const,
  },
  {
    id: "mlops",
    title: "AI & ML model deployment",
    description:
      "We enable seamless deployment and scaling of machine learning stacks in cloud environments, ensuring reliability, performance, and cost efficiency. Our approach integrates MLOps best practices, automating the lifecycle from model training to serving and monitoring.",
    iconId: "sparkles" as const,
  },
  {
    id: "cicd",
    title: "CI/CD & DevOps automation",
    description:
      "We build automated workflows that streamline software delivery, reducing manual effort and minimizing deployment risks. Our approach ensures fast, consistent, and secure releases by integrating CI/CD pipelines, infrastructure automation, and cloud-native tooling.",
    iconId: "timer" as const,
  },
  {
    id: "security",
    title: "Cloud security & compliance",
    description:
      "We help organizations secure their cloud environments and maintain compliance with industry standards, regulations, and best practices. Our approach combines automated security controls, proactive monitoring, and continuous compliance assessments.",
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
