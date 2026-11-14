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
      {/* ── Background Image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/tbi-bg.webp')" }}
      />

      {/* ── Left white gradient overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 25%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.1) 50%, transparent 60%)",
        }}
      />

      {/* ── Main content area ── */}
      <div className="relative z-10 flex flex-1 items-center">
        <div className="w-full px-4 md:px-8 lg:px-12 py-16">
          <div className="max-w-[580px]">

            {/* Heading */}
            <div className="mb-6">
              <h1
                className="font-black text-black leading-tight"
                style={{ fontSize: "clamp(40px, 5.5vw, 50px)", lineHeight: 1.2 }}
              >
                {/* Line 1 – black */}
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  Igniting Innovation,
                </motion.span>

                {/* Line 2 – red */}
                <motion.span
                  className="block text-red-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                >
                  Translating Ideas into Reality.
                </motion.span>
              </h1>
            </div>

            {/* Recognition line */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-[15px] md:text-[16px] leading-7 text-gray-800 font-semibold mb-3"
            >
              Duly recognized Incubator by Department of IT & Electronics, GoUP, and Ministry of MSME.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-[15px] md:text-[16px] leading-7 text-gray-600 mb-10"
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
                className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5"
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
                  className="h-8 w-8 shrink-0 text-red-600"
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