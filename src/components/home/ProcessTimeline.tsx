"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";
import { FileText, Users, Rocket, Trophy } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Apply",
    description: "Fill the online application form with your startup details",
  },
  {
    icon: Users,
    number: "02",
    title: "Review & Select",
    description: "Meet our board for evaluation within 2 weeks",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Incubate",
    description: "Workspace, capital, and mentorship begins immediately",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Scale & Launch",
    description: "Demo Day, investor network access, and fundraise support",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative section-padding bg-surface overflow-hidden" id="process">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative container-custom">
        <SectionHeading
          eyebrow="// HOW IT WORKS"
          title="From application to launch — in 4 steps."
          subtitle="A streamlined journey designed to get you building faster."
        />

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <motion.div
            className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] origin-left"
            style={{
              background:
                "linear-gradient(90deg, #00C2FF, #FF6B2B)",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ delay: index * 0.15 }}
              >
                {/* Node */}
                <motion.div
                  className="relative w-[120px] h-[120px] mx-auto mb-6"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4 + index * 0.2,
                    duration: 0.5,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                >
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-accent-warm/20 animate-glow-pulse" />
                  {/* Card */}
                  <div className="absolute inset-2 rounded-full bg-card border border-border flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-warm flex items-center justify-center">
                    <span className="text-xs font-bold text-white font-[family-name:var(--font-mono)]">
                      {step.number}
                    </span>
                  </div>
                </motion.div>

                <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
