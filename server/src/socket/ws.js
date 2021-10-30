const WebSocketServer = require('ws').Server 
module.exports = function (http){
    
    wss = new WebSocketServer({server:http});
    let connections = {}
    wss.on('connection', function connection(ws) {

        ws.on('message', function incoming(message) {
            const data = JSON.parse(message)
            switch(data.type){
                case 'implement_id': 
                    ws.id = data.data._id;
                    connections[ws.id] = ws;
                    ws.send(`Success full connected to ${ws.id}`)
                    console.log(`Success full connected to ${ws.id}`)
                    break;
                case 'send_message':
                    connections[data.data._id].send('salom'); break;
            }
            console.log(connections)

        })

        ws.on('close', function () {
          
          console.log('deleted')
        })
      })
}
