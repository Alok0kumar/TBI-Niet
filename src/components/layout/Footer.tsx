import Link from "next/link";
import { Rocket, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

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
    <footer className="relative bg-surface border-t border-border overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                <Image src="/logo.jpeg" alt="NIET TBI Logo" width={36} height={36} className="object-cover w-full h-full" />
              </div>
              <span className="font-[family-name:var(--font-display)] font-bold text-xl text-white">
                NIET TBI
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm mb-6">
              NIET Technology Business Incubator — MSME-approved, Greater
              Noida&apos;s premier launchpad for student startups, regional
              innovators, and deep-tech ventures.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:incubation@niet.co.in"
                className="flex items-center gap-2.5 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                incubation@niet.co.in
              </a>
              <a
                href="tel:+918448384615"
                className="flex items-center gap-2.5 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91-8448384615
              </a>
              <div className="flex items-start gap-2.5 text-sm text-text-muted">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
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
            <h4 className="font-[family-name:var(--font-display)] font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
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
            <h4 className="font-[family-name:var(--font-display)] font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Incubation
            </h4>
            <ul className="space-y-3">
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
            <h4 className="font-[family-name:var(--font-display)] font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              E-Cell
            </h4>
            <ul className="space-y-3">
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
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-text-muted bg-card px-3 py-1.5 rounded-full border border-border">
                MSME Approved
              </span>
              <span className="text-xs font-mono text-text-muted bg-card px-3 py-1.5 rounded-full border border-border">
                Startup India
              </span>
            </div>
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} NIET Technology Business Incubator.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
