const { UserPost } = require('../controllers/UserController')
const { UserLogin, RequestSendSmsWrite, ConfirmCodeWithPhone , CheckToken, CheckPhoneVerified} = require('../controllers/AuthController')
const sendSMS = require('../services/sendSms')
const auth = require('../middleware/auth')
const router = require('express').Router()

router.post('/sign-up', async (req, res) => {
    try{
        const isVerified = await CheckPhoneVerified(req.body.phone)
        if(isVerified.status !== 200)
            return res.status(isVerified.status).send(isVerified.response)
        
        const user = await UserPost(req.body, true)
        res.status(user.status).send(user.response)
    }catch(error){
        return res.status(400).send(error.message)
    }
})
router.post('/request-send-sms', async(req, res) => {
    try{
        const { phone } = req.body
        const response = await RequestSendSmsWrite(phone)
        return res.status(response.status).send(response.response)
    }catch(error){
        res.status(400).send(error.message)
    }
})

router.post('/confirm', async (req, res) => {
    try{
        const response = await ConfirmCodeWithPhone(req.body)
        return res.status(response.status).send(response.response)
    }catch(error){
        return res.status(400).send(error.message)
    }
})

router.post('/login', async (req, res) => {
    try{
        const user = await UserLogin(req.body)
        
        res.status(user.status).header('x-auth-token', user.response).send({token:user.response})
    }catch(error){
        return res.status(400).send(error.message)
    }
})
//req. user headerdagi x-auth-token dan decode qilinib olinadi
router.get('/check-user', auth, async (req, res) => {
    try{
        const response = await CheckToken(req.user)
        return res.status(response.status).send(response.response)
    }catch(error){
        res.status(400).send(error.message)
    }
})
module.exports = router