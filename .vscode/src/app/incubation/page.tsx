import type { Metadata } from "next";
import IncubationContent from "./IncubationContent";

export const metadata: Metadata = {
  title: "Incubation Program",
  description:
    "Explore NIET TBI's incubation model — workspace, funding, mentorship, and full-stack support for student startups and growth-stage companies.",
};

export default function IncubationPage() {
  return <IncubationContent />;
}
