import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ArrowRight, Mail, Terminal, Sparkles, Code2, Cpu, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for AI & Full-Stack Opportunities</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 dark:from-indigo-400 dark:via-sky-400 dark:to-cyan-300">Pratham Dixit</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 tracking-tight flex items-center gap-2">
                <span className="text-indigo-600 dark:text-indigo-400 font-mono text-lg">›</span>
                AI Engineer / Web Developer
              </p>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              B.Tech CSE student passionate about building practical AI systems, local LLM integrations, and robust full-stack web applications with clean, production-grade architecture.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-500" />
                Contact Me
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-mono font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Technical Card / Terminal Preview */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 text-left">
              {/* Terminal Header */}
              <div className="px-4 py-3 bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                  <span>pratham@engine:~/portfolio</span>
                </div>
                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                  ready
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-3 bg-slate-50/50 dark:bg-slate-950/60">
                <div className="text-slate-600 dark:text-slate-400">
                  <span className="text-indigo-600 dark:text-indigo-400">$</span> cat engineer_profile.json
                </div>
                <div className="p-3 rounded-lg bg-slate-900 text-slate-200 dark:bg-slate-900/90 dark:text-slate-300 overflow-x-auto space-y-1 text-xs">
                  <p><span className="text-indigo-400">"engineer"</span>: <span className="text-emerald-400">"Pratham Dixit"</span>,</p>
                  <p><span className="text-indigo-400">"focus"</span>: [<span className="text-amber-300">"Local LLMs (Ollama)"</span>, <span className="text-amber-300">"FastAPI"</span>, <span className="text-amber-300">"React"</span>],</p>
                  <p><span className="text-indigo-400">"flagship"</span>: <span className="text-emerald-400">"AI Law Advisor (OCR + RAG)"</span>,</p>
                  <p><span className="text-indigo-400">"education"</span>: <span className="text-cyan-300">"B.Tech CSE Undergraduate"</span>,</p>
                  <p><span className="text-indigo-400">"status"</span>: <span className="text-emerald-400">"Building & Shipping Systems"</span></p>
                </div>

                <div className="space-y-2 pt-1 text-xs">
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-indigo-500" />
                      Core Competency:
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">AI / ML + Full-Stack</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-sky-500" />
                      Primary Languages:
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Python, TS/JS, C++</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      Internship Experience:
                    </span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">Krazyfox (Web Dev)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
