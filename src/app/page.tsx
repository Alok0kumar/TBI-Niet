import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import StartupHighlights from "@/components/home/StartupHighlights";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import PartnersMarquee from "@/components/home/PartnersMarquee";
import NewsGrid from "@/components/home/NewsGrid";
import Testimonials from "@/components/home/Testimonials";
import ApplyCTA from "@/components/home/ApplyCTA";

export default function Home() {
  return (
    <>
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

