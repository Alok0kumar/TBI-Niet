"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Copy,
  Check,
  ChevronDown,
  ArrowRight,
  Train,
  Car,
  ParkingCircle,
  Plane,
} from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const inquiryTypes = [
  "Incubation",
  "Mentorship",
  "Campus Visit",
  "Partnership",
  "General",
] as const;

type InquiryType = (typeof inquiryTypes)[number];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "incubation@niet.co.in",
    href: "mailto:incubation@niet.co.in",
    copyable: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8448384615",
    href: "tel:+918448384615",
    copyable: false,
  },
  {
    icon: MapPin,
    label: "Address",
    value: "19, Knowledge Park II, Greater Noida, UP 201306",
    href: "https://maps.google.com/?q=Noida+Institute+of+Engineering+and+Technology",
    copyable: false,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sat, 9:00 AM – 5:00 PM",
    href: "",
    copyable: false,
  },
];

const directionsData = [
  {
    icon: Train,
    title: "Metro",
    detail: "Knowledge Park II Station, Aqua Line — 3 min walk.",
  },
  {
    icon: Car,
    title: "By Road",
    detail: "Noida–Greater Noida Expressway, Pari Chowk exit.",
  },
  {
    icon: ParkingCircle,
    title: "Parking",
    detail: "Visitor parking at Gate 2, near the Incubation Centre.",
  },
  {
    icon: Plane,
    title: "Airport",
    detail: "Jewar (NIIA) — 35 km · IGI Delhi — 55 km.",
  },
];

const faqData = [
  {
    q: "Can external founders apply for incubation?",
    a: "Yes. NIET TBI is open to innovators from any institution or background. External founders go through the same evaluation and receive the same support.",
  },
  {
    q: "What does the incubation program include?",
    a: "Co-working space, mentorship from 50+ industry experts, seed-funding facilitation, IP filing support, prototyping lab access, and investor-connect opportunities.",
  },
  {
    q: "Is there an application fee?",
    a: "No. Incubation support is provided under the MSME-approved framework. Equity or revenue-share terms are discussed individually after selection.",
  },
];

/* ─────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────── */

function isCurrentlyOpen(): boolean {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  return day >= 1 && day <= 6 && hour >= 9 && hour < 18;
}

const inputStyles =
  "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-red-600 focus:ring-1 focus:ring-red-600/15";

const labelStyles =
  "block text-[13px] font-medium text-gray-700 mb-1.5";

