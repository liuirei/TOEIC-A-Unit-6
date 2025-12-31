import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDefinition = async (text: string): Promise<string> => {
    try {
        const systemPrompt = "Translate to Traditional Chinese. Format: [Translation]. No explanation. Keep it concise.";
        const userQuery = `Translate: "${text}"`;
        
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: userQuery,
            config: {
                systemInstruction: systemPrompt,
            }
        });

        return response.text?.trim() || "查詢失敗";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "查詢失敗";
    }
};