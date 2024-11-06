import joi from "joi"

export const id_category_schema=joi.object({
    id:joi.number().integer().min(1).required()
})


export const register_category_schema=joi.object({
    id:joi.number().integer().min(1).required(),
    category_name:joi.string().min(3).message("Categorynameda minimum 3 ta harf yoki belgi bo'lishi shart").required(),
    title:joi.string().min(8).message("Titleda minimum 5 ta harf yoki belgi bo'lishi shart").required(),
    description:joi.string().min(5).message("Descriptionda minimum 5 ta harf yoki belgi bo'lishi shart").required(),
    isactive:joi.boolean().required()
})

export const update_category_schema=joi.object({
    id:joi.number().integer().min(1).required(),
    category_name:joi.string().min(3).message("Categorynameda minimum 3 ta harf yoki belgi bo'lishi shart").required(),
    title:joi.string().min(8).message("Titleda minimum 5 ta harf yoki belgi bo'lishi shart").required(),
    description:joi.string().min(5).message("Descriptionda minimum 5 ta harf yoki belgi bo'lishi shart").required(),
    isactive:joi.boolean().required()
})