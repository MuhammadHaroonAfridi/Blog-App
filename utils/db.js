import mongoose from "mongoose";

const DbCon=async()=>{
    try {
        mongoose.connect(process.env.Db_Url)
        console.log('mongodb connected')
        
    } catch (error) {
        console.log('mongodb errr',error)
        
    }
}

export default DbCon