const User = require("../models/user.models.js");


exports.setNewPassword = async (req, res) => {
    console.log((req.body));
    const email = req.body.email;
    const newPassword = req.body.password
    const user = await User.findOneAndUpdate(
        {
            email
        },
        {
            $set: {
                password: newPassword
            }
        },
        {
            returnDocument: "after"

        }
    )
    res.status(201).json({
        message: "Password Updated Succesfully"
    })
}