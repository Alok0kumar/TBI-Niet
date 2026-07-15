"use client";

import { motion } from "framer-motion";
import { slideInLeft, slideInRight, viewport } from "@/lib/animations";
import { Building2, Target, Globe, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative section-padding overflow-hidden" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <span className="eyebrow mb-4 inline-block">// ABOUT NIET TBI</span>
            <h2
              className="font-[family-name:var(--font-display)] font-bold text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              Building the next generation of{" "}
              <span className="gradient-text">Indian tech founders.</span>
            </h2>
            <p className="text-text-muted text-base leading-relaxed mb-4">
              NIET TBI is a government-approved incubation center under the
              Ministry of MSME, operating since 2014. We provide the full stack
              of what a startup needs — space, capital, mentorship, networks,
              and community.
            </p>
            <p className="text-text-muted text-base leading-relaxed mb-8">
              Our campus is adjacent to World Trade Centre, Greater Noida,
              sitting at the heart of Delhi-NCR&apos;s innovation corridor. We
              back student startups, regional founders, and growth-stage
              companies looking for their next inflection point.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Building2, label: "18,000 Sq.Ft Campus" },
                { icon: Target, label: "MSME Approved" },
                { icon: Globe, label: "Delhi-NCR Hub" },
                { icon: Zap, label: "Since 2014" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-text-muted"
                >
                  <item.icon className="w-4 h-4 text-accent" />
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Bento Grid */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative grid grid-cols-2 gap-4 h-full min-h-[400px] mt-8 lg:mt-0"
          >
            <div className="col-span-2 glass-strong rounded-3xl p-6 lg:p-8 flex items-center gap-6 overflow-hidden relative group border border-white/5 hover:border-accent/30 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-warm flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(0,194,255,0.3)]">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="relative z-10">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-xl lg:text-2xl mb-1">MSME Approved</h3>
                <p className="text-text-muted text-sm lg:text-base">Official government recognized incubator since 2014</p>
              </div>
            </div>

            <div className="col-span-1 glass rounded-3xl p-6 lg:p-8 flex flex-col justify-between relative group overflow-hidden border border-white/5 hover:border-accent/30 transition-colors duration-500">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-colors duration-500" />
               <Globe className="w-8 h-8 text-accent mb-8 relative z-10" />
               <div className="relative z-10">
                 <div className="font-[family-name:var(--font-display)] font-bold text-white text-xl mb-1">Delhi-NCR</div>
                 <div className="text-text-muted text-sm">Strategic Location</div>
               </div>
            </div>

            <div className="col-span-1 glass rounded-3xl p-6 lg:p-8 flex flex-col justify-between relative group overflow-hidden border border-white/5 hover:border-accent-warm/30 transition-colors duration-500">
               <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-warm/20 rounded-full blur-3xl group-hover:bg-accent-warm/30 transition-colors duration-500" />
               <Building2 className="w-8 h-8 text-accent-warm mb-8 relative z-10" />
               <div className="relative z-10">
                 <div className="font-[family-name:var(--font-display)] font-bold text-white text-xl mb-1">18,000 Sq.Ft</div>
                 <div className="text-text-muted text-sm">Modern Campus</div>
               </div>
            </div>

            {/* Ambient Glow */}
            <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 pointer-events-none -z-10" style={{
              background: "radial-gradient(circle at center, var(--color-accent) 0%, transparent 60%)",
            }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
