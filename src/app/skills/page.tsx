"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import PageHeader from "@/components/PageHeader";
import SectionBackdrop from "@/components/SectionBackdrop";
import { skillCategories } from "@/data/skills";

export default function SkillsPage() {
  return (
    <SectionBackdrop sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <PageHeader title="Skills" subtitle="Technologies and practices I work with" />

        <Stack spacing={2}>
          {skillCategories.map((category) => (
            <Paper key={category.name} variant="outlined" sx={{ p: { xs: 2, md: 2.5 } }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5 }}>
                {category.name}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {category.skills.map((skill) => (
                  <Chip key={skill} label={skill} size="small" variant="outlined" />
                ))}
              </Box>
            </Paper>
          ))}
        </Stack>
      </Container>
    </SectionBackdrop>
  );
}
