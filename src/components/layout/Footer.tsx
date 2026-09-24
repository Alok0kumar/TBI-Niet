"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, ArrowUp } from "lucide-react";

// ── Custom SVG icons ──────────────────────────────────────────────────────────

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

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  );
}

// ── Link data ──────────────────────────────────────────────────────────────────

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About TBI" },
  { href: "/programs-events", label: "Programs" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/mentors", label: "Mentors" },
  { href: "/news", label: "News & Events" },
  { href: "/contact", label: "Contact" },
];

const incubationLinks = [
  { href: "/apply", label: "Apply for Incubation" },
  { href: "/incubation", label: "Incubation Model" },
  { href: "/portfolio", label: "Portfolio Startups" },
  { href: "/mentors", label: "Mentors" },
  { href: "/resources", label: "Resources" },
  { href: "/faqs", label: "FAQs" },
];

const aboutLinks = [
  { href: "/about", label: "About Us" },
  { href: "/about#impact", label: "Our Impact" },
  { href: "/about#team", label: "Team" },
  { href: "/about#campus-innovation", label: "Campus Innovation" },
  { href: "/about#collaborations", label: "Collaborations" },
  { href: "/careers", label: "Careers" },
];

const socialLinks = [
  { href: "https://linkedin.com", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "https://x.com", label: "X (Twitter)", Icon: XIcon },
  { href: "https://instagram.com", label: "Instagram", Icon: InstagramIcon },
  { href: "https://youtube.com", label: "YouTube", Icon: YoutubeIcon },
];

// ── Component ──────────────────────────────────────────────────────────────────

