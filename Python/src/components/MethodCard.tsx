import type { PythonMethod } from '../data/types';
import { CodeBlock } from './CodeBlock';
import { Badge } from './Badge';
import { CheckCircle2, Clock } from 'lucide-react';

interface MethodCardProps {
  method: PythonMethod;
}

export function MethodCard({ method }: MethodCardProps) {
  return (
    <div className="glass-panel rounded-xl overflow-hidden mb-6 transition-all duration-300 hover:shadow-2xl hover:border-[#3776AB]/50 border border-slate-700/50">
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-[#3776AB] font-mono">{method.name}</h3>
          </div>
          {method.mutates ? (
            <Badge variant="warning" className="flex items-center gap-1">
              <CheckCircle2 size={12} /> Mutates Original
            </Badge>
          ) : (
            <Badge variant="success" className="flex items-center gap-1">
              <CheckCircle2 size={12} /> Returns New
            </Badge>
          )}
        </div>
        
        <p className="text-slate-300 text-sm">{method.description}</p>
        
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>Time Complexity: {method.timeComplexity}</span>
          </div>
          <div className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
            {method.commonUseCases}
          </div>
        </div>

        <div className="bg-slate-900/80 p-4 rounded-lg mt-4 border border-slate-800/60">
          <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">Syntax</h4>
          <code className="text-[#3776AB] font-mono text-sm">{method.syntax}</code>
        </div>

        <div className="mt-4">
          <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">Example</h4>
          <CodeBlock code={method.example} language="python" />
        </div>
        
        <div className="bg-slate-900/50 rounded p-3 text-sm font-mono text-slate-300 border border-slate-800 mt-2">
          <span className="text-slate-500 select-none">Output: </span>{method.output}
        </div>
      </div>
    </div>
  );
}
