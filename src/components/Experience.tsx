import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, Building2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-200 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60">
            <Sparkles className="w-3.5 h-3.5" />
            04. Industry Experience
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Work & Internships
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl">
            Practical engineering experience delivering web products and production features.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="glass-card rounded-2xl p-6 sm:p-8 text-left border border-slate-200 dark:border-slate-800 relative overflow-hidden"
            >
              {/* Subtle accent bar on the left */}
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-500 to-sky-500" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Contribution Highlights */}
              <div className="mt-5 space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                  {exp.summary}
                </p>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Key Contributions & Impact:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {exp.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-slate-400 mr-2">Technologies:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
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
