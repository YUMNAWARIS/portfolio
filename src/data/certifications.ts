export type CertProvider = "coursera" | "udemy" | "deeplearning.ai";

export type Certification = {
  title: string;
  provider: CertProvider;
  issuer: string;
  date: string;
  url: string;
  skills: string[];
};

/** The provider groups shown (in order) on the MOOCs & Certs page. */
export const certProviderGroups: { key: CertProvider; label: string }[] = [
  { key: "deeplearning.ai", label: "DeepLearning.AI" },
  { key: "coursera", label: "Coursera" },
  { key: "udemy", label: "Udemy" },
];

/** MOOCs and certificates completed. Add new entries here. */
export const certifications: Certification[] = [
  // ---- Coursera ----
  {
    title: "Supervised Machine Learning: Regression and Classification",
    provider: "coursera",
    issuer: "Coursera",
    date: "2025",
    url: "https://coursera.org/share/0947c51daf300959fbd28e17c95e5b8c",
    skills: ["Regression Models", "Classification Models"],
  },
  {
    title: "Advanced Learning Algorithms",
    provider: "coursera",
    issuer: "Coursera",
    date: "2025",
    url: "https://coursera.org/share/c152cbe595484279f79ec5c3b48b7099",
    skills: ["Neural Networks", "Decision Tree Models"],
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    provider: "coursera",
    issuer: "Coursera",
    date: "2025",
    url: "https://coursera.org/share/fb7522b4fef7cf5229c6070c6ff10032",
    skills: ["Unsupervised Algorithm", "Recommender systems", "Reinforcement Learning"],
  },
  {
    title: "Machine Learning Specialization",
    provider: "coursera",
    issuer: "Coursera",
    date: "2025",
    url: "https://coursera.org/share/c6cdc13031cff7b4755ef5c68c10e578",
    skills: ["Machine Learning", "Artificial Neural Networks", "Reinforcement Learning"],
  },

  // ---- Udemy ----
  {
    title: "Mastering PostgreSQL: Learning By Real Examples",
    provider: "udemy",
    issuer: "Udemy",
    date: "2023",
    url: "https://www.udemy.com/certificate/UC-070ad4bc-b3ab-414e-8006-82bfcb127d18/",
    skills: ["Postgres", "Database", "sql", "aggregation", "joins", "advance sql"],
  },
  {
    title: "Fundamentals of Backend Engineering",
    provider: "udemy",
    issuer: "Udemy",
    date: "2023",
    url: "https://www.udemy.com/certificate/UC-070ad4bc-b3ab-414e-8006-82bfcb127d18/",
    skills: [
      "Backend Design Pattern",
      "HTTP/1.1",
      "HTTP/2",
      "HTTP/3",
      "gRPC",
      "WebSockets",
      "WebRTC",
      "TLS 1.3",
      "QUIC",
      "TCP/UDP",
      "Pub/Sub",
      "Long/Short Polling",
      "Async I/O (Linux)",
    ],
  },

  // ---- DeepLearning.AI ----
  {
    title: "Agentic AI",
    provider: "deeplearning.ai",
    issuer: "DeepLearning.AI",
    date: "2025",
    url: "https://learn.deeplearning.ai/certificates/11cff4c0-24ed-4e45-b38e-01c5ed13005c",
    skills: ["Agentic AI", "LLMs", "LangChain"],
  },
];
