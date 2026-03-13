import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://briefly.app"),
  title: {
    default: "Briefly",
    template: "%s | Briefly",
  },
  description:
    "Briefly is an AI-powered meeting assistant for teams that turns discussions into structured summaries and action items.",
  openGraph: {
    title: "Briefly",
    description:
      "Briefly is an AI-powered meeting assistant for teams that turns discussions into structured summaries and action items.",
    url: "https://briefly.app",
    siteName: "Briefly",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Briefly",
    description:
      "Briefly is an AI-powered meeting assistant for teams that turns discussions into structured summaries and action items.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

