import express from "express"
import {application} from "./src/config/index.js"
import {authrouter,categoryrouter} from "./src/routes/index.js"
const app=express()

app.use(express.json())

app.use("/auth",authrouter)
app.use("/category",categoryrouter)

app.use((req,res)=>{
    // console.error(err.message)
    res.status(500).send("Internal Server error")
})

app.listen(application.PORT,()=>{
    console.log("Server is running on port "+application.PORT)
})
