import express from "express";
import dotenv from 'dotenv'
import DbCon from "./utils/db.js";
import UserRoutes from "./routes/user.js";
import cors from 'cors'
import BlogRoutes from "./routes/Blog.routes.js";


dotenv.config()

const PORT=process.env.PORT || 6000


// db connection 
DbCon()    //mongoDb <=========
const app=express()
app.use(express.json())
app.use(cors("*"))


app.use('/api/user',UserRoutes)
app.use('/api/blog',BlogRoutes)



app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})