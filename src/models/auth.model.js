import {getAll,getByid,CreateAuth,loginAuth,updateAuth,deleteAuth} from "../services/index.js"
export const getallAuthormodel=async()=>{
    try {
        const result=await getAll()
        if(result.length>=1){
            return result
        }else{
            return "Ma'lumot topilmadi"
        }
    } catch (error) {
        return "Authorlarni olib kelishda xatolik"
    }
}

export const getallAuthormodelByid=async(id)=>{
    try {
        const result=await getByid(id)
        if(result.length>=1){
            return result
        }else{
            return "Ma'lumot topilmadi"
        }
    } catch (error) {
        return "Authorni id bo'yicha  olib kelishda xatolik"
    }
}

export const CreateAuthormodel=async(data)=>{
    try {
        const result=await CreateAuth(data)
        return result
    } catch (error) {
        return "Authorni yaratishda  xatolik"
    }
}
export const loginAuthmodel=async(data)=>{
    try {
        const result=await loginAuth(data)
        if(result.length>=1){
            return result
        }else{
            return "Ma'lumot topilmadi"
        }
    } catch (error) {
        return "Authorni Login qilishida xatolik"
    }
}

export const UpdateAuthormodel=async(data)=>{
    try {
        const result=await updateAuth(data)
        return result
    } catch (error) {
        return "Authorni yangilashda xatolik"
    }
}
export const DeleteAuthormodel=async(id)=>{
    try {
        const result=await deleteAuth(id)
        return result
    } catch (error) {
        return "Authorni o'chirishda xatolik"
    }
}