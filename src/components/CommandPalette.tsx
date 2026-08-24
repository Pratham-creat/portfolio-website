import React, { useState, useEffect } from 'react';
import { personalInfo, projectsData } from '../data/portfolioData';
import { Search, X, Code2, FolderGit2, Mail, ExternalLink, ArrowRight, CornerDownLeft, Sparkles, User, Briefcase, Award } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickNav = [
    { label: 'Jump to: About', href: '#about', icon: <User className="w-4 h-4 text-indigo-500" /> },
    { label: 'Jump to: Technical Skills', href: '#skills', icon: <Code2 className="w-4 h-4 text-sky-500" /> },
    { label: 'Jump to: Featured Projects', href: '#projects', icon: <FolderGit2 className="w-4 h-4 text-emerald-500" /> },
    { label: 'Jump to: Experience (Krazyfox)', href: '#experience', icon: <Briefcase className="w-4 h-4 text-amber-500" /> },
    { label: 'Jump to: Achievements & Certs', href: '#achievements', icon: <Award className="w-4 h-4 text-purple-500" /> },
    { label: 'Jump to: Contact', href: '#contact', icon: <Mail className="w-4 h-4 text-rose-500" /> },
  ];

  const filteredNav = quickNav.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projectsData.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
      p.tagline.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Palette Container */}
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150 text-left">
        {/* Search Bar */}
        <div className="p-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or section..."
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          <kbd className="px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-4">
          {/* Navigation Items */}
          {filteredNav.length > 0 && (
            <div className="space-y-1">
              <div className="px-2.5 py-1 text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                Navigation
              </div>
              {filteredNav.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <CornerDownLeft className="w-3.5 h-3.5 text-slate-400" />
                </a>
              ))}
            </div>
          )}

          {/* Project Items */}
          {filteredProjects.length > 0 && (
            <div className="space-y-1">
              <div className="px-2.5 py-1 text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                Projects
              </div>
              {filteredProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => {
                    onClose();
                    onSelectProject(project.id);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left"
                >
                  <div className="space-y-0.5">
                    <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>{project.title}</span>
                      <span className="px-1.5 py-0.2 text-[9px] font-mono rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                        {project.category}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-sm">
                      {project.tagline}
                    </div>
                  </div>
                  <span className="text-xs text-indigo-500 font-mono">View →</span>
                </button>
              ))}
            </div>
          )}

          {/* Quick Actions */}
          <div className="space-y-1 pt-1 border-t border-slate-100 dark:border-slate-800/80">
            <div className="px-2.5 py-1 text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
              Social Links
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                GitHub Profile (@pratham-dixit)
              </span>
              <span className="text-[10px] font-mono text-slate-400">External ↗</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                LinkedIn Profile
              </span>
              <span className="text-[10px] font-mono text-slate-400">External ↗</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
          <span>Use ⌘K or Ctrl+K anywhere</span>
          <span>Pratham Dixit Portfolio</span>
        </div>
      </div>
    </div>
  );
};
