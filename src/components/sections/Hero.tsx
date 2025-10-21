"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: -80,
          left: -80,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "radial-gradient(closest-side, rgba(156,39,176,0.35), transparent 70%)",
          filter: "blur(10px)",
        },
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: -120,
          right: -120,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(closest-side, rgba(25,118,210,0.25), transparent 70%)",
          filter: "blur(12px)",
        },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: { xs: "1fr", md: "auto 1fr" }, alignItems: "center", gap: { xs: 4, md: 5 } }}>

        <Box sx={{ justifySelf: { xs: "center", md: "start" }, width: { xs: 220, md: 260 }, height: { xs: 220, md: 260 }, borderRadius: "50%", p: 1, background: "linear-gradient(135deg, rgba(156,39,176,0.45), rgba(25,118,210,0.45))" }}>
          <Box sx={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", position: "relative", boxShadow: 8, backgroundColor: "background.paper" }}>
          <Image
            src="/profile.png"
            alt="Yumna Waris"
            fill
            sizes="(max-width: 900px) 220px, 260px"
            style={{ objectFit: "cover" }}
            priority
          />
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 36, md: 56 },
              mb: 2,
              fontWeight: 800,
              lineHeight: 1.1,
              background: "linear-gradient(90deg, #9c27b0, #1976d2)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Hi, I'm Yumna
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, fontSize: { xs: 16, md: 18 }, lineHeight: 1.7, maxWidth: 70 + "ch" }}>
            I&apos;m a <Box component="span" sx={{ fontWeight: 700, color: "secondary.main" }}>Software Engineer II</Box> at
            <Box component="span" sx={{ fontWeight: 700, color: "primary.main" }}> PayEngine</Box>, where we build tools that help
            <Box component="span" sx={{ fontWeight: 700, color: "secondary.main" }}> vertical SaaS companies</Box> manage their
            merchants and processor relationships more effectively.
            <br />
            Alongside my role, I’m studying <Box component="span" sx={{ fontWeight: 700, color: "secondary.main" }}>machine learning</Box> and
            <Box component="span" sx={{ fontWeight: 700, color: "secondary.main" }}> AI</Box>, building personal projects and
            replicating published papers to deepen my understanding.
            <br />
            I’m exploring <Box component="span" sx={{ fontWeight: 700, color: "secondary.main" }}>Master’s opportunities in AI/ML Data-intensive systems</Box>
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button size="large" href="/projects">View Projects</Button>
            <Button size="large" href="/about" variant="outlined">About Me</Button>
          </Box>
        </Box>

      </Container>
    </Box>
  );
}


