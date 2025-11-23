"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProjectCard, { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    id: "Academia Assistant",
    title: "Academia Assistant",
    description: "An AI-augmented LMS for admins, professors, and students; generates course content, outlines, lecture materials, and exam questions using LLMs.",
    tech: ["React", "Next.js", "LLMs", "LangChain", "LangGraph"],
    liveUrl: "https://drive.google.com/file/d/11uv7suJCrWZyV9ODupy5CpZCxVRvzIbb/view?usp=sharing",
    image: "/projects/ask-db.png",
  },
  {
    id: "ask-db",
    title: "AskDB - AI Agent for Database Queries",
    description: "An AI Agent that allows users to ask questions about the database and get the answers.",
    tech: ["Relevance AI", "Neon Database", "Slack"],
    liveUrl: "https://drive.google.com/file/d/11uv7suJCrWZyV9ODupy5CpZCxVRvzIbb/view?usp=sharing",
    repoUrl: "https://app.relevanceai.com/marketplace/d7b62b/b0a27b06-d3d8-4354-a29c-ffadd11c5983/search?search=ask+db&listing=357899e5-1166-44a9-a0cf-664aedda7b50",
    image: "/projects/ask-db.png",
    documentationUrl: "https://drive.google.com/file/d/1rf8mBjWKs51NYY-62mi3mtv0bpHv7Tus/view"
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
    id: "Personal Finance Tracker",
    title: "Personal Finance Tracker",
    description: "A web application that allows users to track their personal finances and get insights on their spending.",
    tech: ["Next.js", "Express.js", "PostgreSQL"],
    repoUrl: "https://github.com/YUMNAWARIS/PersonalFinance",
    image: "/projects/personal-finance.png",
  },
];

export default function ProjectsPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, position: "relative", overflow: "hidden",
      "&:before": { content: '""', position: "absolute", left: -140, top: -120, width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(156,39,176,0.18), transparent 70%)", filter: "blur(10px)" },
      "&:after": { content: '""', position: "absolute", right: -140, bottom: -120, width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(25,118,210,0.18), transparent 70%)", filter: "blur(10px)" }
    }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Projects
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
            Personal Projects I&apos;ve worked on
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {projects.map((p) => (
            <Grid key={p.title} size={{ xs: 12, md: 6 }}>
              <ProjectCard project={p} />
              </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}