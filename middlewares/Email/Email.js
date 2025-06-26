import transporter from "./Email.config.js";
import { Verification_Email_Template, Welcome_Email_Template } from "./EmailTemplate.js";

const sendVerficationEmail = async (email, verificationCode) => {
  try {
    await transporter.sendMail({
      from: `"Blog APP" <haroontime437@gmail.com>`,
      to: email,
      subject: "Verify Email ✔",
      text: "Verify Email",
      html: Verification_Email_Template.replace("{verificationCode}", verificationCode),
    });
    console.log("Verification email sent successfully to:", email);
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};

const sendWelocmEmail = async (email) => {
  try {
    await transporter.sendMail({
      from: `"Blog APP" <haroontime437@gmail.com>`,
      to: email,
      subject: "Welcome to Blog App 🎉",
      text: "Welcome to Blog App!",
      html: Welcome_Email_Template,
    });
    console.log("Welcome email sent successfully to:", email);
  } catch (error) {
    console.error("Error sending welcome email:", error);
  }
};

export { sendVerficationEmail, sendWelocmEmail };
