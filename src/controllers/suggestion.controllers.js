const User = require("../models/user.models");
const Suggestion = require("../models/suggestion.models.js");

exports.getSuggestion = async (req, res) => {
    console.log(req.body);
    const suggestionObj = {
        name: req.body.name,
        email: req.body.email,
        suggestion: req.body.suggestion

    }
    const user = await User.findOne({
        email: suggestionObj.email
    });

    if (user) {
        const suggestionMessage = await Suggestion.create(suggestionObj);
        return res.status(201).send({
            message: "Your suggestion submitted successfully!"
        });
    }
    return res.status(400).send({
        message: `User with email ${email} is not registered yet!`
    })
};