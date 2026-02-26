const nodemailer = require("nodemailer");

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendEmail({ to, subject, html, attachments = [] }) {
    await this.transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
      attachments,
    });
  }
}

module.exports = new EmailService();