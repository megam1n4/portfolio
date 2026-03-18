"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

export default function ExperienceCard() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-5xl font-bold mb-16 tracking-tight"
        >
          Where I&apos;ve Worked<span className="text-blue-500">.</span>
        </motion.h2>

        <div className="flex flex-col gap-10 md:gap-14 border-l-2 border-gray-200 dark:border-gray-800 ml-4 md:ml-0 pt-2">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 rounded-full bg-blue-500 -left-[9px] top-1.5 border-4 border-white dark:border-zinc-950 group-hover:scale-125 transition-transform duration-300 shadow-sm" />
              
              <div className="bg-white/40 dark:bg-black/40 backdrop-blur-md border border-gray-200 dark:border-gray-800 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group-hover:border-blue-500/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{exp.role}</h3>
                    <h4 className="text-lg text-blue-500 font-medium mt-1">{exp.company}</h4>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-mono font-medium bg-gray-100 dark:bg-zinc-800/50 px-4 py-2 rounded-full inline-block w-fit whitespace-nowrap border border-gray-200 dark:border-gray-800">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc leading-relaxed text-gray-600 dark:text-gray-300 space-y-3 pl-4 marker:text-blue-500">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
