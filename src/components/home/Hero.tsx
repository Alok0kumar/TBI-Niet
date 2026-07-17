"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

// Magnetic Button Wrapper
function MagneticWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div 
      ref={ref}
      style={{ x: springX, y: springY }} 
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}

// 3D Tilt Card
function TiltCard({ children, delay }: { children: React.ReactNode, delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="glass p-6 rounded-2xl flex flex-col items-center justify-center cursor-pointer border border-white/5 bg-[#0A0A0A] hover:bg-[#111] transition-colors shadow-2xl"
    >
      <div style={{ transform: "translateZ(30px)" }} className="flex flex-col items-center">
        {children}
      </div>
    </motion.div>
  );
}

const headlineWords = ["Where", "Ideas", "Become"];
const headlineAccent = "Industries.";

export default function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Solid Dark Background with subtle grid */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Subtle Glowing Orb instead of noisy particles */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Content */}
      <div className="relative container-custom text-center z-10 py-16">
        {/* Tag */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-text-muted font-medium">
            MSME-Approved Incubation Center
          </span>
        </motion.div> */}

        {/* Headline with Mask Reveal */}
        <div className="mb-6 flex flex-col items-center justify-center">
          <div
            className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-tight flex flex-wrap justify-center gap-x-[0.25em]"
            style={{ fontSize: "clamp(48px, 8vw, 104px)" }}
          >
            {headlineWords.map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.span
                  className="inline-block text-white"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + i * 0.1,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>
          <div className="overflow-hidden mt-2">
            <motion.span
              className="inline-block text-accent font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(48px, 8vw, 104px)" }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + headlineWords.length * 0.1,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              {headlineAccent}
            </motion.span>
          </div>
        </div>

        {/* Subline */}
        <motion.p
          className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          NIET Technology Business Incubator — Greater Noida&apos;s premier
          launchpad for student startups, regional innovators, and deep-tech
          ventures.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link
            href="/apply"
            className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-accent hover:bg-[#801414] active:bg-[#630F0F] rounded-full transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30"
          >
            <span>Apply for Incubation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/ecell"
            className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-full border border-white/15 hover:border-white/30 hover:bg-white/[0.06] active:bg-white/[0.12] transition-all duration-200"
          >
            <span>Explore E-Cell</span>
            <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-white group-hover:translate-x-1 transition-all" />
          </Link>
        </motion.div>

        {/* Stats Grid with 3D Tilt */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto perspective-1000">
          <TiltCard delay={1.2}>
            <AnimatedCounter target={10} suffix="+" label="Years" />
          </TiltCard>
          <TiltCard delay={1.3}>
            <AnimatedCounter target={100} prefix="₹" suffix="L+" label="Seed Fund" />
          </TiltCard>
          <TiltCard delay={1.4}>
            <AnimatedCounter target={50} suffix="+" label="Startups" />
          </TiltCard>
          <TiltCard delay={1.5}>
            <AnimatedCounter target={18000} label="Sq. Ft." />
          </TiltCard>
        </div> */}
      </div>

      {/* Bottom gradient fade to match background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
    </section>
  );
}
