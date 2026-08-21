"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import SchoolIcon from "@mui/icons-material/School";
import PageHeader from "@/components/PageHeader";
import SectionBackdrop from "@/components/SectionBackdrop";
import CertCard from "@/components/CertCard";
import { certifications, certProviderGroups } from "@/data/certifications";

export default function MOOCsPage() {
  return (
    <SectionBackdrop sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <PageHeader title="MOOCs & Certificates" subtitle="MOOCs and Certificates I've completed" />

        <Stack spacing={3}>
          {certProviderGroups.map((group) => {
            const items = certifications.filter((cert) => cert.provider === group.key);
            if (items.length === 0) return null;

            return (
              <Box key={group.key}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1.5 }}>
                  <SchoolIcon color="primary" />
                  <Typography variant="h5">{group.label}</Typography>
                </Stack>
                <Grid container spacing={2}>
                  {items.map((cert) => (
                    <Grid key={cert.title} size={{ xs: 12, md: 6 }}>
                      <CertCard cert={cert} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </SectionBackdrop>
  );
}
