const dataModel = require('../models/dataModel')


const Show=async (req, res) => {
    const allData = await dataModel.find()
    res.send(allData)
}

const showOne=async (req, res) => {
    const oneData = await dataModel.findOne({_id:req.params.id})
    res.send(oneData)
}

const Add=async (req, res) => {
    // console.log(req.body)
    const data = new dataModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const all = await data.save()
        res.json(all)

    } catch (err) {
        res.send(err)
    }
}

const Delete=async (req, res) => {
    console.log(req.params.id)
   const data=await dataModel.deleteOne({_id:req.params.id})
    res.send({msg:"deleted"})
}

const Update=async (req, res) => {
    console.log(req.params.id,req.body)

    try{
        const data=await dataModel.findByIdAndUpdate({_id:req.params.id},{
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        res.send({msg:"updated",data:data})
    }catch(err){
        res.send({msg:"error"})
    }  
    
}

module.exports={
    Add,
    Show,
    showOne,
    Delete,
    Update
}