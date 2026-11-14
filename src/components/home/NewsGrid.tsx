"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Curated highlights for the home page — pulled from actual event data
const newsHighlights = [
interface NewsItem {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  isFeatured?: boolean;
}

const categories = [
  "All",
  "Events",
  "Announcements",
  "Programs",
  "Partnerships",
  "Success Stories",
];

const allNewsItems: NewsItem[] = [
  {
    id: "cohort-spring-2025",
    category: "Programs",
    date: "Dec 12, 2024",
    title: "New Incubation Cohort Opens for Student Entrepreneurs",
    excerpt:
      "Applications invited for the Spring 2025 cohort. Get mentorship, workspace and funding support.",
    image: "/news/building.jpg",
    isFeatured: true,
  },
  {
    id: "pitch-day-2024",
    category: "Events",
    date: "Nov 28, 2024",
    title: "NIET TBI Hosts Startup Pitch Day",
    excerpt:
      "Over 25 startups showcased their innovations to a panel of investors.",
    image: "/news/pitch-day.jpg",
  },
  {
    id: "aws-partnership",
    category: "Partnerships",
    date: "Nov 15, 2024",
    title: "Strategic Partnership with AWS",
    excerpt:
      "Enabling startups with access to AWS cloud credits and enterprise architectural support.",
    image: "/news/handshake.jpg",
  },
  {
    id: "seed-grant-awards",
    category: "Success Stories",
    date: "Oct 22, 2024",
    title: "NIET TBI Startups Secure ₹1.2 Cr in Pre-Seed Funding",
    excerpt:
      "Three student-led deep tech ventures secure milestone investment at National Demo Day.",
    image: "/news/pitch-day.jpg",
  },
  {
    id: "aktu-innovation-summit",
    category: "Announcements",
    date: "Sep 30, 2024",
    title: "State Innovation Council Recognizes NIET TBI",
    excerpt:
      "Awarded Top Regional Incubation Center for excellence in student entrepreneurship.",
    image: "/news/building.jpg",
  },
];

export default function NewsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [pageIndex, setPageIndex] = useState(0);

  const filteredNews = allNewsItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  // Featured main item and side items based on filtered selection
  const featuredItem = filteredNews[0] || allNewsItems[0];
  const sideItems =
    filteredNews.length > 1
      ? filteredNews.slice(1, 3)
      : allNewsItems.filter((i) => i.id !== featuredItem.id).slice(0, 2);

  const handlePrev = () => {
    setPageIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setPageIndex((prev) => prev + 1);
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden" id="news-section">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Eyebrow: —— LATEST NEWS —— */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-mono font-bold tracking-[0.22em] text-accent uppercase">
              LATEST NEWS
            </span>
            <span className="h-px w-10 bg-accent" />
          </div>

          {/* Title: From the ecosystem. Stay ahead. */}
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight mb-3">
            From the ecosystem.{" "}
            <span className="text-accent">Stay ahead.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-neutral-500 text-base md:text-lg max-w-xl mx-auto">
            News, announcements, and stories from the NIET TBI community.
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2.5 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setPageIndex(0);
                }}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-accent text-white shadow-sm"
                    : "bg-white border border-gray-200 text-neutral-600 hover:border-gray-300 hover:text-neutral-900"
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* News Grid with Left/Right Carousel Controls */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="hidden xl:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-neutral-700 hover:text-accent hover:border-accent transition-all cursor-pointer"
            aria-label="Previous news"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            className="hidden xl:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-neutral-700 hover:text-accent hover:border-accent transition-all cursor-pointer"
            aria-label="Next news"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 2-Column Responsive Layout */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + pageIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
            >
              {/* Left Column: Large Featured Card */}
              <div className="lg:col-span-7 flex">
                <article className="group flex-1 bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col md:flex-row hover:shadow-[0_12px_40px_rgba(196,30,58,0.12)] transition-shadow duration-300">
                  {/* Building Photo on Left */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[260px] overflow-hidden shrink-0">
                    <Image
                      src={featuredItem.image}
                      alt={featuredItem.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/20 via-transparent to-transparent" />
                  </div>

                  {/* Card Content on Right */}
                  <div className="p-7 md:p-8 flex flex-col justify-between flex-1">
                    <div>
                      {/* Date Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-accent text-xs font-semibold mb-4">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{featuredItem.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-neutral-900 leading-tight mb-3 group-hover:text-accent transition-colors">
                        {featuredItem.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                        {featuredItem.excerpt}
                      </p>
                    </div>

                    {/* Bottom Action & Red accent accent bar */}
                    <div>
                      <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all"
                      >
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <div className="mt-6 flex justify-end">
                        <span className="h-[2px] w-12 bg-accent/40 rounded-full" />
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* Right Column: Stacked Smaller Cards */}
              <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
                {sideItems.map((item) => (
                  <article
                    key={item.id}
                    className="group flex-1 bg-white rounded-2xl border border-gray-100 shadow-[0_6px_24px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col sm:flex-row hover:shadow-[0_10px_30px_rgba(196,30,58,0.1)] transition-shadow duration-300"
                  >
                    {/* Image Thumbnail */}
                    <div className="relative w-full sm:w-44 h-40 sm:h-auto min-h-[140px] shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        {/* Date badge */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 text-accent text-[11px] font-semibold mb-2">
                          <Calendar className="w-3 h-3" />
                          <span>{item.date}</span>
                        </div>

                        {/* Title */}
                        <h4 className="font-[family-name:var(--font-display)] text-sm md:text-base font-bold text-neutral-900 leading-snug line-clamp-2 mb-1.5 group-hover:text-accent transition-colors">
                          {item.title}
                        </h4>

                        {/* Excerpt */}
                        <p className="text-neutral-500 text-xs leading-relaxed line-clamp-2 mb-3">
                          {item.excerpt}
                        </p>
                      </div>

                      {/* Read more */}
                      <Link
                        href="/news"
                        className="inline-flex items-center gap-1.5 text-accent font-semibold text-xs group-hover:gap-2.5 transition-all"
                      >
                        <span>Read more</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View all news & updates button */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/programs-events"
           
            href="/news"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-neutral-900 text-neutral-900 font-semibold text-sm hover:bg-neutral-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
          >
            <span>View all news & updates</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
