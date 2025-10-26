import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  Trophy, 
  Mail,
  ChevronRight,
  FileText,
  Laptop
} from 'lucide-react';

const navItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Laptop },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const SideNav = () => {
  const [activeSection, setActiveSection] = React.useState('about');
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);
  const [isGlitching, setIsGlitching] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300); // Glitch duration
    }, 3000); // Trigger every 5 seconds

    return () => clearInterval(glitchInterval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    // Replace with your actual resume URL
    window.open('https://drive.google.com/file/d/1SQZuBA4qkfb2cNEjMTrrKNZQbej8qNSo/view?usp=sharing', '_blank');
  };

  return (
    <>
      {/* Resume Button */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-4 right-4 z-50"
      >
        <motion.button
          onClick={handleResumeClick}
          className={`relative flex items-center gap-3 px-6 py-3 bg-black/80 backdrop-blur-lg rounded-full border border-gray-800 text-green-400 hover:bg-black/50 transition-all duration-300 ${
            isGlitching ? 'glitch-effect' : ''
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <FileText className="w-5 h-5" />
            {isGlitching && (
              <>
                <div className="absolute inset-0 glitch-layer-1" />
                <div className="absolute inset-0 glitch-layer-2" />
              </>
            )}
          </div>
          <span className="text-base font-medium relative">
            Resume
            {isGlitching && (
              <>
                <div className="absolute inset-0 glitch-layer-1" />
                <div className="absolute inset-0 glitch-layer-2" />
              </>
            )}
          </span>
        </motion.button>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed left-8 top-[40%] -translate-y-1/2 z-50 hidden md:flex flex-col gap-4"
      >
        {/* Navigation Items */}
        <div className="flex flex-col gap-4 mb-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const isHovered = hoveredItem === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className={`group relative flex items-center gap-4 p-2 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'text-green-400 bg-black/50' 
                    : 'text-gray-400 hover:text-green-400 hover:bg-black/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <Icon className="w-5 h-5" />
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -left-1 -right-1 -top-1 -bottom-1 border-2 border-green-400 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </div>
                
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-sm font-medium"
                    >
                      {item.label}
                    </motion.span>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ delay: 0.1 }}
                    >
                      <ChevronRight 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isActive ? 'rotate-90' : 'group-hover:translate-x-1'
                        }`}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Terminal Typography Vertical */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="border-t border-gray-800 pt-4 mt-4"
        >
          <div className="text-green-400 font-mono text-sm whitespace-nowrap writing-mode-vertical-rl rotate-180">
            akhand@tech
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        <div className="mx-4 mb-4">
          <div className="bg-black/80 backdrop-blur-lg rounded-full p-2 flex justify-around items-center border border-gray-800">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative p-3 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'text-green-400 bg-black/50' 
                      : 'text-gray-400 hover:text-green-400 hover:bg-black/30'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    <Icon className="w-5 h-5" />
                    {isActive && (
                      <motion.div
                        layoutId="mobileActiveIndicator"
                        className="absolute -left-1 -right-1 -top-1 -bottom-1 border-2 border-green-400 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default SideNav;

const styles = `
  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }

  .glitch-effect {
    animation: glitch 0.2s linear;
  }

  .glitch-layer-1 {
    background: rgba(255, 0, 0, 0.1);
    animation: glitch 0.2s linear;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  }

  .glitch-layer-2 {
    background: rgba(0, 255, 255, 0.1);
    animation: glitch 0.2s linear reverse;
    clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
  }

  .writing-mode-vertical-rl {
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}