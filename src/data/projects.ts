import type { Project } from "@/components/ProjectCard";

/** Personal projects shown on the Projects page. Add new entries here. */
export const projects: Project[] = [
  {
    id: "academia-assistant",
    title: "Academia Assistant",
    description:
      "An AI-augmented LMS for admins, professors, and students; generates course content, outlines, lecture materials, and exam questions using LLMs.",
    tech: ["LLMs", "LangChain", "LangGraph", "Streamlit"],
    documentationUrl: "https://drive.google.com/drive/u/2/folders/1gvkfV1hQFn94flZiT0eZIUr82z4KhcnP",
    image: "/projects/ask-db.png",
  },
  {
    id: "ask-db",
    title: "AskDB - AI Agent for Database Queries",
    description: "An AI Agent that allows users to ask questions about the database and get the answers.",
    tech: ["Relevance AI", "Neon Database", "Slack"],
    liveUrl: "https://drive.google.com/file/d/11uv7suJCrWZyV9ODupy5CpZCxVRvzIbb/view?usp=sharing",
    repoUrl:
      "https://app.relevanceai.com/marketplace/d7b62b/b0a27b06-d3d8-4354-a29c-ffadd11c5983/search?search=ask+db&listing=357899e5-1166-44a9-a0cf-664aedda7b50",
    image: "/projects/ask-db.png",
    documentationUrl: "https://drive.google.com/file/d/1rf8mBjWKs51NYY-62mi3mtv0bpHv7Tus/view",
  },
  {
    id: "insight-beam",
    title: "Insight Beam - Book Review Web Application",
    description: "A web application that allows users to review books and share their thoughts with others.",
    tech: ["Next.js", "Express.js", "PostgreSQL"],
    repoUrl: "https://github.com/YUMNAWARIS/insight-beam",
    image: "/projects/insight-beam.png",
    liveUrl: "https://drive.google.com/file/d/11ZQOPeAgK6h72WhEQ05IAINe0qLY8DNb/view?usp=sharing",
  },
  {
    id: "personal-finance-tracker",
    title: "Personal Finance Tracker",
    description: "A web application that allows users to track their personal finances and get insights on their spending.",
    tech: ["Next.js", "Express.js", "PostgreSQL"],
    repoUrl: "https://github.com/YUMNAWARIS/PersonalFinance",
    image: "/projects/personal-finance.png",
  },
];
