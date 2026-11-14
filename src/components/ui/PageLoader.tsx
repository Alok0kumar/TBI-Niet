"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scroll while loader is active so background doesn't shift or scroll
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Centered Logo */}
          <div className="relative">
            <Image
              src="/72 ppi PNG.png"
              alt="NIET Technology Business Incubator"
              width={734}
              height={233}
              className="w-56 sm:w-64 md:w-[280px] h-auto object-contain"
              priority
            />
          </div>

          {/* Smooth Continuous Progress Bar */}
          <div className="w-52 sm:w-60 md:w-[260px] mt-7">
            <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.4,
                  ease: [0.25, 0.1, 0.25, 1], // Pure 60fps/120fps continuous easing curve (no setInterval stutter)
                }}
                onAnimationComplete={() => {
                  // Hold screen completely opaque at 100% for 300ms so user sees full completion before reveal
                  setTimeout(() => {
                    setIsLoading(false);
                  }, 300);
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
