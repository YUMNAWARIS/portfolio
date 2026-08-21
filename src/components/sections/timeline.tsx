"use client";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import LabTimeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot, { type TimelineDotProps } from "@mui/lab/TimelineDot";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/School";
import SectionBackdrop from "@/components/SectionBackdrop";
import PageHeader from "@/components/PageHeader";
import { timelineEntries } from "@/data/timeline";

export default function Timeline() {
  return (
    <SectionBackdrop sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <PageHeader title="Experience & Education" subtitle="A quick look at my journey so far" sx={{ mb: 2 }} />

        <Paper variant="outlined" sx={{ mt: 3, px: { xs: 0, md: 1 }, py: { xs: 1, md: 2 }, maxWidth: 920, mx: "auto" }}>
          <LabTimeline
            position="right"
            sx={{
              mx: "auto",
              maxWidth: 820,
              "& .MuiTimelineItem-root:before": { flex: 0, padding: 0 }, // remove left gutter from missing opposite content
            }}
          >
            {timelineEntries.map((entry, index) => {
              const isLast = index === timelineEntries.length - 1;
              const color: TimelineDotProps["color"] = entry.type === "work" ? "primary" : "secondary";
              const Icon = entry.type === "work" ? WorkOutlineIcon : SchoolIcon;

              return (
                <TimelineItem key={`${entry.type}-${entry.title}`}>
                  <TimelineSeparator>
                    <TimelineDot color={color} variant="filled">
                      <Icon fontSize="small" />
                    </TimelineDot>
                    {!isLast && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: 2 }}>
                    <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5 }}>
                      {entry.date}
                    </Typography>
                    <Stack spacing={0.5}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {entry.title}
                        </Typography>
                        <Chip size="small" label={entry.type === "work" ? "Work" : "Education"} variant="outlined" sx={{ ml: 0.5 }} />
                      </Stack>
                      {entry.subtitle && (
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {entry.subtitle}
                        </Typography>
                      )}
                      {entry.details && entry.details.length > 0 && (
                        <Stack component="ul" sx={{ m: 0, color: "text.secondary" }} gap={0.75}>
                          {entry.details.map((detail) => (
                            <Typography key={detail} component="li" variant="body2">
                              {detail}
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
    </SectionBackdrop>
  );
}
