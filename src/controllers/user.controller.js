const suggestionModels = require("../models/suggestion.models.js");
const User = require("../models/user.models.js");


exports.createUser = async (req, res) => {
    console.log(req.body);

    const createdUserObject = {
        fullName: req.body.fullName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }
    const creadtedUser = await User.create(createdUserObject);
    res.status(201).send({
        message: "User Registered succesfully!"
    })
}


exports.getNumberOfSuggestionByEmail = async (req, res) => {
    console.log(req.params.email);
    const email = req.params.email;
    const suggestions = await suggestionModels.find({ email }).select({
        name: 1,
        email: 1,
        suggestion: 1,
        _id: 0
    });

    return res.status(201).send(suggestions);
};