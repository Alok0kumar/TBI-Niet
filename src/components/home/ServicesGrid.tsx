"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewport } from "@/lib/animations";
import { Users, Globe, Cloud, Scale, Banknote, Compass } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Users,
    title: "Teamzup",
    description: "Build your founding team with campus talent and industry connects",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "hover:border-blue-400/30",
    span: "lg:col-span-2 lg:row-span-2",
    large: true,
  },
  {
    icon: Globe,
    title: "Biznet",
    description: "Industry networks, media exposure, and brand building access",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "hover:border-purple-400/30",
    span: "",
    large: false,
  },
  {
    icon: Cloud,
    title: "Webspace",
    description: "AWS + Azure credits for your cloud infrastructure",
    color: "from-sky-500/20 to-blue-500/20",
    borderColor: "hover:border-sky-400/30",
    span: "",
    large: false,
  },
  {
    icon: Scale,
    title: "Factos",
    description: "IPR filing, legal counsel, and accounting support — all in-house",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "hover:border-emerald-400/30",
    span: "",
    large: false,
  },
  {
    icon: Banknote,
    title: "Mudra",
    description: "Seed capital, angel funding pathways, and government grants access",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "hover:border-amber-400/30",
    span: "",
    large: false,
  },
  {
    icon: Compass,
    title: "Mentoz",
    description: "Technical training, business coaching, and investor pitch prep",
    color: "from-rose-500/20 to-red-500/20",
    borderColor: "hover:border-rose-400/30",
    span: "",
    large: false,
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative section-padding overflow-hidden" id="services">
      <div className="container-custom">
        <SectionHeading
          eyebrow="// SERVICES"
          title="Everything a startup needs, under one roof."
          subtitle="Six pillars of support designed to take you from zero to one — and beyond."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className={`group relative rounded-2xl bg-card border border-border card-hover overflow-hidden ${service.borderColor} ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`relative ${index === 0 ? "p-10" : "p-6"}`}>
                <div
                  className={`${
                    index === 0 ? "w-16 h-16 mb-6" : "w-12 h-12 mb-4"
                  } rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center border border-white/5`}
                >
                  <service.icon
                    className={`${
                      index === 0 ? "w-8 h-8" : "w-6 h-6"
                    } text-white`}
                  />
                </div>
                <h3
                  className={`font-[family-name:var(--font-display)] font-bold text-white mb-2 ${
                    index === 0 ? "text-2xl" : "text-lg"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-text-muted leading-relaxed ${
                    index === 0 ? "text-base" : "text-sm"
                  }`}
                >
                  {service.description}
                </p>

                {index === 0 && (
                  <div className="mt-8 flex flex-wrap gap-2">
                    {["Talent Pool", "Co-Founder Match", "Campus Hiring"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="text-xs text-text-muted bg-surface px-3 py-1.5 rounded-full border border-border"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
