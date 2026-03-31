export type TechItem = {
  name: string;
  info: string;
  image: string;
};

export type CaseStudyDetailSection = {
  heading: string;
  description: string;
  image: string;
  format: "left" | "right";
};

export type CaseStudy = {
  slug: string;
  introSection: {
    title: string;
    description: string;
    image: string;
    link: string;
    theme: number[];
  };
  technologySection: {
    theme: number[];
    frontEnd: TechItem[];
    BackEnd: TechItem[];
    Database: TechItem[];
    Others: TechItem[];
  };
  Details: {
    title: string;
    theme: number[];
    sections: CaseStudyDetailSection[];
  };
};

const CASE_STUDY_IMG = "/assets/images/velocity-ai/case-study-myrow.png";
const TECH_ICON_IMG = "/assets/images/velocity-ai/case-study-myrow.png";

const baseFrontEnd: TechItem[] = [
  {
    name: "React",
    info: "Component-based UI development for scalable client applications.",
    image: "/assets/images/case-study/reactIcon.svg",
  },
  {
    name: "Next.js",
    info: "Server-side rendering and optimized performance for production web apps.",
    image: "/assets/images/case-study/next-js.svg",
  },
  {
    name: "HTML",
    info: "HTML is the standard markup language used to structure content on the web.",
    image: "/assets/images/case-study/html.svg",
  },
  {
    name: "SCSS",
    info: "SCSS adds variables, nesting, and mixins for maintainable stylesheets.",
    image: "/assets/images/case-study/sass.svg",
  },
];

const baseBackEnd: TechItem[] = [
  {
    name: "Node.js",
    info: "High-performance server runtime for APIs and background services.",
    image: "/assets/images/case-study/nodejs.svg",
  },
  {
    name: "GraphQL",
    info: "Efficient query layer for flexible, client-driven data fetching.",
    image: "/assets/images/case-study/graphql.svg",
  },
  {
    name: "AWS",
    info: "Cloud infrastructure for compute, storage, and managed services.",
    image: "/assets/images/case-study/aws.svg",
  },
];

const baseDatabase: TechItem[] = [
  {
    name: "MongoDB",
    info: "Document database designed for scalability and performance.",
    image: "/assets/images/case-study/mongodb.svg",
  },
];

