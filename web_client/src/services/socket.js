import io from "socket.io-client";
import config from "../config/config";

let socket = io(config.SOCKET_HOST, {
    reconnection:true,
    reconnectionAttempts:Infinity
});



export const connectPrivateRoom=(id)=>{
    socket.emit('connect_private_room',id)
}

export const onHostOnline =(_id) =>{
    socket.on('host_online',()=>{
        if(_id)connectPrivateRoom(_id)
    })
}

socket.on('disconnect', ()=>{
    console.log('Disconnected')
})
export default socket;