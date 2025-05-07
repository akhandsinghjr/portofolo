
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold font-mono text-accent">
              &lt;Akhand /&gt;
            </a>
            <p className="text-foreground/60 text-sm mt-2">
              Crafting digital experiences
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-foreground/60 text-sm">
              © {currentYear} Akhand. All rights reserved.
            </p>
            <p className="text-foreground/40 text-xs mt-1">
              Designed & Built with 💻
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
