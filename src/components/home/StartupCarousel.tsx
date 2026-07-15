"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";
import { ExternalLink, Truck, Palette, Package, Lightbulb, ShoppingBag, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const startups = [
  {
    name: "Speedo Express",
    sector: "Logistics & Delivery",
    description:
      "Technology-driven logistics platform providing reliable on-demand delivery and transport solutions across Delhi NCR.",
    url: "https://speedoexpress.org",
    icon: Truck,
    gradient: "from-blue-500 to-cyan-500",
    tags: ["B2B", "Last-Mile", "Real-Time Tracking"],
  },
  {
    name: "Printables",
    sector: "E-Commerce",
    description:
      "Premium customised stationery shop offering personalized diaries, planners, posters, and more.",
    url: "https://printables.co.in",
    icon: Palette,
    gradient: "from-pink-500 to-rose-500",
    tags: ["D2C", "Custom Print", "Stationery"],
  },
  {
    name: "TechNova Labs",
    sector: "Deep Tech",
    description:
      "AI-powered quality inspection for manufacturing units, reducing defect rates by 40%.",
    url: "#",
    icon: Lightbulb,
    gradient: "from-violet-500 to-purple-500",
    tags: ["AI/ML", "Manufacturing", "SaaS"],
  },
  {
    name: "GreenCart",
    sector: "AgriTech",
    description:
      "Farm-to-fork supply chain platform connecting local farmers directly with urban consumers.",
    url: "#",
    icon: ShoppingBag,
    gradient: "from-emerald-500 to-green-500",
    tags: ["AgriTech", "Supply Chain", "B2C"],
  },
  {
    name: "UrbanNest",
    sector: "PropTech",
    description:
      "Smart co-living spaces for young professionals with IoT-integrated amenities and community features.",
    url: "#",
    icon: MapPin,
    gradient: "from-amber-500 to-orange-500",
    tags: ["PropTech", "IoT", "Co-Living"],
  },
  {
    name: "PackSwift",
    sector: "Packaging",
    description:
      "Sustainable packaging solutions using biodegradable materials for D2C brands and e-commerce.",
    url: "#",
    icon: Package,
    gradient: "from-teal-500 to-cyan-500",
    tags: ["Sustainability", "D2C", "Packaging"],
  },
];

function StartupCard({
  startup,
}: {
  startup: (typeof startups)[0];
}) {
  return (
    <motion.div
      className="group relative flex-shrink-0 w-[340px] md:w-[380px] rounded-2xl bg-card border border-border card-hover overflow-hidden"
      variants={fadeUp}
    >
      {/* Gradient top strip */}
      <div
        className={`h-1 bg-gradient-to-r ${startup.gradient}`}
      />

      <div className="p-6">
        {/* Icon + Sector */}
        <div className="flex items-center justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${startup.gradient} flex items-center justify-center`}
          >
            <startup.icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs font-[family-name:var(--font-mono)] text-text-muted bg-surface px-3 py-1.5 rounded-full border border-border">
            {startup.sector}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-xl mb-2">
          {startup.name}
        </h3>

        {/* Description */}
        <p className="text-text-muted text-sm leading-relaxed mb-4">
          {startup.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {startup.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-text-muted bg-surface/60 px-2.5 py-1 rounded-full border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Visit Link */}
        {startup.url !== "#" && (
          <a
            href={startup.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-white transition-colors"
          >
            Visit
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function StartupCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const opacity = useTransform(scrollXProgress, [0, 0.05], [0, 1]);

  return (
    <section className="relative section-padding overflow-hidden" id="startups">
      <div className="container-custom mb-2">
        <SectionHeading
          eyebrow="// INCUBATED STARTUPS"
          title="Meet the founders building tomorrow."
          subtitle="From logistics to deep-tech — our portfolio spans the innovation spectrum."
          align="left"
        />
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Left fade gradient */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, var(--color-primary) 0%, transparent 100%)",
            opacity,
          }}
        />
        {/* Right fade gradient */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(270deg, var(--color-primary) 0%, transparent 100%)",
          }}
        />

        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-6 md:px-[max(24px,calc((100vw-1280px)/2+24px))] pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {startups.map((startup) => (
            <StartupCard key={startup.name} startup={startup} />
          ))}
        </div>
      </div>
    </section>
  );
}
