export type ActivityType = "hackathon" | "competition" | "event" | "workshop" | "other";

export type Activity = {
  name: string;
  organizer?: string;
  date: string;
  description?: string;
  image?: string;
  type: ActivityType;
};

/** Hackathons, competitions, and events. Add new entries here. */
export const activities: Activity[] = [
  {
    name: "Hackathon 2025",
    organizer: "Liam Ottley × AAA Accelerator Hackathon",
    date: "30th October 2025",
    description: `Participated in Hackathon 2025 of Liam Ottley × AAA Accelerator.
      Built an AI Agent AskDB on the Relevance AI platform.
      The agent interprets the intent using LLMs,
      converts it into SQL, executes it on the Neon database via HTTP,
      and returns clear, conversational results back to Slack.
    `,
    image: "/activities/hackathon-2025.png",
    type: "hackathon",
  },
  {
    name: "Hackathon 2022",
    organizer: "Fast Procom.net",
    date: "25th March 2022",
    description: `Participated in Hackathon 2022 of Fast Procom. Our team got 1st rank out of 10.
    We proposed an IOT based system for solving major problems of a metropolitan city like Karachi.`,
    image: "/activities/hackathon-2022.png",
    type: "hackathon",
  },
  {
    name: "CodeBIT Programming Competition",
    organizer: "Department of Computer Science, UBIT",
    date: "9th March 2022",
    description: "Participated in Speed Programming Competition of UOK - UBIT. Our team got 7th rank out of 39.",
    image: "/activities/codebits.png",
    type: "competition",
  },
];
