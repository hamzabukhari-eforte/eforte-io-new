import { 
  FaHeadset, 
  FaChartLine, 
  FaCalculator, 
  FaUsers, 
  FaShieldAlt, 
  FaCheckSquare 
} from "react-icons/fa";

export const defaultServiceCategories = [
  {
    id: "customer-service",
    icon: <FaHeadset />,
    text: "Customer Service & Support",
  },
  {
    id: "sales-marketing",
    icon: <FaChartLine />,
    text: "Sales & Marketing",
  },
  {
    id: "financial",
    icon: <FaCalculator />,
    text: "Financial Operations",
  },
  {
    id: "human-resources",
    icon: <FaUsers />,
    text: "Human Resources",
  },
  {
    id: "operations-compliance",
    icon: <FaShieldAlt />,
    text: "Operations & Compliance",
  },
  {
    id: "project-management",
    icon: <FaCheckSquare />,
    text: "Project Management & Data",
  },
];
