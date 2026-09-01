import type {
  StudioProcessItem,
  StudioValueItem,
} from "@/components/sections/studio-shared";

export const technologyPartnersContent = {
  hero: {
    badge: "Technology Partners",
    headline: "Powering AI Native Transformation with the World's Leading Platforms",
    body: "eForte's Velocity AI methodology is only as strong as the technology foundation behind it. We've built deep, hands on engineering partnerships with Microsoft Azure, Anthropic, OpenAI, Snowflake, and AWS, combining each platform's unique strengths into one secure, scalable delivery stack. These aren't logos on a slide they're the infrastructure, models, and data engines our teams use daily to ship AI Augmented Software and Agentic Workflows. Below is a closer look at how we implement each partner and the measurable value it creates for clients.",
  },
  partnersIntro: {
    eyebrow: "Platform partnerships",
    title: "How we implement each partner and the value it creates",
  },
  partners: [
    {
      eyebrow: "Microsoft Azure",
      title: "Enterprise grade, compliance ready cloud",
      description: "We use Azure as our core deployment environment for enterprise grade, compliance sensitive workloads leveraging Azure OpenAI Service, Azure Kubernetes Service, and Azure's identity and governance tooling to stand up secure, auditable environments quickly. Our teams pair Azure's compliance certifications with our own Regulated by Design practices, so clients in healthcare, finance, and insurance get infrastructure that's audit ready from day one rather than retrofitted later.\nClient impact: 35% faster environment provisioning for regulated clients; 99.9% platform uptime across production deployments; reduced compliance audit prep time by roughly a third for healthcare clients handling HIPAA governed data.",
      image: "/assets/final-images/technology-partners/Microsoft_Azure.png",
      imageAlt: "Microsoft Azure enterprise cloud deployments",
      imageSide: "right" as const,
      tags: [
        "35% faster provisioning",
        "99.9% uptime",
        "HIPAA aligned security",
        "Azure OpenAI",
      ],
    },
    {
      eyebrow: "Anthropic",
      title: "Responsible AI with Claude at the core",
      description: "Anthropic's Claude models anchor our Human in the Loop and Responsible AI practice, powering reasoning intensive agentic workflows such as document analysis, policy/compliance monitoring, and complex customer inquiry handling. We selected Anthropic as a strategic partner because Claude's emphasis on steerability and safety aligns directly with our Verifiable AI Transparency principles giving clients agents that are capable, auditable, and controllable in live production settings, not just in a demo.\nClient impact: 40%+ reduction in manual review time for compliance monitoring workflows; measurable drop in escalation rates for AI handled customer inquiries; improved auditability scores in internal governance reviews following deployment.",
      image: "/assets/final-images/technology-partners/Anthropic.png",
      imageAlt: "Anthropic Claude powering responsible agentic workflows",
      imageSide: "left" as const,
      tags: [
        "40%+ less manual review",
        "Human in the Loop",
        "Verifiable AI",
        "Claude models",
      ],
    },
    {
      eyebrow: "OpenAI",
      title: "Speed, creativity, and general purpose reasoning",
      description: "We integrate OpenAI's models where speed, creative range, and broad general purpose reasoning give clients the biggest competitive edge including AI powered lead scoring, proposal generation, and rapid prototyping of new agentic capabilities. By layering our own governance and human oversight controls on top of OpenAI's fast moving model ecosystem, clients get cutting edge generative AI capability without inheriting the operational or compliance risk that often accompanies it.\nClient impact: 2-3x faster proposal turnaround for sales teams using AI generated first drafts; meaningful lift in qualified lead conversion following AI based scoring; significant cut in prototype to pilot timelines for new AI use cases.",
      image: "/assets/final-images/technology-partners/openai.png",
      imageAlt: "OpenAI models accelerating generative AI delivery",
      imageSide: "right" as const,
      tags: [
        "2-3x faster proposals",
        "Lead scoring",
        "Rapid prototyping",
        "Governed GenAI",
      ],
    },
    {
      eyebrow: "Snowflake",
      title: "Foundational Data Layer, governed at scale",
      description: "Snowflake anchors our Foundational Data Layer practice, giving clients a single, governed source of truth across ingestion, transformation, and analytics. We use it to consolidate fragmented enterprise data into one scalable, high performance warehouse the prerequisite for real time analytics and any serious GenAI initiative. This is the same discipline behind our BioResearch Labs engagement, where standardizing and governing clinical data helped drive a documented 99.8% data accuracy rate and a 42% faster study completion timeline.\nClient impact: Beyond the BioResearch Labs results above, expect (illustrative, pending client specific validation) roughly 50% reduction in data preparation time and materially faster time to insight for BI and analytics teams once data is consolidated onto Snowflake.",
      image: "/assets/images/industry/bi.jpg",
      imageAlt: "Snowflake data platform and analytics foundation",
      imageSide: "left" as const,
      tags: [
        "99.8% data accuracy",
        "42% faster studies",
        "~50% less prep time",
        "GenAI ready data",
      ],
    },
    {
      eyebrow: "AWS",
      title: "Elastic scale from pilot to enterprise",
      description: "AWS provides the elastic compute, storage, and managed AI/ML services (including Bedrock and SageMaker) that let us scale client solutions from pilot to enterprise wide deployment without re architecting along the way. We lean on AWS's maturity in security certifications and global infrastructure footprint to deliver Agentic Orchestration and automation workloads that stay highly available as usage and business value grows.\nClient impact: 20-30% infrastructure cost optimization after migrating agentic workloads to right sized AWS compute; near linear scalability validated under peak load testing; reduced deployment cycle time for new automation workflows moving from pilot to production.",
      image: "/assets/final-images/technology-partners/AWS.png?v2",
      imageAlt: "AWS cloud infrastructure for scalable AI workloads",
      imageSide: "right" as const,
      tags: [
        "20-30% cost optimization",
        "Bedrock & SageMaker",
        "High availability",
        "Pilot to production",
      ],
    },
  ] satisfies StudioProcessItem[],
  advantageIntro: {
    eyebrow: "The eForte Advantage",
    title: "Multi cloud. Multi model. Best fit for every client.",
  },
  advantage: [
    {
      id: "faster-ttm",
      title: "Faster time to market",
      description: "Pre built integrations and proven reference architectures across our partner stack help clients move from idea to production faster, without reinventing the foundation each time.",
      icon: "/assets/final-images/technology-partners/faster-time.svg",
      variant: "dark",
    },
    {
      id: "security-compliance",
      title: "Enterprise grade security & compliance",
      description: "ISO 27001, SOC 2 Type 2, and NIST AI RMF practices are built in from the first line of code, so security and compliance aren't bolted on after delivery.",
      icon: "/assets/final-images/technology-partners/security-compliance.svg",
      variant: "muted",
    },
    {
      id: "flexibility",
      title: "Long term flexibility",
      description: "Every engagement uses the best fit mix of these five partners, so clients are never locked into a single vendor's stack, roadmap, or pricing model.",
      icon: "/assets/final-images/technology-partners/flexibility.svg",
      variant: "light",
    },
  ] satisfies StudioValueItem[],
};
