import { useNavigate, useParams } from 'react-router-dom';
import { categories } from '../data';
import { MethodCard } from '../components/MethodCard';
import { ProblemCard } from '../components/ProblemCard';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

export function MethodDetailPage() {
  const { categoryId, methodId } = useParams<{ categoryId: string; methodId: string }>();
  const navigate = useNavigate();

  const category = categories.find(c => c.id === categoryId);
  if (!category) return null;

  // Flatten all methods for prev/next navigation
  const allMethods = category.subsections.flatMap(sub => sub.methods || []);
  const methodIndex = allMethods.findIndex(m => m.id === methodId);
  const method = allMethods[methodIndex];
  const prevMethod = methodIndex > 0 ? allMethods[methodIndex - 1] : null;
  const nextMethod = methodIndex < allMethods.length - 1 ? allMethods[methodIndex + 1] : null;

  // Find which subsection this method belongs to
  const subsection = category.subsections.find(sub =>
    (sub.methods || []).some(m => m.id === methodId)
  );

  if (!method) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-slate-500">
        <p className="text-xl font-medium">Method not found</p>
        <button onClick={() => navigate(`/${categoryId}`)} className="mt-4 text-[#3776AB] hover:underline text-sm">
          Back to {category.title}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto w-full p-6 lg:p-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
        <button
          onClick={() => navigate(`/${categoryId}`)}
          className="flex items-center gap-1.5 hover:text-[#3776AB] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>{category.title}</span>
        </button>
        <span className="text-slate-700">/</span>
        {subsection && (
          <>
            <span className="text-slate-600">{subsection.title}</span>
            <span className="text-slate-700">/</span>
          </>
        )}
        <span className="text-slate-300 font-mono font-medium">{method.name}</span>
      </div>

      {/* Method/Problem Card */}
      {method.isProblem ? (
        <ProblemCard method={method} />
      ) : (
        <MethodCard method={method} />
      )}

      {/* Prev / Next navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-800/60">
        {prevMethod ? (
          <button
            onClick={() => navigate(`/${categoryId}/${prevMethod.id}`)}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:border-[#3776AB]/50 hover:bg-slate-800 transition-all duration-200 text-sm"
          >
            <ChevronLeft size={16} className="text-slate-400 group-hover:text-[#3776AB] transition-colors" />
            <div className="text-left">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Previous</div>
              <div className="font-mono font-medium text-slate-300 group-hover:text-white transition-colors">{prevMethod.name}</div>
            </div>
          </button>
        ) : (
          <div />
        )}

        <button
          onClick={() => navigate(`/${categoryId}`)}
          className="px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all duration-200 border border-transparent hover:border-slate-700/50"
        >
          All methods
        </button>

        {nextMethod ? (
          <button
            onClick={() => navigate(`/${categoryId}/${nextMethod.id}`)}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 hover:border-[#3776AB]/50 hover:bg-slate-800 transition-all duration-200 text-sm"
          >
            <div className="text-right">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Next</div>
              <div className="font-mono font-medium text-slate-300 group-hover:text-white transition-colors">{nextMethod.name}</div>
            </div>
            <ChevronRight size={16} className="text-slate-400 group-hover:text-[#3776AB] transition-colors" />
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
