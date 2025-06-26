
import { sendVerficationEmail, sendWelocmEmail } from "../middlewares/Email/Email.js";
import PendingUserModel from "../models/PendingUser.js";
import jwt from 'jsonwebtoken'

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
    await sendWelocmEmail(email,Existuser.name)
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

const Login=async(req,res)=>{
  const {email,password}=req.body
  try {
    const user=await UserModal.findOne({email})
    if (!user) {
      return res.status(200).json({
        message:"User not Found",
        success:false
        
      })
    }
    const comaparePassword=await bcryptjs.compare(password,user.password)
     if (!comaparePassword) {
      return res.status(404).json({
        message:"Invalid passwrod",
        success:false
        
      })
    }
const token = jwt.sign(
  {
    id: user._id,
    email: user.email,
  },
  process.env.Jwt_Secrete_Key, // ✅ Correct syntax: second parameter should be the secret key
  {
    expiresIn: '5h', // ✅ Correct option key: 'expiresIn', not 'expire'
  }
);
    return res.status(200).json({
      message:"Login successfully",
      user,
      success:true,
      token
    })
  } catch (error) {
    console.log('erro',error)
      return res.status(500).json({
        message:"interanl server errro",
        success:false
        
      })
  }
}

export { Register ,VerifyEmail,Login};
