const mongoose = require('mongoose')
const messageSchema = new mongoose.Schema({
    from:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
    to:{
        type:mongoose.Types.ObjectId,
        ref:"Users",
        required:true
    },
    text:{
        type:String,
        required:true
    },
    isRead:{
        type:Boolean,
        default:false
    },
    // file:{
    //     type:String,
    //     required:false,
    //     // ref:"files" // strem link with autorization 
    // }
}, {timestamps:true})

const Messages = mongoose.model('Messages', messageSchema)
module.exports={ Messages } 


