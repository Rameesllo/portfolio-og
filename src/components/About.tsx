import React from 'react';
import { Code2, Rocket, Sparkles, MapPin, GraduationCap, Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'BSc Computer Science',
      description: 'Solid foundation in computer science theory, algorithms, object-oriented design, and database systems.',
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'End-to-end expertise spanning React/Next.js interfaces, RESTful API services, and PostgreSQL databases.',
    },
    {
      icon: Rocket,
      title: 'Real-World Projects',
      description: 'Proven track record of designing and deploying business management systems used in active production.',
    },
    {
      icon: Sparkles,
      title: 'Always Learning',
      description: 'Continuously refining tech stack with serverless edge runtimes, modern ORMs, and performance optimization.',
    },
  ];

  return (
    <section id="about" className="relative py-28 md:py-36 bg-slate-50/50 border-t border-b border-slate-200/60 overflow-hidden">
      {/* Soft Blue Radial Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-200/30 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Oversized Background Watermark */}
      <div className="absolute top-10 right-0 overflow-hidden pointer-events-none select-none -z-10 opacity-[0.03]">
        <h2 className="font-display font-extrabold text-[20vw] tracking-tighter text-slate-900 uppercase leading-none">
          ABOUT
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono-custom font-semibold tracking-widest text-sky-600 uppercase">
            01 — ABOUT ME
          </span>
          <div className="w-12 h-[1px] bg-sky-300" />
        </div>

        {/* Editorial Heading Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-tight">
              I build useful things for the web with precision & clarity.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-6 text-slate-600 font-light leading-relaxed text-base">
            <p>
              I'm a Computer Science graduate and Full-Stack Developer focused on building modern web applications and real-world digital solutions.
            </p>
            <p>
              My work revolves around translating complex business logic into sleek, intuitive interfaces backed by robust database architectures. I specialize in Next.js, React, TypeScript, PostgreSQL, Prisma, and Supabase.
            </p>
          </div>
        </div>

        {/* Editorial Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-slate-200/80 mb-20 text-xs font-mono-custom">
          <div>
            <span className="text-slate-400 block mb-1 uppercase tracking-wider">BASED IN</span>
            <span className="font-semibold text-slate-900 text-sm flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-500" />
              {PERSONAL_INFO.location}
            </span>
          </div>

          <div>
            <span className="text-slate-400 block mb-1 uppercase tracking-wider">FOCUS</span>
            <span className="font-semibold text-slate-900 text-sm flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-sky-500" />
              Full-Stack Web Systems
            </span>
          </div>

          <div>
            <span className="text-slate-400 block mb-1 uppercase tracking-wider">EDUCATION</span>
            <span className="font-semibold text-slate-900 text-sm flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-sky-500" />
              BSc Computer Science
            </span>
          </div>

          <div>
            <span className="text-slate-400 block mb-1 uppercase tracking-wider">STATUS</span>
            <span className="font-semibold text-slate-900 text-sm flex items-center gap-1.5 text-emerald-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Open to Opportunities
            </span>
          </div>
        </div>

        {/* Info Cards 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group glass-panel glass-panel-hover p-8 rounded-3xl border border-slate-200/80 flex flex-col justify-between"
                data-cursor="INFO"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-medium text-lg text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono-custom text-slate-400">
                  <span>0{idx + 1}</span>
                  <span className="group-hover:text-sky-500 transition-colors">LEARN MORE →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
