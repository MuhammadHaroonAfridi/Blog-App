import sendVerficationEmail from "../middlewares/Email/Email.js";
import PendingUserModel from "../models/PendingUser.js";
import bcryptjs from 'bcryptjs'

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

export { Register };
