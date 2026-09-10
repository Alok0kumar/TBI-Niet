"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewport } from "@/lib/animations";
import { Calendar, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

const newsItems = [
  {
    category: "Achievement",
    date: "Jan 2025",
    title: "NIET TBI Hosts Startup Pitch Day with Leading Angel Investors",
    excerpt:
      "Over 25 startups presented their ventures to a panel of prominent investors, with three securing seed commitments totaling ₹1.2 crores for further development.",
    gradient: "from-accent to-accent-warm",
  },
  {
    category: "Program Launch",
    date: "Dec 2024",
    title: "New Incubation Cohort Opens for Student Entrepreneurs",
    excerpt:
      "Applications invited for the Spring 2025 cohort. Selected startups receive workspace, mentorship, legal support, and access to seed funding up to ₹5 lakhs.",
    gradient: "from-accent-warm to-rose-500",
  },
  {
    category: "Partnership",
    date: "Nov 2024",
    title: "NIET TBI Partners with AWS to Provide Cloud Credits to Startups",
    excerpt:
      "Strategic partnership enables incubated startups to access AWS cloud infrastructure credits worth up to $10,000, accelerating their technology development.",
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
