"use client";

import { useRef, useState, useCallback } from "react";
import EventsHero from "@/components/events/EventsHero";
import ExploreFilterBar from "@/components/events/ExploreFilterBar";
import FeaturedEvents from "@/components/events/FeaturedEvents";
import UpcomingEventsPreview from "@/components/events/UpcomingEventsPreview";
import EventsSection from "@/components/events/EventsSection";
import type { EventCategory } from "@/data/events";

export default function EventsPageContent() {
  const [category, setCategory] = useState<EventCategory>("All");
  const archiveRef = useRef<HTMLElement | null>(null);

  const scrollToArchive = useCallback(() => {
    // Guard against the ref not being attached yet (fast clicks, SSR hydration edge cases).
    archiveRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleExploreChange = useCallback(
    (c: EventCategory) => {
      setCategory(c);
      scrollToArchive();
    },
    [scrollToArchive]
  );

  return (
    <>
      <EventsHero />
      <ExploreFilterBar active={category} onChange={handleExploreChange} />
      <FeaturedEvents onViewAll={scrollToArchive} />
      <UpcomingEventsPreview onViewCalendar={scrollToArchive} />
      <EventsSection
        ref={archiveRef}
        category={category}
        onCategoryChange={setCategory}
      />
    </>
  );
}
