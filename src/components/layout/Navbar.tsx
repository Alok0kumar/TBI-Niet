"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Rocket } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/incubation", label: "Incubation" },
  { href: "/programs-events", label: "Programs" },
  { href: "/ecell", label: "E-Cell", badge: true },
  { href: "/news", label: "News" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60]">
        <motion.div
          className="h-full"
          style={{
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, #00C2FF, #FF6B2B)",
          }}
        />
      </div>

      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-strong shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      >
        <nav className="container-custom flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center bg-white">
              <Image src="/logo.jpeg" alt="NIET TBI Logo" width={36} height={36} className="object-cover w-full h-full" />
            </div>
            <div>
              <span className="font-[family-name:var(--font-display)] font-bold text-lg text-white tracking-tight">
                NIET TBI
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? "text-accent"
                      : "text-text-muted hover:text-white"
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="text-[10px] font-bold bg-accent/15 text-accent px-1.5 py-0.5 rounded-full border border-accent/30">
                      NEW
                    </span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/apply"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-warm" />
              <span className="absolute inset-0 bg-gradient-to-r from-accent-warm to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative">Apply Now</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-primary/95 backdrop-blur-xl" />
            <motion.nav
              className="relative flex flex-col items-center justify-center h-full gap-6"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    className={`text-3xl font-[family-name:var(--font-display)] font-bold transition-colors flex items-center gap-3 ${
                      pathname === link.href ? "text-accent" : "text-white hover:text-accent"
                    }`}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="text-xs bg-accent/15 text-accent px-2 py-1 rounded-full border border-accent/30">
                        NEW
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-6"
              >
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-accent to-accent-warm shadow-lg shadow-accent/20"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
