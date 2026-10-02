import React from 'react';
import { portfolioData } from '../data/portfolio-data';
import { GithubIcon } from './Icons';
import { 
  FolderGit2, 
  ExternalLink, 
  Calendar, 
  Gamepad2,
  TrendingUp,
  PackageCheck
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects, personal } = portfolioData;

  const getProjectIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Gamepad2 className="w-5 h-5 text-emerald-500" />;
      case 1:
        return <TrendingUp className="w-5 h-5 text-emerald-500" />;
      case 2:
        return <PackageCheck className="w-5 h-5 text-emerald-500" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>04 // FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering Projects &amp; Implementations
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Selected software development, machine learning, and automation projects built during academic and self-directed initiatives.
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Category and Year */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    {getProjectIcon(idx)}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-semibold">
                    <Calendar className="w-3 h-3 text-emerald-500" />
                    {project.year}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium uppercase tracking-wider mb-1">
                  {project.category}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800 mb-5">
                  {project.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Real Verified Link */}
                <div className="pt-2">
                  <a
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View GitHub Profile</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
