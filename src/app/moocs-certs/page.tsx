"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import SchoolIcon from "@mui/icons-material/School";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const CERTS = [
    // ---- Coursera (4) ----
    {
        title: "Supervised Machine Learning: Regression and Classification",
        provider: "coursera",
        issuer: "Coursera",
        date: "2025",
        url: "https://coursera.org/share/0947c51daf300959fbd28e17c95e5b8c",
        skills: ["Regression Models", "Classification Models"]
    },
    {
        title: "Advanced Learning Algorithms",
        provider: "coursera",
        issuer: "Coursera",
        date: "2025",
        url: "https://coursera.org/share/c152cbe595484279f79ec5c3b48b7099",
        skills: ["Neural Networks", "Decision Tree Models"]
    },
    {
        title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
        provider: "coursera",
        issuer: "Coursera",
        date: "2025",
        url: "https://coursera.org/share/fb7522b4fef7cf5229c6070c6ff10032",
        skills: ["Unsupervised Algorithm", "Recommender systems", "Reinforcement Learning"]
    },

    {
        title: "Machine Learning Specialization",
        provider: "coursera",
        issuer: "Coursera",
        date: "2025",
        url: "https://coursera.org/share/c6cdc13031cff7b4755ef5c68c10e578",
        skills: ["Machine Learning", "Artificial Neural Networks", "Reinforcement Learning"]
    },

    // ---- Udemy (2) ----
    {
        title: "Mastering PostgreSQL: Learning By Real Examples",
        provider: "udemy",
        issuer: "Udemy",
        date: "2023",
        url: "https://www.udemy.com/certificate/UC-070ad4bc-b3ab-414e-8006-82bfcb127d18/",
        skills: ["Postgres", "Database", "sql", "aggregation", "joins", "advance sql"]
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
        ]
    },

    // ---- Awards (2) ----
    {
        title: "Procom 2022 - Hackathon Winner",
        provider: "award",
        issuer: "FAST",
        date: "2022",
        url: "", 
        skills: ["Teamwork", "Prototyping", "Problem Solving"]
    },
    {
        title: "Code bit - Programming Competition",
        provider: "award",
        issuer: "University Of Karachi",
        date: "2022",
        url: "",
        skills: ["Algorithms", "Problem Solving", "Competitive Programming"]
    }
];


export default function MOOCsPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, position: "relative", overflow: "hidden",
      "&:before": { content: '""', position: "absolute", left: -140, top: -120, width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(156,39,176,0.18), transparent 70%)", filter: "blur(10px)" },
      "&:after": { content: '""', position: "absolute", right: -140, bottom: -120, width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(25,118,210,0.18), transparent 70%)", filter: "blur(10px)" }
    }}>
      <Container>
        <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 40 }, mb: 4, fontWeight: 800, background: "linear-gradient(90deg, #9c27b0, #1976d2)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>MOOCs & Certificates</Typography>
        <Stack spacing={3}>
          {[
            { key: "coursera", label: "Coursera", icon: <SchoolIcon color="primary" /> },
            { key: "udemy", label: "Udemy", icon: <SchoolIcon color="primary" /> },
            { key: "award", label: "Awards", icon: <MilitaryTechIcon color="secondary" /> },
          ].map((group) => {
            const items = CERTS.filter((c) => c.provider === (group.key as any));
            if (!items.length) return null;
            return (
              <Box key={group.key}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
                  {group.icon}
                  <Typography variant="h5">{group.label}</Typography>
                </Stack>
                <Grid container spacing={2}>
                  {items.map((c) => (
                    <Grid key={c.title} size={{ xs: 12, md: 6 }}>
                      <Paper variant="outlined" sx={{ p: { xs: 2, md: 2.5 }, height: "100%", display: "grid", gap: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{c.title}</Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>{c.issuer} • {c.date}</Typography>
                        {c.skills?.length ? (
                          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
                            {c.skills.map((s) => (
                              <Chip key={s} label={s} size="small" />
                            ))}
                          </Stack>
                        ) : null}
                        <Box sx={{ mt: 0.5 }}>
                          <Button size="small" variant="outlined" endIcon={<OpenInNewIcon />} component="a" href={c.url || "#"} target={c.url ? "_blank" : undefined} rel={c.url ? "noopener noreferrer" : undefined} disabled={!c.url}>
                            View credential
                          </Button>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}


