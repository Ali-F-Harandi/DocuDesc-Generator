
import React, { useState, useRef, useEffect } from 'react';
import { DocumentRequest } from '../types';
import { COUNTRIES, DOCUMENT_TYPES, FILE_FORMATS, TEMPLATE_STYLES, COUNTRY_ALIASES } from '../constants';
import { Settings, ChevronRight, Loader2, FileText, Palette, Search, Check, Globe, Shuffle, Plus, X } from 'lucide-react';

interface ConfigurationFormProps {
  onSubmit: (data: DocumentRequest) => void;
  isLoading: boolean;
}

export const ConfigurationForm: React.FC<ConfigurationFormProps> = ({ onSubmit, isLoading }) => {
  // Form State
  const [country, setCountry] = useState<string>(COUNTRIES.find(c => c === "United States of America") || COUNTRIES[0]);
  
  // Variant Management
  const [selectedVariants, setSelectedVariants] = useState<string[]>(["United States of America"]);
  const [customVariants, setCustomVariants] = useState<string[]>([]);
  const [isRemixMode, setIsRemixMode] = useState(false);
  const [newVariantInput, setNewVariantInput] = useState("");

  const [documentType, setDocumentType] = useState<string>(DOCUMENT_TYPES[0]);
  const [format, setFormat] = useState<string>(FILE_FORMATS[0]);
  const [templateStyle, setTemplateStyle] = useState<string>(TEMPLATE_STYLES[0]);

  // Searchable Dropdown State
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter logic
  const filteredCountries = COUNTRIES.filter(c => {
    const search = countrySearch.toLowerCase().trim();
    if (!search) return true;
    if (c.toLowerCase().includes(search)) return true;
    const aliases = COUNTRY_ALIASES[c];
    if (aliases && aliases.some(a => a.toLowerCase().includes(search))) return true;
    return false;
  });

  const handleCountrySelect = (selectedCountry: string) => {
    setCountry(selectedCountry);
    // Reset variants when country changes
    setSelectedVariants([selectedCountry]);
    setCustomVariants([]);
    setIsRemixMode(false);
    setCountrySearch(""); 
    setIsCountryOpen(false);
  };

  const handleVariantToggle = (variant: string) => {
    if (isRemixMode) {
      if (selectedVariants.includes(variant)) {
        // Prevent deselecting the last one
        if (selectedVariants.length > 1) {
          setSelectedVariants(selectedVariants.filter(v => v !== variant));
        }
      } else {
        setSelectedVariants([...selectedVariants, variant]);
      }
    } else {
      // Single select mode
      setSelectedVariants([variant]);
    }
  };

  const handleAddCustomVariant = (e: React.FormEvent) => {
    e.preventDefault();
    if (newVariantInput.trim()) {
      const newVal = newVariantInput.trim();
      setCustomVariants([...customVariants, newVal]);
      // If remix mode, add to selected. If not, replace selected.
      if (isRemixMode) {
        setSelectedVariants([...selectedVariants, newVal]);
      } else {
        setSelectedVariants([newVal]);
      }
      setNewVariantInput("");
    }
  };

  const handleRemoveCustomVariant = (val: string) => {
    setCustomVariants(customVariants.filter(v => v !== val));
    // Also remove from selected if it's there
    const newSelected = selectedVariants.filter(v => v !== val);
    // If we removed the only selected one, revert to country main name
    if (newSelected.length === 0) {
      setSelectedVariants([country]);
    } else {
      setSelectedVariants(newSelected);
    }
  };

  const toggleRemixMode = () => {
    const newMode = !isRemixMode;
    setIsRemixMode(newMode);
    // If turning off remix mode, reduce to just the first selected one
    if (!newMode && selectedVariants.length > 1) {
      setSelectedVariants([selectedVariants[0]]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      country,
      countryVariants: selectedVariants,
      documentType: documentType as any,
      format: format as any,
      templateStyle: templateStyle as any
    });
  };

  // Determine available name variants
  const defaultVariants = [country, ...(COUNTRY_ALIASES[country] || [])];
  const allDisplayVariants = [...defaultVariants, ...customVariants];

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-xl relative overflow-visible z-20">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
      
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
          <Settings className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-semibold text-white">Configuration</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Country Selection (Searchable) */}
        <div className="space-y-2 relative" ref={dropdownRef}>
          <label className="text-sm font-medium text-slate-400 ml-1">Target Country</label>
          <div className="relative">
            <div 
              className={`w-full bg-slate-900 border ${isCountryOpen ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-slate-700'} text-slate-200 rounded-xl px-4 py-3 flex items-center justify-between cursor-text transition-all`}
              onClick={() => {
                setIsCountryOpen(true);
              }}
            >
              {isCountryOpen ? (
                 <input 
                   autoFocus
                   type="text" 
                   className="bg-transparent border-none outline-none w-full text-slate-200 placeholder-slate-500"
                   placeholder="Search (e.g. USA, UK, DE)..."
                   value={countrySearch}
                   onChange={(e) => setCountrySearch(e.target.value)}
                 />
              ) : (
                <span className="truncate">{country}</span>
              )}
              
              <div className="text-slate-500 flex-shrink-0 ml-2">
                {isCountryOpen ? <Search className="w-4 h-4 text-indigo-400" /> : <ChevronRight className="w-4 h-4 rotate-90" />}
              </div>
            </div>

            {/* Dropdown List */}
            {isCountryOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl max-h-60 overflow-y-auto custom-scrollbar z-50">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((c) => {
                    const aliases = COUNTRY_ALIASES[c];
                    const matchedAlias = countrySearch && aliases ? aliases.find(a => a.toLowerCase().includes(countrySearch.toLowerCase())) : null;

                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => handleCountrySelect(c)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-800 transition-colors flex flex-col justify-center group ${country === c ? 'bg-indigo-500/10' : ''}`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className={country === c ? 'text-indigo-300 font-medium' : 'text-slate-300'}>
                            {c}
                          </span>
                          {country === c && <Check className="w-3 h-3 text-indigo-400" />}
                        </div>
                        {matchedAlias && (
                           <span className="text-xs text-indigo-400/70 italic mt-0.5">Matches: "{matchedAlias}"</span>
                        )}
                      </button>
                    );
                  })
                ) : (
                  <div className="px-4 py-3 text-sm text-slate-500 text-center">
                    No country found
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Variant Selector */}
          <div className="mt-4 animate-fade-in px-1 p-3 rounded-xl bg-slate-900/50 border border-slate-700/50">
             <div className="flex items-center justify-between mb-3">
               <label className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 flex items-center gap-1">
                 <Globe className="w-3 h-3" />
                 Text Display Name
               </label>
               <button
                  type="button"
                  onClick={toggleRemixMode}
                  className={`text-[10px] uppercase font-bold px-2 py-1 rounded flex items-center gap-1 transition-colors ${isRemixMode ? 'bg-pink-500/20 text-pink-300' : 'bg-slate-800 text-slate-500 hover:text-slate-300'}`}
               >
                 <Shuffle className="w-3 h-3" />
                 Remix {isRemixMode ? 'ON' : 'OFF'}
               </button>
             </div>
             
             {isRemixMode && (
               <div className="mb-2 text-[10px] text-pink-300/80 italic">
                 Selected names will appear randomly throughout the text.
               </div>
             )}

             <div className="flex flex-wrap gap-2">
                {allDisplayVariants.map((v) => {
                  const isSelected = selectedVariants.includes(v);
                  const isCustom = customVariants.includes(v);
                  return (
                    <div key={v} className="relative group">
                      <button
                        type="button"
                        onClick={() => handleVariantToggle(v)}
                        className={`
                          px-3 py-1.5 rounded-lg text-xs font-medium border transition-all pr-3
                          ${isSelected
                            ? (isRemixMode ? 'bg-pink-500/20 border-pink-500 text-pink-300 shadow-sm' : 'bg-indigo-500/20 border-indigo-500 text-indigo-300 shadow-sm')
                            : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300'}
                        `}
                      >
                        {v}
                      </button>
                      {isCustom && (
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); handleRemoveCustomVariant(v); }}
                          className="absolute -top-1.5 -right-1.5 bg-slate-700 text-slate-300 rounded-full p-0.5 hover:bg-red-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <X className="w-2 h-2" />
                        </button>
                      )}
                    </div>
                  );
                })}

                {/* Add Custom Input */}
                {isRemixMode && (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={newVariantInput}
                      onChange={(e) => setNewVariantInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddCustomVariant(e)}
                      placeholder="Add name..."
                      className="bg-slate-900 border border-slate-700 rounded-l-lg px-2 py-1.5 text-xs text-slate-200 w-24 focus:outline-none focus:border-pink-500"
                    />
                    <button
                      type="button"
                      onClick={handleAddCustomVariant}
                      className="bg-slate-700 border border-slate-700 border-l-0 rounded-r-lg px-2 py-1.5 hover:bg-slate-600 text-slate-300"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
          </div>
        </div>

        {/* Document Type Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400 ml-1">Document Type</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {DOCUMENT_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                disabled={isLoading}
                onClick={() => setDocumentType(type)}
                className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition-all border ${
                  documentType === type
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-900/20'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Format Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400 ml-1">File Format</label>
          <div className="flex gap-2">
            {FILE_FORMATS.map((f) => (
              <label
                key={f}
                className={`flex-1 cursor-pointer relative group`}
              >
                <input
                  type="radio"
                  name="format"
                  value={f}
                  checked={format === f}
                  onChange={(e) => setFormat(e.target.value)}
                  disabled={isLoading}
                  className="sr-only"
                />
                <div className={`
                  w-full text-center px-2 py-3 rounded-xl border text-xs sm:text-sm font-medium transition-all
                  ${format === f 
                    ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' 
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600'}
                `}>
                  {f.split(' ')[0]} {/* Short name */}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Template Style Selection */}
        <div className="space-y-2 pt-2 border-t border-slate-700/50">
           <label className="text-sm font-medium text-slate-400 ml-1 flex items-center gap-2">
             <Palette className="w-3 h-3" />
             Description Style
           </label>
           <div className="relative">
            <select
              value={templateStyle}
              onChange={(e) => setTemplateStyle(e.target.value)}
              disabled={isLoading}
              className="w-full appearance-none bg-slate-900 border border-slate-700 hover:border-purple-500/50 text-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all disabled:opacity-50"
            >
              {TEMPLATE_STYLES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
              <ChevronRight className="w-4 h-4 rotate-90" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-4 rounded-xl shadow-lg shadow-indigo-900/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <FileText className="w-5 h-5" />
              Generate Description
            </>
          )}
        </button>

      </form>
    </div>
  );
};
