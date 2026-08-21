export type SkillCategory = {
  name: string;
  skills: string[];
};

/** Skills grouped by category, as listed on the latest resume (plus LinkedIn's top skills). */
export const skillCategories: SkillCategory[] = [
  {
    name: "AI & GenAI",
    skills: [
      "LLMs",
      "Generative AI",
      "AI Agents",
      "Agentic Workflows",
      "RAG Systems",
      "LangChain",
      "LangGraph",
      "OpenAI API",
      "Prompt Engineering",
      "NLP",
      "Multimodal AI",
      "TensorFlow",
      "Pinecone",
      "FAISS",
      "Tool-based Reasoning",
      "Agentic Design Patterns",
      "LLM-based Workflow Automation",
    ],
  },
  {
    name: "Data Science",
    skills: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Data Cleaning", "Feature Engineering", "Model Evaluation", "Data Visualization"],
  },
  {
    name: "Backend, Databases & APIs",
    skills: [
      "Python",
      "JavaScript",
      "Java",
      "SQL",
      "C#",
      "React.js",
      "Node.js",
      "Express.js",
      "GraphQL",
      "Apache Kafka",
      "Spring Boot",
      "PostgreSQL",
      "MongoDB",
      "Async Processing",
      "Git",
      "Bitbucket",
    ],
  },
  {
    name: "Cloud & Infrastructure",
    skills: ["AWS (EC2, S3)", "Amazon QuickSight", "Docker"],
  },
  {
    name: "Software Engineering & Practices",
    skills: [
      "Microservices Architecture",
      "Design Patterns",
      "Multi-tenant Architecture",
      "Clean Code",
      "Scalable System Design",
      "API-first Development",
      "Prototyping",
      "Technical Documentation",
      "Stakeholder Communication",
    ],
  },
  {
    name: "Automation & Tools",
    skills: ["n8n", "React Tabulator", "Formik", "Yup"],
  },
];
