"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"} ${
        align === "center" ? "max-w-3xl mx-auto" : ""
      }`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-6 ${align === "center" ? "justify-center" : "justify-start"}`}>
          {/* Glowing Vertical Line */}
          <span className="w-[3px] h-[18px] bg-accent shadow-[0_0_8px_var(--color-accent)] rounded-full" />
          {/* Text without the old '//' */}
          <span className="text-sm font-mono font-medium tracking-[0.2em] text-accent uppercase pt-px">
            {eyebrow.replace(/\/\/\s*/g, "")}
          </span>
        </div>
      )}
      <h2
        className={`font-[family-name:var(--font-display)] font-bold leading-[1.1] mb-4 ${
          light ? "text-white" : "text-white"
        }`}
        style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
