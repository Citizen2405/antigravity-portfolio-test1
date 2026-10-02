import React from 'react';
import { portfolioData } from '../data/portfolio-data';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  ArrowUp, 
  Mail, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs">
                WD
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-base">
                {personal.name}
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500 font-mono">
              Test Automation Engineer • UI/UX Design • Web Development
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personal.cvPath}
              download="K_Wilbur_Donovan_Updated_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors border border-slate-200 dark:border-slate-700"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-500" />
              <span>CV PDF</span>
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits & Verification */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} K Wilbur Donovan. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Built with React, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
