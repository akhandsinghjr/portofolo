import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  // Terminal text content with type information for styling
  const skillsTable = `+---------------------+-----------------------------+
| Category            | Skills                      |
+---------------------+-----------------------------+
| Programming         | C++, Java, Python, JS, TS   |
| Web Development     | React, Next.js, Node.js     |
| Databases           | MongoDB, PostgreSQL, Redis  |
| DevOps & Tools      | Git, Docker, AWS, Linux     |
| System Design       | Microservices, REST APIs    |
+---------------------+-----------------------------+`;

  const terminalContent = [
    { type: 'system', content: 'Welcome to Akhand\'s Portfolio Terminal v1.0.0' },
    { type: 'system', content: 'Initializing system...' },
    { type: 'command', content: '$ whoami' },
    { type: 'output', content: 'akhand@iitpatna' },
    { type: 'command', content: '$ echo $USER' },
    { type: 'output', content: 'CSE Student @ IIT Patna' },
    { type: 'command', content: '$ cat skills.txt' },
    { type: 'pre', content: skillsTable },
    { type: 'command', content: '$ cat about.txt' },
    { type: 'output', content: 'Passionate about building innovative tech solutions...' },
    { type: 'output', content: 'Focused on full-stack development and system design...' },
    { type: 'command', content: '$ git status' },
    { type: 'output', content: 'On branch master - Always learning, always building...' },
    { type: 'command', content: '$ ./run_portfolio.sh' },
    { type: 'success', content: 'Launching portfolio experience...' },
    { type: 'system', content: 'System ready. Type "help" for available commands.' }
  ];
  
  useEffect(() => {
    if (currentLine < terminalContent.length) {
      const timer = setTimeout(() => {
        setTerminalLines(prev => [...prev, terminalContent[currentLine].content]);
        setCurrentLine(prev => prev + 1);
      }, currentLine === 0 ? 500 : Math.random() * 300 + 200);
      
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
      // Add a small delay before scrolling to ensure smooth transition
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000);
    }
  }, [currentLine, terminalContent]);

  const cursorBlink = {
    opacity: [1, 0, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      repeatType: "loop" as const
    }
  };

  const getLineStyle = (line: string, index: number) => {
    const type = terminalContent[index]?.type;
    switch (type) {
      case 'command':
        return 'text-green-400';
      case 'output':
        return 'text-gray-300';
      case 'success':
        return 'text-green-400';
      case 'system':
        return 'text-blue-400';
      case 'pre':
        return 'text-gray-300';
      default:
        return 'text-gray-300';
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black py-16">
      <motion.div 
        className="relative w-full max-w-4xl mx-4 rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="bg-[#1a1b26] rounded-lg shadow-2xl">
          <div className="h-10 flex items-center px-4 bg-[#24283b] rounded-t-lg border-b border-[#414868]">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#f7768e]"></div>
              <div className="h-3 w-3 rounded-full bg-[#e0af68]"></div>
              <div className="h-3 w-3 rounded-full bg-[#9ece6a]"></div>
            </div>
            <div className="text-xs text-center flex-1 text-gray-400 font-mono">
              akhand@iitpatna: ~/portfolio
            </div>
          </div>

          <div className="p-4 font-mono text-sm md:text-base text-gray-300 min-h-[500px] flex flex-col bg-[#1a1b26]">
            <div className="flex-grow space-y-1">
              {terminalLines.map((line, index) => (
                terminalContent[index]?.type === 'pre' ? (
                  <pre key={index} className="text-gray-300 text-xs md:text-sm leading-tight my-2">{line}</pre>
                ) : (
                  <div key={index} className={`${getLineStyle(line, index)} transition-colors duration-200`}>
                    {terminalContent[index]?.type === 'command' && (
                      <span className="text-green-400 mr-2">$</span>
                    )}
                    {line}
                  </div>
                )
              ))}
              {currentLine < terminalContent.length && (
                <div className="inline-flex items-center">
                  <span className="text-green-400 mr-2">$</span>
                  <motion.span 
                    className="inline-block h-4 w-2 bg-green-400" 
                    animate={cursorBlink} 
                  />
                </div>
              )}
            </div>

            {isComplete && (
              <div className="mt-4 pt-4 border-t border-[#414868]">
                <div className="text-center text-gray-400 animate-pulse">
                  Scroll down to explore more...
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
