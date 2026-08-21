"use client";

import React from "react";
import { createTheme, type Theme, type ThemeOptions } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";
import { BRAND } from "./colors";

export type ColorMode = PaletteMode;

export const ColorModeContext = React.createContext<{
  mode: ColorMode;
  toggleColorMode: () => void;
}>({
  mode: "light",
  toggleColorMode: () => {},
});

const FONT_FAMILY = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica",
  "Arial",
  "sans-serif",
].join(",");

function getDesignTokens(mode: PaletteMode): ThemeOptions {
  return {
    palette: {
      mode,
      primary: { main: mode === "light" ? BRAND.blue.hex : "#90caf9" },
      secondary: { main: mode === "light" ? BRAND.purple.hex : "#ce93d8" },
      background: {
        default: mode === "light" ? "#fafafa" : "#0a0a0a",
        paper: mode === "light" ? "#ffffff" : "#121212",
      },
    },
    typography: {
      fontFamily: FONT_FAMILY,
      h1: { fontWeight: 700, letterSpacing: -0.5 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
    },
    shape: { borderRadius: 10 },
    components: {
      MuiButton: { defaultProps: { variant: "contained" } },
      MuiContainer: { defaultProps: { maxWidth: "lg" } },
    },
  };
}

export function createAppTheme(mode: PaletteMode): Theme {
  return createTheme(getDesignTokens(mode));
}
