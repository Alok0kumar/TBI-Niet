import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About NIET TBI",
  description:
    "Learn about NIET Technology Business Incubator — our story, vision, mission, and the team driving innovation in Greater Noida since 2014.",
};

export default function AboutPage() {
  return <AboutContent />;
}
