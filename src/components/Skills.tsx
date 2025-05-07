import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Code2, 
  Database, 
  Server, 
  Layout, 
  Terminal,
  GitBranch,
  Cloud,
  Cpu,
  Globe,
  Shield
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Web Development',
    icon: Layout,
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS']
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase']
  },
  {
    title: 'DevOps & Tools',
    icon: Terminal,
    skills: ['Git', 'Docker', 'AWS', 'Linux', 'CI/CD']
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    skills: ['AWS', 'Azure', 'Google Cloud', 'Serverless']
  },
  {
    title: 'System Design',
    icon: Cpu,
    skills: ['Microservices', 'REST APIs', 'GraphQL', 'WebSockets']
  }
];

const Skills = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="section-heading text-[#a9b1d6] mb-8">
        <span className="text-[#7aa2f7] font-mono">04.</span> Skills
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
            skills@iitpatna: ~/expertise
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4 bg-[#24283b] border-[#414868] h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="w-5 h-5 text-[#7aa2f7]" />
                    <h3 className="text-[#7aa2f7] font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-[#1a1b26] text-[#a9b1d6] rounded-full border border-[#414868]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      </div>
  );
};

export default Skills;
