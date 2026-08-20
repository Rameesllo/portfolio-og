import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Soft Cyan Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 pb-16 border-b border-slate-800">
          <div>
            <a href="#" className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center font-mono-custom font-bold text-base shadow-md shadow-sky-500/30">
                {PERSONAL_INFO.monogram}
              </span>
              <span className="font-display font-bold tracking-widest text-2xl uppercase text-white">
                {PERSONAL_INFO.name}
              </span>
            </a>
            <p className="text-xs font-mono-custom text-sky-400 uppercase tracking-widest">
              FULL-STACK DEVELOPER — 2026
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-xs font-mono-custom font-medium uppercase tracking-wider text-slate-400">
            <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">Work</a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono-custom text-slate-500">
          <div>
            © 2026 Ramees. All rights reserved. Crafted with precision & light-blue glow aesthetics.
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn ↗
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-slate-900 hover:bg-sky-600 text-slate-300 hover:text-white rounded-full border border-slate-800 transition-all ml-4"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
