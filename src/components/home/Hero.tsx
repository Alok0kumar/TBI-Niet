"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const headlineWords = ["Where", "Ideas", "Become"];
const headlineAccent = "Industries.";

export default function Hero() {
  return (
    <>
      {/* Background Image Section with Headline */}
      <section
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden"
        id="hero"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/tbi-bg.webp')" }}
        />

        {/* Headline on Image */}
        <div className="relative z-10 text-center px-4">
          <div className="mb-6 flex flex-col items-center justify-center">
            <div
              className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-tight flex flex-wrap justify-center gap-x-[0.25em]"
              style={{ fontSize: "clamp(48px, 8vw, 104px)" }}
            >
              {headlineWords.map((word, i) => (
                <div key={word} className="overflow-hidden">
                  <motion.span
                    className="inline-block text-black"
                    style={{
                      textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9), -2px -2px 4px rgba(255, 255, 255, 0.8)'
                    }}
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
                className="inline-block font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-tight text-accent"
                style={{ 
                  fontSize: "clamp(48px, 8vw, 104px)",
                  textShadow: '2px 2px 4px rgba(255, 255, 255, 0.9), -2px -2px 4px rgba(255, 255, 255, 0.8)'
                }}
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
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Content Section - White Background */}
      <section className="relative bg-white py-16">
        <div className="container-custom text-center">
          {/* Subline */}
          <motion.p
            className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Ministry of MSME recognized incubation center empowering student entrepreneurs, 
            early-stage startups, and innovators with infrastructure, mentorship, and funding 
            to build scalable businesses in Delhi-NCR.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Link
              href="/apply"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-accent hover:bg-[#084298] active:bg-[#063770] rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Apply for Incubation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/ecell"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-gray-800 rounded-full border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-200"
            >
              <span>Explore E-Cell</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
