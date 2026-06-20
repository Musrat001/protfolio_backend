const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema({
    name: {
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

