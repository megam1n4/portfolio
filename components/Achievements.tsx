"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-5xl font-bold mb-16 tracking-tight"
        >
          Achievements<span className="text-blue-500">.</span>
        </motion.h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.achievements.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-800 rounded-2xl hover:border-blue-500/50 hover:shadow-md dark:hover:shadow-blue-500/5 transition-all group"
            >
              <div className="mt-1 text-blue-500 group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                  {item.text}
                </p>
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-3 text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors">
                    View Details <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
