"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

// Custom LinkedIn SVG Icon
const LinkedinIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
  </svg>
);

// Official LinkedIn Logo Badge Component
const LinkedinFullLogo = () => (
  <div className="inline-flex items-center gap-1 hover:opacity-90 transition-opacity">
    <span className="font-sans font-bold text-[#0A66C2] text-xl tracking-tight leading-none">
      Linked
    </span>
    <svg className="w-6 h-6 text-[#0A66C2] shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
    </svg>
  </div>
);

const domains = ["All", "Tech", "Finance", "Marketing", "Legal", "Operations"];

const mentors = [
  {
    id: "1",
    name: "Cdr. Navneet Kaushik (Veteran)",
    domain: "Operations",
    company: "Indian Navy & Govt of India",
    bio: "Decisive leader and change management strategist, with a versatile career of 25+ years in the Indian Navy and the Government of India, experienced in transforming organizational effectiveness and driving customer-led technology projects from idea to delivery. Influential communicator, known for motivating teams and negotiating with international stakeholders.",
    initials: "NK",
    image: "/images/mentors/image1.jpeg",
    linkedin: "https://www.linkedin.com/in/cdr-navneet-kaushik-b9a35212"
  },
  {
    id: "2",
    name: "Dr. Renuka Sharma",
    domain: "Tech",
    company: "NIET TBI & DST",
    bio: "PhD in Virology with extensive services across educational institutes and Government Ministries. Author of 3 books, 10+ research papers, and 8 patents. Head of business incubation and government initiatives at NIET TBI, empowering women-led startups and capacity building.",
    initials: "RS",
    image: "/images/mentors/image2.jpeg",
    linkedin: "https://www.linkedin.com/in/dr-renuka-sharma-1b665528"
  },
  {
    id: "3",
    name: "Dr. V K ARORA",
    domain: "Operations",
    company: "IGDTUW-Anveshan Foundation (CEO)",
    bio: "CEO of IGDTUW-Anveshan Foundation. Instrumental in establishing NIDHI-TBI and Startup India Seed Fund Scheme (SISFS) supported incubators. Extensive experience in technology business incubation under Delhi Govt and DST, GoI.",
    initials: "VA",
    image: "/images/mentors/image3.jpeg",
    linkedin: "https://www.linkedin.com/in/vkarora"
  },
  {
    id: "4",
    name: "Mr. Hemang Vaidya",
    domain: "Finance",
    company: "GVFL (Investment Team)",
    bio: "Investment team lead at GVFL managing fund raise activity with family offices, UHNIs, and offshore funds. Drives deal sourcing, business modeling, team building, and a4X acceleration initiatives across seed to growth stage startups.",
    initials: "HV",
    image: "/images/mentors/image4.jpeg",
    linkedin: "https://www.linkedin.com/in/hemang-vaidya"
  },
  {
    id: "5",
    name: "Dr VK Rai",
    domain: "Tech",
    company: "IIT Kharagpur & Indian Navy",
    bio: "Fellow of Institution of Engineers & Chartered Engineer with 27+ years in technology, indigenisation, incubation & entrepreneurship. Alumnus of NDA, IIT Kharagpur, and IIM Ahmedabad. Medalist for innovative machinery fault diagnosis.",
    initials: "VR",
    image: "/images/mentors/image5.jpeg",
    linkedin: "https://www.linkedin.com/in/dr-vk-rai"
  },
  {
    id: "6",
    name: "Dr. Sanjeev Kumar Varshney",
    domain: "Tech",
    company: "Head - Int. Scientific Cooperation, DST",
    bio: "Head of International Scientific Cooperation at Department of Science & Technology (DST), Govt of India. Co-Chair of Indo-German Science & Technology Centre (IGSTC) and USISTEF. Member of BRICS WG and OECD Science Policy Committee.",
    initials: "SV",
    image: "/images/mentors/image6.png",
    linkedin: "https://www.linkedin.com/in/dr-sanjeev-kumar-varshney-57238b13"
  },
  {
    id: "7",
    name: "Mr. Kalyanjit Hatibaruah",
    domain: "Tech",
    company: "Web3 & Blockchain Advisor",
    bio: "Blockchain advisor and Web3 consultant guiding startups on blockchain integration, technology roadmaps, marketing, and finance. Leads Web3 initiatives for non-tech founders with a strong engineering and intern network.",
    initials: "KH",
    image: "/images/mentors/image7.jpeg",
    linkedin: "https://www.linkedin.com/in/kalyanjit"
  },
  {
    id: "8",
    name: "Mr. Vibhu Dixit",
    domain: "Operations",
    company: "IIT Bombay & Export Guru",
    bio: "Mentor at IIT Bombay, IIT Kanpur & Startup India. Founder of Export Guru & AVGROUPS. Recipient of Laghu Udyami Samman from Govt of India. Expert in international trade across Japan & Europe, ODOP speaker, and business advisor.",
    initials: "VD",
    image: "/images/mentors/image8.jpeg",
    linkedin: "https://www.linkedin.com/in/vibhu-dixit"
  },
  {
    id: "9",
    name: "Mr. Prem Sibbal",
    domain: "Finance",
    company: "Corporate Finance & Banking",
    bio: "Consultant, academician, and veteran banker with 37+ years in Corporate Finance, Credit Monitoring, Debt Restructuring, and Risk Management. Served on Corporate Debt Restructuring Forum, Mumbai, and led turnaround of subsidiary banks.",
    initials: "PS",
    image: "/images/mentors/image9.jpeg",
    linkedin: "https://www.linkedin.com/in/premsibbal"
  },
  {
    id: "10",
    name: "Dr. Pankaj Kumar Tyagi",
    domain: "Tech",
    company: "Biotech & Nanotech Specialist",
    bio: "17+ years of teaching and research experience in Biotechnology, Nano biotechnology, and Drosophila Biology. Mentors startups in deep-tech life sciences and bio-engineering innovations.",
    initials: "PT",
    image: "/images/mentors/image10.jpeg",
    linkedin: "https://www.linkedin.com/in/pankaj-kumar-tyagi-a1a69955"
  },
  {
    id: "11",
    name: "Ms. Ritu Gupta",
    domain: "Marketing",
    company: "Marketing & GTM Leader",
    bio: "Marketing specialist and mentor with 25+ years of experience across Consumer Products, BFSI, Durables, and IT. Expertise in GTM launches, data-driven marketing, consumer psychology, and women entrepreneurship mentorship.",
    initials: "RG",
    image: "/images/mentors/image11.jpeg",
    linkedin: "https://www.linkedin.com/in/ritu-gupta-a0a982158"
  },
  {
    id: "12",
    name: "Dr. Rajendra Pratap",
    domain: "Tech",
    company: "AI/ML & IC Design Lead",
    bio: "Expert in Artificial Intelligence, Machine Learning, parallel computing, and multi-core processor architecture. Worked on 9-axis motion sensor chip integration, low-power die design, and 3D IC / FPGA methodologies.",
    initials: "RP",
    image: "/images/mentors/image12.jpeg",
    linkedin: "https://www.linkedin.com/in/rajendragupta"
  },
  {
    id: "13",
    name: "Ms. Shweta Srivastava",
    domain: "Operations",
    company: "Telecom & Financial Management",
    bio: "Experienced professional with demonstrated history in the Telecom industry. Skilled in networking, negotiation, team management, project management, corporate accounting, and treasury management.",
    initials: "SS",
    image: "/images/mentors/image13.jpeg",
    linkedin: "https://www.linkedin.com/in/shweta-srivastava-b69356a"
  },
  {
    id: "14",
    name: "Prof. R.P. Maheshwari",
    domain: "Tech",
    company: "Digital Relay & Signal Processing",
    bio: "Senior professor and research specialist in Digital Protective Relay Design, Algorithm Development, Relay Testing, Digital Signal Processing, and Image Processing.",
    initials: "RM",
    image: "/images/mentors/image14.jpeg",
    linkedin: "https://www.linkedin.com/in/dr-r-p-maheshwari-1661321"
  },
  {
    id: "15",
    name: "Prof. Zainul Abbin Jaffery",
    domain: "Tech",
    company: "Jamia Millia Islamia (Professor)",
    bio: "Professor in Electrical Engineering at Jamia Millia Islamia with 70+ published research papers. Specializes in signal/image processing, computer vision for rail track inspection, and embedded system design.",
    initials: "ZJ",
    image: "/images/mentors/image15.jpeg",
    linkedin: "https://www.linkedin.com/in/zainul-a-jaffery-7a360159"
  }
];

