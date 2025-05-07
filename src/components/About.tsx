import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { User, GraduationCap, Code2, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="section-heading text-[#a9b1d6] mb-8">
        <span className="text-[#7aa2f7] font-mono">01.</span> About Me
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
            about@iitpatna: ~/profile
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Text Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-[#a9b1d6] leading-relaxed">
                  I'm a passionate Computer Science student at IIT Patna, focused on building innovative tech solutions. 
                  My journey in technology has been driven by a deep curiosity for how things work and a desire to create 
                  meaningful impact through code.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-[#7aa2f7] mt-1" />
                  <div>
                    <h3 className="text-[#7aa2f7] font-semibold">Education</h3>
                    <p className="text-[#a9b1d6]">B.Tech in Computer Science and Engineering</p>
                    <p className="text-[#565f89] text-sm">Indian Institute of Technology Patna</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Code2 className="w-5 h-5 text-[#7aa2f7] mt-1" />
                  <div>
                    <h3 className="text-[#7aa2f7] font-semibold">Technical Focus</h3>
                    <p className="text-[#a9b1d6]">Full-stack Development, System Design, Competitive Programming</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-[#7aa2f7] mt-1" />
                  <div>
                    <h3 className="text-[#7aa2f7] font-semibold">Experience</h3>
                    <p className="text-[#a9b1d6]">Software Development Intern at TechCorp</p>
                    <p className="text-[#565f89] text-sm">Summer 2023</p>
                  </div>
                </div>
              </motion.div>

              {/* LeetCode Card */}
              <Card className="mb-6 bg-[#24283b] border-[#414868] p-5 flex flex-col gap-3">
                <div className="flex items-center gap-3 mb-2">
                  <img src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" alt="LeetCode" className="w-7 h-7 rounded" />
                  <span className="text-[#f7c873] font-semibold text-lg">LeetCode Stats</span>
                </div>
                <div className="flex flex-wrap gap-6 text-[#a9b1d6] text-sm">
                  <div>
                    <span className="block text-xs text-[#565f89]">Rating</span>
                    <span className="font-bold text-lg text-[#7aa2f7]">1,823</span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#565f89]">Top Percentile</span>
                    <span className="font-bold text-lg text-[#9ece6a]">6.78%</span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#565f89]">Problems Solved</span>
                    <span className="font-bold text-lg text-[#f7768e]">453</span>
                  </div>
                </div>
                <a
                  href="https://leetcode.com/u/akhandsinghjx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-[#7aa2f7] hover:text-[#9ece6a] text-sm font-mono underline"
                >
                  View LeetCode Profile
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75V17.25M17.25 6.75H6.75M17.25 6.75L6.75 17.25" />
                  </svg>
                </a>
              </Card>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <Card className="overflow-hidden bg-[#24283b] border-[#414868] transition-all duration-300 group-hover:border-[#7aa2f7]/50 group-hover:shadow-[0_0_30px_rgba(122,162,247,0.2)]">
                <div className="relative">
                  <img
                    src="/1720381456833.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b26]/90 via-[#1a1b26]/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7aa2f7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-[#a9b1d6] text-sm font-mono"
                  >
                    <span className="text-[#7aa2f7]">$</span> cat profile.jpg
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
