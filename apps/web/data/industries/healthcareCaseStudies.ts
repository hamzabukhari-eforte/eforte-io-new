import type { CaseStudy, TechItem } from "@/data/caseStudies";

const IMAGE_BASE = "/assets/final-images/industries/healthcare";

const healthFrontEnd: TechItem[] = [
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
    name: "SCSS",
    info: "Maintainable stylesheets with variables, nesting, and mixins.",
    image: "/assets/images/case-study/sass.svg",
  },
];

const healthBackEnd: TechItem[] = [
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

const healthDatabase: TechItem[] = [
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

const healthOthers: TechItem[] = [
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

function healthTech(theme: number[]) {
  return {
    theme,
    frontEnd: healthFrontEnd,
    BackEnd: healthBackEnd,
    Database: healthDatabase,
    Others: healthOthers,
  };
}

const THEME = [1, 28, 87];

export const healthcareCaseStudies: CaseStudy[] = [
  {
    slug: "aurelia-clinics",
    introSection: {
      title: "Aurelia Clinics",
      description:
        "Aurelia Clinics, a multi-site outpatient network, needed a patient-first digital front door. Patients were bouncing between a dated portal, phone trees, and clinic-specific apps just to book a visit or read a result. eForte rebuilt the experience across web, mobile, and messaging, with a health CRM underneath so every relationship had one history.",
      image: `${IMAGE_BASE}/health-case-patient-experience.png`,
      link: "/case-studies/aurelia-clinics",
      theme: THEME,
    },
    technologySection: healthTech(THEME),
    Details: {
      title: "Aurelia Clinics",
      theme: THEME,
      sections: [
        {
          heading: "Patients had no single place to manage their care",
          description:
            "Each clinic ran its own booking flow. Records, reminders, and messages lived in different tools, so patients who were not already tech-savvy dropped off before they ever arrived.",
          image: `${IMAGE_BASE}/aurelia-challenge.png`,
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description:
            "eForte designed one accessible patient experience and a health-specific CRM so engagement, reminders, and records sit in the same place for every site.",
          image: `${IMAGE_BASE}/aurelia-solution-portal.png`,
          format: "right",
        },
      ],
    },
  },
  {
    slug: "pulselink",
    introSection: {
      title: "PulseLink",
      description:
        "PulseLink needed a consumer health app that could sit on Apple Health and Google Fit, then add its own wearable metrics over BLE. eForte built the mobile experience, the device firmware path, and the real-time metrics layer so patients and coaches could see the same numbers at the same time.",
      image: `${IMAGE_BASE}/health-case-mhealth.png`,
      link: "/case-studies/pulselink",
      theme: THEME,
    },
    technologySection: healthTech(THEME),
    Details: {
      title: "PulseLink",
      theme: THEME,
      sections: [
        {
          heading: "Wearable data never reached the coaching workflow",
          description:
            "PulseLink’s device streamed well in a lab, but the consumer app could not combine it with Apple Health and Google Fit, so coaches still asked patients to self-report.",
          image: `${IMAGE_BASE}/pulselink-challenge.png`,
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description:
            "eForte shipped a connected-health app and BLE device path that delivers real-time metrics into the same view patients and coaches already use.",
          image: `${IMAGE_BASE}/pulselink-solution-app.png`,
          format: "right",
        },
      ],
    },
  },
  {
    slug: "northstar-care",
    introSection: {
      title: "Northstar Care",
      description:
        "Northstar Care needed virtual visits that felt as solid as an in-person appointment, plus remote monitoring that reached the care team before a small issue became an admission. eForte built the telehealth layer, connected at-home devices, and medication-adherence tools on one clinical workflow.",
      image: `${IMAGE_BASE}/health-case-virtual-care.png`,
      link: "/case-studies/northstar-care",
      theme: THEME,
    },
    technologySection: healthTech(THEME),
    Details: {
      title: "Northstar Care",
      theme: THEME,
      sections: [
        {
          heading: "Virtual care was a video call with no clinical context",
          description:
            "Clinicians joined visits without device readings or adherence history. Remote monitors existed, but they did not land in the same place as the consultation.",
          image: `${IMAGE_BASE}/northstar-challenge.png`,
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description:
            "eForte connected video visits, at-home device feeds, and medication tracking so the care team can act before a remote signal becomes an emergency.",
          image: `${IMAGE_BASE}/northstar-solution-visit.png`,
          format: "right",
        },
      ],
    },
  },
  {
    slug: "thornfield-health",
    introSection: {
      title: "Thornfield Health",
      description:
        "Thornfield Health Network had clinicians spending nearly a third of every shift on documentation instead of patients. eForte built agentic orchestration for care teams: documentation drafts, patient triage, and care-coordination that always stop for a clinician before anything touches the record.",
      image: `${IMAGE_BASE}/health-case-agentic.png`,
      link: "/case-studies/thornfield-health",
      theme: THEME,
    },
    technologySection: healthTech(THEME),
    Details: {
      title: "Thornfield Health",
      theme: THEME,
      sections: [
        {
          heading: "Documentation was stealing time from the visit",
          description:
            "Notes, triage inboxes, and care-team updates were manual. Incoming patient questions sat until someone had time to route them, and visit summaries were written after the clinic day ended.",
          image: `${IMAGE_BASE}/thornfield-challenge.png`,
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description:
            "eForte put documentation, triage, and care-coordination agents in the workflow, with a human review gate before anything is written to the chart.",
          image: `${IMAGE_BASE}/thornfield-solution-notes.png`,
          format: "right",
        },
      ],
    },
  },
  {
    slug: "helix-health-data",
    introSection: {
      title: "Helix Health Data",
      description:
        "Helix Health Data needed a HIPAA-aligned foundation that could ingest EHR, device, and remote-monitoring feeds into one governed layer. eForte built the pipelines, the interoperability map, and the analytics so care quality and operations run from the same source of truth.",
      image: `${IMAGE_BASE}/health-case-data-layer.png`,
      link: "/case-studies/helix-health-data",
      theme: THEME,
    },
    technologySection: healthTech(THEME),
    Details: {
      title: "Helix Health Data",
      theme: THEME,
      sections: [
        {
          heading: "Clinical and device data could not be trusted together",
          description:
            "Wearables, remote monitors, and EHR extracts lived in separate stores. Analytics teams rebuilt the same joins by hand, and nothing had a lineage story that would survive an audit.",
          image: `${IMAGE_BASE}/helix-challenge.png`,
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description:
            "eForte stood up a governed Foundational Data Layer with EHR and device interoperability, so insight and operations share one HIPAA-aligned picture.",
          image: `${IMAGE_BASE}/helix-solution-pipeline.png`,
          format: "right",
        },
      ],
    },
  },
];
