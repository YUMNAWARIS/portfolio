"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import SectionBackdrop, { type Blob } from "@/components/SectionBackdrop";
import { siteSections } from "@/data/nav";
import { socialLinks } from "@/data/contact";

const FOOTER_BLOBS: [Blob, Blob] = [
  { color: "purple", size: 300, blur: 8, opacity: 0.15, position: { left: -120, top: -100 } },
  { color: "blue", size: 300, blur: 8, opacity: 0.15, position: { right: -120, bottom: -100 } },
];

const footerSocials = socialLinks.filter((s) => s.name === "GitHub" || s.name === "LinkedIn");

export default function Footer() {
  return (
    <SectionBackdrop
      component="footer"
      blobs={FOOTER_BLOBS}
      sx={{ borderTop: 1, borderColor: "divider", py: 4, mt: 8 }}
    >
      <Container sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: "center", gap: 2 }}>
        <Typography variant="body2" suppressHydrationWarning>
          © {new Date().getFullYear()} Yumna. All rights reserved.
        </Typography>
        <Box component="nav" sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {siteSections.map((section) => (
            <Typography key={section.href} variant="body2" component={Link} href={section.href}>
              {section.label}
            </Typography>
          ))}
          {footerSocials.map((social) => (
            <Typography key={social.name} variant="body2" component={Link} href={social.url} target="_blank" rel="noopener noreferrer">
              {social.name}
            </Typography>
          ))}
        </Box>
      </Container>
    </SectionBackdrop>
  );
}
