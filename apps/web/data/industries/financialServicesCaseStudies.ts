import type { CaseStudy, TechItem } from "@/data/caseStudies";

const IMAGE_BASE = "/assets/final-images/industries/financial-services";

const financeFrontEnd: TechItem[] = [
  {
    name: "React",
    info: "Component-based UI for scalable web client applications.",
    image: "/assets/images/case-study/reactIcon.svg",
  },
  {
    name: "Next.js",
    info: "Server-side rendering and optimized performance for production web apps.",
    image: "/assets/images/case-study/next-js.svg",
  },
  {
    name: "React Native",
    info: "Cross-platform iOS and Android apps from a shared codebase.",
    image: "/assets/images/case-study/react-native.svg",
  },
  {
    name: "Redux",
    info: "Predictable client state management for complex application flows.",
    image: "/assets/images/case-study/redux.svg",
  },
];

const financeBackEnd: TechItem[] = [
  {
    name: "Node.js",
    info: "High-performance server runtime for APIs and background services.",
    image: "/assets/images/case-study/nodejs.svg",
  },
  {
    name: "Python",
    info: "AI/ML services, forecasting models, NLP, and agentic orchestration runtimes.",
    image: "/assets/images/case-study/python.svg",
  },
  {
    name: "AWS",
    info: "Cloud infrastructure for compute, storage, and managed services.",
    image: "/assets/images/case-study/aws.svg",
  },
];

const financeDatabase: TechItem[] = [
  {
    name: "MongoDB",
    info: "Document database designed for scalability and flexible schemas.",
    image: "/assets/images/case-study/mongodb.svg",
  },
  {
    name: "Elasticsearch",
    info: "Search and analytics engine for high-volume operational data.",
    image: "/assets/images/case-study/elasticsearch.svg",
  },
];

const financeOthers: TechItem[] = [
  {
    name: "Docker",
    info: "Portable environments for consistent deployments across systems.",
    image: "/assets/images/case-study/docker.svg",
  },
  {
    name: "Nginx",
    info: "High-performance web server and reverse proxy.",
    image: "/assets/images/case-study/nginx.svg",
  },
  {
    name: "Jenkins",
    info: "CI/CD automation for reliable build and release pipelines.",
    image: "/assets/images/case-study/jenkins.svg",
  },
];

function financeTech(theme: number[]) {
  return {
    theme,
    frontEnd: financeFrontEnd,
    BackEnd: financeBackEnd,
    Database: financeDatabase,
    Others: financeOthers,
  };
}

export const financialServicesCaseStudies: CaseStudy[] = [
  {
    slug: "northbridge",
    introSection: {
      title: "Northbridge",
      description:
        "Northbridge, a mid market small business lender processing 500,000+ loan applications a year, needed to cut manual underwriting review time without loosening risk standards. eForte built a hybrid scoring engine combining bureau data, cash-flow signals, and behavioral indicators to flag low-risk applications for instant approval.",
      image: `${IMAGE_BASE}/northbridge-success-story-v3.png`,
      link: "/case-studies/northbridge",
      theme: [3, 23, 54],
    },
    technologySection: financeTech([3, 23, 54]),
    Details: {
      title: "Northbridge",
      theme: [3, 23, 54],
      sections: [
        {
          heading:
            "Northbridge needed faster credit decisions without loosening risk",
          description:
            "Manual underwriting review could not keep pace with 500,000+ applications a year. Low-risk files sat in the same queue as borderline cases, stretching decision time and driving up cost-per-application.",
          image: `${IMAGE_BASE}/case-northbridge-dashboard.png`,
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description:
            "eForte layered a human-in-the-loop review queue on top of the scoring model so underwriters focus only on borderline cases, while a person stays in control of every declined application.",
          image: `${IMAGE_BASE}/case-northbridge-scoring.png`,
          format: "right",
        },
      ],
    },
  },
  {
    slug: "velora-financial",
    introSection: {
      title: "Velora Financial",
      description:
        "Velora Financial, a regional credit union network, was losing members to digital first competitors because its mobile banking app couldn't support real time transfers or spending insights. eForte rebuilt Velora's mobile experience on a modern core-banking API layer, adding real time payment rails and a personalized spending-insights dashboard.",
      image: `${IMAGE_BASE}/velora-success-story-v3.png`,
      link: "/case-studies/velora-financial",
      theme: [1, 44, 127],
    },
    technologySection: financeTech([1, 44, 127]),
    Details: {
      title: "Velora Financial",
      theme: [1, 44, 127],
      sections: [
        {
          heading:
            "Velora's mobile app could not compete with digital first banks",
          description:
            "Members expected real time transfers and spending insights. The existing mobile experience could not support either, and attrition to competing digital banks was rising.",
          image: `${IMAGE_BASE}/case-velora-phone.png`,
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description:
            "eForte rebuilt the mobile experience on core-banking APIs with real time payment rails and a personalized spending-insights dashboard powered by transaction categorization models.",
          image: `${IMAGE_BASE}/case-velora-mobile-banking.png`,
          format: "right",
        },
      ],
    },
  },
  {
    slug: "arclight-capital",
    introSection: {
      title: "Arclight Capital",
      description:
        "Arclight Capital, a wealth management firm, needed to give advisors faster access to portfolio insights without asking clients to repeat information across systems. eForte built an AI financial analyst tool that pulls from custodial data, market feeds, and client notes to generate advisor-ready portfolio summaries in seconds instead of hours.",
      image: `${IMAGE_BASE}/arclight-success-story-v3.png`,
      link: "/case-studies/arclight-capital",
      theme: [211, 40, 122],
    },
    technologySection: financeTech([211, 40, 122]),
    Details: {
      title: "Arclight Capital",
      theme: [211, 40, 122],
      sections: [
        {
          heading:
            "Advisors spent hours assembling briefs from disconnected systems",
          description:
            "Custodial data, market feeds, and client notes lived in separate tools. Advisors rebuilt the same picture by hand before every meeting, which limited how many clients they could serve well.",
          image: `${IMAGE_BASE}/case-arclight-dashboard.png`,
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description:
            "eForte built an AI financial analyst that generates advisor-ready portfolio summaries in seconds, so advisors spend less time on prep and more time with clients.",
          image: `${IMAGE_BASE}/case-arclight-ai-analyst.png`,
          format: "right",
        },
      ],
    },
  },
];
