import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language: 'python' | 'javascript';
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-md overflow-hidden bg-[#1E1E1E] border border-slate-700/50">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700/50">
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          title="Copy to clipboard"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1rem',
          background: 'transparent',
          fontSize: '0.875rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
