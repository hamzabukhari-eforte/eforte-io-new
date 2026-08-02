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

export const caseStudies: CaseStudy[] = [
  {
    slug: "krank",
    introSection: {
      title: "Krank",
      description: "Krank set out to modernize one of the most old fashioned corners of industrial commerce: the buying, selling, renting, and auctioning of heavy machinery. eForte partnered with Krank to build a private sales network where equipment owners could list machinery for sale, rent, or auction, while keeping their business contacts and listings protected within their own company network.",
      image: "/assets/images/case-study/krank1.png",
      link: "/case-studies/krank",
      theme: [28, 78, 128],
    },
    technologySection: {
      theme: [28, 78, 128],
      frontEnd: [
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
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
      {
        name: "MongoDB",
        info: "Document database designed for scalability and flexible schemas.",
        image: "/assets/images/case-study/mongodb.svg",
      },
    ],
      Others: [
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
        name: "Firebase",
        info: "Realtime data, auth, and push notification infrastructure.",
        image: "/assets/images/case-study/firebase.svg",
      },
    ],
    },
    Details: {
      title: "Krank",
      theme: [28, 78, 128],
      sections: [
        {
          heading: "Heavy machinery has traditionally been bought and sold through agents and brokers, a sl",
          description: "Heavy machinery has traditionally been bought and sold through agents and brokers, a slow process built on phone calls, static listings, and manual negotiation. Sellers had little visibility into genuine buyer interest, and buyers had no easy way to compare live listings, auctions, or rental options across multiple sellers in one place.",
          image: "/assets/images/case-study/krankDetail1.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte built Krank as a full web and mobile ecosystem, giving each company its own private network to list machinery for sale, rent, or auction, while still enabling social style engagement around news, posts, and listings.",
          image: "/assets/images/case-study/krankDetail1.png",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "oddysee",
    introSection: {
      title: "Oddysee",
      description: "Certain industries, cannabis licensing chief among them, require extensive documentation and state level compliance before a business can even open its doors. Oddysee approached eForte to build a platform that could take on that documentation burden directly, offering pre written templates, guided editing, and the surrounding business tools needed to get a license application across the finish line.",
      image: "/assets/images/case-study/oddysee-banner.png",
      link: "/case-studies/oddysee",
      theme: [15, 90, 70],
    },
    technologySection: {
      theme: [15, 90, 70],
      frontEnd: [
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
        name: "Ant Design",
        info: "Enterprise UI components for dense operational dashboards.",
        image: "/assets/images/case-study/ant-design.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "Strapi",
        info: "Headless CMS for structured content and admin workflows.",
        image: "/assets/images/case-study/strapi.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
      {
        name: "MongoDB",
        info: "Document database designed for scalability and flexible schemas.",
        image: "/assets/images/case-study/mongodb.svg",
      },
    ],
      Others: [
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
        name: "Cloudinary",
        info: "Media management for optimized image and video delivery.",
        image: "/assets/images/case-study/cloudinary.svg",
      },
    ],
    },
    Details: {
      title: "Oddysee",
      theme: [15, 90, 70],
      sections: [
        {
          heading: "Licensing processes in heavily regulated industries, particularly cannabis licensing at",
          description: "Licensing processes in heavily regulated industries, particularly cannabis licensing at the state level, require applicants to produce dense, precise, and jurisdiction specific documentation. Getting this wrong, or simply getting it done too slowly, can cost applicants their window to enter a market. Oddysee's clients needed a way to produce accurate documentation, business plans, and financial forecasts without starting from a blank page every time.",
          image: "/assets/images/case-study/oddysee1.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte built Oddysee as an integrated documentation, planning, and project management platform centered on one core idea: nobody should have to write a licensing application from scratch.",
          image: "/assets/images/case-study/oddysee1.png",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "investment-markets",
    introSection: {
      title: "Investment Markets",
      description: "InvestmentMarkets came to eForte with a clear but ambitious goal: bridge the gap between investment seeking companies and high net worth individuals, without the noise or gatekeeping typical of traditional investment networking. The founders arrived with a scope document running hundreds of pages, and needed a technical partner who could turn that level of detail into a working, scalable platform.",
      image: "/assets/images/case-study/invesment-banner.png",
      link: "/case-studies/investment-markets",
      theme: [40, 89, 246],
    },
    technologySection: {
      theme: [40, 89, 246],
      frontEnd: [
      {
        name: "React",
        info: "Component-based UI for scalable web client applications.",
        image: "/assets/images/case-study/reactIcon.svg",
      },
      {
        name: "PWA",
        info: "Installable progressive web apps with offline-ready delivery.",
        image: "/assets/images/case-study/pwa.svg",
      },
      {
        name: "Next.js",
        info: "Server-side rendering and optimized performance for production web apps.",
        image: "/assets/images/case-study/next-js.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
      {
        name: "MongoDB",
        info: "Document database designed for scalability and flexible schemas.",
        image: "/assets/images/case-study/mongodb.svg",
      },
    ],
      Others: [
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
        name: "Cloudinary",
        info: "Media management for optimized image and video delivery.",
        image: "/assets/images/case-study/cloudinary.svg",
      },
    ],
    },
    Details: {
      title: "Investment Markets",
      theme: [40, 89, 246],
      sections: [
        {
          heading: "High net worth investors and companies seeking capital have traditionally relied on per",
          description: "High net worth investors and companies seeking capital have traditionally relied on personal networks, brokers, or fragmented platforms to find each other. InvestmentMarkets wanted to remove that friction entirely, giving investors direct access to a wide range of vetted opportunities in one place, personalized and free to use.",
          image: "/assets/images/case-study/investment-Markets1.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte matched InvestmentMarkets' ambition with a PWA first engineering approach and rigorous documentation discipline.",
          image: "/assets/images/case-study/investment-Markets1.png",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "prism",
    introSection: {
      title: "Prism",
      description: "Retailers live and die by their ability to anticipate demand, but seasonal effects, holidays, and unpredictable outliers make accurate forecasting genuinely hard. PRISM was built to solve exactly that problem: a trends forecasting engine designed to handle strong seasonal patterns and messy real world data without losing accuracy.",
      image: "/assets/images/case-study/prism-banner.png",
      link: "/case-studies/prism",
      theme: [72, 48, 110],
    },
    technologySection: {
      theme: [72, 48, 110],
      frontEnd: [
      {
        name: "React",
        info: "Component-based UI for scalable web client applications.",
        image: "/assets/images/case-study/reactIcon.svg",
      },
      {
        name: "PWA",
        info: "Installable progressive web apps with offline-ready delivery.",
        image: "/assets/images/case-study/pwa.svg",
      },
      {
        name: "HTML",
        info: "Semantic markup used to structure content across web experiences.",
        image: "/assets/images/case-study/html.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
      {
        name: "PHP",
        info: "Server-side integration layer for legacy-friendly web delivery.",
        image: "/assets/images/case-study/php.svg",
      },
      {
        name: "Python",
        info: "AI/ML services, forecasting models, NLP, and agentic orchestration runtimes.",
        image: "/assets/images/case-study/python.svg",
      },
      {
        name: "Node.js",
        info: "High-performance server runtime for APIs and background services.",
        image: "/assets/images/case-study/nodejs.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Prism",
      theme: [72, 48, 110],
      sections: [
        {
          heading: "Retail demand doesn't move in a straight line",
          description: "Retail demand doesn't move in a straight line. It shifts with the seasons, spikes around holidays, and gets thrown off by one off outlier events that can badly skew a naive forecast. PRISM's client needed a forecasting engine that could account for all of this at once: yearly, weekly, and daily seasonality, holiday effects, and enough historical data to generate genuinely reliable predictions.",
          image: "/assets/images/case-study/prism1.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "Working with forecasting methods that were new territory even for eForte's own engineering team, the team built PRISM around Facebook's Prophet API and an additive modeling approach.",
          image: "/assets/images/case-study/prism1.png",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "scheduling-engine",
    introSection: {
      title: "Scheduling Engine",
      description: "StrateX, a solutions provider serving call center and retail chain clients, recognized that manual scheduling was costing their clients real money and real employee goodwill. High labor costs, low satisfaction, and compliance risk were all symptoms of the same root problem: scheduling that depended entirely on manual effort. StrateX partnered with eForte to build a scheduling engine that could serve clients across multiple industry verticals.",
      image: "/assets/images/case-study/scheduling1.png",
      link: "/case-studies/scheduling-engine",
      theme: [15, 55, 85],
    },
    technologySection: {
      theme: [15, 55, 85],
      frontEnd: [
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
        name: "HTML",
        info: "Semantic markup used to structure content across web experiences.",
        image: "/assets/images/case-study/html.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
      {
        name: "MongoDB",
        info: "Document database designed for scalability and flexible schemas.",
        image: "/assets/images/case-study/mongodb.svg",
      },
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Scheduling Engine",
      theme: [15, 55, 85],
      sections: [
        {
          heading: "StrateX's clients in the call center and retail chain industries were scheduling staff ",
          description: "StrateX's clients in the call center and retail chain industries were scheduling staff manually, a process that was slow, error prone, and difficult to scale. This led directly to high labor costs, inconsistent staffing levels, low employee satisfaction, and real compliance exposure under labor laws and regulations.",
          image: "/assets/images/case-study/scheduling1.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte built the Scheduling Engine as a configurable automation platform designed from the start to serve multiple client verticals through StrateX.",
          image: "/assets/images/case-study/scheduling1.png",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "sellsmart",
    introSection: {
      title: "Sellsmart",
      description: "Sellsmart is a sales platform that helps growing companies manage leads, follow ups, and pipeline progression. As sales teams scaled, keeping every lead moving through the pipeline consistently became harder to manage manually.",
      image: "/assets/images/case-study/sellsMart4.png",
      link: "/case-studies/sellsmart",
      theme: [220, 70, 110],
    },
    technologySection: {
      theme: [220, 70, 110],
      frontEnd: [
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
        name: "Ant Design",
        info: "Enterprise UI components for dense operational dashboards.",
        image: "/assets/images/case-study/ant-design.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
      {
        name: "MongoDB",
        info: "Document database designed for scalability and flexible schemas.",
        image: "/assets/images/case-study/mongodb.svg",
      },
    ],
      Others: [
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
        name: "Stripe",
        info: "Secure payment processing and settlement integrations.",
        image: "/assets/images/case-study/stripe.svg",
      },
    ],
    },
    Details: {
      title: "Sellsmart",
      theme: [220, 70, 110],
      sections: [
        {
          heading: "Sellsmart's sales reps were responsible for manually routing new leads, scheduling foll",
          description: "Sellsmart's sales reps were responsible for manually routing new leads, scheduling follow ups, and updating pipeline stages, a workload that grew unevenly as lead volume spiked. Leads that weren't followed up on quickly often went cold, and pipeline data frequently fell out of date as reps focused on active deals instead of administrative updates.",
          image: "/assets/images/case-study/sellsMart1.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte introduced autonomous agents to handle the operational side of Sellsmart's sales process.",
          image: "/assets/images/case-study/sellsMart1.png",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "validatr",
    introSection: {
      title: "Validatr",
      description: "Every founder believes in their idea, but belief isn't the same as validation. Validatr.io approached eForte to build a platform that could guide startups and businesses through structured market validation and market research, producing polished report style documents founders could use directly in business plans and investor conversations.",
      image: "/assets/images/case-study/Validatr.png",
      link: "/case-studies/validatr",
      theme: [35, 95, 75],
    },
    technologySection: {
      theme: [35, 95, 75],
      frontEnd: [
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
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
      {
        name: "MongoDB",
        info: "Document database designed for scalability and flexible schemas.",
        image: "/assets/images/case-study/mongodb.svg",
      },
    ],
      Others: [
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
        name: "Firebase",
        info: "Realtime data, auth, and push notification infrastructure.",
        image: "/assets/images/case-study/firebase.svg",
      },
    ],
    },
    Details: {
      title: "Validatr",
      theme: [35, 95, 75],
      sections: [
        {
          heading: "Market validation and market research are typically slow, expensive, and require specia",
          description: "Market validation and market research are typically slow, expensive, and require specialized expertise most early stage founders don't have. Startups often skip this step entirely, or pay significant sums for consulting reports, simply because there was no accessible, self serve way to do rigorous validation on their own.",
          image: "/assets/images/case-study/validatr1.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte built Validatr around a simple idea: replace expensive consulting engagements with a guided, intuitive digital experience that still produces professional grade output.",
          image: "/assets/images/case-study/validatr1.png",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "tachignite",
    introSection: {
      title: "TachIgnite",
      description: "TachIgnite is a Day Zero startup accelerator that partnered with eForte in 2025 to strengthen its talent pipeline and deliver its flagship startup contest.",
      image: "/assets/images/industry/accelerators-1.jpg",
      link: "/case-studies/tachignite",
      theme: [1, 72, 90],
    },
    technologySection: {
      theme: [1, 72, 90],
      frontEnd: [
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
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
      {
        name: "MongoDB",
        info: "Document database designed for scalability and flexible schemas.",
        image: "/assets/images/case-study/mongodb.svg",
      },
    ],
      Others: [
      {
        name: "Docker",
        info: "Portable environments for consistent deployments across systems.",
        image: "/assets/images/case-study/docker.svg",
      },
      {
        name: "Jenkins",
        info: "CI/CD automation for reliable build and release pipelines.",
        image: "/assets/images/case-study/jenkins.svg",
      },
      {
        name: "Expo",
        info: "Accelerated React Native delivery with managed builds and OTA updates.",
        image: "/assets/images/case-study/expo.svg",
      },
    ],
    },
    Details: {
      title: "TachIgnite",
      theme: [1, 72, 90],
      sections: [
        {
          heading: "As a Day Zero accelerator, TachIgnite needed to support early stage founders who requir",
          description: "As a Day Zero accelerator, TachIgnite needed to support early stage founders who required rapid prototyping and validation of their ideas, while also running a flagship startup contest that could scale to serve a growing founder community. Doing both well required technical expertise and infrastructure that TachIgnite's internal team alone could not easily provide.",
          image: "/assets/images/industry/accelerators-1.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte supported TachIgnite by providing AI and engineering expertise, enabling rapid prototyping and validation, and supporting early stage founders with scalable technology foundations.",
          image: "/assets/images/industry/accelerators-1.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "dostpay",
    introSection: {
      title: "Dostpay",
      description: "Dostpay is a mobile based digital banking payments platform designed to integrate with a bank's core banking systems, giving end users the power of digital banking in a flexible, branded experience. As transaction volume grew, keeping the platform compliant and secure without slowing down user experience became a growing challenge.",
      image: "/assets/images/case-study/Dostpay-banner.png",
      link: "/case-studies/dostpay",
      theme: [72, 40, 150],
    },
    technologySection: {
      theme: [72, 40, 150],
      frontEnd: [
      {
        name: "React Native",
        info: "Cross-platform iOS and Android apps from a shared codebase.",
        image: "/assets/images/case-study/react-native.svg",
      },
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
        name: "Redux",
        info: "Predictable client state management for complex application flows.",
        image: "/assets/images/case-study/redux.svg",
      },
    ],
      BackEnd: [
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
        name: "Stripe",
        info: "Secure payment processing and settlement integrations.",
        image: "/assets/images/case-study/stripe.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
      {
        name: "Docker",
        info: "Portable environments for consistent deployments across systems.",
        image: "/assets/images/case-study/docker.svg",
      },
      {
        name: "Firebase",
        info: "Realtime data, auth, and push notification infrastructure.",
        image: "/assets/images/case-study/firebase.svg",
      },
      {
        name: "Jenkins",
        info: "CI/CD automation for reliable build and release pipelines.",
        image: "/assets/images/case-study/jenkins.svg",
      },
    ],
    },
    Details: {
      title: "Dostpay",
      theme: [72, 40, 150],
      sections: [
        {
          heading: "Dostpay's integration with core banking systems meant transaction data flowed in from m",
          description: "Dostpay's integration with core banking systems meant transaction data flowed in from multiple sources, but compliance checks were performed as periodic batch reviews rather than continuously. This created a lag between when a risky transaction occurred and when it was actually flagged for review.",
          image: "/assets/images/case-study/Dostpay1.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte helped Dostpay rebuild its compliance and risk infrastructure around continuous, automated monitoring.",
          image: "/assets/images/case-study/Dostpay1.png",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "emerge-forward",
    introSection: {
      title: "Emerge Forward",
      description: "Emerge came to eForte with a mission driven idea: build a platform to train youth in the soft skills that matter for real world success, skills rarely covered by traditional academic curricula. The vision combined structured lessons, testing and grading, a knowledge library, and a professional profile system to help participants carry what they learned into their careers.",
      image: "/assets/images/case-study/emerge-banner.png",
      link: "/case-studies/emerge-forward",
      theme: [211, 72, 84],
    },
    technologySection: {
      theme: [211, 72, 84],
      frontEnd: [
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
        name: "HTML",
        info: "Semantic markup used to structure content across web experiences.",
        image: "/assets/images/case-study/html.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Emerge Forward",
      theme: [211, 72, 84],
      sections: [
        {
          heading: "Soft skills, communication, collaboration, adaptability, are hard to teach and even har",
          description: "Soft skills, communication, collaboration, adaptability, are hard to teach and even harder to measure. Emerge needed a platform that could deliver structured lessons in both online and in person formats, actually test whether participants absorbed the material, and then help those participants translate what they learned into something tangible for their professional futures.",
          image: "/assets/images/case-study/emerge1.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte built Emerge Forward as a complete learning ecosystem spanning lessons, assessment, and professional identity.",
          image: "/assets/images/case-study/emerge1.png",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "komb",
    introSection: {
      title: "Komb",
      description: "Salons run on tight schedules, personal relationships, and constant day to day operations, from booking appointments to managing inventory. Komb, a UK based startup, saw a gap in the market for software built specifically around how salons actually operate, and partnered with eForte to bring that vision to life across web and mobile.",
      image: "/assets/images/case-study/komb-banner.png",
      link: "/case-studies/komb",
      theme: [110, 160, 70],
    },
    technologySection: {
      theme: [110, 160, 70],
      frontEnd: [
      {
        name: "React Native",
        info: "Cross-platform iOS and Android apps from a shared codebase.",
        image: "/assets/images/case-study/react-native.svg",
      },
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
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "Firebase",
        info: "Realtime data, auth, and push notification infrastructure.",
        image: "/assets/images/case-study/firebase.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
      {
        name: "MongoDB",
        info: "Document database designed for scalability and flexible schemas.",
        image: "/assets/images/case-study/mongodb.svg",
      },
    ],
      Others: [
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
        name: "Cloudinary",
        info: "Media management for optimized image and video delivery.",
        image: "/assets/images/case-study/cloudinary.svg",
      },
    ],
    },
    Details: {
      title: "Komb",
      theme: [110, 160, 70],
      sections: [
        {
          heading: "Salon owners were managing appointments, client records, staff schedules, and inventory",
          description: "Salon owners were managing appointments, client records, staff schedules, and inventory through a patchwork of manual processes and disconnected tools. Clients, meanwhile, had no easy way to book, reschedule, or discover offers across the salons they used. Komb needed a single, user friendly system that worked for two very different audiences at once: busy salon staff who needed simplicity, and clients who wanted a modern booking experience.",
          image: "/assets/images/case-study/komb1.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte built Komb as a connected ecosystem spanning a client mobile app, a salon owner and staff experience, and a Super Admin panel overseeing the whole network.",
          image: "/assets/images/case-study/komb1.png",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "food-cast",
    introSection: {
      title: "FoodCast",
      description: "FoodCast: Helping Families Forecast Their Food Supply During COVID 19",
      image: "/assets/images/case-study/Food-castbanner.png",
      link: "/case-studies/food-cast",
      theme: [200, 110, 50],
    },
    technologySection: {
      theme: [200, 110, 50],
      frontEnd: [
      {
        name: "React Native",
        info: "Cross-platform iOS and Android apps from a shared codebase.",
        image: "/assets/images/case-study/react-native.svg",
      },
      {
        name: "React",
        info: "Component-based UI for scalable web client applications.",
        image: "/assets/images/case-study/reactIcon.svg",
      },
      {
        name: "Expo",
        info: "Accelerated React Native delivery with managed builds and OTA updates.",
        image: "/assets/images/case-study/expo.svg",
      },
      {
        name: "Redux",
        info: "Predictable client state management for complex application flows.",
        image: "/assets/images/case-study/redux.svg",
      },
    ],
      BackEnd: [
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
        name: "Firebase",
        info: "Realtime data, auth, and push notification infrastructure.",
        image: "/assets/images/case-study/firebase.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
      {
        name: "MongoDB",
        info: "Document database designed for scalability and flexible schemas.",
        image: "/assets/images/case-study/mongodb.svg",
      },
    ],
      Others: [
      {
        name: "Docker",
        info: "Portable environments for consistent deployments across systems.",
        image: "/assets/images/case-study/docker.svg",
      },
      {
        name: "Jenkins",
        info: "CI/CD automation for reliable build and release pipelines.",
        image: "/assets/images/case-study/jenkins.svg",
      },
      {
        name: "Cloudinary",
        info: "Media management for optimized image and video delivery.",
        image: "/assets/images/case-study/cloudinary.svg",
      },
    ],
    },
    Details: {
      title: "FoodCast",
      theme: [200, 110, 50],
      sections: [
        {
          heading: "Early in the pandemic, households faced real uncertainty about food supply, leading to ",
          description: "Early in the pandemic, households faced real uncertainty about food supply, leading to panic buying, hoarding, and wasted trips to increasingly crowded stores. StrateX.nl wanted to do their part to bring down that chaos, but needed a technology partner who could turn the idea into a working app quickly, without compromising on accuracy or usability.",
          image: "/assets/images/case-study/foodCast1.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte fully supported StrateX.nl's CSR vision, building FoodCast from the ground up as a cross platform mobile experience.",
          image: "/assets/images/case-study/foodCast1.png",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "crowd-check",
    introSection: {
      title: "Crowdcheck",
      description: "During COVID 19, one of the simplest but most valuable pieces of information people needed was also one of the hardest to find: how crowded is this place right now? Crowdcheck was built to answer exactly that question, giving users a real time, map based view of crowd density at locations around them.",
      image: "/assets/images/case-study/CrowdCheck-bannner.png",
      link: "/case-studies/crowd-check",
      theme: [20, 110, 105],
    },
    technologySection: {
      theme: [20, 110, 105],
      frontEnd: [
      {
        name: "Kotlin",
        info: "Native Android development with modern Jetpack architecture.",
        image: "/assets/images/case-study/Kotlin.svg",
      },
      {
        name: "Swift",
        info: "Native iOS development for performant Apple platforms.",
        image: "/assets/images/case-study/Swift.svg",
      },
      {
        name: "React",
        info: "Component-based UI for scalable web client applications.",
        image: "/assets/images/case-study/reactIcon.svg",
      },
      {
        name: "Redux",
        info: "Predictable client state management for complex application flows.",
        image: "/assets/images/case-study/redux.svg",
      },
    ],
      BackEnd: [
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
        name: "Firebase",
        info: "Realtime data, auth, and push notification infrastructure.",
        image: "/assets/images/case-study/firebase.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
      {
        name: "MongoDB",
        info: "Document database designed for scalability and flexible schemas.",
        image: "/assets/images/case-study/mongodb.svg",
      },
      {
        name: "SQLite",
        info: "Embedded local storage for offline-capable mobile clients.",
        image: "/assets/images/case-study/sqlite.svg",
      },
    ],
      Others: [
      {
        name: "Docker",
        info: "Portable environments for consistent deployments across systems.",
        image: "/assets/images/case-study/docker.svg",
      },
      {
        name: "Jenkins",
        info: "CI/CD automation for reliable build and release pipelines.",
        image: "/assets/images/case-study/jenkins.svg",
      },
      {
        name: "Cloudinary",
        info: "Media management for optimized image and video delivery.",
        image: "/assets/images/case-study/cloudinary.svg",
      },
    ],
    },
    Details: {
      title: "Crowdcheck",
      theme: [20, 110, 105],
      sections: [
        {
          heading: "Public health guidance during the pandemic emphasized avoiding crowded spaces, but ther",
          description: "Public health guidance during the pandemic emphasized avoiding crowded spaces, but there was no simple, at a glance way for someone to know how busy a specific location actually was before heading out. Existing map apps showed directions and reviews, not real time crowd conditions.",
          image: "/assets/images/case-study/crowd_check2.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte built Crowdcheck as a focused, purpose built app centered entirely on making crowd data usable in real time.",
          image: "/assets/images/case-study/crowd_check2.png",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "instapp-deal",
    introSection: {
      title: "InstApp Deal",
      description: "InstApp Deal is a mobile application that lets users search for and redeem coupons at participating retailers, built around word of mouth style discovery and push notifications for new deals. As the number of participating retailers and deals grew, helping users find offers actually relevant to them became more difficult.",
      image: "/assets/images/case-study/InstApp-Dealbanner.png",
      link: "/case-studies/instapp-deal",
      theme: [90, 40, 120],
    },
    technologySection: {
      theme: [90, 40, 120],
      frontEnd: [
      {
        name: "React Native",
        info: "Cross-platform iOS and Android apps from a shared codebase.",
        image: "/assets/images/case-study/react-native.svg",
      },
      {
        name: "React",
        info: "Component-based UI for scalable web client applications.",
        image: "/assets/images/case-study/reactIcon.svg",
      },
      {
        name: "Expo",
        info: "Accelerated React Native delivery with managed builds and OTA updates.",
        image: "/assets/images/case-study/expo.svg",
      },
      {
        name: "Redux",
        info: "Predictable client state management for complex application flows.",
        image: "/assets/images/case-study/redux.svg",
      },
    ],
      BackEnd: [
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
        name: "Firebase",
        info: "Realtime data, auth, and push notification infrastructure.",
        image: "/assets/images/case-study/firebase.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
      {
        name: "MongoDB",
        info: "Document database designed for scalability and flexible schemas.",
        image: "/assets/images/case-study/mongodb.svg",
      },
    ],
      Others: [
      {
        name: "Docker",
        info: "Portable environments for consistent deployments across systems.",
        image: "/assets/images/case-study/docker.svg",
      },
      {
        name: "Jenkins",
        info: "CI/CD automation for reliable build and release pipelines.",
        image: "/assets/images/case-study/jenkins.svg",
      },
      {
        name: "Cloudinary",
        info: "Media management for optimized image and video delivery.",
        image: "/assets/images/case-study/cloudinary.svg",
      },
    ],
    },
    Details: {
      title: "InstApp Deal",
      theme: [90, 40, 120],
      sections: [
        {
          heading: "InstApp Deal's original notification system pushed new deals to all users in a category",
          description: "InstApp Deal's original notification system pushed new deals to all users in a category or location rather than tailoring offers to individual shopping habits. As the volume of available deals grew, users increasingly received notifications for offers irrelevant to them, leading many to ignore push notifications altogether.",
          image: "/assets/images/case-study/InstApp-Dealbanner.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte helped InstApp Deal personalize deal discovery based on each user's actual redemption behavior.",
          image: "/assets/images/case-study/InstApp-Dealbanner.png",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "meridian-pay",
    introSection: {
      title: "Meridian Pay",
      description: "Meridian Pay is a digital payments provider processing millions of consumer and merchant transactions every month. As transaction volume grew, so did the complexity of detecting fraud, resolving disputes, and keeping settlement operations running without delay.",
      image: "/assets/images/industry/banking-bg-hero.jpg",
      link: "/case-studies/meridian-pay",
      theme: [20, 90, 140],
    },
    technologySection: {
      theme: [20, 90, 140],
      frontEnd: [
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
        name: "HTML",
        info: "Semantic markup used to structure content across web experiences.",
        image: "/assets/images/case-study/html.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "Stripe",
        info: "Secure payment processing and settlement integrations.",
        image: "/assets/images/case-study/stripe.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Meridian Pay",
      theme: [20, 90, 140],
      sections: [
        {
          heading: "Before working with eForte, Meridian Pay relied on a patchwork of legacy fraud rules an",
          description: "Before working with eForte, Meridian Pay relied on a patchwork of legacy fraud rules and manual review queues that couldn't keep pace with transaction growth. Suspicious transactions were often flagged hours after the fact, by which point the damage to customers and merchants was already done.",
          image: "/assets/images/industry/banking-bg-hero.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "Recognizing the scale of Meridian Pay's data and risk challenges, eForte designed a solution built around real time intelligence and autonomous response.",
          image: "/assets/images/industry/banking-bg-hero.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "iberian-ventures",
    introSection: {
      title: "Iberian Ventures",
      description: "Iberian Ventures is a mid sized M&A advisory firm based in Lisbon, Portugal, managing more than 30 active buy side mandates and tracking over 500 potential acquisition targets at any given time. As mandate volume grew, the firm's analysts found themselves buried in administrative work instead of advisory work.",
      image: "/assets/images/industry/our-work-2.webp",
      link: "/case-studies/iberian-ventures",
      theme: [120, 85, 55],
    },
    technologySection: {
      theme: [120, 85, 55],
      frontEnd: [
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
        name: "HTML",
        info: "Semantic markup used to structure content across web experiences.",
        image: "/assets/images/case-study/html.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Iberian Ventures",
      theme: [120, 85, 55],
      sections: [
        {
          heading: "Iberian Ventures' analysts spent 70 percent of their time on administrative tasks, revi",
          description: "Iberian Ventures' analysts spent 70 percent of their time on administrative tasks, reviewing buy side requirements, searching databases for matching sell side opportunities, scoring compatibility, creating presentations, coordinating communications, and drafting agreements. This inefficiency limited how many deals the firm could pursue at once and created bottlenecks between initial match and first meeting.",
          image: "/assets/images/industry/our-work-2.webp",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte implemented a comprehensive AI automation system across the full deal lifecycle.",
          image: "/assets/images/industry/our-work-2.webp",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "globaltrade-solutions",
    introSection: {
      title: "GlobalTrade Solutions",
      description: "GlobalTrade Solutions is an international trading house managing over 1,200 annual transactions across multiple commodity categories, supported by a network of more than 350 suppliers. As transaction volume grew, the firm's trading workflow struggled to keep pace.",
      image: "/assets/images/industry/cloud.jpg",
      link: "/case-studies/globaltrade-solutions",
      theme: [25, 70, 100],
    },
    technologySection: {
      theme: [25, 70, 100],
      frontEnd: [
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
        name: "HTML",
        info: "Semantic markup used to structure content across web experiences.",
        image: "/assets/images/case-study/html.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "GlobalTrade Solutions",
      theme: [25, 70, 100],
      sections: [
        {
          heading: "GlobalTrade Solutions faced significant operational inefficiencies in its trading workflow",
          description: "GlobalTrade Solutions faced significant operational inefficiencies in its trading workflow. The team was overwhelmed by manually reviewing client requirements from emails, matching appropriate suppliers, creating quotations, and coordinating agreements and logistics and payment processes. This resulted in slow response times, missed opportunities, and frequent errors in documentation.",
          image: "/assets/images/industry/cloud.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte developed an end to end AI automation system spanning the entire trade lifecycle.",
          image: "/assets/images/industry/cloud.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "allied-insurance",
    introSection: {
      title: "Allied Insurance",
      description: "Allied Insurance is a regional insurance provider processing more than 50,000 claims annually across auto, home, and commercial lines. Its legacy claims process required extensive manual intervention at nearly every step.",
      image: "/assets/images/industry/insurance-banner.jpg",
      link: "/case-studies/allied-insurance",
      theme: [30, 70, 120],
    },
    technologySection: {
      theme: [30, 70, 120],
      frontEnd: [
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
        name: "Ant Design",
        info: "Enterprise UI components for dense operational dashboards.",
        image: "/assets/images/case-study/ant-design.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
      {
        name: "Python",
        info: "AI/ML services, forecasting models, NLP, and agentic orchestration runtimes.",
        image: "/assets/images/case-study/python.svg",
      },
      {
        name: "Node.js",
        info: "High-performance server runtime for APIs and background services.",
        image: "/assets/images/case-study/nodejs.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
      {
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
        name: "Cloudinary",
        info: "Media management for optimized image and video delivery.",
        image: "/assets/images/case-study/cloudinary.svg",
      },
    ],
    },
    Details: {
      title: "Allied Insurance",
      theme: [30, 70, 120],
      sections: [
        {
          heading: "Allied Insurance was struggling with a legacy claims processing system requiring extens",
          description: "Allied Insurance was struggling with a legacy claims processing system requiring extensive manual intervention. Claims adjusters spent 65 percent of their time inputting data, cross referencing policy information, and managing documentation rather than making substantive decisions on claims. This created a backlog of cases, extended settlement times, and reduced customer satisfaction.",
          image: "/assets/images/industry/insurance-banner.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte implemented an AI driven claims automation system spanning intake through resolution.",
          image: "/assets/images/industry/insurance-banner.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "bioresearch-labs",
    introSection: {
      title: "BioResearch Labs",
      description: "BioResearch Labs is a pharmaceutical research organization conducting multiple Phase II and III clinical trials across more than 40 global research sites. Managing data consistency and compliance across that many sites had become an increasingly heavy burden on the research team.",
      image: "/assets/images/industry/bg-portfolio.jpg",
      link: "/case-studies/bioresearch-labs",
      theme: [30, 90, 100],
    },
    technologySection: {
      theme: [30, 90, 100],
      frontEnd: [
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
        name: "Ant Design",
        info: "Enterprise UI components for dense operational dashboards.",
        image: "/assets/images/case-study/ant-design.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
      {
        name: "Python",
        info: "AI/ML services, forecasting models, NLP, and agentic orchestration runtimes.",
        image: "/assets/images/case-study/python.svg",
      },
      {
        name: "Node.js",
        info: "High-performance server runtime for APIs and background services.",
        image: "/assets/images/case-study/nodejs.svg",
      },
      {
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "BioResearch Labs",
      theme: [30, 90, 100],
      sections: [
        {
          heading: "BioResearch Labs was drowning in clinical trial data management challenges",
          description: "BioResearch Labs was drowning in clinical trial data management challenges. The research team spent more than 30 hours per week manually collecting, standardizing, validating, and reporting data from various sources. This process was not only time consuming but prone to errors, potentially compromising research integrity and regulatory compliance.",
          image: "/assets/images/industry/bg-portfolio.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte developed a comprehensive AI automation solution built around trustworthy, standardized data.",
          image: "/assets/images/industry/bg-portfolio.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "global-manufacturing-corp",
    introSection: {
      title: "Global Manufacturing Corp",
      description: "Global Manufacturing Corp is a regional insurance provider processing more than 50,000 claims annually across auto, home, and commercial lines. As invoice volume grew across disparate systems, the company's accounts payable department became increasingly strained.",
      image: "/assets/images/industry/app-modernization.jpg",
      link: "/case-studies/global-manufacturing-corp",
      theme: [50, 55, 60],
    },
    technologySection: {
      theme: [50, 55, 60],
      frontEnd: [
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
        name: "Ant Design",
        info: "Enterprise UI components for dense operational dashboards.",
        image: "/assets/images/case-study/ant-design.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
      {
        name: "Python",
        info: "AI/ML services, forecasting models, NLP, and agentic orchestration runtimes.",
        image: "/assets/images/case-study/python.svg",
      },
      {
        name: "Node.js",
        info: "High-performance server runtime for APIs and background services.",
        image: "/assets/images/case-study/nodejs.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
      {
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
        name: "Cloudinary",
        info: "Media management for optimized image and video delivery.",
        image: "/assets/images/case-study/cloudinary.svg",
      },
    ],
    },
    Details: {
      title: "Global Manufacturing Corp",
      theme: [50, 55, 60],
      sections: [
        {
          heading: "Global Manufacturing Corp's accounts payable department was struggling with fragmented ",
          description: "Global Manufacturing Corp's accounts payable department was struggling with fragmented processes, duplicate payments, missed discounts, and compliance issues. Their team of 45 AP specialists was overwhelmed by manual invoice processing across disparate systems, leading to payment delays, strained supplier relationships, and limited financial visibility.",
          image: "/assets/images/industry/app-modernization.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte implemented an AI driven claims automation system tailored to accounts payable operations.",
          image: "/assets/images/industry/app-modernization.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "altura-motors",
    introSection: {
      title: "Altura Motors",
      description: "Altura Motors designs and manufactures passenger vehicles, running engineering simulations and design reviews across multiple teams for every new model. Long design iteration cycles were slowing the company's ability to bring new vehicles to market.",
      image: "/assets/images/industry/driving-1.jpg",
      link: "/case-studies/altura-motors",
      theme: [40, 40, 45],
    },
    technologySection: {
      theme: [40, 40, 45],
      frontEnd: [
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
        name: "HTML",
        info: "Semantic markup used to structure content across web experiences.",
        image: "/assets/images/case-study/html.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Altura Motors",
      theme: [40, 40, 45],
      sections: [
        {
          heading: "Altura Motors' design process required engineers to manually hand off simulation result",
          description: "Altura Motors' design process required engineers to manually hand off simulation results between aerodynamics, structural, and safety teams, with each handoff introducing delay while the receiving team waited for the right data in the right format. Design data also lived in separate tools per discipline, making it hard to see how a change in one area affected others.",
          image: "/assets/images/industry/driving-1.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte worked with Altura Motors to automate the coordination between engineering disciplines.",
          image: "/assets/images/industry/driving-1.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "anchor-point-insurance",
    introSection: {
      title: "Anchor Point Insurance",
      description: "Anchor Point Insurance offers life and health coverage to individuals and families, processing a high volume of claims each month. As fraudulent claims grew more sophisticated, the company's existing detection methods struggled to keep up.",
      image: "/assets/images/industry/cybersecurity.jpg",
      link: "/case-studies/anchor-point-insurance",
      theme: [55, 35, 90],
    },
    technologySection: {
      theme: [55, 35, 90],
      frontEnd: [
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
        name: "HTML",
        info: "Semantic markup used to structure content across web experiences.",
        image: "/assets/images/case-study/html.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Anchor Point Insurance",
      theme: [55, 35, 90],
      sections: [
        {
          heading: "Anchor Point Insurance's fraud detection relied on static, rules based checks that flag",
          description: "Anchor Point Insurance's fraud detection relied on static, rules based checks that flagged only known fraud patterns, leaving newer and more sophisticated schemes undetected until after claims were paid. Investigators also lacked a consolidated view of claims history, making it difficult to spot connections between related fraudulent submissions.",
          image: "/assets/images/industry/cybersecurity.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte worked with Anchor Point Insurance to modernize fraud detection from the ground up.",
          image: "/assets/images/industry/cybersecurity.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "apex-shared-services",
    introSection: {
      title: "Apex Shared Services",
      description: "Apex Shared Services provides centralized finance, HR, and IT support functions to multiple business units within a large parent organization. Coordinating requests across so many internal customers had become a significant operational challenge.",
      image: "/assets/images/industry/wrappers.jpg",
      link: "/case-studies/apex-shared-services",
      theme: [30, 45, 70],
    },
    technologySection: {
      theme: [30, 45, 70],
      frontEnd: [
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
        name: "HTML",
        info: "Semantic markup used to structure content across web experiences.",
        image: "/assets/images/case-study/html.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Apex Shared Services",
      theme: [30, 45, 70],
      sections: [
        {
          heading: "Apex Shared Services fielded requests from finance, HR, and IT across dozens of interna",
          description: "Apex Shared Services fielded requests from finance, HR, and IT across dozens of internal business units, each with its own approval chains and priority levels. Requests were manually triaged and routed by service desk staff, a process that grew harder to manage as the number of supported business units increased.",
          image: "/assets/images/industry/wrappers.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte helped Apex Shared Services unify and automate request handling across all its shared service functions.",
          image: "/assets/images/industry/wrappers.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "birchwood-hospitality-group",
    introSection: {
      title: "Birchwood Hospitality Group",
      description: "Birchwood Hospitality Group manages a collection of hotels and event venues, overseeing everything from staffing to procurement across properties. Rising operational costs were squeezing margins, and leadership lacked the visibility needed to identify where savings could be found.",
      image: "/assets/images/industry/our-work-3.webp",
      link: "/case-studies/birchwood-hospitality-group",
      theme: [55, 35, 45],
    },
    technologySection: {
      theme: [55, 35, 45],
      frontEnd: [
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
        name: "HTML",
        info: "Semantic markup used to structure content across web experiences.",
        image: "/assets/images/case-study/html.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Birchwood Hospitality Group",
      theme: [55, 35, 45],
      sections: [
        {
          heading: "Birchwood Hospitality Group's properties each tracked staffing, procurement, and operat",
          description: "Birchwood Hospitality Group's properties each tracked staffing, procurement, and operating costs in their own systems, making it nearly impossible for leadership to compare cost performance across the portfolio or spot inefficiencies. Procurement decisions were made property by property, missing opportunities for group wide purchasing efficiencies.",
          image: "/assets/images/industry/our-work-3.webp",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte worked with Birchwood Hospitality Group to unify cost data and surface savings opportunities across its portfolio.",
          image: "/assets/images/industry/our-work-3.webp",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "brightwell-mutual",
    introSection: {
      title: "Brightwell Mutual",
      description: "Brightwell Mutual is a regional insurer offering home, auto, and umbrella coverage to policyholders across the country. As claims volume grew, the company's manual review process became a bottleneck that frustrated both adjusters and policyholders.",
      image: "/assets/images/industry/bg-expertise.jpg",
      link: "/case-studies/brightwell-mutual",
      theme: [40, 70, 160],
    },
    technologySection: {
      theme: [40, 70, 160],
      frontEnd: [
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
        name: "HTML",
        info: "Semantic markup used to structure content across web experiences.",
        image: "/assets/images/case-study/html.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Brightwell Mutual",
      theme: [40, 70, 160],
      sections: [
        {
          heading: "Before partnering with eForte, Brightwell Mutual's claims adjusters manually reviewed e",
          description: "Before partnering with eForte, Brightwell Mutual's claims adjusters manually reviewed every incoming claim regardless of complexity, creating a backlog that pushed simple claims to take days to resolve. Policyholder data was also scattered across separate systems for policy details, prior claims history, and communication logs.",
          image: "/assets/images/industry/bg-expertise.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte worked with Brightwell Mutual to rebuild its claims process around automation and unified data.",
          image: "/assets/images/industry/bg-expertise.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "clearpath-diabetes-care",
    introSection: {
      title: "ClearPath Diabetes Care",
      description: "ClearPath Diabetes Care provides remote monitoring and care coordination for patients managing diabetes, working closely with endocrinologists, dietitians, and care coordinators. As its patient base grew, keeping every care team member informed in real time became a growing challenge.",
      image: "/assets/images/industry/cardiex-machine.jpg",
      link: "/case-studies/clearpath-diabetes-care",
      theme: [30, 80, 120],
    },
    technologySection: {
      theme: [30, 80, 120],
      frontEnd: [
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
    ],
      BackEnd: [
      {
        name: "Python",
        info: "AI/ML services, forecasting models, NLP, and agentic orchestration runtimes.",
        image: "/assets/images/case-study/python.svg",
      },
      {
        name: "Node.js",
        info: "High-performance server runtime for APIs and background services.",
        image: "/assets/images/case-study/nodejs.svg",
      },
      {
        name: "Firebase",
        info: "Realtime data, auth, and push notification infrastructure.",
        image: "/assets/images/case-study/firebase.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "ClearPath Diabetes Care",
      theme: [30, 80, 120],
      sections: [
        {
          heading: "ClearPath Diabetes Care's patients used connected glucose monitors that generated a ste",
          description: "ClearPath Diabetes Care's patients used connected glucose monitors that generated a steady stream of data, but that data wasn't consistently reaching the right care team members in time to act on it. Endocrinologists, dietitians, and care coordinators often worked from different systems, making coordinated care difficult.",
          image: "/assets/images/industry/cardiex-machine.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte worked with ClearPath Diabetes Care to connect real time patient data directly to the people who needed to act on it.",
          image: "/assets/images/industry/cardiex-machine.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "coastal-assurance-group",
    introSection: {
      title: "Coastal Assurance Group",
      description: "Coastal Assurance Group provides commercial property and casualty insurance to businesses along the coast, where weather related risk assessment adds significant complexity to underwriting. Growing application volume was straining the company's manual underwriting process.",
      image: "/assets/images/industry/insurance-banner.jpg",
      link: "/case-studies/coastal-assurance-group",
      theme: [25, 80, 110],
    },
    technologySection: {
      theme: [25, 80, 110],
      frontEnd: [
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
        name: "Ant Design",
        info: "Enterprise UI components for dense operational dashboards.",
        image: "/assets/images/case-study/ant-design.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
      {
        name: "Python",
        info: "AI/ML services, forecasting models, NLP, and agentic orchestration runtimes.",
        image: "/assets/images/case-study/python.svg",
      },
      {
        name: "Node.js",
        info: "High-performance server runtime for APIs and background services.",
        image: "/assets/images/case-study/nodejs.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Coastal Assurance Group",
      theme: [25, 80, 110],
      sections: [
        {
          heading: "Coastal Assurance Group's underwriters manually assessed each commercial property appli",
          description: "Coastal Assurance Group's underwriters manually assessed each commercial property application by pulling data from multiple external sources, including weather risk databases, property records, and prior claims history. This process routinely took several days per application, delaying quotes and frustrating brokers.",
          image: "/assets/images/industry/insurance-banner.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte partnered with Coastal Assurance Group to build a real time underwriting platform grounded in unified data.",
          image: "/assets/images/industry/insurance-banner.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "coastline-resorts",
    introSection: {
      title: "Coastline Resorts",
      description: "Coastline Resorts operates a group of beachfront resorts offering dining, spa, and activity services alongside accommodations. Guest service requests routed manually across departments were creating delays that affected the guest experience.",
      image: "/assets/images/industry/events.jpg",
      link: "/case-studies/coastline-resorts",
      theme: [16, 55, 75],
    },
    technologySection: {
      theme: [16, 55, 75],
      frontEnd: [
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
        name: "HTML",
        info: "Semantic markup used to structure content across web experiences.",
        image: "/assets/images/case-study/html.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Coastline Resorts",
      theme: [16, 55, 75],
      sections: [
        {
          heading: "Coastline Resorts' guest requests, whether for housekeeping, dining reservations, or sp",
          description: "Coastline Resorts' guest requests, whether for housekeeping, dining reservations, or spa bookings, were phoned or logged manually and then routed by front desk staff to the relevant department. This manual routing process introduced delay, and requests occasionally got lost between departments during busy periods.",
          image: "/assets/images/industry/events.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte helped Coastline Resorts automate guest request handling from submission to resolution.",
          image: "/assets/images/industry/events.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "cobalt-digital-bank",
    introSection: {
      title: "Cobalt Digital Bank",
      description: "Cobalt Digital Bank is a fast growing challenger bank offering checking, savings, and lending products entirely through its mobile app. As its customer base expanded across regions, its data infrastructure struggled to keep up with the demands of real time banking.",
      image: "/assets/images/industry/financial-service-hero.webp",
      link: "/case-studies/cobalt-digital-bank",
      theme: [11, 61, 92],
    },
    technologySection: {
      theme: [11, 61, 92],
      frontEnd: [
      {
        name: "React Native",
        info: "Cross-platform iOS and Android apps from a shared codebase.",
        image: "/assets/images/case-study/react-native.svg",
      },
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
        name: "Redux",
        info: "Predictable client state management for complex application flows.",
        image: "/assets/images/case-study/redux.svg",
      },
    ],
      BackEnd: [
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
        name: "Stripe",
        info: "Secure payment processing and settlement integrations.",
        image: "/assets/images/case-study/stripe.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
      {
        name: "Docker",
        info: "Portable environments for consistent deployments across systems.",
        image: "/assets/images/case-study/docker.svg",
      },
      {
        name: "Firebase",
        info: "Realtime data, auth, and push notification infrastructure.",
        image: "/assets/images/case-study/firebase.svg",
      },
      {
        name: "Jenkins",
        info: "CI/CD automation for reliable build and release pipelines.",
        image: "/assets/images/case-study/jenkins.svg",
      },
    ],
    },
    Details: {
      title: "Cobalt Digital Bank",
      theme: [11, 61, 92],
      sections: [
        {
          heading: "Cobalt Digital Bank's customer data was spread across separate systems for onboarding, ",
          description: "Cobalt Digital Bank's customer data was spread across separate systems for onboarding, transactions, and lending, making it difficult to build a complete picture of any single customer. This fragmentation slowed down loan approvals and made regulatory reporting a slow, manual exercise.",
          image: "/assets/images/industry/financial-service-hero.webp",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte partnered with Cobalt Digital Bank to rebuild its data infrastructure around a foundation that could support real time banking at scale.",
          image: "/assets/images/industry/financial-service-hero.webp",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "crestline-bpo-group",
    introSection: {
      title: "Crestline BPO Group",
      description: "Crestline BPO Group provides outsourced transaction processing and customer administration services to clients in retail, healthcare, and financial services. High transaction volume and tight service level agreements were putting increasing pressure on manual processing teams.",
      image: "/assets/images/industry/qa.jpg",
      link: "/case-studies/crestline-bpo-group",
      theme: [50, 35, 65],
    },
    technologySection: {
      theme: [50, 35, 65],
      frontEnd: [
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
        name: "Ant Design",
        info: "Enterprise UI components for dense operational dashboards.",
        image: "/assets/images/case-study/ant-design.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
      {
        name: "Python",
        info: "AI/ML services, forecasting models, NLP, and agentic orchestration runtimes.",
        image: "/assets/images/case-study/python.svg",
      },
      {
        name: "Node.js",
        info: "High-performance server runtime for APIs and background services.",
        image: "/assets/images/case-study/nodejs.svg",
      },
      {
        name: "Stripe",
        info: "Secure payment processing and settlement integrations.",
        image: "/assets/images/case-study/stripe.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Crestline BPO Group",
      theme: [50, 35, 65],
      sections: [
        {
          heading: "Crestline BPO Group's processing teams handled high volumes of client transactions manu",
          description: "Crestline BPO Group's processing teams handled high volumes of client transactions manually, from claims administration to order processing, under strict service level agreements. As transaction volume grew, teams increasingly struggled to keep processing times within agreed SLA windows, particularly during seasonal demand spikes.",
          image: "/assets/images/industry/qa.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte worked with Crestline BPO Group to automate transaction processing and give management a clear view of SLA performance.",
          image: "/assets/images/industry/qa.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "fenwick-capital-markets",
    introSection: {
      title: "Fenwick Capital Markets",
      description: "Fenwick Capital Markets manages trading and portfolio strategy for institutional clients across equities, fixed income, and derivatives. With markets moving faster than ever, the firm needed its systems to keep pace with real time decision making.",
      image: "/assets/images/industry/banking-bg-hero.jpg",
      link: "/case-studies/fenwick-capital-markets",
      theme: [1, 72, 90],
    },
    technologySection: {
      theme: [1, 72, 90],
      frontEnd: [
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
        name: "Ant Design",
        info: "Enterprise UI components for dense operational dashboards.",
        image: "/assets/images/case-study/ant-design.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
      {
        name: "Python",
        info: "AI/ML services, forecasting models, NLP, and agentic orchestration runtimes.",
        image: "/assets/images/case-study/python.svg",
      },
      {
        name: "Node.js",
        info: "High-performance server runtime for APIs and background services.",
        image: "/assets/images/case-study/nodejs.svg",
      },
      {
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Fenwick Capital Markets",
      theme: [1, 72, 90],
      sections: [
        {
          heading: "Fenwick Capital Markets' trading desks relied on data feeds that updated on a delay, me",
          description: "Fenwick Capital Markets' trading desks relied on data feeds that updated on a delay, meaning by the time analysts saw a signal, the opportunity had often already shifted. Portfolio rebalancing was still largely a manual process, requiring analysts to recalculate exposure by hand across dozens of accounts.",
          image: "/assets/images/industry/banking-bg-hero.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte worked with Fenwick Capital Markets to modernize its trading infrastructure from the data layer up.",
          image: "/assets/images/industry/banking-bg-hero.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "frontier-energy-partners",
    introSection: {
      title: "Frontier Energy Partners",
      description: "Frontier Energy Partners manages a distributed network of energy generation and transmission assets across multiple regions. Coordinating maintenance across so many geographically dispersed assets was becoming increasingly difficult to manage manually.",
      image: "/assets/images/industry/solutions-1.jpg",
      link: "/case-studies/frontier-energy-partners",
      theme: [20, 80, 55],
    },
    technologySection: {
      theme: [20, 80, 55],
      frontEnd: [
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
        name: "Ant Design",
        info: "Enterprise UI components for dense operational dashboards.",
        image: "/assets/images/case-study/ant-design.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
      {
        name: "Python",
        info: "AI/ML services, forecasting models, NLP, and agentic orchestration runtimes.",
        image: "/assets/images/case-study/python.svg",
      },
      {
        name: "Node.js",
        info: "High-performance server runtime for APIs and background services.",
        image: "/assets/images/case-study/nodejs.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Frontier Energy Partners",
      theme: [20, 80, 55],
      sections: [
        {
          heading: "Frontier Energy Partners' assets were spread across a wide geographic area, each report",
          description: "Frontier Energy Partners' assets were spread across a wide geographic area, each reporting data to separate regional systems. This made it difficult for the central operations team to get a real time view of asset health across the entire network, and maintenance scheduling was largely reactive to reported issues rather than based on predictive signals.",
          image: "/assets/images/industry/solutions-1.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte worked with Frontier Energy Partners to unify asset data and forecast failures before they caused outages.",
          image: "/assets/images/industry/solutions-1.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "harborlight-recovery",
    introSection: {
      title: "Harborlight Recovery",
      description: "Harborlight Recovery operates a network of behavioral health and addiction recovery centers, supporting patients through multi stage treatment programs. As patient volume grew across locations, delivering consistent, personalized care plans became increasingly difficult to manage.",
      image: "/assets/images/case-study/health.webp",
      link: "/case-studies/harborlight-recovery",
      theme: [25, 95, 105],
    },
    technologySection: {
      theme: [25, 95, 105],
      frontEnd: [
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
        name: "HTML",
        info: "Semantic markup used to structure content across web experiences.",
        image: "/assets/images/case-study/html.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Harborlight Recovery",
      theme: [25, 95, 105],
      sections: [
        {
          heading: "Harborlight Recovery's patient records were split across separate systems for intake, c",
          description: "Harborlight Recovery's patient records were split across separate systems for intake, clinical notes, and medication management, making it hard for clinicians to see a patient's full treatment history at a glance. Care plans were largely standardized by program type rather than tailored to each patient's specific history and progress.",
          image: "/assets/images/case-study/health.webp",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte partnered with Harborlight Recovery to unify patient data and personalize care planning across the network.",
          image: "/assets/images/case-study/health.webp",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "ironclad-manufacturing",
    introSection: {
      title: "Ironclad Manufacturing",
      description: "Ironclad Manufacturing operates multiple heavy equipment production facilities, running machinery around the clock to meet demand. Unplanned equipment downtime was costing the company significant production time and revenue.",
      image: "/assets/images/industry/monitoring.jpg",
      link: "/case-studies/ironclad-manufacturing",
      theme: [70, 50, 30],
    },
    technologySection: {
      theme: [70, 50, 30],
      frontEnd: [
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
        name: "Ant Design",
        info: "Enterprise UI components for dense operational dashboards.",
        image: "/assets/images/case-study/ant-design.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
      {
        name: "Python",
        info: "AI/ML services, forecasting models, NLP, and agentic orchestration runtimes.",
        image: "/assets/images/case-study/python.svg",
      },
      {
        name: "Node.js",
        info: "High-performance server runtime for APIs and background services.",
        image: "/assets/images/case-study/nodejs.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Ironclad Manufacturing",
      theme: [70, 50, 30],
      sections: [
        {
          heading: "Ironclad Manufacturing's equipment generated sensor data across dozens of machines per ",
          description: "Ironclad Manufacturing's equipment generated sensor data across dozens of machines per facility, but that data lived in isolated systems tied to each machine's manufacturer, making plant wide visibility nearly impossible. Maintenance teams typically only learned about a developing problem when a machine had already failed or was showing obvious signs of distress.",
          image: "/assets/images/industry/monitoring.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte worked with Ironclad Manufacturing to unify equipment data and predict failures before they occurred.",
          image: "/assets/images/industry/monitoring.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "lantern-hotel-collective",
    introSection: {
      title: "Lantern Hotel Collective",
      description: "Lantern Hotel Collective operates a portfolio of boutique hotels across multiple markets, aiming to give every guest a personalized stay regardless of location. As the portfolio grew, delivering that consistency without a much larger staff became a real challenge.",
      image: "/assets/images/industry/media-entertainment-bg.jpg",
      link: "/case-studies/lantern-hotel-collective",
      theme: [70, 35, 55],
    },
    technologySection: {
      theme: [70, 35, 55],
      frontEnd: [
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
        name: "HTML",
        info: "Semantic markup used to structure content across web experiences.",
        image: "/assets/images/case-study/html.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Lantern Hotel Collective",
      theme: [70, 35, 55],
      sections: [
        {
          heading: "Lantern Hotel Collective's guest data, including preferences, past stays, and special r",
          description: "Lantern Hotel Collective's guest data, including preferences, past stays, and special requests, was stored separately at each property, so guests who visited multiple locations had to reintroduce themselves every time. Front desk and concierge staff had no easy way to anticipate guest preferences ahead of arrival.",
          image: "/assets/images/industry/media-entertainment-bg.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte partnered with Lantern Hotel Collective to unify guest data and personalize the experience across every property.",
          image: "/assets/images/industry/media-entertainment-bg.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "meridian-outsourcing-solutions",
    introSection: {
      title: "Meridian Outsourcing Solutions",
      description: "Meridian Outsourcing Solutions provides back office processing services, including data entry, document processing, and customer support administration, to enterprise clients across industries. As client volume grew, manual processing was becoming a bottleneck to scaling the business.",
      image: "/assets/images/industry/baas.jpg",
      link: "/case-studies/meridian-outsourcing-solutions",
      theme: [25, 40, 70],
    },
    technologySection: {
      theme: [25, 40, 70],
      frontEnd: [
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
        name: "HTML",
        info: "Semantic markup used to structure content across web experiences.",
        image: "/assets/images/case-study/html.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Meridian Outsourcing Solutions",
      theme: [25, 40, 70],
      sections: [
        {
          heading: "Meridian Outsourcing Solutions' processing teams manually reviewed and entered data fro",
          description: "Meridian Outsourcing Solutions' processing teams manually reviewed and entered data from client documents, a labor intensive process that scaled linearly with client volume. As new clients came on board, the company found itself needing to hire proportionally just to keep pace with processing demand.",
          image: "/assets/images/industry/baas.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte worked with Meridian Outsourcing Solutions to automate document processing and unify operational data.",
          image: "/assets/images/industry/baas.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "pulsewell-fitness",
    introSection: {
      title: "PulseWell Fitness",
      description: "PulseWell Fitness operates a chain of health and wellness clubs offering fitness coaching, nutrition guidance, and recovery services to members nationwide. As membership grew, delivering genuinely personalized wellness plans became difficult without more scalable tools.",
      image: "/assets/images/case-study/health.webp",
      link: "/case-studies/pulsewell-fitness",
      theme: [15, 110, 100],
    },
    technologySection: {
      theme: [15, 110, 100],
      frontEnd: [
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
    ],
      BackEnd: [
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
        name: "Firebase",
        info: "Realtime data, auth, and push notification infrastructure.",
        image: "/assets/images/case-study/firebase.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
      {
        name: "MongoDB",
        info: "Document database designed for scalability and flexible schemas.",
        image: "/assets/images/case-study/mongodb.svg",
      },
    ],
      Others: [
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
        name: "Cloudinary",
        info: "Media management for optimized image and video delivery.",
        image: "/assets/images/case-study/cloudinary.svg",
      },
    ],
    },
    Details: {
      title: "PulseWell Fitness",
      theme: [15, 110, 100],
      sections: [
        {
          heading: "PulseWell Fitness's coaches relied on generic program templates that were only lightly ",
          description: "PulseWell Fitness's coaches relied on generic program templates that were only lightly adjusted per member, since building a truly individualized plan for every member manually wasn't feasible at scale. Member activity data from wearables, class check ins, and nutrition logs also lived in separate systems, making it hard for coaches to see the full picture of a member's progress.",
          image: "/assets/images/case-study/health.webp",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte helped PulseWell Fitness build a platform that could personalize wellness guidance without adding coaching headcount.",
          image: "/assets/images/case-study/health.webp",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "ridgeline-auto-group",
    introSection: {
      title: "Ridgeline Auto Group",
      description: "Ridgeline Auto Group operates a network of dealerships selling and servicing vehicles across multiple brands. Each dealership's sales, service, and inventory data lived in its own system, making it difficult for group leadership to get a consolidated view of the business.",
      image: "/assets/images/industry/driving-3.jpg",
      link: "/case-studies/ridgeline-auto-group",
      theme: [45, 45, 50],
    },
    technologySection: {
      theme: [45, 45, 50],
      frontEnd: [
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
        name: "HTML",
        info: "Semantic markup used to structure content across web experiences.",
        image: "/assets/images/case-study/html.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
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
        name: "GraphQL",
        info: "Flexible query layer for efficient, client-driven data fetching.",
        image: "/assets/images/case-study/graphql.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Ridgeline Auto Group",
      theme: [45, 45, 50],
      sections: [
        {
          heading: "Ridgeline Auto Group's dealerships each ran their own dealership management system, mea",
          description: "Ridgeline Auto Group's dealerships each ran their own dealership management system, meaning inventory levels, sales performance, and service bookings couldn't be compared or coordinated across locations. This made it hard for group leadership to know where to shift inventory or staff to meet demand.",
          image: "/assets/images/industry/driving-3.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte worked with Ridgeline Auto Group to unify data across its dealership network and automate key operational processes.",
          image: "/assets/images/industry/driving-3.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "summit-steel-works",
    introSection: {
      title: "Summit Steel Works",
      description: "Summit Steel Works operates steel production facilities that convert raw materials into finished products through a multi stage process. Inconsistent yield across production runs was eating into margins and complicating capacity planning.",
      image: "/assets/images/industry/working.jpg",
      link: "/case-studies/summit-steel-works",
      theme: [55, 45, 35],
    },
    technologySection: {
      theme: [55, 45, 35],
      frontEnd: [
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
        name: "Ant Design",
        info: "Enterprise UI components for dense operational dashboards.",
        image: "/assets/images/case-study/ant-design.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
      {
        name: "Python",
        info: "AI/ML services, forecasting models, NLP, and agentic orchestration runtimes.",
        image: "/assets/images/case-study/python.svg",
      },
      {
        name: "Node.js",
        info: "High-performance server runtime for APIs and background services.",
        image: "/assets/images/case-study/nodejs.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Summit Steel Works",
      theme: [55, 45, 35],
      sections: [
        {
          heading: "Summit Steel Works' production process involved dozens of variables, from raw material ",
          description: "Summit Steel Works' production process involved dozens of variables, from raw material composition to furnace temperature and timing, but data on these variables was captured separately at each production stage. This made it difficult to understand which combinations of factors led to higher or lower yield on any given run.",
          image: "/assets/images/industry/working.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte partnered with Summit Steel Works to unify production data and model the factors that drive yield.",
          image: "/assets/images/industry/working.jpg",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "vantage-mobility",
    introSection: {
      title: "Vantage Mobility",
      description: "Vantage Mobility manages a large commercial vehicle fleet providing logistics and delivery services across multiple regions. Coordinating vehicle assignments, maintenance windows, and driver schedules manually was becoming a growing operational burden.",
      image: "/assets/images/industry/driving-2.jpg",
      link: "/case-studies/vantage-mobility",
      theme: [35, 40, 50],
    },
    technologySection: {
      theme: [35, 40, 50],
      frontEnd: [
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
        name: "Ant Design",
        info: "Enterprise UI components for dense operational dashboards.",
        image: "/assets/images/case-study/ant-design.svg",
      },
      {
        name: "SCSS",
        info: "Maintainable stylesheets with variables, nesting, and mixins.",
        image: "/assets/images/case-study/sass.svg",
      },
    ],
      BackEnd: [
      {
        name: "Python",
        info: "AI/ML services, forecasting models, NLP, and agentic orchestration runtimes.",
        image: "/assets/images/case-study/python.svg",
      },
      {
        name: "Node.js",
        info: "High-performance server runtime for APIs and background services.",
        image: "/assets/images/case-study/nodejs.svg",
      },
      {
        name: "AWS",
        info: "Cloud infrastructure for compute, storage, and managed services.",
        image: "/assets/images/case-study/aws.svg",
      },
    ],
      Database: [
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
    ],
      Others: [
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
    ],
    },
    Details: {
      title: "Vantage Mobility",
      theme: [35, 40, 50],
      sections: [
        {
          heading: "Vantage Mobility's dispatchers manually assigned vehicles and drivers to routes each da",
          description: "Vantage Mobility's dispatchers manually assigned vehicles and drivers to routes each day, juggling maintenance windows, driver availability, and delivery deadlines by hand. As the fleet grew, this manual coordination increasingly resulted in scheduling conflicts, underutilized vehicles, and last minute scrambles when a vehicle needed unplanned maintenance.",
          image: "/assets/images/industry/driving-2.jpg",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte helped Vantage Mobility automate fleet scheduling around a unified, real time view of its operations.",
          image: "/assets/images/industry/driving-2.jpg",
          format: "right",
        },
      ],
    },
  },
];
