
import PendingUserModel from "../models/PendingUser.js";
import { sendVerficationEmail, sendWelocmEmail } from "../middlewares/Email/Email.js";

import bcryptjs from 'bcryptjs'
import UserModal from "../models/user.models.js";

const Register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Validate required fields
    if (!name || !email || !password) {
      const missingField = !name
        ? "Name is required"
        : !email
        ? "Email is required"
        : "Password is required";

      return res.status(400).json({
        message: missingField,
        success: false,
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
        success: false,
      });
    }

    // Generate 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000);

    // Check if user already exists
    const existUser = await PendingUserModel.findOne({ email });

    if (existUser) {
      await sendVerficationEmail(email, otp);
      await PendingUserModel.findOneAndUpdate({email},{
        otp
      })
      return res.status(200).json({
        message: `OTP has been sent to ${email}. Please verify.`,
        success: true,
      });
    }

    // Create new pending user
    const hasepassword= await bcryptjs.hash(password,10)
    const newUser = new PendingUserModel({
      name,
      email,
      password:hasepassword,
      otp,
    });

    await newUser.save();
    await sendVerficationEmail(email, otp);

    return res.status(200).json({
      message: `OTP has been sent to ${email}. Please verify.`,
      success: true,
    });

  } catch (error) {
    console.error("Error in Register:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};



const VerifyEmail=async(req,res)=>{
  const {email,otp}=req.body
  try {

      if (!email || !otp ) {
      const missingField = !email
        ? "Eamil is required"
        
        : "Otp is required";

      return res.status(400).json({
        message: missingField,
        success: false,
      });}
    const Existuser= await PendingUserModel.findOne({email})
    console.log('user',Existuser)
     if (!Existuser) {
        return res.status(404).json({
      message: "User Not Found Please Reigster",
      success: false,
    });
     }

     if (Existuser.otp != Number(otp)) {
          return res.status(404).json({
      message: "Invalid Otp",
      success: false,
    });
     }
     const Finaluser= new UserModal({
        name:Existuser.name,
        email:Existuser.email,
        password:Existuser.password,
        profile:Existuser.profile

     })

     await Finaluser.save()
     await PendingUserModel.findOneAndDelete({email})
     await sendWelocmEmail(email)
           return res.status(200).json({
      message: "User Verifed successfully",
      user:Finaluser,
      success: true,
    });
    
  } catch (error) {
     console.error("Error in Register:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}

export { Register ,VerifyEmail};
