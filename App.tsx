import React, { useState } from 'react';
import Layout from './components/Layout';
import LearningModule from './components/LearningModule';
import QuizModule from './components/QuizModule';
import { TOPICS } from './constants';
import { AppMode, GameType, TopicId as TopicIdType } from './types';
import { Brain, Gamepad2, GraduationCap, Microscope, Users } from 'lucide-react';
import Galileanos from './components/games/Galileanos';
import { Hangman, TicTacToe } from './components/games/MiniGames';

const App: React.FC = () => {
  const [view, setView] = useState<string>(AppMode.DASHBOARD);
  const [selectedTopic, setSelectedTopic] = useState<TopicIdType | null>(null);
  const [selectedGame, setSelectedGame] = useState<GameType>(GameType.NONE);

  const handleNavigate = (newView: string) => {
    setView(newView);
    setSelectedTopic(null);
    setSelectedGame(GameType.NONE);
  };

  const renderContent = () => {
    if (view === AppMode.LEARN) {
      if (selectedTopic && TOPICS[selectedTopic]) {
        return <LearningModule topic={TOPICS[selectedTopic]} onBack={() => setSelectedTopic(null)} />;
      }
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {Object.values(TOPICS).map((topic) => (
            <div key={topic.id} onClick={() => setSelectedTopic(topic.id)} className="group bg-slate-900/50 border border-slate-800 hover:border-cyan-500 p-6 rounded-2xl cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:-translate-y-1">
              <div className="w-12 h-12 bg-cyan-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors">
                <Microscope className="text-cyan-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold font-orbitron text-white mb-2">{topic.title}</h3>
              <p className="text-slate-400 text-sm">{topic.description}</p>
            </div>
          ))}
        </div>
      );
    }

    if (view === AppMode.QUIZ) {
      if (selectedTopic) {
        return <QuizModule topicId={selectedTopic} onBack={() => setSelectedTopic(null)} />;
      }
      return (
        <div className="text-center animate-fade-in">
           <h2 className="text-3xl font-orbitron text-purple-400 mb-8">SELECCIONA UN TEMA PARA EVALUAR</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(TOPICS).map((topic) => (
                <button key={topic.id} onClick={() => setSelectedTopic(topic.id)} className="bg-slate-900 border border-purple-900/50 hover:border-purple-500 p-8 rounded-2xl hover:bg-slate-800 transition-all group">
                    <h3 className="text-lg font-bold text-slate-200 group-hover:text-purple-300">{topic.title}</h3>
                </button>
            ))}
           </div>
        </div>
      );
    }

    if (view === AppMode.GAMES) {
        if (selectedGame === GameType.GALILEANOS) return <Galileanos />;
        if (selectedGame === GameType.AHORCADO) return <Hangman />;
        if (selectedGame === GameType.GATO) return <TicTacToe />;

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                <button onClick={() => setSelectedGame(GameType.GALILEANOS)} className="h-64 bg-gradient-to-br from-indigo-900 to-slate-900 border border-indigo-500 rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-lg group">
                    <UsersIcon className="w-16 h-16 text-indigo-400 mb-4 group-hover:text-white" />
                    <h3 className="text-2xl font-orbitron text-white">100 GALILEANOS DICEN</h3>
                    <p className="text-indigo-300 mt-2">Competencia por equipos</p>
                </button>
                <button onClick={() => setSelectedGame(GameType.AHORCADO)} className="h-64 bg-gradient-to-br from-emerald-900 to-slate-900 border border-emerald-500 rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-lg group">
                    <Gamepad2 className="w-16 h-16 text-emerald-400 mb-4 group-hover:text-white" />
                    <h3 className="text-2xl font-orbitron text-white">AHORCADO</h3>
                    <p className="text-emerald-300 mt-2">Adivina la palabra clave</p>
                </button>
                <button onClick={() => setSelectedGame(GameType.GATO)} className="h-64 bg-gradient-to-br from-pink-900 to-slate-900 border border-pink-500 rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-lg group">
                    <Brain className="w-16 h-16 text-pink-400 mb-4 group-hover:text-white" />
                    <h3 className="text-2xl font-orbitron text-white">GATO</h3>
                    <p className="text-pink-300 mt-2">Tic-Tac-Toe clásico</p>
                </button>
            </div>
        );
    }

    // Dashboard
    return (
      <div className="text-center py-12 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">
          BIOFUTURA
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-rajdhani">
          Explora la evolución, descubre los secretos de los fósiles y desafía tu conocimiento en un entorno de aprendizaje de próxima generación.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <button onClick={() => handleNavigate(AppMode.LEARN)} className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold font-orbitron tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:scale-105 flex items-center gap-3">
            <GraduationCap /> COMENZAR APRENDIZAJE
          </button>
          <button onClick={() => handleNavigate(AppMode.GAMES)} className="px-8 py-4 bg-transparent border-2 border-purple-500 hover:bg-purple-900/30 text-purple-300 hover:text-white rounded-full font-bold font-orbitron tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all transform hover:scale-105 flex items-center gap-3">
            <Gamepad2 /> ZONA DE JUEGOS
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50">
           {['EVOLUCIÓN', 'FÓSILES', 'EVIDENCIAS', 'GENÉTICA'].map(tag => (
               <div key={tag} className="border border-slate-800 py-2 rounded text-xs font-mono text-slate-500">SYSTEM_MODULE: {tag}</div>
           ))}
        </div>
      </div>
    );
  };

  return (
    <Layout onNavigate={handleNavigate} currentView={view}>
      {renderContent()}
    </Layout>
  );
};

// Helper for Games Icon
function UsersIcon(props: any) {
    return <Users {...props} />;
}

export default App;