import type { Metadata } from "next";
import EventsPageContent from "./EventsPageContent";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "Summits, hackathons, workshops, and competitions — building a stronger innovation ecosystem at NIET TBI.",
};

export default function ProgramsEventsPage() {
  return <EventsPageContent />;
}
