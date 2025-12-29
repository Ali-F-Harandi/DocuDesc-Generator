
import React from 'react';
import { X, GitCommit, ShieldCheck, Zap, Package } from 'lucide-react';
import { CHANGELOG_DATA, LogEntry } from '../data/changelog';

interface ChangelogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const getIcon = (type: LogEntry['type']) => {
  switch (type) {
    case 'security': return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
    case 'fix': return <Zap className="w-4 h-4 text-amber-400" />;
    case 'initial': return <Package className="w-4 h-4 text-purple-400" />;
    default: return <GitCommit className="w-4 h-4 text-indigo-400" />;
  }
};

const getColor = (type: LogEntry['type']) => {
  switch (type) {
    case 'security': return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300';
    case 'fix': return 'bg-amber-500/10 border-amber-500/30 text-amber-300';
    case 'initial': return 'bg-purple-500/10 border-purple-500/30 text-purple-300';
    default: return 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300';
  }
};

export const ChangelogModal: React.FC<ChangelogModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl relative">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 rounded-t-2xl">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <GitCommit className="w-5 h-5 text-indigo-400" />
              System Changelog
            </h2>
            <p className="text-sm text-slate-500 mt-1">Track updates and patch notes.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {CHANGELOG_DATA.map((log, index) => (
            <div key={log.version} className="relative pl-8 border-l border-slate-800 last:border-0">
              {/* Timeline Dot */}
              <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full border-4 border-slate-900 flex items-center justify-center ${index === 0 ? 'bg-indigo-500' : 'bg-slate-700'}`}>
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <h3 className={`text-lg font-bold ${index === 0 ? 'text-white' : 'text-slate-400'}`}>v{log.version}</h3>
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border flex items-center gap-1 ${getColor(log.type)}`}>
                    {getIcon(log.type)}
                    {log.type}
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-mono mt-1 sm:mt-0">{log.date}</span>
              </div>

              <ul className="space-y-2">
                {log.changes.map((change, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="block w-1.5 h-1.5 mt-1.5 rounded-full bg-slate-600 flex-shrink-0"></span>
                    <span className="leading-relaxed">{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/50 rounded-b-2xl text-center">
             <span className="text-xs text-slate-600">DocuDesc Generator © {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};
