"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/incubation", label: "Incubation" },
  { href: "/programs-events", label: "Programs" },
  { href: "/ecell", label: "E-Cell", badge: true },
  { href: "/news", label: "News" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const pathname = usePathname();

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
      <motion.header
        className="sticky top-1.5 left-0 w-full z-50 px-4 md:px-8 flex justify-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        <motion.nav 
          className="flex items-center justify-between bg-[#1C1C1C] rounded-full p-2 w-full shadow-2xl border border-white/5 relative"
          whileHover={{ boxShadow: "0 20px 40px -10px rgba(255, 255, 255, 0.1)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Left Icon Button */}
          <Link href="/" className="flex-shrink-0 z-10">
            <motion.div 
              className="w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-sm"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image src="/logo.jpeg" alt="NIET TBI Logo" width={48} height={48} className="object-cover w-full h-full" />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div 
            className="hidden lg:flex items-center gap-2 px-4 z-10"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              const isHovered = hoveredPath === link.href;

              return (
                <motion.div
                  key={link.href}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHoveredPath(link.href)}
                    className={`relative px-4 py-2.5 text-[15px] font-medium tracking-wide transition-colors duration-300 flex items-center gap-1.5 ${
                      isActive || isHovered ? "text-white" : "text-[#A0A0A0]"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {link.badge && (
                      <span className="relative z-10 text-[10px] font-bold bg-white/20 text-white px-1.5 py-0.5 rounded-full">
                        NEW
                      </span>
                    )}

                    {/* Hover Background Animation */}
                    {isHovered && (
                      <motion.div
                        layoutId="nav-hover-bg"
                        className="absolute inset-0 bg-white/10 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}

                    {/* Active Indicator Animation */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-indicator"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[3px] bg-white rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block flex-shrink-0 z-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-black font-semibold rounded-full text-[15px] transition-colors"
              >
                Apply Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger */}
          <motion.button
            className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-full z-10 mr-1"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.9 }}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </motion.button>
        </motion.nav>
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
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <div className="absolute inset-0 bg-[#0A0A0A]/95 backdrop-blur-xl" />
            <motion.nav
              className="relative flex flex-col items-center justify-center h-full gap-8"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
              }}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-3xl font-semibold transition-colors flex items-center gap-3 ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {link.label}
                      {link.badge && (
                        <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                          NEW
                        </span>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full text-xl"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Apply Now
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
