const mongoose=require('mongoose')

mongoose.Promise=global.Promise
const CONNECTION_URL=process.env.MONGODB_URI || 'mongodb://localhost:27017/sports-app'
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology: true})
.then(()=>{
    console.log('Successfully connected to DB...')
})
.catch((err)=>{
    console.log('error in connecting to DB '+err)
})