"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, ArrowUp } from "lucide-react";

// ── Custom SVG Icons ──────────────────────────────────────────────────────────

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}





// ── Link Data ──────────────────────────────────────────────────────────────────

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About TBI" },
  { href: "/programs", label: "Programs" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/mentors", label: "Mentors" },
  { href: "/programs-events", label: "News & Events" },
  { href: "/contact", label: "Contact" },
];

const incubationLinks = [
  { href: "/apply", label: "Apply for Incubation" },
  { href: "/incubation", label: "Incubation Model" },
  { href: "/portfolio", label: "Startups" },
  { href: "/mentors", label: "Mentors" },
  { href: "/offerings", label: "Resources" },
  { href: "/contact", label: "FAQs" },
];

const aboutLinks = [
  { href: "/about", label: "About Us" },
  { href: "/about#impact", label: "Our Impact" },
  { href: "/about#team", label: "Team" },
  { href: "/about#campus-innovation", label: "Campus Innovation" },
  { href: "/about#collaborations", label: "Collaborations" },
  { href: "/contact", label: "Careers" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/niet-tbi/", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "https://x.com", label: "X (Twitter)", Icon: XIcon },
  { href: "https://www.instagram.com/niet.tbi?obrf=MTJ3ancyNTlwNTNqdA==", label: "Instagram", Icon: InstagramIcon },
 
];

// ── Main Component ─────────────────────────────────────────────────────────────

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <footer className="relative bg-white text-neutral-800 font-sans border-t border-gray-100 overflow-hidden">
      {/* Soft warm ambient glow at top right */}
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-gradient-to-bl from-red-100/40 via-red-50/15 to-transparent rounded-bl-full pointer-events-none -z-0" />

      {/* ── Main Content Container ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-14 md:pt-16 pb-4 sm:pb-5">

        

        {/* ── Top Grid: Brand & Links ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 pb-10">

          {/* Left Column (Brand & Mission) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* Logo */}
            <Link href="/" className="inline-block mb-6 group">
              <div className="h-14 w-auto flex items-center">
                <img
                  src="/72 ppi PNG.png"
                  alt="NIET Technology Business Incubator"
                  className="h-full w-auto object-contain transition-transform group-hover:scale-102"
                />
              </div>
            </Link>

            {/* Bold Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-[1.15] mb-4">
              Where Vision<span className="text-[#C41E3A]"> becomes</span><br /> <span className="text-[#C41E3A]">Ventures.</span>
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
              Empowering student entrepreneurs, innovators and early-stage startups with infrastructure,
              mentorship, funding and industry connections to build scalable ventures and create lasting impact.
            </p>
          </div>

          {/* Right Navigation Columns (EXPLORE, INCUBATION, ABOUT) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2">

            {/* Explore Column */}
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.18em] text-neutral-900 uppercase">
                EXPLORE
              </h3>
              <div className="w-6 h-[2px] bg-[#C41E3A] mt-1 mb-4" />
              <ul className="space-y-2.5">
                {exploreLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-xs sm:text-[13.5px] text-neutral-600 hover:text-[#C41E3A] transition-colors block py-0.5 font-normal"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Incubation Column */}
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.18em] text-neutral-900 uppercase">
                INCUBATION
              </h3>
              <div className="w-6 h-[2px] bg-[#C41E3A] mt-1 mb-4" />
              <ul className="space-y-2.5">
                {incubationLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-xs sm:text-[13.5px] text-neutral-600 hover:text-[#C41E3A] transition-colors block py-0.5 font-normal"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Column */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-[11px] font-bold tracking-[0.18em] text-neutral-900 uppercase">
                ABOUT
              </h3>
              <div className="w-6 h-[2px] bg-[#C41E3A] mt-1 mb-4" />
              <ul className="space-y-2.5">
                {aboutLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-xs sm:text-[13.5px] text-neutral-600 hover:text-[#C41E3A] transition-colors block py-0.5 font-normal"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* ── Middle Row: Contact Info + Follow Us + Stay Updated (Same Horizontal Level) ── */}
        <div className="border-t border-gray-100 pt-8 pb-2 sm:pb-3 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-8 items-start">

          {/* 1. Contact Information */}
          <div className="md:col-span-5 lg:col-span-4 space-y-3.5">
            <a
              href="mailto:incubation@niet.co.in"
              className="flex items-center gap-3.5 text-xs sm:text-sm text-neutral-700 hover:text-[#C41E3A] transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-[#C41E3A] shrink-0 group-hover:bg-[#C41E3A] group-hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-medium">incubation@niet.co.in</span>
            </a>

            <a
              href="tel:+918448384615"
              className="flex items-center gap-3.5 text-xs sm:text-sm text-neutral-700 hover:text-[#C41E3A] transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-[#C41E3A] shrink-0 group-hover:bg-[#C41E3A] group-hover:text-white transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-medium">+91 84483 84615</span>
            </a>

            <div className="flex items-start gap-3.5 text-xs sm:text-sm text-neutral-700">
              <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-[#C41E3A] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-medium leading-relaxed">
                19, Knowledge Park II,<br />
                Greater Noida, Uttar Pradesh 201306
              </span>
            </div>
          </div>

          {/* 2. Follow Us */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-[11px] font-bold tracking-[0.18em] text-neutral-900 uppercase">
              FOLLOW US
            </h3>
            <div className="w-7 h-[2px] bg-[#C41E3A] mt-1 mb-4" />
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-[#fdf8f8] hover:bg-[#C41E3A] text-neutral-700 hover:text-white border border-gray-200/80 hover:border-[#C41E3A] flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 3. Stay Updated (with vertical border divider on desktop) */}
          <div className="md:col-span-4 lg:col-span-5 md:border-l md:border-gray-200/90 md:pl-8 lg:pl-10">
            <h3 className="text-[11px] font-bold tracking-[0.18em] text-neutral-900 uppercase">
              STAY UPDATED
            </h3>
            <div className="w-7 h-[2px] bg-[#C41E3A] mt-1 mb-4" />

            <form onSubmit={handleSubscribe} className="max-w-md">
              <div className="flex items-center rounded-full border border-gray-200/90 bg-white p-1 pl-4 md:pl-5 shadow-sm focus-within:border-[#C41E3A] focus-within:ring-2 focus-within:ring-[#C41E3A]/15 transition-all">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 outline-none bg-transparent"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to updates"
                  className="w-8 h-8 rounded-full bg-[#C41E3A] hover:bg-[#a81630] text-white flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] sm:text-xs text-neutral-500 mt-2.5 font-normal">
                {subscribed
                  ? "Thank you! You've been subscribed to updates."
                  : "Get the latest updates on programs, events and opportunities."}
              </p>
            </form>
          </div>

        </div>

      </div>

      {/* ── Campus Aerial Banner Section (`nietbg.jpeg`) with Green Grass & Soft White Overlay ── */}
      <div className="relative w-full overflow-hidden">
        <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px]">
          <Image
            src="/nietbg.jpeg"
            alt="NIET Campus with Green Grounds, Greater Noida"
            fill
            className="object-cover object-[center_35%]"
            priority
          />

          {/* Light white overlay across the entire background image */}
          <div className="absolute inset-0 bg-white/15 pointer-events-none" />

          {/* Smooth fade from top white section into the image */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none" />

          {/* Soft fade at the bottom connecting to the copyright bar */}
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* ── Bottom Copyright Bar ── */}
      <div className="relative z-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">

          {/* Copyright notice */}
          <p className="text-center sm:text-left text-[12px] text-neutral-500 m-0">
            © 2026 NIET Technology Business Incubator. All rights reserved.
          </p>

          {/* Policy Links */}
          <div className="flex items-center gap-3 text-[12px]">
            <Link href="/privacy" className="hover:text-[#C41E3A] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-neutral-300">|</span>
            <Link href="/terms" className="hover:text-[#C41E3A] transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-neutral-300">|</span>
            <Link href="/sitemap" className="hover:text-[#C41E3A] transition-colors">
              Sitemap
            </Link>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[12px] text-neutral-600 hover:text-[#C41E3A] group transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-neutral-600 group-hover:border-[#C41E3A] group-hover:text-[#C41E3A] group-hover:bg-red-50/50 transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
            <span className="font-medium">Back to top</span>
          </button>

        </div>
      </div>
    </footer>
  );
}
