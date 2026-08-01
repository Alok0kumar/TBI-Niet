import { ShieldCheck, Cloud, Monitor, CalendarClock } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    label: "MSME Recognized",
    subtext: "Govt. of India",
  },
  {
    icon: Monitor,
    label: "Technology Support",
    subtext: "Cloud Partners",
  },
  {
    icon: Cloud,
    label: "Infrastructure",
    subtext: "Modern Facilities",
  },
  {
    icon: CalendarClock,
    label: "Proven Track Record",
    subtext: "50+ Startups",
  },
];

export default function TrustStrip() {
  return (
    <section
      className="w-full bg-[#F3F1ED] border-b border-gray-200/60"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-0 md:h-[72px] flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-y-3">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center">
              {/* Divider (before each item except the first) */}
              {index > 0 && (
                <div className="hidden md:block w-px h-8 bg-gray-300/70 mr-6 lg:mr-10" />
              )}

              <div className="flex items-center gap-2.5 px-3 md:px-0">
                <Icon className="w-5 h-5 text-neutral-500 flex-shrink-0" strokeWidth={1.6} />
                <div className="flex flex-col leading-tight">
                  <span className="text-[13px] font-semibold text-neutral-700 tracking-tight">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-neutral-400 font-medium">
                    {item.subtext}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
