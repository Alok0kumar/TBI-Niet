import { Metadata } from "next";
import PortfolioGrid from "@/components/home/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio — Incubated Startups",
  description: "Explore the innovative startups incubated at NIET Technology Business Incubator.",
};

export default function PortfolioPage() {
  return (
    <main className="pt-16 md:pt-20 min-h-screen bg-white">
      <PortfolioGrid />
    </main>
  );
}
