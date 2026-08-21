"use client";

import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import PageHeader from "@/components/PageHeader";
import SectionBackdrop from "@/components/SectionBackdrop";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
  const [search, setSearch] = React.useState("");
  const [activeTag, setActiveTag] = React.useState<string | null>(null);

  const allTags = React.useMemo(() => {
    const tags = new Set<string>();
    blogs.forEach((blog) => blog.tags?.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filtered = React.useMemo(() => {
    const query = search.trim().toLowerCase();
    return blogs
      .filter((blog) => (activeTag ? blog.tags?.includes(activeTag) : true))
      .filter((blog) =>
        query
          ? blog.title.toLowerCase().includes(query) ||
            blog.description.toLowerCase().includes(query) ||
            (blog.tags || []).some((tag) => tag.toLowerCase().includes(query))
          : true
      );
  }, [search, activeTag]);

  return (
    <SectionBackdrop sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <PageHeader title="Writeups" subtitle="Writeups on various topics I've worked on" />

        <Stack spacing={2} sx={{ mb: 3 }}>
          <TextField
            placeholder="Search posts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          {allTags.length > 0 && (
            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
              <Chip
                label="All"
                color={!activeTag ? "primary" : undefined}
                variant={!activeTag ? "filled" : "outlined"}
                onClick={() => setActiveTag(null)}
              />
              {allTags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  color={activeTag === tag ? "primary" : undefined}
                  variant={activeTag === tag ? "filled" : "outlined"}
                  onClick={() => setActiveTag(tag)}
                />
              ))}
            </Stack>
          )}
        </Stack>

        <Grid container spacing={2}>
          {filtered.map((blog) => (
            <Grid key={blog.title} size={{ xs: 12, md: 6 }}>
              <BlogCard blog={blog} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionBackdrop>
  );
}
