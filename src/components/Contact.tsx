import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Formulate mailto link prefilled to rameesllo78@gmail.com
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Ramees,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:rameesllo78@gmail.com?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Celebration Confetti Effect!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0284c7', '#38bdf8', '#0ea5e9', '#06b6d4']
      });

      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-slate-50/70 border-t border-slate-200/80 overflow-hidden">
      {/* Soft Light Blue Glowing Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-200/40 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Oversized Background Watermark */}
      <div className="absolute top-10 left-0 right-0 overflow-hidden pointer-events-none select-none -z-10 opacity-[0.035] text-center">
        <h2 className="font-display font-extrabold text-[22vw] tracking-tighter text-slate-900 uppercase leading-none">
          TALK
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono-custom font-semibold tracking-widest text-sky-600 uppercase">
            05 — GET IN TOUCH
          </span>
          <div className="w-12 h-[1px] bg-sky-300" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Huge Editorial Display & Social Links */}
          <div className="lg:col-span-6">
            <h2 className="font-display font-light text-6xl sm:text-7xl md:text-8xl text-slate-950 tracking-tight leading-[0.95] mb-6">
              LET'S <br />
              <span className="font-medium text-sky-600">TALK.</span>
            </h2>

            <p className="text-base sm:text-lg font-light text-slate-600 max-w-md leading-relaxed mb-10">
              Have a project, opportunity, or technical question? Feel free to reach out. I'm always open to discussing new ideas & real-world digital solutions.
            </p>

            {/* Email Direct Copy Box */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm max-w-md mb-8">
              <span className="text-[11px] font-mono-custom font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                DIRECT EMAIL ADDRESS
              </span>
              <div className="flex items-center justify-between gap-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono-custom text-base md:text-lg font-semibold text-slate-900 hover:text-sky-600 transition-colors truncate"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-600 rounded-xl transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="flex flex-wrap items-center gap-4 max-w-md">
              <a
                href="https://github.com/Rameesllo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-100 text-slate-800 text-xs font-mono-custom font-semibold uppercase tracking-wider rounded-xl border border-slate-200 transition-all shadow-2xs"
                data-cursor="GITHUB"
              >
                <GithubIcon className="w-4 h-4 text-slate-700" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="https://www.linkedin.com/in/ramees-llo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-100 text-slate-800 text-xs font-mono-custom font-semibold uppercase tracking-wider rounded-xl border border-slate-200 transition-all shadow-2xs"
                data-cursor="LINKEDIN"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-600" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Contact Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-sky-100/50">
              <h3 className="font-display font-medium text-2xl text-slate-900 mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 font-light mb-8">
                Fill out the fields below and I'll respond within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="p-8 bg-sky-50 rounded-2xl border border-sky-200 text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-sky-400/40">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-medium text-xl text-slate-900 mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed mb-6">
                    Thank you for reaching out. I've received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-white text-slate-900 text-xs font-mono-custom font-semibold rounded-full border border-slate-200 hover:border-sky-300 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono-custom font-semibold uppercase tracking-wider text-slate-600 mb-2">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramees Llo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100 transition-all font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-custom font-semibold uppercase tracking-wider text-slate-600 mb-2">
                      YOUR MOBILE NUMBER
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100 transition-all font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-custom font-semibold uppercase tracking-wider text-slate-600 mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100 transition-all font-light resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-slate-950 hover:bg-sky-600 text-white font-mono-custom text-xs font-semibold uppercase tracking-widest rounded-xl shadow-lg shadow-slate-900/10 hover:shadow-sky-400/20 transition-all duration-300 flex items-center justify-center gap-2 group"
                    data-cursor="SEND"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-4 h-4 text-sky-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
