import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Activities",
  description: "Hackathons, competitions, and events Yumna has participated in.",
};

export default function ActivitiesLayout({ children }: { children: ReactNode }) {
  return children;
}
