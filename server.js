const express=require('express')
require('dotenv').config()
const cors=require('cors')

const app=express()

app.use(express.json())


app.get("/",(req,res)=>{
    res.status(200).send("Gargeya is a good boy")
    
})
app.post("/",(req,res)=>{
    const{Name,User_Id}=req.body
    if(!Name){
        return res.status(400).json({msg:"Name is missing"})
    }
    if(!User_Id){
        return res.status(400).json({msg:"User_Id is missing"})
    }
    const b=User_Id.length
    if(b<8 || b>14){
        return res.status(400).json({msg:"User_Id didn't satisfy the length"})
    }
    return res.status(200).json({msg:"HI"})
})

app.listen(process.env.PORT,()=>{
   console.log(`Sucessfully Connected to ${process.env.PORT}`)
})