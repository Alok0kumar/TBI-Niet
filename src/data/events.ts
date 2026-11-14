// Centralized event & news data — single source of truth
// Used by the combined News & Events page and the home NewsGrid.
//
// NOTE: This file is intentionally defensive — every consumer component
// should treat this data as potentially incomplete (missing image, odd
// category, etc.) and render sensible fallbacks rather than crashing.

export type EventCategory =
  | "All"
  | "Summit"
  | "Hackathon"
  | "Workshop"
  | "Competition"
  | "Talk"
  | "Networking";

export type EventStatus = "upcoming" | "past";

/** Visual treatment used for the CSS/SVG-crafted "photo" on featured cards. */
export type EventVisual = "poster" | "crowd" | "panel" | "grid";

export interface EventItem {
  id: string;
  name: string;
  type: EventCategory;
  status: EventStatus;
  /** Sortable ISO date (YYYY-MM-DD) — used for chronological ordering. */
  isoDate: string;
  date: string;
  day: string;
  month: string;
  year: string;
  participants: string;
  location: string;
  time: string;
  description: string;
  gradient: string;
  /** Whether this event is spotlighted in the "Featured Events" rail. */
  featured?: boolean;
  /** Which stand-in "photo" treatment to render for featured cards. */
  visual?: EventVisual;
  image?: string;
}

export const eventCategories: EventCategory[] = [
  "All",
  "Summit",
  "Hackathon",
  "Workshop",
  "Competition",
  "Talk",
  "Networking",
];

/** Slimmer filter set shown in the top "Explore" bar, matching the reference design. */
export const exploreCategories: EventCategory[] = [
  "All",
  "Summit",
  "Hackathon",
  "Workshop",
  "Competition",
];

