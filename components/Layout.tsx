import React from 'react';
import { Atom, Menu, Power } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (view: string) => void;
  currentView: string;
}

const Layout: React.FC<LayoutProps> = ({ children, onNavigate, currentView }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50 font-rajdhani relative selection:bg-cyan-500 selection:text-white">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <header className="relative z-10 border-b border-cyan-900/50 bg-slate-900/80 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('DASHBOARD')}>
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-md opacity-50 rounded-full animate-pulse"></div>
              <Atom className="w-8 h-8 text-cyan-400 relative z-10" />
            </div>
            <span className="text-2xl font-orbitron font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              BIO<span className="text-white">FUTURA</span>
            </span>
          </div>

          <nav className="hidden md:flex gap-6">
            {['DASHBOARD', 'LEARN', 'QUIZ', 'GAMES'].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`px-4 py-1 rounded-full text-sm font-bold tracking-widest transition-all duration-300 ${
                  currentView === item 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.3)]' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button className="md:hidden text-cyan-400">
            <Menu />
          </button>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="relative z-10 border-t border-cyan-900/30 bg-slate-900/50 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm font-orbitron">
            DESARROLLADO POR <span className="text-cyan-400">ING. LUIS MUÑOZ SOTO</span>
          </p>
          <p className="text-xs text-slate-600 mt-2">© {new Date().getFullYear()} BioFutura Interactive Learning System v1.0</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;