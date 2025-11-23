"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProjectCard, { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    title: "Nexprobiz GEN - Digital Accountant",
    description:
      "Financial accounting software enabling ledgers, transactions, and automated reports; later enhanced with agentic AI and LangGraph for automation and insights.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "LangChain", "LangGraph", "n8n"],
  },
  {
    title: "LearnScope - Academia Assistant",
    description:
      "AI-augmented LMS for admins, professors, and students; generates course content, outlines, lecture materials, and exam questions using LLMs.",
    tech: ["React", "Next.js", "LLMs", "LangChain", "LangGraph"],
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
            Personal and Work related Projects I've worked on
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


