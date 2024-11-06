
import express from "express"
import {getallCategorycontroller,updateCategoryByidcontroller,getCategoryByidcontroller,createCategorycontroller,deleteCategorycontroller} from "../controllers/index.js"
import {checkcategoryidmiddleware,checkcategorymiddleware,updaatecategorymiddleware} from "../middlewares/index.js"
export const categoryrouter=express.Router()

categoryrouter.get("/",getallCategorycontroller)
categoryrouter.get("/:id",checkcategoryidmiddleware,getCategoryByidcontroller)
categoryrouter.put("/:id",updaatecategorymiddleware,updateCategoryByidcontroller)
categoryrouter.post("/",checkcategorymiddleware,createCategorycontroller)
categoryrouter.delete("/:id",checkcategoryidmiddleware,deleteCategorycontroller)