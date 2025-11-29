
import { GoogleGenAI, Chat } from "@google/genai";

// Ensure you have your API key in environment variables
const apiKey = process.env.API_KEY;
if (!apiKey) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey });

const chat: Chat = ai.chats.create({
  model: 'gemini-2.5-flash',
  config: {
    systemInstruction: 'You are a friendly and helpful chatbot. Your responses should be informative and concise. Format your answers in markdown where appropriate.',
  },
});

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    // Provide a more user-friendly error message
    if (error instanceof Error) {
        return `Sorry, I encountered an error: ${error.message}. Please try again later.`;
    }
    return "Sorry, I encountered an unknown error. Please try again later.";
  }
};
