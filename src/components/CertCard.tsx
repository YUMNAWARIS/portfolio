"use client";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import type { Certification } from "@/data/certifications";

export default function CertCard({ cert }: { cert: Certification }) {
  return (
    <Paper variant="outlined" sx={{ p: { xs: 2, md: 2.5 }, height: "100%", display: "grid", gap: 1 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        {cert.title}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {cert.issuer}
        {cert.date ? ` • ${cert.date}` : ""}
      </Typography>
      {cert.skills && cert.skills.length > 0 && (
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
          {cert.skills.map((skill) => (
            <Chip key={skill} label={skill} size="small" />
          ))}
        </Stack>
      )}
      {cert.url && (
        <Box sx={{ mt: 0.5 }}>
          <Button size="small" variant="outlined" endIcon={<OpenInNewIcon />} component="a" href={cert.url} target="_blank" rel="noopener noreferrer">
            View credential
          </Button>
        </Box>
      )}
    </Paper>
  );
}
