import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import MatrixBackground from "../components/MatrixBackground";
import SideNav from "../components/SideNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative">
      <MatrixBackground />
      <SideNav />
      <div className="relative z-10">
        <Hero />
        <section id="about" className="min-h-screen flex items-center justify-center py-16">
          <About />
        </section>
        <section id="skills" className="min-h-screen flex items-center justify-center py-16">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center py-16">
          <Projects />
        </section>
        <section id="achievements" className="min-h-screen flex items-center justify-center py-16">
          <Achievements />
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center py-16">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Index;
