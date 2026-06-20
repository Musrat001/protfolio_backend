const User = require("../models/user.models");
const Suggestion = require("../models/suggestion.models.js");

exports.getSuggestion = async (req, res) => {
    const name = req.body.username;
    const username = req.body.username;
    const suggestion = req.body.suggestion;
    const user = await User.findOne({
        username
    });

    if (user) {
        const suggestionMessage = await Suggestion.create({ suggestion });
        return res.status(201).send({
            message: "Your suggestion submitted successfully!"
        });
    }
    return res.status(400).send({
        "message": "User not found "
    })
};