import transporter from "./Email.config.js"
import { Verification_Email_Template } from "./EmailTemplate.js"


const sendVerficationEmail =async(email,verificationcode)=>{
    try {
      await  transporter.sendMail({
        from: ` "Blog APP" 'haroontime437@gmail.com' `,
    to: email,
    subject: "Verfiy Email ✔",
    text: "Verify Email", // plain‑text body
    html: Verification_Email_Template.replace("{verificationCode}",verificationcode), // HTML body
      })
      console.log('email send successfullly',email)
    } catch (error) {
        console.log('email error',error)
    }
}


export default sendVerficationEmail