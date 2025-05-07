import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Code2, 
  Briefcase, 
  Trophy, 
  Mail,
  ChevronRight
} from 'lucide-react';

const navItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const SideNav = () => {
  const [activeSection, setActiveSection] = React.useState('about');
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed left-8 top-[40%] -translate-y-1/2 z-50 hidden md:block"
      >
        <div className="flex flex-col gap-4">
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