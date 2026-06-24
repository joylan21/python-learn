import { Search, Home } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-10 bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-800/60 p-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center">

        {/* Branding */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-white tracking-tight">Python Reference</h1>
        </button>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Home icon when not on home */}
          {!isHome && (
            <button
              onClick={() => navigate('/')}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-700/50 hover:border-slate-600 transition-all duration-200"
              title="Home"
            >
              <Home size={18} />
            </button>
          )}

          {/* Search Bar */}
          <div className="relative flex-1 sm:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-slate-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-9 pr-3 py-2 border border-slate-700 rounded-lg leading-5 bg-slate-900/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#3776AB] focus:border-[#3776AB] sm:text-sm transition-colors"
              placeholder="Search methods..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

      </div>
    </header>
  );
}
