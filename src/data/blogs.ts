export type Blog = {
  title: string;
  description: string;
  /** Omit while the post is unpublished — the card will show "Coming soon". */
  url?: string;
  /** Already-formatted display date, e.g. "Sep 6, 2025" — rendered as-is, not re-parsed. */
  date?: string;
  tags?: string[];
};

/** Writeups shown on the Writeups page. Add new entries here. */
export const blogs: Blog[] = [
  {
    title: "A Brief Introduction To AI Agents",
    description:
      "A brief overview of AI agents, what they are, why they matter, and how they can be used to build AI-powered applications.",
    url: "https://medium.com/@yumnaahwaris/a-brief-introduction-to-ai-agents-79f68b6cfb52",
    tags: ["AI Agents", "AI", "LangChain", "LangGraph"],
    date: "Sep 6, 2025",
  },
  {
    title: "The Gist of LangChain",
    description:
      "A brief overview of LangChain, a library for building language model applications - what it is, why it matters, and how it can be used to build AI-powered applications.",
    url: "https://medium.com/@yumnaahwaris/the-gist-of-langchain-9e01be3dd714",
    tags: ["LangChain", "AI", "LangGraph"],
    date: "Sep 1, 2025",
  },
  {
    title: "What Drives Exam Scores? A Clean, Reproducible ML Pipeline",
    description: "Analyzing behavioral, school, and family factors to predict exam scores.",
    url: "https://kaggle.com/writeups/yumnawaris/what-drives-exam-scores-a-clean-reproducible-ml-pi",
    tags: ["ML", "Data Analysis", "Data Science", "Kaggle"],
    date: "Aug 31, 2025",
  },
];
