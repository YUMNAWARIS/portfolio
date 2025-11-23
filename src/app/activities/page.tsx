/* eslint-disable react/jsx-key */
"use client";

import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

type Activity = {
  name: string;
  organizer?: string;
  date: string;
  description?: string;
  image?: string;
  type: "hackathon" | "competition" | "event" | "workshop" | "other";
};

const activities: Activity[] = [
  {
    name: "Hackathon 2025",
    organizer: "Liam Ottley × AAA Accelerator Hackathon",        
    date: "30th October 2025",
    description: `Participated in Hackathon 2025 of Liam Ottley × AAA Accelerator.
      Built an AI Agent AskDB on the Relevance AI platform. 
      The agent interprets the intent using LLMs, 
      converts it into SQL, executes it on the Neon database via HTTP, 
      and returns clear, conversational results back to Slack.
    `,
    image: "/activities/hackathon-2025.png",
    type: "hackathon",
  },
  {
    name: "Hackathon 2022",
    organizer: "Fast Procm.net",        
    date: "25th March 2022",
    description: `Participated in Hackathon 2022 of Fast Procom. Our team got 1st rank out of 10. 
    We proposed an IOT based system for solving major problems of a metropolitan city like Karachi.`,
    image: "/activities/hackathon-2022.png",
    type: "hackathon",
  },
  {
    name: "CodeBIT Programming Competition",
    organizer: "Department of Computer Science, UBIT",
    date: "9th March 2022",
    description: "Participated in Speed Programming Competition of UOK - UBIT. Our team got 7th rank out of 39.",
    image: "/activities/codebits.png",
    type: "competition",
  }
];

function typeToColor(t: Activity["type"]) {
  switch (t) {
    case "hackathon":
      return "primary";
    case "competition":
      return "secondary";
    case "workshop":
      return "success";
    case "event":
      return "info";
    default:
      return "default";
  }
}

function ActivityCard({ a }: { a: Activity }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        height: "100%",
        overflow: "hidden",
        bgcolor: "background.paper",
        borderRadius: 2,
      }}
    >
      {/* Image banner */}
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={a.image || "/window.svg"}
          alt={a.name}
          sx={{
            width: "100%",
            height: 180,
            objectFit: "cover",
            display: "block",
            bgcolor: "action.hover",
          }}
        />
        <Chip
          size="small"
          color={typeToColor(a.type) as any}
          label={a.type}
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            textTransform: "capitalize",
            bgcolor: "background.paper",
            border: 1,
            borderColor: "divider",
          }}
          variant="outlined"
        />
      </Box>

      {/* Body */}
      <Box sx={{ p: 2.5 }}>
        <Stack spacing={1}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {a.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {a.organizer ? `${a.organizer} · ` : ""}
            {a.date}
          </Typography>
          {a.description && (
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                display: "-webkit-box",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {a.description}
            </Typography>
          )}
        </Stack>
      </Box>
    </Paper>
  );
}

export default function ActivitiesPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Activities
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
            Hackathons, competitions, and events I&apos;ve participated in
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {activities.map((a) => (
            <ActivityCard a={a} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}