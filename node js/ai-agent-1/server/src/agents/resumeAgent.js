const geminiService = require("../services/geminiService");

class ResumeAgent {
  async tailorResume(resumeText, jobDescription) {
    const prompt = `
Tailor this resume to match the job description.

Resume:
${resumeText}

Job Description:
${jobDescription}
    `;
    return await geminiService.generateText(prompt);
  }
}

module.exports = new ResumeAgent();