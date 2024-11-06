import {id_schema,login_schema,register_schema,update_schema} from "../validator/index.js"

export const checkauthIdmiddleware=async(req,res,next)=>{
    try {
        const id=+req.params.id
        const result=id_schema.validate({id})
        const {value,error}=result
        if(error){
            throw new Error("Id xato kiritilidi")
        }
        next()
    } catch (error) {
        res.status(400).send("Id xato kiritilidi")
    }
}
export const checkAuthmiddleware=async(req,res,next)=>{
    try {
        const {id,name,age,email,password}=req.body
        const result=register_schema.validate({id,name,age,email,password})
        const {error,value}=result
        if(error){
            throw new Error("Malumotlar toliqmas")
        }
        next()
    } catch (error) {
        res.status(400).send("Ma'lumotlar to'liqmas")
    }
}

export const chechkauthloginmiddleware=async(req,res,next)=>{
    try {
        const{email,password}=req.body
        const result=login_schema.validate({email,password})
        const {error,value}=result
        if(error){
            throw new Error("Malumotlar to'liqmas")
        }
        next()
    } catch (error) {
        res.status(400).send("Ma'lumotlar to'liqmas")
    }
}

export const checkauthupdatemiddleware=async(req,res,next)=>{
    try {
        const id=+req.params.id
        const {email,password,age} =req.body
        const result=update_schema.validate({email,password,age,id})
        const {error,value}=result
        if(error){
            throw new Error("Ma'lumotlar to'liqmas")
        }
        next()
    } catch (error) {
        res.status(400).send("Ma'lumotlar to'liqmas")
    }
}