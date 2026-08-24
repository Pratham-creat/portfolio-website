import React, { useState } from 'react';
import { achievementsData } from '../data/portfolioData';
import { Trophy, Award, Sparkles, ShieldCheck, ExternalLink, Filter } from 'lucide-react';

type FilterType = 'all' | 'certification' | 'hackathon';

export const Achievements: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredData = achievementsData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const certCount = achievementsData.filter((a) => a.category === 'certification').length;
  const hackathonCount = achievementsData.filter((a) => a.category === 'hackathon').length;

  return (
    <section id="achievements" className="py-20 border-t border-slate-200 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60">
              <Sparkles className="w-3.5 h-3.5" />
              05. Milestones & Credentials
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Achievements & Certifications
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl">
              Industry credentials, Microsoft & IBM certifications, and technical hackathon milestones.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              All ({achievementsData.length})
            </button>
            <button
              onClick={() => setActiveFilter('certification')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeFilter === 'certification'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Certifications ({certCount})
            </button>
            <button
              onClick={() => setActiveFilter('hackathon')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeFilter === 'hackathon'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Hackathons ({hackathonCount})
            </button>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item) => {
            const isHackathon = item.category === 'hackathon';

            return (
              <div
                key={item.id}
                className={`glass-card rounded-2xl p-6 text-left border flex flex-col justify-between transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg ${
                  isHackathon
                    ? 'border-amber-300/80 dark:border-amber-700/60 bg-gradient-to-b from-amber-50/20 via-transparent to-transparent dark:from-amber-950/20'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="space-y-4">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isHackathon
                          ? 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400'
                          : 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                      }`}
                    >
                      {isHackathon ? <Trophy className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                    </div>

                    <span
                      className={`px-2.5 py-0.5 text-[11px] font-mono font-semibold rounded-full border ${
                        isHackathon
                          ? 'bg-amber-100/70 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800'
                          : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div className="space-y-1">
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 flex-wrap">
                      <ShieldCheck className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span>{item.issuer}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer: Skills + Credential Link */}
                <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800/80 space-y-3.5">
                  {/* Skills Gained Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential Action */}
                  {item.credentialUrl && (
                    <div className="pt-1">
                      <a
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group cursor-pointer"
                      >
                        <span>Verify Credential</span>
                        <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
