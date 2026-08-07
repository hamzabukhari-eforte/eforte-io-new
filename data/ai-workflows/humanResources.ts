import type { AiWorkflowDomain } from "./types";

export const humanResourcesDomain: AiWorkflowDomain = {
  slug: "human-resources",
  label: "Human Resources",
  theme: "Agentic Talent Lifecycle Workflows",
  headline: "Human-Centric HR, Powered by Intelligent Automation.",
  body: "The competition for talent is fierce. eForte helps you win by creating a seamless, responsive candidate experience and optimizing internal HR operations, allowing your People Team to focus on culture and strategy.",
  workflows: [
    {
      title: "Resume Screening & Candidate Matching",
      challenge:
        "Recruiters are buried in resumes, making it difficult to spot the best talent quickly.",
      solution:
        "Our AI assistant unbiasedly analyzes incoming applications against job descriptions. It identifies qualified candidates based on skills, experience, and cultural fit criteria, ranking them for recruiter review.",
      impact:
        "A significantly shorter time-to-hire and a higher quality of candidate shortlists.",
    },
    {
      title: "Employee Onboarding Automation",
      challenge:
        "A disorganized onboarding process leads to low engagement and slow ramp-up time for new hires.",
      solution:
        'Orchestrate the perfect "Day One." From the moment an offer is accepted, this workflow triggers document collection, provisions IT access, assigns training modules, and schedules welcome meetings—all automatically.',
      impact:
        "New hires feel welcomed and productive immediately, while HR admin time is minimized.",
    },
    {
      title: "Performance Review Coordination",
      challenge:
        "Managing performance cycles manually leads to missed deadlines and inconsistent data.",
      solution:
        "We automate the logistics of the review cycle. The system manages scheduling, sends smart reminders, distributes evaluation forms, and compiles results into unified reports for management review.",
      impact:
        "A consistent, fair, and timely evaluation process that drives employee development.",
    },
  ],
  workflowChips: [
    "Resume screening",
    "Onboarding automation",
    "Performance review coordination",
  ],
  diagramSrc:
    "/assets/images/package/business-domains/human-resources-talent-workflows.svg",
  diagramAlt: "Agentic talent lifecycle workflow diagram",
  pillars: {
    agenticOrchestration: "Planner → Execution → Intelligence → Governance",
    velocityAi: "AI-powered talent lifecycle accelerators.",
    foundationalDataLayer:
      "HRIS, employee data, skills frameworks, and compliance records.",
  },
};
