import React from 'react';
import { portfolioData } from '../data/portfolio-data';
import { 
  Palette, 
  Code2, 
  Layout, 
  Building2
} from 'lucide-react';

export const DesignAndWeb: React.FC = () => {
  const { designAndWeb } = portfolioData;

  return (
    <section id="design-web" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 border-t border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>05 // SECONDARY EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            UI/UX Design &amp; Web Development
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {designAndWeb.summary}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {designAndWeb.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  {idx === 0 ? (
                    <Palette className="w-5 h-5" />
                  ) : idx === 1 ? (
                    <Code2 className="w-5 h-5" />
                  ) : (
                    <Layout className="w-5 h-5" />
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                {pillar.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Company Experience Connections */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
            Hands-on Professional Exposure in Design &amp; Web
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3">
              <Building2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900 dark:text-white text-sm block">
                  Zidio Development • UI/UX Design Intern (May 2024)
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300 mt-1 block">
                  Designed user interfaces and contributed to design systems using Figma for a resume-building web platform.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3">
              <Building2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900 dark:text-white text-sm block">
                  NodDesk • Web Development Intern (Jun 2024)
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300 mt-1 block">
                  Engineered front-end web development modules with specific focus on SCSS/SASS stylesheets and responsive components.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
