import { useState, useMemo, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header, type ViewMode } from './components/Header';
import { MethodCard } from './components/MethodCard';
import { CodeBlock } from './components/CodeBlock';
import { categories } from './data';
import { X } from 'lucide-react';


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('both');
  const [activeSection, setActiveSection] = useState<string>('');
  const [selectedExtra, setSelectedExtra] = useState<{name: string, example: string, language: 'python' | 'javascript'} | null>(null);

  // Filtering logic
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;

    const query = searchQuery.toLowerCase();

    return categories.map(category => {
      const filteredSubsections = category.subsections.map(sub => {
        const filteredComparisons = sub.comparisons.filter(comp => {
          const inPython = comp.python && (
            comp.python.name.toLowerCase().includes(query) ||
            comp.python.description.toLowerCase().includes(query) ||
            comp.python.syntax.toLowerCase().includes(query)
          );
          
          const inJs = comp.javascript && (
            comp.javascript.name.toLowerCase().includes(query) ||
            comp.javascript.description.toLowerCase().includes(query) ||
            comp.javascript.syntax.toLowerCase().includes(query)
          );

          return inPython || inJs;
        });

        return { ...sub, comparisons: filteredComparisons };
      }).filter(sub => sub.comparisons.length > 0);

      return { ...category, subsections: filteredSubsections };
    }).filter(cat => cat.subsections.length > 0);
  }, [searchQuery]);

  // Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id') || '';
        }
      });

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0B1120] text-slate-200 font-sans selection:bg-[#3776AB]/30">
      <Sidebar activeSection={activeSection} onSectionClick={scrollToSection} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          viewMode={viewMode} 
          setViewMode={setViewMode} 
        />
        
        <main className="flex-1 overflow-x-hidden p-6 lg:p-10 max-w-6xl mx-auto w-full">
          {filteredCategories.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-slate-500">
              <p className="text-xl font-medium mb-2">No results found</p>
              <p className="text-sm">Try adjusting your search query</p>
            </div>
          ) : (
            <div className="space-y-16">
              {filteredCategories.map((category) => (
                <div key={category.id} className="space-y-10">
                  <div className="border-b border-slate-800 pb-4">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-12">
                    {category.subsections.map((sub) => (
                      <section key={sub.id} id={sub.id} className="scroll-mt-24">
                        <h3 className="text-xl font-semibold text-slate-300 mb-6 flex items-center gap-3">
                          {sub.title}
                          <span className="bg-slate-800 text-slate-400 text-xs py-1 px-2.5 rounded-full font-mono">
                            {sub.comparisons.length} methods
                          </span>
                        </h3>
                        
                        <div className="space-y-6">
                          {sub.comparisons.map((comp) => (
                            <MethodCard 
                              key={comp.id} 
                              comparison={comp} 
                              viewMode={viewMode} 
                            />
                          ))}
                        </div>
                      </section>
                    ))}
                    
                    {category.extraMethods && (
                      <section className="mt-12 bg-slate-900/40 p-6 rounded-xl border border-slate-800/50">
                        <h3 className="text-xl font-semibold text-slate-300 mb-6">Other Available Methods</h3>
                        <div className="flex flex-col md:flex-row gap-8">
                          
                          {(viewMode === 'both' || viewMode === 'python') && (
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-5 h-5" />
                                <h4 className="text-lg font-bold text-[#3776AB]">Python</h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {category.extraMethods.python.map(method => (
                                  <button 
                                    key={method.name} 
                                    onClick={() => setSelectedExtra({ ...method, language: 'python' })}
                                    className="bg-slate-800/80 text-slate-300 px-3 py-1.5 rounded-md font-mono text-sm border border-slate-700/50 hover:border-[#3776AB]/50 hover:text-white transition-colors cursor-pointer"
                                  >
                                    {method.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}

                          {(viewMode === 'both' || viewMode === 'javascript') && (
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-4">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-5 h-5 rounded-sm" />
                                <h4 className="text-lg font-bold text-[#F7DF1E]">JavaScript</h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {category.extraMethods.javascript.map(method => (
                                  <button 
                                    key={method.name} 
                                    onClick={() => setSelectedExtra({ ...method, language: 'javascript' })}
                                    className="bg-slate-800/80 text-slate-300 px-3 py-1.5 rounded-md font-mono text-sm border border-slate-700/50 hover:border-[#F7DF1E]/50 hover:text-white transition-colors cursor-pointer"
                                  >
                                    {method.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>
                      </section>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
        
        <footer className="border-t border-slate-800/60 p-6 text-center text-slate-500 text-sm mt-auto">
          <div className="flex items-center justify-center gap-2">
            <span>Built with React & Tailwind CSS</span>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
              Contribute
            </a>
          </div>
        </footer>
      </div>

      {/* Modal for Extra Methods */}
      {selectedExtra && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedExtra(null)}>
          <div 
            className="bg-slate-900 border border-slate-700/50 rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-800/60 bg-slate-800/30">
              <div className="flex items-center gap-3">
                {selectedExtra.language === 'python' ? (
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-5 h-5" />
                ) : (
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-5 h-5 rounded-sm" />
                )}
                <h3 className="text-xl font-bold font-mono text-white">{selectedExtra.name}</h3>
              </div>
              <button 
                onClick={() => setSelectedExtra(null)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <h4 className="text-sm font-medium text-slate-400 mb-3 uppercase tracking-wider">Example Usage</h4>
              <CodeBlock code={selectedExtra.example} language={selectedExtra.language} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
