const {UserPut} = require('../controllers/UserController')
const socketIO = require('socket.io')
const { setOnline, getUserRoom } = require('./emitter/Users')

const { saveMessageAndSendUser } = require('./emitter/Message')

module.exports = function (http){
    console.log('Socket working')
    const io = socketIO(http,{
        cors: { origin: '*', }
      })
    
    io.on('connection', (socket) => {
        io.emit('host_online')
        socket.on('connect_private_room', (user_id) => {
           socket.private_room = getUserRoom(user_id)
        
          socket.userId = user_id
           socket.join(socket.private_room)
           console.log(socket.rooms)
           socket.leave(socket.id)
           console.log(socket.rooms)
           setOnline(io, user_id, true)
        })
        
        
        /* Message connections */
        socket.on('send_message_request_to_server', (message)=>saveMessageAndSendUser(io, message))
        

        socket.on('disconnect', ()=>{
          setOnline(io, socket.userId, false)
        })
        
        socket.on('break_connection',  ()=>{
          setOnline(io, socket.userId, false)
          socket.disconnect()
        })
    })
}
