import {Category} from "../Db/index.js"

export const getAllcategory=async()=>{
    const result=await Category.find()
    return result
}

export const getCategorybyid=async(id)=>{
    const result=await Category.find({id:id})
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
export const updatecategory=async({id,title,description,isactive,category_name})=>{
    await Category.updateOne({id:id},{title:title,description:description,isactive:isactive,category_name:category_name})
    return "Category yangilandi"
}