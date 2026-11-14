import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentors & Experts — NIET TBI",
  description: "Learn from industry leaders. NIET TBI's mentor network includes seasoned entrepreneurs, investors, and domain experts guiding the next wave of founders.",
};

export default function MentorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
