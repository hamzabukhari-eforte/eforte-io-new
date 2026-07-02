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
    id: "jose",
    quote:
      "Working at eForte has been a game-changer for my career. The culture of innovation and the support from leadership make every day exciting and rewarding.",
    name: "Jose Manuel Piro",
    role: "SRE",
    avatarSrc: "/assets/images/velocity-ai/avatar-2.jpg",
    bgClass: "bg-emerald-50",
  },
  {
    id: "sebastian",
    quote:
      "The collaborative environment here is unmatched. I've grown more in two years at eForte than in five years at my previous company. The team truly invests in your development.",
    name: "Sebastián Díaz",
    role: "Data Studio Manager",
    avatarSrc: "/assets/images/velocity-ai/avatar-3.jpg",
    bgClass: "bg-sky-50",
  },
  {
    id: "maria",
    quote:
      "What I love most is the balance between challenging projects and a supportive team. eForte gives you the space to innovate while ensuring you never feel alone in the process.",
    name: "María González",
    role: "Product Designer",
    avatarSrc: "/assets/images/velocity-ai/avatar-4.jpg",
    bgClass: "bg-violet-50",
  },
  {
    id: "alex",
    quote:
      "From day one, I felt welcomed and valued. The mentorship programs and learning opportunities have helped me advance my skills while working on meaningful AI-native products.",
    name: "Alex Chen",
    role: "AI Engineer",
    avatarSrc: "/assets/images/velocity-ai/avatar-5.jpg",
    bgClass: "bg-rose-50",
  },
  {
    id: "lucia",
    quote:
      "eForte's commitment to excellence pushes you to do your best work, but always with empathy. It's rare to find a company that cares this much about both clients and people.",
    name: "Lucía Fernández",
    role: "Engineering Manager",
    avatarSrc: "/assets/images/case-study/Chris_Morton.jpg",
    bgClass: "bg-amber-50",
  },
  {
    id: "daniel",
    quote:
      "The flexibility to work across offices and the emphasis on work-life balance make eForte stand out. I've built lasting friendships while delivering impactful solutions.",
    name: "Daniel Rivera",
    role: "Full Stack Developer",
    avatarSrc: "/assets/images/case-study/Raymond_Rienks.jpg",
    bgClass: "bg-indigo-50",
  },
];
