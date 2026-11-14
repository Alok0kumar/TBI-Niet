"use client";

import { motion } from "framer-motion";
import { heroStats } from "@/data/events";
import EventStageVisual from "./EventStageVisual";

export default function EventsHero() {
  // Defensive: never let a malformed/empty stats array break the layout.
  const stats = Array.isArray(heroStats) && heroStats.length > 0 ? heroStats : [];

  return (
    <section
      className="relative overflow-hidden bg-white mt-[82px] pt-10 pb-10 md:pt-14 md:pb-14"
      id="events-hero"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] gap-8 lg:gap-10 items-stretch">
          {/* ── Left: copy ── */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-[3px] h-[16px] bg-[#C41E3A] rounded-full" />
              <span
                className="text-xs font-medium tracking-[0.2em] text-[#C41E3A] uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                News &amp; Events
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="font-black text-black leading-[0.98] mb-5"
              style={{
                fontSize: "clamp(40px, 5vw, 60px)",
                fontFamily: "var(--font-display)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Ideas in
              <br />
              <span className="text-[#C41E3A]">Motion.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-[15px] md:text-[16px] leading-7 text-gray-600 mb-8 max-w-[420px]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Events, workshops, and competitions — where ideas turn into
              innovation ecosystems.
            </motion.p>

            {/* Stats strip */}
            {stats.length > 0 && (
              <motion.div
                className="flex flex-wrap gap-0"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {stats.map((stat, i) => (
                  <div
                    key={stat.label ?? i}
                    className={`pr-8 ${i > 0 ? "pl-8 border-l border-gray-200" : ""}`}
                  >
                    <div
                      className="text-2xl md:text-3xl font-bold text-black"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.value ?? "—"}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {stat.label ?? ""}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* ── Right: stage visual ── */}
          <motion.div
            className="relative w-full h-[280px] sm:h-[360px] lg:h-[420px]"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          >
            <EventStageVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
