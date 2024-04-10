import nodemailer from "nodemailer";

export async function sendMail(subject: string, toEmail: string, otpText: string): Promise<boolean> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL!,
      pass: process.env.NODEMAILER_PW!,
    },
  });

  const mailOptions: nodemailer.SendMailOptions = {
    from: process.env.NODEMAILER_EMAIL!,
    to: toEmail,
    subject: subject,
    text: otpText,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email Sent");
    return true;
  } catch (error) {
    const errorMessage = typeof error === 'string' ? error : JSON.stringify(error);
    throw new Error(errorMessage);
  }
}
