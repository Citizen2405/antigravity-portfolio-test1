import React from 'react';
import { portfolioData } from '../data/portfolio-data';
import { 
  Building2, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Plane 
} from 'lucide-react';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>02 // PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering &amp; Testing Timeline
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Professional track record delivering test solutions and web applications, from enterprise airline cargo systems to responsive design workflows.
          </p>
        </div>

        {/* Vertical Experience Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, index) => {
            const isIBS = exp.company === 'IBS Software';
            return (
              <div key={index} className="relative group">
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border-2 transition-all ${
                    isIBS
                      ? 'bg-emerald-600 border-emerald-400 text-white ring-4 ring-emerald-500/20'
                      : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-500'
                  }`}
                >
                  {isIBS ? (
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </div>

                {/* Experience Card */}
                <div
                  className={`rounded-2xl transition-all ${
                    isIBS
                      ? 'p-6 sm:p-8 bg-gradient-to-br from-white via-white to-emerald-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-850 border-2 border-emerald-500/50 dark:border-emerald-500/40 shadow-lg shadow-emerald-500/5'
                      : 'p-6 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
                  }`}
                >
                  {/* Top Bar: Company, Role, Date */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {exp.company}
                        </h3>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                            CURRENT POSITION
                          </span>
                        )}
                      </div>
                      <div className="text-base sm:text-lg font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                        {exp.role}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg w-fit border border-slate-200 dark:border-slate-700">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Client Highlight for IBS Software */}
                  {isIBS && (
                    <div className="mb-5 p-3.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/20 text-xs sm:text-sm text-slate-800 dark:text-emerald-200 flex items-start gap-2.5">
                      <Plane className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-emerald-900 dark:text-emerald-300 font-semibold">
                          Enterprise Client Exposure:
                        </strong>{' '}
                        Testing and deployment for <strong>Air France-KLM Martinair Cargo</strong> on the mission-critical <strong>iCargo</strong> application.
                      </div>
                    </div>
                  )}

                  {/* Bullet Responsibilities */}
                  <div className="space-y-2.5 mb-6 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies tags */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-1">
                      Technologies:
                    </span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-xs px-2.5 py-1 rounded-md font-mono ${
                          isIBS
                            ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-medium'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
