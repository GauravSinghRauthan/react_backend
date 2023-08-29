const express = require('express')
const  blogRouter  = require('./routes/blogRoute')
const dbConnect = require('./config/dbConnect')
require('dotenv').config
const app = express()

app.use(express.json())

app.use(require('cors')())


app.get('/',(req,res)=>{
    res.send('data is found')
})

app.use('/blog',blogRouter)


dbConnect();

app.listen(8080,()=>{
    console.log(`sever listen on port no 8080`)
})

