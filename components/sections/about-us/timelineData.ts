export interface TimelineItem {
  id: number;
  year: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const timelineImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
];

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    year: "2013",
    description:
      "eForte is founded as a software development and technology solutions firm, built on the belief that shared knowledge and technical excellence can transform how businesses operate.",
    imageSrc: timelineImages[0],
    imageAlt: "eForte founded in 2013",
  },
  {
    id: 2,
    year: "2015",
    description:
      'We formalize our Agile practice into a full Scrum delivery model, introducing our "Full Focus, One Team, One Client" approach to every engagement.',
    imageSrc: timelineImages[1],
    imageAlt: "Agile Scrum delivery model",
  },
  {
    id: 3,
    year: "2017",
    description:
      "Our team grows past 40 dedicated engineers, and we expand our staff augmentation practice to support long term embedded partnerships with clients.",
    imageSrc: timelineImages[2],
    imageAlt: "Team growth and staff augmentation",
  },
  {
    id: 4,
    year: "2018",
    description:
      'eForte is awarded the "Global Entrepreneur" title by IBM, recognizing our contribution to technology innovation.',
    imageSrc: timelineImages[3],
    imageAlt: "IBM Global Entrepreneur award 2018",
  },
  {
    id: 5,
    year: "2019",
    description:
      'We are awarded the "Global Entrepreneur" title by IBM for a second consecutive year, and our Business Analysis practice earns accreditation from the Australian Computer Society.',
    imageSrc: timelineImages[4],
    imageAlt: "IBM Global Entrepreneur award 2019",
  },
  {
    id: 6,
    year: "2021",
    description:
      "We deepen our investment in data engineering and analytics, laying the early groundwork for what would become our Foundational Data Layer.",
    imageSrc: timelineImages[5],
    imageAlt: "Data engineering and analytics investment",
  },
  {
    id: 7,
    year: "2023",
    description:
      "We launch our Agentic Orchestration practice, helping clients coordinate autonomous AI agents across core business workflows.",
    imageSrc: timelineImages[6],
    imageAlt: "Agentic Orchestration practice launch",
  },
  {
    id: 8,
    year: "2025",
    description:
      "eForte introduces Velocity AI, our framework for embedding fast, adaptive machine learning directly into client products and operations.",
    imageSrc: timelineImages[7],
    imageAlt: "Velocity AI framework launch",
  },
  {
    id: 9,
    year: "2026",
    description:
      "We expand our Impact Studies portfolio across seven industries, reflecting eForte's growth into a full AI native software and staff augmentation partner.",
    imageSrc: timelineImages[8],
    imageAlt: "Impact Studies portfolio expansion",
  },
];
