export interface Testimonial {
  id: string;
  companyName: string;
  /** Short quote used on homepage carousel */
  testimonial: string;
  author: string;
  title: string;
  website?: string;
}

export interface ClientReview {
  id: string;
  companyName: string;
  description: string;
  category: string;
  duration: string;
  /** Third meta row — Service Offerings or Project Size */
  metaLabel: string;
  metaValue: string;
  /** Pink headline under the review */
  comment: string;
  rating: number;
  feedback: string;
  author: string;
  /** Full designation line e.g. "CEO & Founder - krank.com" */
  designation: string;
  /** Optional local avatar under /assets/images/reviews/ */
  avatarSrc?: string;
}

/**
 * Full client reviews from the previous eForte website (eforte.io/reviews).
 */
export const clientReviews: ClientReview[] = [
  {
    id: "krank",
    companyName: "Krank",
    description:
      "Krank is a platform for the heavy machinery industry. Their aim is to revolutionize how market buys and sells heavy equipment. eForte delivered Timed and Day Auctions, Auto Bidding, Network privacy and detailed subscription module.",
    category: "Web Apps Development",
    duration: "14 Months",
    metaLabel: "Service Offerings",
    metaValue: "Staff Augmentation Solutions",
    comment:
      "Extremely competent firm, presents an unrivalled value proposition.",
    rating: 4.5,
    feedback:
      "The IT professionals provided by eForte showcased professionalism from project estimation to delivery, enhancing the Krank project experience. Their enthusiastic approach and expertise injected fresh energy into the complex endeavor, making them invaluable partners in navigating challenges.",
    author: "Mark Turner",
    designation: "CEO & Founder - krank.com",
    avatarSrc: "/assets/images/reviews/Mark_Turnar.png",
  },
  {
    id: "investment-markets",
    companyName: "Investment Markets",
    description:
      "InvestmentMarkets is a platform for the potential investors that brings them high net worth investment opportunities, primarily aiming for growth, income or both. eForte delivered customized user and admin dashboards, feature to list comprehensive investment listings with back and forth communication and real time online Track Changes feature in documents.",
    category: "Web Apps and Mobile Apps Development",
    duration: "14 Months",
    metaLabel: "Service Offerings",
    metaValue: "Staff Augmentation Solutions",
    comment:
      "Undoubted commitment by eForte to solve any problems or issues raised by us with the delivered product.",
    rating: 5,
    feedback:
      "As an active participant in the investment market, I've witnessed firsthand the invaluable contributions of eForte's staff augmentation services. Moreover, their integrity and ethical conduct have cemented our trust in their services.",
    author: "Chris Morton",
    designation: "Owner - investmentmarkets.com.au",
    avatarSrc: "/assets/images/reviews/Chris_Morton.jpg",
  },
  {
    id: "oddysee",
    companyName: "Oddysee",
    description:
      "GRC Oddysee is the platform to automate the govt. licensing process for domains that require a lot of documentation/plans. It has a documentation module with pre written templates of documents to choose from. eForte delivered customized user and admin dashboards, features to automate civic license documentation requirements by answering questions with intuitive UI and Forecasting tool to create P&L statements, Cash Flow and Financial forecastings for businesses.",
    category: "Web Apps for User, Admin and Consultants Development",
    duration: "21 Months and continuing",
    metaLabel: "Project Size",
    metaValue: "USD 160,000 plus",
    comment:
      "eForte handled our project very professionally and intelligently.",
    rating: 5,
    feedback:
      "It was a difficult idea that needed in-depth understanding of project management, business planning, and finance. This software didn't previously exist, making it even more difficult to develop. eForte handled it very professionally and intelligently. They took the project in their care and with little input from our side they were able to amaze us with the solutions, modules and feature sets they developed.",
    author: "Zeta Ceti",
    designation: "CEO GRC - greenrushconsulting.com",
    avatarSrc: "/assets/images/reviews/Zeta.jpg",
  },
  {
    id: "instapp",
    companyName: "InstApp",
    description:
      "InstappDeals is a discount coupon/promotion platform for the retail industry. eForte delivered Promotions by Store owners, Dealbook feature, Custom Chat one to one and one to many.",
    category: "iOS and Android Mobile Apps Development",
    duration: "22 Months",
    metaLabel: "Project Size",
    metaValue: "USD 90,000 plus",
    comment:
      "eForte truly proved to be a tremendous support for our Tech venture",
    rating: 5,
    feedback:
      "Our idea of the product matured over time and eForte worked with us tirelessly for that purpose. They truly proved to be a tremendous support for our venture in terms of technology, business ethics and domain knowledge.",
    author: "Kamran Chaudary",
    designation: "CEO - Instappdeals",
    avatarSrc: "/assets/images/reviews/Kamran.png",
  },
  {
    id: "prism",
    companyName: "Prism",
    description:
      "Prism is a procedure for forecasting time series data based on an additive model where non-linear trends are fit with yearly, weekly, and daily seasonality, plus holiday effects. eForte delivered integration of 3rd party APIs, User and Admin dashboards and interactive UI for charts and graphs.",
    category: "Web Apps for User, Admin and Consultants",
    duration: "Ongoing for 21 Months",
    metaLabel: "Service Offerings",
    metaValue: "Staff Augmentation Solutions",
    comment:
      "I am happy to say that the engineers at eForte feel as part of our team.",
    rating: 5,
    feedback:
      "During our project, eForte's IT Engineers consistently displayed a strong customer service attitude, promptly addressing any issues raised with the delivered product. Their integrity and ethical conduct were evident throughout, ensuring a positive and professional collaboration experience.",
    author: "Raymond Rienks",
    designation: "Product Owner @ stratex.nl",
    avatarSrc: "/assets/images/reviews/Raymond_Rienks.jpg",
  },
  {
    id: "stn-inc",
    companyName: "STN Inc.",
    description:
      "STN Site Data Protection Services (SDP) is a leading partner with Cohesity. Their unique Backup as a Service makes worrying about backups a thing of the past. STN Inc. partnered with eForte to deliver a Managed Services Portal where clients can choose and activate services and components that they require for their backup and disaster recovery procedures.",
    category: "Web and Mobile Apps for User, Admin and Clients",
    duration: "6 Months",
    metaLabel: "Project Size",
    metaValue: "USD 65,000",
    comment:
      "eForte solutions delivery was impeccable that matched and exceeded our expectations.",
    rating: 5,
    feedback:
      "eForte worked through the delivery of the project with utmost professionalism, transparency and great technical knowledge. Their effective documentation processes and client communications kept us abreast of our project during the life cycle of the development.",
    author: "Sabur Man",
    designation: "Founder - stninc.com",
  },
  {
    id: "ce-trainer",
    companyName: "Ce-trainer",
    description:
      "Ce-trainer is a Learning Management System. eForte enhanced the LMS with improved student navigation, Google Drive uploaders, a comprehensive Student Dashboard, and an Admin Dashboard with robust filtering for streamlined administration.",
    category: "Learning Management System (LMS)",
    duration: "3 months and Counting",
    metaLabel: "Service Offerings",
    metaValue: "Staff Augmentation Solutions",
    comment:
      "We're delighted to say that the engineers from eForte are an integral part of our team.",
    rating: 5,
    feedback:
      "Ce-trainer's LMS underwent significant enhancements, improving student navigation with Google Drive uploaders and a comprehensive Student Dashboard. The Admin Dashboard now includes a robust filter process, streamlining administrative tasks for better efficiency and promising continued success.",
    author: "Huzefa Ammiwala",
    designation: "CTO - cetrainer.nl",
  },
  {
    id: "insurance-market",
    companyName: "Insurance Market",
    description:
      "Insurance Market is a platform for comparing and purchasing insurance products from various providers. eForte's staff enhanced the platform by developing an advanced CRM system with AML modules, third-party API integrations, and proactive Anti-Money Laundering capabilities.",
    category: "Customer Relationship Management (CRM)",
    duration: "10 months and Counting",
    metaLabel: "Service Offerings",
    metaValue: "Staff Augmentation Solutions",
    comment:
      "We're happy to have eForte's engineers working alongside us.",
    rating: 5,
    feedback:
      "Insurance Market is a platform for comparing and purchasing insurance products from various providers. eForte's staff enhanced the platform by developing an advanced CRM system with modules targeting money laundering concerns, integrating third-party APIs, and creating a proactive Anti-Money Laundering module to improve financial integrity.",
    author: "Hussain Fakhruddin",
    designation: "CTO - Insurance Market.ae",
  },
  {
    id: "reciprocity-health",
    companyName: "Reciprocity Health",
    description:
      "Reciprocity Health partners with eForte to modernize healthcare platforms with intelligent agents that continuously improve delivery and patient-facing workflows across the product lifecycle.",
    category: "Healthcare Platform Development",
    duration: "Ongoing partnership",
    metaLabel: "Service Offerings",
    metaValue: "AI-Augmented Software",
    comment:
      "They gave our platform a set of agents that keep improving it every day.",
    rating: 5,
    feedback:
      "eForte didn't just modernize our platform, they gave it a set of agents that keep improving it every day.",
    author: "Jon Silvon",
    designation: "Reciprocity Health",
  },
];

/** Homepage carousel — derived from full reviews (feedback + author) */
export const testimonials: Testimonial[] = clientReviews.map((r) => {
  const dash = r.designation.includes(" - ")
    ? r.designation.split(" - ")
    : r.designation.includes(" @ ")
      ? r.designation.split(" @ ")
      : [r.designation];
  return {
    id: r.id,
    companyName: r.companyName,
    testimonial: r.feedback,
    author: r.author,
    title: dash[0]?.trim() ?? r.designation,
    website: dash[1]?.trim(),
  };
});

export const TESTIMONIALS_PER_SLIDE = 3;

export function getTestimonialSlides(
  items: Testimonial[] = testimonials,
  perSlide = TESTIMONIALS_PER_SLIDE
): Testimonial[][] {
  const slides: Testimonial[][] = [];
  for (let i = 0; i < items.length; i += perSlide) {
    slides.push(items.slice(i, i + perSlide));
  }
  return slides;
}
