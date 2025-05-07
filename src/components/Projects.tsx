import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Github, ExternalLink, Code2, Server, Database, Layout } from 'lucide-react';

const projects = [
  {
    title: 'सह-AI-यक (Sahayak)',
    description: 'A conversational AI assistant for mental health assessment that analyzes both text and facial expressions to provide supportive responses.',
    technologies: ['React', 'Next.js', 'TailwindCSS', 'HuggingFace', 'Zephyr', 'Azure AI'],
    github: 'https://github.com/akhandsinghjr/sahAIyak_HackVita_3.0',
    demo: 'https://sahaiyak-hackvita-3-0.onrender.com',
    image: '/sahayak.png'
  },
  {
    title: 'Faculty Recruitment Portal',
    description: ' A comprehensive multi-paged Faculty Registration Portal that supports CRUD and collects multiple inputs and generates a final PDF summarizing all applicant information',
    technologies: ['MySql', 'Docker', 'Node.js', 'REST API', 'HTML', 'TailwindCSS'],
    github: 'https://github.com/akhandsinghjr/2201CS11_CS260',
    demo: 'https://task-manager-demo.com',
    image: 'https://placehold.co/600x400?text=Project+Image'
  },
  {
    title: 'AI-Powered Chat Application',
    description: 'A real-time chat application with AI-powered responses, sentiment analysis, and message encryption.',
    technologies: ['React', 'Python', 'TensorFlow', 'WebSocket'],
    github: 'https://github.com/username/ai-chat',
    demo: 'https://ai-chat-demo.com',
    image: 'https://placehold.co/600x400?text=Project+Image'
  }
];

const Projects = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="section-heading text-[#a9b1d6] mb-8">
        <span className="text-[#7aa2f7] font-mono">02.</span> Projects
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
            projects@iitpatna: ~/portfolio
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-[#24283b] border-[#414868] h-full flex flex-col">
                  <img
                    src={project.image}
                    alt={project.title + ' image'}
                    className="w-full h-40 object-cover rounded-md mb-4 border border-[#414868]"
                  />
                  <div className="flex items-center gap-3 mb-4">
                    <Code2 className="w-5 h-5 text-[#7aa2f7]" />
                    <h3 className="text-[#7aa2f7] font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-[#a9b1d6] mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-[#1a1b26] text-[#a9b1d6] rounded-full border border-[#414868]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#7aa2f7] hover:text-[#9ece6a] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#7aa2f7] hover:text-[#9ece6a] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
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

export default Projects;
