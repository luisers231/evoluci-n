import React, { useState } from 'react';
import { Topic } from '../types';
import { ChevronLeft, ChevronRight, Info, Activity } from 'lucide-react';

interface LearningModuleProps {
  topic: Topic;
  onBack: () => void;
}

const LearningModule: React.FC<LearningModuleProps> = ({ topic, onBack }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setIsFlipped(false);
    setActiveIndex((prev) => (prev + 1) % topic.content.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setActiveIndex((prev) => (prev - 1 + topic.content.length) % topic.content.length);
  };

  const currentCard = topic.content[activeIndex];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="text-cyan-400 hover:text-white transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-3xl font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          {topic.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
        {/* Sidebar List */}
        <div className="lg:col-span-3 bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm hidden lg:block">
            <div className="p-4 bg-slate-900 border-b border-slate-800">
                <h3 className="font-orbitron text-cyan-400">ACTIVIDADES</h3>
            </div>
            <div className="overflow-y-auto h-full p-2 space-y-2 pb-20">
                {topic.content.map((item, idx) => (
                    <button
                        key={item.id}
                        onClick={() => { setIsFlipped(false); setActiveIndex(idx); }}
                        className={`w-full text-left p-3 rounded-lg text-sm transition-all ${
                            idx === activeIndex 
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                            : 'hover:bg-slate-800 text-slate-400'
                        }`}
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-mono opacity-50">{(idx + 1).toString().padStart(2, '0')}</span>
                            {item.title}
                        </div>
                    </button>
                ))}
            </div>
        </div>

        {/* Main Card Area */}
        <div className="lg:col-span-9 flex flex-col relative perspective-1000">
            <div className="flex-1 relative transition-all duration-500 transform-style-3d">
                <div className={`absolute inset-0 w-full h-full transition-all duration-700 preserve-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
                    
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden bg-slate-900 border border-cyan-500/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(6,182,212,0.1)] group hover:border-cyan-400 transition-colors">
                        <div className="absolute top-4 right-4 animate-pulse">
                            <Activity className="w-6 h-6 text-cyan-500" />
                        </div>
                        <h3 className="text-4xl font-orbitron mb-6 text-white">{currentCard.title}</h3>
                        <p className="text-slate-400 max-w-lg mx-auto mb-8">Haz clic para interactuar y ver la definición detallada.</p>
                        <div className="mt-8 px-6 py-2 bg-cyan-900/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-bold tracking-wider group-hover:bg-cyan-500 group-hover:text-white transition-all">
                            INTERACTUAR
                        </div>
                        <div className="absolute bottom-4 text-xs text-slate-600 font-mono">
                            DATA_CARD_ID: {topic.id.toUpperCase()}_{currentCard.id}
                        </div>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-slate-900 border border-purple-500/30 rounded-2xl p-8 flex flex-col justify-center shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                         <div className="absolute top-4 right-4">
                            <Info className="w-6 h-6 text-purple-500" />
                        </div>
                        <h3 className="text-2xl font-orbitron mb-4 text-purple-400 border-b border-purple-900/50 pb-2">{currentCard.title}</h3>
                        <div className="space-y-4">
                            <p className="text-lg text-slate-200 leading-relaxed">
                                {currentCard.definition}
                            </p>
                            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 mt-6">
                                <h4 className="text-sm font-bold text-cyan-400 mb-2 font-orbitron">SIMULACIÓN INTERACTIVA</h4>
                                <p className="text-slate-400 text-sm italic">
                                    {currentCard.interactiveData || "Cargando módulo de simulación..."}
                                </p>
                                <div className="mt-3 h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 w-2/3 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-6 px-4">
                <button onClick={prevCard} className="p-3 rounded-full bg-slate-800 hover:bg-cyan-900/50 text-cyan-400 transition-all border border-transparent hover:border-cyan-500/50">
                    <ChevronLeft />
                </button>
                <div className="flex gap-2">
                    {topic.content.map((_, idx) => (
                        <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'bg-cyan-400 w-6' : 'bg-slate-700'}`} />
                    ))}
                </div>
                <button onClick={nextCard} className="p-3 rounded-full bg-slate-800 hover:bg-cyan-900/50 text-cyan-400 transition-all border border-transparent hover:border-cyan-500/50">
                    <ChevronRight />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LearningModule;