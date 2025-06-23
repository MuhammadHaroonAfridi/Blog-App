import transporter from "./Email.config.js"


const sendVerficationEmail =async(email,verificationcode)=>{
    try {
      await  transporter.sendMail({
        from: ` "Blog APP" ${email}`,
    to: email,
    subject: "Verfiy Email ✔",
    text: "Verify Email", // plain‑text body
    html: `<h1>${verificationcode}</h1> `, // HTML body
      })
      console.log('email send successfullly',email)
    } catch (error) {
        console.log('email error',error)
    }
}


export default sendVerficationEmail