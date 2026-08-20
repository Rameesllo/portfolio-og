import React from 'react';
import { STATS_DATA } from '../data/portfolioData';

export const Statistics: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient Blue Radial Glow in Dark Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className={`pt-6 sm:pt-0 ${idx !== 0 ? 'sm:pl-8 lg:pl-12' : ''} group`}
            >
              {/* Oversized Thin Display Number */}
              <div className="font-display font-extralight text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white mb-2 group-hover:text-sky-400 transition-colors duration-300">
                {stat.number}
              </div>

              <div className="text-xs font-mono-custom font-semibold tracking-widest text-sky-400 uppercase mb-1">
                {stat.label}
              </div>

              <p className="text-xs font-light text-slate-400 leading-relaxed max-w-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
