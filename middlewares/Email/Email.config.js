import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "haroontime437@gmail.com",
    pass: "anex rpbt pveo jhsi",
  },
});


export default transporter