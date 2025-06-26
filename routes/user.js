import express  from "express";
import { Register, VerifyEmail } from "../controllers/user.js";



const UserRoutes=express.Router()

UserRoutes.post('/register',Register)
UserRoutes.post("/Verify-email",VerifyEmail)
export default UserRoutes