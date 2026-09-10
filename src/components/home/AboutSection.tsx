"use client";

import { motion } from "framer-motion";
import { slideInLeft, slideInRight, viewport } from "@/lib/animations";
import { Building2, Target, Globe, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative section-padding overflow-hidden" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Partners Board */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="w-full max-w-[520px] lg:max-w-none mx-auto"
          >
            <div className="bg-[#F6F6F6] rounded-none p-8 md:p-12 lg:p-14 border border-gray-200/60 shadow-[0_15px_40px_rgba(0,0,0,0.08)] flex flex-col gap-10">
              
              {/* Section 1: Fueling The Revolution of Startupindia */}
              <div>
                <h4 className="text-center font-bold text-gray-900 text-base md:text-lg uppercase tracking-wider mb-6">
                  Fueling The Revolution of Startupindia
                </h4>
                <div className="grid grid-cols-2 gap-5">
                  {/* Startup India */}
                  <div className="bg-white rounded-none p-6 flex items-center justify-center shadow-sm border border-gray-100 min-h-[110px] hover:shadow-md transition-all duration-300">
                    <img src="/startup india.webp" alt="Startup India" className="h-12 object-contain" />
                  </div>

                  {/* MSME */}
                  <div className="bg-white rounded-none p-6 flex items-center justify-center shadow-sm border border-gray-100 min-h-[110px] hover:shadow-md transition-all duration-300">
                    <img src="/msme.webp" alt="MSME" className="h-14 object-contain" />
                  </div>

                  {/* Wadhwani Foundation */}
                  <div className="bg-white rounded-none p-6 flex items-center justify-center shadow-sm border border-gray-100 min-h-[110px] hover:shadow-md transition-all duration-300">
                    <img src="/wadhwni.webp" alt="Wadhwani Foundation" className="h-14 object-contain" />
                  </div>

                  {/* Seed Spark */}
                  <div className="bg-white rounded-none p-6 flex items-center justify-center shadow-sm border border-gray-100 min-h-[110px] hover:shadow-md transition-all duration-300">
                    <img src="/seedpark.webp" alt="Seed Spark" className="h-14 object-contain" />
                  </div>
                </div>
              </div>

              {/* Section 2: Technology/Cloud Partner */}
              <div>
                <h4 className="text-center font-bold text-gray-900 text-base md:text-lg uppercase tracking-wider mb-6">
                  Technology/Cloud Partner
                </h4>
                <div className="grid grid-cols-2 gap-5">
                  {/* Microsoft */}
                  <div className="bg-white rounded-none p-6 flex items-center justify-center shadow-sm border border-gray-100 min-h-[110px] hover:shadow-md transition-all duration-300">
                    <img src="/microsoft.webp" alt="Microsoft" className="h-12 object-contain" />
                  </div>

                  {/* AWS */}
                  <div className="bg-white rounded-none p-6 flex items-center justify-center shadow-sm border border-gray-150 min-h-[110px] hover:shadow-md transition-all duration-300">
                    <img src="/aws.webp" alt="AWS" className="h-12 object-contain" />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="flex items-center gap-3 mb-6 justify-start">
              <span className="w-[3px] h-[20px] bg-accent shadow-[0_0_8px_var(--color-accent)] rounded-full" />
              <span className="text-sm font-mono font-medium tracking-[0.2em] text-accent uppercase pt-px">
                ABOUT NIET TBI
              </span>
            </div>
            <h2
              className="font-[family-name:var(--font-display)] font-bold text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              Building the next generation of{" "}
              <span className="gradient-text">Indian tech founders.</span>
            </h2>
            <p className="text-text-muted text-base leading-relaxed mb-4">
              Established under the aegis of Noida Institute of Engineering & Technology 
              and recognized by the Ministry of MSME, NIET TBI has been nurturing 
              entrepreneurial talent since inception. We provide comprehensive support 
              including workspace, seed capital, legal counsel, mentorship, cloud credits, 
              and networking opportunities — everything a startup needs to scale.
            </p>
            <p className="text-text-muted text-base leading-relaxed mb-8">
              Located in Greater Noida, one of India&apos;s fastest-growing industrial hubs 
              in the National Capital Region, our incubation center serves as a launchpad 
              for student innovators, regional entrepreneurs, and growth-stage ventures 
              across sectors including technology, manufacturing, and services.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Building2, label: "Modern Workspace" },
                { icon: Target, label: "MSME Recognized" },
                { icon: Globe, label: "NCR Innovation Hub" },
                { icon: Zap, label: "Seed to Scale Support" },
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
        </div>
      </div>
    </section>
  );
}
