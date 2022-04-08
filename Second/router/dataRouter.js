const express = require('express')
const routes = express.Router()
const {Add,Show,showOne,Delete,Update}=require('../controller/dataController')
const checkLogin=require('../middleware/checkLogin')


routes.get('/show', checkLogin, Show)

routes.get('/showSingle/:id', showOne)

routes.post('/save', Add)

routes.delete('/delete/:id', Delete)

routes.put('/update/:id', Update)


module.exports = routes