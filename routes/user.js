import express  from "express";
import { Register } from "../controllers/user.js";



const UserRoutes=express.Router()

UserRoutes.post('/register',Register)

export default UserRoutes