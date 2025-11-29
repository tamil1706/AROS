import { GoogleGenAI, Type } from "@google/genai";
import { AISampleResult, ChatMessage } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateSampleContent = async (
  businessName: string, 
  productType: string, 
  vibe: string
): Promise<AISampleResult> => {
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const prompt = `
    Act as a senior creative marketing strategist for "AROS Creative Agency".
    Generate a "Free Sample" marketing concept for a client.
    
    Client Name: ${businessName}
    Product/Service: ${productType}
    Desired Vibe: ${vibe}

    Return a JSON object with:
    1. 'caption': A catchy Instagram caption (max 50 words).
    2. 'hashtags': A string of 5 relevant hashtags.
    3. 'visualPrompt': A detailed AI image generation prompt to create a stunning product visual for this client.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            caption: { type: Type.STRING },
            hashtags: { type: Type.STRING },
            visualPrompt: { type: Type.STRING }
          },
          required: ["caption", "hashtags", "visualPrompt"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AISampleResult;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

export const chatWithAI = async (message: string, history: ChatMessage[]): Promise<string> => {
  if (!apiKey) {
    return "I'm currently offline (API Key missing). Please contact us directly via WhatsApp!";
  }

  const systemInstruction = `
    You are 'Aros', the AI assistant for AROS Creative Agency.
    Your goal is to help potential clients understand our services, pricing, and portfolio.
    
    Key Info:
    - We offer AI-powered creative solutions (Product photos, branding, marketing).
    - Packages: Starter (₹3,999), Standard (₹7,999 - Recommended), Premium (₹14,999).
    - We are fast (7-10 day delivery) and affordable.
    - If they want to buy, tell them to visit the Services page or use the WhatsApp button.
    
    Tone: Professional, enthusiastic, innovative, helpful.
    Keep answers concise (under 50 words if possible).
  `;

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm thinking...";
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm having trouble connecting right now. Please try again or email us.";
  }
};