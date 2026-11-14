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
export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
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
        
      >
        <div className="max-w-full px-4 md:px-8 w-full flex justify-between items-center">

          {/* Left: Logo & Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 sm:h-[58px] md:h-16 w-auto transition-transform duration-300 group-hover:scale-105">
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
              className={`text-sm font-medium transition-colors nav-link-underline py-2 ${pathname === "/" ? "text-[#C41E3A] active" : "text-neutral-600 hover:text-[#C41E3A]"
                }`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`text-sm font-medium transition-colors nav-link-underline py-2 ${
                pathname === "/about"
                  ? "text-[#C41E3A] active"
                  : "text-neutral-600 hover:text-[#C41E3A]"
              }`}
              href="/about"
            >
              Who we are
            </Link>

            {/* Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setIsProgramsOpen(true)}
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-[#C41E3A] transition-colors cursor-pointer">
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
                            className="flex items-center gap-3 px-4 py-3 rounded-none hover:bg-gray-100 text-neutral-700 hover:text-[#C41E3A] transition-all"
                            href={item.href}
                          >
                            <Icon className="w-5 h-5 text-[#C41E3A]/80" />
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
              className={`text-sm font-medium transition-colors nav-link-underline py-2 ${pathname === "/portfolio" ? "text-[#C41E3A] active" : "text-neutral-600 hover:text-[#C41E3A]"
                }`}
              href="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              className={`text-sm font-medium transition-colors nav-link-underline py-2 ${pathname === "/mentors" ? "text-[#C41E3A] active" : "text-neutral-600 hover:text-[#C41E3A]"
                }`}
              href="/mentors"
            >
              Mentors
            </Link>
            <Link
              className={`text-sm font-medium transition-colors nav-link-underline py-2 ${pathname === "/programs-events" ? "text-[#C41E3A] active" : "text-neutral-600 hover:text-[#C41E3A]"
                }`}
              href="/programs-events"
            >
              News & Events
            </Link>
            <Link
              className={`text-sm font-medium transition-colors nav-link-underline py-2 ${pathname === "/contact" ? "text-[#C41E3A] active" : "text-neutral-600 hover:text-[#C41E3A]"
                }`}
              href="/contact"
            >
              Contact
            </Link>
            <a
              className="text-sm font-medium transition-colors nav-link-underline py-2 text-neutral-600 hover:text-[#C41E3A]"
              href="https://reservation-protal-final.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Meetspace
            </a>
          </div>

          {/* Right: CTA Split Button & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            {/* Split Button: Startup Login | Apply Now */}
            <div className="hidden md:inline-flex items-stretch rounded-full overflow-hidden border border-[#A81830] shadow-sm bg-[#C41E3A]">
              <Link
                href="/login"
                className="px-3.5 py-2 text-xs lg:text-sm font-medium text-white transition-colors duration-150 hover:bg-[#A81830] active:bg-[#7D1224] flex items-center justify-center select-none"
              >
                Startup Login
              </Link>
              <span className="w-px h-4 bg-white/35 self-center" aria-hidden="true" />
              <Link
                href="/apply"
                className="px-3.5 py-2 text-xs lg:text-sm font-medium text-white transition-colors duration-150 hover:bg-[#A81830] active:bg-[#7D1224] flex items-center justify-center gap-1.5 select-none"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 text-[#C41E3A]"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? (
                <X className="w-5 h-5 text-[#C41E3A]" />
              ) : (
                <Menu className="w-5 h-5 text-[#C41E3A]" />
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
                  className={`text-xl font-semibold py-2 ${pathname === "/" ? "text-[#C41E3A] dark:text-red-500" : "text-gray-800 dark:text-gray-200"
                    }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`text-xl font-semibold py-2 ${pathname === "/about" ? "text-[#C41E3A] dark:text-red-500" : "text-gray-800 dark:text-gray-200"
                    }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  Who we are
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
                              className="flex items-center gap-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#C41E3A] dark:hover:text-red-500"
                              onClick={() => setIsMobileOpen(false)}
                            >
                              <Icon className="w-4 h-4 text-[#C41E3A]/80 dark:text-red-500/80" />
                              <span>{item.label}</span>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/portfolio"
                  className={`text-xl font-semibold py-2 ${pathname === "/portfolio" ? "text-[#C41E3A] dark:text-red-500" : "text-gray-800 dark:text-gray-200"
                    }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="/mentors"
                  className={`text-xl font-semibold py-2 ${pathname === "/mentors" ? "text-[#C41E3A] dark:text-red-500" : "text-gray-800 dark:text-gray-200"
                    }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  Mentors
                </Link>
                <Link
                  href="/programs-events"
                  className={`text-xl font-semibold py-2 ${pathname === "/programs-events" ? "text-[#C41E3A] dark:text-red-500" : "text-gray-800 dark:text-gray-200"
                    }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/contact"
                  className={`text-xl font-semibold py-2 ${pathname === "/contact" ? "text-[#C41E3A] dark:text-red-500" : "text-gray-800 dark:text-gray-200"
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
                <div className="w-full inline-flex items-stretch rounded-full overflow-hidden border border-[#A81830] shadow-sm bg-[#C41E3A]">
                  <Link
                    href="/login"
                    className="flex-1 text-center py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#A81830] active:bg-[#7D1224] select-none"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Startup Login
                  </Link>
                  <span className="w-px h-5 bg-white/35 self-center" aria-hidden="true" />
                  <Link
                    href="/apply"
                    className="flex-1 flex items-center justify-center gap-1.5 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#A81830] active:bg-[#7D1224] select-none"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



