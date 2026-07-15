"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";

const partners = [
  "MSME Government of India",
  "Amazon AWS",
  "Microsoft Azure",
  "Wadhwani Foundation",
  "Stanford Seed Spark",
  "TiE Delhi-NCR",
  "NASSCOM",
  "Startup India",
  "NITI Aayog",
  "DST India",
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden group">
      <div
        className={`flex gap-6 shrink-0 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center justify-center px-8 py-4 rounded-xl bg-card/50 border border-border hover:border-accent/20 transition-colors whitespace-nowrap min-w-[200px]"
          >
            <span className="text-sm font-medium text-text-muted">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PartnersMarquee() {
  return (
    <section className="relative py-20 overflow-hidden" id="partners">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <motion.div
        className="container-custom mb-10 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <span className="eyebrow">// TRUSTED BY</span>
      </motion.div>

      <div className="space-y-6">
        <MarqueeRow items={partners.slice(0, 5)} />
        <MarqueeRow items={partners.slice(5)} reverse />
      </div>
    </section>
  );
}
