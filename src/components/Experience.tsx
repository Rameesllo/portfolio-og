import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 md:py-36 bg-white overflow-hidden">
      {/* Soft Light Blue Radial Gradient Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Oversized Background Watermark */}
      <div className="absolute top-12 right-0 overflow-hidden pointer-events-none select-none -z-10 opacity-[0.035]">
        <h2 className="font-display font-extrabold text-[22vw] tracking-tighter text-slate-900 uppercase leading-none">
          JOURNEY
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono-custom font-semibold tracking-widest text-sky-600 uppercase">
                04 — CAREER & EDUCATION
              </span>
              <div className="w-12 h-[1px] bg-sky-300" />
            </div>
            <h2 className="font-display font-light text-4xl sm:text-5xl text-slate-950 tracking-tight">
              Development Journey
            </h2>
          </div>

          <p className="text-sm font-light text-slate-500 max-w-md">
            Chronological progression from academic Computer Science studies to engineering production web applications.
          </p>
        </div>

        {/* Vertical Blue Line Timeline Container */}
        <div className="relative pl-6 md:pl-10 border-l border-sky-200 space-y-16">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Glowing Node Marker */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white border-2 border-sky-400 group-hover:bg-sky-500 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.8)] transition-all duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500 group-hover:bg-white" />
              </div>

              {/* Year & Role Badge */}
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <span className="px-3.5 py-1 bg-slate-900 text-white text-xs font-mono-custom font-semibold rounded-full shadow-2xs">
                  {exp.year}
                </span>
                <span className="text-xs font-mono-custom font-medium text-sky-600 uppercase tracking-wider">
                  {exp.organization}
                </span>
              </div>

              {/* Experience Details Card */}
              <div className="p-8 bg-slate-50/70 rounded-3xl border border-slate-200/80 group-hover:border-sky-300 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-sky-100/40 transition-all duration-300">
                <h3 className="font-display font-medium text-2xl text-slate-950 mb-3">
                  {exp.title}
                </h3>
                <p className="text-sm font-light text-slate-600 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2.5 mb-6 text-xs text-slate-600 font-light">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white text-slate-700 text-[11px] font-mono-custom rounded-md border border-slate-200 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
