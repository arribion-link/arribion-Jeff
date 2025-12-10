type serviceProp = {
  id: number;
  title: string;
  description: string;
};

const services: serviceProp[] = [
  {
    id: 1,
    title: "AI Engineering & Intelligent Systems",
    description:
      "Designing and deploying AI-powered solutions. Focus on Intergrating AI into applications.",
  },
  {
    id: 2,
    title: "Web Development & Scalable System Design",
    description:
      "Building robust, maintainable platforms with modern frameworks (React, Next.js, TypeScript, Tailwind). Emphasis on responsive, accessible, and user-centric design.",
  },
  {
    id: 3,
    title: "Data-Driven Architecture & Edge Solutions",
    description:
      "Implementing secure coding practices, zero-trust architectures, and compliance-ready workflows to protect users and data.",
  },
];

export default services;
