"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Landmark, Cpu } from "lucide-react";

const institutionalPartners = [
  { name: "Government of India", logo: null, text: "Government\nof India" },
  { name: "Ministry of MSME", logo: "/msme.webp", text: "Ministry of MSME" },
  { name: "Startup India", logo: "/startup-india.webp", text: "Startup India" },
  { name: "AKTU Lucknow", logo: null, text: "AKTU\nLucknow" },
  { name: "NASSCOM", logo: null, text: "NASSCOM" },
  { name: "Wadhwani Foundation", logo: "/wadhwni.webp", text: "Wadhwani Foundation" },
  { name: "Seed Spark", logo: "/seedpark.webp", text: "Seed Spark" },
];

const technologyPartners = [
  { name: "Amazon Web Services", logo: "/aws.webp", text: "AWS" },
  { name: "Microsoft Azure", logo: "/microsoft.webp", text: "Microsoft" },
  { name: "Digital India", logo: null, text: "Digital India" },
  { name: "Industry Partners", logo: null, text: "Industry\nPartners" },
  { name: "Angel Networks", logo: null, text: "Angel\nNetworks" },
];

const VISIBLE = 4;

function PartnerRow({
  icon: Icon,
  label,
  partners,
}: {
  icon: React.ElementType;
  label: string;
  partners: { name: string; logo: string | null; text: string }[];
}) {
  const [start, setStart] = useState(0);
  const canPrev = start > 0;
  const canNext = start + VISIBLE < partners.length;
  const visible = partners.slice(start, start + VISIBLE);

  return (
    <div className="flex items-stretch border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
      {/* Category label with red left border */}
      <div className="flex items-center gap-3.5 px-6 py-6 border-r border-gray-200 min-w-[190px] md:min-w-[220px] border-l-4 border-l-accent bg-gray-50/40">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-accent" strokeWidth={1.8} />
        </div>
        <span className="text-sm md:text-base font-bold text-neutral-900 leading-tight">
          {label}
        </span>
      </div>

      {/* Partner logos */}
      <div className="flex flex-1 items-center divide-x divide-gray-100">
        {visible.map((partner) => (
          <div
            key={partner.name}
            className="flex-1 flex items-center justify-center px-4 md:px-8 py-6 min-h-[96px] md:min-h-[112px] min-w-0"
          >
            {partner.logo ? (
              <Image
                src={partner.logo}
                alt={partner.name}
                width={220}
                height={90}
                className="h-12 md:h-14 max-w-[85%] w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            ) : (
              <span className="text-sm md:text-base font-bold text-neutral-800 text-center whitespace-pre-line leading-snug tracking-tight">
                {partner.text}
              </span>
            )}
          </div>
        ))}
        {/* Fill empty slots so layout doesn't jump */}
        {visible.length < VISIBLE &&
          Array.from({ length: VISIBLE - visible.length }).map((_, i) => (
            <div key={`empty-${i}`} className="flex-1 min-h-[96px] md:min-h-[112px]" />
          ))}
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center divide-x divide-gray-100 border-l border-gray-200">
        <button
          type="button"
          onClick={() => setStart((s) => Math.max(0, s - 1))}
          disabled={!canPrev}
          className="w-12 h-full flex items-center justify-center text-neutral-400 hover:text-accent hover:bg-accent/5 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous partners"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => setStart((s) => (canNext ? s + 1 : s))}
          disabled={!canNext}
          className="w-12 h-full flex items-center justify-center text-neutral-400 hover:text-accent hover:bg-accent/5 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
          aria-label="Next partners"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function PartnersMarquee() {
  return (
    <section className="relative py-24 bg-white overflow-hidden" id="partners">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-mono font-semibold tracking-[0.25em] text-neutral-500 uppercase">
              OUR ECOSYSTEM
            </span>
            <span className="h-px w-10 bg-accent" />
          </div>

          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
            Backed by a network.{" "}
            <span className="text-accent">Built for impact.</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-lg mx-auto leading-relaxed">
            Collaborating with government institutions, technology leaders
            and the startup ecosystem.
          </p>
        </motion.div>

        {/* Partner rows */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <PartnerRow
            icon={Landmark}
            label="Institutional Partners"
            partners={institutionalPartners}
          />
          <PartnerRow
            icon={Cpu}
            label="Technology Partners"
            partners={technologyPartners}
          />
        </motion.div>

        {/* Footer tagline */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="h-px w-16 bg-gray-300" />
          <span className="text-xs font-mono tracking-[0.2em] text-neutral-400 uppercase">
            Connecting ideas with opportunities
          </span>
          <span className="h-px w-16 bg-gray-300" />
        </motion.div>

        {/* College building image */}
        <motion.div
          className="mt-12 rounded-xl overflow-hidden h-48 md:h-64 relative"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src="/nietbg.jpeg"
            alt="NIET Campus"
            fill
            className="object-cover object-center grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
