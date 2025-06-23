import express from "express";
import dotenv from 'dotenv'
import DbCon from "./utils/db.js";

const PORT=process.env.PORT || 60000

// db connection 
DbCon()
const app=express()




app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})