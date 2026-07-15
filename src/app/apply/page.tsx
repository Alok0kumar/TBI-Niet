import type { Metadata } from "next";
import ApplyForm from "./ApplyForm";

export const metadata: Metadata = {
  title: "Apply for Incubation",
  description:
    "Apply to join NIET TBI's incubation program. Get workspace, seed funding, mentorship, and investor access for your startup.",
};

export default function ApplyPage() {
  return <ApplyForm />;
}
