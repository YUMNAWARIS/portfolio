/**
 * Single source of truth for the site's brand colors.
 *
 * These two tones (purple + blue) are used throughout the UI: as the MUI
 * palette's primary/secondary colors, in the signature gradient headings,
 * and in the soft decorative "blob" backgrounds behind each section. Define
 * them once here so every consumer stays in sync.
 */
export const BRAND = {
  purple: { hex: "#9c27b0", rgb: "156, 39, 176" },
  blue: { hex: "#1976d2", rgb: "25, 118, 210" },
} as const;

export type BrandColor = keyof typeof BRAND;

/** The gradient used for headline text (logo, hero name, section titles). */
export const BRAND_GRADIENT = `linear-gradient(90deg, ${BRAND.purple.hex}, ${BRAND.blue.hex})`;
