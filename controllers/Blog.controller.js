import BlogModal from "../models/Blog.js";



const CreateBlog=async(req,res)=>{
    const {title,Desc}=req.body
    try {
          if (!title || !Desc ) {
      const missingField = !title
        ? "Title is required"
        
        : "Desc is required";

      return res.status(400).json({
        message: missingField,
        success: false,
      });}
      const blog=await BlogModal.create({
        title,Desc
      })
      return res.status(200).json({
        message:"Blog Created Successfully",
        blog,
        success:true
      })
    } catch (error) {
           console.log('erro',error)
      return res.status(500).json({
        message:"interanl server errro",
        success:false
        
      })
    }
}


const Getblogs=async(req,res)=>{
    try {
        const blogs=await BlogModal.find()
        if (!blogs) {
            return res.status(404).json({
                message:"Blgos Not founds",
                success:false
            })
        }
         return res.status(200).json({
                blogs,
                success:false
            })
    } catch (error) {
        console.log('er',error)
         return res.status(500).json({
                message:"Interanl server errro",
                success:false
            })
    }
}

export {CreateBlog,Getblogs}