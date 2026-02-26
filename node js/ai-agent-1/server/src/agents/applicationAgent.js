const nodemailer = require("nodemailer");

class ApplicationAgent {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendApplication({ to, subject, coverLetter }) {
    return await this.transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: coverLetter.replace(/\n/g, "<br>"),
    });
  }
}

module.exports = new ApplicationAgent();