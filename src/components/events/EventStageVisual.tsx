"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * A fully self-contained (no external photo dependency) recreation of the
 * "stage" visual from the reference design: warm ceiling lighting, sweeping
 * red/blue spotlight beams, and the E-Cell rocket mark front and center.
 *
 * Built entirely from CSS gradients + the existing /ecell-rocket-logo.png
 * asset so it never 404s, never depends on a third-party image host, and
 * scales/animates smoothly.
 */
export default function EventStageVisual() {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[28px] bg-[#0b0b10] select-none">
      {/* Warm ceiling glow (top) */}
      <div
        className="absolute inset-x-0 top-0 h-1/2"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255, 196, 120, 0.55), transparent 70%)",
        }}
      />

      {/* Base dark gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #17141a 0%, #0d0c11 45%, #0a0a0d 100%)",
        }}
      />

      {/* Ceiling grid / truss texture */}
      <div
        className="absolute inset-x-0 top-0 h-28 md:h-36 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,210,150,0.18) 0px, rgba(255,210,150,0.18) 2px, transparent 2px, transparent 26px)",
        }}
      />

      {/* Animated spotlight beams */}
      <motion.div
        className="absolute -top-10 left-[8%] w-[45%] h-[140%] origin-top"
        style={{
          background:
            "linear-gradient(180deg, rgba(196,30,58,0.35), transparent 75%)",
          clipPath: "polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)",
        }}
        initial={{ opacity: 0, rotate: -8 }}
        animate={{ opacity: [0.4, 0.7, 0.4], rotate: [-8, -4, -8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-10 left-[38%] w-[40%] h-[140%] origin-top"
        style={{
          background:
            "linear-gradient(180deg, rgba(80,140,255,0.28), transparent 75%)",
          clipPath: "polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)",
        }}
        initial={{ opacity: 0, rotate: 4 }}
        animate={{ opacity: [0.3, 0.6, 0.3], rotate: [4, 9, 4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      <motion.div
        className="absolute -top-10 right-[6%] w-[40%] h-[140%] origin-top"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.22), transparent 75%)",
          clipPath: "polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)",
        }}
        initial={{ opacity: 0, rotate: -6 }}
        animate={{ opacity: [0.25, 0.5, 0.25], rotate: [-6, -2, -6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
      />

      {/* Point-light fixtures along the truss */}
      <div className="absolute top-4 left-0 right-0 flex justify-between px-[6%] opacity-90">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-amber-200/80"
            style={{ boxShadow: "0 0 8px 2px rgba(255,210,150,0.6)" }}
          />
        ))}
      </div>

      {/* Side accent panels (mirrors the reference's red side banners) */}
      <div className="absolute left-0 top-0 bottom-0 w-[10%] bg-gradient-to-br from-[#C41E3A]/90 to-[#8a1027]/90 hidden sm:block" />
      <div className="absolute right-0 top-0 bottom-0 w-[10%] bg-gradient-to-bl from-[#C41E3A]/70 to-[#0d0c11] hidden sm:block" />

      {/* Central banner card */}
      <div className="absolute inset-x-[8%] sm:inset-x-[14%] top-[16%] bottom-[10%] rounded-2xl bg-white/95 backdrop-blur-sm shadow-2xl flex items-center overflow-hidden">
        {/* subtle diagonal red sweep inside the card */}
        <div
          className="absolute -left-10 -top-10 w-40 h-40 rounded-full opacity-60"
          style={{ background: "radial-gradient(circle, rgba(196,30,58,0.25), transparent 70%)" }}
        />
        <div
          className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full opacity-60"
          style={{ background: "radial-gradient(circle, rgba(196,30,58,0.2), transparent 70%)" }}
        />

        {/* Left copy list */}
        <div className="hidden md:flex flex-col justify-center gap-1.5 pl-6 lg:pl-8 pr-2 shrink-0 w-[26%]">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-800 leading-tight"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Ideas
            <br />
            People
            <br />
            Impact
          </p>
          <span className="w-6 h-[3px] bg-[#C41E3A] rounded-full my-2" />
          <ul
            className="text-[9px] leading-[1.7] text-gray-500 font-medium uppercase tracking-wide"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <li>Workshops</li>
            <li>Speaker Sessions</li>
            <li>Startup Support</li>
            <li>Networking</li>
            <li>Student Growth</li>
          </ul>
        </div>

        {/* Center rocket mark */}
        <div className="flex-1 flex flex-col items-center justify-center px-2 shrink-0">
          <motion.div
            className="relative w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/ecell-rocket-logo.png"
              alt="E-Cell NIET"
              fill
              sizes="120px"
              className="object-contain drop-shadow-sm"
              priority
            />
          </motion.div>
          <p
            className="mt-2 text-[11px] sm:text-sm font-black tracking-tight text-gray-900 text-center leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            E-CELL
          </p>
          <span className="mt-1 w-8 h-px bg-gray-300" />
          <p
            className="mt-1 text-[7px] sm:text-[9px] tracking-[0.3em] text-gray-400 uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            NIET
          </p>
        </div>

        {/* Right copy block */}
        <div className="hidden sm:flex flex-col justify-center pr-6 lg:pr-8 pl-2 w-[34%] shrink-0">
          <p
            className="text-[11px] sm:text-sm lg:text-base font-extrabold text-gray-900 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Building
            <br />
            Student Ideas
            <br />
            For <span className="text-[#C41E3A]">A Brighter</span>
            <br />
            <span className="text-[#C41E3A]">Tomorrow</span>
          </p>
        </div>
      </div>

      {/* Corner micro-labels, matching the reference's fine print */}
      <div
        className="absolute top-[13%] right-[6%] hidden lg:block text-right text-[7px] leading-tight text-white/50 uppercase tracking-wide"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Students For A
        <br />
        Bigger Tomorrow
      </div>
      <div
        className="absolute bottom-[7%] right-[6%] hidden lg:block text-right text-[7px] leading-tight text-white/40 uppercase tracking-wide"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Student
        <br />
        Driven Ideas
      </div>

      {/* Floor reflection / vignette for depth */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/4"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.55))",
        }}
      />
      <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.35)] rounded-[28px]" />
    </div>
  );
}
