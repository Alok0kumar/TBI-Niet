"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Coins,
  Building,
  Users2,
  TrendingUp,
} from "lucide-react";

const perks = [
  {
    icon: Coins,
    title: "Seed Grants & Funding",
    desc: "Up to ₹50L seed support & grant access",
  },
  {
    icon: Building,
    title: "World-Class Labs",
    desc: "Prototyping, IoT, AI labs & co-working",
  },
  {
    icon: Users2,
    title: "1-on-1 CXO Mentorship",
    desc: "Guidance from 40+ seasoned tech leaders",
  },
  {
    icon: TrendingUp,
    title: "Investor Access",
    desc: "Demo Day showcase & VC introductions",
  },
];

const founderAvatars = [
  "/images/mentors/image1.jpeg",
  "/images/mentors/image2.jpeg",
  "/images/mentors/image3.jpeg",
  "/images/mentors/image4.jpeg",
];

export default function ApplyCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden" id="apply-cta">
      <div className="container-custom">
        {/* Main CTA Card Banner */}
        <motion.div
          className="relative rounded-md border border-gray-200/90 bg-gradient-to-b from-gray-50/70 via-white to-gray-50/40 p-8 sm:p-12 md:p-16 shadow-[0_12px_44px_rgba(0,0,0,0.06)] overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-warm to-accent" />

          {/* Header Content */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-accent" />
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-[0.22em] text-accent uppercase">
                
                COHORT 2026 ADMISSIONS OPEN
              </span>
              <span className="h-px w-8 bg-accent" />
            </div>

            {/* Headline */}
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.12] mb-4">
              Ready to build your{" "}
              <span className="text-accent underline decoration-accent/30 underline-offset-8">
                startup?
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Transform your prototype or breakthrough idea into a high-growth venture.
              Get seed capital, dedicated campus labs, and mentorship every step of the way.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-accent hover:bg-[#a81630] text-white text-base font-bold transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Apply for Incubation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 hover:text-neutral-950 text-base font-bold border border-gray-300 hover:border-neutral-800 transition-all duration-300 shadow-sm cursor-pointer group"
              >
                <MessageCircle className="w-5 h-5 text-neutral-500 group-hover:text-accent transition-colors" />
                <span>Talk to our Team</span>
              </Link>
            </div>
          </div>

          {/* 4 Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 border-t border-gray-200/80">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="flex items-start gap-3.5 p-4 rounded-md bg-white border border-gray-100 shadow-xs hover:border-accent/30 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0 text-accent mt-0.5">
                  <perk.icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 leading-snug mb-1">
                    {perk.title}
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Social Proof Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-gray-200/60 text-xs text-neutral-500">
            {/* Avatars Stack */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5 overflow-hidden">
                {founderAvatars.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-xs shrink-0"
                  >
                    <Image src={src} alt="Founder" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <span className="font-semibold text-neutral-800">
                Join 75+ ventures already accelerated at NIET TBI
              </span>
            </div>

            {/* Quick Guarantees */}
            <div className="flex flex-wrap items-center gap-4 text-neutral-600 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                No Application Fee
              </span>
              <span className="hidden sm:inline text-gray-300">•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                14-Day Review Turnaround
              </span>
              <span className="hidden sm:inline text-gray-300">•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                100% Founder IP Ownership
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
