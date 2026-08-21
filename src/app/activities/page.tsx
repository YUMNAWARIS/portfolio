"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PageHeader from "@/components/PageHeader";
import ActivityCard from "@/components/ActivityCard";
import { activities } from "@/data/activities";

export default function ActivitiesPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <PageHeader title="Activities" subtitle="Hackathons, competitions, and events I've participated in" />

        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
          }}
        >
          {activities.map((activity) => (
            <ActivityCard key={activity.name} activity={activity} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