/* ─────────────────────────────────────────────
   COMPONENTS
   ───────────────────────────────────────────── */

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  copyable,
}: (typeof contactInfo)[number]) {
  const [copied, setCopied] = useState(false);
  const isHours = label === "Hours";
  const open = isCurrentlyOpen();

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [value]);

  const content = (
    <div className="flex items-start gap-3.5 group">
      <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
        <Icon className="w-4 h-4 text-red-600" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-medium text-gray-500">
            {label}
          </span>
          {isHours && (
            <span
              className={`inline-flex items-center gap-1 text-[11px] font-medium px-1.5 py-0.5 rounded ${
                open
                  ? "text-emerald-700 bg-emerald-50"
                  : "text-gray-500 bg-gray-100"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  open ? "bg-emerald-500" : "bg-gray-400"
                }`}
              />
              {open ? "Open" : "Closed"}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-900 mt-0.5 leading-relaxed">
          {value}
        </p>
      </div>
      {copyable && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleCopy();
          }}
          aria-label={`Copy ${label}`}
          className="shrink-0 p-1.5 rounded-md text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors mt-0.5"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-500" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block py-2.5 transition-colors hover:bg-gray-50 -mx-4 px-4 rounded-lg"
      >
        {content}
      </a>
    );
  }
  return <div className="py-2.5">{content}</div>;
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-3.5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-gray-900 leading-snug">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-gray-500 leading-relaxed pr-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function ContactPage() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success"
  >("idle");
  const [selectedType, setSelectedType] =
    useState<InquiryType>("General");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1400);
    setTimeout(() => setFormState("idle"), 5000);
  };

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section className="relative pt-28 pb-8 md:pt-32 md:pb-10 bg-white border-b border-gray-100">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-red-600" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-600">
                Contact
              </span>
            </div>

            <h1 className="text-[34px] sm:text-[42px] md:text-[48px] font-black leading-[1.08] tracking-[-0.03em] text-black mb-3">
              Get in touch
            </h1>

            <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed max-w-lg">
              Questions about incubation, visiting the campus, or
              partnering with us? Reach out — we typically respond within
              one business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MAIN CONTENT — Form + Sidebar
          ═══════════════════════════════════════ */}
      <section className="bg-[#fafaf8] py-8 md:py-12">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* ── LEFT: Form (3 cols) ─────────── */}
            <motion.div
              className="lg:col-span-3"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="rounded-xl border border-gray-200 bg-white p-8 md:p-10 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
                      <Check className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Message sent
                    </h3>
                    <p className="text-sm text-gray-500 max-w-xs mx-auto">
                      Your inquiry has been routed to our Incubation Cell.
                      We&apos;ll respond within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="rounded-xl border border-gray-200 bg-white p-5 md:p-7"
                  >
                    <h2 className="text-lg font-bold text-gray-900 mb-1">
                      Send a message
                    </h2>
                    <p className="text-sm text-gray-400 mb-4">
                      We&apos;ll route your inquiry to the right team.
                    </p>

                    {/* Inquiry type */}
                    <div className="mb-4">
                      <label className={labelStyles}>
                        What is this about?
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setSelectedType(type)}
                            className={`text-[13px] font-medium px-3 py-1.5 rounded-md border transition-all duration-150 ${
                              selectedType === type
                                ? "bg-gray-900 text-white border-gray-900"
                                : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Fields */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="c-name" className={labelStyles}>
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="c-name"
                            type="text"
                            required
                            placeholder="Your full name"
                            className={inputStyles}
                          />
                        </div>
                        <div>
                          <label htmlFor="c-email" className={labelStyles}>
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="c-email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className={inputStyles}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="c-phone" className={labelStyles}>
                            Phone
                          </label>
                          <input
                            id="c-phone"
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            className={inputStyles}
                          />
                        </div>
                        <div>
                          <label htmlFor="c-org" className={labelStyles}>
                            Organization
                          </label>
                          <input
                            id="c-org"
                            type="text"
                            placeholder="Startup or company name"
                            className={inputStyles}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="c-message" className={labelStyles}>
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="c-message"
                          rows={4}
                          required
                          placeholder="Tell us how we can help…"
                          className={`${inputStyles} resize-none`}
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="group inline-flex items-center gap-2 rounded-[4px] bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-red-700 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {formState === "submitting" ? (
                          <>
                            <svg
                              className="animate-spin w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            Send message
                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                          </>
                        )}
                      </button>
                      <span className="text-[12px] text-gray-400 hidden sm:block">
                        We respond within 1 business day
                      </span>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* ── RIGHT: Contact info + map (2 cols) ── */}
            <motion.div
              className="lg:col-span-2"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {/* Contact details */}
              <div className="mb-5">
                <h3 className="text-[12px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-2">
                  Contact info
                </h3>
                <div className="divide-y divide-gray-100">
                  {contactInfo.map((item) => (
                    <ContactRow key={item.label} {...item} />
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl border border-gray-200 overflow-hidden">
                <div className="relative h-[190px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.606764379471!2d77.49129571508083!3d28.461298882485598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e021a8f9bf%3A0x6b971a6e9a8f3b7c!2sNoida%20Institute%20of%20Engineering%20and%20Technology%20(NIET)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <div className="px-4 py-2.5 bg-white border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-900">
                    NIET TBI Facility
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Innovation Centre, Knowledge Park II
                  </p>
                  <a
                    href="https://maps.google.com/?q=Noida+Institute+of+Engineering+and+Technology"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700 mt-1.5 transition-colors"
                  >
                    Get directions
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          GETTING HERE — Directions + FAQ
          ═══════════════════════════════════════ */}
      <section className="bg-white py-10 md:py-14 border-t border-gray-100">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
            {/* Directions */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <h2 className="text-lg font-bold text-gray-900 mb-1">
                Getting here
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Greater Noida is well-connected by metro, road, and air.
              </p>

              <motion.div
                className="space-y-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {directionsData.map((d) => (
                  <motion.div
                    key={d.title}
                    variants={fadeUp}
                    className="flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                      <d.icon className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {d.title}
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed mt-0.5">
                        {d.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <h2 className="text-lg font-bold text-gray-900 mb-1">
                Frequently asked
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Quick answers before you reach out.
              </p>

              <div>
                {faqData.map((faq, i) => (
                  <FaqItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>

              <div className="mt-4 pt-3.5 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  Looking to apply for incubation?
                </p>
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors mt-1"
                >
                  Start your application
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
