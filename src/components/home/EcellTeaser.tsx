"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function EcellTeaser() {
  return (
    <section className="relative py-32 overflow-hidden" id="ecell-teaser">
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Animated gradient orbs */}

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Border */}

      <motion.div
        className="relative container-custom text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-6">
          <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
          <span className="text-xs font-mono font-medium tracking-wider text-white uppercase">E-Cell</span>
        </div>

        <h2
          className="font-[family-name:var(--font-display)] font-bold text-white leading-[1.1] mb-5"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          Student-led.{" "}
          <span className="gradient-text">Innovation-driven.</span>
        </h2>

        <p className="text-text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          NIET E-Cell is our dedicated entrepreneurship cell for students — 
          workshops, competitions, speaker sessions, and a vibrant community 
          fostering the next generation of innovators and entrepreneurs.
        </p>

        <Link
          href="/ecell"
          className="group relative inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent/20"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-warm" />
          <span className="absolute inset-0 bg-gradient-to-r from-accent-warm to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative">Explore E-Cell</span>
          <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
}
