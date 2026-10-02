import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { DesignAndWeb } from './components/DesignAndWeb';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

export function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      {/* Skip to Content for Screen Readers & Keyboard Accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-emerald-600 text-white rounded-lg shadow-lg font-mono text-sm"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-400 font-sans transition-colors duration-200">
        <Navbar />

        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <DesignAndWeb />
          <Education />
          <Contact />
        </main>

        <Footer />

        {/* Floating Quick Back-To-Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900 dark:bg-slate-800 text-white dark:text-emerald-400 border border-slate-700/80 shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
