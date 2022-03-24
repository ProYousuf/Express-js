const express = require('express')
const routes = express.Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel')

routes.post('/signup', async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const user = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        })
        await user.save()
        
        // res.json(user)
        res.status(200).json({
            msg: "sign up successful"
        })
    } catch (err) {
        res.send(err)
    }
})

routes.post('/login', async (req, res) => {
    try{
    const user = await userModel.find({ email: req.body.email })
   
    if (user && user.length > 0) {
        const isPassword = await bcrypt.compare(req.body.password, user[0].password)
        console.log(isPassword)
        if (isPassword) {
            const token=jwt.sign({
                email:user[0].email,
                userId:user[0]._id
            },process.env.JWT_SECRET)
           

            res.status(200).json({
                "access_token": token,
                "message": "Login successful!"
            });
        }
        else {
            res.status(401).json({
                error: "Authentication failed"
            })
        }
    }
    else {
        res.status(401).json({
            error: "Authentication failed"
        })
    }
}catch{
    res.status(401).json({
        error: "Authentication failed"
    })
}
})







module.exports = routes