import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const asciiDonutFrames = [
  
];

const loginLines = [
  { type: 'login', content: 'login: akhand' },
  { type: 'login', content: 'password: ******' },
  { type: 'login', content: 'Welcome, akhand!' }
];

const MATRIX_COLUMNS = 32;
const MATRIX_ROWS = 12;
const MATRIX_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

function getRandomChar() {
  return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
}

const MatrixAnimation = () => {
  const [matrix, setMatrix] = useState<string[][]>([]);

  useEffect(() => {
    let running = true;
    function updateMatrix() {
      setMatrix(prev => {
        if (!prev.length) {
          // Initialize
          return Array.from({ length: MATRIX_ROWS }, () =>
            Array.from({ length: MATRIX_COLUMNS }, getRandomChar)
          );
        }
        // Shift rows down, add new row at top
        const newMatrix = [
          Array.from({ length: MATRIX_COLUMNS }, getRandomChar),
          ...prev.slice(0, MATRIX_ROWS - 1)
        ];
        return newMatrix;
      });
      if (running) setTimeout(updateMatrix, 80);
    }
    updateMatrix();
    return () => { running = false; };
  }, []);

  return (
    <pre className="text-green-400 text-xs md:text-sm leading-tight my-8 min-h-[120px] font-mono text-center select-none">
      {matrix.map((row, i) => (
        <div key={i} style={{ letterSpacing: 2 }}>
          {row.join(' ')}
        </div>
      ))}
    </pre>
  );
};

const Hero = () => {
  const [phase, setPhase] = useState<'login' | 'matrix' | 'terminal'>('login');
  const [loginStep, setLoginStep] = useState(0);
  const [donutFrame, setDonutFrame] = useState(0);
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
    { type: 'output', content: 'Varanasi | Dec,2003 | ASJX...' },
    { type: 'output', content: 'Focused on Machine Learning, Artificial Intelligence and Full-Stack Development...' },
    { type: 'command', content: '$ git status' },
    { type: 'output', content: 'On branch master - anunshashan' },
    { type: 'command', content: '$ ./run_portfolio.sh' },
    { type: 'success', content: 'Launching portfolio experience...' },
    { type: 'system', content: 'System ready. Launching ...' }
  ];
  
  // Login animation logic
  useEffect(() => {
    if (phase === 'login') {
      if (loginStep < loginLines.length) {
        const timer = setTimeout(() => {
          setLoginStep(prev => prev + 1);
        }, 700);
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => setPhase('matrix'), 500);
      }
    }
  }, [phase, loginStep]);

  // Matrix animation logic
  useEffect(() => {
    if (phase === 'matrix') {
      const timer = setTimeout(() => setPhase('terminal'), 2000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Terminal animation logic
  useEffect(() => {
    if (phase === 'terminal') {
      if (currentLine < terminalContent.length) {
        const timer = setTimeout(() => {
          setTerminalLines(prev => [...prev, terminalContent[currentLine].content]);
          setCurrentLine(prev => prev + 1);
        }, currentLine === 0 ? 500 : Math.random() * 300 + 200);
        return () => clearTimeout(timer);
      } else {
        setIsComplete(true);
        setTimeout(() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1000);
      }
    }
  }, [phase, currentLine, terminalContent]);

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
      case 'login':
        return 'text-gray-400';
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
              {phase === 'login' && (
                <>
                  {loginLines.slice(0, loginStep).map((line, idx) => (
                    <div key={idx} className="text-gray-400">{line.content}</div>
                  ))}
                  {loginStep < loginLines.length && (
                    <div className="inline-flex items-center">
                      <motion.span 
                        className="inline-block h-4 w-2 bg-green-400" 
                        animate={cursorBlink} 
                      />
                    </div>
                  )}
                </>
              )}
              {phase === 'matrix' && <MatrixAnimation />}
              {phase === 'terminal' && (
                <>
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
                </>
              )}
            </div>

            {phase === 'terminal' && isComplete && (
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
