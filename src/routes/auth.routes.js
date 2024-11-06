import express from "express"
import {getAuthorByidcontroller,getallAuthorcontroller,updateAuthorByidcontroller,createauthorcontroller,loginauthorcontroller,deleteauthorcontroller} from "../controllers/index.js"
import {checkauthIdmiddleware,checkAuthmiddleware,checkauthupdatemiddleware,chechkauthloginmiddleware} from "../middlewares/index.js"
export const authrouter=express.Router()

authrouter.get("/",getallAuthorcontroller)
authrouter.get("/:id",checkauthIdmiddleware,getAuthorByidcontroller)
authrouter.put("/:id",checkauthupdatemiddleware,updateAuthorByidcontroller)
authrouter.post("/",checkAuthmiddleware,createauthorcontroller)
authrouter.post("/login",chechkauthloginmiddleware,loginauthorcontroller)
authrouter.delete("/:id",checkauthIdmiddleware,deleteauthorcontroller)
