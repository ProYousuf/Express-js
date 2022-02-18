
const express=require('express')
const router=express.Router()
// const dataSchema=require('../models/Data')

router.get('/',(req,res)=>{
res.send({
    'gg':'hh'
})
})

router.post('/save',(req,res)=>{
    console.log(req.body)
    res.send({
        'gg':'hh'
    })
    })


module.exports=router