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
            <div className="flex items-center gap-3 mb-6 justify-start">
              <span className="w-[3px] h-[18px] bg-accent shadow-[0_0_8px_var(--color-accent)] rounded-full" />
              <span className="text-sm font-mono font-medium tracking-[0.2em] text-accent uppercase pt-px">
                CONTACT
              </span>
            </div>
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
                { icon: MapPin, label: "Address", value: "19, Knowledge Park II, Greater Noida, UP 201306", href: "https://maps.google.com/?q=Noida+Institute+of+Engineering+and+Technology" },
                { icon: Clock, label: "Hours", value: "Mon — Sat, 9:00 AM — 6:00 PM", href: "#" },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href !== "#" ? "_blank" : undefined} rel={item.href !== "#" ? "noopener noreferrer" : undefined} className="flex items-start gap-4 rounded-2xl bg-card border border-border p-6 card-hover group">
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

            {/* Google Map Embed */}
            <div className="rounded-2xl bg-card border border-border overflow-hidden min-h-[400px] relative shadow-[0_0_30px_rgba(0,0,0,0.3)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.606764379471!2d77.49129571508083!3d28.461298882485598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e021a8f9bf%3A0x6b971a6e9a8f3b7c!2sNoida%20Institute%20of%20Engineering%20and%20Technology%20(NIET)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px] grayscale invert opacity-85 hover:grayscale-0 hover:invert-0 transition-all duration-700"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
