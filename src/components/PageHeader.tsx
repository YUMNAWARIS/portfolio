"use client";

import Box, { type BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export type PageHeaderProps = {
  title: string;
  subtitle?: string;
  sx?: BoxProps["sx"];
};

/** The centered "title + subtitle" header repeated at the top of every page/section. */
export default function PageHeader({ title, subtitle, sx }: PageHeaderProps) {
  return (
    <Box sx={{ textAlign: "center", mb: 3, ...sx }}>
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
