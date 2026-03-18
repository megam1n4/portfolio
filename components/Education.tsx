"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50/50 dark:bg-zinc-900/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-5xl font-bold mb-16 tracking-tight"
        >
          Education<span className="text-blue-500">.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm flex flex-col hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{edu.degree}</h3>
              <h4 className="text-lg text-blue-500 font-medium mb-4">{edu.institution}</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm font-mono bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full">{edu.period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{edu.details}</p>
              
              {edu.reportUrl && (
                <div className="mb-6">
                  <a href={edu.reportUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-blue-50 dark:bg-blue-500/10 px-4 py-2 rounded-lg border border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-800">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    View Project Report
                  </a>
                </div>
              )}
              
              {edu.courses && (
                <div className="mt-auto">
                  <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Key Coursework</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span key={i} className="text-xs font-medium bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-400 px-3 py-1.5 rounded-md">{course}</span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
