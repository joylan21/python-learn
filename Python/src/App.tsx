import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CategoryIndexPage } from './pages/CategoryIndexPage';
import { MethodDetailPage } from './pages/MethodDetailPage';
import { useState } from 'react';

function AppShell() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex min-h-screen bg-[#0B1120] text-slate-200 font-sans selection:bg-[#3776AB]/30">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <main className="flex-1 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:categoryId" element={<CategoryIndexPage />} />
            <Route path="/:categoryId/:methodId" element={<MethodDetailPage />} />
          </Routes>
        </main>

        <footer className="border-t border-slate-800/60 p-6 text-center text-slate-500 text-sm mt-auto">
          <span>Built with React &amp; Tailwind CSS</span>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/*" element={<AppShell />} />
    </Routes>
  );
}

export default App;
