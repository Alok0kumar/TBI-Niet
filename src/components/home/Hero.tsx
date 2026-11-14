"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Users, TrendingUp, Target } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation",
    subtitle: "Creating tomorrow",
  },
  {
    icon: Users,
    title: "Incubation",
    subtitle: "Nurturing ideas",
  },
  {
    icon: TrendingUp,
    title: "Investment",
    subtitle: "Fueling growth",
  },
  {
    icon: Target,
    title: "Impact",
    subtitle: "Building legacy",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col overflow-hidden bg-white mt-[82px]"
      style={{ minHeight: "calc(100vh - 82px)" }}
    >
      {/* =========================================================
          HERO
      ========================================================= */}

      <div className="w-full border-b border-gray-100">
        <div className="w-full">
          <div className="grid min-h-[580px] w-full lg:grid-cols-5">

            {/* =====================================================
                LEFT CONTENT (40% width on desktop)
            ===================================================== */}

            <div className="flex flex-col justify-center px-6 py-12 sm:px-10 md:px-12 lg:px-10 xl:px-14 lg:col-span-2">

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-[2px] w-8 bg-[#C41E3A]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C41E3A]">
                  Building What&apos;s Next
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-[40px] font-black leading-[1.04] tracking-[-0.04em] text-black sm:text-[50px] md:text-[56px] lg:text-[42px] xl:text-[52px]"
              >
                Where Vision 
                <br />

                <span className="text-black">
                  Becomes{" "}
                </span>

                <span className="text-[#C41E3A]">
                  Ventures
                </span>
              </motion.h1>

              {/* Tagline / Subheading */}
              <div className="mt-6 max-w-[480px] text-[15px] leading-relaxed text-gray-600 md:text-[16px]">
                {/* Line 1 – black */}
                <motion.span
                  className="block text-gray-900 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  Igniting Innovation,
                </motion.span>

                {/* Line 2 – red */}
                <motion.span
                  className="block text-[#C41E3A] font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                >
                  Translating Ideas into Reality.
                </motion.span>
              </div>

              {/* Recognition line */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-[15px] md:text-[16px] leading-7 text-gray-800 font-semibold mt-5 mb-3"
              >
                Duly recognized Incubator by Department of IT &amp; Electronics, GoUP, and Ministry of MSME.
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-[15px] md:text-[16px] leading-7 text-gray-600 mb-8"
              >
                NIET Technology Business Incubator Foundation is a Section-8 Company providing 24/7 co-working space, flexible incubation, access to prototype labs, and dedicated handholding support from idea to growth.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="flex flex-wrap gap-4"
              >
                {/* Primary – red pill */}
                <Link
                  href="/apply"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#C41E3A] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#a81630] hover:shadow-lg hover:-translate-y-0.5"
                >
                  Apply for Incubation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {/* Secondary – outlined pill */}
                <Link
                  href="/programs-events"
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-white/80 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white hover:-translate-y-0.5"
                >
                  Explore Programs
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* =====================================================
                RIGHT IMAGE (60% width on desktop)
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative min-h-[400px] overflow-hidden lg:min-h-full lg:col-span-3"
            >
              {/* Existing TBI background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/tbi-bg.webp')",
                }}
              />

              {/* Dark image overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Red visual accent */}
              <div className="absolute -left-24 top-1/2 h-[520px] w-[260px] -translate-y-1/2 rounded-[50%] bg-[#C41E3A]/80 mix-blend-multiply" />

              {/* Bottom information card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute bottom-7 left-7 right-7 max-w-[360px] rounded-[2px] border border-white/30 bg-black/45 p-5 text-white backdrop-blur-sm"
              >
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#C41E3A]">
                  01 / Founder Story
                </p>

                <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.2em] text-white">
                  Turning research and ideas into resilient businesses.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Feature strip pinned to the bottom ── */}
      <div className="relative z-10 w-full border-t border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200"
          >
            {features.map(({ icon: Icon, title, subtitle }) => (
              <div
                key={title}
                className="flex items-center gap-4 px-6 py-6 hover:bg-red-50 transition-colors duration-300"
              >
                {/* Icon – stroke only, no background */}
                <Icon
                  className="h-8 w-8 shrink-0 text-[#C41E3A]"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-sm font-bold text-gray-900">{title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
