"use client";

import { motion } from "framer-motion";
import { exploreCategories, type EventCategory } from "@/data/events";

interface Props {
  active: EventCategory;
  onChange: (category: EventCategory) => void;
}

export default function ExploreFilterBar({ active, onChange }: Props) {
  // Defensive fallback in case the data module ever ships an empty list.
  const categories =
    Array.isArray(exploreCategories) && exploreCategories.length > 0
      ? exploreCategories
      : (["All"] as EventCategory[]);

  return (
    <section className="bg-white" id="events-explore">
      <div className="container-custom">
        <motion.div
          className="flex flex-wrap items-center justify-between gap-4 py-5 border-t border-gray-100"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="text-xs font-medium tracking-[0.15em] text-gray-400 uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Explore
          </span>

          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
            aria-label="Filter events by category"
          >
            {categories.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => onChange(c)}
                  aria-pressed={isActive}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#C41E3A]"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {c}
                  {isActive && (
                    <motion.span
                      layoutId="explore-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#C41E3A] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
