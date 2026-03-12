import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meetflow.app"),
  title: {
    default: "MeetFlow",
    template: "%s | MeetFlow",
  },
  description:
    "MeetFlow is an AI-powered meeting assistant for teams that turns discussions into structured summaries and action items.",
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
