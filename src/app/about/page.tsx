"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";

export default function AboutPage() {
  const [tab, setTab] = React.useState(0);
  const handleTabChange = (_: React.SyntheticEvent, value: number) => setTab(value);

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, position: "relative", overflow: "hidden",
      "&:before": {
        content: '""', position: "absolute", left: -140, top: -120, width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(156,39,176,0.18), transparent 70%)", filter: "blur(10px)"
      },
      "&:after": {
        content: '""', position: "absolute", right: -140, bottom: -120, width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(25,118,210,0.18), transparent 70%)", filter: "blur(10px)"
      }
    }}>
      <Container>
        <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 40 }, mb: 4, fontWeight: 800, background: "linear-gradient(90deg, #9c27b0, #1976d2)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
          About
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 }, height: "100%" }}>
              <Typography variant="h6" sx={{ mb: 1 }}>Profile</Typography>
              <Stack spacing={0.5} sx={{ color: "text.secondary" }}>
                <Typography variant="body2">Yumna Waris</Typography>
                <Typography variant="body2">Karachi, Pakistan</Typography>
                <Typography variant="body2">Nationality: Pakistani</Typography>
                <Typography variant="body2">Email: yumnaahwaris@gmail.com</Typography>
                <Typography variant="body2">Phone: (+92) 3356910909</Typography>
                <Typography variant="body2">Website: yumnawaris.github.io/yumna-portfolio</Typography>
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 }, height: "100%" }}>
              <Typography variant="h5" sx={{ mb: 2 }}>About Me</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Passionate Software Engineer with a strong foundation in building data-intensive and scalable systems, particularly in the payment technology domain. I bring hands-on experience in designing secure, event-driven architectures and leading impactful projects that merge software engineering with intelligent decision-making. Recognized for problem-solving and innovation (Hackathon Winner 2022), I thrive in collaborative, research-oriented environments. My goal is to advance expertise in intelligent software systems and contribute to developing next-generation AI-driven solutions with global impact.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Paper variant="outlined" sx={{ mt: 3 }}>
          <Tabs value={tab} onChange={handleTabChange} variant="scrollable" allowScrollButtonsMobile>
            <Tab label="Work Experience" />
            <Tab label="Education" />
            <Tab label="Skills" />
            <Tab label="Resume" />
          </Tabs>
          <Box sx={{ p: { xs: 2, md: 3 } }}>
            {tab === 0 && (
              <Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1">Software Developer Engineer II — PlatformFactory.io</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                    Santa Monica, United States · Financial and insurance activities · Engineering · Jul 13, 2023 — Present
                  </Typography>
                  <Stack component="ul" sx={{ pl: 2, m: 0, color: "text.secondary" }} gap={1}>
                    <Typography component="li" variant="body2">Led design and development of microservices for secure payment processing, including gateway integrations and subscription management.</Typography>
                    <Typography component="li" variant="body2">Owned services end-to-end from architecture to deployment, building containerised solutions and key features such as merchant onboarding, underwriting, invoicing, and fraud detection.</Typography>
                    <Typography component="li" variant="body2">Built payment emulators with n8n and delivered data-driven insights via AWS QuickSight dashboards.</Typography>
                  </Stack>
                </Box>
                <Box>
                  <Typography variant="subtitle1">Software Developer Intern — PlatformFactory</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                    Santa Monica, United States · Financial and insurance activities · Engineering · Feb 13, 2023 — Jul 13, 2023
                  </Typography>
                  <Stack component="ul" sx={{ pl: 2, m: 0, color: "text.secondary" }} gap={1}>
                    <Typography component="li" variant="body2">Supported frontend and backend development across microservices with a focus on debugging and scalable design best practices.</Typography>
                    <Typography component="li" variant="body2">Gained hands-on experience in secure payment workflows and engineering standards.</Typography>
                  </Stack>
                </Box>
              </Box>
            )}

            {tab === 1 && (
              <Box>
                <Typography variant="h6" sx={{ mb: 1 }}>Education</Typography>
                <Typography variant="subtitle2">BS in Software Engineering</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>University of Karachi · Jan 2020 — Dec 2023</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>Final Grade: 3.66 (EQF Level 6)</Typography>
              </Box>
            )}

            {tab === 2 && (
              <Box>
                <Typography variant="h6" sx={{ mb: 1 }}>Skills</Typography>
                <Typography variant="subtitle2" sx={{ mt: 1 }}>Programming</Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1, mt: 1 }}>
                  {["JavaScript","Python","Java","C","C++","C#"].map((s) => (
                    <Chip key={s} label={s} size="small" />
                  ))}
                </Stack>
                <Typography variant="subtitle2" sx={{ mt: 2 }}>Web App Development</Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1, mt: 1 }}>
                  {["HTML","CSS","Bootstrap","Sass","React","Next.js","Node.js","Express","Flask","PostgreSQL","SQL","MongoDB","Spring Boot"].map((s) => (
                    <Chip key={s} label={s} size="small" />
                  ))}
                </Stack>
                <Typography variant="subtitle2" sx={{ mt: 2 }}>AI & ML</Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1, mt: 1 }}>
                  {["Data Analysis","Data Visualization","Data Cleaning","Supervised Learning","Unsupervised Learning","Artificial Neural Networks","LangChain","LangGraph","Agentic AI","Prompt Engineering","n8n"].map((s) => (
                    <Chip key={s} label={s} size="small" />
                  ))}
                </Stack>
                <Typography variant="subtitle2" sx={{ mt: 2 }}>Soft Skills</Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1, mt: 1 }}>
                  {["Teamwork","Analytical thinking","Communication","Planning","Management"].map((s) => (
                    <Chip key={s} label={s} size="small" />
                  ))}
                </Stack>
                <Typography variant="subtitle2" sx={{ mt: 2 }}>Languages</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>Urdu (Native), English (C1/C1/B2/B2/C1)</Typography>
              </Box>
            )}

            {tab === 3 && (
              <Box>
                <Typography variant="h6" sx={{ mb: 2 }}>Resume</Typography>
                <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
                  <Button component="a" href="/yumnawaris-resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</Button>
                  <Button component="a" href="/yumnawaris-resume.pdf" download variant="outlined">Download</Button>
                </Stack>
              </Box>
            )}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}


