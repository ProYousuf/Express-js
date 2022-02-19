
const express=require('express')
const router=express.Router()
const dataSchema=require('../models/Data')

router.get('/show',async (req,res)=>{
 const data= await dataSchema.find()
 res.send(data)
})

router.post('/save',async (req,res)=>{
    console.log(req.body)
    const dt=new dataSchema({
        name:  req.body.name, // String is shorthand for {type: String}
        email: req.body.email,
        body:   req.body.body,
    })
   try{
        const all=await dt.save()
        res.json(all)
   }
   catch(err){
    res.send(err)
   }
    })


module.exports=router