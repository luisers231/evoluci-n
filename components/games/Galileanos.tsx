import React, { useState, useEffect } from 'react';
import { generateGalileanosQuestion } from '../../services/genai';
import { GALILEANOS_DATA } from '../../constants';
import { GalileanosQuestion } from '../../types';
import { Users, X, Trophy, RefreshCw, Eye, Hand } from 'lucide-react';

const Galileanos: React.FC = () => {
  const [currentQ, setCurrentQ] = useState<GalileanosQuestion | null>(null);
  const [loading, setLoading] = useState(false);
  const [scores, setScores] = useState({ team1: 0, team2: 0 });
  const [strikes, setStrikes] = useState(0);
  const [gameTopic, setGameTopic] = useState("Evolución");
  const [showSteal, setShowSteal] = useState(false);
  const [currentTurn, setCurrentTurn] = useState<1 | 2>(1);

  const loadQuestion = async () => {
    setLoading(true);
    setStrikes(0);
    setShowSteal(false);
    
    // Attempt GenAI
    let q = await generateGalileanosQuestion(gameTopic);
    if (!q) {
        // Fallback random
        q = GALILEANOS_DATA[Math.floor(Math.random() * GALILEANOS_DATA.length)];
        // Deep copy to reset revealed state if reused
        q = JSON.parse(JSON.stringify(q));
    }
    
    setCurrentQ(q);
    setLoading(false);
  };

  useEffect(() => {
    loadQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const revealAnswer = (index: number) => {
    if (!currentQ) return;
    const newAnswers = [...currentQ.answers];
    if (newAnswers[index].revealed) return;

    newAnswers[index].revealed = true;
    
    // Add points to current team
    const points = newAnswers[index].points;
    setScores(prev => ({
        ...prev,
        [currentTurn === 1 ? 'team1' : 'team2']: prev[currentTurn === 1 ? 'team1' : 'team2'] + points
    }));

    setCurrentQ({ ...currentQ, answers: newAnswers });
  };

  const addStrike = () => {
    const newStrikes = strikes + 1;
    setStrikes(newStrikes);
    if (newStrikes === 3 && !showSteal) {
        setShowSteal(true); // Opportunity to steal
    }
  };

  const stealPoints = (success: boolean) => {
    if (success && currentQ) {
        // Calculate remaining points on board to steal? 
        // Typically steal logic varies, simplified here: Team takes current round points.
        // For this simple version, we switch turn to other team and they keep playing or next round.
        const otherTeam = currentTurn === 1 ? 2 : 1;
        setScores(prev => ({
             ...prev,
             [`team${otherTeam}`]: prev[`team${otherTeam}` as keyof typeof scores] + 50 // Bonus for steal
        }));
        alert(`¡Equipo ${otherTeam} robó los puntos!`);
    } else {
        alert("¡Intento de robo fallido!");
    }
    setShowSteal(false);
    loadQuestion(); // Next round
  };

  if (loading) return <div className="text-center p-20 font-orbitron text-cyan-400 animate-pulse">CARGANDO GALILEANOS...</div>;

  return (
    <div className="max-w-5xl mx-auto p-4">
        {/* Scoreboard */}
        <div className="flex justify-between items-center mb-8 bg-slate-900 border border-slate-700 p-6 rounded-2xl shadow-2xl">
            <div className={`text-center p-4 rounded-xl border-2 transition-all ${currentTurn === 1 ? 'border-cyan-500 bg-cyan-900/20' : 'border-slate-800'}`}>
                <h3 className="text-cyan-400 font-bold font-orbitron mb-2">EQUIPO 1</h3>
                <div className="text-4xl text-white font-mono">{scores.team1}</div>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
                    100 GALILEANOS DICEN
                </h1>
                <div className="flex gap-2 mt-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${i <= strikes ? 'bg-red-600 border-red-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-600'}`}>
                            <X size={32} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={`text-center p-4 rounded-xl border-2 transition-all ${currentTurn === 2 ? 'border-purple-500 bg-purple-900/20' : 'border-slate-800'}`}>
                <h3 className="text-purple-400 font-bold font-orbitron mb-2">EQUIPO 2</h3>
                <div className="text-4xl text-white font-mono">{scores.team2}</div>
            </div>
        </div>

        {/* Game Board */}
        {currentQ && (
            <div className="bg-slate-900 border-4 border-cyan-600 rounded-3xl p-8 shadow-[0_0_50px_rgba(8,145,178,0.2)] relative">
                <h2 className="text-2xl text-center text-white mb-8 font-rajdhani font-bold uppercase tracking-widest bg-slate-800 py-3 rounded-lg border border-slate-700">
                    "{currentQ.question}"
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentQ.answers.map((ans, idx) => (
                        <div 
                            key={idx} 
                            onClick={() => revealAnswer(idx)}
                            className="h-20 perspective-1000 cursor-pointer group"
                        >
                            <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${ans.revealed ? 'rotate-x-180' : ''}`}>
                                {/* Front (Hidden) */}
                                <div className="absolute inset-0 backface-hidden bg-gradient-to-b from-blue-900 to-blue-950 border-2 border-blue-500 rounded-lg flex items-center justify-center shadow-lg group-hover:border-cyan-400">
                                    <div className="w-12 h-12 rounded-full bg-blue-800 border border-blue-400 flex items-center justify-center text-xl font-bold font-orbitron text-blue-200">
                                        {idx + 1}
                                    </div>
                                </div>
                                {/* Back (Revealed) */}
                                <div className="absolute inset-0 backface-hidden rotate-x-180 bg-gradient-to-b from-green-900 to-green-950 border-2 border-green-500 rounded-lg flex items-center justify-between px-6 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                                    <span className="text-xl font-bold text-white uppercase">{ans.text}</span>
                                    <span className="text-2xl font-mono text-green-400 border-l-2 border-green-700 pl-4">{ans.points}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* Controls */}
        <div className="mt-8 flex justify-center gap-4">
             <button 
                onClick={addStrike} 
                disabled={strikes >= 3}
                className="px-6 py-4 bg-red-900/50 border border-red-500 hover:bg-red-600 text-white rounded-lg flex items-center gap-2 font-bold font-orbitron transition-all"
            >
                <X /> STRIKE
            </button>
            <button 
                onClick={() => setCurrentTurn(currentTurn === 1 ? 2 : 1)}
                className="px-6 py-4 bg-slate-800 border border-slate-600 hover:bg-slate-700 text-white rounded-lg flex items-center gap-2 font-bold font-orbitron transition-all"
            >
                <Users /> CAMBIAR TURNO
            </button>
            <button 
                onClick={loadQuestion}
                className="px-6 py-4 bg-cyan-900/50 border border-cyan-500 hover:bg-cyan-600 text-white rounded-lg flex items-center gap-2 font-bold font-orbitron transition-all"
            >
                <RefreshCw /> SIGUIENTE RONDA
            </button>
        </div>

        {showSteal && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
                <div className="bg-slate-900 border-2 border-yellow-500 p-8 rounded-2xl max-w-md w-full text-center shadow-[0_0_50px_rgba(234,179,8,0.5)]">
                    <Hand className="w-16 h-16 text-yellow-500 mx-auto mb-4 animate-bounce" />
                    <h2 className="text-3xl font-orbitron text-white mb-4">¡ROBO DE PUNTOS!</h2>
                    <p className="mb-6 text-slate-300">El equipo contrario tiene una oportunidad para robar.</p>
                    <div className="flex gap-4 justify-center">
                        <button onClick={() => stealPoints(true)} className="px-6 py-3 bg-green-600 rounded font-bold hover:bg-green-500">ACERTARON</button>
                        <button onClick={() => stealPoints(false)} className="px-6 py-3 bg-red-600 rounded font-bold hover:bg-red-500">FALLARON</button>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default Galileanos;