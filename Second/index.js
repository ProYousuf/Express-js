const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/second');

const dataRouter = require('./router/dataRouter')
const userRouter = require('./router/userRouter')

// mongoose.connect('mongodb://localhost:27017/second', { useNewUrlParser: true })
// const con = mongoose.connection
// con.on('open', () => {
//     console.log('connected...')
// })
app.use(express.json())
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const check = mongoose.connection
check.on('open', () => {
    console.log('connected...')
})


app.use('/api', dataRouter)
app.use('/user', userRouter)

app.listen(process.env.PORT || 8000, () => {
    console.log("server is running")
})