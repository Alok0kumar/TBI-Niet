"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Rocket, PartyPopper } from "lucide-react";
import Link from "next/link";

export default function EcellJoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", course: "", year: "", why: "" });

  const updateField = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const inputClass = "w-full px-4 py-3 rounded-xl bg-card border border-border text-white placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all text-sm";
  const labelClass = "block text-sm font-medium text-text-muted mb-2";

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-primary grid-pattern" />
        <motion.div className="relative text-center p-8" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}>
          <motion.div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent to-accent-warm flex items-center justify-center" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }}>
            <PartyPopper className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-3xl text-white mb-4">Welcome to E-Cell!</h1>
          <p className="text-text-muted text-lg max-w-md mx-auto mb-8">Thanks for joining, {form.name || "future founder"}! We&apos;ll add you to our community shortly.</p>
          <Link href="/ecell" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-accent to-accent-warm">Back to E-Cell</Link>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-28 pb-20 relative">
      <div className="absolute inset-0 bg-primary grid-pattern opacity-30" />
      <div className="relative container-custom max-w-lg">
        <Link href="/ecell" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to E-Cell
        </Link>

        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-4">
            <Rocket className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Join E-Cell</span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-white text-3xl mb-2">
            Be the founder <span className="gradient-text">you imagine.</span>
          </h1>
          <p className="text-text-muted text-sm">Takes less than a minute. No experience required.</p>
        </motion.div>

        <motion.div className="rounded-2xl bg-card/50 border border-border p-8 backdrop-blur-sm" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="space-y-5">
            <div>
              <label className={labelClass}>Full Name *</label>
              <input type="text" className={inputClass} placeholder="Your name" value={form.name} onChange={(e) => updateField("name", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>Course / Department *</label>
              <input type="text" className={inputClass} placeholder="e.g., B.Tech CSE" value={form.course} onChange={(e) => updateField("course", e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>Year *</label>
              <div className="flex gap-2">
                {["1st", "2nd", "3rd", "4th"].map((y) => (
                  <button key={y} type="button" onClick={() => updateField("year", y)} className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${form.year === y ? "bg-accent text-white" : "bg-surface border border-border text-text-muted hover:border-accent/30"}`}>
                    {y}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className={labelClass}>Why do you want to join E-Cell?</label>
              <textarea className={`${inputClass} min-h-[80px] resize-none`} placeholder="Tell us what excites you about entrepreneurship..." value={form.why} onChange={(e) => updateField("why", e.target.value)} />
            </div>
            <button onClick={() => setSubmitted(true)} className="w-full group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/20">
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-warm" />
              <span className="relative">Join E-Cell</span>
              <Rocket className="relative w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
