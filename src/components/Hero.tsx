import React from 'react';
import { portfolioData } from '../data/portfolio-data';
import { TestPipelineVisualizer } from './TestPipelineVisualizer';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('experience');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background technical grid and subtle gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.12),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(15,23,42,0))]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Test Solutions Engineer • IBS Software</span>
            </div>

            {/* Main Header */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {personal.name}
              </h1>
              <div className="mt-2 text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
                {personal.title}
              </div>
              <p className="mt-2 text-sm sm:text-base font-mono text-slate-500 dark:text-slate-400">
                Specialized in QA Automation • UI/UX Design • Web Development
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              {personal.tagline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#experience"
                onClick={handleScrollToWork}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-medium text-sm transition-all shadow-md shadow-emerald-600/20 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={personal.cvPath}
                download="K_Wilbur_Donovan_Updated_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-medium text-sm border border-slate-300 dark:border-slate-700 transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-emerald-500" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Secondary Links & Contact Highlights */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Wilbur's GitHub profile"
                className="inline-flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors p-1"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Wilbur's LinkedIn profile"
                className="inline-flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors p-1"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                aria-label="Send email to Wilbur"
                className="inline-flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors p-1"
              >
                <Mail className="w-4 h-4" />
                <span>{personal.email}</span>
              </a>

              <div className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400 p-1">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Pathanamthitta, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Element representing automated testing */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full relative">
              {/* Subtle ambient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/10 rounded-2xl blur-xl opacity-75 -z-10" />
              
              <TestPipelineVisualizer />
            </div>

            {/* Micro subtitle under visualizer */}
            <p className="mt-3 text-xs font-mono text-slate-500 dark:text-slate-400 text-center">
              Active test suite simulation: Java • Selenium • TestNG • RapidBotz workflow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
