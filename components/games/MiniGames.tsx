import React, { useState, useEffect } from 'react';
import { GameType } from '../../types';
import { RefreshCcw } from 'lucide-react';

interface MiniGamesProps {
  type: GameType;
  onExit: () => void;
}

// Word list for Hangman
const WORDS = ["EVOLUCION", "FOSIL", "DARWIN", "SELECCION", "MUTACION", "ADAPTACION", "HUESO", "AMBAR", "GENETICA", "BIOLOGIA"];

export const Hangman: React.FC = () => {
  const [word, setWord] = useState("");
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [errors, setErrors] = useState(0);
  const maxErrors = 6;

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
    setGuessed(new Set());
    setErrors(0);
  };

  const guess = (letter: string) => {
    if (guessed.has(letter) || errors >= maxErrors) return;
    const newGuessed = new Set(guessed).add(letter);
    setGuessed(newGuessed);
    if (!word.includes(letter)) {
      setErrors(e => e + 1);
    }
  };

  const isWon = word.split('').every(l => guessed.has(l));
  const isLost = errors >= maxErrors;

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-3xl font-orbitron text-cyan-400">EL AHORCADO BIOLÓGICO</h2>
      
      {/* Visual Gallows simplified */}
      <div className="h-48 w-48 border-b-4 border-slate-600 relative">
        <div className="absolute left-1/2 bottom-0 h-full w-1 bg-slate-600"></div>
        <div className="absolute left-1/2 top-0 w-24 h-1 bg-slate-600"></div>
        <div className="absolute left-[calc(50%+6rem)] top-0 h-8 w-1 bg-slate-600"></div>
        {errors > 0 && <div className="absolute left-[calc(50%+5rem)] top-8 w-8 h-8 rounded-full border-2 border-red-500"></div>} {/* Head */}
        {errors > 1 && <div className="absolute left-[calc(50%+6rem)] top-16 h-12 w-1 bg-red-500"></div>} {/* Body */}
        {errors > 2 && <div className="absolute left-[calc(50%+5rem)] top-20 w-4 h-1 bg-red-500"></div>} {/* L Arm */}
        {errors > 3 && <div className="absolute left-[calc(50%+6rem)] top-20 w-4 h-1 bg-red-500"></div>} {/* R Arm */}
        {errors > 4 && <div className="absolute left-[calc(50%+5rem)] top-28 w-4 h-12 bg-red-500 origin-top -rotate-12"></div>} {/* L Leg */}
        {errors > 5 && <div className="absolute left-[calc(50%+7rem)] top-28 w-4 h-12 bg-red-500 origin-top rotate-12"></div>} {/* R Leg */}
      </div>

      <div className="flex gap-4 text-4xl font-mono tracking-widest text-white mb-4">
        {word.split('').map((char, i) => (
          <span key={i} className="border-b-2 border-cyan-500 min-w-[2rem] text-center">
            {guessed.has(char) || isLost ? char : '_'}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 max-w-xl">
        {"ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split('').map(char => (
          <button
            key={char}
            onClick={() => guess(char)}
            disabled={guessed.has(char) || isLost || isWon}
            className={`p-2 rounded font-bold transition-all ${
              guessed.has(char) 
                ? 'bg-slate-800 text-slate-600' 
                : 'bg-slate-700 hover:bg-cyan-600 text-white'
            }`}
          >
            {char}
          </button>
        ))}
      </div>

      {(isWon || isLost) && (
        <div className="text-center animate-fade-in">
          <p className={`text-2xl font-bold mb-4 ${isWon ? 'text-green-400' : 'text-red-400'}`}>
            {isWon ? '¡VICTORIA!' : '¡GAME OVER!'}
          </p>
          <button onClick={resetGame} className="px-6 py-2 bg-cyan-600 text-white rounded-full flex items-center gap-2 mx-auto">
            <RefreshCcw size={16} /> Jugar de Nuevo
          </button>
        </div>
      )}
    </div>
  );
};

export const TicTacToe: React.FC = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    
    const calculateWinner = (squares: any[]) => {
        const lines = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8],
          [0, 3, 6], [1, 4, 7], [2, 5, 8],
          [0, 4, 8], [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
    };

    const winner = calculateWinner(board);
    const isDraw = !winner && board.every(Boolean);

    const handleClick = (i: number) => {
        if (winner || board[i]) return;
        const newBoard = [...board];
        newBoard[i] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    };

    const reset = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
    };

    return (
        <div className="flex flex-col items-center gap-8">
            <h2 className="text-3xl font-orbitron text-purple-400">GATO EVOLUTIVO</h2>
            <div className="text-xl text-slate-300">
                {winner ? `Ganador: ${winner}` : isDraw ? "Empate" : `Turno: ${xIsNext ? 'X (Dinosaurio)' : 'O (Meteorito)'}`}
            </div>

            <div className="grid grid-cols-3 gap-2 bg-slate-700 p-2 rounded-xl">
                {board.map((square, i) => (
                    <button 
                        key={i} 
                        onClick={() => handleClick(i)}
                        className={`w-24 h-24 flex items-center justify-center text-4xl font-bold bg-slate-900 rounded-lg transition-all ${!square && !winner ? 'hover:bg-slate-800' : ''}`}
                    >
                        <span className={square === 'X' ? 'text-green-400' : 'text-red-400'}>{square}</span>
                    </button>
                ))}
            </div>

            <button onClick={reset} className="px-6 py-2 bg-purple-600 text-white rounded-full flex items-center gap-2">
                <RefreshCcw size={16} /> Reiniciar
            </button>
        </div>
    );
};