export default function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return(
    <footer style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url('/niet-campus-aerial.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", fontFamily: "'Inter','Segoe UI',sans-serif", overflow: "hidden", borderTop: "1px solid #f0f0f0" }}>

      {/* ── Top content area ── */}
      <div style={{ paddingTop: 60 }}>
        <div className="ftr-section-pad">

      <div className="relative container-custom pt-24 md:pt-32 lg:pt-40 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="h-10 w-auto overflow-hidden flex items-center">
                <Image src="/tbi-new-logo.jpeg" alt="NIET Technology Business Incubator" width={200} height={40} className="h-full w-auto object-contain" />
              </div>
            </Link>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-sm mb-6">
              NIET Technology Business Incubator — MSME-approved, Greater
              Noida&apos;s premier launchpad for student startups, regional
              innovators, and deep-tech ventures.
            </p>
            <div className="flex flex-col gap-3.5">
              <a
                href="mailto:incubation@niet.co.in"
                className="flex items-center gap-3 text-sm text-zinc-300 hover:text-accent transition-colors w-fit"
              >
                <Mail className="w-4 h-4 text-accent" />
                incubation@niet.co.in
              </a>
              <a
                href="tel:+918448384615"
                className="flex items-center gap-3 text-sm text-zinc-300 hover:text-accent transition-colors w-fit"
              >
                <Phone className="w-4 h-4 text-accent" />
                +91-8448384615
              </a>
              <div className="flex items-start gap-3 text-sm text-zinc-300">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>
                  19, Knowledge Park II,
                  <br />
                  Greater Noida, UP
                </span>
              </div>
            </div>
          </div>

            {/* Explore */}
            <div>
              <h4 className="ftr-col-heading">EXPLORE</h4>
              <ul className="ftr-link-list">
                {exploreLinks.map((l) => (
                  <li key={l.href}><Link href={l.href} className="ftr-link">{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Incubation */}
            <div>
              <h4 className="ftr-col-heading">INCUBATION</h4>
              <ul className="ftr-link-list">
                {incubationLinks.map((l) => (
                  <li key={l.href}><Link href={l.href} className="ftr-link">{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="ftr-col-heading">ABOUT</h4>
              <ul className="ftr-link-list">
                {aboutLinks.map((l) => (
                  <li key={l.href}><Link href={l.href} className="ftr-link">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid #eee", margin: "8px 0" }} />

          {/* Row 2: social + newsletter */}
          <div className="ftr-bottom-grid">
            {/* Follow Us */}
            <div>
              <h4 className="ftr-col-heading">FOLLOW US</h4>
              <div style={{ display: "flex", gap: 10, marginTop: 4, flexWrap: "wrap" }}>
                {socialLinks.map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="ftr-social-btn">
                    <Icon width={17} height={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Stay Updated */}
            <div>
              <h4 className="ftr-col-heading">STAY UPDATED</h4>
              <form
                style={{ display: "flex", border: "1.5px solid #ddd", borderRadius: 6, overflow: "hidden", maxWidth: 420 }}
                onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
                className="ftr-newsletter-form"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ flex: 1, border: "none", outline: "none", padding: "10px 14px", fontSize: 13.5, color: "#333", background: "#fff" }}
                />
                <button type="submit" className="ftr-newsletter-btn" aria-label="Subscribe">
                  <ArrowRight size={18} />
                </button>
              </form>
              <p style={{ fontSize: 12, color: "#C41E3A", marginTop: 8 }}>
                Get the latest updates on programs, events and opportunities.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

      {/* ── Campus aerial photo banner ── */}
      <div style={{ position: "relative", width: "100%", height: 220, overflow: "hidden" }}>
        <Image
          src="/niet-campus-aerial.jpg"
          alt="NIET Campus, Greater Noida — aerial view"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        {/* Top fade */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to bottom, #fff 0%, transparent 100%)", pointerEvents: "none" }} />
        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top, rgba(255,255,255,0.85) 0%, transparent 100%)", pointerEvents: "none" }} />
      </div>

      {/* ── Partner logos strip ── */}
      <div style={{ borderTop: "1px solid #eee" }} className="ftr-section-pad" >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap", padding: "22px 0" }}>
          <Image src="/msme.webp" alt="Ministry of MSME, Government of India" width={110} height={44} style={{ objectFit: "contain", height: 42, width: "auto", opacity: 0.85 }} />
          <Image src="/startup india.webp" alt="#startupindia" width={130} height={44} style={{ objectFit: "contain", height: 36, width: "auto", opacity: 0.85 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 8, opacity: 0.8 }}>
            <span style={{ fontSize: 22, color: "#555" }}>⚙</span>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#333", letterSpacing: "0.04em", lineHeight: 1.4 }}>INNOVATION CELL<br /><span style={{ fontWeight: 400, color: "#777", fontSize: 10 }}>Government of India</span></div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1, opacity: 0.85 }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: "#1a3a6b", letterSpacing: "-0.02em" }}>G20</span>
            <span style={{ fontSize: 10, color: "#666", lineHeight: 1.2 }}>भारत 2023 INDIA</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, opacity: 0.85 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#e5243b", letterSpacing: "0.06em", lineHeight: 1.3 }}>SUSTAINABLE<br />DEVELOPMENT<br />GOALS</span>
          </div>
        </div>
      </div>

      {/* ── Red accent divider ── */}
      <div style={{ height: 3, background: "linear-gradient(90deg,#C41E3A 0%,#DC143C 100%)" }} />

      {/* ── Copyright bar ── */}
      <div className="ftr-copyright-bar ftr-section-pad">
        <p style={{ fontSize: 12.5, color: "#666", margin: 0 }}>
          © {new Date().getFullYear()} NIET Technology Business Incubator. All rights reserved.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <Link href="/privacy" className="ftr-legal-link">Privacy Policy</Link>
          <span style={{ color: "#ccc" }}>|</span>
          <Link href="/terms" className="ftr-legal-link">Terms &amp; Conditions</Link>
          <span style={{ color: "#ccc" }}>|</span>
          <Link href="/sitemap" className="ftr-legal-link">Sitemap</Link>
        </div>
        <button onClick={scrollToTop} className="ftr-back-top" aria-label="Back to top">
          <ArrowUp size={13} />
          Back to top
        </button>
      </div>

      {/* ── Scoped CSS ── */}
      <style>{`
        /* Shared responsive horizontal padding */
        .ftr-section-pad {
          padding-left: 40px;
          padding-right: 40px;
        }
        @media (max-width: 1024px) {
          .ftr-section-pad { padding-left: 24px; padding-right: 24px; }
        }
        @media (max-width: 600px) {
          .ftr-section-pad { padding-left: 16px; padding-right: 16px; }
        }

        /* Top grid */
        .ftr-top-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 36px;
        }
        @media (max-width: 1024px) { .ftr-top-grid { grid-template-columns: 1fr 1fr; gap: 32px; } }
        @media (max-width: 600px)  { .ftr-top-grid { grid-template-columns: 1fr; gap: 28px; } }

        /* Bottom grid */
        .ftr-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          padding: 32px 0 52px;
        }
        @media (max-width: 600px) { .ftr-bottom-grid { grid-template-columns: 1fr; gap: 28px; } }

        /* Heading */
        .ftr-col-heading {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.17em;
          color: #111;
          margin: 0 0 14px;
          padding: 0;
        }

        /* Nav links */
        .ftr-link-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 9px; }
        .ftr-link { font-size: 13.5px; color: #555; text-decoration: none; transition: color 0.2s; }
        .ftr-link:hover { color: #C41E3A; }

        /* Contact items */
        .ftr-contact-item {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13.5px;
          color: #333;
          text-decoration: none;
          transition: color 0.2s;
        }
        .ftr-contact-item:hover { color: #C41E3A; }

        /* Social buttons */
        .ftr-social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px; height: 40px;
          border-radius: 50%;
          background: #f5f5f5;
          color: #C41E3A;
          border: 1.5px solid #e8e8e8;
          transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.18s;
          text-decoration: none;
        }
        .ftr-social-btn:hover {
          background: #C41E3A; color: #fff; border-color: #C41E3A; transform: translateY(-2px);
        }

        /* Newsletter */
        .ftr-newsletter-form:focus-within { border-color: #C41E3A !important; }
        .ftr-newsletter-btn {
          background: #C41E3A; color: #fff; border: none; padding: 0 16px;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .ftr-newsletter-btn:hover { background: #a01830; }

        /* Copyright bar */
        .ftr-copyright-bar {
          background: transparent;
          padding-top: 18px;
          padding-bottom: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          border-top: 1px solid #f0f0f0;
        }
        .ftr-legal-link { font-size: 12.5px; color: #555; text-decoration: none; transition: color 0.2s; }
        .ftr-legal-link:hover { color: #C41E3A; }
        .ftr-back-top {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12.5px; color: #555; background: none;
          border: 1.5px solid #ddd; border-radius: 50px; padding: 6px 14px;
          cursor: pointer; transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .ftr-back-top:hover { color: #C41E3A; border-color: #C41E3A; background: #fff5f6; }
      `}</style>
    </footer>
  );
}
