const User = require("../models/user.models.js");

const verifyUserRequestbody = (req, res, next) => {
    const fullName = req.body.fullName;

    if (!fullName) {
        return res.status(400).send({
            message: "Please provide the name"
        })
    }

    const email = req.body.email;

    if (!email) {
        return res.status(400).send({
            message: "Please  provide email"
        })
    }

    const username = req.body.username;

    if (!username) {
        return res.status(400).send({
            message: "Please provide username"
        })
    }

    const password = req.body.password;

    if (!password) {
        return res.status(400).send({
            message: "password is required"
        })
    }

    next();
}



const verifyLoginUserBody = async (req, res, next) => {
    const username = req.body.username;

    if (!username) {
        return res.status(400).send({
            message: "Please provide username"
        })
    }

    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).send({
            message: `user ${username} is not registered yet`
        })
    }

    const password = req.body.password;
    if(!password){
        return res.status(400).send({
            message: "Please provide password"
        })
    }

    if (password != user.password) {
        return res.status(400).send({
            message: "Oops! Password is Wrong"
        })
    }

    next();


}


const verifyLoginBeforeSuggection = async(req, res, next)=>{
    const name = req.body.name;

    if(!name){
        return res.status(400).send({
            message: "Please enter name"
        })
    }

    const username = req.body.username;

    if(!username){
        return res.status(400).send({
            message: "Please provide username"
        })
    }

    const user = await User.findOne({username});

    if(!user){
        return res.status(400).send({
            message: `User with username ${username} is not registered yet!`
        })
    }

    const suggestion = req.body.suggestion;

    if(!suggestion){
        return res.status(400).send({
            message: "Suggestion Box cannot be Empty!"
        })
    }

    next();
}

module.exports = {
    verifyUserRequestbody: verifyUserRequestbody,
    verifyLoginUserBody: verifyLoginUserBody,
    verifyLoginBeforeSuggection: verifyLoginBeforeSuggection
}