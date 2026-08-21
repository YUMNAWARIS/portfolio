import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Writeups",
  description: "Writeups on AI, machine learning, and software engineering topics Yumna has worked on.",
};

export default function BlogsLayout({ children }: { children: ReactNode }) {
  return children;
}
