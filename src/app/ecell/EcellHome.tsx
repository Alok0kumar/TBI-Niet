"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Link from "next/link";
import {
  ArrowRight, ArrowLeft, Sparkles, Trophy, Mic, Lightbulb,
  Calendar, Users, ExternalLink, Rocket,
} from "lucide-react";

const activities = [
  {
    icon: Trophy,
    title: "Competitions",
    desc: "Business plan contests, startup pitches, hackathons, and case study challenges.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Mic,
    title: "Speaker Series",
    desc: "Industry leaders and alumni sharing real journeys, failures, and insights.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Lightbulb,
    title: "Workshops",
    desc: "Hands-on sessions: pitching, financial modeling, no-code tools, and GTM strategy.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const events = [
  { name: "E-Summit 2024", type: "Flagship", participants: "1000+", date: "Mar 2024", gradient: "from-accent to-blue-600" },
  { name: "Startup Weekend", type: "Hackathon", participants: "200+", date: "Jan 2024", gradient: "from-accent-warm to-rose-500" },
  { name: "National BPC", type: "Competition", participants: "500+", date: "Nov 2023", gradient: "from-purple-500 to-pink-500" },
  { name: "HackNova", type: "Hackathon", participants: "300+", date: "Sep 2023", gradient: "from-emerald-500 to-cyan-500" },
];

const teamMembers = [
  { name: "Arjun Mehta", role: "President", initials: "AM" },
  { name: "Sneha Rao", role: "Vice President", initials: "SR" },
  { name: "Karan Patel", role: "Head of Events", initials: "KP" },
  { name: "Ananya Gupta", role: "Head of Marketing", initials: "AG" },
  { name: "Rohit Sharma", role: "Head of Tech", initials: "RS" },
  { name: "Divya Singh", role: "Head of Operations", initials: "DS" },
];

const speakers = [
  { name: "Naveen Tewari", company: "InMobi", topic: "Scaling a Global Startup" },
  { name: "Falguni Nayar", company: "Nykaa", topic: "Building a D2C Empire" },
  { name: "Kunal Shah", company: "CRED", topic: "Product Thinking & Behavior Design" },
  { name: "Bhavish Aggarwal", company: "Ola", topic: "Disrupting Traditional Industries" },
];

export default function EcellHome() {
  return (
    <>
      {/* Back link */}
      <div className="fixed top-[74px] left-0 right-0 z-30 bg-surface/80 backdrop-blur-lg border-b border-border">
        <div className="container-custom flex items-center justify-between h-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to NIET TBI
          </Link>
          <div className="hidden md:flex items-center gap-4">
            {["Events", "Team", "Join"].map((item) => (
              <Link
                key={item}
                href={`/ecell/${item.toLowerCase()}`}
                className="text-sm text-text-muted hover:text-accent transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary grid-pattern" />
        <div className="aurora-blob aurora-blob--cyan absolute top-[-200px] right-[-100px] animate-float opacity-25" />
        <div className="aurora-blob aurora-blob--orange absolute bottom-[-100px] left-[-100px] animate-float-delay opacity-20" />

        <div className="relative container-custom text-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">NIET E-Cell</span>
          </motion.div>

          <motion.h1
            className="font-[family-name:var(--font-display)] font-bold text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(44px, 6vw, 84px)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          >
            Create. Compete.{" "}
            <span className="gradient-text">Lead.</span>
          </motion.h1>

          <motion.p
            className="text-text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            NIET E-Cell is the student entrepreneurship wing of NIET TBI — a
            500+ member community building the next wave of founders through
            competitions, speaker series, and hands-on workshops.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link
              href="/ecell/join"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-accent/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-warm" />
              <span className="relative">Join the Community</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/ecell/events"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl border border-border hover:border-accent/40 hover:bg-accent/5 transition-all"
            >
              See Our Events
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <AnimatedCounter target={500} suffix="+" label="Members" />
            <AnimatedCounter target={20} suffix="+" label="Events/Year" />
            <AnimatedCounter target={10} suffix="+" label="Competitions" />
            <AnimatedCounter target={5} suffix="" label="Speaker Series" />
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-surface relative">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="relative container-custom">
          <SectionHeading
            eyebrow="// WHAT WE DO"
            title="Three pillars of student entrepreneurship."
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {activities.map((activity) => (
              <motion.div
                key={activity.title}
                variants={fadeUp}
                className="group rounded-2xl bg-card border border-border p-8 card-hover text-center"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${activity.gradient} flex items-center justify-center`}
                >
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-xl mb-3">
                  {activity.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {activity.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Flagship Events */}
      <section className="section-padding relative">
        <div className="container-custom">
          <SectionHeading
            eyebrow="// FLAGSHIP EVENTS"
            title="Where innovation meets competition."
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {events.map((event) => (
              <motion.div
                key={event.name}
                variants={fadeUp}
                className="group rounded-2xl bg-card border border-border overflow-hidden card-hover"
              >
                {/* Gradient banner */}
                <div className={`h-40 bg-gradient-to-br ${event.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  <div className="absolute bottom-4 left-6">
                    <span className="text-xs font-[family-name:var(--font-mono)] bg-black/30 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
                      {event.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-xl mb-3">
                    {event.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      {event.participants}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Speaker Wall */}
      <section className="section-padding bg-surface relative">
        <div className="relative container-custom">
          <SectionHeading
            eyebrow="// SPEAKER WALL"
            title="Learning from the best."
          />

          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
            {speakers.map((speaker) => (
              <div
                key={speaker.name}
                className="flex-shrink-0 w-[280px] rounded-2xl bg-card border border-border p-6 card-hover"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent-warm/20 flex items-center justify-center mb-4 border border-border">
                  <Mic className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-lg mb-1">
                  {speaker.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-2">{speaker.company}</p>
                <p className="text-text-muted text-xs">{speaker.topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding relative">
        <div className="container-custom">
          <SectionHeading
            eyebrow="// THE TEAM"
            title="Student leaders driving E-Cell."
          />

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="group rounded-2xl bg-card border border-border p-5 card-hover text-center"
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-accent to-accent-warm flex items-center justify-center">
                  <span className="text-lg font-bold text-white">{member.initials}</span>
                </div>
                <h4 className="font-[family-name:var(--font-display)] font-semibold text-white text-sm mb-0.5">
                  {member.name}
                </h4>
                <p className="text-accent text-xs">{member.role}</p>
                <button className="mt-3 w-7 h-7 mx-auto rounded-full border border-border hover:border-accent/30 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(0,194,255,0.06) 0%, rgba(255,107,43,0.06) 100%)",
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <motion.div
          className="relative container-custom text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2
            className="font-[family-name:var(--font-display)] font-bold text-white leading-[1.1] mb-5"
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            Be the founder{" "}
            <span className="gradient-text">you imagine.</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-10">
            Join 500+ student entrepreneurs. No experience required — just the
            fire to build something meaningful.
          </p>
          <Link
            href="/ecell/join"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-accent/20"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-warm" />
            <span className="relative">Join E-Cell</span>
            <Rocket className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
