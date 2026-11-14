import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join E-Cell — NIET TBI",
  description: "Be part of NIET E-Cell — a 500+ member student entrepreneurship community. Join competitions, workshops, and build your startup journey.",
};

export default function EcellJoinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
