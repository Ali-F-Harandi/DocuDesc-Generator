
import React, { useState, useEffect } from 'react';
import { Terminal, Layers, Info, Moon, Sun } from 'lucide-react';
import { DocumentRequest, GeneratedResponse } from './types';
import { ConfigurationForm } from './components/ConfigurationForm';
import { ResultDisplay } from './components/ResultDisplay';
import { generateDescription } from './services/geminiService';
import { Login } from './components/Login';
import { ChangelogModal } from './components/ChangelogModal';
import { APP_VERSION } from './data/changelog';

const App: React.FC = () => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GeneratedResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // UI State
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Check session storage on load to persist login during refresh
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('docudesc_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
    
    // Check system preference for theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
  }, []);

  // Update HTML class for Tailwind Dark Mode
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('docudesc_auth', 'true');
  };

  const handleGenerate = async (request: DocumentRequest) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const generatedText = await generateDescription(request);
      setResult({
        text: generatedText,
        timestamp: new Date().toISOString(),
        request: request
      });
    } catch (err) {
      console.error("Generation failed:", err);
      setError("Failed to generate description. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <ChangelogModal isOpen={isChangelogOpen} onClose={() => setIsChangelogOpen(false)} />

      {/* Main Container - Constrained Width */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col flex-grow">
        
        {/* Compact Desktop Header */}
        <header className="w-full mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800/60 pb-6">
          <div className="flex items-center gap-4">
            <div className="bg-indigo-500/10 p-3 rounded-xl border border-indigo-500/20 backdrop-blur-sm">
              <Terminal className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                DocuDesc Generator
              </h1>
              <p className="text-slate-500 text-xs tracking-wide uppercase font-semibold">
                Professional Research Tool <span className="text-indigo-500/50 mx-2">|</span> v{APP_VERSION}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
             <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl hidden lg:block text-right">
               Generate high-fidelity mockup descriptions.
               <span className="opacity-50 block text-xs mt-1">Select configuration parameters to adapt the engine.</span>
             </p>
             
             {/* Theme Toggle */}
             <button 
               onClick={toggleTheme}
               className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
               title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
             >
               {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
             </button>
          </div>
        </header>

        {/* Main Content - Full Width Grid */}
        <main className="w-full flex-grow grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Configuration (Fixed Sidebar feel) */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6">
            <ConfigurationForm onSubmit={handleGenerate} isLoading={loading} />
            
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 dark:text-red-400 text-sm animate-fade-in">
                {error}
              </div>
            )}

            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-5 rounded-xl shadow-sm dark:shadow-none">
              <h3 className="text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2 mb-2 text-sm">
                <Layers className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                Smart Context Engine
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                System automatically calibrates technical nomenclature (e.g., ICAO/MRZ standards vs. Banking OCR) based on the target jurisdiction.
              </p>
            </div>
          </div>

          {/* Right Column: Output (Expansive Canvas) */}
          <div className="lg:col-span-8 xl:col-span-9 flex flex-col">
            <ResultDisplay result={result} isLoading={loading} />
          </div>

        </main>

        {/* Footer - Full Width */}
        <footer className="mt-8 pt-6 w-full border-t border-slate-200 dark:border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-600">
          <div className="flex items-center gap-2">
            <span className="opacity-70">Architecture by</span>
            <a 
              href="https://github.com/Ali-F-Harandi" 
              target="_blank" 
              rel="noreferrer"
              className="font-medium text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
            >
              Ali F. Harandi
            </a>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsChangelogOpen(true)}
              className="flex items-center gap-2 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors group"
            >
              <div className="h-2 w-2 rounded-full bg-emerald-500 group-hover:animate-pulse"></div>
              <span className="text-xs font-mono">System Status: Stable</span>
            </button>
            <p className="text-xs opacity-50">© {new Date().getFullYear()} DocuDesc Research.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;