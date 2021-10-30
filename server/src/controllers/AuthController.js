const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User } = require('../models/Users')
const sendSMS = require('../services/sendSms')
const { Verytifications } = require('../models/Verytifications')
const getAnyTime = require('../services/Times')
const _ = require('lodash')
const UserLogin = async (data) =>{
    const { password, phone } = data
    const user = await User.findOne({phone:phone})
    if(!user)
        return {status:400, response:"Phone not valid" }
    const valid =await bcrypt.compare(password, user.password)
    if(valid){
            const token = user.generateAuthToken()
            return { status:200, response:token }
    }
    return {status:400, response:"Password don't match" }

}

const RequestSendSmsWrite =async (phone) => {
    if(!phone)
        return { status:400, response:"Phone is note valid" }
    let code = "123452"
    if(!sendSMS(phone, code))
        return {status:500, response:"Don't send sms"}

    const expiry = getAnyTime(300)
    let saved;
    const founded =await  Verytifications.findOne({phone:phone})
    if(founded){
        saved = await Verytifications.findOneAndUpdate({phone:phone}, {expiry:expiry, code:code, success:false }, {new :true})
        console.log(saved)
    }else{
        const verify = new Verytifications({phone:phone, code:code, expiry: expiry,success:false})
        saved = await verify.save()
    }
    if(saved)
        return { status:200, response:{expiry:expiry} }
    return { status:400, response:"Something went wrong!!!" }
}


const CheckPhoneVerified = async (phone) => {
    const verification = await Verytifications.findOne({phone:phone, success:true})
    if(!verification)return { status:400, response:"Phone not verified" }
    return { status:200, response:"Phone  verified" }
}

const ConfirmCodeWithPhone =async (data) => {
    const { phone, code } = data

    const verification = await Verytifications.findOne({phone:phone, success:false})
    if(!verification)
        return { status:401, response:"Phone is not valid"}
        const expiry = getAnyTime(300)
    if( code && verification.code === code ){
        await Verytifications.findOneAndUpdate({phone:phone}, {
            code:"",
            expiry:null,
            success:true
        }, {new:true})
        
        return { status:200, response:{expiry} }
    }
    return { status:404, response:"code has expired" }
}

const CheckToken =async (info) => {
    const tempUser = await User.findOne({_id:info._id})
    if(!tempUser)
        return {status:402, response:"Something went wrong"}
    const user = JSON.parse(JSON.stringify(tempUser))
    
    // delete user.isVerified
    return {status:200, response:_.pick(user, ['_id','phone', 'firstname', 'lastname'])}
}
module.exports = {UserLogin ,CheckPhoneVerified, RequestSendSmsWrite, ConfirmCodeWithPhone , CheckToken}