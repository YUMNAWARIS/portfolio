"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import type { ComponentType } from "react";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import SectionBackdrop, { type Blob } from "@/components/SectionBackdrop";
import GradientText from "@/components/GradientText";
import { contactInfo, socialLinks } from "@/data/contact";

const CONTACT_BLOBS: [Blob, Blob] = [
  { color: "blue", size: 380, blur: 12, opacity: 0.22, position: { left: -160, top: -120 } },
  { color: "purple", size: 420, blur: 12, opacity: 0.22, position: { right: -160, bottom: -120 } },
];

type ContactRowProps = {
  icon: ComponentType<SvgIconProps>;
  label: string;
  value: string;
  href: string;
  copyValue: string;
  copyKey: string;
  copied: string | null;
  onCopy: (value: string, key: string) => void;
};

function ContactRow({ icon: Icon, label, value, href, copyValue, copyKey, copied, onCopy }: ContactRowProps) {
  return (
    <>
      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1 }}>
        <Icon color="primary" />
        <Typography variant="h6">{label}</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {value}
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton component="a" href={href} aria-label={`${label} ${value}`}>
            <Icon fontSize="small" />
          </IconButton>
          <IconButton onClick={() => onCopy(copyValue, copyKey)} aria-label={`Copy ${label.toLowerCase()}`}>
            {copied === copyKey ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}

export default function Contact() {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 1200);
    } catch {
      // Clipboard access can be denied by the browser; fail silently.
    }
  };

  return (
    <SectionBackdrop id="contact" blobs={CONTACT_BLOBS} sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        <GradientText variant="h3" sx={{ mb: 4, fontWeight: 800 }}>
          Contact
        </GradientText>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper variant="outlined" sx={{ p: 3, height: "100%" }}>
              <ContactRow
                icon={EmailIcon}
                label="Email"
                value={contactInfo.email}
                href={`mailto:${contactInfo.email}?subject=Hello%20Yumna`}
                copyValue={contactInfo.email}
                copyKey="email"
                copied={copied}
                onCopy={copy}
              />

              <Divider sx={{ my: 2 }} />

              <ContactRow
                icon={PhoneIcon}
                label="Phone"
                value={contactInfo.phone.display}
                href={`tel:${contactInfo.phone.raw}`}
                copyValue={contactInfo.phone.display}
                copyKey="phone"
                copied={copied}
                onCopy={copy}
              />
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper variant="outlined" sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ textAlign: { xs: "left", md: "center" }, mb: 2 }}>
                Social
              </Typography>
              <Grid container spacing={1.5}>
                {socialLinks.map(({ name, url, icon: Icon }) => (
                  <Grid key={name} size={{ xs: 6, sm: 4 }}>
                    <Box component="a" href={url} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: "none" }}>
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 1.5,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          justifyContent: "center",
                          borderRadius: 2,
                          transition: "transform .2s ease, box-shadow .2s ease",
                          "&:hover": { transform: "translateY(-2px)", boxShadow: 4 },
                        }}
                      >
                        <Icon fontSize="small" />
                        <Typography variant="body2">{name}</Typography>
                      </Paper>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </SectionBackdrop>
  );
}
