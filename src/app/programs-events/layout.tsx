import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs & Events — NIET TBI",
  description: "Explore NIET TBI's programs, workshops, hackathons, speaker series, and startup events. Building the ecosystem, one event at a time.",
};

export default function ProgramsEventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
