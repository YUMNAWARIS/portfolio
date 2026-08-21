import type { ComponentType } from "react";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import ArticleIcon from "@mui/icons-material/Article";
import SchoolIcon from "@mui/icons-material/School";

/** Single source of truth for direct contact details (used by the Contact section). */
export const contactInfo = {
  email: "yumnaahwaris@gmail.com",
  phone: {
    raw: "+923356910909",
    display: "+92 335 6910909",
  },
};

export type SocialLink = {
  name: string;
  url: string;
  icon: ComponentType<SvgIconProps>;
};

/**
 * Every social/profile link. The Contact section renders all of them; the
 * footer shows a curated subset — both read from this one list so a URL
 * change only needs to happen in one place.
 */
export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/yumnawaris", icon: GitHubIcon },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/yumna-waris", icon: LinkedInIcon },
  { name: "X / Twitter", url: "https://x.com/waris_yumna", icon: TwitterIcon },
  { name: "Medium", url: "https://medium.com/@yumnaahwaris", icon: ArticleIcon },
  { name: "Coursera", url: "https://www.coursera.org/user/85a7da3566159e08061efacef9258118", icon: SchoolIcon },
  { name: "Udemy", url: "https://www.udemy.com/user/yumna-waris/", icon: SchoolIcon },
  { name: "Website", url: "https://yumnawaris.github.io/yumna-portfolio", icon: LanguageIcon },
];
