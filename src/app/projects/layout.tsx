import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Personal projects Yumna has built, from AI agents to full-stack web apps.",
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
