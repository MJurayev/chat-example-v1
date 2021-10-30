const router = require('express').Router()

const  { UserPost , UserPut, UserGetAll, UserDelete } = require('../controllers/UserController')

router.get('/',async (req, res) => {
    try{
        const response = await UserGetAll()
        return res.status(response.status || 200).send(response.response)
    }catch(error){
        return res.status(400).send(error.message)
    }
})

router.post('/',async (req, res) => {
    try {
        const response = await UserPost(req.body)
        return res.status(response.status || 201).send(response.response)
    }catch (error){
        return res.status(400).send(error.message)
    }
    
})

router.put('/:id', async (req, res) => {
    try { 
        const response = await UserPut(req.params.id,req.body)
        return res.status(response.status || 200).send(response.response)
    }catch(error){
        res.status(400).send(error.message)
    }
})

router.delete('/:id',async (req, res) => {
    try{
        const response =await UserDelete(req.params.id)
        return res.status(response.status || 200).send(response.response)
    }catch(error){
        res.status(400).send(error.message)
    }
})

module.exports = router