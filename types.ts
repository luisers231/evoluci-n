export enum AppMode {
  DASHBOARD = 'DASHBOARD',
  LEARN = 'LEARN',
  QUIZ = 'QUIZ',
  GAMES = 'GAMES',
}

export enum GameType {
  NONE = 'NONE',
  AHORCADO = 'AHORCADO',
  GATO = 'GATO', // Tic Tac Toe
  JEOPARDY = 'JEOPARDY',
  GALILEANOS = 'GALILEANOS', // 100 Galileanos Dicen
}

export type TopicId = 'evolucion' | 'evidencias' | 'macrofosiles' | 'microfosiles' | 'icnofosiles' | 'homologos' | 'analogos';

export interface Topic {
  id: TopicId;
  title: string;
  description: string;
  icon: string;
  content: LearningCard[];
}

export interface LearningCard {
  id: number;
  title: string;
  definition: string;
  interactiveData?: string; // Placeholder for simple interaction text
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index
  explanation: string;
}

export interface GalileanosQuestion {
  question: string;
  answers: { text: string; points: number; revealed: boolean }[];
}

export interface JeopardyCategory {
  title: string;
  questions: { points: number; question: string; answer: string; revealed: boolean }[];
}