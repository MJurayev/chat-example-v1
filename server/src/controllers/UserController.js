const { User, validateUser, validateUserForUpdate, checkUsernameExist, checkPhoneExist } = require('../models/Users')
const bcrypt = require('bcrypt')
const _ = require('lodash')
/*
    @body -data  ->  { username, lastname, firstname,email,... }
*/
const UserPost = async (data, isVerified) => {
    const validation =  validateUser(data)

    if (validation.error)
        return { status: 400, response: validation.error.details[0].message }

    if (data.username && await checkUsernameExist(data.username)) 
        return { status: 400, response: "Username already taken!!" }
    

    if (data.phone && await checkPhoneExist(data.phone))
        return { status: 400, response: "Phone already registered!!" }
    const user = new User({...data, isVerified:isVerified})
    const salt =await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
   
    if (!await user.save())
        return { status: 500, response: "Database Error" }
    const temp = JSON.parse(JSON.stringify(user))
    delete temp.password
    return { status: 201, response:temp }
}

/*
    @body -data  ->  { username, lastname, firstname,email,... } userObject
*/
const UserPut = async ( id,data) => {

    const validation =  validateUserForUpdate(data)
    if (validation.error)
        return { status: 400, response: validation.error.details[0].message }

    const foundUser = await User.findOne({ _id: id })
    
    if (foundUser && foundUser.username && data.username && foundUser.username != data.username && await checkUsernameExist(data.username))
        return { status: 400, response: "Username already taken!!" }

    if (foundUser && foundUser.phone && data.phone && foundUser.phone !== data.phone && await checkPhoneExist(data.phone))
        return { status: 400, response: "Phone already registered!!" }

    const updatedUser = await User.findOneAndUpdate({ _id: id }, data, { new: true })
    if (!updatedUser)
        return { status: 500, response: "Database Error!!" }

    const temp = JSON.parse(JSON.stringify(updatedUser))
    delete temp.password
    return { status: 200, response: temp }
}

const UserGetAll = async ()=>{
    const users = await User.find({})

    return {status:200, response:users}
}


const UserDelete = async (id) => {
    const user = await User.findOneAndDelete({_id:id})
    if(!user)
        return { status:404 , response:"User not found" }
    
    return { status:200 , response:user }
}

module.exports = {
    UserPost,
    UserPut,
    UserGetAll,
    UserDelete
}