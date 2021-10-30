const express = require('express')

const app = express()
const http = require('http').Server(app)
const cors = require('cors')
const path = require('path')
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//startup packages
require('dotenv').config()
require('./src/startup/db') 
require('./src/startup/routes')(app)

//front-end application
// if (process.env.NODE_ENV === 'development') {
  // app.use(express.static('client'))
  
  // app.get(new RegExp('^(?!/api)/?'), (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
  // })
// }


const port = process.env.PORT || 8000 
http.listen(port,()=>{
  console.log(`${port} - portda dastur ishlayapti....`)
})
require('./src/socket/socket')(http)