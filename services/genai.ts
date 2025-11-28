import { GoogleGenAI, Type } from "@google/genai";
import { QuizQuestion, GalileanosQuestion, TopicId } from '../types';

let genAI: GoogleGenAI | null = null;

const initGenAI = () => {
  if (process.env.API_KEY) {
    genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
};

initGenAI();

export const generateQuizQuestions = async (topic: TopicId, count: number = 20): Promise<QuizQuestion[]> => {
  if (!genAI) {
    console.warn("API Key not found, returning mocks.");
    return []; // The UI will handle empty arrays by falling back to mocks
  }

  const prompt = `Genera ${count} preguntas de opción múltiple sobre el tema "${topic}" de ciencias naturales.
  Formato JSON estricto: Array de objetos con {id: number, question: string, options: string[], correctAnswer: number (0-3), explanation: string}.
  Asegúrate que la respuesta correcta esté indicada por el índice.`;

  try {
    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.INTEGER },
              question: { type: Type.STRING },
              options: { type: Type.ARRAY, items: { type: Type.STRING } },
              correctAnswer: { type: Type.INTEGER },
              explanation: { type: Type.STRING }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as QuizQuestion[];
    }
  } catch (error) {
    console.error("Error generating quiz:", error);
  }
  return [];
};

export const generateGalileanosQuestion = async (topic: string): Promise<GalileanosQuestion | null> => {
  if (!genAI) return null;

  const prompt = `Genera una pregunta tipo "100 Ecuatorianos Dicen" sobre el tema "${topic}".
  Debe tener 5 respuestas populares con puntajes que sumen 100 (o cerca).
  JSON: { question: string, answers: [{text: string, points: number, revealed: boolean (false)}] }`;

  try {
    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            question: { type: Type.STRING },
            answers: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  text: { type: Type.STRING },
                  points: { type: Type.INTEGER },
                  revealed: { type: Type.BOOLEAN }
                }
              }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as GalileanosQuestion;
    }
  } catch (error) {
    console.error("Error generating galileanos:", error);
  }
  return null;
};
