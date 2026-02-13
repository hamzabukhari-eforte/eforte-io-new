export interface TimelineItem {
  id: number;
  year: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    year: "2006",
    description: "Our beginning: Founded with a vision in Uruguay.",
    imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    imageAlt: "Our beginning",
  },
  {
    id: 2,
    year: "2010",
    description: "Transition to solely providing technology services to the US market.",
    imageSrc: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    imageAlt: "Technology services",
  },
  {
    id: 3,
    year: "2015",
    description: "eForte was founded in Montevideo, Uruguay.",
    imageSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=8",
    imageAlt: "eForte founded in Montevideo, Uruguay",
  },
  {
    id: 4,
    year: "2022",
    description: "Great Place to Work recognition as the number one software company to work at.",
    imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    imageAlt: "Great Place to Work",
  },
  {
    id: 5,
    year: "2023",
    description: "We proudly join as a portfolio company accelerating our vision to lead in modern digital services.",
    imageSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    imageAlt: "Portfolio company",
  },
  {
    id: 6,
    year: "2025",
    description:
      "In 2025 eForte launched a comprehensive AI strategy to transform organizations from Digital-Native to AI-Native.",
    imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    imageAlt: "AI strategy",
  },
];
