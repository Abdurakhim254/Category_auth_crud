import { id_category_schema,register_category_schema,update_category_schema } from "../validator/index.js"
export const checkcategoryidmiddleware=(req,res,next)=>{
    try {
        const id=+req.params.id
        const result=id_category_schema.validate({id})
        const {error,value}=result
        if(error){
            throw new Error("Id xato kiritildi")
        }
        next()
    } catch (error) {
        res.status(400).send("Id xato kiritildi")
    }
}

export const checkcategorymiddleware=(req,res,next)=>{
    try {
        const {id,category_name,title,description,isactive}=req.body
        const result=register_category_schema.validate({id,category_name,title,description,isactive})
        const {error,value}=result
        if(error){
            throw new Error("Ma'lumotlar to'liqmas")
        }
        next()
    } catch (error) {
        res.status(400).send("Ma'lumotlar to'liqmas")
    }
}

export const updaatecategorymiddleware=(req,res,next)=>{
    try {
        const id=+req.params.id
        const {category_name,title,description,isactive}=req.body
        const result=update_category_schema.validate({id,category_name,title,isactive,description})
        const {error,value}=result
        if(error){
            throw new Error("Ma'lumotlar to'liqmas")
        }
        next()
    } catch (error) {
        res.status(400).send("Ma'lumotlar to'liqmas")
    }
}
