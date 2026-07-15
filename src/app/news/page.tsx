"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { Calendar, ArrowRight } from "lucide-react";

const categories = ["All", "Media Coverage", "Announcements", "Startup Stories"];

const allNews = [
  { category: "Media Coverage", date: "Nov 2024", title: "NIET TBI Expands to Deep-Tech", excerpt: "The incubator announces new partnerships for AI, IoT, and blockchain ventures.", gradient: "from-accent to-blue-600" },
  { category: "Announcements", date: "Oct 2024", title: "₹50 Lakh Seed Fund Round Opens", excerpt: "Applications open for annual seed funding. Student ventures can apply for up to ₹5L.", gradient: "from-accent-warm to-rose-500" },
  { category: "Startup Stories", date: "Sep 2024", title: "Speedo Express Hits 1000+ Deliveries/Day", excerpt: "NIET TBI-incubated logistics platform reaches major milestone.", gradient: "from-emerald-500 to-teal-500" },
  { category: "Media Coverage", date: "Aug 2024", title: "TBI Featured in Economic Times", excerpt: "Greater Noida's innovation hub gets national media spotlight.", gradient: "from-purple-500 to-pink-500" },
  { category: "Announcements", date: "Jul 2024", title: "New Mentor Onboarding: 20+ Experts", excerpt: "Industry veterans from Google, Microsoft, and Goldman Sachs join the mentor network.", gradient: "from-amber-500 to-orange-500" },
  { category: "Startup Stories", date: "Jun 2024", title: "Printables Crosses ₹10L Monthly Revenue", excerpt: "D2C stationery brand scales with E-Cell's marketing support.", gradient: "from-pink-500 to-rose-500" },
];

export default function NewsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? allNews : allNews.filter((n) => n.category === filter);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary grid-pattern" />
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="eyebrow mb-4 inline-block">// NEWS</span>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-white leading-[1.1] mb-4" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>
              From the <span className="gradient-text">ecosystem.</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl">News, announcements, and stories from the NIET TBI community.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === c ? "bg-accent text-white" : "bg-card border border-border text-text-muted hover:border-accent/30"}`}>
                {c}
              </button>
            ))}
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" animate="visible" key={filter}>
            {filtered.map((item) => (
              <motion.article key={item.title} variants={fadeUp} className="group rounded-2xl bg-card border border-border overflow-hidden card-hover">
                <div className="relative h-40">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20`} />
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-[family-name:var(--font-mono)] bg-black/30 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/10">{item.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-text-muted text-xs mb-3"><Calendar className="w-3.5 h-3.5" />{item.date}</div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-lg mb-2 group-hover:text-accent transition-colors leading-snug">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">{item.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
