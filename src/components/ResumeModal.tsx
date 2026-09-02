import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import resumePdf from '../assets/MOHAMMED_RAMEES_T_FlowCV_Resume_2026-09-02.pdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'MOHAMMED_RAMEES_T_FlowCV_Resume_2026-09-02.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8 animate-fadeIn">
      <div className="bg-white w-full max-w-5xl h-[90vh] rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Top Header Bar */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-mono-custom font-bold text-base shadow-md shadow-sky-500/30">
              R
            </div>
            <div>
              <h3 className="font-display font-medium text-base sm:text-lg text-white">
                MOHAMMED RAMEES T — Official Resume
              </h3>
              <p className="text-xs text-sky-200/80 font-mono-custom font-light">
                Full-Stack Software Engineer (PDF Preview)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono-custom font-medium rounded-full transition-colors border border-slate-700"
              title="Open PDF in new browser tab"
            >
              <span>Open Tab</span>
              <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
            </a>

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-xs font-mono-custom font-semibold rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
              aria-label="Close Resume Preview"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Live Embedded PDF Viewer Container */}
        <div className="flex-1 bg-slate-100 p-2 sm:p-4 overflow-hidden relative">
          <iframe
            src={`${resumePdf}#view=FitH`}
            className="w-full h-full rounded-2xl border border-slate-200/80 shadow-inner bg-white"
            title="MOHAMMED RAMEES T Resume PDF Viewer"
          />

          {/* Fallback download button for mobile browsers that block iframe PDF rendering */}
          <div className="sm:hidden absolute bottom-6 right-6 z-10">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-slate-900 text-white text-xs font-mono-custom font-semibold rounded-full shadow-lg flex items-center gap-2"
            >
              <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              <span>View Full PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
