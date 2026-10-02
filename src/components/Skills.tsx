import React from 'react';
import { portfolioData } from '../data/portfolio-data';
import { 
  ShieldCheck, 
  Code2, 
  Wrench, 
  Languages, 
  Cpu
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { skillCategories, languages } = portfolioData;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-500" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-emerald-500" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 border-t border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>03 // TECHNICAL COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Core Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Targeted automation frameworks, programming languages, and tooling utilized in real-world testing environments and web engineering.
          </p>
        </div>

        {/* 3 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, idx) => {
            const isAutomation = cat.title === 'Testing & Automation';
            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
                  isAutomation
                    ? 'bg-white dark:bg-slate-900 border-2 border-emerald-500/40 shadow-md shadow-emerald-500/5 ring-1 ring-emerald-500/20'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    {isAutomation && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                        PRIMARY FOCUS
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors ${
                        isAutomation
                          ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-500/30 text-emerald-800 dark:text-emerald-300'
                          : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-emerald-500/30'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages Strip */}
        <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-emerald-500">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  Spoken Languages
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Multilingual capability facilitating collaboration across international distributed teams.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {languages.map((lang, lIdx) => (
                <div
                  key={lIdx}
                  className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200"
                >
                  <span className="font-semibold">{lang.name}</span>
                  <span className="text-slate-400 text-[10px] ml-1.5 font-mono">({lang.level})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
