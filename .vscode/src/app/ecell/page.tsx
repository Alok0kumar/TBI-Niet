import type { Metadata } from "next";
import EcellHome from "./EcellHome";

export const metadata: Metadata = {
  title: "E-Cell — Student Entrepreneurship Wing",
  description:
    "NIET E-Cell is the student-led entrepreneurship community — competitions, speaker series, hackathons, and 500+ members building the next wave of founders.",
};

export default function EcellPage() {
  return <EcellHome />;
}
