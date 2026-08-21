"use client";

import Typography, { type TypographyProps } from "@mui/material/Typography";
import { BRAND_GRADIENT } from "@/theme/colors";

/**
 * Typography filled with the site's signature purple-to-blue brand gradient.
 * Used for the header logo, the hero name, and section titles.
 */
export default function GradientText({ sx, ...props }: TypographyProps) {
  return (
    <Typography
      {...props}
      sx={{
        background: BRAND_GRADIENT,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        ...sx,
      }}
    />
  );
}
