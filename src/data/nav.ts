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
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "MOOCs & Certs", href: "/moocs-certs" },
  { label: "Activities", href: "/activities" },
  { label: "Writeups", href: "/blogs" },
];
