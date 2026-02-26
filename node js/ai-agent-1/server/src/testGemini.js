require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function run() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: "Say hello professionally",
    });

    console.log(response.text);
  } catch (err) {
    console.error("Gemini Error:", err);
  }
}

run();