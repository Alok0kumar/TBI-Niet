"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

const team = [
  { name: "Arjun Mehta", role: "President", dept: "CSE, 4th Year", initials: "AM" },
  { name: "Sneha Rao", role: "Vice President", dept: "ECE, 3rd Year", initials: "SR" },
  { name: "Karan Patel", role: "Head of Events", dept: "IT, 3rd Year", initials: "KP" },
  { name: "Ananya Gupta", role: "Head of Marketing", dept: "MBA, 2nd Year", initials: "AG" },
  { name: "Rohit Sharma", role: "Head of Tech", dept: "CSE, 4th Year", initials: "RS" },
  { name: "Divya Singh", role: "Head of Operations", dept: "ECE, 3rd Year", initials: "DS" },
  { name: "Manish Kumar", role: "Design Lead", dept: "CSE, 3rd Year", initials: "MK" },
  { name: "Pooja Yadav", role: "Content Lead", dept: "MBA, 1st Year", initials: "PY" },
  { name: "Sahil Jain", role: "Finance Lead", dept: "BBA, 3rd Year", initials: "SJ" },
];

export default function EcellTeamPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary grid-pattern" />
        <div className="relative container-custom">
          <Link href="/ecell" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to E-Cell
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="eyebrow mb-4 inline-block">// THE TEAM</span>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-white leading-[1.1] mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
              Meet the <span className="gradient-text">team.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
            {team.map((member) => (
              <motion.div key={member.name} variants={fadeUp} className="group rounded-2xl bg-card border border-border p-6 card-hover text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-accent-warm flex items-center justify-center">
                  <span className="text-xl font-bold text-white">{member.initials}</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-lg mb-0.5">{member.name}</h3>
                <p className="text-accent text-sm font-medium mb-1">{member.role}</p>
                <p className="text-text-muted text-xs mb-4">{member.dept}</p>
                <button className="w-8 h-8 mx-auto rounded-full border border-border hover:border-accent/30 hover:bg-accent/5 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                  <ExternalLink className="w-4 h-4 text-text-muted" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
