"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { getFeaturedEvents, type EventItem } from "@/data/events";
import FeaturedEventVisual from "./FeaturedEventVisual";

function FeaturedCard({ event }: { event: EventItem }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex h-[240px] sm:h-[260px] bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover"
    >
      {/* Left: details */}
      <div className="flex-1 min-w-0 flex flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="flex items-baseline gap-1 mb-3">
            <span
              className="text-3xl sm:text-4xl font-black text-[#C41E3A] leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {event.day ?? "--"}
            </span>
          </div>
          <span
            className="block text-[10px] text-gray-400 font-semibold uppercase tracking-wider -mt-2 mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {event.month ?? ""}
          </span>

          <span
            className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#C41E3A] mb-1.5"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Event
          </span>
          <h3
            className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-3 line-clamp-2 group-hover:text-[#C41E3A] transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {event.name || "Untitled Event"}
          </h3>

          <div className="flex flex-col gap-1 text-xs text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#C41E3A]/60 shrink-0" />
              <span className="truncate">{event.location || "Location TBA"}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#C41E3A]/60 shrink-0" />
              <span className="truncate">{event.time || "Time TBA"}</span>
            </span>
          </div>
        </div>

        <button
          type="button"
          aria-label={`View details for ${event.name}`}
          className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 group-hover:border-[#C41E3A] group-hover:bg-red-50 transition-all"
        >
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#C41E3A] transition-colors" />
        </button>
      </div>

      {/* Right: visual */}
      <div className="w-[38%] sm:w-[42%] shrink-0 relative">
        <FeaturedEventVisual
          visual={event.visual}
          gradient={event.gradient}
          name={event.name}
        />
      </div>
    </motion.article>
  );
}

interface Props {
  onViewAll?: () => void;
}

export default function FeaturedEvents({ onViewAll }: Props) {
  const featured = getFeaturedEvents(3);

  return (
    <section className="bg-white pt-6 pb-14 md:pb-20" id="featured-events">
      <div className="container-custom">
        <motion.div
          className="flex items-center justify-between mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Featured Events
          </h2>
          <button
            type="button"
            onClick={onViewAll}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C41E3A] hover:gap-2.5 transition-all"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {featured.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {featured.map((event) => (
              <FeaturedCard key={event.id} event={event} />
            ))}
          </motion.div>
        ) : (
          // Robust empty state — should rarely happen since data is static,
          // but the UI should never break if the featured list is empty.
          <div className="text-center py-14 text-gray-400 border border-dashed border-gray-200 rounded-2xl">
            <p className="text-sm font-medium">No featured events right now.</p>
            <p className="text-xs mt-1">Check back soon, or view all events below.</p>
          </div>
        )}
      </div>
    </section>
  );
}
