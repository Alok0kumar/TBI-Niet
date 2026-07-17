"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import {
  ArrowRight, GraduationCap, Building2, TrendingUp, Check,
  Users, Globe, Cloud, Scale, Banknote, Compass,
  Truck, Palette, Lightbulb, ShoppingBag, MapPin, Package,
  ExternalLink,
} from "lucide-react";

const tiers = [
  {
    icon: GraduationCap,
    title: "Student Startups",
    desc: "For NIET students with early-stage ideas. Get mentorship, workspace, and micro-grants to build your MVP.",
    gradient: "from-accent to-accent-warm",
    features: ["Free workspace", "₹50K micro-grant", "Campus talent pool", "Mentorship"],
  },
  {
    icon: Building2,
    title: "Regional Startups",
    desc: "For entrepreneurs in Delhi-NCR with a working prototype. Access full incubation with seed funding.",
    gradient: "from-accent-warm to-rose-500",
    features: ["Dedicated office", "Up to ₹5L seed fund", "Legal & IPR support", "Investor access"],
  },
  {
    icon: TrendingUp,
    title: "Growth Companies",
    desc: "For revenue-generating startups looking to scale. Get growth capital and strategic partnerships.",
    gradient: "from-purple-500 to-pink-500",
    features: ["Premium workspace", "Growth capital", "Industry partnerships", "Market expansion"],
  },
];

const services = [
  { icon: Users, title: "Teamzup", desc: "Build your founding team with campus talent and industry connects." },
  { icon: Globe, title: "Biznet", desc: "Industry networks, media exposure, and brand building access." },
  { icon: Cloud, title: "Webspace", desc: "AWS + Azure credits for cloud infrastructure and deployment." },
  { icon: Scale, title: "Factos", desc: "IPR filing, legal counsel, and accounting support — all in-house." },
  { icon: Banknote, title: "Mudra", desc: "Seed capital, angel funding pathways, and government grants access." },
  { icon: Compass, title: "Mentoz", desc: "Technical training, business coaching, and investor pitch prep." },
];

const eligibility = [
  "Innovative technology or tech-enabled business idea",
  "Committed founding team (1-5 members)",
  "Willingness to work from NIET TBI campus (hybrid available)",
  "Open to feedback and mentorship",
  "No sector restrictions — all domains welcome",
  "Student or external founders can apply",
];

const startups = [
  { name: "Speedo Express", sector: "Logistics", icon: Truck, url: "https://speedoexpress.org", gradient: "from-blue-500 to-cyan-500" },
  { name: "Printables", sector: "E-Commerce", icon: Palette, url: "https://printables.co.in", gradient: "from-pink-500 to-rose-500" },
  { name: "TechNova Labs", sector: "Deep Tech", icon: Lightbulb, url: "#", gradient: "from-violet-500 to-purple-500" },
  { name: "GreenCart", sector: "AgriTech", icon: ShoppingBag, url: "#", gradient: "from-emerald-500 to-green-500" },
  { name: "UrbanNest", sector: "PropTech", icon: MapPin, url: "#", gradient: "from-amber-500 to-orange-500" },
  { name: "PackSwift", sector: "Packaging", icon: Package, url: "#", gradient: "from-teal-500 to-cyan-500" },
];

export default function IncubationContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary grid-pattern" />
        <div className="aurora-blob aurora-blob--cyan absolute top-[-150px] left-[-100px] animate-float opacity-20" />
        <div className="aurora-blob aurora-blob--orange absolute bottom-0 right-[-100px] animate-float-delay opacity-15" />
        <div className="relative container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-6 justify-center">
              <span className="w-[3px] h-[18px] bg-accent shadow-[0_0_8px_var(--color-accent)] rounded-full" />
              <span className="text-sm font-mono font-medium tracking-[0.2em] text-accent uppercase pt-px">
                INCUBATION
              </span>
            </div>
            <h1
              className="font-[family-name:var(--font-display)] font-bold text-white leading-[1.05] mb-5"
              style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
            >
              Apply. Build. <span className="gradient-text">Scale.</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto mb-8">
              Everything a startup needs, under one roof — workspace, capital, mentorship,
              legal support, and a clear path to market.
            </p>
            <Link
              href="/apply"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-accent/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-warm" />
              <span className="relative">Apply Now</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3-Tier Model */}
      <section className="section-padding bg-surface relative">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="relative container-custom">
          <SectionHeading eyebrow="// INCUBATION MODEL" title="Three tiers, one mission." subtitle="We support startups at every stage — from campus ideas to growth-stage companies." />
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
            {tiers.map((tier) => (
              <motion.div key={tier.title} variants={fadeUp} className="group rounded-2xl bg-card border border-border p-8 card-hover">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center mb-6`}>
                  <tier.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-xl mb-3">{tier.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-5">{tier.desc}</p>
                <ul className="space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-text-muted">
                      <Check className="w-4 h-4 text-accent shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding relative">
        <div className="container-custom">
          <SectionHeading eyebrow="// WHAT WE OFFER" title="Full-stack startup support." />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeUp} className="rounded-2xl bg-card border border-border p-6 card-hover">
                <service.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-lg mb-2">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-surface relative">
        <div className="relative container-custom">
          <SectionHeading eyebrow="// ELIGIBILITY" title="Who can apply?" />
          <motion.div className="max-w-2xl mx-auto" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
            {eligibility.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-4 py-4 border-b border-border last:border-0">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-text-muted text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Incubated Startups */}
      <section className="section-padding relative" id="startups">
        <div className="container-custom">
          <SectionHeading eyebrow="// PORTFOLIO" title="Incubated startups." />
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
            {startups.map((s) => (
              <motion.div key={s.name} variants={fadeUp} className="group rounded-2xl bg-card border border-border p-6 card-hover">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center`}>
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-white">{s.name}</h3>
                    <p className="text-xs text-text-muted font-[family-name:var(--font-mono)]">{s.sector}</p>
                  </div>
                </div>
                {s.url !== "#" && (
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-white transition-colors">
                    Visit <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[#030303]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <motion.div className="relative container-custom text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-3xl mb-4">Ready to get incubated?</h2>
          <p className="text-text-muted mb-8">Applications are open. It takes less than 5 minutes.</p>
          <Link href="/apply" className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl overflow-hidden hover:shadow-xl hover:shadow-accent/20 transition-all">
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-warm" />
            <span className="relative">Apply for Incubation</span>
            <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
