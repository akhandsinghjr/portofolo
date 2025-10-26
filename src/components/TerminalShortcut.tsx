import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalShortcut = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isOnHero, setIsOnHero] = useState(true);
  const [suggestionIndex, setSuggestionIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = [
    { name: 'cd about', description: 'Navigate to About section' },
    { name: 'cd experience', description: 'Navigate to Experience section' },
    { name: 'cd projects', description: 'Navigate to Projects section' },
    { name: 'cd contact', description: 'Navigate to Contact section' },
    { name: 'ls', description: 'List available sections' },
    { name: 'help', description: 'Show available commands' },
    { name: 'clear', description: 'Clear terminal' }
  ];

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        // If hero section is completely out of view (scrolled past), show terminal
        setIsOnHero(heroRect.bottom > window.innerHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for global keypress
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only open terminal if not on hero and key is not a modifier
      if (!isOpen && !isOnHero && !['Control', 'Shift', 'Alt', 'Meta', 'Escape'].includes(e.key)) {
        e.preventDefault();
        setIsOpen(true);
        setInput(e.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isOnHero]);

  // Focus input when terminal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Get filtered suggestions based on input
  const suggestions = input.trim().length > 0
    ? commands.filter(cmd => cmd.name.toLowerCase().startsWith(input.toLowerCase()))
    : [];

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    // Display command
    setOutput(prev => [...prev, `$ ${cmd}`]);

    if (trimmedCmd === 'help') {
      const helpLines = [
        '+--------------------+--------------------------------+',
        '| Command            | Description                    |',
        '+--------------------+--------------------------------+',
        ...commands.map(c => `| ${c.name.padEnd(18)} | ${c.description.padEnd(30)} |`),
        '+--------------------+--------------------------------+'
      ];
      setOutput(prev => [...prev, ...helpLines]);
    } else if (trimmedCmd === 'ls') {
      const sections = 'about  projects  skills  contact';
      setOutput(prev => [...prev, sections]);
    } else if (trimmedCmd === 'clear') {
      setOutput([]);
    } else if (trimmedCmd.startsWith('cd ')) {
      const section = trimmedCmd.slice(3).trim();
      const sectionMap: { [key: string]: string } = {
        'about': 'about',
        'experience': 'experience',
        'projects': 'projects',
        'contact': 'contact'
      };

      if (sectionMap[section]) {
        setOutput(prev => [...prev, `Navigating to ${section}...`]);
        setTimeout(() => {
          const targetSection = document.getElementById(sectionMap[section]);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
          setIsOpen(false);
        }, 300);
      } else {
        setOutput(prev => [...prev, `cd: no such section '${section}'`]);
      }
    } else if (trimmedCmd === '') {
      // Empty command
    } else {
      setOutput(prev => [...prev, `command not found: ${cmd}`]);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
      setSuggestionIndex(-1);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setInput('');
      setOutput([]);
      setSuggestionIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIndex = historyIndex + 1;
      if (newIndex < commandHistory.length) {
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = historyIndex - 1;
      if (newIndex >= 0) {
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        // Autocomplete with first suggestion
        setInput(suggestions[0].name);
        setSuggestionIndex(-1);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && !isOnHero && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-[#1a1b26] border-t border-[#414868] z-50"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-6xl mx-auto p-4 font-mono text-sm text-gray-300">
            {/* Output */}
            <div className="max-h-40 overflow-y-auto mb-2 space-y-1">
              {output.map((line, idx) => (
                <div key={idx} className="text-gray-400 text-xs">
                  {line}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2">
              <span className="text-green-400">$</span>
              <div className="flex-grow relative">
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value);
                      setSuggestionIndex(-1);
                    }}
                    onKeyDown={handleInputKeyDown}
                    className={`bg-transparent outline-none w-full relative z-10 ${
                      suggestions.length > 0 ? 'text-transparent' : 'text-green-400'
                    }`}
                    placeholder="Type command (press ESC to close)..."
                  />
                  {/* Inline suggestion - lighter text overlaid */}
                  {suggestions.length > 0 && (
                    <div className="absolute top-0 left-0 text-gray-600 pointer-events-none font-mono text-sm">
                      <span className="text-green-400">{input}</span>
                      <span>{suggestions[0].name.slice(input.length)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalShortcut;
