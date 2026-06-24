import { useNavigate, useParams } from 'react-router-dom';
import { categories } from '../data';
import { Clock, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

export function CategoryIndexPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  const category = categories.find(c => c.id === categoryId);

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-slate-500">
        <p className="text-xl font-medium">Category not found</p>
      </div>
    );
  }

  const totalMethods = category.subsections.reduce((acc, sub) => acc + (sub.methods?.length || 0), 0);

  if (category.isInterviewCategory) {
    return (
      <div className="max-w-5xl mx-auto w-full p-6 lg:p-10">
        <div className="mb-10">
          <div className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Interview Questions
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">
            {category.title}
          </h1>
          <p className="text-slate-400 text-base">
            {totalMethods} questions across {category.subsections.length} topics. Click a question to reveal the answer.
          </p>
        </div>
        <div className="space-y-8">
          {category.subsections.map(sub => (
            <div key={sub.id} id={sub.id} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-semibold text-slate-300">{sub.title}</h2>
                <span className="bg-slate-800 text-slate-500 text-xs px-2 py-0.5 rounded-full font-mono">
                  {sub.methods?.length || 0}
                </span>
                <div className="flex-1 h-px bg-slate-800/60" />
              </div>
              <div className="space-y-3">
                {sub.methods?.map(method => (
                  <details key={method.id} className="group bg-[#0B1120] border border-slate-700/50 rounded-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-slate-800/40 transition-colors">
                      <span className="font-medium text-slate-200">{method.name}</span>
                      <span className="text-slate-500 group-open:rotate-180 transition-transform">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </span>
                    </summary>
                    <div className="p-4 pt-4 text-slate-400 border-t border-slate-800/60 bg-slate-800/20">
                      <div className="prose prose-invert max-w-none text-sm whitespace-pre-wrap">
                        {method.description}
                        {method.example && (
                          <div className="mt-4">
                            <strong className="text-slate-300 block mb-2">Example:</strong>
                            <pre className="bg-[#0B1120] border border-slate-800 p-3 rounded-md overflow-x-auto text-xs text-[#5a9fd4] font-mono">
                              <code>{method.example}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto w-full p-6 lg:p-10">
      {/* Hero */}
      <div className="mb-10">
        <div className="inline-block bg-[#3776AB]/10 border border-[#3776AB]/20 text-[#3776AB] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          Data Type
        </div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">
          {category.title}
        </h1>
        <p className="text-slate-400 text-base">
          {totalMethods} methods across {category.subsections.length} groups — click any method to see syntax, examples, and complexity.
        </p>
      </div>

      {/* Subsections */}
      <div className="space-y-10">
        {category.subsections.map(sub => (
          <div key={sub.id}>
            {/* Group header */}
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-base font-semibold text-slate-300">{sub.title}</h2>
              <span className="bg-slate-800 text-slate-500 text-xs px-2 py-0.5 rounded-full font-mono">
                {sub.methods?.length || 0}
              </span>
              <div className="flex-1 h-px bg-slate-800/60" />
            </div>

            {/* Methods grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {(sub.methods || []).map(method => (
                <button
                  key={method.id}
                  onClick={() => navigate(`/${categoryId}/${method.id}`)}
                  className="group glass-panel rounded-xl p-4 text-left border border-slate-700/50 hover:border-[#3776AB]/60 hover:shadow-lg hover:shadow-[#3776AB]/5 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-mono font-bold text-[#3776AB] text-base group-hover:text-[#5a9fd4] transition-colors">
                      {method.name}
                    </span>
                    <ArrowRight size={14} className="text-slate-600 group-hover:text-[#3776AB] group-hover:translate-x-0.5 transition-all mt-0.5" />
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-3">
                    {method.description}
                  </p>
                  <div className="flex items-center gap-2 mt-auto">
                    <div className="flex items-center gap-1 text-[10px] text-slate-500">
                      <Clock size={11} />
                      <span className="font-mono">{method.timeComplexity}</span>
                    </div>
                    <div className="ml-auto">
                      {method.isProblem ? (
                        <span className="flex items-center gap-1 text-[10px] text-[#5a9fd4] bg-[#3776AB]/10 border border-[#3776AB]/20 px-1.5 py-0.5 rounded-full font-mono">
                          {method.commonUseCases}
                        </span>
                      ) : method.mutates ? (
                        <span className="flex items-center gap-1 text-[10px] text-amber-400/80 bg-amber-400/10 border border-amber-400/20 px-1.5 py-0.5 rounded-full">
                          <XCircle size={10} /> Mutates
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[10px] text-emerald-400/80 bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded-full">
                          <CheckCircle2 size={10} /> Pure
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
