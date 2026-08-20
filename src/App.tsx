import { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';
import { Experience } from './components/Experience';
import { Statistics } from './components/Statistics';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PROJECTS_DATA } from './data/portfolioData';
import type { Project } from './types/portfolio';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-slate-900 selection:bg-sky-100 selection:text-sky-900 font-sans antialiased relative overflow-x-hidden">
      {/* Custom Desktop Light Blue Ring Cursor */}
      <CustomCursor />

      {/* Global Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Dedicated Project Details Case Study View */}
      {selectedProject ? (
        <ProjectDetail
          project={selectedProject}
          allProjects={PROJECTS_DATA}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      ) : (
        <main>
          {/* Main Portfolio Sections */}
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Projects onSelectProject={(project) => setSelectedProject(project)} />
          <Skills />
          <Statistics />
          <Experience />
          <Contact />
        </main>
      )}

      {/* Footer */}
      <Footer />

      {/* Resume Viewer & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
