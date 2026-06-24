import { Search, SplitSquareHorizontal } from 'lucide-react';
import { cn } from '../lib/utils';

export type ViewMode = 'both' | 'python' | 'javascript';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export function Header({ searchQuery, setSearchQuery, viewMode, setViewMode }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-800/60 p-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center">
        
        {/* Search Bar */}
        <div className="relative w-full sm:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-lg leading-5 bg-slate-900/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#3776AB] focus:border-[#3776AB] sm:text-sm transition-colors"
            placeholder="Search methods, descriptions, or syntax..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* View Toggles */}
        <div className="flex bg-slate-900/50 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setViewMode('python')}
            className={cn(
              "px-4 py-1.5 text-sm font-medium rounded-md transition-colors flex items-center gap-2",
              viewMode === 'python' ? "bg-slate-800 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"
            )}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-4 h-4 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100" style={viewMode === 'python' ? { filter: 'none', opacity: 1 } : {}} />
            Python
          </button>
          
          <button
            onClick={() => setViewMode('both')}
            className={cn(
              "px-4 py-1.5 text-sm font-medium rounded-md transition-colors flex items-center gap-2",
              viewMode === 'both' ? "bg-slate-800 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"
            )}
          >
            <SplitSquareHorizontal size={16} className={viewMode === 'both' ? "text-[#3776AB]" : ""} />
            Compare
          </button>

          <button
            onClick={() => setViewMode('javascript')}
            className={cn(
              "px-4 py-1.5 text-sm font-medium rounded-md transition-colors flex items-center gap-2",
              viewMode === 'javascript' ? "bg-slate-800 text-white shadow-sm" : "text-slate-400 hover:text-slate-200"
            )}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-4 h-4 rounded-sm grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100" style={viewMode === 'javascript' ? { filter: 'none', opacity: 1 } : {}} />
            JavaScript
          </button>
        </div>

      </div>
    </header>
  );
}
