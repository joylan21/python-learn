import type { MethodComparison } from '../data/types';
import { CodeBlock } from './CodeBlock';
import { Badge } from './Badge';
import { CheckCircle2, Clock } from 'lucide-react';

interface MethodCardProps {
  comparison: MethodComparison;
  viewMode: 'both' | 'python' | 'javascript';
}

export function MethodCard({ comparison, viewMode }: MethodCardProps) {
  const { python, javascript } = comparison;

  return (
    <div className="glass-panel rounded-xl overflow-hidden mb-6 transition-all duration-300 hover:shadow-2xl hover:border-slate-600/50">
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
        
        {/* Python Section */}
        {(viewMode === 'both' || viewMode === 'python') && python && (
          <div className="flex-1 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-6 h-6" />
                <h3 className="text-xl font-bold text-[#3776AB] font-mono">{python.name}</h3>
              </div>
              {python.mutates ? (
                <Badge variant="warning" className="flex items-center gap-1">
                  <CheckCircle2 size={12} /> Mutates Original
                </Badge>
              ) : (
                <Badge variant="success" className="flex items-center gap-1">
                  <CheckCircle2 size={12} /> Returns New
                </Badge>
              )}
            </div>
            
            <p className="text-slate-300 text-sm h-10">{python.description}</p>
            
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Clock size={14} />
              <span>{python.timeComplexity}</span>
            </div>

            <CodeBlock code={python.example} language="python" />
            
            <div className="bg-slate-900/50 rounded p-3 text-sm font-mono text-slate-300 border border-slate-800">
              <span className="text-slate-500 select-none">Output: </span>{python.output}
            </div>
          </div>
        )}

        {/* JavaScript Section */}
        {(viewMode === 'both' || viewMode === 'javascript') && javascript && (
          <div className="flex-1 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6 rounded" />
                <h3 className="text-xl font-bold text-[#F7DF1E] font-mono">{javascript.name}</h3>
              </div>
              {javascript.mutates ? (
                <Badge variant="warning" className="flex items-center gap-1">
                  <CheckCircle2 size={12} /> Mutates Original
                </Badge>
              ) : (
                <Badge variant="success" className="flex items-center gap-1">
                  <CheckCircle2 size={12} /> Returns New
                </Badge>
              )}
            </div>
            
            <p className="text-slate-300 text-sm h-10">{javascript.description}</p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Clock size={14} />
              <span>{javascript.timeComplexity}</span>
            </div>

            <CodeBlock code={javascript.example} language="javascript" />
            
            <div className="bg-slate-900/50 rounded p-3 text-sm font-mono text-slate-300 border border-slate-800">
              <span className="text-slate-500 select-none">Output: </span>{javascript.output}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
