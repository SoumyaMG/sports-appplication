const express=require('express')
const mongoose=require('./config/database')
const router=require('./config/routes')
const cors=require('cors')
const path = require('path') 
const app=express()
// const port=3005
const port = process.env.PORT || 3005; 


app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,"client/build"))) 
app.get("*",(req,res) => { 
    res.sendFile(path.join(__dirname + "/client/build/index.html")) 
}) 
app.use('/',router)
app.listen(port,function(){
    console.log('listening to the port... '+port)
})