"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function EcellTeaser() {
  return (
    <section className="relative py-32 overflow-hidden" id="ecell-teaser">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,194,255,0.08) 0%, rgba(255,107,43,0.08) 50%, rgba(0,194,255,0.04) 100%)",
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute top-[-100px] left-[20%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] animate-float" />
      <div className="absolute bottom-[-100px] right-[20%] w-[300px] h-[300px] rounded-full bg-accent-warm/10 blur-[100px] animate-float-delay" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-warm/30 to-transparent" />

      <motion.div
        className="relative container-custom text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-6">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">E-Cell</span>
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
          competitions, speaker series, hackathons, and a community of 500+
          members building the next wave of founders.
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
