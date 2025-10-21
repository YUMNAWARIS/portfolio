"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function About() {
  return (
    <Box id="about" sx={{ py: { xs: 8, md: 12 }, position: "relative", overflow: "hidden",
      "&:after": {
        content: '""', position: "absolute", right: -120, top: -80, width: 320, height: 320, borderRadius: "50%",
        background: "radial-gradient(closest-side, rgba(25,118,210,0.18), transparent 70%)", filter: "blur(10px)"
      }
    }}>
      <Container>
        <Typography variant="h3" sx={{ mb: 4, fontWeight: 800, background: "linear-gradient(90deg, #9c27b0, #1976d2)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>About</Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.4fr 1fr" }, gap: 3 }}>
          <Box>
            <Typography sx={{ color: "text.secondary", fontSize: { xs: 16, md: 18 }, lineHeight: 1.7 }}>
              I specialize in building responsive, accessible user interfaces with React, TypeScript, and Material UI. I enjoy designing smooth interactions, clean architectures, and reliable component systems.
            </Typography>
          </Box>
          <Box>
            <Paper variant="outlined" sx={{ p: 3, backdropFilter: "blur(6px)" }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>Skills</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                React, Next.js, TypeScript, Material UI, Tailwind, Jest, Playwright, REST, GraphQL
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}


