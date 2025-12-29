
import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { verifyPassword } from '../utils/security';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // Artificial delay for better UX (prevents brute force somewhat)
    await new Promise(r => setTimeout(r, 500));

    const isValid = await verifyPassword(input);
    
    if (isValid) {
      onLogin();
    } else {
      setError(true);
      setInput('');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden transition-colors duration-300">
          
          {/* Decorative Background Blur */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -ml-16 -mt-16 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mb-16 pointer-events-none"></div>

          <div className="flex flex-col items-center mb-8 relative z-10">
            <div className={`p-4 rounded-2xl mb-4 transition-colors duration-500 ${error ? 'bg-red-500/10 text-red-500 dark:text-red-400' : 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400'}`}>
              {error ? <AlertCircle className="w-8 h-8" /> : <ShieldCheck className="w-8 h-8" />}
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Security Check</h1>
            <p className="text-slate-500 text-sm mt-2">Enter access key to decrypt interface.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
              <input
                type="password"
                value={input}
                onChange={(e) => { setInput(e.target.value); setError(false); }}
                className={`w-full bg-slate-50 dark:bg-slate-950 border ${error ? 'border-red-500/50 focus:border-red-500' : 'border-slate-300 dark:border-slate-800 focus:border-indigo-500'} rounded-xl py-3 pl-11 pr-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-all`}
                placeholder="Password"
                autoFocus
              />
            </div>

            <button
              type="submit"
              disabled={loading || !input}
              className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all transform active:scale-95 ${
                loading 
                  ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
              }`}
            >
              {loading ? 'Verifying...' : 'Unlock System'}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          {error && (
            <div className="mt-4 text-center">
              <span className="text-xs text-red-500 dark:text-red-400 bg-red-500/10 px-3 py-1 rounded-full animate-fade-in">
                Access Denied: Invalid Key
              </span>
            </div>
          )}
        </div>
        
        <p className="text-center text-slate-400 dark:text-slate-600 text-xs mt-8 font-mono">
          SECURE CONNECTION :: SHA-256 ENCRYPTED
        </p>
      </div>
    </div>
  );
};