export default function MentorsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? mentors : mentors.filter((m) => m.domain === filter);

  return (
    <>
      {/* Top Header Section */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-white">
        <div className="relative container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-[3px] h-[18px] bg-accent shadow-[0_0_8px_var(--color-accent)] rounded-full" />
              <span className="text-sm md:text-base font-mono font-bold tracking-[0.25em] text-accent uppercase pt-px">
                MENTORS & EXPERTS
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-gray-900 leading-[1.15] mb-4" style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}>
              Learn from <span className="text-accent">the industry best.</span>
            </h1>
            <p className="text-gray-500 font-sans text-base md:text-lg max-w-2xl leading-relaxed">
              A distinguished network of industry leaders, domain experts, and seasoned advisors guiding NIET TBI founders from idea to impact.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 pt-4 relative bg-gray-50/50 min-h-screen">
        <div className="container-custom max-w-[1400px]">
          {/* Domain Filter Pills */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {domains.map((d) => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  filter === d
                    ? "bg-accent text-white shadow-md shadow-accent/25"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-accent/40 hover:text-accent"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Mentors Card Grid - Wide Horizontal Card Layout */}
          <motion.div
            className="grid grid-cols-1 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={filter}
          >
            {filtered.map((mentor) => (
              <motion.div
                key={mentor.id}
                variants={fadeUp}
                className="group relative rounded-xl bg-white border border-gray-200/80 overflow-hidden flex flex-col sm:flex-row shadow-[0_4px_20px_rgba(232,16,16,0.08)] hover:shadow-[0_12px_32px_rgba(232,16,16,0.22)] transition-all duration-300 w-full"
              >
                {/* Left Photo Container (Wider) */}
                <div className="w-full sm:w-72 md:w-80 lg:w-96 shrink-0 aspect-[4/3] sm:aspect-auto sm:min-h-[240px] bg-gray-100 relative overflow-hidden flex items-center justify-center border-b sm:border-b-0 sm:border-r border-gray-100">
                  {mentor.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-white flex items-center justify-center group-hover:bg-gray-50/80 transition-colors min-h-[220px]">
                      <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-gray-300 tracking-wider">
                        {mentor.initials}
                      </span>
                    </div>
                  )}

                  {/* Domain Tag */}
                  <span className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded border border-gray-200 text-gray-600">
                    {mentor.domain}
                  </span>
                </div>

                {/* Right Content Section (Spacious Padding) */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    {/* Mentor Name (Red Accent Title) */}
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-accent text-xl md:text-2xl leading-snug mb-3 group-hover:text-red-700 transition-colors">
                      {mentor.name} <span className="text-gray-400 font-normal text-base">({mentor.company})</span>
                    </h3>

                    {/* Bio Paragraph */}
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed line-clamp-4 md:line-clamp-6 mb-6 font-sans">
                      {mentor.bio}
                    </p>
                  </div>

                  {/* LinkedIn Full Logo Button */}
                  <div className="pt-2">
                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Connect with ${mentor.name} on LinkedIn`}
                      className="inline-flex items-center transition-transform hover:scale-105 cursor-pointer shrink-0"
                    >
                      <LinkedinFullLogo />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

