import {Category} from "../Db/index.js"

export const getAllcategory=async()=>{
    const result=await Category.find()
    return result
}

export const getCategorybyid=async(id)=>{
    const result=await Category.findById({id:id})
    return result
}
export const createcategory=async(data)=>{
    const result=Category(data)
    result.save()
    return "Category yozildi"
}
export const deleteCategory=async(id)=>{
    await Category.deleteOne({id:id})
    return "Category o'chirildi"
}