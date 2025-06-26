import express  from "express";
import { Login, Register, VerifyEmail } from "../controllers/user.js";



const UserRoutes=express.Router()

UserRoutes.post('/register',Register)
UserRoutes.post("/Verify-email",VerifyEmail)
UserRoutes.post('/login',Login)
export default UserRoutes