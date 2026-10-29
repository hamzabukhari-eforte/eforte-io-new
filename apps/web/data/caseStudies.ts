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
      image: "/assets/images/case-study/new-images/krank/krank-main.png",
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
          image: "/assets/images/case-study/new-images/krank/krank-main.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte built Krank as a full web and mobile ecosystem, giving each company its own private network to list machinery for sale, rent, or auction, while still enabling social style engagement around news, posts, and listings.",
          image: "/assets/images/case-study/new-images/krank/krank2.png",
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
      image: "/assets/images/case-study/new-images/oddysee/oddysee-main.png",
      link: "/case-studies/oddysee",
      theme: [3, 40, 65],
    },
    technologySection: {
      theme: [3, 40, 65],
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
      theme: [3, 40, 65],
      sections: [
        {
          heading: "Licensing processes in heavily regulated industries, particularly cannabis licensing at",
          description: "Licensing processes in heavily regulated industries, particularly cannabis licensing at the state level, require applicants to produce dense, precise, and jurisdiction specific documentation. Getting this wrong, or simply getting it done too slowly, can cost applicants their window to enter a market. Oddysee's clients needed a way to produce accurate documentation, business plans, and financial forecasts without starting from a blank page every time.",
          image: "/assets/images/case-study/new-images/oddysee/oddysee-main.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte built Oddysee as an integrated documentation, planning, and project management platform centered on one core idea: nobody should have to write a licensing application from scratch.",
          image: "/assets/images/case-study/new-images/oddysee/oddysee2.png",
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
      image: "/assets/images/case-study/new-images/investment-market/investment-Markets-Main.png",
      link: "/case-studies/investment-markets",
      theme: [156, 3, 0],
    },
    technologySection: {
      theme: [156, 3, 0],
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
      theme: [156, 3, 0],
      sections: [
        {
          heading: "High net worth investors and companies seeking capital have traditionally relied on per",
          description: "High net worth investors and companies seeking capital have traditionally relied on personal networks, brokers, or fragmented platforms to find each other. InvestmentMarkets wanted to remove that friction entirely, giving investors direct access to a wide range of vetted opportunities in one place, personalized and free to use.",
          image: "/assets/images/case-study/new-images/investment-market/investment-Markets-Main.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte matched InvestmentMarkets' ambition with a PWA first engineering approach and rigorous documentation discipline.",
          image: "/assets/images/case-study/new-images/investment-market/imHomePage.png",
          format: "right",
        },
      ],
    },
  },
  {
    slug: "prism",
    introSection: {
      title: "Prism",
      description: "Retailers live and die by their ability to anticipate demand, but seasonal effects, holidays, and unpredictable outliers make accurate forecasting genuinely hard. PRISM was built to solve exactly that problem: a trends forecasting platform with dashboards, API integrations, and interactive charts designed to handle strong seasonal patterns and messy real-world data.",
      image: "/assets/final-images/case-studies/prism/hero.png",
      link: "/case-studies/prism",
      theme: [114, 72, 179],
    },
    technologySection: {
      theme: [114, 72, 179],
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
      theme: [114, 72, 179],
      sections: [
        {
          heading: "Retail demand doesn't move in a straight line",
          description: "Retail demand doesn't move in a straight line. It shifts with the seasons, spikes around holidays, and gets thrown off by one off outlier events that can badly skew a naive forecast. PRISM's client needed a forecasting engine that could account for all of this at once: yearly, weekly, and daily seasonality, holiday effects, and enough historical data to generate genuinely reliable predictions.",
          image: "/assets/final-images/case-studies/prism/screen-2.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte built PRISM as a full product stack: forecasting services wired into user and admin dashboards, interactive charts, and third-party API integrations so merchandising and ops teams could act on predictions without leaving the app.",
          image: "/assets/final-images/case-studies/prism/screen-3.png",
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
      image: "/assets/images/case-study/new-images/scheduling-engine/scheduling-main.png",
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
          image: "/assets/images/case-study/new-images/scheduling-engine/scheduling-main.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte built the Scheduling Engine as a configurable automation platform designed from the start to serve multiple client verticals through StrateX.",
          image: "/assets/images/case-study/new-images/scheduling-engine/scheduling2.png",
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
      image: "/assets/images/case-study/new-images/sellsmart/sellsMart-main.png",
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
          image: "/assets/images/case-study/new-images/sellsmart/sellsMart-main.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte introduced autonomous agents to handle the operational side of Sellsmart's sales process.",
          image: "/assets/images/case-study/new-images/sellsmart/sellsMart2.png",
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
      image: "/assets/images/case-study/new-images/validatr/validatr-main.png",
      link: "/case-studies/validatr",
      theme: [55, 55, 206],
    },
    technologySection: {
      theme: [55, 55, 206],
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
      theme: [55, 55, 206],
      sections: [
        {
          heading: "Market validation and market research are typically slow, expensive, and require specia",
          description: "Market validation and market research are typically slow, expensive, and require specialized expertise most early stage founders don't have. Startups often skip this step entirely, or pay significant sums for consulting reports, simply because there was no accessible, self serve way to do rigorous validation on their own.",
          image: "/assets/images/case-study/new-images/validatr/validatr-main.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte built Validatr around a simple idea: replace expensive consulting engagements with a guided, intuitive digital experience that still produces professional grade output.",
          image: "/assets/images/case-study/new-images/validatr/validatr2.png",
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
      image: "/assets/images/case-study/webp/tachignite/image-1.webp",
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
          image: "/assets/images/case-study/webp/tachignite/image-1.webp",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte supported TachIgnite by providing AI and engineering expertise, enabling rapid prototyping and validation, and supporting early stage founders with scalable technology foundations.",
          image: "/assets/images/case-study/webp/tachignite/image-2.webp",
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
      image: "/assets/images/case-study/new-images/dostpay/Dostpay1.png",
      link: "/case-studies/dostpay",
      theme: [1, 44, 127],
    },
    technologySection: {
      theme: [1, 44, 127],
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
      theme: [1, 44, 127],
      sections: [
        {
          heading: "Dostpay's integration with core banking systems meant transaction data flowed in from m",
          description: "Dostpay's integration with core banking systems meant transaction data flowed in from multiple sources, but compliance checks were performed as periodic batch reviews rather than continuously. This created a lag between when a risky transaction occurred and when it was actually flagged for review.",
          image: "/assets/images/case-study/new-images/dostpay/Dostpay1.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte helped Dostpay rebuild its compliance and risk infrastructure around continuous, automated monitoring.",
          image: "/assets/images/case-study/new-images/dostpay/Dostpay2.png",
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
      image: "/assets/images/case-study/new-images/emerge-forward/emerge1.png",
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
          image: "/assets/images/case-study/new-images/emerge-forward/emerge1.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte built Emerge Forward as a complete learning ecosystem spanning lessons, assessment, and professional identity.",
          image: "/assets/images/case-study/new-images/emerge-forward/emerge2.png",
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
      image: "/assets/images/case-study/new-images/komb/komb1.png",
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
          image: "/assets/images/case-study/new-images/komb/komb1.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte built Komb as a connected ecosystem spanning a client mobile app, a salon owner and staff experience, and a Super Admin panel overseeing the whole network.",
          image: "/assets/images/case-study/new-images/komb/komb2.png",
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
      image: "/assets/images/case-study/new-images/food-cast/foodCast1.png",
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
          image: "/assets/images/case-study/new-images/food-cast/foodCast1.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte fully supported StrateX.nl's CSR vision, building FoodCast from the ground up as a cross platform mobile experience.",
          image: "/assets/images/case-study/new-images/food-cast/Food-cast.png",
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
      image: "/assets/images/case-study/new-images/crowdcheck/crowd_check1.png",
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
          image: "/assets/images/case-study/new-images/crowdcheck/crowd_check1.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte built Crowdcheck as a focused, purpose built app centered entirely on making crowd data usable in real time.",
          image: "/assets/images/case-study/new-images/crowdcheck/crowd_check2.png",
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
      image: "/assets/images/case-study/new-images/instapp-deal/InstApp-Deal.png",
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
          image: "/assets/images/case-study/new-images/instapp-deal/InstApp-Deal.png",
          format: "left",
        },
        {
          heading: "Built for measurable impact",
          description: "eForte helped InstApp Deal personalize deal discovery based on each user's actual redemption behavior.",
          image: "/assets/images/case-study/new-images/instapp-deal/instAppScreen1.png",
          format: "right",
        },
      ],
    },
  }
];
