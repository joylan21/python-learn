import { useState } from 'react';
import { categories } from '../data';
import { cn } from '../lib/utils';
import { BookOpen, ChevronRight, ChevronDown, Hash, Terminal } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export function Sidebar() {
  const navigate = useNavigate();
  const { categoryId } = useParams<{ categoryId?: string }>();

  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>(
    categories.reduce((acc, cat) => ({ ...acc, [cat.id]: false }), {})
  );

  const toggleCategory = (id: string) => {
    setExpandedCats(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCategoryClick = (catId: string) => {
    toggleCategory(catId);
    navigate(`/${catId}`);
  };

  const renderCategory = (category: typeof categories[0]) => {
    const isActive = categoryId === category.id;
    const totalMethods = category.subsections.reduce((acc, sub) => acc + (sub.methods?.length || 0), 0);
    const isExpanded = expandedCats[category.id];

    return (
      <div key={category.id}>
        {/* Category row — navigate + toggle expand */}
        <button
          onClick={() => handleCategoryClick(category.id)}
          className={cn(
            'w-full flex items-center justify-between px-2 py-2 rounded-lg text-xs font-semibold transition-all duration-200 mb-0.5',
            isActive
              ? 'bg-[#3776AB]/15 text-white border border-[#3776AB]/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
          )}
        >
          <div className="flex items-center gap-1.5">
            {isExpanded
              ? <ChevronDown size={13} className={isActive ? 'text-[#3776AB]' : 'text-slate-600'} />
              : <ChevronRight size={13} className={isActive ? 'text-[#3776AB]' : 'text-slate-600'} />
            }
            <span className="uppercase tracking-wider">{category.title}</span>
          </div>
          <span className={cn(
            'py-0.5 px-1.5 rounded text-[10px] font-mono font-medium transition-colors',
            isActive ? 'bg-[#3776AB]/20 text-[#5a9fd4]' : 'bg-slate-800/80 text-slate-500'
          )}>
            {totalMethods}
          </span>
        </button>

        {/* Subsections — visible when expanded */}
        {isExpanded && !category.isProblemCategory && (
          <ul className="space-y-0.5 pl-2 ml-3 border-l border-slate-800/60 mb-2">
            {category.subsections.map((sub) => (
              <li key={sub.id}>
                <button
                  onClick={() => {
                    navigate(`/${category.id}`);
                    setTimeout(() => {
                      document.getElementById(sub.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 120);
                  }}
                  className="w-full text-left px-2.5 py-1.5 rounded-md text-xs flex items-center gap-2 transition-all duration-200 text-slate-500 hover:text-slate-200 hover:bg-slate-800/40"
                >
                  <Hash size={12} className="opacity-40 shrink-0" />
                  <span className="truncate">{sub.title}</span>
                  <span className="ml-auto text-[10px] text-slate-600 shrink-0">{sub.methods?.length || 0}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <aside className="w-64 h-screen sticky top-0 bg-[#0B1120] border-r border-slate-800/60 overflow-y-auto hidden md:block">
      <div className="p-6">
        {/* Logo */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-8 text-white hover:opacity-80 transition-opacity"
        >
          <div className="bg-gradient-to-br from-[#3776AB] to-[#FFD43B] p-1.5 rounded-lg">
            <BookOpen size={24} className="text-slate-900 drop-shadow-md" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">
            Python
          </h1>
        </button>

        <div className="space-y-10">
          {/* Data Types Section */}
          <div>
            <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2 border-b border-slate-800/60 pb-2">
              Data Types
            </h2>
            <nav className="space-y-1">
              {categories.filter(c => c.id !== 'builtins' && !c.isProblemCategory && !c.isInterviewCategory).map(renderCategory)}
            </nav>
          </div>

          {/* Builtin Methods Section */}
          <div>
            <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2 border-b border-slate-800/60 pb-2">
              Builtin methods
            </h2>
            <nav className="space-y-1">
              {categories.filter(c => c.id === 'builtins').map(renderCategory)}
            </nav>
          </div>

          {/* Coding Problems Section */}
          <div>
            <h2 className="text-[11px] font-bold text-emerald-500 uppercase tracking-[0.2em] mb-4 px-2 border-b border-slate-800/60 pb-2">
              Coding Problems
            </h2>
            <nav className="space-y-1">
              {categories.filter(c => c.isProblemCategory && !c.isListOperationsCategory && !c.isDictOperationsCategory).map(renderCategory)}
            </nav>
          </div>

          {/* List Operations Section */}
          <div>
            <h2 className="text-[11px] font-bold text-orange-400 uppercase tracking-[0.2em] mb-4 px-2 border-b border-slate-800/60 pb-2">
              List Operations
            </h2>
            <nav className="space-y-1">
              {categories.filter(c => c.isListOperationsCategory).map(renderCategory)}
            </nav>
          </div>

          {/* Dict Operations Section */}
          <div>
            <h2 className="text-[11px] font-bold text-amber-400 uppercase tracking-[0.2em] mb-4 px-2 border-b border-slate-800/60 pb-2">
              Dict Operations
            </h2>
            <nav className="space-y-1">
              {categories.filter(c => c.isDictOperationsCategory).map(renderCategory)}
            </nav>
          </div>

          {/* Interview Questions Section */}
          <div>
            <h2 className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-4 px-2 border-b border-slate-800/60 pb-2">
              Interview Questions
            </h2>
            <nav className="space-y-1">
              {categories.filter(c => c.isInterviewCategory).map(renderCategory)}
            </nav>
          </div>

          {/* Advanced Topics Section */}
          <div>
            <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2 border-b border-slate-800/60 pb-2">
              Advanced Topics
            </h2>
            <nav className="space-y-1">
              {['Threading', 'Multiprocessing', 'Operators', 'Decorators'].map(topic => (
                <div key={topic} className="px-3 py-1.5 text-sm text-slate-600 flex items-center gap-2 cursor-not-allowed rounded-lg">
                  <Terminal size={13} className="opacity-40 shrink-0" />
                  <span>{topic}</span>
                  <span className="ml-auto text-[9px] uppercase tracking-wider text-slate-700 border border-slate-800 px-1 rounded-sm">Soon</span>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
}
