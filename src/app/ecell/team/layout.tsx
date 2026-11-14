import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Cell Team — NIET TBI",
  description: "Meet the student leaders driving innovation at NIET E-Cell. Our team organizes events, mentors peers, and builds the entrepreneurship ecosystem.",
};

export default function EcellTeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
