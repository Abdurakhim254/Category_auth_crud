import mongoose from "mongoose"
import {application} from "../config/index.js"
const Categoryschema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    category_name:{
        type:String,
        required:true 
    },
    title:{
        type:String,
        required:true 
    },
    description:{
        type:String,
        required:true 
    },
    isactive:{ 
        type:Boolean,
        required:true
    }
})
mongoose.connect(application.URL)

export const Category=mongoose.model("category",Categoryschema)

