"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, slideInLeft, slideInRight, viewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { Building2, Target, Eye, Award, MapPin, Calendar, ExternalLink, Users, Zap, Shield, TrendingUp, GraduationCap } from "lucide-react";

const milestones = [
  { year: "2014", title: "Founded", desc: "NIET TBI established as a technology incubation center" },
  { year: "2016", title: "MSME Approval", desc: "Received official approval from the Ministry of MSME" },
  { year: "2018", title: "50+ Startups", desc: "Crossed 50 incubated startups milestone" },
  { year: "2020", title: "Digital Pivot", desc: "Launched virtual incubation during the pandemic" },
  { year: "2022", title: "E-Cell Launch", desc: "Established dedicated E-Cell for student entrepreneurship" },
  { year: "2024", title: "Deep-Tech Focus", desc: "Expanded to AI, IoT, and blockchain ventures" },
];

const boardMembers = [
  { name: "Dr. Neema Khanna", role: "Chairperson", org: "NIET Group", initials: "NK" },
  { name: "Prof. Rajesh Kumar", role: "Director", org: "NIET TBI", initials: "RK" },
  { name: "Mr. Vikram Singh", role: "Industry Advisor", org: "TiE Delhi-NCR", initials: "VS" },
  { name: "Dr. Sanjay Gupta", role: "Academic Head", org: "NIET", initials: "SG" },
  { name: "Ms. Priya Mehta", role: "Startup Mentor", org: "Wadhwani Foundation", initials: "PM" },
  { name: "Mr. Anil Verma", role: "Finance Advisor", org: "Angel Network", initials: "AV" },
];

const whyChooseUs = [
  { icon: MapPin, title: "Prime Location", desc: "Adjacent to World Trade Centre, Greater Noida — heart of Delhi-NCR" },
  { icon: Building2, title: "18,000 Sq.Ft", desc: "Dedicated workspace with meeting rooms, labs, and event spaces" },
  { icon: Shield, title: "MSME Approved", desc: "Government-backed credibility for grants and partnerships" },
  { icon: TrendingUp, title: "₹100L+ Fund", desc: "Seed capital access with angel investor network connections" },
  { icon: Users, title: "100+ Mentors", desc: "Industry veterans across tech, finance, marketing, and legal" },
  { icon: GraduationCap, title: "Student Pipeline", desc: "Direct access to NIET's talent pool for hiring and co-founding" },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary grid-pattern" />
        <div className="aurora-blob aurora-blob--cyan absolute top-0 right-0 opacity-20 animate-float" />

        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow mb-4 inline-block">// ABOUT</span>
            <h1
              className="font-[family-name:var(--font-display)] font-bold text-white leading-[1.1] mb-4"
              style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
            >
              About <span className="gradient-text">NIET TBI</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl">
              A decade of transforming ideas into industries. Here&apos;s our story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="section-padding bg-surface relative">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="relative container-custom">
          <SectionHeading
            eyebrow="// OUR JOURNEY"
            title="From 2014 to today."
            subtitle="Key milestones that shaped NIET TBI into Greater Noida's premier incubation center."
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent-warm to-accent" />

            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ delay: i * 0.1 }}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-primary z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="font-[family-name:var(--font-mono)] text-accent text-sm font-bold">
                    {milestone.year}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-xl mt-1 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-text-muted text-sm">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding relative">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div
              variants={slideInLeft}
              className="rounded-2xl bg-card border border-border p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-2xl mb-4">
                Our Vision
              </h3>
              <p className="text-text-muted leading-relaxed">
                To be the catalyst that transforms Greater Noida into a
                thriving startup ecosystem — creating job creators, not just
                job seekers — and building a pipeline of innovation from
                campus to market.
              </p>
            </motion.div>

            <motion.div
              variants={slideInRight}
              className="rounded-2xl bg-card border border-border p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-warm/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent-warm" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-2xl mb-4">
                Our Mission
              </h3>
              <p className="text-text-muted leading-relaxed">
                To provide world-class incubation infrastructure — workspace,
                capital, mentorship, legal support, and market access — to
                early-stage startups, with a special focus on student-led
                ventures and regional innovators.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-surface relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative container-custom">
          <SectionHeading
            eyebrow="// WHY NIET TBI"
            title="What sets us apart."
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {whyChooseUs.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl bg-card border border-border p-6 card-hover"
              >
                <item.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Board Members */}
      <section className="section-padding relative">
        <div className="container-custom">
          <SectionHeading
            eyebrow="// LEADERSHIP"
            title="Board Members"
            subtitle="The team guiding NIET TBI's strategy and growth."
          />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {boardMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="group rounded-2xl bg-card border border-border p-6 card-hover text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-accent-warm/20 flex items-center justify-center border border-border">
                  <span className="font-[family-name:var(--font-display)] font-bold text-xl text-white">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-text-muted text-xs">{member.org}</p>
                <button className="mt-4 w-8 h-8 mx-auto rounded-full border border-border hover:border-accent/30 hover:bg-accent/5 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
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
