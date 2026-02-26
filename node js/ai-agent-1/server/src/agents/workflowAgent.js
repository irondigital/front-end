const resumeAgent = require("./resumeAgent"); // ✅ already an instance
const scraperAgent = require("./scraperAgent");
const fs = require("fs");
const emailService = require("../services/emailService");

class WorkflowAgent {
  async run({ keywords, location, resumePath, email }) {
    // 1️⃣ Scrape jobs
    const jobs = await scraperAgent.scrape({ keywords, location });

    // 2️⃣ Read resume file if provided
    let resumeText = resumePath ? fs.readFileSync(resumePath, "utf-8") : "";

    const results = [];

    // 3️⃣ Tailor resume & send email
    for (const job of jobs) {
      const tailoredResume = await resumeAgent.tailorResume(resumeText, job.title); // ✅ use instance
      results.push({ jobTitle: job.title, company: job.company, tailoredResume });

      if (email) {
        await emailService.sendEmail({
          to: email,
          subject: `Tailored Resume for ${job.title} at ${job.company}`,
          html: `<pre>${tailoredResume}</pre>`,
        });
      }
    }

    // 4️⃣ Delete uploaded resume after processing
    if (resumePath) fs.unlinkSync(resumePath);

    return results;
  }
}

module.exports = WorkflowAgent;