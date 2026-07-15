"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewport } from "@/lib/animations";
import { Calendar, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

const newsItems = [
  {
    category: "Media Coverage",
    date: "Nov 2024",
    title: "NIET TBI Expands Incubation Program to Deep-Tech Startups",
    excerpt:
      "The incubator announces new partnerships with industry leaders to support AI, IoT, and blockchain ventures in the Delhi-NCR region.",
    gradient: "from-accent to-blue-600",
  },
  {
    category: "Announcement",
    date: "Oct 2024",
    title: "₹50 Lakh Seed Fund Round Opens for Student Startups",
    excerpt:
      "Applications now open for the annual seed funding round. Student-led ventures can apply for grants up to ₹5 lakh per startup.",
    gradient: "from-accent-warm to-rose-500",
  },
  {
    category: "Startup Story",
    date: "Sep 2024",
    title: "Speedo Express Scales to 1000+ Daily Deliveries Across NCR",
    excerpt:
      "Incubated at NIET TBI, the logistics platform hits a major milestone in its journey to become Delhi-NCR's top delivery network.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function NewsGrid() {
  return (
    <section className="relative section-padding overflow-hidden" id="news-section">
      <div className="container-custom">
        <SectionHeading
          eyebrow="// LATEST"
          title="From the ecosystem."
          subtitle="News, announcements, and stories from the NIET TBI community."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {newsItems.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className="group relative rounded-2xl bg-card border border-border card-hover overflow-hidden"
            >
              {/* Thumbnail placeholder */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20`}
                />
                <div className="absolute inset-0 bg-card/40" />
                <div className="absolute inset-0 grid-pattern opacity-40" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-[family-name:var(--font-mono)] font-medium text-white bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-text-muted text-xs mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </div>

                <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-lg mb-2 group-hover:text-accent transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>

                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
                  Read more
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View all link */}
        <motion.div
          className="mt-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-accent transition-colors"
          >
            View all news & updates
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
