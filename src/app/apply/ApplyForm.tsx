"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Rocket,
  User,
  Building2,
  Target,
  PartyPopper,
  ShieldCheck,
  IndianRupee,
  Cpu,
  Users,
  Award,
  Sparkles,
  HelpCircle,
  Mail,
  Phone,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const steps = [
  { id: 1, label: "Founder", title: "Founder Profile", desc: "Contact & academic background", icon: User },
  { id: 2, label: "Startup", title: "Startup & Product", desc: "Venture info & problem solved", icon: Building2 },
  { id: 3, label: "Stage & Needs", title: "Stage & Requirements", desc: "Funding, maturity & needed support", icon: Target },
  { id: 4, label: "Review", title: "Review & Submit", desc: "Confirm responses & IP protection", icon: Check },
];

const sectors = [
  "AI & Machine Learning",
  "HealthTech & BioTech",
  "FinTech",
  "EdTech",
  "AgriTech & Food",
  "CleanTech & Energy",
  "SaaS & Enterprise",
  "Robotics & IoT",
  "E-Commerce & D2C",
  "Defense & Aerospace",
  "Other",
];

const stages = [
  {
    title: "Idea / Research",
    desc: "Concept formulated, conducting early validation or lab research",
  },
  {
    title: "Prototype / MVP",
    desc: "Working prototype built, testing with initial pilot users",
  },
  {
    title: "Early Traction",
    desc: "Product live in market with early paying customers or pilot deals",
  },
  {
    title: "Growth / Scaling",
    desc: "Proven unit economics, seeking capital and market expansion",
  },
];

const supportOptions = [
  { label: "Seed Funding & Grants", icon: IndianRupee },
  { label: "Workspace & Lab Infrastructure", icon: Cpu },
  { label: "1-on-1 Mentor Network", icon: Users },
  { label: "IPR & Patent Filing", icon: Award },
  { label: "Cloud Credits (AWS/Azure)", icon: Sparkles },
  { label: "Investor Pitch Sessions", icon: Rocket },
];

