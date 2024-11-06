import {getallAuthormodel,getallAuthormodelByid,CreateAuthormodel,UpdateAuthormodel,DeleteAuthormodel, loginAuthmodel} from "../models/index.js"
export const getallAuthorcontroller=async(req,res)=>{
    try {
        const result=await getallAuthormodel()
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Xamma Authorlarni olib kelishda xatolik")
    }
}
export const getAuthorByidcontroller=async(req,res)=>{
    try {
        const id=req.params.id
        const result=await getallAuthormodelByid(id)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Authorni Id bo'yicha olib kelishda xatolik")
    }
}
export const createauthorcontroller=async(req,res)=>{
    try {
        const {id,name,email,password,age}=req.body
        const result=await CreateAuthormodel({id,name,email,password,age})
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Authorni yaratishda xatolik")   
    }
}
export const loginauthorcontroller=async(req,res)=>{
    try {
        const {email,password}=req.body
        const result=await loginAuthmodel({email,password})
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Login qilishda xatolik") 
    }
}

export const updateAuthorByidcontroller=async(req,res)=>{
    try {
        const id=+req.params.id
        const {name,email,password,age}=req.body
        const result=await UpdateAuthormodel({id,name,email,password,age})
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Authorni yangilashda xatolik")
    }
}

export const deleteauthorcontroller=async(req,res)=>{
    try {
        const id=+req.params.id
        const result=await DeleteAuthormodel(id) 
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Authorni o'chirishda xatolik") 
    }
}