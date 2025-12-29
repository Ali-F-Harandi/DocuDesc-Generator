
import React from 'react';
import { GeneratedResponse } from '../types';
import { Copy, CheckCheck, FileText, Code, Eye } from 'lucide-react';

interface ResultDisplayProps {
  result: GeneratedResponse | null;
  isLoading: boolean;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, isLoading }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="h-full min-h-[500px] bg-slate-900 border border-slate-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-6 animate-pulse">
        <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center">
          <LoaderSkeleton />
        </div>
        <div className="space-y-3 max-w-sm">
          <div className="h-4 bg-slate-800 rounded w-3/4 mx-auto"></div>
          <div className="h-3 bg-slate-800 rounded w-1/2 mx-auto"></div>
        </div>
        <p className="text-slate-500 text-sm">Generating HTML description...</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="h-full min-h-[500px] bg-slate-900/50 border border-slate-800 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center text-slate-500">
        <FileText className="w-16 h-16 mb-4 opacity-20" />
        <p className="text-lg font-medium">No Output Generated</p>
        <p className="text-sm mt-2">Configure the settings on the left and click Generate to see the results here.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. Preview Box */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-xl overflow-hidden flex flex-col flex-1 min-h-[500px]">
        <div className="bg-slate-900/80 p-4 border-b border-slate-700 flex items-center gap-2 backdrop-blur-md">
           <Eye className="w-4 h-4 text-indigo-400" />
           <h3 className="font-semibold text-white text-sm">Live Preview</h3>
           <div className="ml-auto flex items-center gap-2">
             <div className="px-2 py-1 bg-indigo-500/10 rounded text-xs text-indigo-300 font-mono">
                {result.request.country} • {result.request.documentType}
             </div>
           </div>
        </div>
        {/* Added text-gray-900 to ensure dark text on white background, overriding global body color */}
        <div className="p-8 overflow-auto custom-scrollbar flex-grow bg-white text-gray-900">
          <div 
            className="
              max-w-none 
              /* Fallbacks for standard elements if they lack specific classes */
              [&_h1]:text-gray-900 [&_h2]:text-gray-900 [&_h3]:text-gray-900
              [&_p]:text-gray-700 [&_li]:text-gray-700
              [&_strong]:text-indigo-700
              
              /* Prose classes for better typography if plugin is available */
              prose prose-lg 
              prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8
              prose-h3:text-xl
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
              prose-strong:text-indigo-700 prose-strong:font-semibold
              prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
              prose-li:text-gray-700 prose-li:marker:text-indigo-500
              first:prose-headings:mt-0
            "
            dangerouslySetInnerHTML={{ __html: result.text }} 
          />
        </div>
      </div>

      {/* 2. HTML Code Box */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-xl overflow-hidden flex flex-col h-72">
        <div className="bg-slate-900/80 p-4 border-b border-slate-700 flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-emerald-400" />
            <h3 className="font-semibold text-white text-sm">HTML Source</h3>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 px-3 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-xs font-medium border border-transparent hover:border-slate-600"
          >
            {copied ? <CheckCheck className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            {copied ? 'Copied' : 'Copy HTML'}
          </button>
        </div>
        <div className="relative flex-grow">
          <textarea
            readOnly
            className="w-full h-full bg-slate-950 p-4 font-mono text-sm text-slate-400 resize-none focus:outline-none custom-scrollbar"
            value={result.text}
          />
        </div>
      </div>

    </div>
  );
};

const LoaderSkeleton = () => (
  <svg className="w-8 h-8 text-indigo-500 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);
