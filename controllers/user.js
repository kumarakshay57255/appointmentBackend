const User = require('../models/user');

exports.postUser = async(req,res)=>{
    try {
        const {username,ph,email} = req.body;
      const user = await  User.create({
            ph:ph,
            username:username,
            email:email
        })
         res.status(200).send(user).json({msg:"User created successfully"});

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

exports.deleteUser = async (req,res)=>{
    try {
         const {id} = req.params;
          User.destroy({where:{id}});
           res.sendStatus(200);
    } catch (err) {
         res.status(500).json({error:err})
    }
}