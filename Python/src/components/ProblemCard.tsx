import { useState } from 'react';
import type { PythonMethod } from '../data/types';
import { CodeBlock } from './CodeBlock';
import { ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';

interface ProblemCardProps {
  method: PythonMethod;
}

export function ProblemCard({ method }: ProblemCardProps) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="glass-panel rounded-xl overflow-hidden mb-6 transition-all duration-300 hover:shadow-2xl hover:border-emerald-500/50 border border-slate-700/50">
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800/60 pb-4">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold text-emerald-400 font-mono tracking-tight">{method.name}</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-slate-800/80 text-emerald-300 text-xs font-semibold tracking-wider uppercase border border-slate-700">
              {method.timeComplexity}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#3776AB]/10 text-[#5a9fd4] text-xs font-semibold tracking-wider uppercase border border-[#3776AB]/30">
              {method.commonUseCases}
            </span>
          </div>
        </div>
        
        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800/40 shadow-inner">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-extrabold mb-3 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            Problem Description
          </h4>
          <p className="text-slate-200 text-[15px] leading-relaxed font-medium">{method.description}</p>
        </div>

        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800/40 shadow-inner">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-extrabold mb-3 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FFD43B]" />
            Approach
          </h4>
          <p className="text-slate-300 text-[15px] leading-relaxed">{method.syntax}</p>
        </div>

        <button 
          onClick={() => setShowSolution(!showSolution)}
          className="w-full mt-6 flex items-center justify-between p-4 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] group"
        >
          <span className="flex items-center gap-2 font-bold text-sm tracking-wide">
            <Lightbulb size={18} className="group-hover:text-emerald-300 transition-colors" />
            {showSolution ? 'Hide Solution Code' : 'View Solution Code'}
          </span>
          <div className="bg-emerald-500/20 p-1.5 rounded-md group-hover:bg-emerald-500/30 transition-colors">
            {showSolution ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </button>

        {showSolution && method.solutionCode && (
          <div className="mt-4 opacity-100 transition-opacity duration-500 ease-in-out">
            <CodeBlock code={method.solutionCode} language="python" />
          </div>
        )}
      </div>
    </div>
  );
}
