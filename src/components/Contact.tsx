import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio-data';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  ExternalLink,
  AlertCircle
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Wilbur,\n\n${formData.message}\n\n---\nSender: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>07 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's build better software.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Open for QA Automation, Test Engineering, and quality-driven software roles. Reach out via email, phone, or connect on LinkedIn and GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">EMAIL ADDRESS</span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">PHONE NUMBER</span>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                aria-label="Copy phone number"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {copiedPhone ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between group hover:border-emerald-500/40 transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">LINKEDIN PROFILE</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    linkedin.com/in/k-wilbur/
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between group hover:border-emerald-500/40 transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 flex items-center justify-center">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">GITHUB PROFILE</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    github.com/Citizen2405
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </a>

            {/* Location Notice */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Based in Pathanamthitta, Kerala, India • Open to on-site &amp; remote roles</span>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out the details below to draft an email directly to K Wilbur Donovan.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/30 text-slate-900 dark:text-emerald-200 space-y-4">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Message Prepared!</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    To guarantee delivery without third-party form intermediaries, you can now launch your local email client with your message pre-loaded:
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      onClick={handleOpenMailClient}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm transition-colors shadow-sm"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-xs sm:text-sm transition-colors"
                    >
                      Edit Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Alex Henderson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Inquire about QA Automation roles, test framework consulting, or collaborations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-medium text-sm transition-all shadow-md shadow-emerald-600/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Prepare Message</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono pt-2">
                    <AlertCircle className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span>Client-side direct mailto dispatch • No credentials stored</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
