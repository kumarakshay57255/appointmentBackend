const User = require('../models/user');

exports.user = async(req,res,next)=>{
    try {
        const {username,ph,email} = req.body;
        User.create({
            ph:ph,
            username:username,
            email:email
        })

    } catch (error) {
        
    }
}