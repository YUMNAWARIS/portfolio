export type TimelineEntryType = "work" | "education";

export type TimelineEntry = {
  type: TimelineEntryType;
  date: string;
  title: string;
  subtitle?: string;
  details?: string[];
};

/** Work experience and education, newest first. Add new entries here. */
export const timelineEntries: TimelineEntry[] = [
  {
    type: "work",
    date: "Jul 13, 2023 — Present",
    title: "Software Developer Engineer II — PlatformFactory.io",
    subtitle: "Santa Monica, United States · Financial and insurance activities · Engineering",
    details: [
      "Led design and development of microservices for secure payment processing, including gateway integrations and subscription management.",
      "Owned services end-to-end from architecture to deployment, building containerised solutions and key features such as merchant onboarding, underwriting, invoicing, and fraud detection.",
      "Built payment emulators with n8n and delivered data-driven insights via AWS QuickSight dashboards.",
    ],
  },
  {
    type: "work",
    date: "Feb 13, 2023 — Jul 13, 2023",
    title: "Software Developer Intern — PlatformFactory",
    subtitle: "Santa Monica, United States · Financial and insurance activities · Engineering",
    details: [
      "Supported frontend and backend development across microservices with a focus on debugging and scalable design best practices.",
      "Gained hands-on experience in secure payment workflows and engineering standards.",
    ],
  },
  {
    type: "education",
    date: "Jan 2020 — Dec 2023",
    title: "BS in Software Engineering",
    subtitle: "University of Karachi",
    details: ["Final Grade: 3.66 (EQF Level 6)"],
  },
];
