import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NIET TBI — Technology Business Incubator",
  description: "NIET TBI is NIET's premier incubation center in Greater Noida, supporting 75+ startups with seed funding, mentorship, workspace, and a path to market.",
};
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import StartupHighlights from "@/components/home/StartupHighlights";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import PartnersMarquee from "@/components/home/PartnersMarquee";
import NewsGrid from "@/components/home/NewsGrid";
import Testimonials from "@/components/home/Testimonials";
import ApplyCTA from "@/components/home/ApplyCTA";
import PageLoader from "@/components/ui/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Hero />
      <AboutSection />
      <StartupHighlights />
      <ProcessTimeline />
      <PartnersMarquee />
      <NewsGrid />
      <Testimonials />
      <ApplyCTA />
    </>
  );
}