export default function ApplyForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    college: "",
    isStudent: "No",
    startupName: "",
    website: "",
    sector: "AI & Machine Learning",
    description: "",
    problemStatement: "",
    teamSize: "2-4",
    stage: "Prototype / MVP",
    fundingRaised: "Bootstrapped",
    support: ["Seed Funding & Grants", "Workspace & Lab Infrastructure"] as string[],
    deckUrl: "",
    pitch: "",
  });

  const updateField = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleSupport = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      support: prev.support.includes(option)
        ? prev.support.filter((s) => s !== option)
        : [...prev.support, option],
    }));
  };

  const nextStep = () => {
    setDirection(1);
    setCurrentStep((prev) => Math.min(prev + 1, 3));
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 25 : -25,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -25 : 25,
      opacity: 0,
    }),
  };

  const inputClass =
    "w-full px-3.5 py-2.5 rounded-lg border border-gray-200 bg-white text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-[#C41E3A] focus:ring-2 focus:ring-[#C41E3A]/15 transition-all text-sm";
  const labelClass =
    "block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5";

  if (submitted) {
    return (
      <section className="min-h-screen pt-32 pb-24 bg-[#fafaf8] flex items-center justify-center relative">
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-200/90 bg-white p-8 md:p-12 shadow-sm"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[#C41E3A]">
              <PartyPopper className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3">
              <Check className="w-3.5 h-3.5" /> Application Received
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight mb-3">
              You&apos;re on your way, {formData.name || "Founder"}!
            </h1>

            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              Your application for <span className="font-semibold text-neutral-900">{formData.startupName || "your startup"}</span> has been routed directly to the NIET TBI Incubation Committee.
            </p>

            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 text-left space-y-2 mb-8 text-xs text-neutral-600">
              <div className="flex justify-between">
                <span className="text-neutral-500">Application Reference:</span>
                <span className="font-mono font-bold text-neutral-800">TBI-2026-{(Math.random() * 9000 + 1000).toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Review Timeline:</span>
                <span className="font-medium text-neutral-800">Initial review in 3 business days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Contact Email:</span>
                <span className="font-medium text-neutral-800">{formData.email || "Submitted"}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-lg bg-[#C41E3A] hover:bg-[#a81630] shadow-sm transition-all"
              >
                Back to Home
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-neutral-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all"
              >
                Explore Cohort Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-24 md:pt-28 pb-20 bg-[#fafaf8] relative">
      {/* ── Soft warm ambient glow at top right ── */}
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-gradient-to-bl from-red-100/40 via-red-50/15 to-transparent rounded-bl-full pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 2-Column Split: Left Side (Navigation & Context) + Right Side (Form & Perks) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ══════════════════════════════════════════════════════════════════
              LEFT SIDEBAR: Cohort Branding, Vertical Stepper, Eligibility & Help
              ══════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">

            {/* Left Header Card */}
            <div className="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-[#C41E3A]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C41E3A]">
                  Cohort 2026 Admissions
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight leading-[1.15] mb-2">
                Apply for Incubation
              </h1>

              <p className="text-xs text-neutral-500 leading-relaxed">
                Join 75+ ventures accelerated by NIET TBI with seed support, research facilities, and VC networks.
              </p>
            </div>

            {/* Left Vertical Stepper Card */}
            <div className="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-400">
                  Application Steps
                </h3>
                <span className="text-[11px] font-bold text-[#C41E3A]">
                  Step {currentStep + 1} of 4
                </span>
              </div>

              <div className="space-y-2">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  const isActive = i === currentStep;
                  const isCompleted = i < currentStep;

                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => {
                        if (i < currentStep) {
                          setDirection(-1);
                          setCurrentStep(i);
                        }
                      }}
                      disabled={i > currentStep}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                        isActive
                          ? "bg-red-50/80 border border-red-200 shadow-xs"
                          : isCompleted
                          ? "hover:bg-gray-50 cursor-pointer"
                          : "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-bold text-xs transition-all ${
                          isCompleted
                            ? "bg-emerald-500 text-white"
                            : isActive
                            ? "bg-[#C41E3A] text-white shadow-xs"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {isCompleted ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <p className={`text-xs font-bold truncate ${isActive ? "text-[#C41E3A]" : "text-neutral-800"}`}>
                            {step.title}
                          </p>
                          {isCompleted && (
                            <span className="text-[10px] font-semibold text-emerald-600">Done</span>
                          )}
                        </div>
                        <p className="text-[10px] text-neutral-400 truncate mt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-100 h-1.5 rounded-full mt-4 overflow-hidden">
                <motion.div
                  className="bg-[#C41E3A] h-full rounded-full"
                  animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* Left Eligibility Checklist Card */}
            <div className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 mb-3">
                Eligibility Checklist
              </h3>
              <ul className="space-y-2 text-xs text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Student innovators &amp; early-stage founders welcome</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Tech or tech-enabled scalable business models</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Prototype, MVP or clear research-backed concept</span>
                </li>
              </ul>
            </div>

            {/* Left Help & Contact Card */}
            <div className="rounded-2xl border border-red-100 bg-red-50/50 p-4 sm:p-5 text-xs">
              <h4 className="font-bold text-neutral-900 flex items-center gap-2 mb-1">
                <HelpCircle className="w-4 h-4 text-[#C41E3A]" />
                Have questions before applying?
              </h4>
              <p className="text-neutral-600 leading-relaxed mb-3 text-[11px]">
                Our incubation managers are available to guide you through the process.
              </p>
              <div className="space-y-1.5 text-[11px]">
                <a href="mailto:incubation@niet.co.in" className="flex items-center gap-2 text-neutral-700 hover:text-[#C41E3A] font-medium transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#C41E3A]" />
                  <span>incubation@niet.co.in</span>
                </a>
                <a href="tel:+918448384615" className="flex items-center gap-2 text-neutral-700 hover:text-[#C41E3A] font-medium transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#C41E3A]" />
                  <span>+91 84483 84615</span>
                </a>
              </div>
            </div>

          </div>

          {/* ══════════════════════════════════════════════════════════════════
              RIGHT COLUMN: Program Perks Ribbon + Active Form Card
              ══════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-8 space-y-6">

            {/* Top Program Benefits Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white rounded-xl border border-gray-200/90 p-3.5 shadow-xs">
                <div className="w-6 h-6 rounded-md bg-red-50 border border-red-100 flex items-center justify-center text-[#C41E3A] mb-2">
                  <IndianRupee className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs font-bold text-neutral-900">Up to ₹25L Grants</h4>
                <p className="text-[10px] text-neutral-500 mt-0.5">MSME &amp; SISFS funding</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200/90 p-3.5 shadow-xs">
                <div className="w-6 h-6 rounded-md bg-red-50 border border-red-100 flex items-center justify-center text-[#C41E3A] mb-2">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs font-bold text-neutral-900">R&amp;D Labs</h4>
                <p className="text-[10px] text-neutral-500 mt-0.5">IoT, 3D Print &amp; GPUs</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200/90 p-3.5 shadow-xs">
                <div className="w-6 h-6 rounded-md bg-red-50 border border-red-100 flex items-center justify-center text-[#C41E3A] mb-2">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs font-bold text-neutral-900">VC Mentorship</h4>
                <p className="text-[10px] text-neutral-500 mt-0.5">1-on-1 operator access</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200/90 p-3.5 shadow-xs">
                <div className="w-6 h-6 rounded-md bg-red-50 border border-red-100 flex items-center justify-center text-[#C41E3A] mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs font-bold text-neutral-900">₹50L+ Credits</h4>
                <p className="text-[10px] text-neutral-500 mt-0.5">AWS, Azure &amp; Google</p>
              </div>
            </div>

            {/* Active Step Form Card */}
            <div className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  {/* STEP 1: Founder Information */}
                  {currentStep === 0 && (
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-lg font-bold text-neutral-900">Founder Profile</h2>
                        <p className="text-xs text-neutral-500 mt-0.5">Tell us about yourself and your background.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div>
                          <label className={labelClass}>
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            className={inputClass}
                            placeholder="e.g. Aditi Sharma"
                            value={formData.name}
                            onChange={(e) => updateField("name", e.target.value)}
                          />
                        </div>

                        <div>
                          <label className={labelClass}>
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            className={inputClass}
                            placeholder="founder@startup.com"
                            value={formData.email}
                            onChange={(e) => updateField("email", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>
                            Phone / WhatsApp <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            className={inputClass}
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => updateField("phone", e.target.value)}
                          />
                        </div>

                        <div>
                          <label className={labelClass}>LinkedIn Profile URL</label>
                          <input
                            type="url"
                            className={inputClass}
                            placeholder="https://linkedin.com/in/username"
                            value={formData.linkedin}
                            onChange={(e) => updateField("linkedin", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>College / Institution Name</label>
                          <input
                            type="text"
                            className={inputClass}
                            placeholder="e.g. NIET Greater Noida / Other"
                            value={formData.college}
                            onChange={(e) => updateField("college", e.target.value)}
                          />
                        </div>

                        <div>
                          <label className={labelClass}>Are you a current student?</label>
                          <div className="grid grid-cols-2 gap-2">
                            {["Yes, Student", "Graduated / Professional"].map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => updateField("isStudent", opt)}
                                className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                                  formData.isStudent === opt
                                    ? "bg-[#C41E3A] text-white border-[#C41E3A]"
                                    : "bg-white text-neutral-700 border-gray-200 hover:border-gray-300"
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Startup Details */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-lg font-bold text-neutral-900">Startup &amp; Product</h2>
                        <p className="text-xs text-neutral-500 mt-0.5">What are you building and for whom?</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div>
                          <label className={labelClass}>
                            Startup / Venture Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            className={inputClass}
                            placeholder="e.g. Aerobotics AI"
                            value={formData.startupName}
                            onChange={(e) => updateField("startupName", e.target.value)}
                          />
                        </div>

                        <div>
                          <label className={labelClass}>Website / Pitch Deck Link</label>
                          <input
                            type="url"
                            className={inputClass}
                            placeholder="https://yourstartup.com or Drive link"
                            value={formData.deckUrl}
                            onChange={(e) => updateField("deckUrl", e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>
                          Primary Industry / Sector <span className="text-red-500">*</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {sectors.map((sec) => (
                            <button
                              key={sec}
                              type="button"
                              onClick={() => updateField("sector", sec)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                                formData.sector === sec
                                  ? "bg-[#C41E3A] text-white border-[#C41E3A] shadow-xs"
                                  : "bg-white text-neutral-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                              }`}
                            >
                              {sec}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>
                          One-line Pitch / Elevator Description <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          className={inputClass}
                          placeholder="e.g. Autonomous drone fleet management software for smart agricultural spraying"
                          value={formData.description}
                          onChange={(e) => updateField("description", e.target.value)}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>
                          Problem you are solving &amp; your solution <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          rows={3}
                          required
                          className={`${inputClass} resize-none`}
                          placeholder="Detail the pain point, who suffers from it, and how your product uniquely solves it..."
                          value={formData.problemStatement}
                          onChange={(e) => updateField("problemStatement", e.target.value)}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>Current Team Size</label>
                        <div className="grid grid-cols-4 gap-2">
                          {["Solo Founder", "2-4 Members", "5-8 Members", "9+ Members"].map((size) => (
                            <button
                              key={size}
                              type="button"
                              onClick={() => updateField("teamSize", size)}
                              className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all ${
                                formData.teamSize === size
                                  ? "bg-[#C41E3A] text-white border-[#C41E3A]"
                                  : "bg-white text-neutral-700 border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Stage & Needs */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-lg font-bold text-neutral-900">Current Stage &amp; Needs</h2>
                        <p className="text-xs text-neutral-500 mt-0.5">Help us understand where you are and how TBI can accelerate you.</p>
                      </div>

                      <div className="pt-2">
                        <label className={labelClass}>Current Maturity Stage</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {stages.map((stg) => (
                            <button
                              key={stg.title}
                              type="button"
                              onClick={() => updateField("stage", stg.title)}
                              className={`p-3.5 rounded-xl border text-left transition-all ${
                                formData.stage === stg.title
                                  ? "bg-red-50/70 border-[#C41E3A] ring-1 ring-[#C41E3A]/20"
                                  : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className={`text-xs font-bold ${formData.stage === stg.title ? "text-[#C41E3A]" : "text-neutral-900"}`}>
                                  {stg.title}
                                </span>
                                {formData.stage === stg.title && <Check className="w-3.5 h-3.5 text-[#C41E3A]" />}
                              </div>
                              <p className="text-[11px] text-neutral-500 leading-snug">{stg.desc}</p>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>Cumulative Funding Raised</label>
                        <div className="grid grid-cols-4 gap-2">
                          {["Bootstrapped", "< ₹10 Lakhs", "₹10L – ₹50L", "₹50L+"].map((f) => (
                            <button
                              key={f}
                              type="button"
                              onClick={() => updateField("fundingRaised", f)}
                              className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all ${
                                formData.fundingRaised === f
                                  ? "bg-[#C41E3A] text-white border-[#C41E3A]"
                                  : "bg-white text-neutral-700 border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              {f}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>What support do you primarily require from NIET TBI?</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {supportOptions.map((opt) => {
                            const isSelected = formData.support.includes(opt.label);
                            const Icon = opt.icon;
                            return (
                              <button
                                key={opt.label}
                                type="button"
                                onClick={() => toggleSupport(opt.label)}
                                className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-left text-xs font-medium transition-all ${
                                  isSelected
                                    ? "bg-neutral-900 text-white border-neutral-900 shadow-xs"
                                    : "bg-white text-neutral-700 border-gray-200 hover:border-gray-300"
                                }`}
                              >
                                <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-red-400" : "text-neutral-500"}`} />
                                <span className="truncate">{opt.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>Why do you want to join NIET TBI? (Optional)</label>
                        <textarea
                          rows={2}
                          className={`${inputClass} resize-none`}
                          placeholder="Tell us what specific lab, mentor, or resource you wish to leverage..."
                          value={formData.pitch}
                          onChange={(e) => updateField("pitch", e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Review Application */}
                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-lg font-bold text-neutral-900">Review Application</h2>
                        <p className="text-xs text-neutral-500 mt-0.5">Please review your responses before final submission.</p>
                      </div>

                      <div className="divide-y divide-gray-100 rounded-xl border border-gray-200 bg-neutral-50/50 p-4 text-xs">
                        <div className="grid grid-cols-3 py-2">
                          <span className="font-semibold text-neutral-500">Founder:</span>
                          <span className="col-span-2 font-medium text-neutral-900">{formData.name || "—"} ({formData.email})</span>
                        </div>
                        <div className="grid grid-cols-3 py-2">
                          <span className="font-semibold text-neutral-500">Phone:</span>
                          <span className="col-span-2 font-medium text-neutral-900">{formData.phone || "—"}</span>
                        </div>
                        <div className="grid grid-cols-3 py-2">
                          <span className="font-semibold text-neutral-500">Startup:</span>
                          <span className="col-span-2 font-medium text-neutral-900">{formData.startupName || "—"}</span>
                        </div>
                        <div className="grid grid-cols-3 py-2">
                          <span className="font-semibold text-neutral-500">Sector:</span>
                          <span className="col-span-2 font-medium text-neutral-900">{formData.sector}</span>
                        </div>
                        <div className="grid grid-cols-3 py-2">
                          <span className="font-semibold text-neutral-500">Stage:</span>
                          <span className="col-span-2 font-medium text-neutral-900">{formData.stage}</span>
                        </div>
                        <div className="grid grid-cols-3 py-2">
                          <span className="font-semibold text-neutral-500">Pitch:</span>
                          <span className="col-span-2 font-medium text-neutral-800 leading-relaxed">{formData.description || "—"}</span>
                        </div>
                        <div className="grid grid-cols-3 py-2">
                          <span className="font-semibold text-neutral-500">Key Needs:</span>
                          <span className="col-span-2 font-medium text-neutral-900">{formData.support.join(", ") || "None selected"}</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-lg bg-emerald-50/80 border border-emerald-200/80 text-[12px] text-emerald-800 flex items-start gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>All applications are handled under strict confidentiality. Your intellectual property and concept remains 100% yours.</span>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-lg border border-gray-200 text-neutral-700 hover:bg-gray-50 transition-all ${
                        currentStep === 0 ? "invisible" : ""
                      }`}
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Previous Step
                    </button>

                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white rounded-lg bg-[#C41E3A] hover:bg-[#a81630] shadow-sm transition-all active:scale-98"
                      >
                        Next Step
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="inline-flex items-center gap-2 px-7 py-2.5 text-xs sm:text-sm font-semibold text-white rounded-lg bg-[#C41E3A] hover:bg-[#a81630] shadow-md transition-all active:scale-98"
                      >
                        Submit Application
                        <Rocket className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
