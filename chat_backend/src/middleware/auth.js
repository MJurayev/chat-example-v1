const jwt = require('jsonwebtoken')
const { User } = require('../models/Users')
module.exports = function auth  (req, res , next){
    const token = req.header('x-auth-token')
    if(!token)
        return res.status(401).send("Token not found")
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        User.findOne({_id:decoded._id, phone:decoded.phone}).then(user=>{
            console.log('Middleware', decoded._id)
            req.user = decoded;
            next();
        }).catch(err=>{
            return res.status(403).send('ForbiddenAccess')
        })
    }
    catch (ex) {
        return res.status(400).send('Yaroqsiz token');
    }
     

}