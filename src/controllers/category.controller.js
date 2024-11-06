import {getAllcategorymodel,getcategorybyidModel,createcategorymodel,deletecategorymodel} from "../models/index.js"
export const getallCategorycontroller=async(req,res)=>{
    try {
        const result=await getAllcategorymodel()
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Categorylarni olib kelishda xatolik")
    }
}

export const getCategoryByidcontroller=async(req,res)=>{
    try {
        const id=+req.params.id
        const result=await getcategorybyidModel(id)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Categoryni Id boyicha olib kelishda xatolik")
    }
}
export const createCategorycontroller=async(req,res)=>{
    try {
        const {id,title,description,isactive,category_name}=req.body
        const result=await createcategorymodel({id,title,description,isactive,category_name})
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Categoryni yaratishda xatolik")
    }
}
export const updateCategoryByidcontroller=async(req,res)=>{
    try {
        res.status(200).send("ok")

    } catch (error) {
        res.status(400).send("Categoryni Id boyicha yangilashda kelishda xatolik")
    }
}

export const deleteCategorycontroller=async(req,res)=>{
    try {
        const id=+req.params.id
        const result=await deletecategorymodel(id)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Categoryni Id boyicha o'chirishda xatolik")
    }
}