import React, { useState, useEffect } from 'react';
import type { Project } from '../types/portfolio';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Workflow,
  X,
  Maximize2,
  ShieldCheck,
  Boxes,
  Truck,
  Users,
  TrendingUp,
  Search,
  Zap,
  Move,
  Sparkles,
  Gamepad2,
  Smartphone,
  Activity,
  Clock,
  PieChart,
  AlertTriangle,
  BarChart,
  Calendar,
  DollarSign,
  FileText
} from 'lucide-react';

const FEATURE_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Boxes,
  Truck,
  Users,
  TrendingUp,
  Search,
  Zap,
  Move,
  Sparkles,
  Gamepad2,
  Smartphone,
  Activity,
  Clock,
  CheckCircle2,
  PieChart,
  AlertTriangle,
  BarChart,
  Calendar,
  DollarSign,
  FileText
};

interface ProjectDetailProps {
  project: Project;
  allProjects: Project[];
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  allProjects,
  onClose,
  onSelectProject,
}) => {
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-36 animate-fadeIn">
      {/* Light Blue Soft Ambient Lighting Background */}
      <div className="fixed top-1/4 left-10 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Top Back Button Navigation */}
        <button
          onClick={onClose}
          className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-700 font-mono-custom text-xs font-semibold uppercase tracking-wider rounded-full border border-slate-200 shadow-2xs transition-all mb-12"
          data-cursor="BACK"
        >
          <ArrowLeft className="w-4 h-4 text-sky-500 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Work</span>
        </button>

        {/* Hero Case Study Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono-custom font-semibold tracking-widest text-sky-600 uppercase">
              PROJECT {project.number} — CASE STUDY
            </span>
            <div className="w-12 h-[1px] bg-sky-300" />
          </div>

          <h1 className="font-display font-light text-5xl sm:text-6xl md:text-7xl text-slate-950 tracking-tight mb-6">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl font-light text-slate-600 leading-relaxed max-w-3xl mb-8">
            {project.shortDescription}
          </p>

          {/* Quick Metadata Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm text-xs font-mono-custom mb-12">
            <div>
              <span className="text-slate-400 block mb-1 uppercase tracking-wider">ROLE</span>
              <span className="font-semibold text-slate-900">{project.role}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1 uppercase tracking-wider">YEAR</span>
              <span className="font-semibold text-slate-900">{project.year}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1 uppercase tracking-wider">CATEGORY</span>
              <span className="font-semibold text-sky-600">{project.category}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1 uppercase tracking-wider">LINKS</span>
              <div className="flex items-center gap-3 font-semibold text-slate-900">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-600 flex items-center gap-1"
                >
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-600 flex items-center gap-1"
                  >
                    Demo <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Large Hero Main Screenshot Image */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-sky-100/50 mb-16 bg-slate-100 aspect-[16/9]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Overview & Problem vs Solution Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            <h2 className="font-display font-medium text-2xl text-slate-950 mb-4 tracking-tight">
              Project Overview
            </h2>
            <p className="text-sm font-light text-slate-600 leading-relaxed">
              {project.overview}
            </p>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <h4 className="text-xs font-mono-custom font-semibold uppercase tracking-wider text-slate-400 mb-3">
                TECH STACK USED
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white text-slate-800 text-xs font-mono-custom rounded-lg border border-slate-200 shadow-2xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-amber-600 font-mono-custom text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                THE PROBLEM
              </div>
              <h3 className="font-display font-medium text-xl text-slate-900 mb-3">
                What challenge needed solving?
              </h3>
              <p className="text-sm font-light text-slate-600 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-8 bg-sky-50/70 rounded-3xl border border-sky-200/80 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-sky-700 font-mono-custom text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                THE SOLUTION
              </div>
              <h3 className="font-display font-medium text-xl text-slate-900 mb-3">
                Engineered technical architecture
              </h3>
              <p className="text-sm font-light text-slate-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Architecture Diagram Visualization */}
        <div className="mb-20 p-8 md:p-12 bg-white rounded-3xl border border-slate-200/90 shadow-md">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono-custom font-semibold text-sky-600 uppercase tracking-widest block mb-1">
                SYSTEM ARCHITECTURE
              </span>
              <h2 className="font-display font-medium text-2xl text-slate-950">
                End-to-End Data Flow Diagram
              </h2>
            </div>
            <span className="px-3 py-1 bg-sky-50 text-sky-700 text-xs font-mono-custom rounded-full border border-sky-200">
              Type-Safe Flow
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {project.architectureNodes.map((node, idx) => (
              <div
                key={idx}
                className="relative p-6 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono-custom text-slate-400 block mb-2">
                    LAYER 0{idx + 1}
                  </span>
                  <h4 className="font-display font-semibold text-slate-900 text-base mb-1">
                    {node.label}
                  </h4>
                  <p className="text-xs text-slate-500 font-mono-custom font-light">
                    {node.subtext}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between text-sky-500">
                  <Workflow className="w-5 h-5" />
                  {idx < project.architectureNodes.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-slate-300 absolute -right-3 top-1/2 -translate-y-1/2 z-10" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mb-20">
          <span className="text-xs font-mono-custom font-semibold text-sky-600 uppercase tracking-widest block mb-2">
            CORE CAPABILITIES
          </span>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-slate-950 mb-10">
            Key Features & System Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feat, idx) => {
              const IconComp = FEATURE_ICON_MAP[feat.icon] || CheckCircle2;
              return (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:border-sky-300 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-medium text-lg text-slate-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs font-light text-slate-500 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Image Gallery */}
        <div className="mb-20">
          <span className="text-xs font-mono-custom font-semibold text-sky-600 uppercase tracking-widest block mb-2">
            INTERFACE GALLERY
          </span>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-slate-950 mb-8">
            High-Resolution Screenshots
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveGalleryImage(img.url)}
                className="group cursor-pointer relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md hover:shadow-xl transition-all aspect-[16/10]"
                data-cursor="EXPAND"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                  <div>
                    <h4 className="font-display font-medium text-sm text-white mb-0.5">{img.title}</h4>
                    <p className="text-[11px] text-slate-300 font-light line-clamp-1">{img.caption}</p>
                  </div>
                  <div className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Challenges & Solutions */}
        <div className="mb-20 p-8 md:p-12 bg-slate-900 text-white rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-mono-custom font-semibold text-sky-400 uppercase tracking-widest block mb-2">
            ENGINEERING LOGS
          </span>
          <h2 className="font-display font-light text-3xl text-white mb-8">
            Technical Challenges & Resolutions
          </h2>

          <div className="space-y-6">
            {project.challenges.map((item, idx) => (
              <div key={idx} className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700">
                <h4 className="text-xs font-mono-custom text-amber-400 uppercase tracking-wider mb-2">
                  CHALLENGE #{idx + 1}
                </h4>
                <p className="text-sm font-light text-slate-200 mb-4">{item.challenge}</p>

                <div className="pt-4 border-t border-slate-700/80 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-mono-custom text-sky-400 uppercase tracking-wider mb-1">
                      IMPLEMENTED SOLUTION
                    </h5>
                    <p className="text-xs font-light text-slate-300 leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics Results */}
        <div className="mb-24 p-8 bg-sky-50 rounded-3xl border border-sky-200">
          <h3 className="font-display font-medium text-xl text-slate-900 mb-6 text-center">
            Measured Impact & Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((res, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl text-center border border-sky-100 shadow-2xs">
                <span className="font-display font-light text-4xl text-sky-600 block mb-1">
                  {res.metric}
                </span>
                <span className="text-xs font-mono-custom text-slate-600 uppercase tracking-wider">
                  {res.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Bottom Navigation Footer */}
        <div className="pt-12 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="group flex items-center gap-3 text-slate-700 hover:text-sky-600 font-mono-custom text-xs font-semibold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 text-sky-500 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <span className="text-[10px] text-slate-400 block">PREVIOUS PROJECT</span>
              <span>{prevProject.title}</span>
            </div>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-3 bg-slate-950 text-white font-mono-custom text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-sky-600 transition-colors"
          >
            All Projects Grid
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="group flex items-center gap-3 text-slate-700 hover:text-sky-600 font-mono-custom text-xs font-semibold uppercase tracking-wider text-right"
          >
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block">NEXT PROJECT</span>
              <span>{nextProject.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeGalleryImage && (
        <div
          onClick={() => setActiveGalleryImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-fadeIn"
        >
          <button
            onClick={() => setActiveGalleryImage(null)}
            className="absolute top-6 right-6 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activeGalleryImage}
            alt="Gallery Lightbox Preview"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-white/20"
          />
        </div>
      )}
    </div>
  );
};
