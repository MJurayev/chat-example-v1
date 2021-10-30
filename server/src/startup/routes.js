const userRoute = require('../routes/userRoute')
const authRoute = require('../routes/authRoute')
const messageRoute = require('../routes/messageRoutes')

module.exports = function (app){
    app.use('/api/users',userRoute)
    app.use('/api/auth',authRoute)
    app.use('/api/messages',messageRoute)
}