import mongoose from "mongoose";

const BlogSchema= new mongoose.Schema({
    title:{
        type:String,
    },
    Desc:{
        type:String
    },
    Image:{
        type:String,
        default:"https://picsum.photos/400/300?grayscale"
    }
},
{
  timestamps:true  
})

const BlogModal= mongoose.model("blogs",BlogSchema)

export default BlogModal