import { categories } from '../data';
import { cn } from '../lib/utils';
import { BookOpen, ChevronRight, Hash } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export function Sidebar({ activeSection, onSectionClick }: SidebarProps) {
  return (
    <aside className="w-64 h-screen sticky top-0 bg-[#0B1120] border-r border-slate-800/60 overflow-y-auto hidden md:block">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8 text-white">
          <div className="bg-gradient-to-br from-[#3776AB] to-[#F7DF1E] p-1.5 rounded-lg">
            <BookOpen size={24} className="text-white drop-shadow-md" />
          </div>
          <h1 className="text-lg font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">
            Py vs JS<br />Cheat Sheet
          </h1>
        </div>

        <nav className="space-y-6">
          {categories.map((category) => (
            <div key={category.id}>
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-2 flex items-center justify-between">
                {category.title}
                <span className="bg-slate-800 text-slate-300 py-0.5 px-1.5 rounded text-[10px]">
                  {category.subsections.reduce((acc, sub) => acc + sub.comparisons.length, 0)}
                </span>
              </h2>
              <ul className="space-y-1">
                {category.subsections.map((sub) => (
                  <li key={sub.id}>
                    <button
                      onClick={() => onSectionClick(sub.id)}
                      className={cn(
                        "w-full text-left px-2 py-1.5 rounded-md text-sm flex items-center gap-2 transition-colors duration-200",
                        activeSection === sub.id
                          ? "bg-slate-800/80 text-white font-medium"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                      )}
                    >
                      <Hash size={14} className={activeSection === sub.id ? "text-[#3776AB]" : "opacity-50"} />
                      <span className="truncate flex-1">{sub.title}</span>
                      {activeSection === sub.id && <ChevronRight size={14} className="text-slate-500" />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
