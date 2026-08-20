import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar Top Line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-slate-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(56,189,248,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm shadow-sky-100/30 py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3 font-display font-bold tracking-tight text-xl text-slate-900 transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-mono-custom text-sm font-semibold group-hover:bg-sky-500 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300">
              {PERSONAL_INFO.monogram}
            </span>
            <span className="tracking-widest font-semibold uppercase text-sm group-hover:text-sky-600 transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono-custom font-medium uppercase tracking-widest text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition-colors hover:text-slate-900 ${
                    isActive ? 'text-sky-600 font-semibold' : ''
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Links & Resume */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
              title="GitHub Profile"
              data-cursor="GITHUB"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
              title="LinkedIn Profile"
              data-cursor="LINKEDIN"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono-custom font-semibold tracking-wider text-slate-800 bg-slate-100 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 border border-slate-200/80 rounded-full transition-all duration-300 shadow-sm"
              data-cursor="RESUME"
            >
              <FileText className="w-3.5 h-3.5 text-sky-500" />
              <span>RESUME</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-sky-500" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white/95 backdrop-blur-xl md:hidden pt-28 px-8 flex flex-col justify-between pb-12 transition-all">
          <nav className="flex flex-col gap-6 font-display font-semibold text-2xl text-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-sky-600 transition-colors flex items-center justify-between border-b border-slate-100 pb-4"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-5 h-5 text-slate-400" />
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3.5 text-sm font-mono-custom font-semibold text-center text-slate-900 bg-sky-50 border border-sky-200 rounded-xl flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-sky-600" />
              <span>View Resume</span>
            </button>

            <div className="flex items-center justify-center gap-6 pt-4 text-slate-600">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
