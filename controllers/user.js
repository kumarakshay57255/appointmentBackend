const User = require('../models/user');

exports.postUser = async(req,res)=>{
    try {
        const {username,ph,email} = req.body;
       await  User.create({
            ph:ph,
            username:username,
            email:email
        })
        res.status(200).json({msg:"User created successfully"});

    } catch (error) {
       res.status(500).json({msg:"User not created",error});
    }
}

exports.getUser  = async (req,res)=>{
    try {
        const users = await User.findAll();
        res.status(200).json({alluser:users});
    } catch (err) {
          res.status(500).json({error:err});
    }
}