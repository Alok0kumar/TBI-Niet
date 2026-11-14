import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Cell Events — NIET TBI",
  description: "Discover E-Cell events at NIET — hackathons, speaker series, startup weekends, and competitions for student entrepreneurs.",
};

export default function EcellEventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
