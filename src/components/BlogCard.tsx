"use client";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import type { Blog } from "@/data/blogs";

export default function BlogCard({ blog }: { blog: Blog }) {
  const comingSoon = !blog.url;

  return (
    <Paper variant="outlined" sx={{ p: { xs: 2, md: 2.5 }, display: "grid", gap: 1.25, height: "100%" }}>
      <Typography variant="h5">{blog.title}</Typography>
      {blog.date && (
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {blog.date}
        </Typography>
      )}
      <Typography sx={{ color: "text.secondary" }}>{blog.description}</Typography>
      <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
        {(blog.tags || []).map((tag) => (
          <Chip key={tag} label={tag} size="small" />
        ))}
      </Stack>
      <Box>
        <Button
          size="small"
          variant={comingSoon ? "outlined" : "contained"}
          endIcon={comingSoon ? <UpcomingIcon /> : <OpenInNewIcon />}
          component="a"
          href={comingSoon ? undefined : blog.url}
          target={comingSoon ? undefined : "_blank"}
          rel={comingSoon ? undefined : "noopener noreferrer"}
          disabled={comingSoon}
        >
          {comingSoon ? "Coming soon" : "Read post"}
        </Button>
      </Box>
    </Paper>
  );
}
