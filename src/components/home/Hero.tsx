"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

// Interactive particle canvas
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];
    const particleCount = Math.min(80, Math.floor((width * height) / 15000));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.x -= dx * force * 0.01;
          p.y -= dy * force * 0.01;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 194, 255, ${0.3 + p.size * 0.15})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.sqrt(
            (p.x - p2.x) ** 2 + (p.y - p2.y) ** 2
          );
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 194, 255, ${0.06 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  useEffect(() => {
    const cleanup = init();
    return cleanup;
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}

// Headline words animated one by one
const headlineWords = ["Where", "Ideas", "Become"];
const headlineAccent = "Industries.";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 grid-pattern" />
      <ParticleBackground />

      {/* Aurora blobs */}
      <div className="aurora-blob aurora-blob--cyan absolute top-[-200px] left-[-100px] animate-float" />
      <div className="aurora-blob aurora-blob--orange absolute bottom-[-150px] right-[-100px] animate-float-delay" />
      <div
        className="aurora-blob absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full opacity-15"
        style={{
          background: "linear-gradient(135deg, #00C2FF, #FF6B2B)",
          filter: "blur(100px)",
          animation: "float 10s ease-in-out 1s infinite",
        }}
      />

      {/* Content */}
      <div className="relative container-custom text-center z-10 pt-24 pb-16">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-text-muted font-medium">
            MSME-Approved Incubation Center
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-6 overflow-hidden">
          <div
            className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-tighter"
            style={{ fontSize: "clamp(48px, 8vw, 104px)" }}
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.25em] text-white"
                initial={{ opacity: 0, y: 60, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + i * 0.12,
                  ease: [0.19, 1, 0.22, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              className="inline-block gradient-text"
              initial={{ opacity: 0, y: 60, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4 + headlineWords.length * 0.12,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              {headlineAccent}
            </motion.span>
          </div>
        </div>

        {/* Subline */}
        <motion.p
          className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          NIET Technology Business Incubator — Greater Noida&apos;s premier
          launchpad for student startups, regional innovators, and deep-tech
          ventures.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Link
            href="/apply"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,194,255,0.3)] ring-1 ring-white/10"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-warm" />
            <span className="absolute inset-0 bg-gradient-to-r from-accent-warm to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative">Apply for Incubation</span>
            <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/ecell"
            className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-xl glass hover:bg-white/5 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <span>Explore E-Cell</span>
            <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center card-hover">
            <AnimatedCounter target={10} suffix="+" label="Years" />
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center card-hover">
            <AnimatedCounter target={100} prefix="₹" suffix="L+" label="Seed Fund" />
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center card-hover">
            <AnimatedCounter target={50} suffix="+" label="Startups" />
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center card-hover">
            <AnimatedCounter target={18000} label="Sq. Ft." />
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
    </section>
  );
}
