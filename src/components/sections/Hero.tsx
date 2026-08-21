"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import SectionBackdrop, { type Blob } from "@/components/SectionBackdrop";
import GradientText from "@/components/GradientText";

const HERO_BLOBS: [Blob, Blob] = [
  { color: "purple", size: 320, blur: 10, opacity: 0.35, position: { top: -80, left: -80 } },
  { color: "blue", size: 420, blur: 12, opacity: 0.25, position: { bottom: -120, right: -120 } },
];

export default function Hero() {
  return (
    <SectionBackdrop id="home" blobs={HERO_BLOBS} sx={{ py: { xs: 8, md: 12 } }}>
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "auto 1fr" },
          alignItems: "center",
          gap: { xs: 4, md: 5 },
        }}
      >
        <Box
          sx={{
            justifySelf: { xs: "center", md: "start" },
            width: { xs: 220, md: 260 },
            height: { xs: 220, md: 260 },
            borderRadius: "50%",
            p: 1,
            background: "linear-gradient(135deg, rgba(156,39,176,0.45), rgba(25,118,210,0.45))",
          }}
        >
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
          <GradientText
            variant="h1"
            sx={{ fontSize: { xs: 36, md: 56 }, mb: 2, fontWeight: 800, lineHeight: 1.1 }}
          >
            Hi, I&apos;m Yumna
          </GradientText>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, fontSize: { xs: 16, md: 18 }, lineHeight: 1.7, maxWidth: "70ch" }}>
            I&apos;m an <Box component="span" sx={{ fontWeight: 700, color: "secondary.main" }}>M.Sc. student in International Software Systems Science</Box> at
            <Box component="span" sx={{ fontWeight: 700, color: "primary.main" }}> Otto-Friedrich-Universität Bamberg</Box>, Germany, with a background building
            <Box component="span" sx={{ fontWeight: 700, color: "secondary.main" }}> data-intensive, scalable</Box> systems as a
            <Box component="span" sx={{ fontWeight: 700, color: "secondary.main" }}> Software Engineer II</Box> at
            <Box component="span" sx={{ fontWeight: 700, color: "primary.main" }}> PayEngine</Box>, where I designed secure, event-driven
            <Box component="span" sx={{ fontWeight: 700, color: "secondary.main" }}> fintech</Box> systems for merchant onboarding, risk, and payment processing.
            <br />
            Alongside my studies, I&apos;m exploring <Box component="span" sx={{ fontWeight: 700, color: "secondary.main" }}>AI/ML</Box> and
            <Box component="span" sx={{ fontWeight: 700, color: "secondary.main" }}> agentic systems</Box> — building AI agents, RAG workflows, and personal
            projects to deepen my understanding.
            <br />
            Based in <Box component="span" sx={{ fontWeight: 700, color: "secondary.main" }}>Munich, Germany</Box>.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button component="a" href="/yumna_waris_resume_latest.pdf" target="_blank" rel="noopener noreferrer" variant="outlined">
              Resume
            </Button>
          </Box>
        </Box>
      </Container>
    </SectionBackdrop>
  );
}
