import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import AboutSection from "@/components/home/AboutSection";
import ImpactStats from "@/components/home/ImpactStats";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import StartupCarousel from "@/components/home/StartupCarousel";
import PartnersMarquee from "@/components/home/PartnersMarquee";
import EcellTeaser from "@/components/home/EcellTeaser";
import NewsGrid from "@/components/home/NewsGrid";
import Testimonials from "@/components/home/Testimonials";
import ApplyCTA from "@/components/home/ApplyCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSection />
      <ImpactStats />
      <ServicesGrid />
      <ProcessTimeline />
      <StartupCarousel />
      <PartnersMarquee />
      <EcellTeaser />
      <NewsGrid />
      <Testimonials />
      <ApplyCTA />
    </>
  );
}