export const allEvents: EventItem[] = [
  {
    id: "botnova-workshop",
    name: "BotNova Robotics Workshop",
    type: "Workshop",
    status: "upcoming",
    isoDate: "2026-10-26",
    date: "Oct 26, 2026",
    day: "26",
    month: "OCT 2026",
    year: "2026",
    participants: "120+",
    location: "Lab 001, Block D (Basement)",
    time: "1:40 PM – 5:00 PM",
    description: "Hands-on learning. Real world applications.",
    gradient: "from-accent to-accent-warm",
  },
  {
    id: "innovation-summit",
    name: "NIET Innovation Summit",
    type: "Summit",
    status: "upcoming",
    isoDate: "2026-11-12",
    date: "Nov 12, 2026",
    day: "12",
    month: "NOV 2026",
    year: "2026",
    participants: "500+",
    location: "Hybrid — Main Auditorium",
    time: "10:00 AM – 5:00 PM",
    description: "Bringing founders, investors and students together.",
    gradient: "from-accent-warm to-rose-500",
    featured: true,
    visual: "poster",
  },
  {
    id: "build-for-bharat",
    name: "Build for Bharat Hackathon",
    type: "Hackathon",
    status: "upcoming",
    isoDate: "2026-11-28",
    date: "Nov 28, 2026",
    day: "28",
    month: "NOV 2026",
    year: "2026",
    participants: "300+",
    location: "Innovation Hub, Grand Hall",
    time: "10:00 AM – 5:00 PM",
    description: "Solve. Build. Create Impact.",
    gradient: "from-purple-500 to-pink-500",
    featured: true,
    visual: "crowd",
  },
  {
    id: "future-founders-forum",
    name: "Future Founders Forum",
    type: "Talk",
    status: "upcoming",
    isoDate: "2026-12-05",
    date: "Dec 05, 2026",
    day: "05",
    month: "DEC 2026",
    year: "2026",
    participants: "250+",
    location: "Online & Campus",
    time: "10:00 AM – 5:00 PM",
    description: "Founders-in-the-making share what they're building.",
    gradient: "from-slate-700 to-slate-900",
    featured: true,
    visual: "panel",
  },
  {
    id: "e-cell-orientation",
    name: "E-Cell Orientation",
    type: "Networking",
    status: "upcoming",
    isoDate: "2026-12-22",
    date: "Dec 22, 2026",
    day: "22",
    month: "DEC 2026",
    year: "2026",
    participants: "400+",
    location: "NIET Auditorium",
    time: "10:00 AM – 1:00 PM",
    description: "Reimagining the next wave of changemakers.",
    gradient: "from-accent to-accent-warm",
  },
  {
    id: "startup-pitch-day",
    name: "Startup Pitch Day",
    type: "Competition",
    status: "upcoming",
    isoDate: "2027-01-10",
    date: "Jan 10, 2027",
    day: "10",
    month: "JAN 2027",
    year: "2027",
    participants: "150+",
    location: "NIET TBI Arena",
    time: "2:00 PM – 6:00 PM",
    description: "Students. Ideas. Real conversations.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "design-sprint-weekend",
    name: "Design Sprint Weekend",
    type: "Workshop",
    status: "upcoming",
    isoDate: "2027-01-24",
    date: "Jan 24, 2027",
    day: "24",
    month: "JAN 2027",
    year: "2027",
    participants: "80+",
    location: "TBI Design Lab",
    time: "9:00 AM – 4:00 PM",
    description: "From sketch to clickable prototype in 48 hours.",
    gradient: "from-sky-500 to-indigo-500",
  },
  {
    id: "entrepreneurship-talk",
    name: "Entrepreneurship Talk Series",
    type: "Talk",
    status: "past",
    isoDate: "2025-08-10",
    date: "Aug 10, 2025",
    day: "10",
    month: "AUG 2025",
    year: "2025",
    participants: "200+",
    location: "NIET Seminar Hall",
    time: "11:00 AM – 2:00 PM",
    description: "Insights from industry leaders.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: "e-summit-2025",
    name: "E-Summit 2025",
    type: "Summit",
    status: "past",
    isoDate: "2025-03-15",
    date: "Mar 15, 2025",
    day: "15",
    month: "MAR 2025",
    year: "2025",
    participants: "1000+",
    location: "NIET Campus",
    time: "9:00 AM – 6:00 PM",
    description:
      "Annual flagship entrepreneurship summit with keynotes, competitions, and networking.",
    gradient: "from-accent to-accent-warm",
  },
  {
    id: "hacknova-3",
    name: "HackNova 3.0",
    type: "Hackathon",
    status: "past",
    isoDate: "2025-02-20",
    date: "Feb 20, 2025",
    day: "20",
    month: "FEB 2025",
    year: "2025",
    participants: "300+",
    location: "NIET Labs",
    time: "9:00 AM – 9:00 PM",
    description:
      "36-hour hackathon for building tech solutions to real-world problems.",
    gradient: "from-accent-warm to-rose-500",
  },
  {
    id: "pitch-perfect",
    name: "Pitch Perfect",
    type: "Competition",
    status: "past",
    isoDate: "2025-01-10",
    date: "Jan 10, 2025",
    day: "10",
    month: "JAN 2025",
    year: "2025",
    participants: "150+",
    location: "NIET Auditorium",
    time: "2:00 PM – 5:00 PM",
    description: "Startup pitch competition with ₹1L prize pool and investor jury.",
    gradient: "from-purple-500 to-pink-500",
  },
];

export const heroStats = [
  { value: "5K+", label: "Participants" },
  { value: "100+", label: "Ideas Nurtured" },
];

/** Featured events, chronologically sorted. Falls back to an empty array — never throws. */
export function getFeaturedEvents(limit = 3): EventItem[] {
  try {
    return [...allEvents]
      .filter((e) => e.featured && e.status === "upcoming")
      .sort((a, b) => a.isoDate.localeCompare(b.isoDate))
      .slice(0, limit);
  } catch {
    return [];
  }
}

/** Next upcoming, non-featured events for the "Upcoming Events" preview strip. */
export function getUpcomingPreview(limit = 2): EventItem[] {
  try {
    return [...allEvents]
      .filter((e) => e.status === "upcoming" && !e.featured)
      .sort((a, b) => a.isoDate.localeCompare(b.isoDate))
      .slice(0, limit);
  } catch {
    return [];
  }
}
