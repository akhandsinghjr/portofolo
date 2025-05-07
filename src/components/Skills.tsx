import React, { useState } from 'react';
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
    skills: [
      { name: 'C++', description: 'A powerful general-purpose programming language.', image: 'https://placehold.co/120x120?text=C%2B%2B', learnedAt: 'IIT Patna Coursework', projects: ['Hospital Management System'] },
      // { name: 'Java', description: 'Widely-used object-oriented programming language.', image: 'https://placehold.co/120x120?text=Java', learnedAt: 'Online Course', projects: ['AI-Powered Chat Application'] },
      { name: 'Python', description: 'High-level, interpreted language for rapid development.', image: 'https://placehold.co/120x120?text=Python', learnedAt: 'Self-taught', projects: ['sah-ai-yak', 'moonddream'] },
      { name: 'JavaScript', description: 'The language of the web for interactive applications.', image: 'https://placehold.co/120x120?text=JS', learnedAt: 'IIT Patna Coursework', projects: ['Faculty Recruitment System', 'sah-ai-yak'] },
      { name: 'TypeScript', description: 'Typed superset of JavaScript for scalable apps.', image: 'https://placehold.co/120x120?text=TS', learnedAt: 'Self-taught', projects: ['Faculty Recruitment System', 'sah-ai-yak'] }
    ]
  },
  {
    title: 'Web Development',
    icon: Layout,
    skills: [
      { name: 'React', description: 'A JavaScript library for building user interfaces.', image: 'https://placehold.co/120x120?text=React', learnedAt: 'Self-taught', projects: ['E-Commerce Platform', 'AI-Powered Chat Application'] },
      { name: 'Next.js', description: 'React framework for server-side rendering.', image: 'https://placehold.co/120x120?text=Next.js', learnedAt: 'Online Bootcamp', projects: ['Task Management System'] },
      { name: 'Node.js', description: 'JavaScript runtime for server-side applications.', image: 'https://placehold.co/120x120?text=Node.js', learnedAt: 'IIT Patna Coursework', projects: ['E-Commerce Platform', 'Task Management System'] },
      { name: 'Express', description: 'Minimal and flexible Node.js web framework.', image: 'https://placehold.co/120x120?text=Express', learnedAt: 'Online Course', projects: ['E-Commerce Platform'] },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI.', image: 'https://placehold.co/120x120?text=Tailwind', learnedAt: 'Self-taught', projects: ['E-Commerce Platform'] }
    ]
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MongoDB', description: 'NoSQL document database for modern apps.', image: 'https://placehold.co/120x120?text=MongoDB', learnedAt: 'Online Course', projects: ['E-Commerce Platform'] },
      { name: 'PostgreSQL', description: 'Advanced open-source relational database.', image: 'https://placehold.co/120x120?text=Postgres', learnedAt: 'IIT Patna Coursework', projects: ['Task Management System'] },
      { name: 'Redis', description: 'In-memory data structure store, used as a database, cache, and message broker.', image: 'https://placehold.co/120x120?text=Redis', learnedAt: 'Self-taught', projects: ['Task Management System'] },
      { name: 'Firebase', description: 'Backend-as-a-Service for building web and mobile apps.', image: 'https://placehold.co/120x120?text=Firebase', learnedAt: 'Online Bootcamp', projects: [] }
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: Terminal,
    skills: [
      { name: 'Git', description: 'Distributed version control system.', image: 'https://placehold.co/120x120?text=Git', learnedAt: 'Self-taught', projects: ['E-Commerce Platform', 'Task Management System'] },
      { name: 'Docker', description: 'Containerization platform for deploying applications.', image: 'https://placehold.co/120x120?text=Docker', learnedAt: 'Online Course', projects: ['Task Management System'] },
      { name: 'AWS', description: 'Amazon Web Services cloud platform.', image: 'https://placehold.co/120x120?text=AWS', learnedAt: 'Online Bootcamp', projects: ['E-Commerce Platform'] },
      { name: 'Linux', description: 'Open-source operating system.', image: 'https://placehold.co/120x120?text=Linux', learnedAt: 'IIT Patna Coursework', projects: [] },
      { name: 'CI/CD', description: 'Continuous Integration and Continuous Deployment.', image: 'https://placehold.co/120x120?text=CI%2FCD', learnedAt: 'Self-taught', projects: [] }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    skills: [
      { name: 'AWS', description: 'Amazon Web Services cloud platform.', image: 'https://placehold.co/120x120?text=AWS', learnedAt: 'Online Bootcamp', projects: ['E-Commerce Platform'] },
      { name: 'Azure', description: 'Microsoft cloud computing platform.', image: 'https://placehold.co/120x120?text=Azure', learnedAt: 'Online Course', projects: [] },
      { name: 'Google Cloud', description: 'Google\'s cloud computing services.', image: 'https://placehold.co/120x120?text=GCP', learnedAt: 'Self-taught', projects: [] },
      { name: 'Serverless', description: 'Cloud computing execution model.', image: 'https://placehold.co/120x120?text=Serverless', learnedAt: 'Online Bootcamp', projects: [] }
    ]
  },
  {
    title: 'System Design',
    icon: Cpu,
    skills: [
      { name: 'Microservices', description: 'Architectural style for structuring applications.', image: 'https://placehold.co/120x120?text=Microservices', learnedAt: 'Online Course', projects: ['E-Commerce Platform'] },
      { name: 'REST APIs', description: 'Web service APIs that adhere to REST principles.', image: 'https://placehold.co/120x120?text=REST+API', learnedAt: 'IIT Patna Coursework', projects: ['E-Commerce Platform', 'Task Management System'] },
      { name: 'GraphQL', description: 'Query language for APIs.', image: 'https://placehold.co/120x120?text=GraphQL', learnedAt: 'Self-taught', projects: [] },
      { name: 'WebSockets', description: 'Protocol for two-way communication over a single TCP connection.', image: 'https://placehold.co/120x120?text=WebSockets', learnedAt: 'Online Bootcamp', projects: ['AI-Powered Chat Application'] }
    ]
  }
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<null | {
    name: string;
    description: string;
    image: string;
    learnedAt: string;
    projects: string[];
  }>(null);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="section-heading text-[#a9b1d6] mb-8">
        <span className="text-[#7aa2f7] font-mono">02.</span> Skills
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
                <div className="p-4 bg-[#24283b] border-[#414868] h-full rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="w-5 h-5 text-[#7aa2f7]" />
                    <h3 className="text-[#7aa2f7] font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <button
                        key={skill.name}
                        className={`px-3 py-1 text-sm bg-[#1a1b26] text-[#a9b1d6] rounded-full border border-[#414868] hover:border-[#7aa2f7] focus:outline-none ${selectedSkill?.name === skill.name ? 'ring-2 ring-[#7aa2f7]' : ''}`}
                        onClick={() => setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)}
                        tabIndex={0}
                        aria-label={`View details for ${skill.name}`}
                      >
                        {skill.name}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Details Card or Prompt Card */}
          <div className="mt-8 flex justify-center">
            <div className="bg-[#24283b] border border-[#414868] rounded-lg shadow-2xl p-6 min-w-[320px] max-w-2xl w-2/3 flex flex-col md:flex-row gap-6">
              {selectedSkill ? (
                <>
                  <img
                    src={selectedSkill.image}
                    alt={selectedSkill.name}
                    className="w-28 h-28 object-cover rounded-lg border border-[#414868] mb-4 md:mb-0"
                  />
                  <div className="flex-1 flex flex-col">
                    <div className="text-2xl font-semibold text-[#7aa2f7] mb-2">{selectedSkill.name}</div>
                    <div className="mb-2 text-[#a9b1d6] text-base">{selectedSkill.description}</div>
                    <div className="mb-2 text-[#a9b1d6] text-sm">
                      <span className="font-semibold">Learned at:</span> {selectedSkill.learnedAt}
                    </div>
                    <div className="mb-2 text-[#a9b1d6] text-sm">
                      <span className="font-semibold">Projects:</span> {selectedSkill.projects.length > 0 ? (
                        <ul className="list-disc pl-5">
                          {selectedSkill.projects.map((proj, idx) => (
                            <li key={idx}>{proj}</li>
                          ))}
                        </ul>
                      ) : 'None yet'}
                    </div>
                    <button
                      className="mt-4 px-4 py-2 bg-[#7aa2f7] text-[#1a1b26] rounded font-semibold hover:bg-[#9ece6a] transition-colors w-full md:w-auto"
                      onClick={() => setSelectedSkill(null)}
                    >
                      Close
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
                  <div className="w-16 h-16 mb-4 text-[#7aa2f7]">
                    <Code2 className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#7aa2f7] mb-2">Select a Skill</h3>
                  <p className="text-[#a9b1d6] mb-4">Click on any skill above to view detailed information about my expertise and experience with that technology.</p>
                  <div className="text-sm text-[#414868]">
                    <p>Each skill card includes:</p>
                    <ul className="list-disc list-inside mt-2">
                      <li>Description and overview</li>
                      <li>Where I learned it</li>
                      <li>Projects where I've used it</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
