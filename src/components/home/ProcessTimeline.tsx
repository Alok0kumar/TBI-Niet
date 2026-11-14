"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Users, Rocket, Trophy, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Apply",
    description: "Fill out the online application with your startup idea.",
    detail: "Submit business pitch deck & founder profile",
  },
  {
    icon: Users,
    number: "02",
    title: "Review & Select",
    description: "Our expert panel evaluates your application.",
    detail: "Evaluation & committee interview round",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Incubate",
    description: "Get workspace, mentorship and resources.",
    detail: "Lab access, ₹ seed funding & guidance",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Scale & Grow",
    description: "Launch, raise and grow your venture.",
    detail: "Demo Day showcase & VC introductions",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 220,
      damping: 24,
    },
  },
};

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section
      className="relative py-24 md:py-32 bg-white overflow-hidden"
      id="process"
    >
      {/* Pink blob decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow — HOW IT WORKS — */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <motion.span
              className="h-px w-10 bg-accent"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <span className="text-xs font-mono font-semibold tracking-[0.25em] text-neutral-500 uppercase">
              HOW IT WORKS
            </span>
            <motion.span
              className="h-px w-10 bg-accent"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>

          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
            From Application to{" "}
            <span className="text-accent relative inline-block">
              Launch
              <motion.span
                className="absolute bottom-1 left-0 w-full h-[3px] bg-accent/20 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto">
            A structured journey to turn your ideas into impactful ventures.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Background Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[110px] left-[10%] right-[10%] h-[2px] bg-gray-100 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-accent/20 via-accent to-accent/40 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-5 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {steps.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <div
                  key={step.number}
                  className="relative flex md:flex-col items-start md:items-stretch gap-4 md:gap-0"
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Interactive Card */}
                  <motion.div
                    variants={cardVariants}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 20px 40px -12px rgba(196, 30, 58, 0.15)",
                      borderColor: "rgba(196, 30, 58, 0.25)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-1 bg-white rounded-2xl border transition-colors duration-300 p-6 pt-8 flex flex-col items-center text-center cursor-pointer select-none relative ${
                      isActive ? "border-accent/40 shadow-lg shadow-accent/5" : "border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                    }`}
                  >
                    {/* Number badge with spring hover scale */}
                    <motion.div
                      className={`absolute -top-3.5 left-5 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                        isActive
                          ? "bg-accent text-white border-accent shadow-sm"
                          : "bg-red-50/80 text-accent border-accent/20"
                      }`}
                      animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <span className="text-[11px] font-bold font-mono">
                        {step.number}
                      </span>
                    </motion.div>

                    {/* Animated Icon Container */}
                    <motion.div
                      className="w-16 h-16 mb-5 flex items-center justify-center relative"
                      animate={isActive ? { scale: 1.15, rotate: [0, -4, 4, 0] } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Subtle hover pulse halo */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-accent/5"
                        animate={isActive ? { scale: 1.3, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <step.icon
                        className={`w-10 h-10 transition-colors duration-300 ${
                          isActive ? "text-accent" : "text-neutral-800"
                        }`}
                        strokeWidth={1.4}
                      />
                    </motion.div>

                    {/* Step Title */}
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-neutral-900 text-base mb-2 transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-neutral-500 text-sm leading-relaxed mb-4 flex-1">
                      {step.description}
                    </p>

                    {/* Subtle expanded hint on hover */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden mb-3 text-[11px] font-medium text-accent flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{step.detail}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Animated Red Accent Bottom Line */}
                    <motion.div
                      className="h-[2.5px] bg-accent rounded-full"
                      animate={{ width: isActive ? 56 : 32 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  </motion.div>

                  {/* Arrow Connector Between Cards (Desktop) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden md:flex absolute -right-4 top-[108px] -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-accent items-center justify-center shadow-md cursor-pointer"
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.25, x: 2 }}
                      animate={{
                        x: [0, 3, 0],
                      }}
                      transition={{
                        default: { delay: 0.3 + index * 0.15, type: "spring", stiffness: 300, damping: 18 },
                        x: {
                          repeat: Infinity,
                          duration: 2,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        },
                      }}
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </motion.div>
                  )}

                  {/* Mobile Vertical Connector */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex flex-col items-center justify-center w-10 shrink-0 mt-2">
                      <div className="w-px h-full bg-gray-200 relative">
                        <motion.div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-accent flex items-center justify-center"
                          animate={{ y: [0, 3, 0] }}
                          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-3 h-3 text-white rotate-90" />
                        </motion.div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Footer Tagline with Staggered Entrance */}
        <motion.div
          className="flex items-center justify-end gap-3 mt-14 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.span
            className="h-px w-16 bg-gray-300"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <span className="text-xs font-mono font-semibold tracking-[0.22em] text-neutral-400 uppercase">
            Innovate
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs font-mono font-semibold tracking-[0.22em] text-neutral-400 uppercase">
            Incubate
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs font-mono font-semibold tracking-[0.22em] text-neutral-400 uppercase">
            Scale
          </span>
        </motion.div>
      </div>
    </section>
  );
}
