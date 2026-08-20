import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import {
  Code,
  FileCode,
  Atom,
  Layers,
  Server,
  Database,
  Workflow,
  Zap,
  Palette,
  GitBranch,
  ArrowUpRight
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  FileCode,
  Atom,
  Layers,
  Server,
  Database,
  Workflow,
  Zap,
  Palette,
  GitBranch,
};

export const Skills: React.FC = () => {
  const [activeSkillId, setActiveSkillId] = useState<string | null>('typescript');

  return (
    <section id="skills" className="relative py-28 md:py-36 bg-white overflow-hidden">
      {/* Soft Blue Radial Light Accent */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-100/50 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Oversized Background Watermark */}
      <div className="absolute top-12 left-0 overflow-hidden pointer-events-none select-none -z-10 opacity-[0.03]">
        <h2 className="font-display font-extrabold text-[22vw] tracking-tighter text-slate-900 uppercase leading-none">
          SKILLS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Horizontal Infinite Marquee Ticker */}
        <div className="mb-16 py-3 border-y border-slate-200/70 overflow-hidden flex items-center gap-8 text-xs font-mono-custom text-slate-500 uppercase tracking-widest no-scrollbar">
          <div className="flex gap-8 whitespace-nowrap animate-marquee">
            {SKILLS_DATA.map((skill) => (
              <span key={`ticker-${skill.id}`} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span className="font-semibold text-slate-800">{skill.name}</span>
                <span className="text-slate-400">({skill.category})</span>
              </span>
            ))}
          </div>
        </div>

        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono-custom font-semibold tracking-widest text-sky-600 uppercase">
                03 — TECHNICAL PROFICIENCY
              </span>
              <div className="w-12 h-[1px] bg-sky-300" />
            </div>
            <h2 className="font-display font-light text-4xl sm:text-5xl text-slate-950 tracking-tight">
              Technologies & Frameworks
            </h2>
          </div>

          <p className="text-sm font-light text-slate-500 max-w-md">
            Interactive breakdown of my core technical stack, architectural tools, and development workflows.
          </p>
        </div>

        {/* Editorial Technology Rows */}
        <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
          {SKILLS_DATA.map((skill) => {
            const IconComponent = ICON_MAP[skill.icon] || Code;
            const isActive = activeSkillId === skill.id;

            return (
              <div
                key={skill.id}
                onMouseEnter={() => setActiveSkillId(skill.id)}
                onClick={() => setActiveSkillId(isActive ? null : skill.id)}
                className={`group cursor-pointer transition-all duration-300 py-6 md:py-8 px-4 md:px-8 rounded-2xl ${
                  isActive
                    ? 'bg-sky-50/60 border border-sky-200/80 shadow-lg shadow-sky-100/50 my-2'
                    : 'hover:bg-slate-50/80 hover:px-6'
                }`}
                data-cursor="TECH"
              >
                <div className="flex items-center justify-between gap-4">
                  {/* Left Number & Tech Name */}
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className="font-mono-custom text-xs font-semibold text-sky-600 tracking-wider">
                      {skill.number}
                    </span>

                    <div className="flex items-center gap-4">
                      <div
                        className={`p-2.5 rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'bg-sky-500 text-white shadow-md shadow-sky-400/40 scale-110'
                            : 'bg-slate-100 text-slate-700 group-hover:bg-sky-100 group-hover:text-sky-600'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3
                        className={`font-display font-medium text-xl sm:text-2xl tracking-tight transition-colors ${
                          isActive ? 'text-slate-950 font-semibold' : 'text-slate-800 group-hover:text-sky-600'
                        }`}
                      >
                        {skill.name}
                      </h3>
                    </div>
                  </div>

                  {/* Right Category Badge & Expand Icon */}
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="hidden sm:inline-block px-3.5 py-1 bg-slate-100/80 text-slate-600 text-[11px] font-mono-custom rounded-full border border-slate-200/60">
                      {skill.category}
                    </span>
                    <div className="p-2 rounded-full bg-slate-100/60 group-hover:bg-sky-100 text-slate-400 group-hover:text-sky-600 transition-colors">
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isActive ? 'translate-x-0.5 -translate-y-0.5 text-sky-600' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded Description Box */}
                {isActive && (
                  <div className="mt-6 pt-4 border-t border-sky-200/60 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fadeIn">
                    <p className="text-sm font-light text-slate-600 max-w-3xl leading-relaxed">
                      {skill.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-white text-sky-700 text-xs font-mono-custom rounded-md border border-sky-200 shadow-2xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
