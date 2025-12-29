
import React, { useState, useEffect } from 'react';
import { Terminal, Layers, Info } from 'lucide-react';
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

  // Check session storage on load to persist login during refresh
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('docudesc_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

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
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-8 animate-in fade-in duration-700">
      <ChangelogModal isOpen={isChangelogOpen} onClose={() => setIsChangelogOpen(false)} />

      {/* Header */}
      <header className="w-full max-w-7xl mb-12 flex flex-col items-center text-center space-y-4">
        <div className="bg-indigo-500/10 p-4 rounded-2xl border border-indigo-500/20 backdrop-blur-sm">
          <Terminal className="w-10 h-10 text-indigo-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          DocuDesc Generator
        </h1>
        <p className="text-slate-400 max-w-2xl text-lg">
          Research tool for generating high-fidelity mockup descriptions.
          Customize country, document type, and format to adapt the template instantly.
        </p>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Configuration */}
        <div className="lg:col-span-4 space-y-6">
          <ConfigurationForm onSubmit={handleGenerate} isLoading={loading} />
          
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm animate-fade-in">
              {error}
            </div>
          )}

          <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-slate-300 font-medium flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-emerald-400" />
              Smart Template Engine
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              This tool automatically adapts technical specifications (like MRZ codes vs. Barcodes vs. Transactions) based on the selected document type and country context.
            </p>
          </div>
        </div>

        {/* Right Column: Output */}
        <div className="lg:col-span-8">
          <ResultDisplay result={result} isLoading={loading} />
        </div>

      </main>

      {/* Footer */}
      <footer className="mt-auto pt-12 pb-6 w-full max-w-7xl border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-1.5">
           <span className="opacity-70">Created by</span>
           <a 
             href="https://github.com/Ali-F-Harandi" 
             target="_blank" 
             rel="noreferrer"
             className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 hover:opacity-80 transition-opacity"
           >
             Ali F. Harandi
           </a>
        </div>

        <div className="flex items-center gap-6">
           <button 
             onClick={() => setIsChangelogOpen(true)}
             className="flex items-center gap-2 hover:text-indigo-400 transition-colors group"
           >
             <span className="bg-slate-800 px-2 py-0.5 rounded text-xs font-mono group-hover:bg-indigo-500/10 transition-colors">v{APP_VERSION}</span>
             <span className="text-xs">Changelog</span>
           </button>
           <p>© {new Date().getFullYear()} DocuDesc Research.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
