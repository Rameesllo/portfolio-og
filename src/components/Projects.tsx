import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Automatic auto-sliding interval loop (pauses when user hovers to interact)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        // If reached end, smoothly reset back to start
        if (scrollLeft + clientWidth >= scrollWidth - 25) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-slate-50/60 border-t border-b border-slate-200/60 overflow-hidden">
      {/* Soft Blue Radial Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Oversized Background Watermark */}
      <div className="absolute top-16 left-0 right-0 overflow-hidden pointer-events-none select-none -z-10 opacity-[0.035] text-center">
        <h2 className="font-display font-extrabold text-[16vw] tracking-tighter text-slate-900 uppercase leading-none">
          SELECTED WORK
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono-custom font-semibold tracking-widest text-sky-600 uppercase">
                02 — FEATURED WORK
              </span>
              <div className="w-12 h-[1px] bg-sky-300" />
            </div>
            <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight">
              Featured Projects
            </h2>
          </div>

          <p className="text-sm font-light text-slate-600 max-w-md">
            A selection of production-ready applications, management portals, and interactive games I've designed and engineered.
          </p>
        </div>

        {/* Exclusive Auto-Sliding Project Cards Showcase */}
        <div className="p-6 md:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-sky-100/40">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
              <h3 className="font-display font-semibold text-lg text-slate-900 uppercase tracking-tight">
                Project Showcase
              </h3>
              
            </div>

            {/* Slider Arrow Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollSlider('left')}
                className="p-2.5 bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-600 rounded-full border border-slate-200/80 transition-all shadow-2xs"
                title="Scroll Left"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollSlider('right')}
                className="p-2.5 bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-600 rounded-full border border-slate-200/80 transition-all shadow-2xs"
                title="Scroll Right"
                aria-label="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Flipkart Model Cards Horizontal Track */}
          <div
            ref={sliderRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2"
          >
            {PROJECTS_DATA.map((proj) => (
              <div
                key={`slider-${proj.id}`}
                onClick={() => onSelectProject(proj)}
                className="group/card cursor-pointer shrink-0 w-72 sm:w-80 md:w-96 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:bg-white hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 snap-start flex flex-col justify-between overflow-hidden"
                data-cursor="VIEW ↗"
              >
                {/* Top Image Box */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 border-b border-slate-200/60">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-60" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[11px] font-mono-custom font-semibold text-slate-900 uppercase shadow-2xs">
                    {proj.category}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                    <span className="text-[11px] font-mono-custom font-medium text-sky-200">
                      PROJECT {proj.number}
                    </span>
                    <span className="text-[11px] font-mono-custom text-slate-300">{proj.year}</span>
                  </div>
                </div>

                {/* Bottom Details Box */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-semibold text-lg text-slate-900 group-hover/card:text-sky-600 transition-colors mb-2 line-clamp-1">
                      {proj.title}
                    </h4>

                    <p className="text-xs text-slate-500 font-light line-clamp-2 leading-relaxed mb-4">
                      {proj.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proj.stack.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 bg-white text-slate-700 text-[11px] font-mono-custom rounded border border-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono-custom font-semibold text-sky-600 group-hover/card:text-sky-700">
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
