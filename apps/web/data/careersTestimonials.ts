export type EmployeeTestimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
  bgClass: string;
};

const QUOTES = [
  "What I love most about eForte is that no one treats you like a junior or a senior everyone's ideas get heard. I've worked on three different industries in two years, and every project has sharpened a different skill.",
  "Coming from a much larger company, the thing that surprised me most was how much ownership you get here. If you see a better way to solve a problem, you're trusted to go build it.",
  "eForte's 'one Team, one Client' mindset isn't just a slogan, it genuinely shapes how we're staffed and how we collaborate day to day. It makes the work feel like ours, not just a ticket to close.",
  "The growth here happens as fast as you're ready for it. Seniors actually pair with you, and you're trusted to take on harder work instead of waiting in line for it.",
] as const;

const AVATARS = [
  "/assets/images/capabilities/ai/avatar-gabriel-fagundez.jpg",
  "/assets/final-images/capabilities/insights-profile-images/Benjamin-USA.jpg",
  "/assets/final-images/capabilities/insights-profile-images/Edward-British.jpg",
  "/assets/final-images/capabilities/insights-profile-images/image.png",
] as const;

const BACKGROUNDS = [
  "bg-emerald-50",
  "bg-sky-50",
  "bg-violet-50",
  "bg-rose-50",
  "bg-amber-50",
  "bg-teal-50",
] as const;

const TEAM: { id: string; name: string; role: string }[] = [
  { id: "bilal", name: "Bilal Saeed", role: "PHP Senior Software Engineer" },
  {
    id: "ubaid",
    name: "Ubaid Hussain",
    role: "FullStack Senior Software Engineer",
  },
  {
    id: "aurangzaib",
    name: "AurangZaib Najam",
    role: "PHP Senior Software Engineer",
  },
  {
    id: "abubakar",
    name: "Abubakar Siddiq",
    role: "Frontend Next.js Software Engineer",
  },
  {
    id: "abdul",
    name: "Abdul Subhan Seth",
    role: "Frontend Next.js Software",
  },
  {
    id: "mujtaba",
    name: "Mujtaba Ahmed",
    role: "Associate .Net Developer",
  },
  {
    id: "inam",
    name: "Inam Ullah Khan",
    role: "Full Stack Senior Software Engineer / Team Lead",
  },
  {
    id: "alishan",
    name: "Alishan Salim Jessani",
    role: "Associate Project Manager",
  },
  {
    id: "huzefa",
    name: "Huzefa Battiwala",
    role: "Backend Node.js Software Engineer",
  },
  {
    id: "dawood",
    name: "Dawood Hameed",
    role: "Backend Node.js Senior Software Engineer",
  },
  {
    id: "sharjil",
    name: "Sharjil Bin Yousaf",
    role: "PHP Senior Software Engineer",
  },
  {
    id: "hammad",
    name: "Hammad Ahmed Khan",
    role: "PHP Senior Software Engineer",
  },
  {
    id: "haseeb",
    name: "Mirza Haseeb Baig",
    role: "PHP Senior Software Engineer",
  },
  {
    id: "arsalan",
    name: "Arsalan Mughal",
    role: "PHP Senior Software Engineer",
  },
];

export const employeeTestimonials: EmployeeTestimonial[] = TEAM.map(
  (member, index) => ({
    ...member,
    quote: QUOTES[index % QUOTES.length],
    avatarSrc: AVATARS[index % AVATARS.length],
    bgClass: BACKGROUNDS[index % BACKGROUNDS.length],
  })
);
