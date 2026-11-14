"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { getUpcomingPreview, type EventItem } from "@/data/events";

function PreviewCard({ event }: { event: EventItem }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group bg-white border border-gray-100 rounded-2xl p-6 md:p-7 card-hover"
    >
      <span
        className="block text-3xl md:text-4xl font-black text-[#C41E3A] mb-4 leading-none"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {event.day ?? "--"}
      </span>
      <h3
        className="text-base md:text-lg font-bold text-gray-900 mb-1.5 group-hover:text-[#C41E3A] transition-colors"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {event.name || "Untitled Event"}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">
        {event.description || "Details coming soon."}
      </p>
    </motion.article>
  );
}

interface Props {
  onViewCalendar?: () => void;
}

export default function UpcomingEventsPreview({ onViewCalendar }: Props) {
  const upcoming = getUpcomingPreview(2);

  return (
    <section className="bg-white pb-16 md:pb-24" id="upcoming-events-preview">
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
            Upcoming Events
          </h2>
          <button
            type="button"
            onClick={onViewCalendar}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C41E3A] hover:gap-2.5 transition-all"
          >
            View calendar
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {upcoming.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {upcoming.map((event) => (
              <PreviewCard key={event.id} event={event} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-14 text-gray-400 border border-dashed border-gray-200 rounded-2xl">
            <p className="text-sm font-medium">Nothing on the calendar just yet.</p>
            <p className="text-xs mt-1">New events are added throughout the year.</p>
          </div>
        )}
      </div>
    </section>
  );
}
