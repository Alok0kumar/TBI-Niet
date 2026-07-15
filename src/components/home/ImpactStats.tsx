"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { target: 10, suffix: "+", label: "Years" },
  { target: 50, suffix: "+", label: "Startups" },
  { target: 100, suffix: "+", label: "Mentors" },
  { target: 100, prefix: "₹", suffix: "L", label: "Seed Fund" },
  { target: 18, suffix: "K", label: "Sq. Ft." },
];

export default function ImpactStats() {
  return (
    <section className="relative py-20 overflow-hidden" id="impact">
      {/* Background */}
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Top and bottom gradient borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <motion.div
        className="relative container-custom"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <AnimatedCounter
                target={stat.target}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
