import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates — NIET TBI",
  description: "Stay updated with the latest news, announcements, media coverage, and startup stories from NIET TBI and its incubated ventures.",
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
