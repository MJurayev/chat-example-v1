const mongoose = require('mongoose')

const verifySchema =  mongoose.Schema({
    phone:{
        type:String,
        required:true,
        unique:true
    },
    code:{
        type:String,
        required:true
    },
    success:{
        type:Boolean,
        default:false
    },
    expiry:{
        type:Date,
        required:true
    }
}, { timestamps:true })

const Verytifications = mongoose.model("Verytifications",verifySchema)

module.exports = { Verytifications }