const suggestionModels = require("../models/suggestion.models.js");
const User = require("../models/user.models.js");

const verifyUserRequestbody = async (req, res, next) => {
    const fullName = req.body.fullName;

    if (!fullName) {
        return res.status(400).send({
            message: "Please provide the name"
        });
    }

    const email = req.body.email;

    if (!email) {
        return res.status(400).send({
            message: "Please  provide email"
        });
    }

    const username = req.body.username;

    if (!username) {
        return res.status(400).send({
            message: "Please provide username"
        });
    }

    const userExits = await User.findOne({
        $or: [
            { email },
            { username }
        ]
    });

    if (userExits) {
        return res.status(400).send({
            message: `The email ${email} or usrname ${username} is already registered`
        });
    }

    const password = req.body.password;

    if (!password) {
        return res.status(400).send({
            message: "password is required"
        });
    }

    next();
}



const verifyLoginUserBody = async (req, res, next) => {
    const username = req.body.username;

    if (!username) {
        return res.status(400).send({
            message: "Please provide username"
        });
    }

    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).send({
            message: `user ${username} is not registered yet`
        });
    }

    const password = req.body.password;
    if (!password) {
        return res.status(400).send({
            message: "Please provide password"
        });
    }

    if (password != user.password) {
        return res.status(400).send({
            message: "Oops! Password is Wrong"
        });
    }

    next();


}


const verifyLoginBeforeSuggection = async (req, res, next) => {
    const name = req.body.name;

    if (!name) {
        return res.status(400).send({
            message: "Please provide name"
        });
    }

    const email = req.body.email;

    if (!email) {
        return res.status(400).send({
            message: "Please provide email"
        });
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).send({
            message: `User with email " ${email}" is not registered yet!.
            Please register first.`
        });
    }

    const suggestion = req.body.suggestion;

    if (!suggestion) {
        return res.status(400).send({
            message: "Suggestion Box cannot be Empty!"
        })
    }

    next();
}


const checkNumberOfSuggestion = async (req, res, next) => {
    const suggestions = await suggestionModels.find();
    if (suggestions.length > 2) {
        return res.status(401).send({
            message: "You can't submit more suggestion, you have reached the limilt of two suggestion"
        })
    }
    next();
}

module.exports = {
    verifyUserRequestbody: verifyUserRequestbody,
    verifyLoginUserBody: verifyLoginUserBody,
    verifyLoginBeforeSuggection: verifyLoginBeforeSuggection,
    checkNumberOfSuggestion: checkNumberOfSuggestion
}