const { MessagePost } = require("../../controllers/MessageController")
const { getUserRoom } = require("./Users")

const saveMessageAndSendUser=(io, message)=>{
        const { text, from , to } = message
        const roomReciever = getUserRoom(to)
        const roomSender = getUserRoom(from)
        MessagePost({to, text},from).then(res =>{
            if(res.status === 201){
                io.to(roomReciever).emit("send_message_request_to_client", res.response)
                io.to(roomSender).emit("send_message_request_to_client", res.response)

                console.log("room:",roomSender)
                console.log("message:",res.response)}
            else 
                throw Error(res.response)
        }).catch(err=>{
            io.to(roomSender).emit("send_message_error", err)
        })
        // 
        
        // io.to(room).emit("send_message_request_to_client", response)

    
}

module.exports = {saveMessageAndSendUser}