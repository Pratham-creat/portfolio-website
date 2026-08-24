import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, Brain, Layers, ShieldCheck, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60">
            <Sparkles className="w-3.5 h-3.5" />
            01. Background & Perspective
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            Engineering software at the convergence of machine intelligence and modern web engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 text-base leading-relaxed space-y-4">
              <p>
                I am a <strong className="text-slate-900 dark:text-white font-semibold">B.Tech Computer Science and Engineering student</strong> with a hands-on obsession for building practical software solutions. Instead of treating AI as a buzzword or writing cookie-cutter applications, I focus on integrating machine learning models with robust backend APIs and intuitive frontends.
              </p>
              <p>
                My project journey started from core systems and web technologies, quickly evolving into specialized AI engineering. I have built local inference platforms using <strong className="text-indigo-600 dark:text-indigo-400">Ollama and OCR pipelines</strong> (like in my <em>AI Law Advisor</em> project), content platforms with media CDNs, and responsive web portals.
              </p>
              <p>
                During my web development internship at <strong className="text-slate-900 dark:text-white font-semibold">Krazyfox</strong>, I honed production practices: modular component structure, API optimization, cross-browser debugging, and collaborative Git workflows.
              </p>
            </div>

            {/* Quick Education Callout */}
            <div className="p-4 rounded-xl glass-panel border border-slate-200 dark:border-slate-800 flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {personalInfo.education.degree}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {personalInfo.education.status} • Focus on {personalInfo.education.focus}
                </p>
              </div>
            </div>
          </div>

          {/* 3 Core Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-xl glass-card text-left space-y-2 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5 text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                <Brain className="w-4 h-4" />
                <span>Applied AI & LLMs</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                Deploying local open-source models via Ollama, OCR text extraction, prompt engineering, and context-aware RAG pipelines with privacy in mind.
              </p>
            </div>

            <div className="p-4 rounded-xl glass-card text-left space-y-2 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5 text-sky-600 dark:text-sky-400 font-semibold text-sm">
                <Layers className="w-4 h-4" />
                <span>Full-Stack Web Architecture</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                Designing end-to-end architectures using React, Next.js, FastAPI, Flask, Express, and SQL databases with clean type safety and responsive design.
              </p>
            </div>

            <div className="p-4 rounded-xl glass-card text-left space-y-2 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Clean Code & Team Leadership</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                Proven experience leading developer teams in hackathons, maintaining clean Git versioning, writing structured documentation, and rapid execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
