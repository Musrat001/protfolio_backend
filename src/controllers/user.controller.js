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