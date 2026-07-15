"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ApplyCTA() {
  return (
    <section className="relative py-32 overflow-hidden" id="apply-cta">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />

      {/* Aurora orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-accent-warm/8 blur-[120px] animate-float" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full bg-accent/8 blur-[100px] animate-float-delay" />

      <div className="absolute inset-0 grid-pattern opacity-20" />

      <motion.div
        className="relative container-custom text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <h2
          className="font-[family-name:var(--font-display)] font-bold text-white leading-[1.1] mb-5"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          Ready to build your{" "}
          <span className="gradient-text">startup?</span>
        </h2>

        <p className="text-text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Applications are open for the next cohort. Join 50+ startups
          already incubated at NIET TBI.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/apply"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent/25"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-warm" />
            <span className="absolute inset-0 bg-gradient-to-r from-accent-warm to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative">Apply for Incubation</span>
            <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-xl border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" />
            <span>Talk to Us First</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
