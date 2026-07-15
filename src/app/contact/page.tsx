"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary grid-pattern" />
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="eyebrow mb-4 inline-block">// CONTACT</span>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-white leading-[1.1] mb-4" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>
              Get in <span className="gradient-text">touch.</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl">Have a question? Want to visit? We&apos;d love to hear from you.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            {/* Info Cards */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "incubation@niet.co.in", href: "mailto:incubation@niet.co.in" },
                { icon: Phone, label: "Phone", value: "+91-8448384615", href: "tel:+918448384615" },
                { icon: MapPin, label: "Address", value: "19, Knowledge Park II, Greater Noida, UP 201306", href: "#" },
                { icon: Clock, label: "Hours", value: "Mon — Sat, 9:00 AM — 6:00 PM", href: "#" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="flex items-start gap-4 rounded-2xl bg-card border border-border p-6 card-hover group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] font-semibold text-white text-lg mb-1">{item.label}</h3>
                    <p className="text-text-muted text-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl bg-card border border-border overflow-hidden min-h-[400px] relative">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-xl mb-2">NIET TBI Campus</h3>
                  <p className="text-text-muted text-sm max-w-xs">19, Knowledge Park II, Greater Noida<br />Adjacent to World Trade Centre</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
