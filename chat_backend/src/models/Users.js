const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const getAnyTime = require('../services/Times')
const userSchema = new mongoose.Schema({
    email:{
        type:String
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        required:true,
        min:15
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    //userName started with @ 
    username:{
        type:String
    },
    online:{
        type:Boolean
    }
}, {timestamps:true})


const validateUser = (user)=>{
    const schema  = Joi.object({
        username:Joi.string().min(4),
        lastname:Joi.string().required(),
        firstname:Joi.string().required(),
        phone:Joi.string().pattern(new RegExp("^([+1-9]{4}) ?-?[0-9]{2} ?-?[0-9]{3} ?-?[0-9]{2} ?-?[0-9]{2}$")).required(), // +998998892101 +998-99-889-21-01  +998 29 687 21 06 for uzbek numbers
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        repeat_password: Joi.ref('password'),
        email:Joi.string().email({ minDomainSegments: 2}),
        image:Joi.string(),
        online:Joi.boolean()
    })

    return schema.validate(user)
}

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, phone:this.phone, expires:getAnyTime(43200)}, process.env.JWT_SECRET);
    return token;
  }

const validateUserForUpdate = (user)=>{
    const schema  = Joi.object({
        username:Joi.string().min(4),
        lastname:Joi.string(),
        firstname:Joi.string(),
        phone:Joi.string().pattern(new RegExp("^([+1-9]{4}) ?-?[0-9]{2} ?-?[0-9]{3} ?-?[0-9]{2} ?-?[0-9]{2}$")), // +998998892101 +998-99-889-21-01  +998 29 687 21 06 for uzbek numbers
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        repeat_password: Joi.ref('password'),
        email:Joi.string().email({ minDomainSegments: 2}),
        image:Joi.string(),
        online:Joi.boolean()
    })

    return schema.validate(user)
}

const checkUsernameExist =async (username) => {
    if(await User.findOne({username:username}))
        return true 
    return false
}

const checkPhoneExist =async (phone) => {
    if(await User.findOne({phone:phone}))
        return true
    return false
}

const checkEmailExist =async (email) => {
    if(await User.findOne({email:email}))
        return true
    return false
}

const User = mongoose.model('Users', userSchema)
module.exports={User, validateUser , checkEmailExist ,validateUserForUpdate, checkUsernameExist, checkPhoneExist} 


