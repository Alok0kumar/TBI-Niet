"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, ArrowRight } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  startup: string;
  batch: string;
  domain: string;
  avatar: string;
  fundingRaised?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "vikram-singh",
    quote:
      "The MSME recognition and infrastructure support from NIET TBI gave our startup instant credibility. It made all the difference when pitching to enterprise clients and securing our first commercial contracts.",
    name: "Vikram Singh",
    role: "Co-Founder & CEO",
    startup: "SmartManufacture",
    batch: "Cohort 2024",
    domain: "Industry 4.0 / IoT",
    avatar: "/images/mentors/image1.jpeg",
    fundingRaised: "₹25L Seed Grant",
  },
  {
    id: "sneha-kapoor",
    quote:
      "Being part of NIET TBI opened doors we didn't even know existed. The investor mixers connected us with early-stage VCs who believed in our diagnostic tech and led our pre-seed round within 4 months.",
    name: "Sneha Kapoor",
    role: "Founder & CTO",
    startup: "HealthFirst Diagnostics",
    batch: "Cohort 2023",
    domain: "HealthTech",
    avatar: "/images/mentors/image2.jpeg",
    fundingRaised: "₹45L Pre-Seed",
  },
  {
    id: "arjun-mehta",
    quote:
      "NIET TBI provided the perfect launchpad. Access to legal filing, patent guidance, and dedicated AWS cloud credits saved us months of trial-and-error and let us focus 100% on product development.",
    name: "Arjun Mehta",
    role: "Founder",
    startup: "EduTech Innovations",
    batch: "Cohort 2024",
    domain: "EdTech",
    avatar: "/images/mentors/image3.jpeg",
    fundingRaised: "₹15L Seed Grant",
  },
  {
    id: "ritika-sharma",
    quote:
      "The dedicated lab facilities and IoT prototyping hardware on campus enabled us to build our physical hardware MVP in record time without burning our early capital on expensive fabrication.",
    name: "Ritika Sharma",
    role: "Lead Engineer & Co-Founder",
    startup: "AgriNext Labs",
    batch: "Cohort 2023",
    domain: "AgriTech",
    avatar: "/images/mentors/image4.jpeg",
    fundingRaised: "₹30L Seed Grant",
  },
  {
    id: "aditya-verma",
    quote:
      "Mentorship from veteran founders who have scaled ventures was priceless. The weekly reviews helped us sharpen our go-to-market strategy and avoid common startup pitfalls early on.",
    name: "Aditya Verma",
    role: "Founder & CEO",
    startup: "Solaris CleanTech",
    batch: "Cohort 2024",
    domain: "CleanTech",
    avatar: "/images/mentors/image5.jpeg",
    fundingRaised: "₹50L Seed",
  },
  {
    id: "priya-nair",
    quote:
      "From drafting shareholder agreements to filing our trademark, NIET TBI's legal cell handled the complexity so we could sign our first institutional B2B pilot with full confidence.",
    name: "Priya Nair",
    role: "Co-Founder",
    startup: "LogiRoute AI",
    batch: "Cohort 2023",
    domain: "AI & Logistics",
    avatar: "/images/mentors/image7.jpeg",
    fundingRaised: "₹35L Pre-Seed",
  },
];

const CARDS_PER_PAGE = 3;

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);

  const nextPage = useCallback(() => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(nextPage, 8000);
    return () => clearInterval(timer);
  }, [nextPage]);

  const visibleTestimonials = testimonials.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE
  );

  return (
    <section className="relative py-24 bg-white overflow-hidden" id="testimonials">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Eyebrow: —— FOUNDER STORIES —— */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-accent uppercase">
              FOUNDER STORIES
            </span>
            <span className="h-px w-10 bg-accent" />
          </div>

          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight mb-3">
            Straight from the founders.{" "}
            <span className="text-accent">Real impact.</span>
          </h2>

          <p className="text-neutral-500 text-base md:text-lg max-w-xl mx-auto">
            Hear how entrepreneurs turned visionary ideas into funded, scalable ventures at NIET TBI.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Floating Left Arrow (Desktop) */}
          <button
            type="button"
            onClick={prevPage}
            className="hidden xl:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-neutral-700 hover:text-accent hover:border-accent transition-all cursor-pointer"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Floating Right Arrow (Desktop) */}
          <button
            type="button"
            onClick={nextPage}
            className="hidden xl:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-neutral-700 hover:text-accent hover:border-accent transition-all cursor-pointer"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Grid with Page Transition */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
              transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleTestimonials.map((item, idx) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl border border-gray-100 p-7 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(196,30,58,0.12)] hover:border-accent/30 transition-all duration-300 flex flex-col justify-between relative cursor-default"
                >
                  {/* Card Top: Quote icon & Domain Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                        <Quote className="w-5 h-5" />
                      </div>

                      <span className="text-[11px] font-mono font-bold tracking-wider text-accent uppercase bg-red-50 border border-red-100/80 px-3 py-1 rounded-full">
                        {item.batch}
                      </span>
                    </div>

                    {/* 5-Star Indicator */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                      {item.fundingRaised && (
                        <span className="ml-2 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                          {item.fundingRaised}
                        </span>
                      )}
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-neutral-700 text-sm md:text-[15px] leading-relaxed mb-6">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Card Footer: Founder Profile & Tag */}
                  <div>
                    <div className="h-px w-full bg-gray-100 mb-5" />

                    <div className="flex items-center gap-3.5">
                      {/* Avatar */}
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm ring-2 ring-gray-100 group-hover:ring-accent/30 transition-all shrink-0">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="min-w-0 flex-1">
                        <h4 className="font-[family-name:var(--font-display)] font-bold text-neutral-900 text-base leading-tight truncate group-hover:text-accent transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs text-neutral-500 font-medium truncate mt-0.5">
                          {item.role} · <span className="font-semibold text-neutral-700">{item.startup}</span>
                        </p>
                        <p className="text-[11px] text-accent/90 font-mono tracking-tight mt-0.5">
                          {item.domain}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls & Dots */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              type="button"
              onClick={prevPage}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-accent hover:text-accent flex items-center justify-center text-neutral-600 transition-colors cursor-pointer"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setDirection(i > currentPage ? 1 : -1);
                    setCurrentPage(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === currentPage
                      ? "bg-accent w-7"
                      : "bg-gray-200 hover:bg-gray-300 w-2"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextPage}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-accent hover:text-accent flex items-center justify-center text-neutral-600 transition-colors cursor-pointer"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Portfolio Link */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-neutral-900 text-neutral-900 font-semibold text-sm hover:bg-neutral-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
          >
            <span>Explore all 75+ ventures in our portfolio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
