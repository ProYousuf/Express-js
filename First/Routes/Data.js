
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

    router.delete('/delete/:id',async (req,res)=>{
        console.log(req.params.id)
        const data= await dataSchema.deleteOne({_id:req.params.id})
        res.send({msg:"deleted data",data:data})
       })

       router.post('/update/:id', async(req,res)=>{
        console.log(req.params.id,req.body)
        
        try{
            const up= await dataSchema.findByIdAndUpdate({_id:req.params.id},{
                name:  req.body.name, 
                email: req.body.email,
                body:   req.body.body,
            })
            res.send({msg:"updated",up:up})
        }catch(err){
            res.send({msg:"error"})
        }
        
       })



module.exports=router