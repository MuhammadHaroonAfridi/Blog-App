import express from "express";
import dotenv from 'dotenv'

const PORT=process.env.PORT || 60000
const app=express()




app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})