const express=require('express')
const server=express()
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test');
const routes=require('./Routes/Data')
server.use(express.json())
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser:true})
const con=mongoose.connection
con.on('open',()=>{
    console.log('connected')
})





server.use('/api',routes)
server.use('/api/save',routes)
server.listen(4000,()=>{
   console.log(`server is running`)
})