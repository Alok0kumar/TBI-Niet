"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Lightbulb,
  Compass,
  Rocket,
  Gauge,
  Coins,
  Users,
  Building2,
  ChevronDown,
  ArrowRight
} from "lucide-react";

const programItems = [
  {
    label: "Idea Validation",
    href: "/programs-events",
    icon: Lightbulb,
  },

  {
    label: "Incubation",
    href: "/incubation",
    icon: Rocket,
  },
  {
    label: "Programs",
    href: "/programs-events",
    icon: Gauge,
  },
  {
    label: "Funding Support",
    href: "/incubation",
    icon: Coins,
  },
  {
    label: "Offerings",
    href: "/incubation",
    icon: Compass,
  },
  {
    label: "Infrastructure",
    href: "/incubation",
    icon: Building2,
  },
];
const discoverItems = [
  {
    label: "Who we are",
    href: "/about",
    icon: Users,
  },
  {
    label: "Association",
    href: "/associations",
    icon: Users,
  },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsMobileProgramsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] h-[82px] flex items-center transition-all duration-300 bg-[#FAF9F6]/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm`}
        id="main-nav"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        <div className="max-w-full px-4 md:px-8 w-full flex justify-between items-center">

          {/* Left: Logo & Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-auto overflow-hidden transition-transform duration-300 group-hover:scale-105" id="logo-container">
              <img
                alt="NIET Technology Business Incubator"
                className="h-full w-auto object-contain"
                src="/72 ppi PNG.png"
              />
            </div>

          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              className={`text-sm font-medium transition-colors nav-link-underline py-2 ${pathname === "/" ? "text-[#E81010] active" : "text-neutral-600 hover:text-[#E81010]"
                }`}
              href="/"
            >
              Home
            </Link>
            <div
              className="relative py-2"
              onMouseEnter={() => setIsDiscoverOpen(true)}
              onMouseLeave={() => setIsDiscoverOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-[#E81010] transition-colors cursor-pointer">
                Discover
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDiscoverOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDiscoverOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4 z-50"
                  >
                    <div className="bg-white border border-gray-200/55 rounded-none shadow-xl overflow-hidden p-2 backdrop-blur-xl">
                      {discoverItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.label}
                            className="flex items-center gap-3 px-4 py-3 rounded-none hover:bg-gray-100 text-neutral-700 hover:text-[#E81010] transition-all"
                            href={item.href}
                          >
                            <Icon className="w-5 h-5 text-[#E81010]/80" />
                            <span className="text-xs font-medium">{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setIsProgramsOpen(true)}
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-[#E81010] transition-colors cursor-pointer">
                Entreprenuership &  Innovation
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProgramsOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isProgramsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4 z-50"
                  >
                    <div className="bg-white border border-gray-200/55 rounded-none shadow-xl overflow-hidden p-2 backdrop-blur-xl">
                      {programItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.label}
                            className="flex items-center gap-3 px-4 py-3 rounded-none hover:bg-gray-100 text-neutral-700 hover:text-[#E81010] transition-all"
                            href={item.href}
                          >
                            <Icon className="w-5 h-5 text-[#E81010]/80" />
                            <span className="text-xs font-medium">{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              className={`text-sm font-medium transition-colors nav-link-underline py-2 ${pathname.includes("#startups") ? "text-[#FA350F] active" : "text-neutral-600 hover:text-[#E81010]"
                }`}
              href="/incubation#startups"
            >
              Portfolio
            </Link>
            <Link
              className={`text-sm font-medium transition-colors nav-link-underline py-2 ${pathname === "/mentors" ? "text-[#E81010] active" : "text-neutral-600 hover:text-[#E81010]"
                }`}
              href="/mentors"
            >
              Mentors
            </Link>
            <Link
              className={`text-sm font-medium transition-colors nav-link-underline py-2 ${pathname === "/programs-events" ? "text-[#E81010] active" : "text-neutral-600 hover:text-[#E81010]"
                }`}
              href="/programs-events"
            >
              News & Events
            </Link>
            <Link
              className={`text-sm font-medium transition-colors nav-link-underline py-2 ${pathname === "/contact" ? "text-[#E81010] active" : "text-neutral-600 hover:text-[#E81010]"
                }`}
              href="/contact"
            >
              Contact
            </Link>
            <a
              className="text-sm font-medium transition-colors nav-link-underline py-2 text-neutral-600 hover:text-[#E81010]"
              href="https://reservation-protal-final.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Meetspace
            </a>
          </div>

          {/* Right: CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/apply"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A58CA] hover:bg-[#08449c] dark:bg-red-600 dark:hover:bg-red-700 text-white font-medium rounded-full text-sm transition-colors shadow-sm"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-white"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-[90] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-white dark:bg-[#0A0A0A] backdrop-blur-xl" />

            <div className="relative h-full flex flex-col pt-24 px-6 pb-8 overflow-y-auto">
              <div className="flex flex-col gap-4 text-left">
                <Link
                  href="/"
                  className={`text-xl font-semibold py-2 ${pathname === "/" ? "text-[#155DFB] dark:text-blue-500" : "text-gray-800 dark:text-gray-200"
                    }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`text-xl font-semibold py-2 ${pathname === "/about" ? "text-[#155DFB] dark:text-blue-500" : "text-gray-800 dark:text-gray-200"
                    }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  About
                </Link>

                {/* Mobile Dropdown Trigger */}
                <div>
                  <button
                    onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                    className="flex items-center justify-between w-full text-xl font-semibold py-2 text-gray-800 dark:text-gray-200"
                  >
                    <span>Programs</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileProgramsOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isMobileProgramsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4 flex flex-col gap-2 mt-2"
                      >
                        {programItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#155DFB] dark:hover:text-blue-500"
                              onClick={() => setIsMobileOpen(false)}
                            >
                              <Icon className="w-4 h-4 text-[#155DFB]/80 dark:text-blue-500/80" />
                              <span>{item.label}</span>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/incubation#startups"
                  className={`text-xl font-semibold py-2 ${pathname.includes("#startups") ? "text-[#155DFB] dark:text-blue-500" : "text-gray-800 dark:text-gray-200"
                    }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="/mentors"
                  className={`text-xl font-semibold py-2 ${pathname === "/mentors" ? "text-[#155DFB] dark:text-blue-500" : "text-gray-800 dark:text-gray-200"
                    }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  Mentors
                </Link>
                <Link
                  href="/programs-events"
                  className={`text-xl font-semibold py-2 ${pathname === "/programs-events" ? "text-[#155DFB] dark:text-blue-500" : "text-gray-800 dark:text-gray-200"
                    }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/contact"
                  className={`text-xl font-semibold py-2 ${pathname === "/contact" ? "text-[#155DFB] dark:text-blue-500" : "text-gray-800 dark:text-gray-200"
                    }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  Contact
                </Link>
                <a
                  href="https://reservation-protal-final.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold py-2 text-gray-800 dark:text-gray-200"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Book a Meetspace
                </a>
              </div>

              <div className="mt-auto pt-8">
                <Link
                  href="/apply"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 bg-[#155DFB] dark:bg-blue-600 text-white font-semibold rounded-full text-base"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
