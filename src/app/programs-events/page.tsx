"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { Calendar, Users, ArrowRight } from "lucide-react";

const events = [
  { name: "E-Summit 2025", type: "Summit", participants: "1000+", date: "Mar 2025", status: "upcoming", gradient: "from-accent to-accent-warm", desc: "Annual flagship entrepreneurship summit with keynotes, competitions, and networking." },
  { name: "HackNova 3.0", type: "Hackathon", participants: "300+", date: "Feb 2025", status: "upcoming", gradient: "from-accent-warm to-rose-500", desc: "36-hour hackathon for building tech solutions to real-world problems." },
  { name: "Pitch Perfect", type: "Competition", participants: "150+", date: "Jan 2025", status: "upcoming", gradient: "from-purple-500 to-pink-500", desc: "Startup pitch competition with ₹1L prize pool and investor jury." },
  { name: "E-Summit 2024", type: "Summit", participants: "800+", date: "Mar 2024", status: "past", gradient: "from-accent to-accent-warm", desc: "Successful event with 20+ speakers and 50+ startup showcases." },
  { name: "Startup Weekend", type: "Workshop", participants: "200+", date: "Jan 2024", status: "past", gradient: "from-emerald-500 to-teal-500", desc: "54-hour intensive bootcamp from idea to MVP." },
  { name: "National BPC", type: "Competition", participants: "500+", date: "Nov 2023", status: "past", gradient: "from-amber-500 to-orange-500", desc: "National-level business plan competition with 50+ colleges." },
];

export default function ProgramsEventsPage() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const filtered = events.filter((e) => e.status === tab);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary grid-pattern" />
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6 justify-start">
              <span className="w-[3px] h-[18px] bg-accent shadow-[0_0_8px_var(--color-accent)] rounded-full" />
              <span className="text-sm font-mono font-medium tracking-[0.2em] text-accent uppercase pt-px">
                PROGRAMS & EVENTS
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-white leading-[1.1] mb-4" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>
              What&apos;s <span className="gradient-text">happening.</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl">Summits, hackathons, workshops, and competitions — building the ecosystem.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="container-custom">
          {/* Tab Toggle */}
          <div className="flex gap-1 bg-card rounded-xl p-1 w-fit mb-12 border border-border">
            {(["upcoming", "past"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)} className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all capitalize ${tab === t ? "bg-accent text-white" : "text-text-muted hover:text-white"}`}>
                {t}
              </button>
            ))}
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" animate="visible" key={tab}>
            {filtered.map((event) => (
              <motion.div key={event.name} variants={fadeUp} className="group rounded-2xl bg-card border border-border overflow-hidden card-hover">
                <div className={`h-36 bg-gradient-to-br ${event.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-[family-name:var(--font-mono)] bg-black/30 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">{event.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-lg mb-2">{event.name}</h3>
                  <p className="text-text-muted text-sm mb-4 leading-relaxed">{event.desc}</p>
                  <div className="flex items-center gap-4 text-sm text-text-muted">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{event.date}</span>
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4" />{event.participants}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
