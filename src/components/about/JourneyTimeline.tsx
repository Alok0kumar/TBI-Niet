"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Award,
  Trophy,
  Medal,
  Star,
  Rocket,
  CheckCircle2,
  ChevronRight,
  Sparkles
} from "lucide-react";

export interface MilestoneItem {
  id: string;
  year: string;
  category: string;
  title: string;
  description: string;
  expandedDesc: string;
  keyAchievements: string[];
  icon: React.ComponentType<{ className?: string }>;
  highlightTag?: string;
}

export const MILESTONES_DATA: MilestoneItem[] = [
  {
    id: "2016",
    year: "2016",
    category: "Foundation",
    title: "NIET TBI Foundation",
    description: "NIET TBI Foundation incorporated as a Section 8 company in 2016.",
    expandedDesc:
      "NIET TBI Foundation was officially incorporated as a dedicated Section 8 non-profit company in 2016 to foster a vibrant ecosystem for student and regional entrepreneurship, offering dedicated co-working premises, prototyping lab infrastructure, and administrative mentorship.",
    keyAchievements: [
      "Incorporated as a non-profit Section 8 company",
      "Inauguration of initial incubation workspace and maker lab facilities",
      "Launch of campus innovation cohorts and ideation challenges"
    ],
    icon: Building2,
    highlightTag: "Foundation"
  },
  {
    id: "2019",
    year: "2019",
    category: "Global Recognition",
    title: "International Outreach",
    description: "Received a Certificate of Appreciation for the project to set up a business incubator in Malawi.",
    expandedDesc:
      "Demonstrating international leadership in incubation setup, NIET TBI received distinguished global acclaim and a Certificate of Appreciation for conceptualizing and executing the cross-border project to establish a business incubator in Malawi.",
    keyAchievements: [
      "Certificate of Appreciation for Malawi incubator project",
      "Cross-border startup mentorship and institutional knowledge transfer",
      "Expanded global innovation and academic network"
    ],
    icon: Award,
    highlightTag: "Global"
  },
  {
    id: "2021",
    year: "2021",
    category: "Ecosystem Leadership",
    title: "UDHYOGMITRA Award",
    description: "Honoured with the prestigious UDHYOGMITRA Award in March 2021.",
    expandedDesc:
      "Recognized for outstanding contribution to the entrepreneurial ecosystem in North India, NIET TBI was honoured with the UDHYOGMITRA Award in March 2021 for accelerating MSME growth, startup job creation, and incubation excellence.",
    keyAchievements: [
      "Honoured with the UDHYOGMITRA Award in March 2021",
      "Multi-sector accelerator tracks for technology and manufacturing",
      "Enhanced angel investor network and seed funding pipelines"
    ],
    icon: Trophy,
    highlightTag: "Leadership"
  },
  {
    id: "2024",
    year: "2024",
    category: "Impact & Excellence",
    title: "HEP Award",
    description: "Received the prestigious Higher Education Premier (HEP) Award in September 2024.",
    expandedDesc:
      "NIET TBI was conferred with the HEP Award in September 2024 for sustained institutional impact, driving high-survival startup cohorts, student patent filings, and successful commercial ventures emerging from academia.",
    keyAchievements: [
      "Conferred with HEP Award in September 2024",
      "Crossed 50+ active incubated ventures across key domains",
      "Rapid expansion of student and faculty IP commercialization"
    ],
    icon: Medal,
    highlightTag: "Excellence"
  },
  {
    id: "2025",
    year: "2025",
    category: "Ecosystem Enabler",
    title: "IBSEA Ratna & Enabler Award",
    description: "Recognised with the IBSEA Ratna Award (Sep 2025) and Ecosystem Enabler Award (Nov 2025).",
    expandedDesc:
      "Celebrated across national industry forums, NIET TBI received both the IBSEA Ratna Award and the Ecosystem Enabler Award in 2025 for exceptional contributions to early-stage venture acceleration, deep-tech research testing, and industry partnerships.",
    keyAchievements: [
      "Conferred IBSEA Ratna Award in September 2025",
      "Awarded Ecosystem Enabler Award in November 2025",
      "Bilateral corporate innovation partnerships and scale-up programs"
    ],
    icon: Star,
    highlightTag: "Double Award"
  },
  {
    id: "2026-27",
    year: "2026–27",
    category: "Next Chapter",
    title: "Cohort Acceleration",
    description: "Cohort-1 program — a dedicated 12-week program to help promising ideas become scalable startups.",
    expandedDesc:
      "Pioneering the next frontier in deep-tech, artificial intelligence, robotics, and global venture scaling, NIET TBI is launching intensive structured cohort programs providing dedicated milestone grants, international market entry, and venture capital syndicates.",
    keyAchievements: [
      "Launch of Cohort-1 intensive 12-week venture acceleration program",
      "Strategic focus on AI, IoT hardware, and clean tech innovation",
      "Bilateral bridges for global investment syndication"
    ],
    icon: Rocket,
    highlightTag: "Vision 2027"
  }
];

