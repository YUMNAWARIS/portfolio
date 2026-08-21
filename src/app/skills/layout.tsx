import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technologies and engineering practices Yumna works with, from AI/GenAI to backend systems and cloud infrastructure.",
};

export default function SkillsLayout({ children }: { children: ReactNode }) {
  return children;
}
