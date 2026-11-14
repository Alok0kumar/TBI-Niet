"use client";

import { useState, forwardRef, type Ref } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  allEvents,
  eventCategories,
  type EventCategory,
  type EventItem,
} from "@/data/events";

/* ───────────── Single Event Card ───────────── */

function EventCard({ event }: { event: EventItem }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group grid grid-cols-[auto_1fr] md:grid-cols-[80px_140px_1fr_auto] items-start md:items-center gap-4 md:gap-6 bg-white border border-gray-100 rounded-2xl p-5 md:p-6 card-hover"
    >
      {/* Date badge */}
      <div className="flex flex-col items-center justify-center bg-red-50 border border-red-100 rounded-xl w-[72px] h-[80px] shrink-0">
        <span
          className="text-2xl font-bold text-[#C41E3A]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {event.day}
        </span>
        <span
          className="text-[10px] font-medium text-gray-500 uppercase tracking-wider"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {event.month}
        </span>
      </div>

      {/* Thumbnail placeholder */}
      <div className="hidden md:block relative w-[120px] h-[80px] rounded-lg overflow-hidden shrink-0">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-80`}
        />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      {/* Details */}
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C41E3A]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {event.type}
          </span>
        </div>
        <h3
          className="text-base md:text-lg font-bold text-gray-900 mb-1 leading-snug group-hover:text-[#C41E3A] transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {event.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-2 line-clamp-1">
          {event.description}
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#C41E3A]/60" />
            {event.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-[#C41E3A]/60" />
            {event.time}
          </span>
        </div>
      </div>

      {/* Arrow */}
      <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 group-hover:border-[#C41E3A] group-hover:bg-red-50 transition-all shrink-0">
        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#C41E3A] transition-colors" />
      </div>
    </motion.div>
  );
}

/* ───────────── Events Section (Upcoming / Past with filter tabs) ───────────── */

interface EventsSectionProps {
  /** Optionally controlled from a parent (e.g. the Explore bar above). */
  category?: EventCategory;
  onCategoryChange?: (category: EventCategory) => void;
}

function EventsSection({ category: controlledCategory, onCategoryChange }: EventsSectionProps, ref: Ref<HTMLElement>) {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [internalCategory, setInternalCategory] = useState<EventCategory>("All");

  // Support both controlled (from ExploreFilterBar) and standalone usage.
  const category = controlledCategory ?? internalCategory;
  const setCategory = (c: EventCategory) => {
    setInternalCategory(c);
    onCategoryChange?.(c);
  };

  const source = Array.isArray(allEvents) ? allEvents : [];
  const byStatus = source.filter((e) => e.status === tab);
  const filtered =
    category === "All"
      ? byStatus
      : byStatus.filter((e) => e.type === category);

  return (
    <section ref={ref} className="relative bg-[#FAFAFA] py-16 md:py-24 scroll-mt-24" id="events-listing">
      <div className="container-custom">
        <div className="mb-2">
          <span
            className="text-xs font-medium tracking-[0.15em] text-gray-400 uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Full Archive
          </span>
        </div>
        {/* Toggle + Category filters row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          {/* Upcoming / Past toggle */}
          <div className="flex gap-1 bg-white rounded-full p-1 w-fit border border-gray-200 shadow-sm">
            {(["upcoming", "past"] as const).map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTab(t);
                }}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all capitalize ${
                  tab === t
                    ? "bg-[#C41E3A] text-white shadow-md"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2 items-center">
            <div className="w-full md:w-auto h-px md:h-6 bg-gray-200 md:mr-4 hidden md:block" />
            {eventCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all border ${
                  category === c
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Section Heading */}
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {tab === "upcoming" ? "Upcoming Events" : "Past Events"}
          </h2>
          <span className="hidden md:block text-xs text-gray-400">
            {filtered.length} {filtered.length === 1 ? "event" : "events"}
          </span>
        </div>

        {/* Event Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${tab}-${category}`}
            className="flex flex-col gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filtered.length > 0 ? (
              filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            ) : (
              <motion.div
                variants={fadeUp}
                className="text-center py-16 text-gray-400"
              >
                <p className="text-lg font-medium">No events found</p>
                <p className="text-sm mt-1">
                  Try selecting a different category.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default forwardRef(EventsSection);
