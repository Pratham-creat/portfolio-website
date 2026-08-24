import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';
import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI / ML & LLMs' },
    { id: 'web', label: 'Web & Full-Stack' },
    { id: 'systems', label: 'Systems & Tools' },
  ];

  const filteredProjects = projectsData.filter(
    (p) => selectedCategory === 'all' || p.category === selectedCategory
  );

  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60">
              <Sparkles className="w-3.5 h-3.5" />
              03. Featured Work
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Selected Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl">
              Real-world systems, local AI pipelines, and full-stack software built with clean engineering standards.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as ProjectCategory)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isFlagship = project.id === 'ai-law-advisor';

            return (
              <div
                key={project.id}
                className={`glass-card rounded-2xl p-6 sm:p-7 text-left border flex flex-col justify-between relative group transition-all duration-300 ${
                  isFlagship
                    ? 'border-indigo-300 dark:border-indigo-800/80 bg-gradient-to-b from-indigo-50/20 via-transparent to-transparent dark:from-indigo-950/20 shadow-md'
                    : 'border-slate-200 dark:border-slate-800 shadow-sm'
                }`}
              >
                {/* Top Metadata */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 text-[11px] font-mono font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {project.category === 'ai-ml' ? 'AI / LLMs' : project.category === 'web' ? 'Full-Stack' : 'System Application'}
                      </span>
                      {isFlagship && (
                        <span className="px-2.5 py-0.5 text-[11px] font-mono font-semibold rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Flagship Project
                        </span>
                      )}
                    </div>
                    {project.metrics && (
                      <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Project Title & Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1 cursor-pointer"
                        title="View Full Architecture Details"
                        aria-label="View Full Architecture Details"
                      >
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Problem & What was built concise summary */}
                  <div className="space-y-2.5 pt-1 text-xs">
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 space-y-1">
                      <span className="text-[10px] font-mono uppercase font-bold text-rose-600 dark:text-rose-400 tracking-wider">
                        Problem:
                      </span>
                      <p className="text-slate-600 dark:text-slate-300 leading-normal line-clamp-2">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 space-y-1">
                      <span className="text-[10px] font-mono uppercase font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
                        What I Built:
                      </span>
                      <p className="text-slate-600 dark:text-slate-300 leading-normal line-clamp-2">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Highlights bullet list */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1">
                      {project.keyFeatures.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <span className="text-indigo-500 font-bold">›</span>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Tech Badges & Actions */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      Architecture Breakdown & Details →
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label="GitHub Repository"
                        title="GitHub Repository"
                      >
                        <GithubIcon size={16} />
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                          aria-label="Live Demo / Repository"
                          title="Live Demo / Repository"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep-dive Project Architecture Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
