const { GoogleGenAI } = require("@google/genai");

class GeminiService {
  constructor() {
    this.ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });
  }

  async generateText(prompt) {
    try {
      const result = await this.ai.models.generateContent({
       model: "gemini-1.5-flash", // ← safest free model
        contents: prompt,
      });

      return result.text;
    } catch (error) {
      console.error("Gemini API error:", error);
      throw new Error("Gemini API request failed");
    }
  }
}


module.exports = new GeminiService();