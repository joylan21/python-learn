import { cn } from '../lib/utils';
import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'python' | 'javascript';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-slate-800 text-slate-300 border-slate-700',
    success: 'bg-emerald-900/50 text-emerald-400 border-emerald-800',
    warning: 'bg-amber-900/50 text-amber-400 border-amber-800',
    python: 'bg-[#3776AB]/20 text-[#6eb5f0] border-[#3776AB]/30',
    javascript: 'bg-[#F7DF1E]/20 text-[#F7DF1E] border-[#F7DF1E]/30',
  };

  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
