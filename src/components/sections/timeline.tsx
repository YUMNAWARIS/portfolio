"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import LabTimeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/School";

export default function Timeline() {
  const items: Array<{
    type: "work" | "education";
    date: string;
    title: string;
    subtitle?: string;
    details?: string[];
  }> = [
    {
      type: "work",
      date: "Jul 13, 2023 — Present",
      title: "Software Developer Engineer II — PlatformFactory.io",
      subtitle:
        "Santa Monica, United States · Financial and insurance activities · Engineering",
      details: [
        "Led design and development of microservices for secure payment processing, including gateway integrations and subscription management.",
        "Owned services end-to-end from architecture to deployment, building containerised solutions and key features such as merchant onboarding, underwriting, invoicing, and fraud detection.",
        "Built payment emulators with n8n and delivered data-driven insights via AWS QuickSight dashboards.",
      ],
    },
    {
      type: "work",
      date: "Feb 13, 2023 — Jul 13, 2023",
      title: "Software Developer Intern — PlatformFactory",
      subtitle:
        "Santa Monica, United States · Financial and insurance activities · Engineering",
      details: [
        "Supported frontend and backend development across microservices with a focus on debugging and scalable design best practices.",
        "Gained hands-on experience in secure payment workflows and engineering standards.",
      ],
    },
    {
      type: "education",
      date: "Jan 2020 — Dec 2023",
      title: "BS in Software Engineering",
      subtitle: "University of Karachi",
      details: ["Final Grade: 3.66 (EQF Level 6)"],
    },
  ];

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
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Experience & Education
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
            A quick look at my journey so far
          </Typography>
        </Box>

        <Paper
          variant="outlined"
          sx={{
            mt: 3,
            px: { xs: 0, md: 1 },
            py: { xs: 1, md: 2 },
            maxWidth: 920,
            mx: "auto",
          }}
        >
          <LabTimeline
            position="right"
            sx={{
              mx: "auto",
              maxWidth: 820,
              "& .MuiTimelineItem-root:before": { flex: 0, padding: 0 }, // remove left gutter from missing opposite content
            }}
          >
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              const color = item.type === "work" ? "primary" : "secondary";
              const Icon = item.type === "work" ? WorkOutlineIcon : SchoolIcon;
              return (
                <TimelineItem key={`${item.type}-${index}`}>
                  <TimelineSeparator>
                    <TimelineDot color={color as any} variant="filled">
                      <Icon fontSize="small" />
                    </TimelineDot>
                    {!isLast && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: 2 }}>
                    <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5 }}>
                      {item.date}
                    </Typography>
                    <Stack spacing={0.5}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {item.title}
                        </Typography>
                        <Chip
                          size="small"
                          label={item.type === "work" ? "Work" : "Education"}
                          color={color as any}
                          variant="outlined"
                          sx={{ ml: 0.5 }}
                        />
                      </Stack>
                      {item.subtitle && (
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {item.subtitle}
                        </Typography>
                      )}
                      {item.details && item.details.length > 0 && (
                        <Stack component="ul" sx={{ m: 0, color: "text.secondary" }} gap={0.75}>
                          {item.details.map((d, i) => (
                            <Typography key={i} component="li" variant="body2">
                              {d}
                            </Typography>
                          ))}
                        </Stack>
                      )}
                    </Stack>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </LabTimeline>
        </Paper>
      </Container>
    </Box>
  );
}


