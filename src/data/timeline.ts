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
    type: "education",
    date: "Apr 2026 — Present",
    title: "M.Sc. International Software Systems Science",
    subtitle: "Otto-Friedrich-Universität Bamberg · Bamberg, Germany",
    details: ["Coursework: German A1, Algorithms and Complexity Theory, Advanced Data Management, Distributed Systems"],
  },
  {
    type: "work",
    date: "Aug 2023 — Mar 2026",
    title: "Software Engineer II — PayEngine",
    subtitle: "Santa Monica, California, United States",
    details: [
      "Designed and shipped end-to-end fintech features across React/TypeScript, Python/JavaScript backend services, REST APIs, and PostgreSQL data models for merchant onboarding, risk assessment, and payment processing — serving 50,000+ merchants and 100M+ transactions/month.",
      "Delivered a full Adyen integration (Web Drop-in tokenization, digital wallets) and onboarded 8 payment processors and acquirers, cutting new-processor integration time from 6 to 1 week.",
      "Engineered fraud, transaction-monitoring, and underwriting workflows integrating Kount, LexisNexis, Mastercard MATCH, and TransUnion CreditVision, reducing manual fraud review by 70% and cutting decision time from 3 days to 4 hours.",
      "Built subscription & billing on Kill Bill with PCI-aligned card security (VGS tokenization) across 8 payment flows, supporting 10,000+ active subscriptions.",
      "Developed n8n automation pipelines and AWS QuickSight dashboards, cutting manual review effort by 60% (~17 hours/week saved) across 7 internal teams.",
    ],
  },
  {
    type: "work",
    date: "Feb 2023 — Jul 2023",
    title: "Software Developer Intern — PayEngine",
    subtitle: "Santa Monica, California, United States",
    details: [
      "Assisted in debugging and resolving issues within a real-world payments platform, gaining hands-on experience with production-level engineering practices.",
      "Developed and improved UI components for payment links, enhancing usability and the customer payment experience.",
      "Collaborated with senior engineers on micro-deposit features, Amazon QuickSight dashboard integrations, and a partner subscription module.",
    ],
  },
  {
    type: "education",
    date: "Jan 2020 — Dec 2023",
    title: "B.Sc. Software Engineering",
    subtitle: "University of Karachi · Karachi, Pakistan",
    details: [
      "Salutatorian / Silver Medalist (GPA: 3.66/4.00) · Dean's List",
      "Nationwide Hackathon Winner",
      "Coursework: Data Structures & Algorithms, Databases, Computer Systems, Machine Learning, Deep Learning",
    ],
  },
];
