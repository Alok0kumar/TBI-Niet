"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, slideInLeft, slideInRight, viewport } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { Building2, Target, Eye, Award, MapPin, Calendar, ExternalLink, Users, Zap, Shield, TrendingUp, GraduationCap } from "lucide-react";
import JourneyTimeline from "@/components/about/JourneyTimeline";

const boardMembers = [
  { 
    name: "Prof. S.K. Sharma", 
    role: "Director", 
    org: "NIET", 
    initials: "SS",
    about: "Leading NIET with 20+ years of academic excellence. Expert in fostering innovation and entrepreneurship in higher education."
  },
  { 
    name: "Dr. Rajesh Kumar", 
    role: "TBI Coordinator", 
    org: "NIET TBI", 
    initials: "RK",
    about: "Driving startup incubation programs with focus on technology ventures. Mentor to 30+ successful startups."
  },
  { 
    name: "Mr. Anil Gupta", 
    role: "Industry Mentor", 
    org: "Entrepreneur", 
    initials: "AG",
    about: "Serial entrepreneur with exits in SaaS and EdTech. Guides startups on product-market fit and scaling strategies."
  },
  { 
    name: "Dr. Meenakshi Verma", 
    role: "Faculty Advisor", 
    org: "NIET", 
    initials: "MV",
    about: "Computer Science professor specializing in AI/ML. Bridges academic research with industry applications."
  },
  { 
    name: "Mr. Suresh Patel", 
    role: "Business Advisor", 
    org: "Consultant", 
    initials: "SP",
    about: "Business strategy consultant with expertise in go-to-market planning and fundraising for early-stage ventures."
  },
  { 
    name: "Ms. Kavita Singh", 
    role: "Operations Head", 
    org: "NIET TBI", 
    initials: "KS",
    about: "Managing day-to-day incubation operations. Ensures smooth infrastructure access and program delivery."
  },
];

const whyChooseUs = [
  { icon: MapPin, title: "Strategic Location", desc: "Located in Greater Noida, an emerging industrial hub in Delhi-NCR with excellent connectivity" },
  { icon: Building2, title: "Modern Infrastructure", desc: "Dedicated incubation space with workstations, meeting rooms, and collaborative areas" },
  { icon: Shield, title: "MSME Recognition", desc: "Government-backed credibility for accessing grants, subsidies, and partnerships" },
  { icon: TrendingUp, title: "Funding Support", desc: "Seed capital assistance and connections to angel investors and funding networks" },
  { icon: Users, title: "Expert Mentors", desc: "Industry veterans across technology, business, finance, and legal domains" },
  { icon: GraduationCap, title: "Talent Access", desc: "Direct pipeline to NIET's engineering and management students for hiring and collaboration" },
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
              Nurturing innovation and entrepreneurship in Greater Noida and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <JourneyTimeline />

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
                To position NIET TBI as a premier incubation center in North India, 
                fostering innovation and entrepreneurship among students and regional 
                innovators, while contributing to economic growth through job creation 
                and scalable business development.
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
                To provide comprehensive incubation support including infrastructure, 
                mentorship, funding facilitation, legal assistance, and market linkages 
                to early-stage startups, with special emphasis on technology-driven 
                ventures and student entrepreneurship.
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
                className="group h-[280px]"
                style={{ perspective: '1000px' }}
              >
                <div 
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: 'rotateY(0deg)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotateY(180deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotateY(0deg)';
                  }}
                >
                  {/* Front Side */}
                  <div 
                    className="absolute inset-0 rounded-2xl bg-card border border-border p-6 text-center"
                    style={{ backfaceVisibility: 'hidden' }}
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
                    <p className="text-text-muted text-xs mb-4">{member.org}</p>
                    <p className="text-text-muted text-xs italic">Hover to learn more</p>
                  </div>
                  
                  {/* Back Side */}
                  <div 
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-accent-warm/10 border border-accent/30 p-6 flex flex-col justify-center"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-lg mb-3">
                      About
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {member.about}
                    </p>
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
