export type EmployeeTestimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
  bgClass: string;
};

export const employeeTestimonials: EmployeeTestimonial[] = [
  {
    id: "priya",
    quote:
      "What I love most about eForte is that no one treats you like a junior or a senior everyone's ideas get heard. I've worked on three different industries in two years, and every project has sharpened a different skill.",
    name: "Priya Nandakumar",
    role: "Software Engineer",
    avatarSrc: "/assets/images/velocity-ai/avatar-2.jpg",
    bgClass: "bg-emerald-50",
  },
  {
    id: "marcus",
    quote:
      "Coming from a much larger company, the thing that surprised me most was how much ownership you get here. If you see a better way to solve a problem, you're trusted to go build it.",
    name: "Marcus Idowu",
    role: "Product Designer",
    avatarSrc: "/assets/images/velocity-ai/avatar-4.jpg",
    bgClass: "bg-sky-50",
  },
  {
    id: "lucia",
    quote:
      "eForte's 'one Team, one Client' mindset isn't just a slogan, it genuinely shapes how we're staffed and how we collaborate day to day. It makes the work feel like ours, not just a ticket to close.",
    name: "Lucía Fernández",
    role: "Project Manager",
    avatarSrc: "/assets/images/case-study/Chris_Morton.jpg",
    bgClass: "bg-violet-50",
  },
  {
    id: "daniyar",
    quote:
      "I joined as a QA engineer and within a year I was leading test automation strategy for one of our biggest accounts. The growth here happens as fast as you're ready for it.",
    name: "Daniyar Bekov",
    role: "QA Lead",
    avatarSrc: "/assets/images/velocity-ai/avatar-3.jpg",
    bgClass: "bg-rose-50",
  },
];
