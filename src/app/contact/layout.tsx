import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — NIET TBI",
  description: "Get in touch with NIET TBI. Reach out for incubation queries, partnerships, mentorship opportunities, or visit us at NIET, Greater Noida.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
