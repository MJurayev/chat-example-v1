const { Messages } = require("../models/Messages")

const MessageGet=async (userId)=>{
    const messages = await Messages.find({
        $or:[
            {from:userId},
            {to:userId}
        ]
    }).sort({createdAt:1})
    return {status:200, response:messages}
}

const MessagePost = async (message, fromUser)=>{

    //message validate
    const tempMessage = new Messages({ ...message,from:fromUser})
    const savedMessage = await tempMessage.save()
    if(savedMessage)
        return { status:201, response:savedMessage }
}



const MessagePut = async (messageId, message, requestedUserId)=>{
    //validate

    if(!messageId)
        return { status:400, response:"messageId is not provided!!"}
    if(message.from || message.to)
        return { status:403, response:"Sender or Reciever not changed!!"} 
    if(message.createdAt || message.updatedAt || message._id || message.isRead===false)
        return { status:401, response:"Access Denied"}


    const updated = await Messages.findOneAndUpdate(
        {_id:messageId, from:requestedUserId}, message , { new:true }
    )
    // only text:"text", isRead:"bool")    file, photo, music, video, gif qo'shilishi mumkin
    if(!updated)
        return { status:404, response:"Message Not found"}
    return { status:200, response:updated}
}


const MessageDelete = async (messageId, requestedUserId)=>{
    //validate

    if(!messageId)
        return { status:400, response:"messageId is not provided!!"}

    const deleted = await Messages.findOneAndDelete({_id:messageId, from:requestedUserId})
    if(!deleted)
        return { status:404, response:"Not found"}
    return { status:200, response:deleted}
}
module.exports = { MessageGet ,MessagePost, MessagePut, MessageDelete }