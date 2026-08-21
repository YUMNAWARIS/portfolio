export type NavSection = {
  label: string;
  href: string;
};

/**
 * The site's primary navigation, shared by the header (desktop menu + mobile
 * drawer) and the footer's quick links so both stay in sync automatically.
 */
export const siteSections: NavSection[] = [
  { label: "About Me", href: "/" },
  { label: "MOOCs & Certs", href: "/moocs-certs" },
  { label: "Activities", href: "/activities" },
  { label: "Projects", href: "/projects" },
  { label: "Writeups", href: "/blogs" },
];
