"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "NIET TBI provided the perfect launchpad for our venture. The mentorship from industry experts and access to legal and accounting support saved us months of trial and error.",
    name: "Arjun Mehta",
    startup: "EduTech Innovations",
    batch: "Cohort 2024",
    initials: "AM",
  },
  {
    quote:
      "Being part of NIET TBI opened doors we didn't even know existed. The networking events connected us with investors who believed in our vision and helped us secure our first round of funding.",
    name: "Sneha Kapoor",
    startup: "HealthFirst Diagnostics",
    batch: "Cohort 2023",
    initials: "SK",
  },
  {
    quote:
      "The MSME recognition and infrastructure support from NIET TBI gave our startup instant credibility. It made all the difference when pitching to enterprise clients and partners.",
    name: "Vikram Singh",
    startup: "SmartManufacture",
    batch: "Cohort 2024",
    initials: "VS",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="relative section-padding bg-surface overflow-hidden" id="testimonials">
      <div className="absolute inset-0 dot-pattern opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative container-custom">
        <SectionHeading
          eyebrow="// FOUNDER STORIES"
          title="Straight from the founders."
        />

        <div className="max-w-3xl mx-auto">
          {/* Carousel */}
          <div className="relative min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className="absolute inset-0 flex flex-col items-center text-center"
              >
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-accent" />
                </div>

                {/* Quote text */}
                <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-8 font-light italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-warm flex items-center justify-center">
                    <span className="text-sm font-bold text-white">
                      {testimonials[current].initials}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-[family-name:var(--font-display)] font-semibold text-white">
                      {testimonials[current].name}
                    </div>
                    <div className="text-sm text-text-muted">
                      {testimonials[current].startup} ·{" "}
                      {testimonials[current].batch}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border hover:border-accent/40 hover:bg-accent/5 flex items-center justify-center transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-text-muted" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-accent w-6"
                      : "bg-text-muted/30 hover:bg-text-muted/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border hover:border-accent/40 hover:bg-accent/5 flex items-center justify-center transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-text-muted" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
