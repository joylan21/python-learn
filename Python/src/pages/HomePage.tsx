import { useNavigate } from 'react-router-dom';
import { categories } from '../data';
import { ArrowRight, BookOpen } from 'lucide-react';

const categoryColors: Record<string, { from: string; to: string; border: string; text: string }> = {
  strings:      { from: '#3776AB', to: '#2a5a80',  border: '#3776AB40', text: '#5a9fd4' },
  lists:        { from: '#2e7d32', to: '#1b5e20',  border: '#4caf5040', text: '#81c784' },
  dictionaries: { from: '#6a1b9a', to: '#4a148c',  border: '#9c27b040', text: '#ce93d8' },
  sets:         { from: '#b45309', to: '#78350f',  border: '#f59e0b40', text: '#fcd34d' },
  tuples:       { from: '#c62828', to: '#b71c1c',  border: '#ef535040', text: '#ff8a80' },
};

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto w-full p-6 lg:p-10">
      {/* Hero */}
      <div className="mb-14 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="bg-gradient-to-br from-[#3776AB] to-[#FFD43B] p-3 rounded-2xl shadow-lg shadow-[#3776AB]/20">
            <BookOpen size={36} className="text-slate-900" />
          </div>
        </div>
        <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">
          Python Reference
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          A complete reference for Python data types — every method with syntax, examples, and time complexity.
        </p>
      </div>

      {/* Category cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map(category => {
          const colors = categoryColors[category.id] || categoryColors['strings'];
          const totalMethods = category.subsections.reduce((a, s) => a + (s.methods?.length || 0), 0);

          return (
            <button
              key={category.id}
              onClick={() => navigate(`/${category.id}`)}
              className="group relative glass-panel rounded-2xl p-6 text-left border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden"
              style={{ borderColor: colors.border }}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                style={{ background: `radial-gradient(circle at 30% 30%, ${colors.from}, transparent 70%)` }}
              />

              <div className="relative">
                {/* Color strip */}
                <div
                  className="w-10 h-1 rounded-full mb-5"
                  style={{ background: `linear-gradient(to right, ${colors.from}, ${colors.to})` }}
                />

                <h2 className="text-xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                  {category.title}
                </h2>
                <p className="text-sm mb-5" style={{ color: colors.text }}>
                  {category.subsections.length} groups
                </p>

                {/* Preview method names */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {category.subsections.flatMap(s => s.methods || []).slice(0, 6).map(m => (
                    <span
                      key={m.id}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50"
                    >
                      {m.name}
                    </span>
                  ))}
                  {totalMethods > 6 && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-500">
                      +{totalMethods - 6} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{totalMethods} methods</span>
                  <div
                    className="flex items-center gap-1 text-xs font-medium group-hover:gap-2 transition-all duration-200"
                    style={{ color: colors.text }}
                  >
                    Browse <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
