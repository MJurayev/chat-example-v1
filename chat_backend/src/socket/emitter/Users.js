const { UserPut } = require("../../controllers/UserController")


const getUserRoom =(user_id)=>{
    return `user_${user_id}`
  }

//data userRoom, isOnline
const setOnline =  (io,user_id, isOnline) => {
    if(!user_id)return
    UserPut(user_id, {online:isOnline}).then(user=>{
        const room = getUserRoom(user_id)
        io.emit('user_set_online_status',isOnline, user_id)
    
        console.log(room+ " send online status")
    }).catch(error=>{
        console.log(error)
    })
    
}

module.exports = {
    setOnline,
    getUserRoom
}