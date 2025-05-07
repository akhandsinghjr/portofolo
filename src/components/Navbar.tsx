
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute("id") || "home");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-lg py-2" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold font-mono text-accent">
          &lt;Akhand /&gt;
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`nav-link ${activeSection === link.href.slice(1) ? "active" : ""}`}
            >
              <span className="text-accent mr-1 font-mono">{String(index).padStart(2, '0')}.</span> {link.name}
            </a>
          ))}
          <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-secondary/95 backdrop-blur-md p-6 absolute top-full left-0 w-full">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${activeSection === link.href.slice(1) ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-accent mr-1 font-mono">{String(index).padStart(2, '0')}.</span> {link.name}
              </a>
            ))}
            <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 w-full">
              Resume
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
