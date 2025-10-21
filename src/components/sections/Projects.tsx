"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProjectCard, { Project } from "@/components/ProjectCard";

const mockProjects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal site built with Next.js and Material UI.",
    tech: ["Next.js", "MUI", "TypeScript"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Dashboard UI",
    description: "Responsive admin dashboard with charts and tables.",
    tech: ["React", "MUI", "Recharts"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Design System",
    description: "A reusable component library for internal apps.",
    tech: ["Storybook", "TS", "MUI"],
    repoUrl: "#",
  },
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }, position: "relative", overflow: "hidden",
      "&:before": {
        content: '""', position: "absolute", left: -140, bottom: -100, width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(156,39,176,0.18), transparent 70%)", filter: "blur(10px)"
      }
    }}>
      <Container>
        <Typography variant="h3" sx={{ mb: 4, fontWeight: 800, background: "linear-gradient(90deg, #9c27b0, #1976d2)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Projects</Typography>
        <Grid container spacing={3}>
          {mockProjects.map((p) => (
            <Grid key={p.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProjectCard project={p} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}


