import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    profile:{
        type:String
    },
    role:{
        type:String,
        default:"user"
    }
},{
    timestamps:true
})

const UserModal= mongoose.model('user',UserSchema)

