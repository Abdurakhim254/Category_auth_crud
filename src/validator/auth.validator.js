import joi from "joi"

export const id_schema=joi.object({
    id:joi.number().integer().required(),
})

export const login_schema=joi.object({
    email:joi.string().min(3).message("Emailda minimum 5 ta harf yoki belgi bo'lishi shart").required(),
    password:joi.string().min(5).message("Passwordda minimum 5 ta harf yoki belgi bo'lishi shart").required()
})

export const register_schema=joi.object({
    id:joi.number().min(1).required(),
    name:joi.string().min(3).message("Ismda minimum 3 ta harf yoki belgi bo'lishi shart").required(),
    email:joi.string().min(8).message("Emailda minimum 5 ta harf yoki belgi bo'lishi shart").required(),
    password:joi.string().min(5).message("Passwordda minimum 5 ta harf yoki belgi bo'lishi shart").required(),
    age:joi.number().integer().min(10).required()
})
export const update_schema=joi.object({
    id:joi.number().min(1).required(),
    email:joi.string().min(8).message("Emailda minimum 5 ta harf yoki belgi bo'lishi shart").required(),
    password:joi.string().min(5).message("Passwordda minimum 5 ta harf yoki belgi bo'lishi shart").required(),
    age:joi.number().integer().min(10).required()
})