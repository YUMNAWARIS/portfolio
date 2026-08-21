import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import ThemeClientProvider from "@/theme/ThemeClientProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://portfolio-sepia-eight-t1gm4b68kv.vercel.app";
const SITE_NAME = "Yumna Portfolio";
const DEFAULT_DESCRIPTION = "Professional portfolio built with Next.js and Material UI";

export const metadata: Metadata = {
  title: { default: "Yumna | Portfolio", template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Yumna | Portfolio",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeClientProvider>
      </body>
    </html>
  );
}


