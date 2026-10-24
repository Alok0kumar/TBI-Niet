"use client";

import { motion } from "framer-motion";
import type { EventVisual } from "@/data/events";

interface Props {
  visual?: EventVisual;
  gradient: string;
  name: string;
}

/**
 * Renders the right-hand "photo" panel of a featured event card.
 * Everything here is CSS/SVG — no external image requests — so it can
 * never fail to load, never shows a broken-image icon, and stays on-brand.
 * Unrecognized `visual` values fall through to a safe gradient tile.
 */
export default function FeaturedEventVisual({ visual, gradient, name }: Props) {
  switch (visual) {
    case "poster":
      return <PosterVisual />;
    case "crowd":
      return <CrowdVisual />;
    case "panel":
      return <PanelVisual />;
    default:
      return <FallbackVisual gradient={gradient} name={name} />;
  }
}

/* ── Poster: bold type + trend-arrow graphic, echoing a summit poster ── */
function PosterVisual() {
  return (
    <div className="relative w-full h-full bg-[#0d0c11] overflow-hidden">
      <div className="absolute inset-0 opacity-90 bg-gradient-to-br from-[#1a1720] via-[#0d0c11] to-black" />
      <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-[#C41E3A]/25 blur-2xl" />
      <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4">
        <p
          className="text-[10px] sm:text-xs font-black uppercase tracking-tight text-white leading-[1.05]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          NIET
          <br />
          <span className="text-[#E53850]">INNOVATION</span>
          <br />
          SUMMIT
        </p>
        <motion.svg
          viewBox="0 0 100 50"
          className="w-full h-10 sm:h-14"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <motion.polyline
            points="2,42 22,30 40,36 60,14 78,20 98,4"
            fill="none"
            stroke="#E53850"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon points="90,2 98,4 96,12" fill="#E53850" />
        </motion.svg>
        <p
          className="text-[7px] text-white/40 uppercase tracking-[0.15em]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          #NIETInnovation
        </p>
      </div>
    </div>
  );
}

/* ── Crowd: implied packed venue via layered silhouettes + stage beams ── */
function CrowdVisual() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* stage light beams */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.28), transparent 70%)",
          clipPath: "polygon(46% 0%, 54% 0%, 100% 100%, 0% 100%)",
        }}
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 left-1/4 w-1/3 h-full"
        style={{
          background: "linear-gradient(180deg, rgba(196,30,58,0.4), transparent 70%)",
          clipPath: "polygon(46% 0%, 54% 0%, 100% 100%, 0% 100%)",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      {/* crowd silhouette (rows of small dark heads/shoulders) */}
      <div className="absolute inset-x-0 bottom-0 h-2/3">
        {Array.from({ length: 4 }).map((_, row) => (
          <div
            key={row}
            className="absolute inset-x-0 flex justify-between px-1"
            style={{ bottom: `${row * 15}%`, opacity: 0.9 - row * 0.12 }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="block rounded-t-full bg-black"
                style={{
                  width: `${6 - row * 0.5}%`,
                  height: `${14 + ((i + row) % 3) * 4}px`,
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
    </div>
  );
}

/* ── Panel: forum / discussion stage suggested via desk + silhouettes ── */
function PanelVisual() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_45%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-slate-950/80 rounded-t-[40%_100%]" />
      <div className="absolute inset-x-[8%] bottom-[8%] h-3 rounded-full bg-black/50 blur-sm" />
      <div className="absolute bottom-[10%] inset-x-0 flex justify-center gap-3 sm:gap-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white/70" />
            <span className="w-6 h-7 sm:w-7 sm:h-8 rounded-t-full bg-white/50" />
          </div>
        ))}
      </div>
      <div className="absolute top-2 right-2 text-[7px] text-white/40 uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
        Live Forum
      </div>
    </div>
  );
}

/* ── Fallback: brand-gradient tile with a soft grid, always safe ── */
function FallbackVisual({ gradient, name }: { gradient: string; name: string }) {
  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${gradient}`}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 flex items-end p-3">
        <span className="text-[10px] font-semibold text-white/80 uppercase tracking-wide line-clamp-1">
          {name}
        </span>
      </div>
    </div>
  );
}
