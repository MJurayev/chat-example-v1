const router = require('express').Router()
const { MessageGet, MessagePost, MessagePut, MessageDelete } = require('../controllers/MessageController')
const auth = require('../middleware/auth')

router.use(auth)
router.get('/',async (req, res) => {
    try{
        
    const response =await MessageGet(req.user._id)
    return res.status(response.status).send(response.response)
    }catch(error){
        return res.status(400).send("Something went wrong!")
    }

})


router.post('/',async (req, res) => {
    try{
        const response =await MessagePost(req.body,req.user._id)
    
        return res.status(response.status).send(response.response)
    }catch(error){
        return res.status(400).send("Something went wrong!")
    }

})

router.put('/:messageId',async (req, res) => {
    try{
        const { messageId }= req.params
        const response =await MessagePut(messageId, req.body, req.user._id)
        return res.status(response.status).send(response.response)
    }catch(error){
        console.log(error)
        return res.status(400).send("Something went wrong!")
    }
})

router.delete('/:messageId', async (req,res) => {
    try{
        const { messageId }= req.params
        const response =await MessageDelete(messageId, req.user._id)
        return res.status(response.status).send(response.response)
    }catch(error){
        return res.status(400).send("Something went wrong!")
    }
})
module.exports = router