"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FileText, Users, Rocket, Trophy } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Apply",
    description:
      "Fill the online application form with your startup idea, team details, and business plan.",
  },
  {
    icon: Users,
    number: "02",
    title: "Review & Select",
    description:
      "Our expert panel evaluates your application and invites you for a pitch within 2 weeks.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Incubate",
    description:
      "Get workspace, seed capital, dedicated mentorship, and access to our full resource stack.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Scale & Launch",
    description:
      "Demo Day spotlight, investor introductions, and ongoing fundraise and growth support.",
  },
];

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-primary overflow-hidden"
      id="process"
    >
      {/* Section top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="w-[3px] h-[18px] bg-accent shadow-[0_0_8px_var(--color-accent)] rounded-full" />
            <span className="text-sm font-mono font-medium tracking-[0.2em] text-accent uppercase pt-px">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            From Application to Launch
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            A streamlined 4-step journey designed to get you building faster.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting line (Desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[12%] right-[12%] h-px bg-white/5">
            <motion.div
              className="h-full bg-accent/40 origin-left"
              style={{ width: lineWidth }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative group text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: [0.19, 1, 0.22, 1],
                }}
              >
                {/* Icon Node */}
                <div className="relative w-[104px] h-[104px] mx-auto mb-6">
                  {/* Outer ring glow on hover */}
                  <div className="absolute inset-0 rounded-full bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />

                  {/* Main circle */}
                  <div className="absolute inset-[3px] rounded-full bg-[#0A0A0A] border border-white/10 group-hover:border-accent/40 flex items-center justify-center transition-colors duration-300">
                    <step.icon className="w-7 h-7 text-white/60 group-hover:text-accent transition-colors duration-300" />
                  </div>

                  {/* Number badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-[11px] font-bold text-white font-mono">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-white text-lg mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed max-w-[220px] mx-auto">
                  {step.description}
                </p>

                {/* Mobile connector line (between steps) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-px h-10 bg-white/10 mx-auto mt-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Section bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
