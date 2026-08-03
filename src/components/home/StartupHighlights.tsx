"use client";

import { motion } from "framer-motion";
import { slideInLeft, slideInRight, viewport } from "@/lib/animations";

const awards = [
  "Certificate of Appreciation from His Excellency High Commissioner of India to Malawi for completing the project titled 'Setting up Business Incubator at Malawi, Africa' in 2019.",
  "UDHYOGMITRA A WARD by the All-India Confederation of Small and Medium Industries Associations (AICOSMIA) in March 2021.",
  "HEP Award by Global Hindi Foundation, Singapore in September 2024.",
  "IBSEA Ratna Award by International Business Startup & Entrepreneurs Association Sep. 2025.",
  "Ecosystem Enabler Award by IIC MOE November 2025.",
];

export default function StartupHighlights() {
  return (
    <>
      {/* Section 1: Startup Circle + Highlights */}
      <section className="relative section-padding overflow-hidden bg-[#F2F2F2]" id="highlights">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Startup Circle Image */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="flex items-center justify-center"
            >
              <img
                src="/startup circle.webp"
                alt="We are in following sectors"
                className="w-full max-w-[530px] object-contain"
              />
            </motion.div>

            {/* Right: Highlights Panel */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="w-full"
            >
              <div className="bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-10 md:p-14 lg:p-16">
                <h3 className="text-center font-bold text-gray-900 text-xl md:text-2xl lg:text-3xl mb-12 tracking-tight">
                  Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                  {[
                    { number: "01.", text: "More than 100 startups incubated" },
                    { number: "02.", text: "Section-8 Company, incorporated in 2016" },
                    { number: "03.", text: "Recognised by Ministry of MSME and Department of IT & Electronics, GoUP" },
                    { number: "04.", text: "Co-working space on 24x7 basis" },
                    { number: "05.", text: "Flexible incubation model" },
                    { number: "06.", text: "Labs for prototype development" },
                  ].map((item) => (
                    <div key={item.number} className="flex gap-4 items-start">
                      <span className="text-red-600 font-extrabold text-2xl md:text-xl leading-none shrink-0 pt-0.5">
                        {item.number}
                      </span>
                      <p className="text-gray-700 text-base leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 2: TBI Head Introduction */}
      <section className="relative section-padding overflow-hidden bg-white" id="tbi-head">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">

            {/* Left: Bio + Awards */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {/* Bio */}
              <p className="text-gray-700 text-base leading-relaxed mb-10">
                Dr. Sanjay holds a PhD in Management and an MBA in HR and Marketing. He is an experienced contributor to the
                international incubation ecosystem, serving as Head/CEO, Mentor, Trainer, and Evaluator. His areas of expertise
                include Social Entrepreneurship, Business Incubation, Project Management, Entrepreneurship Development, Teaching,
                Training, and Research. He has also conducted multiple Entrepreneurship and IPR training programs.
              </p>

              {/* Awards */}
              <div>
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-5">
                  Awards &amp; Recognition
                </h4>
                <ul className="space-y-4">
                  {awards.map((award, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-red-600 shrink-0" />
                      <p className="text-gray-700 text-sm leading-relaxed">{award}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

             {/* Right: Photo + Name */}
             <motion.div
               variants={slideInRight}
               initial="hidden"
               whileInView="visible"
               viewport={viewport}
               className="flex flex-col items-start gap-4 lg:w-[260px] mx-auto lg:mx-0"
             >
               <div className="relative">
                 <img
                   src="/Dr. Sanjay Kumar.webp"
                   alt="Dr. Sanjay Kumar"
                   className="w-[220px] h-[280px] object-cover object-top relative z-10"
                 />
                 {/* Red accent block on left bottom corner */}
                 <div className="absolute -bottom-8 -left-4 w-12 h-20 bg-[#C91A25] rounded-bl-[20px] z-0" />
               </div>
               
               {/* Name and title with scroll entrance animation */}
               <motion.div
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: false, amount: 0.3 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="text-left w-full mt-4"
               >
                 <p className="text-[#C91A25] font-bold text-2xl leading-tight">Dr. Sanjay Kumar</p>
                 <p className="text-gray-800 text-sm font-medium mt-1">Head-TBI</p>
               </motion.div>
             </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
