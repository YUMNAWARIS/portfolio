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
            I&apos;m a <Box component="span" sx={{ fontWeight: 700, color: "secondary.main" }}>Software Engineer II</Box> at
            <Box component="span" sx={{ fontWeight: 700, color: "primary.main" }}> PayEngine</Box>, where we build tools that help
            <Box component="span" sx={{ fontWeight: 700, color: "secondary.main" }}> vertical SaaS companies</Box> manage their
            merchants and processor relationships more effectively.
            <br />
            Alongside my role, I&apos;m studying <Box component="span" sx={{ fontWeight: 700, color: "secondary.main" }}>machine learning</Box> and
            <Box component="span" sx={{ fontWeight: 700, color: "secondary.main" }}> AI</Box>, building personal projects and
            replicating published papers to deepen my understanding.
            <br />
            I&apos;m exploring <Box component="span" sx={{ fontWeight: 700, color: "secondary.main" }}>Master&rsquo;s opportunities in AI/ML Data-intensive systems</Box>
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button component="a" href="/yumnawaris-resume.pdf" target="_blank" rel="noopener noreferrer" variant="outlined">
              Resume
            </Button>
          </Box>
        </Box>
      </Container>
    </SectionBackdrop>
  );
}