const baseOthers: TechItem[] = [
  {
    name: "Docker",
    info: "Portable environments for consistent deployments across systems.",
    image: "/assets/images/case-study/docker.svg",
  },
  {
    name: "Nginx",
    info: "High‑performance web server and reverse proxy.",
    image: "/assets/images/case-study/nginx.svg",
  },
  {
    name: "Cloudinary",
    info: "Media management for optimized image and video delivery.",
    image: "/assets/images/case-study/cloudinary.svg",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "krank",
    introSection: {
      title: "Krank",
      description:
        "Explore how we and Avant are building a new generation of data and AI-driven financial services for their 3 million+ customers.",
      image: "/assets/images/case-study/krank1.png",
      link: "/case-studies/krank",
      theme: [14, 119, 244],
    },
    technologySection: {
      theme: [14, 119, 244],
      frontEnd: baseFrontEnd,
      BackEnd: baseBackEnd,
      Database: baseDatabase,
      Others: baseOthers,
    },
    Details: {
      title: "Krank",
      theme: [14, 119, 244],
      sections: [
        {
          heading: "Acceleration of AI workflows",
          description:
            "We engineered a reusable architecture that connects data, evaluation, and deployment for faster iteration cycles.",
          image: CASE_STUDY_IMG,
          format: "left",
        },
        {
          heading: "Governed data foundations",
          description:
            "We built a data layer that improves trust, observability, and performance across the full analytics lifecycle.",
          image: CASE_STUDY_IMG,
          format: "right",
        },
      ],
    },
  },
  {
    slug: "investment-markets",
    introSection: {
      title: "Investment-markets",
      description:
        "See how we help commerce brands scale with data and AI.",
      image: "/assets/images/case-study/investment-Markets1.png",
      link: "/case-studies/investment-markets",
      theme: [211, 3, 0],
    },
    technologySection: {
      theme: [211, 3, 0],
      frontEnd: baseFrontEnd,
      BackEnd: baseBackEnd,
      Database: baseDatabase,
      Others: baseOthers,
    },
    Details: {
      title: "Investment-markets",
      theme: [211, 3, 0],
      sections: [
        {
          heading: "Unified insights layer",
          description:
            "We modernized analytics with a shared metrics foundation to support consistent decision-making.",
          image: CASE_STUDY_IMG,
          format: "left",
        },
        {
          heading: "Production-grade delivery",
          description:
            "We delivered robust pipelines and monitoring so insights remain reliable as usage grows.",
          image: CASE_STUDY_IMG,
          format: "right",
        },
      ],
    },
  },
  {
    slug: "oddysee",
    introSection: {
      title: "Oddysee",
      description: "Case study on tailored AI and data solutions.",
      image: "/assets/images/case-study/oddysee1.png",
      link: "/case-studies/oddysee",
      theme: [9, 122, 184],
    },
    technologySection: {
      theme: [9, 122, 184],
      frontEnd: baseFrontEnd,
      BackEnd: baseBackEnd,
      Database: baseDatabase,
      Others: baseOthers,
    },
    Details: {
      title: "Oddysee",
      theme: [9, 122, 184],
      sections: [
        {
          heading: "AI enablement with governance",
          description:
            "We established guardrails to help models and workflows operate safely in production environments.",
          image: CASE_STUDY_IMG,
          format: "left",
        },
        {
          heading: "Faster iteration with reusable components",
          description:
            "We reduced time-to-feature by standardizing evaluation, deployment, and monitoring utilities.",
          image: CASE_STUDY_IMG,
          format: "right",
        },
      ],
    },
  },
  {
    slug: "prism",
    introSection: {
      title: "Prism",
      description: "Real-world computer vision and AI implementations.",
      image: "/assets/images/case-study/prism1.png",
      link: "/case-studies/prism",
      theme: [220, 58, 217],
    },
    technologySection: {
      theme: [220, 58, 217],
      frontEnd: baseFrontEnd,
      BackEnd: baseBackEnd,
      Database: baseDatabase,
      Others: baseOthers,
    },
    Details: {
      title: "Prism",
      theme: [220, 58, 217],
      sections: [
        {
          heading: "Data-to-model pipeline",
          description:
            "We streamlined the process from image ingestion to model deployment with strong observability.",
          image: CASE_STUDY_IMG,
          format: "left",
        },
        {
          heading: "Scalable serving",
          description:
            "We implemented serving strategies that support throughput without compromising latency budgets.",
          image: CASE_STUDY_IMG,
          format: "right",
        },
      ],
    },
  },
  {
    slug: "scheduling-engine",
    introSection: {
      title: "Scheduling-Engine",
      description: "Payments and fintech transformation with data and AI.",
      image: "/assets/images/case-study/scheduling2.png",
      link: "/case-studies/scheduling-engine",
      theme: [39, 37, 81],
    },
    technologySection: {
      theme: [39, 37, 81],
      frontEnd: baseFrontEnd,
      BackEnd: baseBackEnd,
      Database: baseDatabase,
      Others: baseOthers,
    },
    Details: {
      title: "Scheduling-Engine",
      theme: [39, 37, 81],
      sections: [
        {
          heading: "Resilient pipelines for payments",
          description:
            "We built data and AI workflows designed to operate under high availability requirements.",
          image: CASE_STUDY_IMG,
          format: "left",
        },
        {
          heading: "Risk-aware architecture",
          description:
            "We introduced observability and guardrails so decision systems remain trustworthy over time.",
          image: CASE_STUDY_IMG,
          format: "right",
        },
      ],
    },
  },
  {
    slug: "sellsmart",
    introSection: {
      title: "Sellsmart",
      description: "Turning dispersed documents into searchable intelligence.",
      image: "/assets/images/case-study/sellsMart1.png",
      link: "/case-studies/sellsmart",
      theme: [255, 77, 123],
    },
    technologySection: {
      theme: [255, 77, 123],
      frontEnd: baseFrontEnd,
      BackEnd: baseBackEnd,
      Database: baseDatabase,
      Others: baseOthers,
    },
    Details: {
      title: "Sellsmart",
      theme: [255, 77, 123],
      sections: [
        {
          heading: "Structured search over unstructured inputs",
          description:
            "We built a retrieval-first workflow to convert documents into actionable insights.",
          image: CASE_STUDY_IMG,
          format: "left",
        },
        {
          heading: "Evaluation and monitoring",
          description:
            "We added evaluation loops and monitoring so results stay consistent and trustworthy.",
          image: CASE_STUDY_IMG,
          format: "right",
        },
      ],
    },
  },
  {
    slug: "validatr",
    introSection: {
      title: "Validatr",
      description: "Data and AI for education and talent solutions.",
      image: "/assets/images/case-study/validatr1.png",
      link: "/case-studies/validatr",
      theme: [55, 55, 206],
    },
    technologySection: {
      theme: [55, 55, 206],
      frontEnd: baseFrontEnd,
      BackEnd: baseBackEnd,
      Database: baseDatabase,
      Others: baseOthers,
    },
    Details: {
      title: "Validatr",
      theme: [55, 55, 206],
      sections: [
        {
          heading: "Data foundations for personalized outcomes",
          description:
            "We unified datasets to support consistent scoring, analytics, and user experiences.",
          image: CASE_STUDY_IMG,
          format: "left",
        },
        {
          heading: "Better experiences through governed AI",
          description:
            "We implemented guardrailed workflows so insights remain useful and safe in production.",
          image: CASE_STUDY_IMG,
          format: "right",
        },
      ],
    },
  },
  {
    slug: "dostpay",
    introSection: {
      title: "Dostpay",
      description:
        'Dostpay is a 21st century mobile based "Digital Banking Payments platform" which gets easily integrated with the core banking platform and gives the end user power of Digital banking. Dostpay digital Flexible, Branded, Bespoke, Elegantly Simple and Empowering.',
      image: "/assets/images/case-study/Dostpay1.png",
      link: "/case-studies/dostpay",
      theme: [42, 48, 63],
    },
    technologySection: {
      theme: [42, 48, 63],
      frontEnd: baseFrontEnd,
      BackEnd: baseBackEnd,
      Database: baseDatabase,
      Others: baseOthers,
    },
    Details: {
      title: "Dostpay",
      theme: [42, 48, 63],
      sections: [
        {
          heading: "A User App to interact with their daily financial needs",
          description:
            "This user app is built to handle everyday financial needs quickly and easily, from opening an online account in under a minute to managing payments, transfers, school fees, and pocket money.",
          image: CASE_STUDY_IMG,
          format: "left",
        },
      ],
    },
  },
  {
    slug: "emerge-forward",
    introSection: {
      title: "Emerge Forward",
      description:
        "Emerge wanted to build a platform where youth can be trained with soft skills for real-world success, with profiles, lectures, tests, and a rich knowledge library.",
      image: "/assets/images/case-study/emerge1.png",
      link: "/case-studies/emerge-forward",
      theme: [231, 131, 37],
    },
    technologySection: {
      theme: [231, 131, 37],
      frontEnd: baseFrontEnd,
      BackEnd: baseBackEnd,
      Database: baseDatabase,
      Others: baseOthers,
    },
    Details: {
      title: "Emerge Forward",
      theme: [231, 131, 37],
      sections: [
        {
          heading: "Online tests and grading system",
          description:
            "Teachers can create tests and the system grades students automatically, helping measure how well soft skills content is being absorbed.",
          image: CASE_STUDY_IMG,
          format: "left",
        },
        {
          heading: "Professional profiles",
          description:
            "Students build LinkedIn-style work profiles including courses, personality types, and published content to support their future careers.",
          image: CASE_STUDY_IMG,
          format: "right",
        },
      ],
    },
  },
  {
    slug: "komb",
    introSection: {
      title: "Komb",
      description:
        "Komb is a salon management platform designed to automate day-to-day operations like scheduling appointments, managing clients, and handling inventory.",
      image: "/assets/images/case-study/komb1.png",
      link: "/case-studies/komb",
      theme: [106, 202, 190],
    },
    technologySection: {
      theme: [106, 202, 190],
      frontEnd: baseFrontEnd,
      BackEnd: baseBackEnd,
      Database: baseDatabase,
      Others: baseOthers,
    },
    Details: {
      title: "Komb",
      theme: [106, 202, 190],
      sections: [
        {
          heading: "Client mobile experience",
          description:
            "Clients can book, reschedule, and cancel appointments, receive discount coupons, and share before-and-after photos with friends and family.",
          image: CASE_STUDY_IMG,
          format: "left",
        },
        {
          heading: "Super admin dashboard",
          description:
            "Salon and super admins manage employees, sales, discounts, and performance through a unified web dashboard with rich reporting.",
          image: CASE_STUDY_IMG,
          format: "right",
        },
      ],
    },
  },
  {
    slug: "food-cast",
    introSection: {
      title: "FoodCast",
      description:
        "FoodCast is a mobile app designed to forecast ration requirements for individuals or families across breakfast, lunch, and dinner for a number of days.",
      image: "/assets/images/case-study/foodCast1.png",
      link: "/case-studies/food-cast",
      theme: [106, 202, 190],
    },
    technologySection: {
      theme: [106, 202, 190],
      frontEnd: baseFrontEnd,
      BackEnd: baseBackEnd,
      Database: baseDatabase,
      Others: baseOthers,
    },
    Details: {
      title: "FoodCast",
      theme: [106, 202, 190],
      sections: [
        {
          heading: "Forecasting pantry needs",
          description:
            "By combining past consumption data and forecasting algorithms, FoodCast helps users buy exactly what they need, reducing waste and planning shopping trips.",
          image: CASE_STUDY_IMG,
          format: "left",
        },
      ],
    },
  },
  {
    slug: "crowd-check",
    introSection: {
      title: "Crowd Check",
      description:
        "CrowdCheck is an Android and iOS application that lets users know real-time crowd levels at places listed in Google Maps to help maintain social distancing.",
      image: "/assets/images/case-study/crowd_checkbanner.png",
      link: "/case-studies/crowd-check",
      theme: [4, 250, 4],
    },
    technologySection: {
      theme: [4, 250, 4],
      frontEnd: baseFrontEnd,
      BackEnd: baseBackEnd,
      Database: baseDatabase,
      Others: baseOthers,
    },
    Details: {
      title: "Crowd Check",
      theme: [4, 250, 4],
      sections: [
        {
          heading: "Planning trips with crowd insights",
          description:
            "Using Google APIs, CrowdCheck aggregates and visualizes crowd levels so users can choose less crowded destinations and plan safer trips.",
          image: CASE_STUDY_IMG,
          format: "left",
        },
      ],
    },
  },
  {
    slug: "instapp-deal",
    introSection: {
      title: "InstApp Deal",
      description:
        "InstApp Deals is a mobile app that relies on word-of-mouth marketing, letting users search and redeem coupons for discounts while sharing savings and recommendations with their network.",
      image: "/assets/images/case-study/InstApp-Deal-Mobilebanner.png",
      link: "/case-studies/instapp-deal",
      theme: [145, 0, 29],
    },
    technologySection: {
      theme: [145, 0, 29],
      frontEnd: baseFrontEnd,
      BackEnd: baseBackEnd,
      Database: baseDatabase,
      Others: baseOthers,
    },
    Details: {
      title: "InstApp Deal",
      theme: [145, 0, 29],
      sections: [
        {
          heading: "Word-of-mouth driven promotions",
          description:
            "InstApp allows consumers to discover, share, and redeem promotional offers based on trusted recommendations from friends and their own interests.",
          image: CASE_STUDY_IMG,
          format: "left",
        },
      ],
    },
  },
];

