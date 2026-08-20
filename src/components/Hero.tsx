import React from 'react';
import { ArrowDown, ArrowUpRight, Code, Database, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-screen pt-28 md:pt-36 pb-20 overflow-hidden flex flex-col justify-between">
      {/* Soft Ambient Light-Blue Radial Glow Background */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-100/40 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Oversized Editorial Watermark Text Behind Hero */}
      <div className="absolute top-16 left-0 right-0 overflow-hidden pointer-events-none select-none -z-20 opacity-[0.035] leading-none">
        <h1 className="font-display font-extrabold text-[15vw] tracking-tighter text-slate-900 uppercase">
          PORTFOLIO
        </h1>
      </div>

      {/* Left Vertical Label Bar */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-6 pointer-events-none">
        <span className="writing-mode-vertical text-[10px] font-mono-custom font-semibold tracking-widest text-slate-400 uppercase rotate-180">
          DEVELOPER / 2026
        </span>
        <div className="w-[1px] h-16 bg-slate-200" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 my-auto">
        {/* Upper Category Label & Key Stats */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-200/60 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
            <span className="text-xs font-mono-custom font-semibold uppercase tracking-widest text-sky-600">
              FULL-STACK DEVELOPER
            </span>
          </div>

          <div className="flex items-center gap-8 text-slate-700">
            <div className="flex items-baseline gap-2">
              <span className="font-display font-light text-2xl text-slate-900">10+</span>
              <span className="text-[11px] font-mono-custom text-slate-500 uppercase tracking-wider">PROJECTS</span>
            </div>
            <div className="w-[1px] h-5 bg-slate-200" />
            <div className="flex items-baseline gap-2">
              <span className="font-display font-light text-2xl text-slate-900">5+</span>
              <span className="text-[11px] font-mono-custom text-slate-500 uppercase tracking-wider">REAL-WORLD APPS</span>
            </div>
          </div>
        </div>

        {/* Main Hero Content Grid: Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Huge Editorial Display Typography & Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Big "Hello." Display Header */}
            <h1 className="font-display font-light text-7xl sm:text-8xl md:text-9xl tracking-tight text-slate-950 mb-2 leading-[0.9]">
              Hello<span className="text-sky-500 inline-block animate-bounce">.</span>
            </h1>

            <h2 className="font-display font-medium text-2xl sm:text-3xl md:text-4xl text-slate-800 tracking-tight mt-2 mb-6">
              I'm <span className="underline decoration-sky-300 decoration-wavy decoration-2 underline-offset-4">{PERSONAL_INFO.name}</span> — Full-Stack Developer
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-xl mb-10">
              {PERSONAL_INFO.subtitle}
              <br />
              {PERSONAL_INFO.subtitle2}
            </p>

            {/* Action Buttons & Links */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-950 text-white font-mono-custom text-xs font-semibold uppercase tracking-wider rounded-full shadow-lg shadow-slate-900/10 hover:shadow-sky-400/20 hover:bg-sky-600 transition-all duration-300 transform hover:-translate-y-0.5"
                data-cursor="WORK"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4 text-sky-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 text-slate-800 font-mono-custom text-xs font-semibold uppercase tracking-wider rounded-full border border-slate-200 shadow-sm hover:border-sky-300 transition-all duration-300"
                data-cursor="CONTACT"
              >
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-4 text-xs font-mono-custom font-medium text-slate-600 hover:text-sky-600 transition-colors ml-auto md:ml-0"
              >
                <span>Download Resume ↓</span>
              </button>
            </div>

            {/* Micro Tag Badges Strip */}
            <div className="mt-12 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500 font-mono-custom">
              <span className="text-slate-400">CORE TECH:</span>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Node.js'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-slate-100/80 text-slate-700 rounded-md text-[11px] font-medium border border-slate-200/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Monochrome Portrait with Soft Blue Light Glow */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Soft Ambient Light Halo Ring */}
            <div className="absolute inset-0 m-auto w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-sky-300/40 via-cyan-200/30 to-transparent blur-3xl -z-10" />

            {/* Profile Card Container with Desaturated Contrast */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-2xl shadow-sky-100/50 group">
              {/* High-Contrast Editorial Portrait */}
              <img
                src="src/assets/image copy 2.png"
                alt="Ramees - Full Stack Developer"
                className="w-full h-full object-cover md:grayscale md:contrast-110 md:brightness-95 md:group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Light Blue Gradient Accent Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

              {/* Overlaid Editorial Text */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 bg-sky-500/90 backdrop-blur-md rounded-full text-[10px] font-mono-custom font-semibold tracking-wider uppercase mb-2">
                  FULL-STACK ENGINEER
                </span>
                <h3 className="font-display font-medium text-xl text-white">RAMEES</h3>
                <p className="text-xs text-sky-100/80 font-light">Building robust digital products & modern web interfaces.</p>
              </div>

              {/* Floating Technology Badges */}
              <div className="absolute -top-0 right-0 glass-panel px-3.5 py-2 rounded-2xl shadow-lg border border-sky-200/60 flex items-center gap-2 animate-float-slow">
                <Code className="w-4 h-4 text-sky-500 " />
                <span className="text-xs font-mono-custom font-semibold text-slate-800 ">React & Next.js</span>
              </div>

              <div className="absolute bottom-30 -left- glass-panel px-3.5 py-2 rounded-2xl shadow-lg border border-sky-200/60 flex items-center gap-2 animate-float-delayed">
                <Database className="w-4 h-4 text-cyan-600" />
                <span className="text-xs font-mono-custom font-semibold text-slate-800">PostgreSQL</span>
              </div>

              <div className="absolute top-1/2 right-0 glass-panel px-3 py-1.5 rounded-xl shadow-md border border-slate-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-[11px] font-mono-custom text-slate-700">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-8 flex justify-between items-end text-xs font-mono-custom text-slate-400">
        <a
          href="#about"
          className="group flex items-center gap-2 text-slate-500 hover:text-sky-600 transition-colors uppercase tracking-widest"
        >
          <span>SCROLL DOWN</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </a>

        <span className="hidden md:inline-block tracking-widest uppercase text-slate-400">
          KERALA, INDIA — AVAILABLE FOR PROJECTS
        </span>
      </div>
    </section>
  );
};
