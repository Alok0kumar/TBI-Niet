"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { ExternalLink, X, Code, Banknote, Megaphone, Scale, Settings } from "lucide-react";

const domains = ["All", "Tech", "Finance", "Marketing", "Legal", "Operations"];
const domainIcons: Record<string, typeof Code> = { Tech: Code, Finance: Banknote, Marketing: Megaphone, Legal: Scale, Operations: Settings };

const mentors = [
  { name: "Dr. Rajiv Sharma", domain: "Tech", company: "Ex-Google", bio: "15+ years in AI/ML. Former Google Research. Mentored 20+ startups.", initials: "RS" },
  { name: "Anita Desai", domain: "Finance", company: "Goldman Sachs", bio: "Financial modeling expert. Helped startups raise $5M+ collectively.", initials: "AD" },
  { name: "Vikram Joshi", domain: "Marketing", company: "Flipkart", bio: "Growth marketing veteran. Built 0-to-1 for three D2C brands.", initials: "VJ" },
  { name: "Adv. Meera Patel", domain: "Legal", company: "IP & Co.", bio: "Patent attorney specializing in tech IP. 200+ patents filed.", initials: "MP" },
  { name: "Suresh Iyer", domain: "Tech", company: "Microsoft", bio: "Cloud architect. Helps startups scale infrastructure efficiently.", initials: "SI" },
  { name: "Priya Nair", domain: "Operations", company: "OYO", bio: "Operations guru. Streamlined processes for rapid-scaling companies.", initials: "PN" },
  { name: "Amit Kapoor", domain: "Finance", company: "Sequoia", bio: "VC perspective mentor. Guides on fundraising and term sheet negotiation.", initials: "AK" },
  { name: "Neha Singh", domain: "Marketing", company: "Zomato", bio: "Brand strategy expert. Built communities of millions.", initials: "NS" },
  { name: "Raj Malhotra", domain: "Tech", company: "Amazon", bio: "Full-stack engineering lead. Expertise in scalable system design.", initials: "RM" },
];

export default function MentorsPage() {
  const [filter, setFilter] = useState("All");
  const [selectedMentor, setSelectedMentor] = useState<typeof mentors[0] | null>(null);

  const filtered = filter === "All" ? mentors : mentors.filter((m) => m.domain === filter);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary grid-pattern" />
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="eyebrow mb-4 inline-block">// MENTORS</span>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-white leading-[1.1] mb-4" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>
              Learn from <span className="gradient-text">the best.</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl">100+ mentors across tech, finance, marketing, legal, and operations.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {domains.map((d) => (
              <button key={d} onClick={() => setFilter(d)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === d ? "bg-accent text-white" : "bg-card border border-border text-text-muted hover:border-accent/30"}`}>
                {d}
              </button>
            ))}
          </div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" animate="visible" key={filter}>
            {filtered.map((mentor) => (
              <motion.div key={mentor.name} variants={fadeUp} className="group rounded-2xl bg-card border border-border p-6 card-hover cursor-pointer" onClick={() => setSelectedMentor(mentor)}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-accent-warm/20 flex items-center justify-center border border-border">
                    <span className="font-[family-name:var(--font-display)] font-bold text-white">{mentor.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-white">{mentor.name}</h3>
                    <p className="text-accent text-sm">{mentor.company}</p>
                  </div>
                </div>
                <span className="text-xs font-[family-name:var(--font-mono)] text-text-muted bg-surface px-3 py-1 rounded-full border border-border">{mentor.domain}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedMentor && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedMentor(null)} />
            <motion.div className="relative bg-card border border-border rounded-2xl p-8 max-w-md w-full" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ ease: [0.19, 1, 0.22, 1] }}>
              <button onClick={() => setSelectedMentor(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full border border-border hover:border-accent/30 flex items-center justify-center transition-all">
                <X className="w-4 h-4 text-text-muted" />
              </button>
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent-warm flex items-center justify-center mb-5">
                <span className="text-2xl font-bold text-white">{selectedMentor.initials}</span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-2xl mb-1">{selectedMentor.name}</h3>
              <p className="text-accent font-medium mb-1">{selectedMentor.company}</p>
              <span className="text-xs font-[family-name:var(--font-mono)] text-text-muted bg-surface px-3 py-1 rounded-full border border-border">{selectedMentor.domain}</span>
              <p className="text-text-muted text-sm leading-relaxed mt-5 mb-6">{selectedMentor.bio}</p>
              <button className="inline-flex items-center gap-2 text-sm text-accent hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" /> Connect on LinkedIn
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
