"use client";

import Box, { type BoxProps } from "@mui/material/Box";
import { BRAND, type BrandColor } from "@/theme/colors";

type BlobPosition = { left?: number; right?: number; top?: number; bottom?: number };

export type Blob = {
  color: BrandColor;
  size: number;
  blur: number;
  opacity: number;
  position: BlobPosition;
};

/** The soft two-blob backdrop shared by the timeline and every list page. */
export const defaultBlobs: [Blob, Blob] = [
  { color: "purple", size: 360, blur: 10, opacity: 0.18, position: { left: -140, top: -120 } },
  { color: "blue", size: 360, blur: 10, opacity: 0.18, position: { right: -140, bottom: -120 } },
];

function blobSx({ color, size, blur, opacity, position }: Blob) {
  return {
    content: '""',
    position: "absolute",
    ...position,
    width: size,
    height: size,
    borderRadius: "50%",
    background: `radial-gradient(closest-side, rgba(${BRAND[color].rgb}, ${opacity}), transparent 70%)`,
    filter: `blur(${blur}px)`,
  };
}

export type SectionBackdropProps = BoxProps & {
  /** Exactly two blobs: rendered as the `::before` and `::after` pseudo-elements. */
  blobs?: [Blob, Blob];
};

/**
 * Wraps a section in `position: relative; overflow: hidden` and paints two
 * blurred, translucent brand-color blobs behind its content — the
 * decorative treatment used across the Hero, Contact, Timeline, and list
 * pages. Pass `blobs` to override the default size/position/opacity; all
 * other props (including `sx`) pass through to the underlying `Box`.
 */
export default function SectionBackdrop({ blobs = defaultBlobs, sx, children, ...props }: SectionBackdropProps) {
  const [first, second] = blobs;
  return (
    <Box
      {...props}
      sx={{
        position: "relative",
        overflow: "hidden",
        "&:before": blobSx(first),
        "&:after": blobSx(second),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
