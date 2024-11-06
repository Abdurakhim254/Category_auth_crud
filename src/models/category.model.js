import {getAllcategory,getCategorybyid,deleteCategory,createcategory} from "../services/index.js"

export const getAllcategorymodel=async()=>{
    try {
        const result=await getAllcategory()
        if(result.length>=1){
            return result
        }else{
            return "Category topilmadi"
        }
    } catch (error) {
        return "Categorylarni olib kelishda xatolik"
    }
}

export const getcategorybyidModel=async(id)=>{
    try {
        const result=await getCategorybyid(id)
        if(result.length>=1){
            return result
        }else{
            return "Category topilmadi"
        }
    } catch (error) {
        return "Categoryni Id boyicha olib kelishda xatolik"
    }
}

export const deletecategorymodel=async(id)=>{
    try {
        const result=await deleteCategory(id)
        return "Category o'chirildi"
    } catch (error) {
        return "Categoryni Id bo'yicha o'chirishda xatolik"
    }
}

export const createcategorymodel=async(data)=>{
    try {
        const result=await createcategory(data)
        return result
    } catch (error) {
        return "Category yaratishda xatolik"
    }
}