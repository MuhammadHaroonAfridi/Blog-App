import mongoose from "mongoose";

const DbCon=async()=>{
    try {
      await  mongoose.connect(process.env.DB_URL)
        console.log('mongodb connected')
        
    } catch (error) {
        console.log('mongodb errr',error)
        
    }
}

export default DbCon