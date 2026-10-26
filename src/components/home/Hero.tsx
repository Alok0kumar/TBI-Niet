"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    value: "75+",
    label: "Startups incubated",
    accent: false,
  },
  {
    value: "₹18Cr",
    label: "Funding facilitated",
    accent: true,
  },
  {
    value: "320+",
    label: "Jobs created",
    accent: false,
  },
  {
    value: "28",
    label: "IP filings supported",
    accent: false,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mt-[82px] overflow-hidden bg-white"
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
                <span className="h-[2px] w-8 bg-red-600" />

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-600">
                  Building What's Next
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
                  Becomes {" "}
                </span>

                <span className="text-red-600">
                  Ventures
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-6 max-w-[480px] text-[15px] leading-relaxed text-gray-600 md:text-[16px]"
              >
                A founder-first ecosystem at NIET, connecting ambitious
                innovators with expert mentorship, research infrastructure,
                funding opportunities and industry access.
              </motion.p>

              {/* Recognition */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-gray-500"
              >
                <span className="font-medium text-gray-700">
                  Recognized by MSME
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-gray-400 sm:block" />

                <span>Startup ecosystem</span>

                <span className="hidden h-1 w-1 rounded-full bg-gray-400 sm:block" />

                <span>Greater Noida, India</span>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                {/* Primary */}
                <Link
                  href="/apply"
                  className="group inline-flex items-center gap-2 rounded-[4px] bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg"
                >
                  Start your application

                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                {/* Secondary */}
                <Link
                  href="/incubation"
                  className="group inline-flex items-center gap-2 rounded-[4px] bg-[#242424] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-black"
                >
                  Explore the incubator

                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
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
              <div className="absolute -left-24 top-1/2 h-[520px] w-[260px] -translate-y-1/2 rounded-[50%] bg-red-600/80 mix-blend-multiply" />

              {/* Bottom information card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute bottom-7 left-7 right-7 max-w-[360px] rounded-[2px] border border-white/30 bg-black/45 p-5 text-white backdrop-blur-sm"
              >
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-red-500">
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

      {/* =========================================================
          STATS SECTION
      ========================================================= */}

      <div className="w-full bg-[#fafaf8] py-12 md:py-16">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {/* Section heading */}
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">
                  The ecosystem in numbers
                </p>

                <h2 className="max-w-[600px] text-3xl font-black leading-tight tracking-[-0.025em] text-black md:text-4xl">
                  Innovation measured by real-world impact.
                </h2>
              </div>

              <p className="max-w-[360px] text-sm leading-6 text-gray-500">
                From the first sketch to market scale, NIET TBI provides
                founders the structure, network and confidence to move forward.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 overflow-hidden rounded-[12px] border border-gray-200/80 bg-white shadow-sm lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    relative
                    px-6
                    py-8
                    sm:px-8
                    ${index !== 3
                      ? "border-b border-gray-200 lg:border-b-0 lg:border-r"
                      : ""
                    }
                    ${index === 1
                      ? "max-lg:border-r-0 lg:border-r"
                      : ""
                    }
                    ${index === 2
                      ? "max-lg:border-b-0"
                      : ""
                    }
                  `}
                >
                  <p
                    className={`text-3xl font-black tracking-tight md:text-4xl ${stat.accent ? "text-red-600" : "text-black"
                      }`}
                  >
                    {stat.value}
                  </p>

                  <p className="mt-2 text-xs text-gray-500 md:text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}