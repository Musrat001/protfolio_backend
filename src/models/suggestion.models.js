const mongoose = require("mongoose");

const suggectionScema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    suggestion: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("SuggestionSchema", suggestionSchema);

