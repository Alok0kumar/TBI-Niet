"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { Calendar, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";

const events = [
  { name: "E-Summit 2025", type: "Summit", participants: "1000+", date: "Mar 2025", gradient: "from-accent to-blue-600", desc: "Annual flagship event with keynotes, startup expo, and competitions." },
  { name: "HackNova 3.0", type: "Hackathon", participants: "300+", date: "Feb 2025", gradient: "from-accent-warm to-rose-500", desc: "36-hour hackathon building solutions for real-world challenges." },
  { name: "Pitch Perfect", type: "Competition", participants: "150+", date: "Jan 2025", gradient: "from-purple-500 to-pink-500", desc: "Pitch your startup to win ₹1L and investor meetings." },
  { name: "Startup Weekend", type: "Workshop", participants: "200+", date: "Dec 2024", gradient: "from-emerald-500 to-teal-500", desc: "54-hour bootcamp from ideation to MVP." },
  { name: "National BPC", type: "Competition", participants: "500+", date: "Nov 2024", gradient: "from-amber-500 to-orange-500", desc: "National business plan competition with 50+ colleges." },
  { name: "Speaker Series #5", type: "Talk", participants: "100+", date: "Oct 2024", gradient: "from-blue-500 to-indigo-500", desc: "Industry leaders sharing their startup journeys." },
];

export default function EcellEventsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary grid-pattern" />
        <div className="relative container-custom">
          <Link href="/ecell" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to E-Cell
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="eyebrow mb-4 inline-block">// E-CELL EVENTS</span>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-white leading-[1.1] mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
              Our <span className="gradient-text">Events</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
            {events.map((event) => (
              <motion.div key={event.name} variants={fadeUp} className="group rounded-2xl bg-card border border-border overflow-hidden card-hover">
                <div className={`h-36 bg-gradient-to-br ${event.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/10 grid-pattern opacity-20" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-[family-name:var(--font-mono)] bg-black/30 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">{event.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-lg mb-2">{event.name}</h3>
                  <p className="text-text-muted text-sm mb-4">{event.desc}</p>
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
