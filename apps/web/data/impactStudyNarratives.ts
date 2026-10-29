import type { ImpactStudyNarrative } from "./impactStudyNarrativeTypes";
import { enterpriseCaseStudyOverrides } from "./enterpriseCaseStudyOverrides";

export type { ImpactStudyNarrative } from "./impactStudyNarrativeTypes";

export const impactStudyNarratives: Record<string, ImpactStudyNarrative> = {
  "krank": {
    slug: "krank",
    name: "Krank",
    headline: "Powering a Heavy Machinery Marketplace with Agentic Auction Intelligence",
    intro: ["Krank set out to modernize one of the most old fashioned corners of industrial commerce: the buying, selling, renting, and auctioning of heavy machinery. eForte partnered with Krank to build a private sales network where equipment owners could list machinery for sale, rent, or auction, while keeping their business contacts and listings protected within their own company network.", "This case study highlights how eForte combined Velocity AI, Agentic Orchestration, and Foundational Data Layer capabilities to help Krank remove the traditional agent from the equation and give heavy equipment buyers and sellers a direct, social style way to transact."],
    pillars: ["Agentic Orchestration", "Foundational Data Layer", "Velocity AI"],
    deliverables: ["Web application for Super Admins and Clients", "Companion mobile apps for buyers and sellers", "Private, permissioned company sales networks", "Day Auction and Time Auction modules", "Social style communication and contact book tools"],
    challenge: {
      title: "Heavy machinery has traditionally been bought and sold through agents and brokers, a sl",
      paragraphs: ["Heavy machinery has traditionally been bought and sold through agents and brokers, a slow process built on phone calls, static listings, and manual negotiation. Sellers had little visibility into genuine buyer interest, and buyers had no easy way to compare live listings, auctions, or rental options across multiple sellers in one place.", "Krank needed a platform that preserved the privacy and integrity of each company's own sales network while still allowing rich interaction, real time bidding, and direct communication between parties. Handling live auction bidding reliably, at scale, without agent intermediaries, was the most technically demanding part of the brief."],
      image: "/assets/images/case-study/new-images/krank/krank-main.png",
    },
    solution: {
      title: "Built for measurable impact",
      lead: "eForte built Krank as a full web and mobile ecosystem, giving each company its own private network to list machinery for sale, rent, or auction, while still enabling social style engagement around news, posts, and listings.",
      items: [{"title": "Direct Buyer Seller Communication", "body": "Agentic Orchestration powers the messaging and contact layer that replaced the traditional agent, letting buyers and sellers negotiate and coordinate directly while keeping each company's contact book private and secure."}, {"title": "Live Auction Engine", "body": "The platform supports two distinct auction types, Day Auctions and Time Auctions, both requiring real time bid handling. eForte's engineering team built the bidding infrastructure to stay accurate and responsive under live, time sensitive conditions."}, {"title": "Listing and Inventory Intelligence", "body": "The Foundational Data Layer keeps every listing, auction result, and transaction history structured and queryable, giving Krank a reliable foundation for future matching and recommendation features as the platform scales."}],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Since launching, Krank has repositioned itself as a modern alternative to agent driven heavy equipment sales.",
      items: [{"title": "Faster Deal Cycles", "body": "Removing the agent layer shortened the path between listing and sale, letting buyers and sellers connect and negotiate in real time."}, {"title": "Reliable Live Auctions", "body": "The Day and Time Auction modules gave Krank a differentiated capability few competitors in the heavy machinery space could match."}, {"title": "Network Integrity at Scale", "body": "Each company's private sales network stayed protected even as the platform grew, preserving trust between participants."}, {"title": "Stronger Buyer Seller Relationships", "body": "Direct, social style engagement helped participants build lasting business relationships instead of one off transactions."}],
    },
    closing: "eForte's collaboration with Krank continues to support the platform as it expands its footprint across the heavy equipment industry.",
  },
  "oddysee": {
    slug: "oddysee",
    name: "Oddysee",
    headline: "Automating Documentation Heavy Licensing with Oddysee",
    intro: ["Certain industries, cannabis licensing chief among them, require extensive documentation and state level compliance before a business can even open its doors. Oddysee approached eForte to build a platform that could take on that documentation burden directly, offering pre written templates, guided editing, and the surrounding business tools needed to get a license application across the finish line.", "This case study highlights how eForte applied Agentic Orchestration, Foundational Data Layer, and Velocity AI principles to give Oddysee's users a faster, more reliable path through complex licensing paperwork."],
    pillars: ["Agentic Orchestration", "Foundational Data Layer", "Velocity AI"],
    deliverables: ["Web applications for Super Admin, Clients, and Analysts", "Oddysee Marketplace for licensing document templates", "Oddysee Template Editor with questionnaire driven customization", "Business plan writing module", "Financial forecasting module", "Built in project management and deadline tracking tools"],
    challenge: {
      title: "Licensing processes in heavily regulated industries, particularly cannabis licensing at",
      paragraphs: ["Licensing processes in heavily regulated industries, particularly cannabis licensing at the state level, require applicants to produce dense, precise, and jurisdiction specific documentation. Getting this wrong, or simply getting it done too slowly, can cost applicants their window to enter a market. Oddysee's clients needed a way to produce accurate documentation, business plans, and financial forecasts without starting from a blank page every time.", "Beyond documentation, applicants also needed to manage the licensing process itself, since these projects involve multiple contributors, deadlines, and reviewers who all need visibility into progress."],
      image: "/assets/images/case-study/new-images/oddysee/oddysee-main.png",
    },
    solution: {
      title: "Built for measurable impact",
      lead: "eForte built Oddysee as an integrated documentation, planning, and project management platform centered on one core idea: nobody should have to write a licensing application from scratch.",
      items: [{"title": "Template Marketplace", "body": "The Oddysee Marketplace lets applicants purchase pre written templates built specifically for state level licensing categories such as cannabis, giving them a proven starting point instead of a blank document."}, {"title": "Guided Template Editor", "body": "Once purchased, the Agentic Orchestration powered Template Editor walks applicants through a structured questionnaire, automatically populating the chosen template with their company's information while preserving full version history and allowing scheduled sessions with experienced consultants."}, {"title": "Business Plan and Financial Forecasting", "body": "Alongside documentation, Oddysee's business plan and financial forecasting modules use the Foundational Data Layer to tailor outputs to each applicant's specific industry, backed by project management tools to keep every deadline and reviewer on track."}],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Oddysee has become a dependable tool for applicants navigating some of the most document intensive licensing categories in the country.",
      items: [{"title": "Faster Application Turnaround", "body": "Pre written templates and guided editing cut the time needed to produce a compliant, unique application."}, {"title": "Consistent Compliance Quality", "body": "Version history and consultant scheduling helped applicants catch errors before submission rather than after rejection."}, {"title": "Better Project Visibility", "body": "Built in project management tools gave teams a shared view of deadlines and responsibilities across the application process."}, {"title": "Scalable Across Jurisdictions", "body": "The template and questionnaire model made it straightforward for Oddysee to expand into new licensing categories beyond its original cannabis focus."}],
    },
    closing: "eForte remains a long term technology partner for Oddysee as it continues broadening its library of licensing templates.",
  },
  "investment-markets": {
    slug: "investment-markets",
    name: "Investment Markets",
    headline: "A Discovery Platform for High Net Worth Investors",
    intro: ["InvestmentMarkets came to eForte with a clear but ambitious goal: bridge the gap between investment seeking companies and high net worth individuals, without the noise or gatekeeping typical of traditional investment networking. The founders arrived with a scope document running hundreds of pages, and needed a technical partner who could turn that level of detail into a working, scalable platform.", "This case study highlights how eForte applied Agentic Orchestration, Foundational Data Layer, and Velocity AI thinking to build a Progressive Web App that connects investors and listees directly, with market news and insight built in."],
    pillars: ["Agentic Orchestration", "Foundational Data Layer", "Velocity AI"],
    deliverables: ["Progressive Web App (PWA) for cross platform access", "Investor and listee matching and networking tools", "Curated investment listings across growth and income opportunities", "Market news and events module", "Post launch maintenance and support structure"],
    challenge: {
      title: "High net worth investors and companies seeking capital have traditionally relied on per",
      paragraphs: ["High net worth investors and companies seeking capital have traditionally relied on personal networks, brokers, or fragmented platforms to find each other. InvestmentMarkets wanted to remove that friction entirely, giving investors direct access to a wide range of vetted opportunities in one place, personalized and free to use.", "The technical challenge was building something platform agnostic enough to reach investors wherever they were, on desktop or mobile, without the overhead and app store friction of separate native builds, while still delivering the performance and feel of a true mobile app."],
      image: "/assets/images/case-study/new-images/investment-market/investment-Markets-Main.png",
    },
    solution: {
      title: "Built for measurable impact",
      lead: "eForte matched InvestmentMarkets' ambition with a PWA first engineering approach and rigorous documentation discipline.",
      items: [{"title": "Progressive Web App Architecture", "body": "Rather than building separate native apps, eForte built InvestmentMarkets as a PWA, installable like a native app but accessible from any standards compliant browser on desktop or mobile, giving Agentic Orchestration driven matching tools a single, consistent surface to run on."}, {"title": "Investor Listee Connection Tools", "body": "The Foundational Data Layer organizes listings, investor profiles, and business networking connections, letting investors browse growth or income opportunities and connect directly with listees."}, {"title": "Market Insight Layer", "body": "Velocity AI supports the platform's news and events features, keeping investors informed on market conditions so their decisions are grounded in current context, not just static listings."}],
    },
    results: {
      title: "Outcomes that matter",
      lead: "InvestmentMarkets successfully launched and has moved into an ongoing maintenance and support phase with eForte.",
      items: [{"title": "Vendor Independent Foundation", "body": "A full technical delivery document was produced post launch specifically to avoid vendor lock in, giving InvestmentMarkets long term control over their own platform."}, {"title": "Cross Platform Reach Without Native Overhead", "body": "The PWA approach let InvestmentMarkets reach investors on any device without maintaining separate native codebases."}, {"title": "Reliable Delivery Discipline", "body": "Level of Efforts estimates, technical documentation, and a QA and cybersecurity plan kept the complex, hundred page scope on track from milestone to milestone."}, {"title": "A Durable Investor Listee Network", "body": "The platform continues operating today as a genuine discovery tool connecting astute investors with real opportunities."}],
    },
    closing: "eForte remains engaged with InvestmentMarkets in an ongoing support capacity as the platform matures.",
  },
  "prism": {
    slug: "prism",
    name: "Prism",
    headline: "Retail Demand Forecasting with Dashboards and Seasonality Modeling",
    intro: [
      "Retailers live and die by their ability to anticipate demand, but seasonal effects, holidays, and unpredictable outliers make accurate forecasting genuinely hard. PRISM was built to solve exactly that problem: a trends forecasting platform with user and admin dashboards, API integrations, and interactive charts designed to handle strong seasonal patterns and messy real-world data.",
      "This case study highlights how eForte combined Velocity AI and Foundational Data Layer engineering to deliver a production forecasting product — not a research notebook — with a PWA front end teams could actually use day to day.",
    ],
    pillars: ["Velocity AI", "Foundational Data Layer"],
    deliverables: [
      "Web App PWA forecasting interface with interactive charts",
      "User and admin dashboards for demand visibility",
      "Third-party API integrations for retail and data sources",
      "R-based forecasting engine with seasonality and holiday effects",
      "React.js, HTML, and PHP front-end and integration layers",
      "Outlier smoothing and trend adjustment logic",
    ],
    challenge: {
      title: "Retail demand doesn't move in a straight line",
      paragraphs: [
        "Retail demand doesn't move in a straight line. It shifts with the seasons, spikes around holidays, and gets thrown off by one-off outlier events that can badly skew a naive forecast. PRISM's client needed a forecasting engine that could account for all of this at once: yearly, weekly, and daily seasonality, holiday effects, and enough historical data to generate genuinely reliable predictions — surfaced through dashboards operators could trust.",
        "The single hardest problem was smoothing outliers without dulling the model's sensitivity. Smooth too aggressively and the forecast stops reacting to real shifts in demand; smooth too little and one bad data point throws off the whole projection.",
      ],
      image: "/assets/images/case-study/new-images/prism/prism-main.png",
    },
    solution: {
      title: "Built for measurable impact",
      lead: "eForte built PRISM as a full product stack: forecasting services wired into dashboards, charts, and API integrations so merchandising and ops teams could act on predictions without leaving the app.",
      items: [
        {
          title: "Forecasting engine with seasonality",
          body: "Velocity AI powers PRISM's core engine, modeling non-linear demand trends with yearly, weekly, and daily seasonality plus holiday effects, so retailers get forecasts that reflect how their business actually moves throughout the year.",
        },
        {
          title: "Dashboards and interactive charts",
          body: "User and admin dashboards present forecasts, outliers, and adjustments in interactive charts, making the model outputs usable for planning rather than buried in raw exports.",
        },
        {
          title: "Careful outlier handling",
          body: "The team engineered a deliberate balance in the smoothing logic within the Foundational Data Layer, reducing the distorting effect of outliers on forecasted values while preserving the model's ability to detect genuine shifts in demand.",
        },
        {
          title: "Cross-stack delivery",
          body: "Built across R, React.js, HTML, and PHP, PRISM's architecture integrates specialized forecasting services into a broader retail-facing web application with third-party API connections.",
        },
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "PRISM gave its retail client a forecasting capability they could operate from dashboards, with models that stayed useful even when input data was incomplete.",
      items: [
        {
          title: "Resilient to missing and messy data",
          body: "PRISM continued producing usable forecasts even with imperfect input data, so planners were not blocked by gaps in historical series.",
        },
        {
          title: "Accurate seasonal forecasting",
          body: "Handling of yearly, weekly, and daily seasonality gave retailers forecasts that matched their real demand cycles, including holidays.",
        },
        {
          title: "Actionable visibility",
          body: "Interactive charts and role-based dashboards turned model output into day-to-day planning tools for operators and administrators.",
        },
        {
          title: "Balanced outlier sensitivity",
          body: "The custom smoothing approach struck a workable balance between stability and responsiveness — a hard problem solved through extensive research and testing.",
        },
      ],
    },
    closing:
      "eForte's close, research-driven collaboration with the PRISM client reflects the kind of technically demanding product work the team takes on when forecasting has to ship as a real application — dashboards, APIs, and all. The engagement also built lasting internal expertise in statistical forecasting that has informed later data-driven projects.",
  },
  "scheduling-engine": {
    slug: "scheduling-engine",
    name: "Scheduling Engine",
    headline: "Automating Workforce Management for StrateX",
    intro: ["StrateX, a solutions provider serving call center and retail chain clients, recognized that manual scheduling was costing their clients real money and real employee goodwill. High labor costs, low satisfaction, and compliance risk were all symptoms of the same root problem: scheduling that depended entirely on manual effort. StrateX partnered with eForte to build a scheduling engine that could serve clients across multiple industry verticals.", "This case study highlights how eForte used Agentic Orchestration and Foundational Data Layer engineering to automate a process that had previously eaten up hours of manual coordination every week."],
    pillars: ["Agentic Orchestration", "Foundational Data Layer"],
    deliverables: ["Web applications for Supervisors and Support Agents", "Automated, algorithm driven scheduling engine", "Time off request system", "Attendance tracking system", "Compliance monitoring system for labor law adherence"],
    challenge: {
      title: "StrateX's clients in the call center and retail chain industries were scheduling staff",
      paragraphs: ["StrateX's clients in the call center and retail chain industries were scheduling staff manually, a process that was slow, error prone, and difficult to scale. This led directly to high labor costs, inconsistent staffing levels, low employee satisfaction, and real compliance exposure under labor laws and regulations.", "StrateX needed a solution flexible enough to apply across different industry verticals, not a one off tool built for a single client, while still handling the specific complexities of shift work: availability, skill levels, job requirements, time off requests, and attendance."],
      image: "/assets/images/case-study/new-images/scheduling-engine/scheduling-main.png",
    },
    solution: {
      title: "Built for measurable impact",
      lead: "eForte built the Scheduling Engine as a configurable automation platform designed from the start to serve multiple client verticals through StrateX.",
      items: [{"title": "Algorithm Driven Scheduling", "body": "Agentic Orchestration powers the core scheduling logic, automatically generating staff schedules based on employee availability, skill level, and job requirements, replacing what had been a fully manual coordination process."}, {"title": "Compliance and Attendance Tooling", "body": "The Foundational Data Layer underpins the time off request system, attendance tracking system, and compliance monitoring system, giving supervisors a single source of truth for labor law adherence."}, {"title": "Embedded Team Delivery", "body": "eForte deployed a dedicated team, including React Native engineers, a MERN stack engineer, a QA engineer, a DevOps engineer, and a project manager, directly alongside StrateX's own team, functioning as an extension of their delivery capacity rather than an external vendor."}],
    },
    results: {
      title: "Outcomes that matter",
      lead: "The Scheduling Engine gave StrateX a genuinely reusable product to offer across its call center and retail chain client base.",
      items: [{"title": "Reduced Labor Costs", "body": "Automated, optimized staffing levels replaced inefficient manual scheduling, directly reducing labor costs for StrateX's clients."}, {"title": "Higher Employee Satisfaction", "body": "Fairer, more consistent scheduling, along with a proper time off request process, improved satisfaction among the frontline staff being scheduled."}, {"title": "Stronger Regulatory Compliance", "body": "The built in compliance monitoring system helped StrateX's clients stay ahead of labor law and regulatory requirements instead of reacting to violations after the fact."}, {"title": "A Reusable, Cross Industry Platform", "body": "Because the engine was built to apply across verticals from day one, StrateX was able to extend it to new clients without starting from scratch each time."}],
    },
    closing: "eForte's embedded team model with StrateX became a template for how the two companies continued to collaborate on future projects.",
  },
  "sellsmart": {
    slug: "sellsmart",
    name: "Sellsmart",
    headline: "Driving autonomous sales workflows from lead to close",
    intro: ["Sellsmart is a sales platform that helps growing companies manage leads, follow ups, and pipeline progression. As sales teams scaled, keeping every lead moving through the pipeline consistently became harder to manage manually.", "This case study highlights the challenges faced by Sellsmart, the solution implemented by eForte, and the resulting benefits that turned manual pipeline management into an autonomous workflow."],
    pillars: ["Agentic Orchestration", "Velocity AI", "App Solutions"],
    deliverables: ["Autonomous lead routing engine", "Automated follow up workflow", "Pipeline health monitoring", "Sales performance dashboard"],
    challenge: {
      title: "Sellsmart's sales reps were responsible for manually routing new leads, scheduling foll",
      paragraphs: ["Sellsmart's sales reps were responsible for manually routing new leads, scheduling follow ups, and updating pipeline stages, a workload that grew unevenly as lead volume spiked. Leads that weren't followed up on quickly often went cold, and pipeline data frequently fell out of date as reps focused on active deals instead of administrative updates.", "This meant that even well qualified leads were sometimes lost simply because no one followed up in time, and sales leadership lacked an accurate, current view of the pipeline."],
      image: "/assets/images/case-study/new-images/sellsmart/sellsMart-main.png",
    },
    solution: {
      title: "Built for measurable impact",
      lead: "eForte introduced autonomous agents to handle the operational side of Sellsmart's sales process.",
      items: [{"title": "Agentic Orchestration for lead workflows", "body": "Autonomous agents now route new leads to the right rep, schedule follow ups automatically, and update pipeline stages in real time without manual entry."}, {"title": "Velocity AI for lead prioritization", "body": "A Velocity AI model scores leads based on likelihood to convert, helping reps focus their time on the opportunities most likely to close."}],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Autonomous workflow management has changed how efficiently Sellsmart's customers convert leads into revenue.",
      items: [{"title": "Faster lead follow up", "body": "Automated routing and scheduling ensures new leads are followed up on quickly, reducing the number of leads that go cold."}, {"title": "More accurate pipeline data", "body": "Real time automated updates mean sales leadership always has a current, accurate view of the pipeline."}, {"title": "Higher rep productivity", "body": "With administrative tasks automated, reps spend more of their time on selling rather than data entry."}],
    },
    closing: "By automating the operational side of the sales process, Sellsmart freed its reps to focus on relationships and closing, while the pipeline manages itself in the background.",
  },
  "validatr": {
    slug: "validatr",
    name: "Validatr",
    headline: "Turning Startup Ideas into Investor Ready Reports with Validatr",
    intro: ["Every founder believes in their idea, but belief isn't the same as validation. Validatr.io approached eForte to build a platform that could guide startups and businesses through structured market validation and market research, producing polished report style documents founders could use directly in business plans and investor conversations.", "This case study highlights how eForte used Velocity AI, Agentic Orchestration, and Foundational Data Layer thinking to turn a research heavy process into a guided, question and answer experience."],
    pillars: ["Velocity AI", "Agentic Orchestration", "Foundational Data Layer"],
    deliverables: ["Web and mobile applications with a web based admin panel", "Multi project dashboard with team collaboration", "In app Guide Bot for step by step assistance", "Automated report generation for validation and research", "Investor and presentation ready document exports"],
    challenge: {
      title: "Market validation and market research are typically slow, expensive, and require specia",
      paragraphs: ["Market validation and market research are typically slow, expensive, and require specialized expertise most early stage founders don't have. Startups often skip this step entirely, or pay significant sums for consulting reports, simply because there was no accessible, self serve way to do rigorous validation on their own.", "Validatr needed a platform that could turn a structured set of questions into genuinely useful output: not generic advice, but detailed, presentation ready reports specific enough to support a business plan or an investor pitch."],
      image: "/assets/images/case-study/new-images/validatr/validatr-main.png",
    },
    solution: {
      title: "Built for measurable impact",
      lead: "eForte built Validatr around a simple idea: replace expensive consulting engagements with a guided, intuitive digital experience that still produces professional grade output.",
      items: [{"title": "Guided Validation Journey", "body": "Agentic Orchestration drives the platform's in app Guide Bot, which walks users through each section of market validation and market research, ensuring nothing important gets skipped regardless of the user's experience level."}, {"title": "Multi Project Collaboration", "body": "Founders and teams can create multiple projects from one intuitively designed dashboard, adding collaborators so a whole founding team, or a classroom of students, can work through validation together."}, {"title": "Automated Report Generation", "body": "The Foundational Data Layer structures every questionnaire response so Velocity AI can assemble it into a rich, detailed, ready to present report suitable for business plans and investor rounds."}],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Validatr has made rigorous market validation accessible to a much wider range of founders, students, and startups.",
      items: [{"title": "Lower Barrier to Rigorous Research", "body": "Founders no longer need a research background or a consulting budget to produce a credible validation report."}, {"title": "Consistent, Presentation Ready Output", "body": "Every project produces the same high standard of detailed, professional report, regardless of who is completing the questionnaire."}, {"title": "Faster Path to Investor Conversations", "body": "Startups can move from idea to investor ready documentation in a fraction of the time of a traditional research engagement."}, {"title": "Useful Beyond Startups", "body": "Students and educational users have adopted the platform for coursework, extending its value well beyond its original startup audience."}],
    },
    closing: "eForte continues to support Validatr as it expands its library of validation and research question sets.",
  },
  "tachignite": {
    slug: "tachignite",
    name: "TachIgnite",
    headline: "Strengthening a Day Zero accelerator's talent pipeline and flagship contest",
    intro: ["TachIgnite is a Day Zero startup accelerator that partnered with eForte in 2025 to strengthen its talent pipeline and deliver its flagship startup contest.", "This case study highlights the support eForte provided to TachIgnite and the resulting benefits that helped the accelerator serve its founder community more effectively."],
    pillars: ["Velocity AI", "Agentic Orchestration", "Platform Engineering"],
    deliverables: ["AI and engineering expertise", "Rapid prototyping framework", "Startup contest platform", "Founder support infrastructure"],
    challenge: {
      title: "As a Day Zero accelerator, TachIgnite needed to support early stage founders who requir",
      paragraphs: ["As a Day Zero accelerator, TachIgnite needed to support early stage founders who required rapid prototyping and validation of their ideas, while also running a flagship startup contest that could scale to serve a growing founder community. Doing both well required technical expertise and infrastructure that TachIgnite's internal team alone could not easily provide."],
      image: "/assets/images/case-study/webp/tachignite/image-1.webp",
    },
    solution: {
      title: "Built for measurable impact",
      lead: "eForte supported TachIgnite by providing AI and engineering expertise, enabling rapid prototyping and validation, and supporting early stage founders with scalable technology foundations.",
      items: [{"title": "AI and engineering expertisee", "body": "Forte's team worked directly alongside TachIgnite to bring AI and software engineering expertise to the accelerator's programs and founder support functions."}, {"title": "Rapid prototyping and validation", "body": "Founders in the program gained access to frameworks that let them prototype and validate their ideas quickly, shortening the path from concept to testable product."}, {"title": "Scalable technology foundationse", "body": "Forte helped early stage founders build on scalable technology foundations, setting their startups up for sustainable growth beyond the accelerator program."}],
    },
    results: {
      title: "Outcomes that matter",
      lead: "The partnership strengthened TachIgnite's ability to support its founder community and run its flagship contest.",
      items: [{"title": "Stronger founder support", "body": "Early stage founders received hands on AI and engineering guidance that accelerated their product development."}, {"title": "Faster idea validation", "body": "Rapid prototyping capabilities let founders test and refine their ideas more quickly than before."}, {"title": "Scalable startup foundations", "body": "Founders left the program with technology foundations built to scale, rather than throwaway prototypes."}],
    },
    closing: "Through this collaboration, TachIgnite strengthened both its talent pipeline and its flagship contest, giving its founder community a stronger technical foundation to build on.",
  },
  "dostpay": {
    slug: "dostpay",
    name: "Dostpay",
    headline: "Turning a digital banking payments platform into a self monitoring, always compliant system",
    intro: ["Dostpay is a mobile based digital banking payments platform designed to integrate with a bank's core banking systems, giving end users the power of digital banking in a flexible, branded experience. As transaction volume grew, keeping the platform compliant and secure without slowing down user experience became a growing challenge.", "This case study highlights the challenges faced by Dostpay, the solution implemented by eForte, and the resulting benefits that gave the platform the ability to monitor and protect itself in real time."],
    pillars: ["Foundational Data Layer", "Agentic Orchestration", "Velocity AI", "Cybersecurity"],
    deliverables: ["Unified transaction data platform", "Automated compliance monitoring workflow", "Real time transaction risk scoring", "Core banking integration layer"],
    challenge: {
      title: "Dostpay's integration with core banking systems meant transaction data flowed in from m",
      paragraphs: ["Dostpay's integration with core banking systems meant transaction data flowed in from multiple sources, but compliance checks were performed as periodic batch reviews rather than continuously. This created a lag between when a risky transaction occurred and when it was actually flagged for review.", "As the platform onboarded more banking partners, this lag became a growing liability, since the elegant, simple user experience Dostpay was built around depended on transactions clearing quickly and safely."],
      image: "/assets/images/case-study/new-images/dostpay/Dostpay1.png",
    },
    solution: {
      title: "Built for measurable impact",
      lead: "eForte helped Dostpay rebuild its compliance and risk infrastructure around continuous, automated monitoring.",
      items: [{"title": "Foundational Data Layer for transaction data", "body": "Transaction data from every integrated core banking partner was unified into a single layer, giving compliance teams one consistent view regardless of source bank."}, {"title": "Agentic Orchestration for compliance monitoring", "body": "Agentic Orchestration now continuously monitors transactions against compliance rules, escalating flagged activity within minutes instead of during periodic batch reviews."}, {"title": "Velocity AI for risk scoring", "body": "A Velocity AI model scores transaction risk in real time, helping the platform tell the difference between routine activity and activity that genuinely needs review."}],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Continuous, automated monitoring has strengthened Dostpay's ability to scale safely across banking partners.",
      items: [{"title": "Faster compliance response", "body": "Risky transactions are now flagged within minutes, rather than being caught during periodic batch reviews."}, {"title": "Smoother user experience", "body": "Faster, automated risk assessment has reduced unnecessary transaction delays for legitimate users."}, {"title": "Easier partner onboarding", "body": "New core banking integrations can be added to the unified data layer without rebuilding compliance monitoring from scratch."}],
    },
    closing: "Through this collaboration, Dostpay moved from periodic, manual compliance checks to a continuously monitored platform that keeps pace with its growing transaction volume.",
  },
  "emerge-forward": {
    slug: "emerge-forward",
    name: "Emerge Forward",
    headline: "Building Soft Skills for the Next Generation",
    intro: ["Emerge came to eForte with a mission driven idea: build a platform to train youth in the soft skills that matter for real world success, skills rarely covered by traditional academic curricula. The vision combined structured lessons, testing and grading, a knowledge library, and a professional profile system to help participants carry what they learned into their careers.", "This case study highlights how eForte used Agentic Orchestration, Foundational Data Layer, and Velocity AI to build eForte's first EdTech platform from the ground up."],
    pillars: ["Agentic Orchestration", "Foundational Data Layer", "Velocity AI"],
    deliverables: ["Web application for Students and Admins", "Online and in person lecture support", "Automated testing and grading system", "Continuously updated online knowledge library", "LinkedIn style professional profile system"],
    challenge: {
      title: "Soft skills, communication, collaboration, adaptability, are hard to teach and even har",
      paragraphs: ["Soft skills, communication, collaboration, adaptability, are hard to teach and even harder to measure. Emerge needed a platform that could deliver structured lessons in both online and in person formats, actually test whether participants absorbed the material, and then help those participants translate what they learned into something tangible for their professional futures.", "As eForte's first project in the education technology space, the team had to design a learning and assessment flow from scratch, one that would feel credible to educators while staying engaging for youth participants."],
      image: "/assets/images/case-study/new-images/emerge-forward/emerge1.png",
    },
    solution: {
      title: "Built for measurable impact",
      lead: "eForte built Emerge Forward as a complete learning ecosystem spanning lessons, assessment, and professional identity.",
      items: [{"title": "Testing and Grading System", "body": "Agentic Orchestration automates the assessment side of the platform, letting teachers create tests while the system grades submissions and assigns scores automatically based on participant answers."}, {"title": "Continuous Knowledge Library", "body": "The Foundational Data Layer supports an online library that keeps course content current, giving participants ongoing access to the knowledge sets they need well beyond their initial lessons."}, {"title": "Professional Identity Building", "body": "Perhaps the platform's most distinctive feature, Velocity AI supported profile tools let participants build LinkedIn style professional profiles that include their personality type alongside videos and articles they've created, preparing them for the professional world well before they enter it."}],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Emerge Forward launched successfully, on time and within budget, marking a meaningful first step into EdTech for eForte.",
      items: [{"title": "Measurable Skill Development", "body": "The automated testing and grading system gave Emerge a genuine way to gauge whether participants were absorbing the soft skills curriculum, not just attending sessions."}, {"title": "Stronger Career Readiness", "body": "The LinkedIn style profile system gave participants a professional identity and portfolio well before they entered the job market."}, {"title": "Flexible Learning Delivery", "body": "Supporting both online and in person lecture formats let Emerge reach participants regardless of their circumstances or location."}],
    },
    closing: "A New Practice Area for eForte The project gave eForte's team its first hands on experience in the EdTech space, expertise that has informed the company's approach to subsequent education focused work. The Emerge Forward engagement remains a standout example of eForte building genuinely new capability in service of a mission driven client.",
  },
  "komb": {
    slug: "komb",
    name: "Komb",
    headline: "Streamlining Salon Operations for Komb, a UK Personal Care Startup",
    intro: ["Salons run on tight schedules, personal relationships, and constant day to day operations, from booking appointments to managing inventory. Komb, a UK based startup, saw a gap in the market for software built specifically around how salons actually operate, and partnered with eForte to bring that vision to life across web and mobile.", "This case study highlights how eForte combined Agentic Orchestration, Foundational Data Layer, and Velocity AI to give salon owners and their clients a genuinely easy to use platform."],
    pillars: ["Agentic Orchestration", "Foundational Data Layer", "Velocity AI"],
    deliverables: ["Web application for Super Admin", "iOS and Android apps for salon owners and staff", "iOS and Android client facing booking app", "Discount coupon and special offer engine", "Salon performance reporting dashboard"],
    challenge: {
      title: "Salon owners were managing appointments, client records, staff schedules, and inventory",
      paragraphs: ["Salon owners were managing appointments, client records, staff schedules, and inventory through a patchwork of manual processes and disconnected tools. Clients, meanwhile, had no easy way to book, reschedule, or discover offers across the salons they used. Komb needed a single, user friendly system that worked for two very different audiences at once: busy salon staff who needed simplicity, and clients who wanted a modern booking experience.", "Building a platform robust enough to manage day to day salon operations, while still being simple enough for non technical salon staff to run without training, was the central challenge."],
      image: "/assets/images/case-study/new-images/komb/komb1.png",
    },
    solution: {
      title: "Built for measurable impact",
      lead: "eForte built Komb as a connected ecosystem spanning a client mobile app, a salon owner and staff experience, and a Super Admin panel overseeing the whole network.",
      items: [{"title": "Client Booking Experience", "body": "The client facing app, powered by Agentic Orchestration, lets clients book, reschedule, or cancel appointments for themselves or others, tip their service provider directly, and access discount coupons across every salon on the Komb platform, along with a fun before and after selfie sharing feature."}, {"title": "Salon Admin Panel", "body": "Salon owners manage employees, appointments, client information, and inventory through a dedicated admin panel, with a reporting feature that surfaces revenue, client numbers, and appointment statistics powered by the Foundational Data Layer."}, {"title": "Super Admin Oversight", "body": "At the platform level, the Super Admin panel gives Komb visibility into every salon admin's activity and earnings across the entire network, supporting Velocity AI driven insight into overall platform performance."}],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Komb has given salon owners and their clients a modern, connected way to manage the entire salon experience.",
      items: [{"title": "Simplified Daily Operations", "body": "Salon staff can manage appointments, clients, and inventory from one intuitive interface instead of juggling multiple tools."}, {"title": "Stronger Client Engagement", "body": "Features like direct tipping, discount coupons, and selfie sharing gave salons a way to build deeper relationships with their clients."}, {"title": "Data Driven Salon Management", "body": "Owners gained real reporting on revenue and appointment trends, replacing guesswork with actual performance data."}, {"title": "A Scalable Platform Model", "body": "The Super Admin layer positioned Komb to grow from a single market UK startup into a multi salon, multi region network."}],
    },
    closing: "eForte's engineering and business analysis teams remain engaged with Komb as the platform continues to grow across the UK personal care market.",
  },
  "food-cast": {
    slug: "food-cast",
    name: "FoodCast",
    headline: "Individual Detail Page:",
    intro: ["FoodCast: Helping Families Forecast Their Food Supply During COVID 19", "When StrateX.nl came to eForte during the height of the COVID 19 pandemic, they weren't chasing profit, they were pursuing a corporate social responsibility project aimed at reducing panic and uncertainty around household food supply. The result was FoodCast, a mobile app that forecasts ration requirements for individuals and families across breakfast, lunch, and dinner.", "This case study highlights how eForte applied Velocity AI and Foundational Data Layer thinking to a socially driven project built to bring calm and clarity to households during a genuinely uncertain time."],
    pillars: ["Velocity AI", "Foundational Data Layer"],
    deliverables: ["Native Android and iOS applications (React Native)", "Node.js/Express backend with Firebase integration", "MongoDB based data layer", "Multi day, multi meal forecasting engine", "Docker and Jenkins based deployment pipeline"],
    challenge: {
      title: "Early in the pandemic, households faced real uncertainty about food supply, leading to",
      paragraphs: ["Early in the pandemic, households faced real uncertainty about food supply, leading to panic buying, hoarding, and wasted trips to increasingly crowded stores. StrateX.nl wanted to do their part to bring down that chaos, but needed a technology partner who could turn the idea into a working app quickly, without compromising on accuracy or usability.", "The core technical challenge was building a forecasting model that could reliably project food needs across breakfast, lunch, and dinner, for varying household sizes, over a period of days, using patterns of past consumption."],
      image: "/assets/images/case-study/new-images/food-cast/foodCast1.png",
    },
    solution: {
      title: "Built for measurable impact",
      lead: "eForte fully supported StrateX.nl's CSR vision, building FoodCast from the ground up as a cross platform mobile experience.",
      items: [{"title": "Meal by Meal Forecasting Engine", "body": "Powered by Velocity AI, FoodCast uses historical usage patterns and algorithms to forecast exactly how much food a household will need across breakfast, lunch, and dinner, for however many days the user wants to plan ahead."}, {"title": "Household Aware Data Model", "body": "The Foundational Data Layer tracks household size, consumption history, and shopping cadence, allowing the app to give increasingly accurate forecasts the more it's used."}, {"title": "Simple, Calming User Experience", "body": "The app was intentionally designed to remove uncertainty rather than add complexity, giving users a clear answer to \"how long will this last us\" without requiring manual tracking or calculations."}],
    },
    results: {
      title: "Outcomes that matter",
      lead: "FoodCast delivered exactly what StrateX.nl set out to achieve: a small but meaningful tool to help households navigate a chaotic time.",
      items: [{"title": "Reduced Panic Buying", "body": "Clear forecasts gave families confidence in their existing supply, reducing the urge to over purchase out of fear."}, {"title": "Better Informed Shopping Trips", "body": "Households could plan exactly when their next shopping trip needed to happen, rather than guessing."}, {"title": "A Meaningful CSR Outcome", "body": "StrateX.nl was able to make a genuine community contribution during COVID 19, backed by a fully functional, well engineered application."}],
    },
    closing: "eForte was proud to support a project rooted in community benefit rather than commercial gain, and the collaboration remains a highlight of the company's project history. Rapid, Purpose Driven Delivery eForte delivered both Android and iOS apps quickly, matching the urgency of the pandemic moment the project was built to address.",
  },
  "crowd-check": {
    slug: "crowd-check",
    name: "Crowdcheck",
    headline: "Real Time Crowd Insight for Safer Social Distancing",
    intro: ["During COVID 19, one of the simplest but most valuable pieces of information people needed was also one of the hardest to find: how crowded is this place right now? Crowdcheck was built to answer exactly that question, giving users a real time, map based view of crowd density at locations around them.", "This case study highlights how eForte used Velocity AI and Foundational Data Layer principles, layered on top of Google's own mapping data, to help people plan safer outings during a period of genuine public health concern."],
    pillars: ["Velocity AI", "Foundational Data Layer"],
    deliverables: ["Native Android and iOS applications", "Kotlin based Android build using Jetpack components and MVVM architecture", "Google Maps API integration", "Real time crowd density aggregation", "Multi destination and category based search"],
    challenge: {
      title: "Public health guidance during the pandemic emphasized avoiding crowded spaces, but ther",
      paragraphs: ["Public health guidance during the pandemic emphasized avoiding crowded spaces, but there was no simple, at a glance way for someone to know how busy a specific location actually was before heading out. Existing map apps showed directions and reviews, not real time crowd conditions.", "Crowdcheck needed a way to responsibly aggregate existing public data on foot traffic and present it in a way that was genuinely useful for quick, in the moment decisions, without requiring users to manually check multiple sources."],
      image: "/assets/images/case-study/new-images/crowdcheck/crowd_check1.png",
    },
    solution: {
      title: "Built for measurable impact",
      lead: "eForte built Crowdcheck as a focused, purpose built app centered entirely on making crowd data usable in real time.",
      items: [{"title": "Real Time Crowd Aggregation", "body": "The Foundational Data Layer pulls in Google APIs data and aggregates it into a simple percentage based view of how crowded a searched location currently is."}, {"title": "Multi Destination Search and Comparison", "body": "Velocity AI powers the search experience, letting users check a single destination or compare multiple locations across different categories at once, each with a detailed crowdedness graph."}, {"title": "Clean, Native Mobile Experience", "body": "Built natively for Android using Kotlin, Android Architecture Components, and an MVVM design pattern, the app was engineered to feel fast and responsive when users needed answers quickly."}],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Crowdcheck gave people a genuinely useful tool for navigating public spaces more safely during a period of real uncertainty.",
      items: [{"title": "Faster, More Confident Decisions", "body": "Users could check crowd levels before leaving home, rather than discovering a crowded space after arriving."}, {"title": "Broader Location Coverage", "body": "Category based search let users explore alternatives when their first choice was too crowded."}, {"title": "Clear, Visual Crowd Data", "body": "The crowdedness graph turned raw aggregated data into something genuinely easy to understand at a glance."}],
    },
    closing: "A Timely, Purpose Built Response eForte delivered the app quickly enough to be genuinely useful during the period when it mattered most. Crowdcheck remains one of eForte's clearest examples of building fast, focused technology in direct response to a real community need.",
  },
  "instapp-deal": {
    slug: "instapp-deal",
    name: "InstApp Deal",
    headline: "Matching shoppers to the deals they're most likely to redeem",
    intro: ["InstApp Deal is a mobile application that lets users search for and redeem coupons at participating retailers, built around word of mouth style discovery and push notifications for new deals. As the number of participating retailers and deals grew, helping users find offers actually relevant to them became more difficult.", "This case study highlights the challenges faced by InstApp Deal, the solution implemented by eForte, and the resulting benefits that improved how often users found and redeemed deals they cared about."],
    pillars: ["Velocity AI", "Agentic Orchestration", "Foundational Data Layer"],
    deliverables: ["Personalized deal recommendation model", "Unified retailer and redemption data platform", "Automated push notification targeting", "Redemption trend dashboard"],
    challenge: {
      title: "InstApp Deal's original notification system pushed new deals to all users in a category",
      paragraphs: ["InstApp Deal's original notification system pushed new deals to all users in a category or location rather than tailoring offers to individual shopping habits. As the volume of available deals grew, users increasingly received notifications for offers irrelevant to them, leading many to ignore push notifications altogether.", "This meant retailers' offers often reached users unlikely to redeem them, while users who would have been genuinely interested in a specific deal sometimes never saw it prominently surfaced."],
      image: "/assets/images/case-study/new-images/instapp-deal/InstApp-Deal.png",
    },
    solution: {
      title: "Built for measurable impact",
      lead: "eForte helped InstApp Deal personalize deal discovery based on each user's actual redemption behavior.",
      items: [{"title": "Foundational Data Layer for redemption data", "body": "Deal views, redemptions, and category preferences were unified into a single user profile, giving the platform a clear picture of each shopper's actual interests."}, {"title": "Velocity AI for deal matching", "body": "A Velocity AI model matches each user to the deals they're statistically most likely to redeem, based on their unified profile and behavior patterns."}, {"title": "Agentic Orchestration for notification targeting", "body": "Agentic Orchestration automatically targets push notifications to the users most likely to act on a given deal, rather than broadcasting to entire categories or locations."}],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Personalized matching has improved deal relevance and redemption rates across InstApp Deal's user base.",
      items: [{"title": "Higher redemption rates", "body": "Users now redeem a higher share of the deals they're notified about, since offers are matched to their actual interests."}, {"title": "Improved notification engagement", "body": "More relevant targeting has increased how often users open and act on push notifications rather than ignoring them."}, {"title": "Better retailer outcomes", "body": "Retailers see their offers reaching shoppers who are statistically more likely to redeem them, improving the value of participating in the platform."}],
    },
    closing: "By personalizing deal discovery around real redemption behavior, InstApp Deal turned broad, low relevance notifications into targeted offers users actually act on.",
  },
};

Object.assign(impactStudyNarratives, enterpriseCaseStudyOverrides);

export const impactStudySlugs = Object.keys(impactStudyNarratives);