// Exact SVG node coordinates matching the 6 icons across the wave
const NODE_COORDINATES: Record<string, { x: number; y: number; index: number }> = {
  "2016": { x: 25, y: 28, index: 0 },
  "2019": { x: 195, y: 56, index: 1 },
  "2021": { x: 360, y: 28, index: 2 },
  "2024": { x: 530, y: 56, index: 3 },
  "2025": { x: 700, y: 28, index: 4 },
  "2026": { x: 838, y: 56, index: 5 }
};

export default function JourneyTimeline() {
  const [activeId, setActiveId] = useState<string>(MILESTONES_DATA[0].id);
  const storyDetailsRef = React.useRef<HTMLDivElement>(null);
  const [transitionState, setTransitionState] = useState<{
    fromId: string;
    toId: string;
    key: number;
  } | null>(null);

  const activeMilestone =
    MILESTONES_DATA.find((m) => m.id === activeId) || MILESTONES_DATA[0];

  const handleSelectMilestone = (id: string) => {
    setTransitionState({
      fromId: activeId,
      toId: id,
      key: Date.now()
    });
    setActiveId(id);

    // Smoothly scroll down so the description is placed in the exact center of the screen
    setTimeout(() => {
      storyDetailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 120);
  };

  // Exact wave path segments between consecutive milestone symbols
  // 0: 2016 (25, 28)
  // 1: 2019 (195, 56)
  // 2: 2021 (360, 28)
  // 3: 2024 (530, 56)
  // 4: 2025 (700, 28)
  // 5: 2026 (838, 56)
  const WAVE_SEGMENTS = [
    "M 25 28 C 115 12, 175 56, 195 56",
    " C 250 56, 330 28, 360 28",
    " C 416 28, 495 56, 530 56",
    " C 583 56, 665 28, 700 28",
    " C 750 28, 805 56, 838 56"
  ];

  // Build the exact sub-path from 1st symbol (index 0) to the target symbol
  let arrowSubPath = "";
  if (transitionState) {
    const targetIndex = MILESTONES_DATA.findIndex((m) => m.id === transitionState.toId);
    if (targetIndex > 0) {
      arrowSubPath = WAVE_SEGMENTS[0];
      for (let i = 1; i < targetIndex; i++) {
        arrowSubPath += WAVE_SEGMENTS[i];
      }
    }
  }

  return (
    <section className="py-12 md:py-16 bg-[#FFFFFF] relative overflow-hidden" id="journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="flex items-center justify-center gap-2.5 mb-2">
            <span className="w-[3px] h-[16px] bg-[#D7193F] shadow-[0_0_8px_rgba(215,25,63,0.5)] rounded-full" />
            <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D7193F] uppercase font-mono pt-px">
              Our Journey
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101828] tracking-tight leading-[1.15] mb-3">
            From 2014 to Today.
          </h2>
          <p className="text-[#344054] text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            Key milestones that shaped NIET TBI into Greater Noida&apos;s premier incubation center.
          </p>
        </div>

        {/* Curved Wave Roadmap Section */}
        <div className="relative mb-6 md:mb-8">
          {/* Header controls bar */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#101828] font-mono">
              Journey Roadmap
            </span>
            <span className="text-xs font-mono text-slate-500">
              Click any node to explore
            </span>
          </div>

          {/* Roadmap Container with SVG Wave aligned exactly to the symbol nodes */}
          <div className="relative">
            {/* SVG Wave Line passing directly through alternating up/down symbols with drawing animation */}
            <div className="hidden lg:block absolute left-0 right-0 top-0 h-28 pointer-events-none z-10">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 1000 112"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  <marker
                    id="wave-arrow-point"
                    viewBox="0 0 12 12"
                    refX="9"
                    refY="6"
                    markerWidth="7"
                    markerHeight="7"
                    orient="auto"
                  >
                    <path d="M 1 2 L 11 6 L 1 10 L 3 6 z" fill="#D7193F" />
                  </marker>
                  <marker
                    id="traveling-arrow-head-only"
                    viewBox="0 0 14 14"
                    refX="11"
                    refY="7"
                    markerWidth="9"
                    markerHeight="9"
                    orient="auto"
                  >
                    <path d="M 1 2 L 12 7 L 1 12 L 3 7 z" fill="#D7193F" />
                  </marker>
                </defs>

                {/* Base permanent wave line */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  d="M 25 28 C 115 12, 175 56, 250 56 C 330 56, 345 28, 416 28 C 495 28, 510 56, 583 56 C 665 56, 680 28, 750 28 C 785 28, 805 56, 838 56"
                  stroke="#D7193F"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  markerEnd="url(#wave-arrow-point)"
                />

                {/* Traveling Arrow Tip that follows the exact red line from 1st symbol to target symbol and disappears */}
                <AnimatePresence>
                  {transitionState && arrowSubPath && (
                    <motion.path
                      key={transitionState.key}
                      d={arrowSubPath}
                      fill="none"
                      stroke="transparent"
                      strokeWidth="1"
                      markerEnd="url(#traveling-arrow-head-only)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: [0, 1, 1],
                        opacity: [0, 1, 1, 0]
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.85,
                        times: [0, 0.75, 0.9, 1],
                        ease: "easeInOut"
                      }}
                      onAnimationComplete={() => setTransitionState(null)}
                    />
                  )}
                </AnimatePresence>
              </svg>
            </div>

            {/* 6 Milestone Columns with Staggered Entrance and Up/Down rhythm */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-5 items-start relative z-10">
              {/* Mobile-only vertical red line connecting all symbols (sm:hidden, laptop me nahi) */}
              <div 
                className="block sm:hidden absolute left-[27px] top-6 bottom-16 w-0.5 border-l-2 border-dashed border-[#D7193F] pointer-events-none z-0"
                aria-hidden="true" 
              />

              {MILESTONES_DATA.map((milestone, index) => {
                const isSelected = milestone.id === activeId;
                const IconComponent = milestone.icon;
                const isEven = index % 2 === 1; // 2nd, 4th, 6th items (2019, 2024, 2026-27)

                return (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    whileHover={{ y: isEven ? 24 : -4 }}
                    className={`flex flex-col group cursor-pointer text-left select-none transition-all duration-300 relative z-10 ${isEven ? "lg:mt-7" : "lg:mt-0"
                      }`}
                    onClick={() => handleSelectMilestone(milestone.id)}
                  >
                    {/* Circular Icon Node (Directly on the timeline path, h-14) */}
                    <div className="relative mb-4 flex items-center justify-start h-14 z-10">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectMilestone(milestone.id);
                        }}
                        aria-label={`Select milestone ${milestone.year} - ${milestone.title}`}
                        aria-pressed={isSelected}
                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7193F] ${isSelected
                          ? "bg-[#D7193F] text-white shadow-xl shadow-[#D7193F]/35 scale-110 ring-4 ring-[#D7193F]/30"
                          : "bg-[#D7193F] text-white hover:scale-105 hover:shadow-lg hover:shadow-[#D7193F]/20 shadow-md"
                          }`}
                      >
                        <IconComponent className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
                      </button>
                    </div>

                    {/* Year (Bold Navy) */}
                    <div className="mb-0.5">
                      <span
                        className={`text-2xl font-black tracking-tight transition-colors ${isSelected ? "text-[#D7193F]" : "text-[#101828] group-hover:text-[#D7193F]"
                          }`}
                      >
                        {milestone.year}
                      </span>
                    </div>

                    {/* Category Title (Theme Red and Bigger) */}
                    <div className="mb-3">
                      <span className="text-sm sm:text-base font-bold tracking-wide text-[#D7193F] block leading-snug">
                        {milestone.category}
                      </span>
                    </div>

                    {/* Pure White Background Placeholder (In place of photo, per specification) */}
                    <div
                      className={`w-full aspect-[4/3] rounded-xl border bg-[#FFFFFF] p-3 flex flex-col items-center justify-center text-center mb-3.5 transition-all duration-200 ${isSelected
                        ? "border-[#D7193F] shadow-sm"
                        : "border-slate-200 group-hover:border-[#D7193F]/40"
                        }`}
                    >
                      <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 mb-1.5 bg-white">
                        <span className="text-[10px] font-bold text-slate-400">NIET</span>
                      </div>
                      <span className="text-[10px] font-medium text-slate-400 max-w-[130px] leading-tight">
                        Archival photo placeholder
                      </span>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-xs text-[#344054] leading-relaxed mb-2 font-normal">
                      {milestone.description}
                    </p>

                    {/* Indicator Link */}
                    <div
                      className={`inline-flex items-center gap-1 text-[11px] font-semibold transition-all ${isSelected ? "text-[#D7193F]" : "text-slate-400 group-hover:text-[#D7193F]"
                        }`}
                    >
                      <span>{isSelected ? "Active Story" : "Explore"}</span>
                      <ChevronRight
                        className={`w-3 h-3 transition-transform duration-150 ${isSelected ? "translate-x-0.5 text-[#D7193F]" : "group-hover:translate-x-0.5"
                          }`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Story Section (Clean Institutional View when a node is clicked) */}
        <div ref={storyDetailsRef} className="pt-2 scroll-mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMilestone.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start"
            >
              {/* Left Story Details */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-sm font-bold uppercase tracking-wider text-[#D7193F] font-mono">
                    {activeMilestone.category}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-sm font-medium text-[#344054]">
                    {activeMilestone.year}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101828] mb-4 tracking-tight leading-tight">
                  {activeMilestone.title}
                </h3>

                <p className="text-[#344054] text-base sm:text-lg leading-relaxed mb-6 font-normal">
                  {activeMilestone.expandedDesc}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#101828] mb-3.5 font-mono">
                    Key Highlights &amp; Impact
                  </h4>
                  <ul className="space-y-2.5">
                    {activeMilestone.keyAchievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#344054]">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#D7193F] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side: Guaranteed Blank White Placeholder Box with thin light-grey border */}
              <div className="lg:col-span-5 hidden sm:flex flex-col">
                <div
                  className="w-full aspect-[4/3] rounded-2xl border border-slate-200 bg-[#FFFFFF] p-8 flex flex-col items-center justify-center text-center relative"
                  aria-label="Milestone visual placeholder"
                >
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 mb-3 bg-white">
                    <span className="font-mono text-xs font-bold text-slate-400">NIET</span>
                  </div>
                  <p className="text-xs font-medium text-[#344054] max-w-[220px]">
                    Official archival photograph to be inserted
                  </p>
                  <span className="text-[11px] text-slate-400 mt-1 font-mono">
                    {activeMilestone.category} Archive
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
