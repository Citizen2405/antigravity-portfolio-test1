import React from 'react';
import { portfolioData } from '../data/portfolio-data';
import { 
  ShieldCheck, 
  Code2, 
  Palette, 
  GraduationCap, 
  CheckCircle2, 
  Cpu 
} from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: ShieldCheck,
      title: "Enterprise Test Automation",
      description:
        "Hands-on experience deploying and testing the iCargo platform for Air France-KLM Martinair Cargo, developing automated regression test suites using Java, Selenium, and TestNG.",
    },
    {
      icon: Palette,
      title: "UI/UX & Design Systems",
      description:
        "Practical background in interface architecture and design systems from Zidio Development, creating user-centric layouts and Figma wireframes.",
    },
    {
      icon: Code2,
      title: "Web Engineering & SCSS",
      description:
        "Front-end experience from NodDesk specializing in SCSS/SASS modular stylesheets, enabling deep insight into DOM hierarchies and resilient locator strategies.",
    },
    {
      icon: GraduationCap,
      title: "Computer Science Foundation",
      description:
        "B.Tech in Computer Science and Engineering from College of Engineering, Aranmula (CGPA: 7.91) with strong principles in data structures, algorithms, and software testing.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-t border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>01 // PROFESSIONAL OVERVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering reliability through automation &amp; design
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {personal.summary}
          </p>
        </div>

        {/* Two-column layout: Core Highlights & Fast Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Highlight Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Grounded Fact Sheet */}
          <div className="lg:col-span-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-emerald-500" />
              <span>Verified Candidate Profile</span>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">
                  CURRENT ROLE
                </span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  Test Solutions Engineer
                </span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 block">
                  IBS Software (Oct 2024 – Present)
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">
                  SPECIALIZATION
                </span>
                <span className="text-slate-800 dark:text-slate-200">
                  Automation Testing (Java, Selenium, TestNG)
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">
                  SECONDARY EXPERTISE
                </span>
                <span className="text-slate-800 dark:text-slate-200">
                  UI/UX Design, Web Development (SCSS)
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">
                  EDUCATION
                </span>
                <span className="text-slate-800 dark:text-slate-200">
                  B.Tech in CSE • 2023 (CGPA 7.91)
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">
                  College of Engineering, Aranmula
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">
                  LOCATION &amp; CONTACT
                </span>
                <span className="text-slate-800 dark:text-slate-200">
                  Pathanamthitta, Kerala, India
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">
                  {personal.email}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-emerald-600 dark:text-emerald-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Resume Verified
              </span>
              <span>Ref: AFKLM-iCargo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
