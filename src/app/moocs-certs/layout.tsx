import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "MOOCs & Certificates",
  description: "MOOCs and certificates Yumna has completed on Coursera, Udemy, and DeepLearning.AI.",
};

export default function MoocsCertsLayout({ children }: { children: ReactNode }) {
  return children;
}
