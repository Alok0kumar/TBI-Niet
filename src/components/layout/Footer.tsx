import Link from "next/link";
import { Rocket, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

// Custom inline Instagram icon to bypass lucide export issues in this build environment
function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Custom inline LinkedIn icon
function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Custom inline Twitter icon
function Twitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs-events", label: "Programs" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

const incubationLinks = [
  { href: "/apply", label: "Apply" },
  { href: "/incubation", label: "Incubation Model" },
  { href: "/incubation#startups", label: "Startups" },
  { href: "/mentors", label: "Mentors" },
];

const ecellLinks = [
  { href: "/ecell", label: "About E-Cell" },
  { href: "/ecell/events", label: "Events" },
  { href: "/ecell/team", label: "Team" },
  { href: "/ecell/join", label: "Join" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#030303] overflow-hidden">
      {/* Sleek top border line with glowing red accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <div className="relative container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-white p-0.5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <Image src="/TBI-logo.jpeg" alt="NIET TBI Logo" width={36} height={36} className="object-cover rounded-lg w-full h-full" />
              </div>
              <span className="font-[family-name:var(--font-display)] font-bold text-xl text-white tracking-tight">
                NIET TBI
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm mb-6">
              NIET Technology Business Incubator — MSME-approved, Greater
              Noida&apos;s premier launchpad for student startups, regional
              innovators, and deep-tech ventures.
            </p>
            <div className="flex flex-col gap-3.5">
              <a
                href="mailto:incubation@niet.co.in"
                className="flex items-center gap-3 text-sm text-text-muted hover:text-accent transition-colors w-fit"
              >
                <Mail className="w-4 h-4 text-accent/80" />
                incubation@niet.co.in
              </a>
              <a
                href="tel:+918448384615"
                className="flex items-center gap-3 text-sm text-text-muted hover:text-accent transition-colors w-fit"
              >
                <Phone className="w-4 h-4 text-accent/80" />
                +91-8448384615
              </a>
              <div className="flex items-start gap-3 text-sm text-text-muted">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent/80" />
                <span>
                  19, Knowledge Park II,
                  <br />
                  Greater Noida, UP
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-medium tracking-[0.2em] text-white/50 mb-5 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Incubation */}
          <div>
            <h4 className="text-xs font-mono font-medium tracking-[0.2em] text-white/50 mb-5 uppercase">
              Incubation
            </h4>
            <ul className="space-y-3.5">
              {incubationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* E-Cell */}
          <div>
            <h4 className="text-xs font-mono font-medium tracking-[0.2em] text-white/50 mb-5 uppercase">
              E-Cell
            </h4>
            <ul className="space-y-3.5">
              {ecellLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Badges + Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/70 bg-white/[0.02] px-3.5 py-1.5 rounded-full border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_var(--color-accent)]" />
                MSME Approved
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/70 bg-white/[0.02] px-3.5 py-1.5 rounded-full border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_var(--color-accent)]" />
                Startup India
              </span>
            </div>
            
            {/* Socials & Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex items-center gap-4">
                <a href="#" className="text-text-muted hover:text-accent transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="text-text-muted hover:text-accent transition-colors" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-text-muted hover:text-accent transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-text-muted font-mono">
                © {new Date().getFullYear()} NIET TBI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
