"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Rocket, User, Building2, Target, PartyPopper } from "lucide-react";

const steps = [
  { label: "Personal Info", icon: User },
  { label: "Startup Details", icon: Building2 },
  { label: "Stage & Needs", icon: Target },
  { label: "Review", icon: Check },
];

const sectors = [
  "EdTech", "FinTech", "HealthTech", "AgriTech", "Logistics",
  "E-Commerce", "SaaS", "AI/ML", "IoT", "Clean Energy", "Other",
];

const stages = [
  "Idea Stage", "Prototype/MVP", "Early Revenue", "Growth Stage",
];

const supportOptions = [
  "Workspace", "Seed Funding", "Mentorship", "Legal/IPR",
  "Cloud Credits", "Investor Access", "Marketing", "Hiring",
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
    startupName: "",
    sector: "",
    description: "",
    teamSize: "",
    stage: "",
    fundingRaised: "",
    support: [] as string[],
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
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-card border border-border text-white placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all text-sm";
  const labelClass =
    "block text-sm font-medium text-text-muted mb-2";

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-primary grid-pattern" />
        <motion.div
          className="relative text-center p-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
          <motion.div
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent to-accent-warm flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <PartyPopper className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl text-white mb-4">
            Application Submitted!
          </h1>
          <p className="text-text-muted text-lg max-w-md mx-auto mb-8">
            Thank you, {formData.name || "founder"}! We&apos;ll review your
            application and get back to you within 2 weeks.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-accent to-accent-warm hover:shadow-lg hover:shadow-accent/20 transition-all"
          >
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-28 pb-20 relative">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative container-custom max-w-2xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-4">
            <Rocket className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">
              Incubation Application
            </span>
          </div>
          <h1
            className="font-[family-name:var(--font-display)] font-bold text-white"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Apply for Incubation
          </h1>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, i) => (
              <div
                key={step.label}
                className={`flex items-center gap-2 text-xs font-medium transition-colors ${
                  i <= currentStep ? "text-accent" : "text-text-muted/40"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all text-xs font-bold ${
                    i < currentStep
                      ? "bg-accent text-white"
                      : i === currentStep
                      ? "bg-accent/20 text-accent border border-accent/40"
                      : "bg-card border border-border text-text-muted/40"
                  }`}
                >
                  {i < currentStep ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    i + 1
                  )}
                </div>
                <span className="hidden sm:inline">{step.label}</span>
              </div>
            ))}
          </div>
          <div className="h-1 rounded-full bg-card">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent to-accent-warm"
              animate={{ width: `${((currentStep + 1) / 4) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Form Steps */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className="rounded-2xl bg-card/50 border border-border p-8 backdrop-blur-sm"
            >
              {currentStep === 0 && (
                <div className="space-y-5">
                  <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-xl mb-6">
                    Personal Information
                  </h2>
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input
                      type="email"
                      className={inputClass}
                      placeholder="john@startup.com"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone *</label>
                    <input
                      type="tel"
                      className={inputClass}
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>LinkedIn Profile</label>
                    <input
                      type="url"
                      className={inputClass}
                      placeholder="https://linkedin.com/in/johndoe"
                      value={formData.linkedin}
                      onChange={(e) => updateField("linkedin", e.target.value)}
                    />
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-5">
                  <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-xl mb-6">
                    Startup Details
                  </h2>
                  <div>
                    <label className={labelClass}>Startup Name *</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Your Startup"
                      value={formData.startupName}
                      onChange={(e) =>
                        updateField("startupName", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Sector *</label>
                    <div className="flex flex-wrap gap-2">
                      {sectors.map((sector) => (
                        <button
                          key={sector}
                          type="button"
                          onClick={() => updateField("sector", sector)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            formData.sector === sector
                              ? "bg-accent text-white"
                              : "bg-surface border border-border text-text-muted hover:border-accent/30"
                          }`}
                        >
                          {sector}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Brief Description *</label>
                    <textarea
                      className={`${inputClass} min-h-[100px] resize-none`}
                      placeholder="Tell us what your startup does in 2-3 sentences..."
                      value={formData.description}
                      onChange={(e) =>
                        updateField("description", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Team Size</label>
                    <input
                      type="number"
                      className={inputClass}
                      placeholder="e.g., 3"
                      value={formData.teamSize}
                      onChange={(e) => updateField("teamSize", e.target.value)}
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-5">
                  <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-xl mb-6">
                    Stage & Needs
                  </h2>
                  <div>
                    <label className={labelClass}>Current Stage *</label>
                    <div className="grid grid-cols-2 gap-3">
                      {stages.map((stage) => (
                        <button
                          key={stage}
                          type="button"
                          onClick={() => updateField("stage", stage)}
                          className={`px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                            formData.stage === stage
                              ? "bg-accent/10 border-accent/40 text-accent border"
                              : "bg-surface border border-border text-text-muted hover:border-accent/20"
                          }`}
                        >
                          {stage}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Funding Raised So Far</label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="e.g., Bootstrapped / ₹5L / None"
                      value={formData.fundingRaised}
                      onChange={(e) =>
                        updateField("fundingRaised", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className={labelClass}>What Support Do You Need?</label>
                    <div className="flex flex-wrap gap-2">
                      {supportOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleSupport(option)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            formData.support.includes(option)
                              ? "bg-accent text-white"
                              : "bg-surface border border-border text-text-muted hover:border-accent/30"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>
                      Quick Pitch (Optional)
                    </label>
                    <textarea
                      className={`${inputClass} min-h-[80px] resize-none`}
                      placeholder="Why should we incubate your startup?"
                      value={formData.pitch}
                      onChange={(e) => updateField("pitch", e.target.value)}
                    />
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="font-[family-name:var(--font-display)] font-bold text-white text-xl mb-6">
                    Review Your Application
                  </h2>

                  {[
                    { label: "Name", value: formData.name },
                    { label: "Email", value: formData.email },
                    { label: "Phone", value: formData.phone },
                    { label: "Startup", value: formData.startupName },
                    { label: "Sector", value: formData.sector },
                    { label: "Description", value: formData.description },
                    { label: "Team Size", value: formData.teamSize },
                    { label: "Stage", value: formData.stage },
                    {
                      label: "Funding",
                      value: formData.fundingRaised || "Not specified",
                    },
                    {
                      label: "Support Needed",
                      value: formData.support.join(", ") || "Not specified",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-3 border-b border-border last:border-0"
                    >
                      <span className="text-xs font-[family-name:var(--font-mono)] text-text-muted uppercase tracking-wider w-32 shrink-0">
                        {item.label}
                      </span>
                      <span className="text-sm text-white">
                        {item.value || "—"}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prevStep}
            className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-xl border border-border text-text-muted hover:text-white hover:border-accent/30 transition-all ${
              currentStep === 0 ? "invisible" : ""
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {currentStep < 3 ? (
            <button
              onClick={nextStep}
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-warm" />
              <span className="relative">Next</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="group relative inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold text-white rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-warm" />
              <span className="relative">Submit Application</span>
              <Rocket className="relative w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
