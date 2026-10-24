"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  label: string;
}

export default function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2000,
  label,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-[family-name:var(--font-mono)] font-bold gradient-text-cyan"
        style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
      >
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-text-muted text-sm font-medium mt-2 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
