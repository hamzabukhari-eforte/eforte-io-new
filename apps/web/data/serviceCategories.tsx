import {
  FaHeadset,
  FaChartLine,
  FaCalculator,
  FaUsers,
  FaShieldAlt,
  FaCheckSquare,
} from "react-icons/fa";

export const defaultServiceCategories = [
  {
    id: "customer-service",
    icon: <FaHeadset />,
    text: "Customer Service & Support",
    href: "/ai-workflows/customer-service",
  },
  {
    id: "sales-marketing",
    icon: <FaChartLine />,
    text: "Sales & Marketing",
    href: "/ai-workflows/sales-marketing",
  },
  {
    id: "financial",
    icon: <FaCalculator />,
    text: "Financial Operations",
    href: "/ai-workflows/financial-operations",
  },
  {
    id: "human-resources",
    icon: <FaUsers />,
    text: "Human Resources",
    href: "/ai-workflows/human-resources",
  },
  {
    id: "operations-compliance",
    icon: <FaShieldAlt />,
    text: "Operations & Compliance",
    href: "/ai-workflows/operations-compliance",
  },
  {
    id: "project-management",
    icon: <FaCheckSquare />,
    text: "Project Management & Data",
    href: "/ai-workflows/project-management-data",
  },
];
