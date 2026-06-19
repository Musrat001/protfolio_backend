const User = require("../models/user.models");


exports.getSuggestion = async (req, res)=>{
    const name = req.body.username;
    const username = req.body.username;
    const suggestion = req.body.suggestion;
    const user = await User.findOne({
        username
    });

    if(user){
        return res.status(201).send(suggestion);
    }
    return res.status(204).send({
        "message": "User not found "
    })
};