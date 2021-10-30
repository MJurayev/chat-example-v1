const mongoose = require('mongoose')

var uri="mongodb://localhost:27017";

if(process.env.NODE_ENV === 'production')
    uri=process.env.PROD_DATABASE_URI
else 
    uri = process.env.DEV_DATABASE_URI
    
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify:false})
.then(()=>{
    console.log('Connected Database')
})
.catch((err)=>{
    console.error('Bazaga ulanishda xato: ', err)
})