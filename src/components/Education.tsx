import React from 'react';
import { portfolioData } from '../data/portfolio-data';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  CheckCircle2 
} from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>06 // ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education &amp; Qualifications
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Formal undergraduate degree in Computer Science and Engineering establishing strong engineering foundations.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider block">
                  Undergraduate Degree
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {education.degree} in {education.field}
                </h3>
                <p className="text-base font-medium text-slate-700 dark:text-slate-300 mt-1">
                  {education.institution}
                </p>
              </div>
            </div>

            <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                Graduated {education.year}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-bold">
                <Award className="w-3.5 h-3.5 text-emerald-500" />
                CGPA: {education.cgpa}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Core Studies: Software Engineering, Data Structures, OOP (Java)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Database Management Systems (MySQL), Linux Environment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
