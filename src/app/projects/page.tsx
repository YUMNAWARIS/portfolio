"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PageHeader from "@/components/PageHeader";
import SectionBackdrop from "@/components/SectionBackdrop";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <SectionBackdrop sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <PageHeader title="Projects" subtitle="Personal Projects I've worked on" />
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid key={project.id} size={{ xs: 12, md: 6 }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionBackdrop>
  );
}
