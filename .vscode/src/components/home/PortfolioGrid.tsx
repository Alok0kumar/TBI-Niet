"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { ChevronDown, Filter, ExternalLink } from "lucide-react";
import { ALL_STARTUPS, Startup } from "@/data/startups";

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Startups");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [activeFlippedId, setActiveFlippedId] = useState<string | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [unflipClickedId, setUnflipClickedId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    if (activeFlippedId === id) {
      // 2nd click: Immediately clear both active lock AND hover state so card unflips instantly
      setActiveFlippedId(null);
      setHoveredCardId(null);
    } else {
      // 1st click: Lock flip on this card (ruka rahe)
      setActiveFlippedId(id);
    }
  };

  const handleMouseLeave = () => {
    setHoveredCardId(null);
  };

  // Extract unique categories from dataset
  const categories = useMemo(() => {
    const set = new Set<string>();
    ALL_STARTUPS.forEach((s) => {
      if (s.category && s.category.trim() !== "") {
        set.add(s.category.trim());
      }
    });
    return ["All Startups", ...Array.from(set).sort()];
  }, []);

  // Filter and sort startups: custom logos first, default TBI fallback logos last
  const filteredStartups = useMemo(() => {
    let list = ALL_STARTUPS;
    if (selectedCategory !== "All Startups") {
      list = ALL_STARTUPS.filter((s) => s.category === selectedCategory);
    }
    return [...list].sort((a, b) => {
      const isADefault = a.logo === "/tbi-logo-without-background.png";
      const isBDefault = b.logo === "/tbi-logo-without-background.png";
      if (isADefault && !isBDefault) return 1;
      if (!isADefault && isBDefault) return -1;
      return 0;
    });
  }, [selectedCategory]);

  // Current visible slice
  const visibleStartups = useMemo(() => {
    return filteredStartups.slice(0, visibleCount);
  }, [filteredStartups, visibleCount]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(6); // Reset pagination on category filter change
    setActiveFlippedId(null);
    setUnflipClickedId(null);
  };

  const hasMore = visibleCount < filteredStartups.length;

  return (
    <section className="section-padding relative" id="startups">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12">
          {/* Top Title & Subtitle */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-[3px] h-[18px] bg-accent shadow-[0_0_8px_var(--color-accent)] rounded-full" />
              <span className="text-sm md:text-base font-mono font-bold tracking-[0.25em] text-accent uppercase pt-px">
                PORTFOLIO
              </span>
            </div>

            {/* Added Title & Description */}
            <h2
              className="font-[family-name:var(--font-display)] font-bold text-gray-900 leading-[1.15] mb-2.5"
              style={{ fontSize: "clamp(24px, 3.2vw, 40px)" }}
            >
              From Innovation to Impact.
            </h2>
            <p className="text-gray-500 font-sans text-base md:text-lg max-w-2xl leading-relaxed">
              We nurture ambitious founders and help transform promising ideas into market-ready ventures through mentorship, resources, and a connected innovation ecosystem.
            </p>
          </motion.div>

          {/* Lower Row: Incubated Startups heading on left, Dropdown on right */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-gray-100 pt-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <h2 className="font-[family-name:var(--font-display)] font-bold text-gray-900 text-2xl md:text-3xl leading-snug mb-1">
                Incubated Startups
              </h2>
              <p className="text-gray-500 text-sm font-sans">
                Explore the ventures growing with the NIET TBI ecosystem.
              </p>
            </motion.div>

            {/* Category Filter Dropdown */}
            <motion.div
              className="flex items-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <div className="relative inline-flex items-center rounded-full bg-white border border-gray-200/90 shadow-sm hover:shadow transition-all cursor-pointer">
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  aria-label="Filter startups by category"
                  className="appearance-none bg-transparent pl-5 pr-10 py-2.5 font-bold text-gray-900 text-sm focus:outline-none cursor-pointer z-10 min-w-[150px]"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="bg-white text-gray-900 font-medium py-1">
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none z-0">
                  <span className="w-[1.5px] h-4 bg-gray-300 rounded-full" />
                  <ChevronDown className="w-4 h-4 text-gray-800 stroke-[2.5]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3-Column Startup Card Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <AnimatePresence mode="popLayout">
            {visibleStartups.map((startup) => {
              // Flipped if 1st clicked (activeFlippedId === startup.id)
              // OR if hovered (hoveredCardId === startup.id)
              const isFlipped =
                activeFlippedId === startup.id || hoveredCardId === startup.id;

              return (
                <motion.div
                  key={startup.id}
                  variants={fadeUp}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleCardClick(startup.id)}
                  onMouseEnter={() => setHoveredCardId(startup.id)}
                  onMouseLeave={handleMouseLeave}
                  className="w-full max-w-[270px] mx-auto h-[260px] [perspective:1000px] group cursor-pointer"
                >
                  {/* 3D Flipper Container */}
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="relative w-full h-full [transform-style:preserve-3d] rounded-[24px]"
                  >

                    {/* FRONT FACE (White Card with Logo + Startup Name) */}
                    <div className="absolute inset-0 w-full h-full rounded-[24px] bg-white border border-gray-100 shadow-[0_10px_28px_rgba(0,0,0,0.08)] group-hover:shadow-[0_16px_36px_rgba(232,16,16,0.35)] flex flex-col overflow-hidden [backface-visibility:hidden] transition-shadow duration-300">
                      <div className="w-full flex-1 bg-white p-6 flex items-center justify-center overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={startup.logo}
                          alt={`${startup.name} logo`}
                          className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/tbi-logo-without-background.png";
                          }}
                        />
                      </div>
                      <div className="w-full py-4 px-3 bg-white border-t border-accent/40 text-center flex items-center justify-center shrink-0">
                        <h3 className="font-[family-name:var(--font-display)] font-semibold text-gray-900 group-hover:text-accent text-base md:text-lg text-center leading-tight tracking-tight transition-colors">
                          {startup.name}
                        </h3>
                      </div>
                    </div>

                    {/* BACK FACE (Theme Red Gradient with Description + Link) */}
                    <div className="absolute inset-0 w-full h-full rounded-[24px] bg-gradient-to-br from-[#E81010] via-[#F01818] to-[#CD0A0A] text-white p-5 flex flex-col justify-between shadow-[0_16px_36px_rgba(232,16,16,0.4)] [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden border border-red-400/30">
                      {/* Header: Startup Title & Category */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h4 className="font-[family-name:var(--font-display)] font-semibold text-white text-base leading-snug line-clamp-1">
                            {startup.name}
                          </h4>
                          {startup.category && (
                            <span className="text-[11px] uppercase tracking-wider font-semibold text-white/95 underline decoration-white/60 underline-offset-4 whitespace-nowrap shrink-0">
                              {startup.category}
                            </span>
                          )}
                        </div>
                        <div className="w-full h-[1px] bg-red-300/40 mb-2.5" />
                      </div>

                      {/* Body: Custom Scrollable Description Box */}
                      <div className="flex-1 overflow-y-auto pr-1 text-xs text-white/95 leading-relaxed font-sans scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/60 scrollbar-track-transparent">
                        <p className="whitespace-normal">
                          {startup.desc && startup.desc.trim() !== ""
                            ? startup.desc
                            : "No detailed description available for this incubated startup."}
                        </p>
                      </div>

                      {/* Footer: Clickable Link Button */}
                      <div className="pt-2.5 mt-2 border-t border-white/20 flex items-center justify-between">
                        {startup.link && startup.link.trim() !== "" ? (
                          <a
                            href={startup.link.startsWith("http") ? startup.link : `https://${startup.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-full inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white text-white hover:text-[#E81010] text-xs font-semibold transition-all duration-200 group/btn"
                          >
                            <span>Visit Website</span>
                            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </a>
                        ) : (
                          <span className="text-[11px] text-white/70 italic text-center w-full">
                            Website link unavailable
                          </span>
                        )}
                      </div>
                    </div>

                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* See More Startups Button */}
        {hasMore && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white text-base font-bold shadow-md shadow-red-600/20 hover:shadow-lg hover:shadow-red-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>See More Startups</span>
              <ChevronDown className="w-5 h-5 text-white" />
            </button>
          </div>
        )}

        {/* Show Less button when all visible */}
        {!hasMore && filteredStartups.length > 6 && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount(6)}
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white text-base font-bold shadow-md shadow-red-600/20 hover:shadow-lg hover:shadow-red-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Show Less</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
