"use client";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip, { type ChipProps } from "@mui/material/Chip";
import type { Activity, ActivityType } from "@/data/activities";

const TYPE_COLOR: Record<ActivityType, ChipProps["color"]> = {
  hackathon: "primary",
  competition: "secondary",
  workshop: "success",
  event: "info",
  other: "default",
};

export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Paper variant="outlined" sx={{ height: "100%", overflow: "hidden", bgcolor: "background.paper", borderRadius: 2 }}>
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={activity.image || "/window.svg"}
          alt={activity.name}
          sx={{ width: "100%", height: 180, objectFit: "cover", display: "block", bgcolor: "action.hover" }}
        />
        <Chip
          size="small"
          color={TYPE_COLOR[activity.type]}
          label={activity.type}
          variant="outlined"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            textTransform: "capitalize",
            bgcolor: "background.paper",
            border: 1,
            borderColor: "divider",
          }}
        />
      </Box>

      <Box sx={{ p: 2.5 }}>
        <Stack spacing={1}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {activity.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {activity.organizer ? `${activity.organizer} · ` : ""}
            {activity.date}
          </Typography>
          {activity.description && (
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
              {activity.description}
            </Typography>
          )}
        </Stack>
      </Box>
    </Paper>
  );
}
