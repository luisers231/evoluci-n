import React, { useState, useEffect } from 'react';
import { TopicId, QuizQuestion } from '../types';
import { generateQuizQuestions } from '../services/genai';
import { MOCK_QUIZ_QUESTIONS } from '../constants';
import { CheckCircle, XCircle, AlertTriangle, Loader2, Trophy } from 'lucide-react';

interface QuizModuleProps {
  topicId: TopicId;
  onBack: () => void;
}

const QuizModule: React.FC<QuizModuleProps> = ({ topicId, onBack }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true);
      // Try to get questions from AI
      let aiQuestions = await generateQuizQuestions(topicId, 20);
      
      // Validation: Ensure we got valid data, otherwise use mock
      if (!aiQuestions || aiQuestions.length === 0) {
        console.log("Using Mock Questions");
        // Expand mock questions to fill array for demo purposes if needed or just use what we have
        aiQuestions = [...MOCK_QUIZ_QUESTIONS]; 
      }
      
      setQuestions(aiQuestions);
      setLoading(false);
    };
    loadQuestions();
  }, [topicId]);

  const handleOptionSelect = (index: number) => {
    if (selectedOption !== null) return; // Prevent changing answer
    setSelectedOption(index);
    setShowExplanation(true);
    if (index === questions[currentQIndex].correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[500px]">
        <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mb-4" />
        <p className="text-cyan-300 font-orbitron animate-pulse">GENERANDO PREGUNTAS CON IA...</p>
      </div>
    );
  }

  if (quizFinished) {
    return (
      <div className="flex flex-col items-center justify-center h-[600px] animate-fade-in text-center">
        <Trophy className="w-24 h-24 text-yellow-400 mb-6 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
        <h2 className="text-4xl font-orbitron text-white mb-2">¡EVALUACIÓN COMPLETADA!</h2>
        <p className="text-2xl text-cyan-400 mb-8 font-rajdhani">
            Tu Puntaje: <span className="font-bold text-white">{score}</span> / {questions.length}
        </p>
        <div className="w-full max-w-md bg-slate-800 rounded-full h-4 mb-8">
            <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000" 
                style={{ width: `${(score / questions.length) * 100}%` }}
            ></div>
        </div>
        <button onClick={onBack} className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold font-orbitron transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            VOLVER AL MENÚ
        </button>
      </div>
    );
  }

  const currentQ = questions[currentQIndex];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-orbitron text-slate-300">PREGUNTA {currentQIndex + 1} / {questions.length}</h2>
        <span className="bg-slate-800 px-4 py-1 rounded-full text-cyan-400 text-sm font-bold border border-cyan-900">
            PUNTAJE: {score}
        </span>
      </div>

      <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
         {/* Decoration */}
         <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

         <h3 className="text-2xl font-bold text-white mb-8 leading-relaxed">{currentQ.question}</h3>

         <div className="space-y-4">
            {currentQ.options.map((opt, idx) => {
                let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-semibold relative overflow-hidden ";
                if (selectedOption === null) {
                    btnClass += "border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-cyan-500/50 text-slate-200";
                } else {
                    if (idx === currentQ.correctAnswer) {
                        btnClass += "border-green-500 bg-green-900/20 text-green-300 shadow-[0_0_15px_rgba(34,197,94,0.3)]";
                    } else if (idx === selectedOption) {
                        btnClass += "border-red-500 bg-red-900/20 text-red-300";
                    } else {
                        btnClass += "border-slate-800 bg-slate-900/50 text-slate-600 opacity-50";
                    }
                }

                return (
                    <button 
                        key={idx} 
                        onClick={() => handleOptionSelect(idx)}
                        disabled={selectedOption !== null}
                        className={btnClass}
                    >
                        <div className="flex items-center justify-between relative z-10">
                            <span>{opt}</span>
                            {selectedOption !== null && idx === currentQ.correctAnswer && <CheckCircle className="text-green-400" />}
                            {selectedOption === idx && idx !== currentQ.correctAnswer && <XCircle className="text-red-400" />}
                        </div>
                    </button>
                );
            })}
         </div>

         {showExplanation && (
             <div className="mt-8 bg-cyan-900/20 border-l-4 border-cyan-500 p-4 rounded-r-lg animate-fade-in">
                 <div className="flex items-start gap-3">
                     <AlertTriangle className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                     <div>
                         <h4 className="font-bold text-cyan-400 text-sm mb-1 font-orbitron">EXPLICACIÓN CIENTÍFICA</h4>
                         <p className="text-slate-300 text-sm">{currentQ.explanation}</p>
                     </div>
                 </div>
                 <div className="mt-4 flex justify-end">
                     <button onClick={nextQuestion} className="px-6 py-2 bg-cyan-600 text-white rounded-lg font-bold hover:bg-cyan-500 transition-colors">
                         {currentQIndex + 1 === questions.length ? "VER RESULTADOS" : "SIGUIENTE"}
                     </button>
                 </div>
             </div>
         )}
      </div>
    </div>
  );
};

export default QuizModule;