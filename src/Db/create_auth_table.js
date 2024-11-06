import mongoose from "mongoose"
import {application} from "../config/index.js"
const Authschema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true 
    },
    age:{
        type:Number,
        required:true
    }
})
mongoose.connect(application.URL)

export const Auth=mongoose.model("category",Authschema)