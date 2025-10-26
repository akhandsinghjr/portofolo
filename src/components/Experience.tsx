import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Cisco",
      location: "Bengaluru, Karnataka, India · On-site",
      period: "May 2025 - Jul 2025 · 3 mos",
      logo: "/cisco-logo.png",
      description: [
        "Worked on an intelligent system that detects contract and policy anomalies in ACI systems for inter EPG/ESG/vzany/L3out Communication",
        "Integrated a RAG system based on ACI White papers for recommending amendments in the policies"
      ],
      technologies: ["Python", "RAG", "ACI", "Policy Analysis", "AI/ML"]
    },
    {
      title: "Game Developer Intern",
      company: "AiCade",
      location: "Remote",
      period: "Oct 2024 - Nov 2024 · 2 mos",
      logo: "/aicade_logo.jpg",
      description: [
        "Worked on Phaser 3 JS to automate the making of in-browser games on given prompts to the tool",
        "Developed automated game generation pipeline using JavaScript frameworks"
      ],
      technologies: ["Phaser 3", "JavaScript", "Game Development", "Automation"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 bg-black">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="section-heading text-[#a9b1d6] mb-8">
          <span className="text-[#7aa2f7] font-mono">02.</span> Experience
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a1b26] rounded-lg shadow-2xl overflow-hidden"
        >
          {/* Window Header */}
          <div className="h-10 flex items-center px-4 bg-[#24283b] border-b border-[#414868]">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#f7768e]"></div>
              <div className="h-3 w-3 rounded-full bg-[#e0af68]"></div>
              <div className="h-3 w-3 rounded-full bg-[#9ece6a]"></div>
            </div>
            <div className="text-xs text-center flex-1 text-gray-400 font-mono">
              experience@iitpatna: ~/career
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 border border-[#414868] rounded-lg p-6 hover:border-[#7aa2f7] transition-all duration-300 hover:shadow-lg hover:shadow-[#7aa2f7]/10"
              >
                {/* Company Logo */}
                <div className="flex items-start justify-center lg:justify-start">
                  <div className="w-40 h-40 bg-[#24283b] rounded-lg border border-[#414868] flex items-center justify-center overflow-hidden hover:border-[#7aa2f7] transition-colors flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain p-4 rounded-lg"
                      onError={(e) => {
                        // Fallback if logo doesn't load
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="flex flex-col items-center justify-center text-[#565f89] p-4">
                              <svg class="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              <span class="text-xs text-center font-mono">${exp.company}</span>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Experience Details */}
                <div className="flex flex-col min-w-0">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-grow min-w-0">
                      <h3 className="text-xl font-semibold text-[#7aa2f7] mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-[#a9b1d6] mb-2">
                        <span className="font-medium text-lg">{exp.company}</span>
                        {exp.location && (
                          <>
                            <span className="text-[#565f89]">•</span>
                            <span className="flex items-center gap-1 text-[#565f89] text-sm">
                              <MapPin className="w-3 h-3 flex-shrink-0" />
                              {exp.location}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#7aa2f7] font-mono text-sm bg-[#24283b] px-3 py-1.5 rounded border border-[#414868] flex-shrink-0">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-[#a9b1d6] flex items-start gap-3">
                        <span className="text-[#7aa2f7] mt-1.5 flex-shrink-0">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#24283b] text-[#7aa2f7] text-xs font-mono rounded border border-[#414868] hover:border-[#7aa2f7] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Terminal-style footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="border border-[#414868] rounded-lg p-4 font-mono text-sm bg-[#24283b]"
            >
              <div className="flex items-center gap-2 text-[#a9b1d6]">
                <span className="text-[#7aa2f7]">$</span>
                <span className="text-[#565f89]">cat experience.log | tail -n 1</span>
              </div>
              <div className="text-[#565f89] mt-2 ml-4">
                {experiences.length} position{experiences.length !== 1 ? 's' : ''} • Continuously learning and growing
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
