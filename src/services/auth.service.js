import {Auth} from "../Db/index.js"
export const getAll=async()=>{
    const result=await Auth.find()
    return result
}

export const getByid=async(id)=>{
    const result=await Auth.find({id:id})
    return result
}

export const CreateAuth=async(data)=>{
    const result=Auth(data)
    result.save()
    return "Ma'lumot yozildi"
}

export const loginAuth=async({email,password})=>{
    const result=await Auth.find({email:email,password:password})
    return result
}

export const deleteAuth=async(id)=>{
    const result=await Auth.deleteOne({id:id})
    return "Auth o'chirildi"
}

export const updateAuth=async({id,name,email,password,age})=>{
    const result=await Auth.updateOne({id:id},{name:name,email:email,password:password,age:age})
    return "Auth yangilandi"
}