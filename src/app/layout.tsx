import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClientBody from "@/components/layout/ClientBody";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NIET TBI — Where Ideas Become Industries",
    template: "%s | NIET TBI",
  },
  description:
    "NIET Technology Business Incubator — MSME-approved, Greater Noida's premier launchpad for student startups, regional innovators, and deep-tech ventures.",
  keywords: [
    "NIET TBI",
    "incubator",
    "startup",
    "Greater Noida",
    "MSME",
    "E-Cell",
    "technology",
    "business incubator",
    "student startups",
  ],
  authors: [{ name: "NIET TBI" }],
  openGraph: {
    title: "NIET TBI — Where Ideas Become Industries",
    description:
      "MSME-approved incubation center in Greater Noida. Space, capital, mentorship, and community for startups.",
    type: "website",
    locale: "en_IN",
    siteName: "NIET TBI",
  },
  twitter: {
    card: "summary_large_image",
    title: "NIET TBI — Where Ideas Become Industries",
    description:
      "MSME-approved incubation center in Greater Noida. Space, capital, mentorship, and community for startups.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col noise-overlay">
        <ClientBody>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
